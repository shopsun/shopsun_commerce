import React from "react";
import { useSelector, useDispatch } from 'react-redux'

function Rekap() {
  const rekap = useSelector((state) => state.handleCheckOut.product);
  const dispatch = useDispatch();
// console.log(updateStock) 
const calculeTotal = rekap.reduce((sum, i) => sum + i.qty * i.price, 0);

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
              {rekap.map(products => (
                  <tr key={products.id} class="border border-black-soft-600 p-2 ...">
                    <td>
                        {products.title}
                        <td />
                        {products.category}
                    </td>

                    <td class="border border-black-soft-600 p-2 ..." >
                    $ {products.price}
                    </td>

                    <td class="border border-black-soft-600 p-2 ..." >
                      {products.qty}
                    </td>

                    <td class="border border-black-soft-600 p-2 ..." >
                      $ {(products.price * products.qty).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th>Total Pendapatan: </th>
                  <th>$ {calculeTotal.toFixed(2)}</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
  );
}

export default Rekap;