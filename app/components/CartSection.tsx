import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import EmptyCart from "@/public/assets/images/illustration-empty-cart.svg";
import CartItem from "./ui/CartItem";

interface productImages {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

interface product {
  image: productImages;
  name: string;
  category: string;
  price: number;
}
interface item {
  name: string;
  count: number;
}

interface CartSectionProps {
  cartItems: item[];
  products: product[];
  setCartItems: React.Dispatch<React.SetStateAction<item[]>>;
}

export default function CartSection({
  cartItems,
  products,
  setCartItems,
}: CartSectionProps) {
  const [totalItems, setTotalItems] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
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

  const removeItem = (itemName: string) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.name === itemName ? { ...item, count: 0 } : item,
      ),
    );
    console.log("removed");
  };

  return (
    <div className="relative h-full w-3/12 grow font-RedHat">
      <div className="sticky top-0 rounded-lg bg-white p-10">
        <p className="text-3xl font-semibold text-Red">
          Your Cart({totalItems})
        </p>
        {
          (() => {
            const positiveItems = cartItems
              .filter((item) => item.count > 0)
              .map((item) => (
                <CartItem
                  key={item.name}
                  productPrice={
                    products.find((product) => product.name === item.name)
                      ?.price
                  }
                  item={item}
                  handleRemove={removeItem}
                />
              ));
            return positiveItems; // Return the filtered and mapped items
          })()
        }
        {!totalItems && (
          <div className="flex flex-col items-center justify-center p-10">
            <Image src={EmptyCart} alt="empty cart" />
            <p className="font-semibold text-Red">
              Your added items will appear here
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
