import ProductCart from "@/components/ProductCart";
import { Product } from "@/types/products";

type Props = {
  params: Promise<{ slug: string }>;
};
const CategoryPage = async ({ params }: Props) => {
  const { slug } = await params;
  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${slug}`,
  );
  const data: Product[] = await res.json();
  return (
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
            defaultValue="ডিফল্ট"
            className="select select-neutral border border-gray-300 outline-0 cursor-pointer"
          >
            <option>ডিফল্ট</option>
            <option>কম থেকে বেশি</option>
            <option>বেশি থেকে কম</option>
          </select>
        </div>
      </div>
      <div>
        <p className="text-[14px] text-gray-800">{`মোট ${new Intl.NumberFormat("bn-BD").format(data.length)}টি পণ্য দেখানো হচ্ছে`}</p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3 my-4">
          {data.map((x) => (
            <ProductCart key={x.id} products={x} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
