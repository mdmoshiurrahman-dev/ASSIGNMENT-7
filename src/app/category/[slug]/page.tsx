import DisplayCategoryProducts from "@/components/DisplayCategoryProducts";
import { Product } from "@/types/products";
import { notFound } from "next/navigation";
export const instant = false;

type Props = {
  params: Promise<{ slug: string }>;
};
const CategoryPage = async ({ params }: Props) => {
  const categoryApiUrl = process.env.PRODUCT_API_CATEGORY_URL;
  if (!categoryApiUrl) {
    throw new Error(
      "API Error: The endpoint URL is invalid or returned a 404 Not Found status.",
    );
  }
  const { slug } = await params;
  const res = await fetch(`${categoryApiUrl}${slug}`, { cache: "force-cache" });
  if (!res.ok) {
    throw new Error(`ERROR: ${res.status} - ${res.statusText}`);
  }
  const data: Product[] = await res.json();
  if(data.length === 0){
    notFound()
  }
  return <DisplayCategoryProducts data={data} />;
};

export default CategoryPage;
