import React, { useState } from "react";

// Reusable components with inline styles and TypeScript types, exported as named functions

export function ProductTitle({ title }: { title: string }) {
  return (
    <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
      {title}
    </h1>
  );
}

export function ProductImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: "300px", marginBottom: "1rem", borderRadius: "8px" }}
    />
  );
}

export function ProductDescription({ description }: { description: string }) {
  return (
    <p style={{ fontSize: "1rem", lineHeight: "1.5", marginBottom: "1.5rem" }}>
      {description}
    </p>
  );
}

export function ProductSpecifications({
  specifications,
}: {
  specifications: string[];
}) {
  return (
    <ul
      style={{
        listStyleType: "disc",
        paddingLeft: "20px",
        marginBottom: "1.5rem",
      }}
    >
      {specifications.map((spec, index) => (
        <li key={index} style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
          {spec}
        </li>
      ))}
    </ul>
  );
}

export function ProductPrice({ price }: { price: string }) {
  return (
    <h2
      style={{
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#b12704",
        marginBottom: "1.5rem",
      }}
    >
      {price} NOK
    </h2>
  );
}
type AddToCartButtonProps = {
  price: number;
};

const formatPrice = (price: number) => {
  return price.toLocaleString("no-NO", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    currency: "NOK",
  });
};

export function AddToCartButton({ price }: AddToCartButtonProps) {
  const [cartPrice, setCartPrice] = useState(0);

  const handleAddToCart = () => {
    setCartPrice(cartPrice + price);
  };

  return (
    <div>
      <button
        onClick={handleAddToCart}
        style={{
          padding: "10px 20px",
          backgroundColor: "#ff9900",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "1rem",
          marginBottom: "1rem",
        }}
      >
        Add to Cart
      </button>
      <div style={{ fontSize: "1rem", fontWeight: "bold" }}>
        Cart Total: {formatPrice(cartPrice)} NOK
      </div>
    </div>
  );
}
