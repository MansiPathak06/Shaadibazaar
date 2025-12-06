import { Suspense } from "react";
import AllProductsClient from "./AllProductsClient";

export default function BrideAllProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[200px] flex items-center justify-center">
          Loading products...
        </div>
      }
    >
      <AllProductsClient />
    </Suspense>
  );
}
