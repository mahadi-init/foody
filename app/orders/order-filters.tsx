"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

export default function OrderFilters() {
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
        <h3 className="text-lg font-semibold mb-2">Order Status</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <input type="checkbox" id="completed" className="mr-2" />
            <Label htmlFor="completed">Completed</Label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="processing" className="mr-2" />
            <Label htmlFor="processing">Processing</Label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="cancelled" className="mr-2" />
            <Label htmlFor="cancelled">Cancelled</Label>
          </div>
        </div>
      </div>
      <Button className="w-full">Apply Filters</Button>
    </div>
  );
}
