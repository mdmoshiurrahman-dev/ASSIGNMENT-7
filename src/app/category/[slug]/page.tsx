import DisplayCategoryProducts from "@/components/DisplayCategoryProducts";
import { Product } from "@/types/products";
export const instant = false;

type Props = {
  params: Promise<{ slug: string }>;
};
const CategoryPage = async ({ params }: Props) => {
   const { slug } = await params;
  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${slug}`,
    { cache: "force-cache" },
  );
  const data: Product[] = await res.json();
  return <DisplayCategoryProducts data={data} />;
};

export default CategoryPage;
