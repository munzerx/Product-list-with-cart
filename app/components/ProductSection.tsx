import React from "react";
import data from "@/public/data.json";
import ProductCard from "./ProductCard";

export default function ProductSection() {

  return (
    <div className="w-9/12 h-full">
      <h1 className="text-3xl capitalize font-RedHat font-bold">desserts</h1>
      <section className="py-8 grid grid-cols-1 gap-5 lg:grid-cols-4 md:grid-cols-3">
        {data.map((product) => {
          return <ProductCard key={product.name} data={product} />;
        })}
      </section>
    </div>
  );
}
