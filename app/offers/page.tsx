import { Suspense } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import OffersList from "@/components/offers/offer-list";

export default function OffersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8">Special Offers</h1>
      <div className="mb-8">
        <div className="relative max-w-md">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search offers" className="pl-8" />
        </div>
      </div>
      <Suspense fallback={<div>Loading offers...</div>}>
        <OffersList />
      </Suspense>
    </div>
  );
}
