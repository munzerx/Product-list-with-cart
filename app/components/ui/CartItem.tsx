import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import removeIcon from "@/public/assets/images/icon-remove-item.svg";
export default function CartItem({ productPrice, item, handleRemove }: any) {
  const [total, setTotal] = useState<number>(0);

  const getTotal = () => {
    setTotal(productPrice * item.count);
  };

  useEffect(() => {
    getTotal();
  }, [item.count]);

  return (
    <div className="mt-4 flex w-full flex-row justify-between border-b py-5">
      <div className="flex flex-col">
        <p className="text-sm font-bold">{item.name}</p>
        <div className="flex flex-row items-center justify-start gap-2">
          <p className="text-sm font-bold text-Red">{item.count}x</p>
          <p className="text-Rose-500">
            @{" "}
            {productPrice.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
          <p className="text-Rose-500 font-semibold">
            {total.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
        </div>
      </div>
      <button
        className="flex h-5 w-5 items-center justify-center rounded-full border border-black opacity-60 hover:cursor-pointer hover:opacity-100"
        onClick={() => handleRemove(item.name)}
      >
        <Image src={removeIcon} width={10} height={10} alt={"add to cart"} />
      </button>
    </div>
  );
}
