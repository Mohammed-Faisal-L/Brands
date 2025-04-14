import React, { useState } from 'react';
import products from '../constants/shoppingData';
import ProductCard, { Product } from './ShoppingCard';

const ProductGridWithSearch: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = products.filter((product: Product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div id='products' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex justify-center mb-10">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full sm:w-2/3 lg:w-1/2 px-5 py-3 border border-gray-300 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                />
            </div>

            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredProducts.map((product: Product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center text-gray-400 text-lg mt-20">
                    No products found.
                </div>
            )}
        </div>
    );
};

export default ProductGridWithSearch;
