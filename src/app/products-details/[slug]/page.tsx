import { Product } from "@/types/products";
import { IoCaretDown, IoCaretUpOutline } from "react-icons/io5";

type DetailsPageProps = {
  params: Promise<{ slug: string }>;
};
const DetailsPage = async ({ params }: DetailsPageProps) => {
  const { slug } = await params;
  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products/${slug}`,
  );
  const product: Product = await res.json();

  return (
    <div className="container mx-auto">
      <div className="flex justify-between bg-white p-3 mt-5 rounded-xl mx-5">
        <div className="flex gap-3">
          <div className="flex justify-center items-center">
            <p className="text-4xl bg-[#F0F5F0] rounded-xl p-5">
              {product.categoryIcon}
            </p>
          </div>
          <div className="flex flex-col justify-around items-start">
            <h2 className="font-bold text-2xl">{product.nameBn}</h2>
            <p className="text-gray-700 text-[14px]">{`প্রতি ${product.unit} · ${product.categoryNameBn}`}</p>
            <p className="text-black text-[14px]">{`গতকালের তুলনায় আজ দাম ${product.change.dir === "up" ? "বেড়েছে" : "কমেছে"} · ${new Intl.NumberFormat("bn-BD").format(Math.abs(Number(product.today - product.yesterday)))} টাকা`}</p>
          </div>
        </div>
        <div className="bg-[#F0F5F0] rounded-xl flex flex-col justify-around items-center py-1 px-3">
          <p className="text-gray-700 text-[14px]">আজকের দাম</p>
          <p className="font-bold text-2xl">
            {new Intl.NumberFormat("bn-BD").format(product.today)}
          </p>
          <p className="text-[14px] text-gray-700">{`টাকা / ${product.unit}`}</p>
          <p className=" py-0.75 px-2 rounded-xl font-semibold text-[14px]">
            {product.change.dir === "up" ? (
              <span className="text-red-700">
                <IoCaretUpOutline className="inline" />{" "}
                {new Intl.NumberFormat("bn-BD").format(
                  Math.abs(Number(product.change.pct)),
                )}
                %
              </span>
            ) : (
              <span className="text-[#05893E]">
                <IoCaretDown className="inline" />
                {new Intl.NumberFormat("bn-BD").format(
                  Math.abs(Number(product.change.pct)),
                )}
                %
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
