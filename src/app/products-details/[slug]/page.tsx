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
  const maxPriceMarket = product.markets.sort((a, b) => b.max - a.max)[0];
  const minPriceMarket = product.markets.sort((a, b) => a.min - b.min)[0];
  const averagePriceOfEachMarket = product.markets
    .map((product) => {
      return {
        ...product,
        average: (product.max + product.min) / 2,
      };
    })
    .sort((a, b) => a.average - b.average);
  return (
    <div className="container mx-auto">
      <div className="flex justify-between bg-white p-3 mt-5 rounded-xl mx-5 border border-gray-300">
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
      <div className="bg-white p-5 mx-5 rounded-2xl mt-5 border border-gray-300">
        <h2 className="font-bold text-xl mb-3">দামের সারসংক্ষেপ</h2>
        <div className="flex justify-between gap-5">
          <div className="border border-gray-300 rounded-xl p-3 w-full">
            <p className="text-[14px]">সর্বনিম্ন দাম</p>
            <p className="text-[#05893E] py-0.75">
              <span className="text-2xl font-bold ">
                {new Intl.NumberFormat("bn-BD").format(minPriceMarket.min)}
              </span>{" "}
              টাকা
            </p>
            <p className="text-[14px]">সবচেয়ে কম দামের বাজার</p>
          </div>
          <div className="w-full border border-gray-300 rounded-xl p-3">
            <p className="text-[14px]">সর্বাধিক দাম</p>
            <p className="text-red-600 py-0.75">
              <span className="text-2xl font-bold ">
                {new Intl.NumberFormat("bn-BD").format(maxPriceMarket.max)}
              </span>{" "}
              টাকা
            </p>
            <p className="text-[14px]">সবচেয়ে বেশি দামের বাজার</p>
          </div>
          <div className="w-full border border-gray-300 rounded-xl p-3">
            <p className="text-[14px]">গড় দাম</p>
            <p className="text-[#05893E] py-0.75">
              <span className="text-2xl font-bold ">
                {new Intl.NumberFormat("bn-BD").format(
                  Number(
                    ((maxPriceMarket.max + minPriceMarket.min) / 2).toFixed(1),
                  ),
                )}
              </span>{" "}
              টাকা
            </p>
            <p>{`প্রতি ${product.unit}-এর হিসাবে`}</p>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl mb-3 mt-6">
            বাজারভিত্তিক আজকের দাম
          </h2>
          <div className="border border-gray-300 rounded-xl">
            <table className="table">
              <thead>
                <tr>
                  <th>বাজার</th>
                  <th>বিভাগ</th>
                  <th>সর্বনিম্ন</th>
                  <th>সর্বাধিক</th>
                  <th>গড়</th>
                </tr>
              </thead>
              <tbody>
                {averagePriceOfEachMarket.map((x, index) => {
                  return (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-[#F0F5F0]" : ""}
                    >
                      <td>{x.market}</td>
                      <td>{x.division}</td>
                      <td>{`${x.min} টাকা`}</td>
                      <td>{`${x.max} টাকা`}</td>
                      <td>{`${x.average} টাকা`}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
