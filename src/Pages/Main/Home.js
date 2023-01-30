import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../component/ProductCard';
import loadProductData from '../../redux/thunk/products/fetchData';

const Home = () => {
    const products = useSelector((state) => state.products)
    const dispatch = useDispatch()
    useEffect (() =>{
        dispatch(loadProductData())
    },[dispatch])
let content ;
 if(products.length){
   content = products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))
 }

    return (
        <div className="max-w-7xl gap-14 mx-auto my-10">
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {content}
        </div>
        </div>
       
    );
};

export default Home;