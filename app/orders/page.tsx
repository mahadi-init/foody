import { Suspense } from "react";
import OrderList from "./order-list";
import OrderFilters from "./order-filters";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OrdersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8">Your Orders</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4">
          <Card>
            <CardHeader>
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent>
              <OrderFilters />
            </CardContent>
          </Card>
        </aside>
        <main className="w-full md:w-3/4">
          <Suspense fallback={<div>Loading orders...</div>}>
            <OrderList />
          </Suspense>
        </main>
      </div>
    </div>
  );
}
