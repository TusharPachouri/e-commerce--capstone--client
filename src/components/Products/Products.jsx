import React from 'react'

export default function Products() {
    return (
        <>
            <section className="py-6 sm:py-12 bg-gray-800 text-gray-100">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        {/* item 1 */}
                        <article className="flex flex-col bg-gray-900">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-100 bg-gray-500" src="https://m.media-amazon.com/images/I/81vxWpPpgNL._SL1500_.jpg" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-400">Samsung Galaxy S24 Ultra 5G</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Meet Galaxy S24 Ultra, the ultimate form of Galaxy Ultra with a new titanium exterior.</h3>
                                <div className="flex justify-between pt-3 space-x-2 text-xs text-gray-400">
                                    <button type="button" className="flex-1 p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">
                                        Rent
                                    </button>
                                    <button type="button" className="flex-1 p-3 font-semibold tracking-wide rounded-md bg-gray-700 text-white dark:bg-gray-600 dark:text-gray-50">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </article>
                        {/* item 2 */}
                        <article className="flex flex-col bg-gray-900">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-100 bg-gray-500" src="https://m.media-amazon.com/images/I/61mI-ghw8mL._SL1200_.jpg" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-400">ASUS ROG Flow X13</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">We fine-tuned every aspect of cooling system. with liquid metal on CPU to Keep optimum temperature.</h3>
                                <div className="flex justify-between pt-3 space-x-2 text-xs text-gray-400">
                                    <button type="button" className="flex-1 p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">
                                        Rent
                                    </button>
                                    <button type="button" className="flex-1 p-3 font-semibold tracking-wide rounded-md bg-gray-700 text-white dark:bg-gray-600 dark:text-gray-50">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </article>
                        {/* item 3 */}
                        <article className="flex flex-col bg-gray-900">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-100 bg-gray-500" src="https://m.media-amazon.com/images/I/61mOVGinDdL._SL1500_.jpg" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-400">Daikin 0.8 Ton 3 Star</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Split AC with non-inverter compressor: Power chill operation to ensure quick cooling</h3>
                                <div className="flex justify-between pt-3 space-x-2 text-xs text-gray-400">
                                    <button type="button" className="flex-1 p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">
                                        Rent
                                    </button>
                                    <button type="button" className="flex-1 p-3 font-semibold tracking-wide rounded-md bg-gray-700 text-white dark:bg-gray-600 dark:text-gray-50">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </article>
                        {/* // item 4 */}
                        <article className="flex flex-col bg-gray-900">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-100 bg-gray-500" src="https://m.media-amazon.com/images/I/71657TiFeHL._SL1500_.jpg" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-400">Apple iPhone 15</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">We fine-tuned every aspect of cooling system. with liquid metal on CPU to Keep optimum temperature.</h3>
                                <div className="flex justify-between pt-3 space-x-2 text-xs text-gray-400">
                                    <button type="button" className="flex-1 p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">
                                        Rent
                                    </button>
                                    <button type="button" className="flex-1 p-3 font-semibold tracking-wide rounded-md bg-gray-700 text-white dark:bg-gray-600 dark:text-gray-50">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}