import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const submit = data =>{
   const product ={
    name : data.name,
    model : data.model,
    price: data.price,
    description : data.description
   }
   console.log(product)
  }
    return (
      <div className='flex justify-center items-center h-full '>
      <form
        className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
        onSubmit={handleSubmit(submit)}
      >
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='name'>
            Name
          </label>
          <input type='text' id='name' {...register("name")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='model'>
            Model
          </label>
          <input type='text' id='model' {...register("model")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='image'>
            Image
          </label>
          <input type='text' name='image' id='image' {...register("image")} />
        </div>

        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='price'>
            Price
          </label>
          <input type='text' name='price' id='price' {...register("price")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='price'>
            Description
          </label>
          <input type='text' name='description' id='description' {...register("description")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'></div>

        <div className='flex justify-between items-center w-full'>
          <button
            className=' px-4 py-3 bg-sky-600 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;