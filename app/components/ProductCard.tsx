import Image from "next/image";
import React from "react";

export default function ProductCard({ data }: any) {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden justify-between">
      <div className="flex w-full rounded-lg h-42 overflow-hidden items-center justify-center">
        <Image
          src={"/" + data.image.desktop}
          alt={data.name}
          width={502}
          height={502}
        />
      </div>

      <div className="flex flex-col justify-evenly items-start font-RedHat py-6">
        <label className="text-Rose-500 text-xs">{data.category}</label>
        <p className="text-Rose-900 font-semibold text-sm">{data.name}</p>
        <label className="text-Red font-semibold text-sm">
          {data.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </label>
      </div>
    </div>
  );
}
