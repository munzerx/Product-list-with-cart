import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import EmptyCart from "@/public/assets/images/illustration-empty-cart.svg";
import CartItem from "./ui/CartItem";
import Tree from "@/public/assets/images/icon-carbon-neutral.svg";

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
    calculateTotal();
  }, [cartItems]);

  const calculateTotal = () => {
    let tempTotal = 0;
    cartItems.map((item) => {
      const product = products.find((product) => product.name === item.name);
      tempTotal += item.count * (product?.price || 0);
    });
    setTotalPrice(tempTotal);
  };

  const removeItem = (itemName: string) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.name === itemName ? { ...item, count: 0 } : item,
      ),
    );
    console.log("removed");
  };

  const CartItemsSection = () => {
    const section = cartItems
      .filter((item) => item.count > 0)
      .map((item) => (
        <CartItem
          key={item.name}
          productPrice={
            products.find((product) => product.name === item.name)?.price
          }
          item={item}
          handleRemove={removeItem}
        />
      ));
    return section;
  };

  return (
    <div className="relative h-full w-3/12 grow font-RedHat">
      <div className="sticky top-0 rounded-lg bg-white px-10 py-5">
        <p className="text-3xl font-semibold text-Red">
          Your Cart({totalItems})
        </p>
        {totalItems > 0 && (
          <div className="flex flex-col gap-3">
            <CartItemsSection />
            <div className="flex flex-row items-center justify-between py-4">
              <p className="text-sm">Order Total</p>
              <p className="text-2xl font-bold text-Rose-900">
                {totalPrice.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </div>
            <div className="flex h-16 flex-row items-center justify-evenly rounded-lg bg-Rose-50 text-sm">
              <Image src={Tree} alt="carbon-neutral" />
              <div className="flex flex-row items-center gap-1">
                This is a<p className="font-semibold">carbon-neutral</p>
                delivery
              </div>
            </div>
            <button className="rounded-3xl bg-Red py-3 text-sm font-semibold text-white hover:bg-[#952c0c]">
              Confirm Order
            </button>
          </div>
        )}
        {!totalItems && (
          <div className="flex flex-col items-center justify-center p-10">
            <Image src={EmptyCart} alt="empty cart" />
            <p className="font-semibold text-sm text-Rose-900">
              Your added items will appear here
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
