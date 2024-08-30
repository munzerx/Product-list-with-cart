"use client";
import ProductSection from "./components/ProductSection";
import CartSection from "./components/CartSection";
import data from "@/public/data.json";
import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import ConfirmModal from "./components/ConfirmModal";

interface item {
  name: string;
  count: number;
}

export default function Home() {
  const createCart = () => {
    const arr: item[] = [];
    data.map((product) => {
      arr.push({ name: product.name, count: 0 });
    });
    return arr;
  };

  const [cartItems, setCartItems] = useState<item[]>([]);

  useEffect(() => {
    setCartItems(createCart);
  }, []);

  return (
    <main className="relative flex h-screen flex-row bg-Rose-50">
      <div className="relative flex flex-row items-center justify-between gap-10 overflow-y-scroll p-20">
        <ProductSection>
          {data.map((product) => {
            return (
              <ProductCard
                key={product.name}
                data={product}
                cartItem={cartItems.find((item) => item.name === product.name)}
                setCartItems={setCartItems}
              />
            );
          })}
        </ProductSection>

        <CartSection
          cartItems={cartItems}
          products={data}
          setCartItems={setCartItems}
        />
      </div>

      <ConfirmModal viewModal={true} >
        <div>adfasfas</div>
      </ConfirmModal>
    </main>
  );
}
