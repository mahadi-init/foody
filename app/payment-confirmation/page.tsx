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

export default function PaymentConfirmationPage() {
  // In a real application, you would fetch the payment details from your API
  const paymentDetails = {
    transactionId: "TXN123456",
    amount: "$35.97",
    date: new Date().toLocaleDateString(),
  };

  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
            <CheckCircle2 className="mr-2 h-6 w-6 text-green-500" />
            Payment Successful
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-muted-foreground">
            Your payment has been processed successfully.
          </p>
          <div className="space-y-2">
            <p>
              <strong>Transaction ID:</strong> {paymentDetails.transactionId}
            </p>
            <p>
              <strong>Amount Paid:</strong> {paymentDetails.amount}
            </p>
            <p>
              <strong>Date:</strong> {paymentDetails.date}
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center space-x-4">
          <Button asChild>
            <Link href="/">Return to Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/order-history">View Order History</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
