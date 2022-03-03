import { useRouter } from 'next/router';
import React from 'react';

const ProductDetail = () => {
    const router= useRouter();
    const productId = router.query.productId
    return (
        <div>
            <h1>Detail about product {productId} </h1> 
        </div>
    );
};

export default ProductDetail;