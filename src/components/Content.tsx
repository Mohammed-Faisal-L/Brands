import React from 'react';
import articleImage from '../assets/articleImage.webp';

const MyComponent: React.FC = () => {
    return (
        <div id='about' className="flex flex-col-reverse md:flex-row w-full">
            <div className="w-full md:w-1/2 our-story-section">
                <div className="text-left ps-13">
                    <h1 className="our-story-heading">Our Story</h1>
                    <p className="our-story-paragraph text-2xl font-semibold">
                        Launced in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in India.
                        Supported with a wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sailers and 300 brands
                        and serves 3 million customers across the region.
                    </p>
                    <p className="our-story-paragraph text-2xl font-semibold">
                        Exclusive has more than 1 Million products to offer, growing fast. Exclusive offers a diverse assortment in categories
                        ranging from customers.
                    </p>
                </div>
            </div>

            <div className="w-full md:w-1/2 p-4 md:p-6 md:h-[500px] flex items-center justify-center">
                <img
                    src={articleImage}
                    alt="Our Story"
                    className="h-full md:h-[500px] lg:h-auto w-auto max-w-full rounded object-contain"
                />
            </div>
        </div>
    );
};

export default MyComponent;
