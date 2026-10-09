import DetailsPage from "@/components/DetailsPage";
import ProductDetailsSkeleton from "@/components/ProductDetailsSkeleton";
import { Suspense } from "react";
type PageProps = {
  params: Promise<{ slug: string }>;
};

const ParentDetailsPage = ({ params }: PageProps) => {
  return (
    <Suspense fallback={<ProductDetailsSkeleton />}>
      <DetailsPage params={params} />
    </Suspense>
  );
};

export default ParentDetailsPage;
