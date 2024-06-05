"use client";
import { FunctionComponent, useEffect, useState } from "react";
import ProductItems from "./productItems";
import Link from "next/link";
import { Product } from "@/types/product";
import Loader from "../loader/loader";
import { count } from "console";
import { getProducts } from "@/services/products-service";

interface PopularProductsProps {}

const PopularProducts: FunctionComponent<PopularProductsProps> = () => {
  const [mount, setMount] = useState(false);
  const [products, setProducts] = useState<Product[] | null>([]);
  const [loading, setLoading] = useState(false);

  const width = typeof window == "undefined" ? 0 : window.innerWidth;
  function getCount(width: number) {
    if (width >= 1536) return 5;
    if (width < 1536 && width >= 1280) return 4;
    return 0;
  }
  useEffect(() => {
    setMount(true);
    getProducts(getCount(width))
      .then((products) => {
        setProducts(products);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [width]);

  if (!mount) return <Loader />;
  if (products == null) return <></>;

  return (
    <div className="pt-48 pb-16 border-b">
      <div className="container mx-auto">
        <h2 className="text-center mb-14">NEW ARRIVALS</h2>
        {loading ? (
          <Loader />
        ) : (
          <ProductItems products={products} count={getCount(width)} />
        )}

        <div className="flex justify-center">
          <Link
            className="border rounded-full block py-4 px-20 mt-9"
            href="/all"
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;