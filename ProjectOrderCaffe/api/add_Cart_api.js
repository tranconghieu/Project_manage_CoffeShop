

const PostItemCart = (cart) =>{
    return fetch('http://192.168.1.162:88/apiCoffeeShop/add_order.php',{
        method : 'POST',
        headers :{
            Accept : "application/json",
            'Content-Type' : 'application/json',
        },
        //body : '{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiRW1wbG95ZWUiLCJpYXQiOjE1NzE0Nzc1ODMsImV4cGlyZSI6MTY1Nzg3NzU4M30.b_TuWXzSxgLq0-y7gEdpYp6OZJ_ITUJb18PRJQR47kI","table_id":"2","Total":141000,"list_product":[{"id":"3","name":" Trà Xanh Royal Kem Cheese","quantity":3,"price":"47000"}]}'
        body : JSON.stringify(cart)
    })
    .then(res => res.text())
    .catch(e => console.log(e))
}
// const get_Tokent = () =>{
//   return getTokent()
//     .then(e => e.token  )

// }

const add_order = (token ,arrCart ) =>{
    try {
        arrCart.forEach( async (e) => {
            let cart = Object.assign({"token" : token},e);
            await PostItemCart(cart);
        });
        return true;

    } catch (error) {
        console.log(error);
        return false;
    }
    
    

}

export default add_order;