import Banner from "@/components/Banner";
import { Product } from "../types/products";
import ProductCart from "@/components/ProductCart";
import { IoCaretDown, IoCaretUpOutline } from "react-icons/io5";

export default async function Home() {
  const productApi = process.env.PRODUCTS_API_URL;
  if (!productApi) {
    throw new Error('API Error: The endpoint URL is invalid or returned a 404 Not Found status.');
  }
  const response = await fetch(productApi, { cache: "force-cache" });
  if(!response.ok){
    throw new Error(`ERROR: ${response.status} - ${response.statusText}`);
  }
  const data: Product[] = await response.json();
  const topTenPriceUpProducts = data
    .filter((i) => i.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 10);
  const topTenPriceDownProducts = data
    .filter((i) => i.change.dir === "down")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 10);
  return (
    <div className="container mx-auto">
      <Banner />
      <div className="mx-5">
        <div className="my-6">
          <h2 className="font-bold text-xl my-3">
            {" "}
            <IoCaretUpOutline className="inline text-red-600" /> আজ দাম বেড়েছে
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3">
            {topTenPriceUpProducts.map((i) => (
              <ProductCart key={i.id} products={i} />
            ))}
          </div>
        </div>
        <div className="my-6">
          <h2 className="font-bold text-xl my-3">
            <IoCaretDown className="inline text-[#05893E]" /> আজ দাম কমেছে
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3">
            {topTenPriceDownProducts.map((i) => (
              <ProductCart key={i.id} products={i} />
            ))}
          </div>
        </div>
        <div className="my-6">
          <h2 className="font-bold text-xl my-3">সব পণ্য</h2>
          <p className="mb-3">{`মোট ${new Intl.NumberFormat("bn-BD").format(data.length)}টি পণ্য দেখানো হচ্ছে`}</p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3">
            {data.map((i) => (
              <ProductCart key={i.id} products={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
