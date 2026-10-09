"use client";
import { Product } from "@/types/products";
import ProductCart from "./ProductCart";
import { useEffect, useState } from "react";

export interface DisplayCategoryProductsProps {
  data: Product[];
}

const DisplayCategoryProducts = ({ data }: DisplayCategoryProductsProps) => {
  const [sortby, setSortby] = useState<"default" | "smallToBig" | "bigToSmall">(
    "default",
  );
  const [sortedData, setSortedData] = useState<Product[]>(data);
  useEffect(() => {
    if (sortby === "bigToSmall") {
      setSortedData([...data].sort((a, b) => b.today - a.today));
    } else if (sortby === "smallToBig") {
      setSortedData([...data].sort((a, b) => a.today - b.today));
    } else {
      setSortedData(data);
    }
  }, [sortby, data]);
  return (
    <>
      <div className="mx-5 flex flex-col gap-3">
        <div className="flex gap-2 bg-white my-3 p-3 rounded-xl border border-gray-300">
          <div className="flex justify-center items-center">
            <p className="text-3xl">{data[0].categoryIcon}</p>
          </div>
          <div>
            <p className="text-xl font-bold">{data[0].categoryNameBn}</p>
            <p className="text-[14px] text-gray-500 font-semibold">{`${new Intl.NumberFormat("bn-BD").format(data.length)}টি পণ্যের আজকের দাম ও পরিবর্তন`}</p>
          </div>
        </div>
        <div className="flex justify-end items-center bg-white p-3 rounded-xl border border-gray-300">
          <div className="flex gap-1 items-center">
            <p>সাজান:</p>
            <select
              value={sortby}
              onChange={(e) =>
                setSortby(
                  e.target.value as "default" | "smallToBig" | "bigToSmall",
                )
              }
              className="select select-neutral border border-gray-300 outline-0 cursor-pointer"
            >
              <option value={"default"}>ডিফল্ট</option>
              <option value={"smallToBig"}>কম থেকে বেশি</option>
              <option value={"bigToSmall"}>বেশি থেকে কম</option>
            </select>
          </div>
        </div>
        <div>
          <p className="text-[14px] text-gray-800">{`মোট ${new Intl.NumberFormat("bn-BD").format(data.length)}টি পণ্য দেখানো হচ্ছে`}</p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3 my-4">
            {sortedData.map((x) => (
              <ProductCart key={x.id} products={x} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayCategoryProducts;