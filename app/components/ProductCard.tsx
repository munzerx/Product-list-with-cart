import Image from "next/image";
import React from "react";
import AddtoCartButton from "./ui/AddtoCartButton";
import CurrencyTag from "./ui/CurrencyTag";

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

[];
interface ProductCardProps {
  data: product;
  cartItem: item | undefined;
  setCartItems: React.Dispatch<React.SetStateAction<item[]>>;
}
export default function ProductCard({
  data,
  cartItem,
  setCartItems,
}: ProductCardProps) {
  return (
    <div className="h-full w-full justify-between overflow-hidden rounded-lg">
      <div className="h-42 relative flex w-full items-center justify-center rounded-lg">
        <Image
          src={"/" + data.image.desktop}
          alt={data.name}
          width={502}
          height={502}
        />
        <AddtoCartButton cartItem={cartItem} setCartItems={setCartItems} />
      </div>

      <div className="flex flex-col items-start justify-evenly py-6 font-RedHat">
        <label className="text-xs text-Rose-500">{data.category}</label>
        <p className="text-sm font-semibold text-Rose-900">{data.name}</p>

        <CurrencyTag
          preText=""
          customStyle="text-sm font-semibold text-Red"
          price={data.price}
        />
      </div>
    </div>
  );
}
