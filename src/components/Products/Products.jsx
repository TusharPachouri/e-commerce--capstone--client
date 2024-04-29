import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
export default function Products() {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://e-commerce-capstone-server.vercel.app/api/v1/products/');
                setItems(response.data.data.products);
                console.log(items);
            } catch (error) {
                setError('Error fetching data from the server.');
                console.error('Error fetching data:', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <>
            <section className="py-6 sm:py-12 bg-gray-800 text-gray-100">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        {/* item 1 */}
                        {/* I've to loop this card */}
                        {items.map((product) => (
                            <article key={product._id} className="flex flex-col bg-gray-900">
                                <a rel="noopener noreferrer" href="#" aria-label={product.item_name}>
                                    <img alt={product.item_name} className="object-cover w-full h-100 bg-gray-500" src={product.image} />
                                </a>
                                <div className="flex flex-col flex-1 p-6">
                                    <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-400">{product.item_name}</a>
                                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{product.description}</h3>
                                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                                        <span>Rs {product.price}</span>
                                        <span>#{product.category}</span>
                                    </div>
                                    <div className="flex justify-between pt-3 space-x-2 text-xs text-gray-400">
                                        <Link to={`/rent/${product._id}`} className="flex-1 p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">
                                            Rent
                                        </Link>
                                        <Link to={`/buy/${product._id}`} className="flex-1 p-3 font-semibold tracking-wide rounded-md bg-gray-700 text-white dark:bg-gray-600 dark:text-gray-50">
                                            Buy Now
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}