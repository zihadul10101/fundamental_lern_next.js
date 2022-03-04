import Link from 'next/link';
import React from 'react';

const ProductList = ({productId = 100}) => {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h1>
        <Link href="/product/1">
          <a>
            Product 1
          </a>
        </Link>

      </h1>
    <h1>  <Link href="/product/2">
        <a>
          Product 2
        </a>
      </Link></h1>

   <h1>
   <Link href="/product/3">
        <a>
          Product 3
        </a>
      </Link>
   </h1>
   <h1>
   <Link href={`/product/${productId}`}>
        <a>
          Product 3
        </a>
      </Link>
   </h1>
   

    </div>
  );
};

export default ProductList;