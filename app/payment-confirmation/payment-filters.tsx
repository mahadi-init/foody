"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function PaymentFilters() {
  const [timeFrame, setTimeFrame] = useState("all");

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Time Frame</h3>
        <RadioGroup value={timeFrame} onValueChange={setTimeFrame}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="all" />
            <Label htmlFor="all">All Time</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="last_30_days" id="last_30_days" />
            <Label htmlFor="last_30_days">Last 30 Days</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="last_6_months" id="last_6_months" />
            <Label htmlFor="last_6_months">Last 6 Months</Label>
          </div>
        </RadioGroup>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Amount Range</h3>
        <div className="flex items-center space-x-2">
          <Input type="number" placeholder="Min" className="w-24" />
          <span>to</span>
          <Input type="number" placeholder="Max" className="w-24" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <input type="checkbox" id="credit_card" className="mr-2" />
            <Label htmlFor="credit_card">Credit Card</Label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="debit_card" className="mr-2" />
            <Label htmlFor="debit_card">Debit Card</Label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="paypal" className="mr-2" />
            <Label htmlFor="paypal">PayPal</Label>
          </div>
        </div>
      </div>
      <Button className="w-full">Apply Filters</Button>
    </div>
  );
}
