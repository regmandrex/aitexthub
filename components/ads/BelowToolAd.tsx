// AdSense is temporarily disabled site-wide. Returning null here (rather than
// editing every call site) keeps all existing <BelowToolAd /> usages working
// with zero rendered output. Restore the previous implementation to re-enable.
export default function BelowToolAd() {
  return null;
}
