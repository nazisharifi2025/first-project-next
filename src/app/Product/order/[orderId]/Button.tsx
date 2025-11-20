"use client";
import { useRouter } from "next/navigation";
function Button() {
      const router = useRouter();
    function handelClick(){
      
        console.log("Your Order Paleasd");
        router.back();
    }
  return (
    <div><button className='bg-black px-5 py-2 text-white' onClick={handelClick}>Order Now</button></div>
  )
}

export default Button