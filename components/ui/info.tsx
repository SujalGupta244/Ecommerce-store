"use client"
import { Product } from "@/types"
import Currency from "./currency"
import Button from "./button"
import { ShoppingCart } from "lucide-react"
import { MouseEventHandler } from "react"
import useCart from "@/hooks/use-cart"

interface InfoProps{
    data: Product
}

const Info : React.FC<InfoProps> = ({data}) => {
  
  
  const cart = useCart()

  const addToCart :MouseEventHandler<HTMLButtonElement> = (e) =>{
    e.stopPropagation()
    cart.addItem(data)
    // console.log(cart.items)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
          <p className="text-2xl text-gray-900">
              <Currency value={data?.price}/>
          </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>
            {data?.size?.name}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div className="h-6 w-6 rounded-full" style={{backgroundColor: data?.color?.value}}/>
        </div>
        
        <div className="">
          <h3 className="font-semibold text-black">Description:</h3>
          <p>{data.description}</p>
        </div>

      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2" onClick={addToCart}>
          Add to cart
          <ShoppingCart/> 
        </Button>
      </div>
    </div>
  )
}

export default Info