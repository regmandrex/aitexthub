import AdSenseSlot from './AdSenseSlot';

export default function MobileAdSlot() {
  return (
    <div className="md:hidden my-4 flex justify-center">
      <div
        className="w-full max-w-[360px] min-h-[100px] rounded-lg border border-dashed border-gray-300 bg-gray-50 p-2"
        aria-label="Mobile ad slot"
      >
        <AdSenseSlot className="w-full" />
      </div>
    </div>
  );
}
