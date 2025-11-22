
// ReactNode - это тип любого элемента, который реакт может отобразить
// number, string, array из ReactNode, HTML теги. 
// Однако boolean, null, undefined - являются реактовскими узлами, но ничего не рендерят
// 

import { ProductList } from "./ProductList";

// export function App() {
//     const element = <h1>Hello from JS variable</h1>
//     const users = true
//     return <div>
//         <a href="https://wwww.google.com">Click me please</a>
//         {element}
//         {null}
//     </div>
// }
// export function App() {
//     return (
//         <div>
//             <div>
//                 <a href="https://wwww.google.com">Click me please</a>
//             </div>
//             <button></button>
//         </div>
//     )
// }
// export function App() {
//     const users = ["User1", "User2", "User3"]
//     return (
//         <div>
//             <div>
//                 <a href="https://wwww.google.com">Click me please</a>
//             </div>
//             {users.map( (user) => {
//                 return <div>
//                     <span>My user is {user}</span>
//                     <button>Delete user</button>
//                     <button>Update user</button>
//                 </div>
//             })}
//         </div>
//     )
// }
// export function App() {
//     const users = ["User1", "User2", "User3"]
//     const isAdmin: boolean = true

//     // if (isAdmin) {
//     //     return <h1>You have no permission to view all users</h1>
//     // } else {
//     //     return users.map( (user) => {
//     //             return <div>
//     //                 <span>My user is {user}</span>
//     //                 <button>Delete user</button>
//     //                 <button>Update user</button>
//     //             </div>
//     //         })}
//     // }
//     // const displayData = isAdmin ? 
//     //         <h1>You have no permission to view all users</h1>  : 
//     //         <h1>Go to view all users</h1>

//     if (!isAdmin) {
//         return <h1>You have no permission to view all users</h1>
//     }

//     return (
//         <div>
//             <div>
//                 <a href="https://wwww.google.com">Click me please</a>
//             </div>
//             {users.map( user => <h1>{user}</h1>)}
//             {isLoading ? <p>Loading</p> : <p>Data</p>}
//         </div>
//     )
// }

// export function User() {
//     const name = "Useer1"
//     const age = 15

//     return <div>
//         <h1>Name: {name}</h1>
//         <p>Age: {age}</p>
//     </div>
// }
// export function App() {
//     const users = ["User1", "User2", "User3" ]
//     return <div>

//     </div>
// }

export function App() {
    return <div>
        <ProductList></ProductList>
    </div>
}