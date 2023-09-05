import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async() =>{

    const billboard = await getBillboard("f82fbd4d-5e90-4b07-b877-a7d1700fa3bf")

    const products = await getProducts({isFeatured: true})

    return(
        <Container >
            <div className="space-y-10 pb-10">
                <Billboard data={billboard}/>
                <div className="flex flex-col gap-y-8 px-8 sm:px-6 lg:px-8">
                    <ProductList title={"Featured Products"} items={products}/>
                </div>
            </div>
        </Container>
    )
}

export default HomePage;