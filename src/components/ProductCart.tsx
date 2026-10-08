import { Product } from "@/app/types/products";
import Image from "next/image";
import { IoCaretDown, IoCaretUpOutline } from "react-icons/io5";

export interface ProductCartProps {
  products: Product;
}

const ProductCart = ({ products }: ProductCartProps) => {
  return (
    <div className="flex flex-col bg-white p-3 rounded-xl gap-1">
      <div className="flex gap-3">
        <p className="text-3xl p-1 bg-gray-200 rounded-xl">
          {products.categoryIcon}
        </p>
        <div>
          <p className="font-bold text-[17px]">{products.nameBn}</p>
          <p className="text-[14px] text-gray-700">{`প্রতি ${products.unit === "kg" ? "কেজি" : ""}`}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div>
          <p className="">আজকের দাম</p>
        <div className="flex justify-between">
              <p>
            {" "}
            <span className="font-semibold">{products.today}</span>{" "}
            <span>টাকা</span>
          </p>
        </div>
        <div>
          <p className="ml-1">
            {products.change.dir === "up" ? (
              <span className="text-red-700">
                <IoCaretUpOutline className="inline" /> {products.change.pct}%
              </span>
            ) : (
              <span className="text-[#05893E]">
                <IoCaretDown className="inline" />
                {products.change.pct}%
              </span>
            )}
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
