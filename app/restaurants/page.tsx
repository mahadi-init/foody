import { Suspense } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import RestaurantFilters from "@/app/restaurants/resturants-filter";
import RestaurantList from "@/app/restaurants/resturant-list";

export default function Restaurants() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8">Restaurants</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4">
          <div className="sticky top-4">
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search restaurants"
                  className="pl-8"
                />
              </div>
            </div>
            <RestaurantFilters />
          </div>
        </aside>
        <main className="w-full md:w-3/4">
          <Suspense fallback={<div>Loading restaurants...</div>}>
            <RestaurantList />
          </Suspense>
        </main>
      </div>
    </div>
  );
}
