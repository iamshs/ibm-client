import React from "react";

const ProductCard = ({ product }) => {
  
  return (
    <div className="shadow-lg  rounded-3xl border p-3 flex flex-col text-sky-900">
      <div className="h-52 w-52 mx-auto">
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className="text-xl font-bold text-center"> {product.name} </h1>
      <div>
      <h2 className="font-semibold text-center">Model : {product.model}</h2>
      <h2 className=" text-center text-black font-bold">Price: ${product.price}</h2>
      <div className="grid place-items-center mt-3">
      <input type={'submit'} className='bg-sky-600 w-[50%] font-bold text-sm py-2 rounded-lg  text-white' value={'SEE MORE'} />
      </div>
      </div>
    </div>
  );
};

export default ProductCard;
