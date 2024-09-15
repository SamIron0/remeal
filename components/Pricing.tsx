"use client";

import { Button } from "@/components/ui/button";
import type { Tables } from "@/supabase/types";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { getStripe } from "@/utils/stripe/client";
import { Check } from "lucide-react";
import { useApp } from "@/context/AppContext";

type Product = Tables<"products">;
type Price = Tables<"prices">;
interface ProductWithPrices extends Product {
  prices: Price[];
}
interface Props {
  products: ProductWithPrices[];
}

const features = [
  { name: "Recipe Search", free: true, premium: true },
  { name: "Basic Ingredient Matching", free: true, premium: true },
  { name: "Save Favorite Recipes", free: false, premium: true },
  { name: "Advanced Filters", free: false, premium: true },
  { name: "Personalized Recommendations", free: false, premium: true },
  { name: "Meal Planning", free: false, premium: true },
  { name: "Nutritional Information", free: false, premium: true },
];
export default function Pricing({ products }: Props) {
  const { user, subscription } = useApp();
  const router = useRouter();
  const [priceIdLoading, setPriceIdLoading] = useState<string>();
  const currentPath = usePathname();

  const handleStripeCheckout = async (price: Price) => {
    setPriceIdLoading(price.id);

    if (!user) {
      setPriceIdLoading(undefined);
      return router.push("/signup");
    }

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price, redirectPath: currentPath }),
    });

    const result = await response.json();

    if (response.ok) {
      if (result.sessionId) {
        const stripe = await getStripe();
        stripe?.redirectToCheckout({ sessionId: result.sessionId });
      } else if (result.errorRedirect) {
        router.push(result.errorRedirect);
      }
    } else {
      console.error("Checkout error:", result.error);
      // Handle error (e.g., show error message to user)
    }

    setPriceIdLoading(undefined);
  };

  const handleManageSubscription = async () => {
    const response = await fetch("/api/create-portal-link", {
      method: "POST",
    });
    const { url } = await response.json();
    router.push(url);
  };

  const handleFreeSignup = () => router.push("/signup");

  if (!products.length) {
    return (
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
            No subscription pricing plans found.
          </p>
        </div>
      </div>
    );
  }

  const freeTier = {
    name: "Free",
    description: "Basic features for casual users",
    id: "free-tier",
    prices: [
      { id: "free", currency: "usd", interval: "month", unit_amount: 0 },
    ],
  };
  const premiumTier = products[0];

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the plan that's right for you
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl">
          {[freeTier, premiumTier].map((product, index) => {
            const price = product.prices[0];
            const priceString =
              index === 0
                ? "Free"
                : new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: price.currency!,
                    minimumFractionDigits: 0,
                  }).format((price?.unit_amount || 0) / 100);

            const isFreeTier = index === 0;
            const isPremiumTier = index === 1;
            const hasActiveSubscription =
              subscription?.status === "active" ||
              subscription?.status === "trialing";

            let buttonText = isFreeTier
              ? "Get started for free"
              : "Upgrade to Premium";
            let buttonAction = isFreeTier
              ? handleFreeSignup
              : () => handleStripeCheckout(price as Price);
            let buttonDisabled = false;

            if (hasActiveSubscription) {
              if (isPremiumTier) {
                buttonText = "Manage Subscription";
                buttonAction = handleManageSubscription;
              } else {
                buttonText = "Current Plan";
                buttonDisabled = true;
              }
            } else if (isFreeTier && user) {
              buttonText = "Current Plan";
              buttonDisabled = true;
            }

            return (
              <div
                key={product.id}
                className="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm"
              >
                <div className="p-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-4 text-sm text-gray-500">
                    {product.description}
                  </p>
                  <p className="mt-8">
                    <span className="text-4xl font-extrabold text-gray-900">
                      {priceString}
                    </span>
                    {index !== 0 && (
                      <span className="text-base font-medium text-gray-500">
                        /{price.interval}
                      </span>
                    )}
                  </p>
                  <Button
                    onClick={buttonAction}
                    disabled={buttonDisabled}
                    className={`mt-8 block w-full rounded-md py-2 text-center text-sm font-semibold text-white ${
                      isFreeTier
                        ? "bg-gray-800 hover:bg-gray-900"
                        : "bg-primary hover:bg-primary-dark"
                    } ${buttonDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    {buttonText}
                  </Button>
                </div>
                <div className="px-6 pt-6 pb-8">
                  <h4 className="text-sm font-medium text-gray-900">
                    What's included
                  </h4>
                  <ul role="list" className="mt-6 space-y-4">
                    {features.map((feature) => (
                      <li key={feature.name} className="flex space-x-3">
                        <Check
                          className={`h-5 w-5 flex-shrink-0 ${
                            index === 0
                              ? feature.free
                                ? "text-green-500"
                                : "text-gray-300"
                              : "text-green-500"
                          }`}
                          aria-hidden="true"
                        />
                        <span
                          className={`text-sm ${
                            index === 0
                              ? feature.free
                                ? "text-gray-500"
                                : "text-gray-300"
                              : "text-gray-500"
                          }`}
                        >
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
