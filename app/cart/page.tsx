import { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import CartItems from "./cart-items";
import CartSummary from "./cart-summary";

export default function CartPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Suspense fallback={<div>Loading cart items...</div>}>
            <CartItems />
          </Suspense>
        </div>
        <div className="lg:col-span-1">
          <Suspense fallback={<div>Loading cart summary...</div>}>
            <CartSummary />
          </Suspense>
          <div className="mt-6">
            <Button asChild className="w-full">
              <Link href="/checkout">
                <ShoppingCart className="mr-2 h-4 w-4" /> Proceed to Checkout
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
