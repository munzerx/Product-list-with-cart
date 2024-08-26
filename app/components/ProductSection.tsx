import React from "react";
import data from "@/public/data.json";
import ProductCard from "./ProductCard";

export default function ProductSection() {
  return (
    <div className="h-full w-9/12">
      <h1 className="font-RedHat text-3xl font-bold capitalize">desserts</h1>
      <section className="grid grid-cols-1 gap-5 py-8 md:grid-cols-3 lg:grid-cols-4">
        {data.map((product) => {
          return <ProductCard key={product.name} data={product} />;
        })}
      </section>
    </div>
  );
}
