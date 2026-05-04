import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { IpSubnetCalculatorTool } from '@/components/tools/IpSubnetCalculatorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { getToolBySlug } from '@/lib/tools/registry';
import { siteUrl } from '@/lib/seo/url';
import { webPageSchema } from '@/lib/schema/webpage';

export const revalidate = 604800;
const toolSlug = 'ip-subnet-calculator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta(toolSlug);
}

const faqs: FaqItem[] = [
  {
    category: 'Basics',
    question: 'What is an IP subnet calculator and what does it do?',
    answer: `An IP subnet calculator is an online tool that takes an IP address and a subnet mask (or CIDR prefix length) and automatically computes all the network parameters you need for planning, configuring, or troubleshooting TCP/IP networks. Instead of manually performing binary arithmetic to find network and broadcast addresses, the calculator does the heavy lifting instantly. When you enter a value like 192.168.1.100/24, the tool returns the network address (192.168.1.0), broadcast address (192.168.1.255), first usable host (192.168.1.1), last usable host (192.168.1.254), total number of addresses (256), usable host count (254), subnet mask in dotted-decimal notation (255.255.255.0), wildcard mask (0.0.0.255), and the IP class. This information is essential for network engineers, system administrators, students studying for certifications like CompTIA Network+ or Cisco CCNA, and developers building networked applications.`,
  },
  {
    category: 'Basics',
    question: 'What is CIDR notation and how do I use it in the subnet calculator?',
    answer: `CIDR stands for Classless Inter-Domain Routing. In CIDR notation, an IP address is followed by a slash and a number (the prefix length) that indicates how many bits of the address represent the network portion. For example, 10.0.0.0/8 means the first 8 bits identify the network, and the remaining 24 bits identify hosts — giving you about 16 million host addresses. Common CIDR values include /8 (Class A equivalent), /16 (Class B equivalent), /24 (Class C equivalent, used in most home and small office networks), and /32 (a single host). To use the subnet calculator, simply type your IP address in the input field and enter the prefix length between 0 and 32. The tool instantly converts the CIDR notation to all the subnet details you need, including the dotted-decimal subnet mask, network address, broadcast address, and usable host range.`,
  },
  {
    category: 'Basics',
    question: 'What is the difference between a network address and a broadcast address?',
    answer: `In any subnet, the network address is the very first address in the range — it identifies the subnet itself and cannot be assigned to any host. The broadcast address is the very last address in the range — packets sent to it are delivered to all hosts on the subnet simultaneously. Neither address is usable by individual devices. For example, in the subnet 192.168.10.0/24, the network address is 192.168.10.0 and the broadcast address is 192.168.10.255. The 254 addresses in between (192.168.10.1 through 192.168.10.254) are the usable host addresses you can assign to computers, routers, printers, and other network devices. Understanding this distinction is fundamental when configuring routers, firewalls, and DHCP pools, because accidentally assigning the network or broadcast address to a device causes connectivity failures.`,
  },
  {
    category: 'Subnetting',
    question: 'How do I calculate the number of usable hosts in a subnet?',
    answer: `The formula for usable hosts is 2^(host bits) - 2. You subtract 2 to account for the network address and broadcast address, which cannot be assigned to devices. Host bits are the bits NOT used by the network prefix. So for a /24 subnet, you have 32 - 24 = 8 host bits, giving 2^8 - 2 = 256 - 2 = 254 usable hosts. For a /26 subnet: 32 - 26 = 6 host bits, so 2^6 - 2 = 64 - 2 = 62 usable hosts. For a /30 subnet (commonly used for point-to-point links): 32 - 30 = 2 host bits, so 2^2 - 2 = 4 - 2 = 2 usable hosts — exactly one per end of a point-to-point link. A /31 subnet is a special case defined in RFC 3021 for point-to-point links with no network or broadcast addresses, giving 2 usable hosts. A /32 represents a single host.`,
  },
  {
    category: 'Subnetting',
    question: 'What is a subnet mask and how does it relate to CIDR prefix length?',
    answer: `A subnet mask is a 32-bit number that separates the network portion of an IP address from the host portion. In dotted-decimal notation, it looks like an IP address — common examples are 255.0.0.0, 255.255.0.0, and 255.255.255.0. The mask works by having all network bits set to 1 and all host bits set to 0. In binary, 255.255.255.0 is 11111111.11111111.11111111.00000000. Count the 1-bits and you get the CIDR prefix length: in this case, 24. So /24 and 255.255.255.0 are equivalent. The IP subnet calculator accepts either format and converts between them automatically. When you configure a network interface, you may need to enter the dotted-decimal subnet mask rather than the CIDR prefix, so being able to convert between the two is a practical skill for any network professional.`,
  },
  {
    category: 'Subnetting',
    question: 'What is a wildcard mask and when would I use it?',
    answer: `A wildcard mask is the bitwise inverse of the subnet mask. Where the subnet mask has 1-bits indicating network bits and 0-bits indicating host bits, the wildcard mask has 0-bits for network bits and 1-bits for host bits. For example, the subnet mask 255.255.255.0 has the wildcard mask 0.0.0.255. Wildcard masks are used in access control lists (ACLs) on Cisco routers and firewalls, and in OSPF configurations to specify which interfaces should participate in routing. In ACL syntax, a 0-bit means "match this bit exactly" and a 1-bit means "ignore this bit." So a wildcard of 0.0.0.255 applied to 192.168.1.0 matches any address in the 192.168.1.0/24 subnet. Our IP subnet calculator displays the wildcard mask alongside the subnet mask for every calculation, saving you the mental arithmetic of computing the inverse.`,
  },
  {
    category: 'Subnetting',
    question: 'What are IP address classes and how do they affect subnetting?',
    answer: `IP address classes were the original method of allocating IPv4 address space before CIDR was introduced. Class A addresses range from 1.0.0.0 to 126.0.0.0 with a default subnet mask of /8, providing 126 networks with over 16 million hosts each. Class B addresses range from 128.0.0.0 to 191.255.0.0 with a default /16 mask, giving 16,384 networks with 65,534 hosts each. Class C addresses range from 192.0.0.0 to 223.255.255.0 with a default /24 mask, providing over 2 million networks with 254 hosts each. Class D (224.0.0.0–239.255.255.255) is reserved for multicast, and Class E (240.0.0.0–255.255.255.255) is reserved for experimental use. Today, classful addressing has been replaced by CIDR, which allows arbitrary prefix lengths regardless of the first octet. However, the class designation still appears in subnet calculator output and is useful context for understanding routing behavior.`,
  },
  {
    category: 'Subnetting',
    question: 'How do I subnet a network into smaller subnets using the calculator?',
    answer: `Variable Length Subnet Masking (VLSM) lets you divide a large network block into subnets of different sizes. To subnet, start with your parent network (e.g., 192.168.1.0/24) and decide how many subnets and hosts per subnet you need. If you need four subnets with 50 hosts each, calculate the minimum prefix: 2^6 = 64 addresses per subnet (covering 50 hosts plus network/broadcast), so use /26. Your four /26 subnets would be 192.168.1.0/26, 192.168.1.64/26, 192.168.1.128/26, and 192.168.1.192/26. Use our calculator to verify each: enter 192.168.1.0/26 to see its range is .0 to .63 with 62 usable hosts, then 192.168.1.64/26 for .64 to .127, and so on. This approach maximizes efficient use of your address space by tailoring each subnet's size to its actual requirements.`,
  },
  {
    category: 'Private Networks',
    question: 'What are private IP address ranges and which ones are commonly used?',
    answer: `RFC 1918 defines three ranges of private IP addresses that are not routable on the public internet and are reserved for use within private networks. The Class A private range is 10.0.0.0 to 10.255.255.255 (/8), providing over 16 million addresses — used by large enterprises and cloud providers for internal networks. The Class B private range is 172.16.0.0 to 172.31.255.255 (/12), providing about 1 million addresses — commonly used by medium-sized organizations and Docker's default bridge network. The Class C private range is 192.168.0.0 to 192.168.255.255 (/16), providing 65,536 addresses — the most familiar range, used in home routers and small office networks (typically 192.168.0.0/24 or 192.168.1.0/24). There is also 169.254.0.0/16 (APIPA, link-local) used when DHCP fails, and 127.0.0.0/8 for loopback. Our subnet calculator works with all of these ranges.`,
  },
  {
    category: 'Private Networks',
    question: 'What is the difference between 192.168.0.0/24 and 192.168.0.0/16?',
    answer: `Both are private IP ranges but with very different sizes. 192.168.0.0/24 is a single small subnet containing 256 addresses (254 usable hosts) — this is what most home routers create by default. Your devices get addresses like 192.168.0.1 through 192.168.0.254. 192.168.0.0/16 is a much larger block covering all addresses from 192.168.0.0 to 192.168.255.255 — a total of 65,536 addresses (65,534 usable). This larger block is typically used as a supernet when an organization wants to manage all 192.168.x.x addresses as a single allocation, then subnet it as needed. You would not normally see a single network configured as /16 unless intentionally managing a large private address space. Enter both into our subnet calculator to clearly see the difference in network range, broadcast address, and host count.`,
  },
  {
    category: 'Practical Use',
    question: 'How do I find my subnet mask on Windows, Mac, and Linux?',
    answer: `On Windows, open Command Prompt and type ipconfig. Look for your network adapter and find the "Subnet Mask" field, which shows the dotted-decimal mask like 255.255.255.0. You can also use ipconfig /all for full details. On macOS, open Terminal and run ifconfig or ip addr. Look for your active interface (usually en0 for Wi-Fi) and find the "netmask" value in hexadecimal — 0xffffff00 equals 255.255.255.0. Alternatively, go to System Settings > Network > your connection > Details for a GUI view. On Linux, run ip addr show or ifconfig -a. Your IP will appear with the CIDR prefix directly (e.g., 192.168.1.10/24). You can also check /etc/network/interfaces or your NetworkManager configuration. Once you have your IP and subnet mask, enter them into the subnet calculator to see your full network parameters.`,
  },
  {
    category: 'Practical Use',
    question: 'How many hosts can I have on a /24, /23, /22, and /20 network?',
    answer: `Here is a quick reference for common subnet sizes: A /24 network has 256 total addresses and 254 usable hosts — the most common size for small networks. A /23 network combines two /24 blocks, giving 512 total addresses and 510 usable hosts — handy when you outgrow a /24. A /22 combines four /24 blocks: 1,024 total addresses and 1,022 usable hosts — common for medium office floors or VLANs. A /21 gives 2,048 total and 2,046 usable. A /20 gives 4,096 total and 4,094 usable hosts — used by larger enterprise segments. A /18 gives 16,384 total and 16,382 usable. A /16 gives 65,536 total and 65,534 usable — commonly used as a VPC or supernet. Each step down in CIDR prefix (from /24 to /23 to /22) doubles the number of hosts. Our calculator shows all these values instantly for any IP and prefix you enter.`,
  },
  {
    category: 'Practical Use',
    question: 'What is a /30 subnet and why is it commonly used for point-to-point links?',
    answer: `A /30 subnet contains exactly 4 IP addresses: 1 network address, 1 broadcast address, and 2 usable host addresses. This makes it the perfect size for a point-to-point link between two routers, where you need exactly one IP for each end of the link and nothing more. Using a /30 instead of a /24 for a router-to-router link conserves IP address space — you waste only 2 addresses (network and broadcast) instead of 252. For example, a WAN link might be configured as 10.10.10.0/30, with 10.10.10.1 assigned to one router interface and 10.10.10.2 assigned to the other. RFC 3021 introduced /31 subnets as an even more efficient option for point-to-point links (no network or broadcast addresses — both addresses are usable), but /30 remains the traditional and more widely supported choice. Enter any /30 address into our calculator to see its exact two usable host addresses.`,
  },
  {
    category: 'IPv6',
    question: 'Does the IP subnet calculator support IPv6?',
    answer: `The current version of this calculator focuses on IPv4 subnetting, which covers the vast majority of practical subnetting questions for CIDR planning, CCNA exam preparation, and enterprise network design. IPv6 subnetting follows different conventions — it uses 128-bit addresses in hexadecimal notation and almost always allocates /64 prefixes to individual network segments (leaving 64 bits for interface identifiers). IPv6 does not have broadcast addresses; instead it uses multicast and anycast. For IPv6 calculations, the key values are the network prefix, the first and last address in the prefix, and the number of possible interface addresses (2^64 for a /64, which is 18 quintillion). Most IPv6 subnet planning tools handle prefix lengths from /32 (typically assigned to ISPs) down to /128 (a single host). IPv6 support may be added in a future update.`,
  },
  {
    category: 'Networking Concepts',
    question: 'What is the difference between a router and a switch in the context of subnets?',
    answer: `Switches operate at Layer 2 (Data Link layer) and forward frames based on MAC addresses within a single broadcast domain, which typically corresponds to a single subnet. All devices connected to the same switch (without VLANs) share the same subnet. Routers operate at Layer 3 (Network layer) and forward packets between different subnets based on IP addresses. Every interface on a router belongs to a different subnet, and the router maintains a routing table to direct traffic between them. So if you have three subnets — 192.168.1.0/24, 192.168.2.0/24, and 10.0.0.0/8 — you need a router (or Layer 3 switch) to move packets between them. Hosts within the same subnet communicate directly; hosts on different subnets must send packets to their default gateway (the router), which then forwards them to the correct destination subnet.`,
  },
  {
    category: 'Networking Concepts',
    question: 'What is NAT and how does it relate to subnets?',
    answer: `Network Address Translation (NAT) allows multiple devices on a private subnet to share a single public IP address when accessing the internet. A router performing NAT rewrites the source IP address of outgoing packets from the private (RFC 1918) address to its public IP, and keeps a translation table to match return traffic back to the correct private host. For example, devices on 192.168.1.0/24 might all appear as a single public IP (say, 203.0.113.1) to external servers. NAT was developed as a workaround for IPv4 address exhaustion and has become ubiquitous in home, office, and cloud environments. Understanding your private subnet is important for configuring NAT rules — you need to know the network range to write ACLs that specify which addresses should be translated. Port Address Translation (PAT), also called "overload," is the most common form and uses unique port numbers to track multiple simultaneous connections.`,
  },
  {
    category: 'Networking Concepts',
    question: 'What is a VLAN and how does it interact with IP subnets?',
    answer: `A VLAN (Virtual Local Area Network) is a logical partition of a physical switch into multiple isolated broadcast domains. Each VLAN typically corresponds to its own IP subnet. For example, a company might create VLAN 10 for the HR department with subnet 10.10.10.0/24, VLAN 20 for Engineering with 10.10.20.0/24, and VLAN 30 for Guest Wi-Fi with 172.16.0.0/24. Traffic between VLANs must pass through a router or Layer 3 switch (inter-VLAN routing). This architecture provides security isolation (HR computers cannot directly communicate with Guest traffic), broadcast containment (reducing unnecessary traffic on each segment), and organizational clarity. When planning VLANs, the subnet calculator helps you allocate appropriately sized subnets for each department — a small 5-person team might need only a /28 (14 hosts), while a large department might need a /22 or /21.`,
  },
  {
    category: 'Certification Prep',
    question: 'How is subnetting tested on the CCNA and Network+ exams?',
    answer: `Subnetting is a core topic on both the Cisco CCNA (200-301) and CompTIA Network+ (N10-008/N10-009) exams. For CCNA, you are expected to perform subnetting calculations mentally or by hand without a calculator — speed matters because you have limited time per question. Common question types include: "Given 172.16.0.0/12, how many subnets and hosts are available?", "What is the network address for host 10.5.17.43/21?", "Which subnet does 192.168.100.200/26 belong to?", and "How many /27 subnets can you create from a /24?". For Network+, subnetting is tested with multiple-choice questions and performance-based items. Recommended study approach: memorize the powers of 2 (2^1=2 through 2^8=256), practice the "magic number" method for quick subnet calculations, and use our calculator to verify your manual calculations until you build confidence. The binary subnet mask method is thorough but slower; the shortcut methods are essential for exam speed.`,
  },
  {
    category: 'Certification Prep',
    question: 'What is the "magic number" method for quick subnetting?',
    answer: `The magic number method lets you quickly identify subnet boundaries without converting to binary. Subtract the interesting octet of the subnet mask from 256 to get the "magic number" (block size). Then list multiples of that number to find subnet boundaries. Example: for 192.168.1.0/27 (subnet mask 255.255.255.224), the interesting octet is 224. Magic number = 256 - 224 = 32. Subnets start at multiples of 32: .0, .32, .64, .96, .128, .160, .192, .224. To find which subnet 192.168.1.100 belongs to: 100 / 32 = 3.125, floor to 3, multiply back: 3 × 32 = 96. So the network is 192.168.1.96/27, broadcast is 192.168.1.127, usable hosts are .97 through .126. This method works for any CIDR prefix and is much faster than full binary conversion once you practice it. Use our calculator to verify your magic number answers until the method becomes second nature.`,
  },
  {
    category: 'Cloud Networking',
    question: 'How are subnets used in AWS VPCs and cloud networking?',
    answer: `In AWS, every Virtual Private Cloud (VPC) is defined by a CIDR block — typically a private range like 10.0.0.0/16. Within the VPC, you create subnets in different Availability Zones to achieve high availability. A common pattern is to create public subnets (e.g., 10.0.1.0/24, 10.0.2.0/24) with internet gateway access for load balancers, and private subnets (10.0.11.0/24, 10.0.12.0/24) for application servers and databases. AWS reserves the first 4 IP addresses and the last IP address in each subnet for its own use, so a /24 gives you 251 usable addresses instead of 254. When designing your VPC CIDR, choose a block large enough to accommodate future growth — a /16 gives 65,536 addresses across all your subnets. Similar concepts apply in Azure (Virtual Networks with subnets) and Google Cloud (VPC subnets per region). Our subnet calculator is useful for planning VPC CIDR allocations before you create them in the cloud console.`,
  },
  {
    category: 'Troubleshooting',
    question: 'How can I use subnet information to troubleshoot connectivity problems?',
    answer: `Many connectivity issues stem from subnet misconfiguration. First, verify that two hosts you expect to communicate share the same subnet: enter both IP addresses and their subnet masks into the calculator and check that they have the same network address. If they are on different subnets, they need a router between them — make sure the default gateway is configured correctly on both hosts. Second, check for overlapping subnets: if two different network segments have overlapping IP ranges, routing becomes ambiguous and packets are misdelivered. Third, verify that your DHCP scope matches your subnet range: a DHCP server handing out addresses outside the subnet's usable range will cause connectivity failures. Fourth, confirm that ACLs and firewall rules use the correct network addresses and wildcard masks — an off-by-one error in the mask can block or permit the wrong hosts. The subnet calculator helps you quickly verify all these values without manual binary arithmetic.`,
  },
  {
    category: 'Troubleshooting',
    question: 'Why can\'t two devices on the same switch communicate even though they have IPs in similar ranges?',
    answer: `This is a common issue caused by subnet mismatch. Even if two IP addresses look similar (like 192.168.1.50 and 192.168.1.200), if they have different subnet masks, they may be in different logical networks. For example, if one device has 192.168.1.50/25 (subnet 192.168.1.0, range .0–.127) and another has 192.168.1.200/25 (subnet 192.168.1.128, range .128–.255), they are on different subnets even though they share the same switch. Communication between them requires a router. Another common cause is incorrect subnet mask entry — typing 255.255.255.254 instead of 255.255.255.0 puts each host on its own /31 point-to-point subnet. Always verify both the IP address AND the subnet mask on both devices when troubleshooting. Enter the IPs into our calculator to instantly see whether they share a network address, confirming whether they should be able to communicate directly.`,
  },
  {
    category: 'Technical',
    question: 'What is IPv6 subnetting and how does it differ from IPv4 subnetting?',
    answer: `IPv6 subnetting follows the same CIDR principles as IPv4 but operates on a 128-bit address space instead of 32-bit, completely eliminating the address exhaustion problem that made IPv4 subnetting so critical. Key differences: Address notation: IPv6 uses hexadecimal groups separated by colons — 2001:0db8:85a3:0000:0000:8a2e:0370:7334. Consecutive groups of zeros can be compressed with :: — 2001:db8:85a3::8a2e:370:7334. Prefix length: /48 is a typical ISP allocation to a customer, /64 is the standard subnet prefix (leaving 64 bits for host addresses within a subnet), /128 is a single host. A single /64 subnet can address 2⁶⁴ ≈ 18.4 quintillion devices — more than enough for any conceivable network. No NAT required: every device gets a globally unique IPv6 address — no need for private address ranges (10.x.x.x, 192.168.x.x) or NAT gateways. Subnetting a /48 allocation: a /48 prefix gives you 2¹⁶ = 65,536 possible /64 subnets. Typical enterprise IPv6 plan: one /48 per site, divide into /64 subnets for each VLAN or department. Our IP subnet calculator focuses on IPv4 — for IPv6 subnetting, dedicated IPv6 calculators handle the 128-bit math more ergonomically.`,
  },
];

