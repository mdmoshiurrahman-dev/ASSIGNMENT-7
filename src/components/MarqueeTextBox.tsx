import { Product } from "@/app/types/products";
import Link from "next/link";
import { IoCaretDown, IoCaretUpOutline } from "react-icons/io5";
import MarqueeText from "react-marquee-text";

const MarqueeTextBox = async () => {
  const response = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
    { next: { revalidate: 86400 } },
  );
  if (!response.ok) {
    throw new Error("Data fetch from api has been failed!");
  }
  const data: Product[] = await response.json();
  return (
    <div>
      <MarqueeText direction="right" duration={20}>
        {data.map((x) => (
          <Link key={x.id} href={""}>
            <div className="border-l flex items-center gap-1 border-b border-gray-200 p-2 text-[14px] md:text-[16px] font-bold hover:bg-gray-50">
              <p>{x.categoryIcon}</p>
              <p>{x.nameBn}</p>
              <p>{`${new Intl.NumberFormat("bn-BD").format(x.today)} টাকা/${x.unit === "kg" ? "কেজি" : "গ্রাম "}`}</p>
              <p className="ml-1">
                {x.change.dir === "up" ? (
                  <span className="text-red-700">
                    <IoCaretUpOutline className="inline" />{" "}
                    {new Intl.NumberFormat("bn-BD").format(x.change.pct)}%
                  </span>
                ) : x.change.dir === "down" ? (
                  <span className="text-[#05893E]">
                    <IoCaretDown className="inline" />
                    {x.change.pct}%
                  </span>
                ) : (
                  <span>
                    {new Intl.NumberFormat("bn-BD").format(x.change.pct)}
                  </span>
                )}
              </p>
            </div>
          </Link>
        ))}
      </MarqueeText>
    </div>
  );
};

export default MarqueeTextBox;
