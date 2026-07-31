import AdSenseSlot from './AdSenseSlot';

export default function MobileAdSlot() {
  return (
    <div className="md:hidden my-4 flex justify-center">
      <div
        className="w-full max-w-[360px] min-h-[280px]"
        aria-label="Mobile ad slot"
      >
        <AdSenseSlot className="w-full" />
      </div>
    </div>
  );
}
