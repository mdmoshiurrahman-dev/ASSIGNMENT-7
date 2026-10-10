import { Product } from "@/types/products";
import Link from "next/link";
import { IoCaretDown, IoCaretUpOutline } from "react-icons/io5";
import MarqueeText from "react-marquee-text";

const MarqueeTextBox = async () => {
  const productApi = process.env.PRODUCTS_API_URL
  if(!productApi){
    throw new Error('API Error: The endpoint URL is invalid or returned a 404 Not Found status.');
  }
  const response = await fetch(
    productApi,
    { next: { revalidate: 86400 } },
  );
  if (!response.ok) {
    throw new Error(`ERROR: ${response.status} - ${response.statusText}`);
  }
  const data: Product[] = await response.json();
  return (
    <div>
      <MarqueeText direction="right" duration={20}>
        {data.map((x) => (
          <Link key={x.id} href={`/products-details/${x.id}`}>
            <div className="border-l flex items-center gap-1 border-b border-gray-200 p-2 text-[14px] md:text-[16px] font-bold hover:bg-gray-50">
              <p>{x.categoryIcon}</p>
              <p>{x.nameBn}</p>
              <p>{`${new Intl.NumberFormat("bn-BD").format(x.today)} টাকা/${x.unit === "kg" ? "কেজি" : x.unit === 'litre' ? 'লিটার': "গ্রাম" }`}</p>
              <p className="ml-1">
                {x.change.dir === "up" ? (
                  <span className="text-red-700">
                    <IoCaretUpOutline className="inline" />{" "}
                    {new Intl.NumberFormat("bn-BD").format(Math.abs(Number(x.change.pct)))}%
                  </span>
                ) : x.change.dir === "down" ? (
                  <span className="text-[#05893E]">
                    <IoCaretDown className="inline" />
                    {new Intl.NumberFormat("bn-BD").format(Math.abs(Number(x.change.pct)))}%
                  </span>
                ) : (
                  <span>
                    {new Intl.NumberFormat("bn-BD").format(Math.abs(Number(x.change.pct)))}%
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
