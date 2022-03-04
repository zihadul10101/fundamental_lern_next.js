import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Home = () => {
  const router = useRouter()
  const handleonClick = () => {
    console.log("placing your order");
    router.push('/product')
  }
  return (
    <div>
      <h1>Home page</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/product">
        <a>Product</a>
      </Link>
      <button onClick={handleonClick}>Please Order</button>
    </div>
  );
};

export default Home;