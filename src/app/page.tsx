import Banner from "@/components/Banner";
import { Product } from "./types/products";
import ProductCart from "@/components/ProductCart";
import { IoCaretUpOutline } from "react-icons/io5";

export default async function Home() {
  const response = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
    { cache: "force-cache" },
  );
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
    <div>
      <Banner />
      <div>
        <h2 className="font-bold text-xl"> <IoCaretUpOutline className="inline text-red-600" /> আজ দাম বেড়েছে</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3">
          {topTenPriceUpProducts.map((i) => (
            <ProductCart key={i.id} products={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
