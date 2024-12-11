import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function OrderConfirmationPage() {
  // In a real application, you would fetch the order details from your API
  const orderDetails = {
    orderNumber: "12345",
    estimatedDelivery: "30-45 minutes",
    total: "$35.97",
  };

  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
            <CheckCircle2 className="mr-2 h-6 w-6 text-green-500" />
            Order Confirmed
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-muted-foreground">
            Thank you for your order! Your delicious food is on its way.
          </p>
          <div className="space-y-2">
            <p>
              <strong>Order Number:</strong> {orderDetails.orderNumber}
            </p>
            <p>
              <strong>Estimated Delivery:</strong>{" "}
              {orderDetails.estimatedDelivery}
            </p>
            <p>
              <strong>Total:</strong> {orderDetails.total}
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center space-x-4">
          <Button asChild>
            <Link href="/">Return to Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/order-tracking">Track Order</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
