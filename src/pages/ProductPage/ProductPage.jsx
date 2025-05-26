// // app/products/page.js

const { RSCPathnameNormalizer } = require("next/dist/server/normalizers/request/rsc");

// import ProductCard from '@/components/view/Card/ProductCard'
// import productData from '../../data/productData.json'

// const ProductsPage = () => {
//   const activeFilter = searchParams?.filter || 'all'
//   const products = productData?.products

//   // Filter products based on URL search params
//   const filteredProducts = activeFilter === 'all' 
//     ? products 
//     : products?.filter(product => 
//         product.title.toLowerCase().includes(activeFilter.toLowerCase()))
  
//   return (
//     <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Our Premium <span className="text-primary">Auto Parts</span>
//           </h1>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             High-performance components engineered for reliability and durability. 
//             Upgrade your vehicle with our cutting-edge automotive solutions.
//           </p>
//         </div>

//         {/* Filter buttons - These will be client-side interactive */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           <a
//             href="/products"
//             className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//               activeFilter === 'all' 
//                 ? 'bg-primary text-white' 
//                 : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//             }`}
//           >
//             All Products
//           </a>
//           <a
//             href="/products?filter=engine"
//             className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//               activeFilter === 'engine' 
//                 ? 'bg-primary text-white' 
//                 : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//             }`}
//           >
//             Engine Parts
//           </a>
//           <a
//             href="/products?filter=brake"
//             className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//               activeFilter === 'brake' 
//                 ? 'bg-primary text-white' 
//                 : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//             }`}
//           >
//             Brake System
//           </a>
//           <a
//             href="/products?filter=steering"
//             className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//               activeFilter === 'steering' 
//                 ? 'bg-primary text-white' 
//                 : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//             }`}
//           >
//             Steering
//           </a>
//           <a
//             href="/products?filter=transmission"
//             className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//               activeFilter === 'transmission' 
//                 ? 'bg-primary text-white' 
//                 : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//             }`}
//           >
//             Transmission
//           </a>
//         </div>

//         {/* Products grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//           {filteredProducts.length > 0 ? (
//             filteredProducts.map((product) => (
//               <ProductCard key={product._id} product={product} />
//             ))
//           ) : (
//             <div className="col-span-full text-center py-12">
//               <h3 className="text-xl font-medium text-gray-700">
//                 No products found matching your filter
//               </h3>
//               <a
//                 href="/products"
//                 className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors inline-block"
//               >
//                 Reset Filters
//               </a>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductsPage


import React from 'react'

export default function ProductPage() {
  return (
    <div>ProductPage</div>
  )
}
