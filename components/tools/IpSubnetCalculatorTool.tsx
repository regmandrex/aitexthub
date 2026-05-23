"use client";

import { useState } from 'react';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

function ipToInt(ip: string): number {
  return ip.split('.').reduce((acc, octet) => (acc << 8) | parseInt(octet, 10), 0) >>> 0;
}

function intToIp(n: number): string {
  return [(n >>> 24) & 0xff, (n >>> 16) & 0xff, (n >>> 8) & 0xff, n & 0xff].join('.');
}

function subnetMaskFromPrefix(prefix: number): number {
  return prefix === 0 ? 0 : (0xffffffff << (32 - prefix)) >>> 0;
}

function toBinaryOctets(n: number): string {
  return [(n >>> 24) & 0xff, (n >>> 16) & 0xff, (n >>> 8) & 0xff, n & 0xff]
    .map((o) => o.toString(2).padStart(8, '0'))
    .join('.');
}

function ipClass(firstOctet: number): string {
  if (firstOctet < 128) return 'A';
  if (firstOctet < 192) return 'B';
  if (firstOctet < 224) return 'C';
  if (firstOctet < 240) return 'D (Multicast)';
  return 'E (Reserved)';
}

function isValidIp(ip: string): boolean {
  const parts = ip.split('.');
  if (parts.length !== 4) return false;
  return parts.every((p) => {
    const n = parseInt(p, 10);
    return !isNaN(n) && n >= 0 && n <= 255 && String(n) === p;
  });
}

type Result = {
  networkAddress: string;
  broadcastAddress: string;
  firstUsable: string;
  lastUsable: string;
  totalHosts: number;
  usableHosts: number;
  subnetMask: string;
  wildcardMask: string;
  binarySubnetMask: string;
  ipClassLabel: string;
  cidr: number;
  inputIp: string;
};

const CIDR_TABLE: { prefix: number; hosts: number; usable: number; mask: string }[] = Array.from(
  { length: 25 },
  (_, i) => {
    const prefix = 8 + i;
    const mask = subnetMaskFromPrefix(prefix);
    const total = Math.pow(2, 32 - prefix);
    const usable = prefix <= 30 ? Math.max(0, total - 2) : prefix === 31 ? 2 : 1;
    return {
      prefix,
      hosts: total,
      usable,
      mask: intToIp(mask),
    };
  }
);

export function IpSubnetCalculatorTool() {
  const [ipInput, setIpInput] = useState('192.168.1.0');
  const [cidr, setCidr] = useState(24);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState('');

  const calculate = () => {
    setError('');
    const ip = ipInput.trim();
    if (!isValidIp(ip)) {
      setError('Invalid IP address. Please enter a valid IPv4 address (e.g. 192.168.1.0).');
      setResult(null);
      return;
    }

    const ipInt = ipToInt(ip);
    const mask = subnetMaskFromPrefix(cidr);
    const wildcard = (~mask) >>> 0;
    const network = (ipInt & mask) >>> 0;
    const broadcast = (network | wildcard) >>> 0;

    const total = Math.pow(2, 32 - cidr);
    const usable = cidr <= 30 ? Math.max(0, total - 2) : cidr === 31 ? 2 : 1;

    const firstUsable =
      cidr <= 30 ? intToIp(network + 1) : intToIp(network);
    const lastUsable =
      cidr <= 30 ? intToIp(broadcast - 1) : intToIp(broadcast);

    const firstOctet = (ipInt >>> 24) & 0xff;

    setResult({
      networkAddress: intToIp(network),
      broadcastAddress: intToIp(broadcast),
      firstUsable,
      lastUsable,
      totalHosts: total,
      usableHosts: usable,
      subnetMask: intToIp(mask),
      wildcardMask: intToIp(wildcard),
      binarySubnetMask: toBinaryOctets(mask),
      ipClassLabel: ipClass(firstOctet),
      cidr,
      inputIp: ip,
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') calculate();
  };

  return (
    <div className="space-y-6">
      {/* Inputs */}
      <div className="flex flex-wrap gap-4 items-end">
        <div className="space-y-1 flex-1 min-w-[160px]">
          <label className="text-sm font-semibold text-slate-800">IP Address</label>
          <input
            type="text"
            value={ipInput}
            onChange={(e) => setIpInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="192.168.1.0"
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 shadow-sm outline-none transition focus:border-brand-300 focus:ring-2 focus:ring-brand-100"
          />
        </div>
        <div className="space-y-1 w-36">
          <label className="text-sm font-semibold text-slate-800">CIDR Prefix</label>
          <select
            value={cidr}
            onChange={(e) => setCidr(Number(e.target.value))}
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 shadow-sm outline-none transition focus:border-brand-300 focus:ring-2 focus:ring-brand-100"
          >
            {Array.from({ length: 33 }, (_, i) => (
              <option key={i} value={i}>/{i}</option>
            ))}
          </select>
        </div>
        <button
          type="button"
          onClick={calculate}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-brand-800"
        >
          Calculate
        </button>
      </div>

      {error && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
      )}

      {/* Results */}
      {result && (
        <div className="space-y-4">
          <h3 className="text-base font-semibold text-slate-800">
            Results for {result.inputIp}/{result.cidr}
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { label: 'Network Address', value: result.networkAddress },
              { label: 'Broadcast Address', value: result.broadcastAddress },
              { label: 'First Usable IP', value: result.firstUsable },
              { label: 'Last Usable IP', value: result.lastUsable },
              { label: 'Total Hosts', value: result.totalHosts.toLocaleString() },
              { label: 'Usable Hosts', value: result.usableHosts.toLocaleString() },
              { label: 'Subnet Mask', value: result.subnetMask },
              { label: 'Wildcard Mask', value: result.wildcardMask },
              { label: 'IP Class', value: result.ipClassLabel },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
              >
                <span className="text-sm font-medium text-slate-600">{label}</span>
                <span className="text-sm font-semibold text-slate-900 font-mono">{value}</span>
              </div>
            ))}
            <div className="sm:col-span-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 space-y-1">
              <span className="text-sm font-medium text-slate-600">Binary Subnet Mask</span>
              <p className="text-sm font-semibold text-slate-900 font-mono break-all">{result.binarySubnetMask}</p>
            </div>
          </div>
        </div>
      )}

      {/* CIDR Reference Table */}
      <div className="space-y-2">
        <h3 className="text-base font-semibold text-slate-800">CIDR Reference Table (/8 – /32)</h3>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-100 text-slate-700">
                <th className="px-4 py-2 text-left font-semibold">CIDR</th>
                <th className="px-4 py-2 text-left font-semibold">Subnet Mask</th>
                <th className="px-4 py-2 text-right font-semibold">Total Hosts</th>
                <th className="px-4 py-2 text-right font-semibold">Usable Hosts</th>
              </tr>
            </thead>
            <tbody>
              {CIDR_TABLE.map(({ prefix, hosts, usable, mask }, idx) => (
                <tr
                  key={prefix}
                  className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                >
                  <td className="px-4 py-2 font-mono font-semibold text-brand-700">/{prefix}</td>
                  <td className="px-4 py-2 font-mono text-slate-800">{mask}</td>
                  <td className="px-4 py-2 text-right text-slate-700">{hosts.toLocaleString()}</td>
                  <td className="px-4 py-2 text-right text-slate-700">{usable.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
