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
        <div>
            {content}
        </div>
    );
};

export default Home;