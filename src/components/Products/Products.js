import ProductCard from "../ProductCard/ProductCard";
import Effect from "../Effect/Effect";
import { useState, useEffect } from "react";
function Products() {
  console.log("Products")
    // const products = [
    //       {
    //         id: 1,
    //         title: "Apple iPhone 14",
    //         price: "Rs. 1,00,000"
    //       },
    //       {
    //         id: 2,
    //         title: "Apple iPhone 13",
    //         price: "Rs. 70,000"
    //       },
    //       {
    //         id: 3,
    //         title: "Google Pixel 7",
    //         price: "Rs. 50,000"
    //       },
    //       {
    //         id: 4,
    //         title: "Nokia 1100",
    //         price: "Rs. 2,000"
    //       },
    //       {
    //         id: 5,
    //         title: "Samsung Galaxy S10",
    //         price: "Rs. 1,00,000"
    //       },
    //       {
    //         id: 6,
    //         title: "Sony Xperia S10",
    //         price: "Rs. 1,00,000"
    //       }
    //     ];
    let [products,setProducts] = useState([]);
    useEffect(() => {
      fetch("https://run.mocky.io/v3/279c028e-f492-4e0f-932b-51dbed1b1dce").then(
        (response) => {
          return response.json();
        }  
  
      ).then((res) =>{
        console.log(res);
        products = res;
        setProducts(res);
      })
    }, []);
    return (
      <div>
          <div><Effect /></div>
            {
                products.map(function (item) {
                    return (<ProductCard key ={item.id} title={item.title} price={item.price} />)
                })
            }
        </div>
    )
}
export let a = 10;
export let b = 20;
export default Products;
// Javascript XML 

//ProductCard(title)
//named export 
//default export
// One default export
// multiple named exports



// oldDom = [
// <ProductCard key = {i1} title="Title 1" />,
// <ProductCard key = {i2} title="Title 2" />,
// <ProductCard key = {i3} title="Title 3" />
// ] 

// newDom = [
// <ProductCard key = {i1} title="Title 1" />,
// <ProductCard key = {i4} title="Title 4" />,
// <ProductCard key = {i2} title="Title 2" />,
// <ProductCard key = {i3} title="Title 3" />
// ]

// product card with key i4 and title 4 has to be added
