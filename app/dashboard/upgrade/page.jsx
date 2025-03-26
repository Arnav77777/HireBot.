"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

function Upgrade() {
  const router = useRouter();

  const handleUpgrade = (plan) => {
    alert(`You selected the ${plan} plan. Proceeding to checkout...`);
    // Handle payment flow here
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Upgrade Your Plan</h1>
      <div className="flex flex-col gap-4">
        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Basic Plan</h2>
          <p className="text-gray-600">Access to basic features</p>
          <p className="font-bold my-2">$10/month</p>
          <Button onClick={() => handleUpgrade("Basic")}>Buy Now</Button>
        </div>
        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Pro Plan</h2>
          <p className="text-gray-600">Access to all features</p>
          <p className="font-bold my-2">$30/month</p>
          <Button onClick={() => handleUpgrade("Pro")}>Buy Now</Button>
        </div>
        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Enterprise Plan</h2>
          <p className="text-gray-600">Custom features for your business</p>
          <p className="font-bold my-2">Contact us for pricing</p>
          <Button onClick={() => alert("Contacting sales...")}>
            Contact Sales
          </Button>
        </div>
      </div>
      <Button className="mt-6" onClick={() => router.push("/dashboard")}>
        Back to Dashboard
      </Button>
    </div>
  );
}

export default Upgrade;
