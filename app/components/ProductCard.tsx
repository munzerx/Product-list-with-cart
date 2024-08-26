import Image from "next/image";
import React from "react";

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
[];
interface ProductCardProps {
  data: product;
}
export default function ProductCard({ data }: ProductCardProps) {
  return (
    <div className="h-full w-full justify-between overflow-hidden rounded-lg">
      <div className="h-42 flex w-full items-center justify-center overflow-hidden rounded-lg">
        <Image
          src={"/" + data.image.desktop}
          alt={data.name}
          width={502}
          height={502}
        />
      </div>

      <div className="flex flex-col items-start justify-evenly py-6 font-RedHat">
        <label className="text-xs text-Rose-500">{data.category}</label>
        <p className="text-sm font-semibold text-Rose-900">{data.name}</p>
        <label className="text-sm font-semibold text-Red">
          {data.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </label>
      </div>
    </div>
  );
}
