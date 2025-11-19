import Cookie from 'js-cookie';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import ProductsCard from './ProductsCard';
const ProductPage=()=>{
    const [initialList,setIntialList]=useState([]);
    const jwtToken=Cookie.get('jwt_token');
     useEffect(()=>{
        
        const fetchdata=async()=>{
            const url='https://apis.ccbp.in/products';
            const jwtToken=Cookie.get('jwt_token');
            const options={
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                }
            }
            const respose = await fetch(url,options);
            const data=await respose.json();
            console.log(data);
            console.log(respose.ok);
            if(respose.ok===true){
                const updatedData=data.products.map(item=>({
                    id: item.id,
                    title: item.title,
                    brand: item.brand,
                    price: item.price,
                    imageUrl: item.image_url,
                    rating: item.rating

                }))
                setIntialList(updatedData);
            }

        };
        fetchdata();
    },[])
    if(jwtToken === undefined){
        return <Navigate to='/auth' />
    }

   
    return (
        <div className='flex flex-wrap gap-4 items-center justify-center px-6'>
           {initialList.map(item=>(
            <ProductsCard key={item.id} productDetails={item} />
           ))}
        </div>
    )
}
export default ProductPage;