
import Image from "next/image";
import React, {useEffect } from "react";
import cartIcon from "@/public/assets/images/icon-add-to-cart.svg";
import minusIcon from "@/public/assets/images/icon-decrement-quantity.svg";
import plusIcon from "@/public/assets/images/icon-increment-quantity.svg";

interface item {
  name: string;
  count: number;
}

interface AddToCartProps {
  cartItem: item | undefined;
  setCartItems: React.Dispatch<React.SetStateAction<item[]>>;
}

export default function AddtoCartButton({
  cartItem,
  setCartItems,
}: AddToCartProps) {

  const addCount = () => {
    setCartItems((prevCartItems) =>
      prevCartItems.map(
        (item) =>
          item.name === cartItem?.name
            ? { ...item, count: cartItem.count + 1 }
            : item,
      ),
    );
  };

  const decreaseCount = () => {
    setCartItems((prevCartItems) =>
      prevCartItems.map(
        (item) =>
          item.name === cartItem?.name
            ? { ...item, count: cartItem.count - 1 } // Update the count of the matched item
            : item, // Keep other items unchanged
      ),
    );
  };

  useEffect(() => {}, []);

  return (
    <div className="absolute -bottom-3 z-10 items-center justify-center overflow-hidden rounded-2xl border border-Rose-500">
      {cartItem?.count === 0 && (
        <div
          className="flex h-full w-full flex-row items-center justify-between gap-2 bg-white px-2 py-1 hover:cursor-pointer hover:text-Red"
          onClick={addCount}
        >
          <Image src={cartIcon} width={15} height={15} alt="cart" />
          <p className="text-sm font-semibold">Add to Cart</p>
        </div>
      )}
      {cartItem && cartItem?.count > 0 ? (
        <div className="flex flex-row items-center justify-between gap-5 bg-Red px-2 py-1 text-sm text-white">
          <button
            className="flex h-5 w-5 items-center justify-center rounded-full border border-white hover:cursor-pointer"
            onClick={decreaseCount}
          >
            <Image src={minusIcon} width={10} height={10} alt={"add to cart"} />
          </button>
          <p>{cartItem?.count}</p>
          <button
            className="flex h-5 w-5 items-center justify-center rounded-full border border-white hover:cursor-pointer"
            onClick={addCount}
          >
            <Image src={plusIcon} width={10} height={10} alt={"add to cart"} />
          </button>
        </div>
      ) : null}
    </div>
  );
}
