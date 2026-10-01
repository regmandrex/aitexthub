// AdSense is temporarily disabled site-wide. Returning null here keeps the
// import/render in app/layout.tsx harmless with zero rendered output and no
// adsbygoogle.push() calls. Restore the previous implementation to re-enable.
export default function GoogleAds() {
  return null;
}
