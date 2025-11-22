
// export function Product(props: {title: string, price: number}) {
//     return <div>
//         <h1>{props.title}</h1>
//         <h2>{props.price}</h2>
//     </div>
// }

interface ProductProps {
    title: string,
    price: number
}

// export function Product(props: ProductProps) {
//     return <div>
//         <h1>{props.title}</h1>
//         <h2>{props.price}</h2>
//     </div>
// }

// export function Product({title, price}: ProductProps) {
//     return <div>
//         <h1>{title}</h1>
//         <h2>{price}</h2>
//     </div>
// }
export function Product(props: ProductProps) {
    const {title, price} = props
    return <div>
        <h1>Title: {title}</h1>
        <h2>Price: {price}$</h2>
    </div>
}