const writeUp = (
  <section className="prose prose-slate max-w-none">
    <h2>What Is an IP Subnet Calculator?</h2>
    <p>
      An IP subnet calculator is an essential online tool for network engineers, system administrators, students studying for certifications, and developers who work with networked applications. When you provide an IP address and a CIDR prefix length (or subnet mask), the calculator performs the binary arithmetic required to derive every meaningful network parameter from those inputs — instantly and without error. The result includes the network address, broadcast address, first and last usable host addresses, total address count, usable host count, subnet mask in dotted-decimal format, wildcard mask, binary representations, and the IP address class.
    </p>
    <p>
      Subnetting is the process of dividing a large IP address block into smaller, more manageable segments called subnets. This practice underlies virtually every aspect of modern network design — from configuring a home router to planning a cloud VPC architecture with hundreds of isolated segments. Without a solid grasp of subnetting, it is impossible to correctly configure routing, firewalls, ACLs, DHCP scopes, or VLANs. Our IP subnet calculator makes it possible to explore and verify subnet calculations in seconds, supporting both learning and professional work.
    </p>

    <h2>How to Use This IP Subnet Calculator</h2>
    <p>
      Using the calculator is straightforward. Enter an IPv4 address in dotted-decimal notation (for example, 192.168.1.100) in the IP address field. Then enter the CIDR prefix length — a number from 0 to 32 — in the prefix field. A /24 means 24 network bits and 8 host bits; a /16 means 16 network bits and 16 host bits. Click Calculate and the tool immediately displays all subnet parameters.
    </p>
    <p>
      You can also enter the subnet mask in dotted-decimal format (255.255.255.0) instead of the CIDR prefix, and the calculator converts it automatically. This is useful when you are reading a subnet mask from a network interface configuration and want to understand what CIDR prefix it represents. The tool accepts any valid IPv4 address — public, private, loopback, or link-local — and any valid prefix length.
    </p>

    <h2>Understanding the Output: Network Address</h2>
    <p>
      The network address is the first address in a subnet and serves as its identifier. It is obtained by performing a bitwise AND operation between the IP address and the subnet mask. For example, if your IP is 192.168.1.100 and your subnet mask is 255.255.255.0 (binary: 11111111.11111111.11111111.00000000), the AND operation zeroes out the host bits to produce 192.168.1.0 — the network address. This address is not assignable to any host device; it identifies the subnet itself in routing tables and configuration files.
    </p>
    <p>
      When you configure a static route on a router, you use the network address plus the prefix length to specify the destination: for example, "ip route 192.168.1.0 255.255.255.0 10.0.0.1" means "send packets destined for the 192.168.1.0/24 network to next-hop 10.0.0.1." The network address is also the starting point for calculating all other subnet parameters.
    </p>

    <h2>Understanding the Output: Broadcast Address</h2>
    <p>
      The broadcast address is the last address in a subnet. It is calculated by setting all host bits to 1. For a /24 subnet, the host portion is the last octet, so setting all 8 bits to 1 gives .255. Thus, 192.168.1.0/24 has broadcast address 192.168.1.255. Any packet sent to the broadcast address is delivered to all hosts on that subnet — used by protocols like ARP (Address Resolution Protocol) to discover MAC addresses, and by DHCP Discover messages sent before a client has an IP address.
    </p>
    <p>
      Like the network address, the broadcast address cannot be assigned to any host. Accidentally configuring a device with the broadcast address causes it to receive all broadcast traffic on the network and prevents normal communication. DHCP servers exclude both the network and broadcast addresses from their address pools automatically, but manual static assignments require careful verification.
    </p>

    <h2>First and Last Usable Host Addresses</h2>
    <p>
      Between the network address and broadcast address lies the range of usable host addresses. The first usable host is the network address plus one (e.g., 192.168.1.1 for the 192.168.1.0/24 subnet). The last usable host is the broadcast address minus one (e.g., 192.168.1.254). Every device on the subnet — computers, servers, routers, printers, IoT devices — must have an IP address within this range.
    </p>
    <p>
      The number of usable hosts is calculated as 2^(host bits) - 2. For a /24, that is 2^8 - 2 = 254. For a /26, that is 2^6 - 2 = 62. For a /30, that is 2^2 - 2 = 2 (perfect for point-to-point router links). Knowing the exact host range is critical when configuring DHCP scopes — your DHCP server's start and end address should fall within the usable range, and you should reserve addresses at the beginning of the range for static assignments (routers, servers, printers) and let DHCP manage the remainder.
    </p>

    <h2>Subnet Mask vs. Wildcard Mask</h2>
    <p>
      The subnet mask and wildcard mask are bitwise inverses of each other. Where the subnet mask has 1-bits (network bits) the wildcard mask has 0-bits, and vice versa. For 255.255.255.0, the wildcard is 0.0.0.255. For 255.255.255.192 (/26), the wildcard is 0.0.0.63.
    </p>
    <p>
      Subnet masks are used when configuring network interfaces and routing protocols. Wildcard masks are used in Cisco ACLs and OSPF area configurations. In an ACL, a 0-bit in the wildcard means "this bit must match" and a 1-bit means "any value is accepted." So to permit all traffic from the 10.0.0.0/8 network: "permit ip 10.0.0.0 0.255.255.255 any." Our calculator shows both masks for every subnet, so you can copy the correct format for your specific use case.
    </p>

    <h2>IP Address Classes: A, B, C, D, and E</h2>
    <p>
      Before CIDR, the internet used a classful addressing scheme where the first octet of an IP address determined its class and default mask. Class A (1–126): /8 default, 16,777,214 hosts per network. Class B (128–191): /16 default, 65,534 hosts per network. Class C (192–223): /24 default, 254 hosts per network. Class D (224–239): multicast. Class E (240–255): experimental/reserved. The subnet calculator identifies the IP class for your address even though modern networks use classless CIDR notation — this context is useful for understanding legacy configurations and for certification exams.
    </p>
    <p>
      Note that 127.x.x.x is reserved for loopback (127.0.0.1 is the standard loopback address, also known as localhost). Addresses in the range 169.254.0.0/16 are APIPA (Automatic Private IP Addressing) addresses assigned when DHCP fails. These cannot be routed off the local link.
    </p>

    <h2>Private IP Address Ranges and RFC 1918</h2>
    <p>
      RFC 1918 defines three private address ranges that are not routed on the public internet: 10.0.0.0/8 (Class A private, ~16.7 million addresses), 172.16.0.0/12 (Class B private, ~1 million addresses), and 192.168.0.0/16 (Class C private, ~65,000 addresses). These ranges are freely reusable by any organization for their internal networks. Network Address Translation (NAT) allows devices with private IPs to access the internet through a router with a single public IP.
    </p>
    <p>
      When planning a new network, always start with private address space. Use 10.0.0.0/8 for large enterprises or cloud environments where you need millions of addresses. Use 172.16.0.0/12 for medium organizations or container orchestration platforms like Docker and Kubernetes (Docker uses 172.17.0.0/16 by default). Use 192.168.0.0/16 for small office and home networks, usually carved into /24 subnets for each segment.
    </p>

    <h2>VLSM: Variable Length Subnet Masking</h2>
    <p>
      Variable Length Subnet Masking (VLSM) allows different subnets within the same address space to have different prefix lengths (and thus different sizes). This replaced the classful system and allows efficient address allocation — you can give a 200-host department a /24, a 50-host segment a /26, and a router-to-router link a /30, all from the same /22 parent block.
    </p>
    <p>
      To plan VLSM: list all subnets needed, sorted by host count (largest first). For each subnet, find the smallest CIDR prefix that accommodates the required hosts. Assign subnets from the address space sequentially, making sure ranges do not overlap. Use our calculator to verify each subnet's range before assigning it. VLSM is tested heavily on CCNA exams and is the standard practice in enterprise network design.
    </p>

    <h2>Subnetting for Cloud Architecture (AWS, Azure, GCP)</h2>
    <p>
      Cloud networking builds on the same subnet math as physical networks. In AWS, you define a VPC CIDR block (e.g., 10.0.0.0/16) and then create subnets within it (/24 or /28 are common choices). AWS reserves 5 addresses per subnet: the network address, the VPC router address (.1), the DNS server address (.2), future use (.3), and the broadcast address. So a /24 in AWS gives 256 - 5 = 251 usable addresses.
    </p>
    <p>
      Plan your VPC subnets by availability zone and tier. A typical three-tier architecture in two AZs might use: Public-AZ1: 10.0.1.0/24, Public-AZ2: 10.0.2.0/24, App-AZ1: 10.0.11.0/24, App-AZ2: 10.0.12.0/24, DB-AZ1: 10.0.21.0/24, DB-AZ2: 10.0.22.0/24. Leave address space for future subnets by using a /16 VPC — this gives you 256 /24 subnets to allocate. Our calculator helps verify that none of these ranges overlap before you commit them in the cloud console.
    </p>

    <h2>Subnetting Practice Problems</h2>
    <p>
      The best way to master subnetting is to practice with real problems. Try these: (1) You have 192.168.10.0/24. Divide it into 4 equal subnets. What is the network address, broadcast, and host range for each? (2) Host A has IP 172.16.45.200/20. What is its network address? Is host 172.16.32.1 on the same subnet? (3) You need to accommodate 500 hosts on a single subnet from the 10.0.0.0/8 space. What is the smallest subnet you can use? (4) A /27 subnet starts at 192.168.1.192. What is its broadcast address and how many usable hosts does it contain?
    </p>
    <p>
      Use our calculator to check your answers. For (1): /26 gives 4 subnets of 64 addresses each — .0/26, .64/26, .128/26, .192/26. For (2): /20 means the interesting octet is the third. Mask is 255.255.240.0. Network address: apply mask to 172.16.45.200 → 45 AND 240 = 32. Network is 172.16.32.0. 172.16.32.1 IS on the same subnet. For (3): 500 hosts needs 2^9 = 512 addresses, so /23. For (4): 192.168.1.192/27 has broadcast 192.168.1.223 with 30 usable hosts.
    </p>

    <h2>Binary Subnet Mask: Understanding the Math</h2>
    <p>
      The subnet mask in binary form makes it visually clear which bits are network bits (1s) and which are host bits (0s). A /24 subnet mask in binary is 11111111.11111111.11111111.00000000. A /26 is 11111111.11111111.11111111.11000000. A /20 is 11111111.11111111.11110000.00000000. The point where the 1s end and the 0s begin is called the subnet boundary.
    </p>
    <p>
      To find a network address manually: write the IP address in binary, write the subnet mask in binary beneath it, perform a bitwise AND (1 AND 1 = 1; anything AND 0 = 0), and convert the result back to dotted-decimal. For 10.20.30.40/22: the binary representation of 30 is 00011110, the 22-bit mask means the last 10 bits are host bits — the third octet mask is 11111100, so 30 AND 252 = 28. Network address is 10.20.28.0/22. Our calculator performs this automatically and displays the binary subnet mask so you can visualize the bit boundary.
    </p>

    <h2>Common Subnetting Quick Reference Table</h2>
    <p>
      Here is a quick reference for the most commonly used subnet sizes, from /8 to /30:
    </p>
    <ul>
      <li>/8 — Mask: 255.0.0.0 — Total: 16,777,216 — Usable: 16,777,214</li>
      <li>/16 — Mask: 255.255.0.0 — Total: 65,536 — Usable: 65,534</li>
      <li>/20 — Mask: 255.255.240.0 — Total: 4,096 — Usable: 4,094</li>
      <li>/21 — Mask: 255.255.248.0 — Total: 2,048 — Usable: 2,046</li>
      <li>/22 — Mask: 255.255.252.0 — Total: 1,024 — Usable: 1,022</li>
      <li>/23 — Mask: 255.255.254.0 — Total: 512 — Usable: 510</li>
      <li>/24 — Mask: 255.255.255.0 — Total: 256 — Usable: 254</li>
      <li>/25 — Mask: 255.255.255.128 — Total: 128 — Usable: 126</li>
      <li>/26 — Mask: 255.255.255.192 — Total: 64 — Usable: 62</li>
      <li>/27 — Mask: 255.255.255.224 — Total: 32 — Usable: 30</li>
      <li>/28 — Mask: 255.255.255.240 — Total: 16 — Usable: 14</li>
      <li>/29 — Mask: 255.255.255.248 — Total: 8 — Usable: 6</li>
      <li>/30 — Mask: 255.255.255.252 — Total: 4 — Usable: 2</li>
    </ul>

    <h2>IPv6 Subnetting: The Future of Network Addressing</h2>
    <p>
      IPv4's 4.3 billion address space is nearly exhausted. IPv6 provides 340 undecillion (3.4 × 10^38) addresses — enough to assign millions of addresses to every grain of sand on Earth. Understanding IPv6 subnetting is increasingly important as networks transition to the new protocol.
    </p>
    <p>
      <strong>IPv6 address format</strong>: IPv6 addresses are 128 bits written as eight groups of four hexadecimal digits separated by colons: 2001:0db8:85a3:0000:0000:8a2e:0370:7334. Leading zeros in each group can be omitted: 2001:db8:85a3:0:0:8a2e:370:7334. Consecutive groups of all zeros can be replaced with double colon (only once per address): 2001:db8:85a3::8a2e:370:7334. The /64 prefix is the standard subnet size in IPv6 — giving each subnet 2^64 ≈ 18.4 quintillion host addresses. Even the smallest practical IPv6 subnet (/128, a single host address) is larger than the entire IPv4 address space in raw bit terms.
    </p>
    <p>
      <strong>IPv6 prefix hierarchy</strong>: ISPs receive /32 or /48 prefixes from Regional Internet Registries (RIRs). Organizations typically receive /48 prefixes from their ISP, which they can subdivide into up to 65,536 /64 subnets. Each /64 subnet provides effectively unlimited host addresses for practical purposes. This is why IPv6 eliminates the careful address conservation of IPv4 subnetting — there is no need to minimize subnet sizes or use /30 for point-to-point links.
    </p>
    <p>
      <strong>IPv6 special address ranges</strong>: ::1/128 is the loopback address (equivalent to 127.0.0.1). fe80::/10 is link-local (equivalent to 169.254.0.0/16). fc00::/7 is unique local (equivalent to RFC 1918 private ranges — not routed on the public internet). 2001:db8::/32 is documentation range (like 192.0.2.0/24 in IPv4 — used in examples and never routed). 2000::/3 is globally routable unicast space (where public IPv6 addresses are assigned). ff00::/8 is multicast (like 224.0.0.0/4 in IPv4).
    </p>
    <p>
      <strong>IPv6 NDP vs ARP</strong>: IPv6 replaces ARP (Address Resolution Protocol) with NDP (Neighbor Discovery Protocol), which uses ICMPv6 multicast messages. SLAAC (Stateless Address Autoconfiguration) allows IPv6 hosts to configure their own addresses using their MAC address and the network's advertised prefix, without a DHCP server. DHCPv6 provides an alternative to SLAAC for environments that require centralized address assignment and tracking.
    </p>

    <h2>Network Segmentation for Security: Firewalls, DMZ, and Zero Trust</h2>
    <p>
      Subnetting is a foundational tool for network security. Properly segmented networks limit the blast radius of security incidents — a compromised device in one subnet cannot directly reach devices in isolated subnets.
    </p>
    <p>
      <strong>DMZ (Demilitarized Zone) architecture</strong>: a DMZ is a network segment that sits between the internet and the internal network, hosting services that must be publicly accessible (web servers, email gateways, VPN concentrators) while being isolated from internal systems. Traffic from the internet can reach DMZ hosts (TCP port 80/443 for web servers) but is blocked from reaching the internal network. Traffic from internal systems can initiate connections to DMZ hosts, but DMZ hosts cannot initiate connections to internal systems without explicit firewall rules. A typical DMZ uses a separate subnet (/27 or /28 for a small DMZ) isolated by a firewall or perimeter router.
    </p>
    <p>
      <strong>VLAN and subnet alignment</strong>: in modern enterprise networks, VLANs (Virtual LANs) and subnets are typically aligned 1-to-1. Each department or function gets a VLAN ID and a corresponding subnet. Finance department on VLAN 10, subnet 10.10.10.0/24. Engineering on VLAN 20, subnet 10.10.20.0/24. Guest Wi-Fi on VLAN 100, subnet 10.100.0.0/24. This alignment makes firewall rule management straightforward: rules reference subnet ranges, and traffic is controlled at the layer 3 boundary between subnets. Our calculator helps verify these subnet assignments don't overlap and documents the usable host range for each VLAN.
    </p>
    <p>
      <strong>Micro-segmentation and Zero Trust</strong>: traditional network segmentation uses perimeter defenses — once inside the network (or a subnet), devices trust each other. Zero Trust architecture assumes any device or user could be compromised and enforces authentication and authorization for every connection, regardless of network location. Micro-segmentation implements Zero Trust at the network level by creating very fine-grained segments — potentially a /32 subnet per application workload in cloud environments. Network policies control which subnets can communicate, reducing the attack surface even within a data center.
    </p>
    <p>
      <strong>IoT network isolation</strong>: IoT devices (cameras, sensors, smart building systems, industrial control systems) are notoriously difficult to secure and frequently have vulnerabilities. Best practice: put all IoT devices on an isolated subnet with no access to the corporate network and restricted internet access (only to required cloud management endpoints). A /24 or /23 for IoT devices with strict firewall rules prevents a compromised IoT device from being used to pivot to corporate systems. This is a practical application of subnetting for defense-in-depth.
    </p>

    <h2>Subnetting in Kubernetes and Container Networking</h2>
    <p>
      Container orchestration with Kubernetes relies heavily on subnetting concepts, applied to virtual networking within a cluster. Understanding how Kubernetes networking maps to traditional subnetting helps operators debug connectivity issues and plan cluster address space.
    </p>
    <p>
      <strong>Kubernetes pod network CIDR</strong>: each Kubernetes cluster is configured with a pod CIDR block — a large address range from which IP addresses are assigned to pods. Typical choices: 10.244.0.0/16 (Flannel's default), 10.32.0.0/12 (Calico's default), 192.168.0.0/16 (also Calico). The pod CIDR must not overlap with the node network or service CIDR. Each node in the cluster is typically assigned a /24 subnet from the pod CIDR — so with a /16 pod CIDR, up to 256 nodes can each have 254 pods. When planning cluster scale, ensure the pod CIDR is large enough for your expected number of nodes and pods.
    </p>
    <p>
      <strong>Kubernetes service CIDR</strong>: Kubernetes Services receive virtual IP addresses (ClusterIPs) from the service CIDR — a separate address range from the pod CIDR. Typical: 10.96.0.0/12 (roughly 1 million addresses for services). Service IPs are virtual — they exist only in iptables or eBPF rules on each node and are never assigned to physical interfaces. The CIDR size determines the maximum number of Services (not pods) — most clusters never approach this limit, but it is worth sizing appropriately for very large multi-tenant clusters.
    </p>
    <p>
      <strong>Docker networking</strong>: Docker creates a bridge network with default address space 172.17.0.0/16 for the default bridge. Docker Compose networks typically get /20 subnets allocated from 172.16.0.0/12. When running Docker alongside other services, plan your Docker network address space to avoid conflicts with your host network or VPN address ranges. The <code>docker network create --subnet=192.168.50.0/24 mynetwork</code> command creates a network with a specific subnet, which you can design using our calculator to ensure it fits your overall address plan.
    </p>

    <h2>Subnetting for CCNA, CCNP, and Network Certification Exams</h2>
    <p>
      Subnetting is a core topic in Cisco CCNA, CCNP, CompTIA Network+, and other networking certification exams. The exams test both conceptual understanding and rapid calculation — you need to determine network addresses, broadcast addresses, host ranges, and subnet counts within the exam time limit.
    </p>
    <p>
      <strong>The key formulas to memorize</strong>: number of hosts per subnet = 2^(host bits) - 2. Number of subnets = 2^(borrowed bits). For any CIDR prefix /n: host bits = 32 - n. The "interesting octet" is the octet where the prefix boundary falls. The block size in the interesting octet = 256 - (decimal value of the interesting octet's mask). Subnets increment by the block size.
    </p>
    <p>
      <strong>Rapid subnetting method</strong>: to find the subnet for any IP/prefix combination without full binary conversion — identify the interesting octet (where the mask is neither 0 nor 255). Compute block size: 256 minus the octet's mask value. Find the multiple of block size just below the IP's value in that octet — that is the network address's interesting octet. Example: 172.16.45.200/22. Mask is 255.255.252.0. Third octet mask is 252. Block size = 256 - 252 = 4. Multiples of 4: 40, 44, 48... The largest ≤ 45 is 44. Network address: 172.16.44.0. This mental math approach is faster than full binary conversion for exam conditions.
    </p>
    <p>
      <strong>Using our calculator for exam prep</strong>: use our IP subnet calculator to generate practice problems. Enter an IP address and prefix length, note all the outputs, then cover the tool and try to compute each value manually. Check your answers against the calculator results. Repeat with varied addresses — especially those near octet boundaries (/8, /16, /24) and in the "interesting" ranges (/17-/23 for the third octet, /25-/30 for the fourth). Practice until you can compute any /24 to /30 subnet in under 30 seconds — the speed needed for exam conditions.
    </p>

    <h2>Routing Protocols and Subnets: How Routers Use Subnet Information</h2>
    <p>
      Routing protocols distribute subnet reachability information across the network. Understanding how routers interact with subnet addresses helps network engineers design scalable, efficient routing architectures.
    </p>
    <p>
      <strong>Static routing</strong>: in small networks, routes can be manually configured on each router. A static route entry specifies a destination subnet and the next hop to reach it: <code>ip route 10.20.0.0 255.255.0.0 192.168.1.1</code> means "to reach any address in 10.20.0.0/16, send traffic to 192.168.1.1." Static routes are predictable and incur no routing protocol overhead, but they do not adapt to network failures and require manual updates when the topology changes. Our subnet calculator helps compute the destination subnet and mask values needed for static route commands.
    </p>
    <p>
      <strong>RIP and classful routing</strong>: RIP (Routing Information Protocol) versions 1 is classful — it does not include subnet mask information in routing updates. A /24 subnet in the 10.0.0.0/8 space would be aggregated and advertised as the class A 10.0.0.0/8 route to other classful routers. This prevents VLSM and limits network design flexibility. RIPv2 is classless and includes subnet mask information in updates, enabling VLSM. Modern networks use classless routing protocols; classful routing is now primarily of historical and educational interest.
    </p>
    <p>
      <strong>OSPF and area design</strong>: OSPF (Open Shortest Path First) is a classless link-state routing protocol that builds a complete topology map of the network and calculates optimal paths using Dijkstra's shortest path algorithm. OSPF networks are divided into areas — Area 0 (backbone area) connects all other areas, with individual areas connecting to it. Subnetting is critical for OSPF area design: summarizing multiple specific subnets into a single aggregated route at area boundaries reduces the size of OSPF link-state databases and improves scalability. For example, subnets 10.1.0.0/24 through 10.1.7.0/24 can be summarized as 10.1.0.0/21 at the area border, advertising a single route instead of eight.
    </p>
    <p>
      <strong>BGP and autonomous system routing</strong>: BGP (Border Gateway Protocol) is the routing protocol of the internet, carrying reachability information between autonomous systems (the networks of ISPs, enterprises, and cloud providers). BGP operates on IP prefixes — subnet ranges. ISPs receive their address allocations from RIRs as specific prefixes and announce these to the global routing table. Route aggregation is critical at the BGP level — announcing fewer, larger prefixes keeps the global routing table manageable (it currently contains ~1 million prefixes). Incorrect BGP announcements (route leaks, prefix hijacks) can misdirect internet traffic globally, making correct subnet handling at the BGP level a matter of internet security.
    </p>
    <p>
      <strong>Route summarization benefits</strong>: summarizing multiple specific routes into a single summary route reduces routing table size (improving router performance), reduces routing update overhead (fewer prefixes to advertise), and provides routing stability (a failure in a specific subnet within the summary does not require advertising a route change to the full network — only within the local area). Effective route summarization requires careful subnet planning where contiguous address blocks are assigned to the same area or region, enabling clean summarization boundaries. Our calculator helps you visualize subnet boundaries and verify that candidate summary routes include exactly the desired specific subnets without inadvertently including unintended address space.
    </p>

    <h2>Network Documentation: Recording Subnet Allocations</h2>
    <p>
      Proper documentation of subnet allocations is a critical but often neglected aspect of network management. As networks grow, undocumented subnets lead to address conflicts, security policy gaps, and troubleshooting difficulties.
    </p>
    <p>
      <strong>IP Address Management (IPAM)</strong>: IPAM software tracks IP address space allocation across an organization's networks. Enterprise IPAM solutions (Infoblox, BlueCat, Men&Women) integrate with DNS and DHCP servers, providing a unified view of all address assignments. These tools replace spreadsheets that become outdated and error-prone at scale. Free options include phpIPAM (web-based IPAM) and NetBox (data center infrastructure management with IPAM capabilities). Any organization managing more than a few subnets benefits from IPAM software.
    </p>
    <p>
      <strong>Minimal subnet documentation</strong>: at minimum, document each subnet with: network address and prefix length (e.g., 10.0.1.0/24), subnet mask in dotted-decimal notation, usable host range, assigned gateway IP (typically .1 or .254), VLAN ID (if applicable), purpose or description (e.g., "Finance floor 3"), date allocated, and responsible owner or team. A simple spreadsheet with these columns provides the foundation for address space management. Our calculator generates all the numerical values needed — you provide the context (purpose, owner, date).
    </p>
    <p>
      <strong>Subnetting in network diagrams</strong>: include subnet addresses in network diagrams alongside device names and interface labels. A Visio, Lucidchart, or draw.io diagram that shows each segment's subnet address alongside the devices connected to it is immediately useful for troubleshooting — you can see at a glance whether two devices are on the same subnet and what the gateway is. Subnets with no documented diagram entry are invisible to new team members and a source of shadow IT and security gaps.
    </p>
    <p>
      <strong>Change management for subnet changes</strong>: modifying an existing subnet's addressing (re-subnetting, renumbering, splitting or merging subnets) requires careful change management. Document the current state, proposed change, rollback plan, and affected devices before making changes. Subnet changes affect routing tables, firewall rules, DHCP scopes, DNS records, and device configurations — missing any one can cause an outage. Our calculator helps plan the new addressing before implementation, ensuring the proposed subnets have the right size, don't overlap, and cover the required address range.
    </p>
    <p>
      Our free online IP subnet calculator is the fastest way to get all the subnet details you need for any combination of IP address and prefix length. Whether you are designing a new network architecture, troubleshooting a routing issue, studying for a networking certification, or verifying that your cloud VPC subnets don't overlap — paste the IP and prefix into our calculator and get complete subnet information instantly, with all the values needed for documentation, configuration, and verification.
    </p>

    <h2>Troubleshooting Common Subnet Misconfigurations</h2>
    <p>
      Subnet configuration errors are a leading cause of network connectivity problems. Recognizing the symptoms of common misconfigurations helps diagnose and resolve issues faster.
    </p>
    <p>
      <strong>Overlapping subnets</strong>: when two configured subnets include overlapping address ranges, routing becomes ambiguous — which subnet should a router use for an address that falls in both? Symptoms include intermittent connectivity, traffic being sent to the wrong segment, and ARP responses from unexpected devices. Detection: use our calculator on each subnet's network address and prefix, then compare the host ranges to ensure they do not intersect. Prevention: document subnet allocations centrally and check for overlaps before implementing any new subnet.
    </p>
    <p>
      <strong>Wrong subnet mask on a device</strong>: a device configured with the wrong subnet mask — even if its IP address is correct — will misjudge which addresses are local vs. remote. A device on 10.0.1.0/24 configured with /16 mask will attempt to contact 10.0.2.100 locally via ARP instead of sending to the default gateway. The resulting ARP requests get no response, and the connection fails. Symptoms: the device can reach some hosts on its local segment but not hosts that should be on the same subnet, or it tries to ARP for addresses it should route through the gateway. Use our calculator to verify the correct network address for the intended configuration and compare against the device's actual configuration.
    </p>
    <p>
      <strong>Default gateway outside the subnet</strong>: a common misconfiguration places the default gateway IP outside the device's configured subnet. A device on 192.168.1.10/24 with a gateway of 192.168.2.1 cannot ARP for the gateway (it is on a different subnet per the device's mask), resulting in no gateway reachability and no internet access. The device will show "connected" but have no external connectivity. Verify that the gateway IP falls within the configured subnet using our calculator's host range output.
    </p>
    <p>
      <strong>Broadcast address or network address assigned to a host</strong>: assigning the network address (.0) or broadcast address (.255 for /24) to a host causes problems — broadcast-addressed frames are sent to all devices, and the host may not respond or may cause network issues. Some operating systems reject these assignments; others silently accept them and cause subtle issues. Always verify that host IP assignments fall within the usable host range (between network address +1 and broadcast -1), which our calculator shows explicitly.
    </p>
    <p>
      <strong>DHCP scope mismatch</strong>: DHCP servers assign addresses from a configured scope that must align with the subnet. A DHCP scope of 192.168.1.100-192.168.1.200 on a /24 subnet with gateway 192.168.1.1 is correctly aligned. But if the subnet was later changed to /23 to accommodate more hosts, the DHCP scope and gateway settings also need updating — failing to do so results in some dynamically-assigned devices having mismatched subnet masks compared to statically-configured devices, causing within-subnet communication failures between static and dynamic hosts. Use our IP subnet calculator before and after any subnet resize to confirm the network address, broadcast address, and full host range for both the old and new prefix lengths — this dual-check prevents scope mismatches and ensures your DHCP, gateway, and firewall configurations are all updated to reflect the new subnet boundary before you make the change in production.
    </p>
  </section>
);

export default async function IpSubnetCalculatorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const url = `${siteUrl}/${toolSlug}`;
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: toolData.title,
    description: toolData.shortDescription,
    url,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    permissions: 'browser',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  return (
    <>
      <JsonLd data={webAppSchema} />
      <JsonLd data={webPageSchema({ name: toolData.title, description: toolData.shortDescription, url })} />
      <ToolPageShell tool={toolData} ui={<IpSubnetCalculatorTool />} related={<RelatedTools currentSlug={toolSlug} />}>
        {writeUp}
        <FAQSection items={faqs} />
        <FaqJsonLd faqs={faqs} />
      </ToolPageShell>
    </>
  );
}

