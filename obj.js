let arr = [{name: "Laptop", cat: "Elect", price: 120},
{name: "Mobile", cat: "phone", price: 130},
{name: "Desktop", cat: "Elect", price: 110},];
console.log("main "+arr)

let filterArr = arr.filter(function (product) {product.cat === "phone"});
//let filterArr = arr["name"]
console.log(filterArr)
/*let newarr = [];
//arr.map((a, b) => a - b));
//arr.map((item) => console.log(item));
//newarr.push(arr.slice(0, 2));
//newarr.push(arr.splice(0, 2, "Ram"));
arr.push(15);
arr.pop()
arr.pop()
arr.unshift(15)
arr.shift()
arr.shift()
//arr.map((item) => item);
console.log("Ram  " + arr.indexOf(5))
//console.log("New "+ arr.reduce((cal, ind) => (cal+ind), 0));
/*for (let i = 0; i < arr.length; i++){
	//newarr.push((arr[i], arr[i+1]) =>arr[i] - arr[i+1])
	if(arr[i] < arr[i+1]){
	newarr.push(arr[i])
} else{
	newarr.push(arr[i+1])
}
} 

console.log(" Shyam "+newarr);*/
console.log(" Ram "+arr);