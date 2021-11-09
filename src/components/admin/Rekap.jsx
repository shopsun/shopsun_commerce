import React, { useState, useEffect } from "react";

function Rekap() {
    const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.slice(0, 10)));
  }, []);

  

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-black-soft">
          Rekap Penjualan
        </h2>
          <div className="table-responsive">
            <table class="border-collapse border border-black-soft-800 ...">
              <thead class="table-dark">
                <tr class="border border-black-soft-600 p-2 bg-black-soft text-sm text-white ...">
                  <th>Product</th>
                  <th>Harga</th>
                  <th>Terjual</th>
                  <th>Rekap Penjualan</th>
                </tr>
              </thead>
              <tbody>
                {products.map((products, idx) => (
                  <tr class="border border-black-soft-600 p-2 ...">
                    <td>
                        {products.title}
                        <td />
                        {products.category}
                    </td>
                    <td class="border border-black-soft-600 p-2 ..." >{products.price}</td>
                  </tr>
                ))}
                <td>
                    TOTAL PENDAPATAN
                </td>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
}

export default Rekap;