import { Suspense } from "react";
import CheckoutForm from "./checkout-form";
import OrderSummary from "./order-summary";

export default function CheckoutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Suspense fallback={<div>Loading checkout form...</div>}>
            <CheckoutForm />
          </Suspense>
        </div>
        <div className="lg:col-span-1">
          <Suspense fallback={<div>Loading order summary...</div>}>
            <OrderSummary />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
