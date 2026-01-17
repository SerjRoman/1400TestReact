import { Link, useNavigate, useParams } from "react-router-dom"
import { useGetProductById } from "../../hooks"
import { useContext, useEffect } from "react"
import { CartContext } from "../../context"

export function ProductPage() {
    const {id} = useParams<{id: string}>() // 1 | 10 | "dasdsadas"
    // +undefined -> NaN
    const currentId = Number(id)
    const {product, isLoading, error} = useGetProductById({id: currentId})
    const navigate = useNavigate()
    const cartCtx = useContext(CartContext)

    useEffect( () => {
        if (isNaN(currentId)) {
            navigate("/")
        }
    } ,[currentId])

    if(isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error occured. Try again later. <p>{error}</p></div>
    }
    if (!product) {
        // return <div>
        //     <p>Product by this id: {id} does not exist!!!. </p>
        //     <Link to={'/products/'}>Go to products</Link>
        // </div>
        navigate('/products')
        return null;
    }

    return (
        <div>
            <div><img src={product.image} alt="" /></div>
            <div>
                <p>{product.name}</p>
                {/* <p>{product.description}</p> */}
                <p>Price: {product.price}</p>
                <div>
                    <button onClick={() => {
                        cartCtx?.addToCart(product)
                    }}>Add to cart</button>
                    <button>Buy</button>
                </div>
            </div>
        </div>
    )
}