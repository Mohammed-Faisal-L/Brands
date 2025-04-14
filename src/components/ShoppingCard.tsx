import React from 'react';

export interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover rounded-t-2xl"
      />
      <div className="p-5">
        <h2 className="text-lg font-medium text-gray-900 truncate mb-1">
          {product.title}
        </h2>
        <div className="text-sm text-gray-600 space-y-1">
          <p>
            <span className="text-gray-500">Price:</span>{' '}
            <span className="text-gray-800 font-medium">${product.price.toFixed(2)}</span>
          </p>
          <p>
            <span className="text-gray-500">Discount:</span>{' '}
            <span className="text-red-600 font-medium">{product.discountPercentage}%</span>
          </p>
          <p>
            <span className="text-gray-500">Now:</span>{' '}
            <span className="text-green-600 font-semibold">${product.discountedTotal.toFixed(2)}</span>
          </p>
        </div>
        <button className="mt-4 w-full bg-blue-600 text-white text-sm font-medium py-2 rounded-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
