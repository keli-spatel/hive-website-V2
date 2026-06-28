import type { IconLabel } from "@/app/data/home";

type TrustTagGridProps = {
  items: IconLabel[];
};

export function TrustTagGrid({ items }: TrustTagGridProps) {
  return (
    <div className="mt-9">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((tag) => (
          <div
            key={tag.name}
            className="flex min-h-[68px] items-center gap-3 rounded-[14px] border border-[#dfe3ea] bg-[#f8fafc] px-3 py-1 text-left shadow-[0_8px_20px_rgba(17,18,20,0.04)]"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#ff3b3b]/30 bg-white text-[#ff3b3b]">
              <tag.icon size={15} strokeWidth={1.9} />
            </div>
            <span className="text-[13px] font-semibold leading-[1.35] text-[#111214]">
              {tag.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
