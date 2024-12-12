"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Calendar } from "lucide-react";

// This would typically come from an API or database
const initialPayments = [
  {
    id: "1",
    date: "2024-03-15",
    amount: 15.99,
    method: "Credit Card",
    last4: "1234",
    status: "Successful",
  },
  {
    id: "2",
    date: "2024-03-14",
    amount: 22.5,
    method: "PayPal",
    last4: "",
    status: "Successful",
  },
  {
    id: "3",
    date: "2024-03-13",
    amount: 28.75,
    method: "Debit Card",
    last4: "5678",
    status: "Successful",
  },
  {
    id: "4",
    date: "2024-03-12",
    amount: 19.99,
    method: "Credit Card",
    last4: "9012",
    status: "Failed",
  },
];

export default function PaymentList() {
  //const [payments, setPayments] = useState(initialPayments);
  const [payments] = useState(initialPayments);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "successful":
        return "bg-green-500";
      case "failed":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-4">
      {payments.map((payment) => (
        <Card key={payment.id}>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold">
                  ${payment.amount.toFixed(2)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Transaction #{payment.id}
                </p>
              </div>
              <Badge className={getStatusColor(payment.status)}>
                {payment.status}
              </Badge>
            </div>
            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{new Date(payment.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <CreditCard className="w-4 h-4 mr-1" />
              <span>
                {payment.method} {payment.last4 && `(**** ${payment.last4})`}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
