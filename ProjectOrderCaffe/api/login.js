const login = (user , password) => {
    const arr = { 'user' : user , 'password' : password};
    return fetch('http://192.168.1.162:88/apiCoffeeShop/login.php' , {
        method : 'POST',
        headers :{
            Accept:'application/json',
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify(arr)
    }).then(res =>  res.json())
}

export default login;