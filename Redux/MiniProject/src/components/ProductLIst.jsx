import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addTocart,addProducts } from "../cart/cartSlice";
import { addProduct } from "../cart/cartSelectore";

const ProductList=()=>{
    const dispatch=useDispatch()
    const products=useSelector(addProduct)

    console.log('products',products);
    const fetchProducstData=async()=>{
        const res= await fetch('https://dummyjson.com/products/')
        const data = await res.json()
        dispatch(addProducts(data.products))
    }
    useEffect(()=>{
        fetchProducstData()
    },[])

    return(
        <>
            <div className="container mx-auto">
                <div className="d-flex flex-wrap justify-content-evenly">
                    {
                        products.map((item,index)=>{
                            return(
                                <div key={index} className="w-25 border m-2 p-4">
                                    <div className="text-center">
                                        <img src={item.images[0]} alt="not" className="w-75 "/>
                                    </div>
                                    <div>
                                        <h6>{item.title}</h6>
                                        <p>${item.price}</p>
                                        <h6>Brand : {item.brand}</h6>
                                    </div>
                                    <div>
                                        <button className="bg-primary text-white p-2 mt-2" onClick={()=>dispatch(addTocart(item.id))}>Add Cart</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        
        </>
    )
    
}


export default ProductList