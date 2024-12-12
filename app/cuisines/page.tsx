import { Suspense } from "react";
import CuisineGrid from "./cuisine-grid";
import CuisineSearch from "./cusisine-search";

export default function CuisinesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8">Explore Cuisines</h1>
      <CuisineSearch />
      <Suspense fallback={<div>Loading cuisines...</div>}>
        <CuisineGrid />
      </Suspense>
    </div>
  );
}
