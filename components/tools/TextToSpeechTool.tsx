"use client";

import { useState, useEffect, useRef, useCallback, useSyncExternalStore } from 'react';
import ToolTextArea from './ToolTextArea';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

const emptySubscribe = () => () => {};

export function TextToSpeechTool() {
  const [text, setText] = useState('');
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState('');
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [volume, setVolume] = useState(1);
  // true during SSR (assume supported), real browser capability after hydration
  const isSupported = useSyncExternalStore(
    emptySubscribe,
    () => typeof window.speechSynthesis !== 'undefined',
    () => true,
  );
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const charCount = text.length;
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  // Average reading speed ~150 wpm for TTS
  const estimatedSeconds = Math.ceil((wordCount / 150) * 60 * (1 / rate));
  const estimatedTime =
    wordCount === 0
      ? '0 sec'
      : estimatedSeconds < 60
      ? `${estimatedSeconds} sec`
      : `${Math.floor(estimatedSeconds / 60)}m ${estimatedSeconds % 60}s`;

  const loadVoices = useCallback(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    const available = window.speechSynthesis.getVoices();
    if (available.length > 0) {
      setVoices(available);
      if (!selectedVoice) {
        const englishVoice = available.find((v) => v.lang.startsWith('en'));
        setSelectedVoice(englishVoice ? englishVoice.name : available[0].name);
      }
    }
  }, [selectedVoice]);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    let active = true;
    queueMicrotask(() => { if (active) loadVoices(); });
    window.speechSynthesis.onvoiceschanged = loadVoices;
    return () => {
      active = false;
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, [loadVoices]);

  const handleSpeak = () => {
    if (!window.speechSynthesis || !text.trim()) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    const voice = voices.find((v) => v.name === selectedVoice);
    if (voice) utterance.voice = voice;
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = volume;

    utterance.onstart = () => {
      setIsSpeaking(true);
      setIsPaused(false);
    };
    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };
    utterance.onerror = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const handlePause = () => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.pause();
    setIsPaused(true);
  };

  const handleResume = () => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.resume();
    setIsPaused(false);
  };

  const handleStop = () => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
  };

  if (!isSupported) {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-800">
        <strong>Browser not supported.</strong> Your browser does not support the Web Speech API. Please try a modern browser such as Chrome, Edge, or Safari to use this text-to-speech tool.
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <ToolTextArea
        label="Enter text to speak"
        value={text}
        onChange={setText}
        placeholder="Paste or type text here and click Speak to hear it read aloud..."
        rows={8}
        helperText={`${charCount.toLocaleString()} chars · ${wordCount.toLocaleString()} words · ~${estimatedTime}`}
      />

      {/* Voice Selector */}
      <div className="space-y-1">
        <label className="text-sm font-semibold text-slate-800">Voice</label>
        <select
          className="w-full rounded-xl border-3 border-black bg-white px-3 py-2 text-sm text-slate-800 shadow-neo-sm outline-none focus:border-brand-300 focus:ring-2 focus:ring-brand-100"
          value={selectedVoice}
          onChange={(e) => setSelectedVoice(e.target.value)}
        >
          {voices.length === 0 && (
            <option value="">Loading voices...</option>
          )}
          {voices.map((v) => (
            <option key={v.name} value={v.name}>
              {v.name} ({v.lang})
            </option>
          ))}
        </select>
      </div>

      {/* Sliders */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="space-y-1">
          <label className="text-sm font-semibold text-slate-800">
            Speed: <span className="text-brand-700">{rate.toFixed(1)}x</span>
          </label>
          <input
            type="range"
            min={0.5}
            max={2}
            step={0.1}
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value))}
            className="w-full accent-brand-700"
          />
          <div className="flex justify-between text-xs text-slate-400">
            <span>0.5x</span><span>2x</span>
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-sm font-semibold text-slate-800">
            Pitch: <span className="text-brand-700">{pitch.toFixed(1)}</span>
          </label>
          <input
            type="range"
            min={0.5}
            max={2}
            step={0.1}
            value={pitch}
            onChange={(e) => setPitch(parseFloat(e.target.value))}
            className="w-full accent-brand-700"
          />
          <div className="flex justify-between text-xs text-slate-400">
            <span>0.5</span><span>2.0</span>
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-sm font-semibold text-slate-800">
            Volume: <span className="text-brand-700">{Math.round(volume * 100)}%</span>
          </label>
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-full accent-brand-700"
          />
          <div className="flex justify-between text-xs text-slate-400">
            <span>0%</span><span>100%</span>
          </div>
        </div>
      </div>

      {/* Status indicator */}
      {isSpeaking && (
        <div className="flex items-center gap-2 text-sm text-brand-700 font-semibold">
          <span className="inline-block h-2 w-2 rounded-full bg-brand-500 animate-pulse" />
          {isPaused ? 'Paused' : 'Speaking...'}
        </div>
      )}

      {/* Buttons */}
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleSpeak}
          disabled={!text.trim()}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Speak
        </button>
        <button
          type="button"
          onClick={handlePause}
          disabled={!isSpeaking || isPaused}
          className="inline-flex items-center justify-center rounded-lg border-3 border-black bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Pause
        </button>
        <button
          type="button"
          onClick={handleResume}
          disabled={!isPaused}
          className="inline-flex items-center justify-center rounded-lg border-3 border-black bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Resume
        </button>
        <button
          type="button"
          onClick={handleStop}
          disabled={!isSpeaking && !isPaused}
          className="inline-flex items-center justify-center rounded-lg border-3 border-black bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Stop
        </button>
      </div>
    </div>
  );
}
