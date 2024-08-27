import React from "react";

export default function ProductSection({ children }: any) {
  return (
    <div className="h-full w-9/12">
      <h1 className="font-RedHat text-3xl font-bold capitalize">desserts</h1>
      <section className="grid grid-cols-1 gap-5 py-8 md:grid-cols-3 lg:grid-cols-4">
        {children}
      </section>
    </div>
  );
}
