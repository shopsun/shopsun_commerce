import React  from "react";
import { useSelector, useDispatch } from 'react-redux'

function UpdateStok() {
  const updateStock = useSelector((state) => state.handleProduct.product);
  const dispatch = useDispatch();
// console.log(updateStock) 

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-black-soft">
          Products
        </h2>
          <div className="table-responsive">
            <table class="border-collapse border border-black-soft-800 ...">
              <thead class="table-dark">
                <tr class="border border-black-soft-600 p-2 bg-black-soft text-sm text-white h-5 w-5 ...">
                  <th>Product</th>
                  <th>Stok</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {updateStock.map(products => (
                <tr key={products.id} class="border border-black-soft-600 p-2 h-5 w-5 ...">
                  <td>
                      {products.title}
                      <td />
                      {products.category} 
                  </td>
                  <td class="border border-black-soft-600 p-2 h-5 w-5 ...">
                  <input
                    type="text"
                    className={`form-control border border-black-soft-600 p-2 h-7 w-25 ...`}
                    value={products.qty}
                  />
                </td>
                <td class="border border-black-soft-600 p-2 ...">
                  <button
                    className={`bg-blue-pastel group w-full py-2 px-4 text-sm text-white rounded-md border 
                    border-blue-pastel leading-5 font-medium hover:bg-blue-pastel focus:outline-none focus:border-blue-pastel 
                    focus:shadow-outline-blue-pastel active bg-blue-pastel active:outline-none transition duration-150 ease-in-out`}
                    type="button"
                  >
                    Update
                  </button>
                </td>
              </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
}

export default UpdateStok;