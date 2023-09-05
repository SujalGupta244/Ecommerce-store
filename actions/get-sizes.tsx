import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;


const getSizes = async() : Promise<Size[]> =>{
    const res = await fetch(URL)
    const sizes = await res.json()

    return sizes
}

export default getSizes

