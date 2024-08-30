import React from "react";

interface currencyTagProps {
  price: number;
  customStyle: string;
  preText: string;
}

export default function CurrencyTag({
  price,
  customStyle,
  preText = "",
}: currencyTagProps) {
  return (
    <p className={customStyle}>
      {preText}
      {price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      })}
    </p>
  );
}
