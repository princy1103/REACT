import { useSelector , useDispatch } from "react-redux";
import { cartProducts } from "../cart/cartSelectore";


const Cart = () => {
  const dispatch = useDispatch()
  const cartData=useSelector(cartProducts);
  console.log("CartData",cartData);

  return (
    <>
       <div className="container mx-auto">
                <div className="d-flex flex-wrap justify-content-evenly">
                    {
                        cartData.map((item,index)=>{
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

export default Cart