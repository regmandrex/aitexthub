/**
 * Ezoic ad placeholder. The id must be `ezoic-pub-ad-placeholder-<N>` where
 * <N> matches a placement id activated via ezstandalone.showAds(N) (see
 * EzoicRouteAds). Per Ezoic's docs, do NOT style the placeholder div itself —
 * styling can leave empty white space when no ad fills it. Wrap for layout if
 * needed instead.
 */
export default function EzoicPlaceholder({ id }: { id: number }) {
  return <div id={`ezoic-pub-ad-placeholder-${id}`} />;
}
