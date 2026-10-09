import { Product } from "@/types/products";
import Link from "next/link";
import { IoCaretDown, IoCaretUpOutline } from "react-icons/io5";

export interface ProductCartProps {
  products: Product;
}

const ProductCart = ({ products }: ProductCartProps) => {
  return (
    <Link href={`/products-details/${products.id}`}>
      <div className="flex flex-col bg-white p-3 rounded-xl gap-2 cursor-pointer border border-gray-200 hover:shadow-md transition duration-300">
        <div className="flex gap-3">
          <p className="text-3xl p-1 bg-gray-200 rounded-xl">
            {products.categoryIcon}
          </p>
          <div>
            <p className="font-bold text-[17px]">{products.nameBn}</p>
            <p className="text-[14px] text-gray-700">{`প্রতি ${products.unit === "kg" ? "কেজি" : products.unit === "litre" ? "লিটার" : "গ্রাম"}`}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-[14px] pt-1">আজকের দাম</p>
          <div className="flex justify-between">
            <div>
              <p>
                {" "}
                <span className="font-bold text-[16px]">
                  {new Intl.NumberFormat("bn-BD").format(products.today)}
                </span>{" "}
                <span>টাকা</span>
              </p>
            </div>
            <div>
              <p className="bg-gray-50 py-0.75 px-2 rounded-xl font-semibold text-[14px]">
                {products.change.dir === "up" ? (
                  <span className="text-red-700">
                    <IoCaretUpOutline className="inline" />{" "}
                    {new Intl.NumberFormat("bn-BD").format(
                      Math.abs(Number(products.change.pct)),
                    )}
                    %
                  </span>
                ) : products.change.dir === "down" ? (
                  <span className="text-[#05893E]">
                    <IoCaretDown className="inline" />
                    {new Intl.NumberFormat("bn-BD").format(
                      Math.abs(Number(products.change.pct)),
                    )}
                    %
                  </span>
                ) : (
                  <span>{new Intl.NumberFormat("bn-BD").format(0)}%</span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCart;
