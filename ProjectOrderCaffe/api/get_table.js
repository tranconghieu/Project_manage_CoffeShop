
export default Get_Table =  fetch('http://192.168.1.162:88/apiCoffeeShop/table.php')
.then((response) => response.json())
.then((responseJson) => {
    return responseJson
})
.catch((error) => {
    console.error(error);
});







