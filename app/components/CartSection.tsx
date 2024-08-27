import React from "react";
import { useEffect, useState } from "react";

interface item {
  name: string;
  count: number;
}

interface CartSectionProps {
  cartItems: item[];
}

export default function CartSection({ cartItems }: CartSectionProps) {
  const [totalItems, setTotalItems] = useState<number>(0);
  const calculateItems = () => {
    let total = 0;
    cartItems.map((item) => {
      total += item.count;
    });
    setTotalItems(total);
  };

  useEffect(() => {
    calculateItems();
  }, [cartItems]);

  return (
    <div className="relative h-full w-3/12 bg-blue-500 font-RedHat">
      <div className="sticky top-0 bg-red-500">
        <p className="text-2xl font-semibold text-Red">
          Your Cart({totalItems})
        </p>
        {
          // Declare the positiveItems variable outside of the JSX
          (() => {
            const positiveItems = cartItems
              .filter((item) => item.count > 0)
              .map((item) => (
                <div key={item.name}>
                  <p>{item.name}</p>
                  <p>{item.count}</p>
                </div>
              ));
            return positiveItems; // Return the filtered and mapped items
          })()
        }
      </div>
    </div>
  );
}
