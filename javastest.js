let arr = [1, 8, 5, 2, 7];
let arr1 = [[1,2, 3],[4,5,6],[7, 8, 9]] 
let sum = 5;


function bfs(graph, root) {
const visited = new Set(); const queue = [root]; const visitedOrder = []; 
while (queue.length > 0){
const node = queue.shift(); if(!visited.has(node)){ visited.add(node); visitedOrder.push(node); 
//graph[node].forEach((neighbor) function(){ //=>
for (let i =0; i<graph[node].length; i++){
let neighor = graph[node];
ram(neighor);
function ram(neighor){ 
console.log(neighor);
if(! visited.has(neighor)) {

//queue.push(neighbor);
 }};}} 
return visitedOrder; } 
}
const graph = {'A': ['B', 'C'], 'B': ['A', 'D','E']}; 
const rootNode = 'A'; 
const visitedNodes = bfs(graph, rootNode); 
console.log('visited Nodes:', visitedNodes); 
/*function swap(matrix, r1, c1, r2, c2){
 let temp = matrix[r1][c1];
 matrix[r1][c1] = matrix[r2][c2];
 matrix[r2][c2] = temp
}
function  transform(matrix){
for(let rw = 0; rw<matrix.length-1; rw++){
for(let cl = rw; cl<matrix[0].length; cl++){
 swap(matrix, rw,cl,rw, cl)
//console.log(matrix)
return matrix;
}}}

function reverse(matrix){
for (let rw = 0; rw <matrix[0].length; rw++){
	let left = 0;
	let right = matrix.length-1;
	while(left <= right){
	swap(matrix, rw, left, rw, right);
	left++
	right--
	}
     }
return matrix;
}

function imageRotation(matrix) {
  transform(matrix);
  reverse(matrix);
  return matrix;
}

console.log(imageRotation(arr1))*/

/*function starPyramid(n){
let newarr = []
for (let i =0; i< n; i++){
  newarr[i] ="";
for (let j = 0; j <=i; j++){
     newarr[i] +="* "	
}}*/
/*function starPyramid(n){
let newarr = []
for (let i =0; i< n; i++){
  newarr[i] ="";
for (let j = n-1; j >=i; j--){
     
     newarr[i] +="* "
	
}}*/
function starPyramid(n){
let newarr = []
for (let i =0; i< n; i++){
  newarr[i] ="";
for (let j = n-1; j >=i; j--){
     let space = " ";
     newarr[i] +=(i*space)+"* "
	
}}
console.log(newarr)
}
console.log(starPyramid(4));

//arr.reverse()
//console.log(arr); 
//let ternarySearch = arr[1] > arr[2] ? true : false;
//console.log(ternarySearch)
//let ram = arr.forEach(function (item, index) { if(arr[index] == 8) {console.log(true)}}) 
//console.log(arr)
//function starP(num){for (let row = 0; row < 2 * num; row++){let totalColsInRow = row > num ? 2 *num-row: row; for(let col = 0; col< totalColsInRow; col++){console.log("* ");}}} starP(3);

//function factorialNum(num){if(num <1) return 1; return num * factorialNum(num -1)  return arr}console.log(factorialNum(4))

/*function insertionSort(arr){
for (let i = 1; i < arr.length; i++){
	let temp = arr[i];
	let j = i -1;
	while(j>=0 && arr[j] > temp){
	arr[j+1] = arr[j];
	j--;}
	arr[j+1] = temp
	} 
	return arr}
console.log(insertionSort(arr)) */

//let i = 0; let n = arr.length; while(i < n) { console.log(i); i++ }
//if(true) {console.log(arr)} 
//if (true) {console.log(arr[1]) } else if (true) {console.log(arr[2])} else {console.log(arr)} 
//if (true){ if(true) {console.log(arr[4]) } } 
//function twoSum(arr) { console.log(arr[3]) }
//twoSum(arr);
//console.log(arr.indexOf(7)); 
//console.log(arr.map((function (item, index) {console.log(item * index)}))); 

//console.log(arr)
//console.log(arr)
//console.log(arr.slice(0, 4)) 
//console.log(arr.splice(0, 0, "New")); 
//console.log(arr)
//console.log(arr.reduce(function (calculate, sum) {console.log(calculate + sum), 2}));
//console.log(arr.filter(function (product) { product ===8}));
//console.log(arr.find((item) => item === 8));

//console.log(arr.forEach(function(item, index, arr) { console.log(arr[index] * 5)}));


//console.log(arr.forEach(function(item, index, arr) { console.log(arr[index])}));
//arr.sort();
//console.log(arr);
/*
let arr = [1, 8, 5, 2, 7];
console.log("main "+arr)
//console.log(arr[3]);
function ram(){
console.log("Hari");
return "Hari"
}*/
//ram();

/*arr.sort((a, b) => a - b)
arr.sort(function (a, b) { a - b })
let ram = arr.sort()
console.log(arr);
let newarr = [];
let ram1 = arr.map(function (a, b) { console.log(a +" "+ b) });*/
//arr.map((item) => console.log(item));
//newarr.push(arr.slice(0, 2));
//newarr.push(arr.splice(0, 2, "Ram"));
/*arr.push(15);
arr.pop()
arr.pop()
arr.unshift(15)
arr.shift()
arr.shift()
let area = arr.map(function (item){ return Math.PI * item * item; 
});*/
//console.log(area)
//console.log(ram1)
//arr.map((item) => item);
//console.log("Ram  " + arr.indexOf(5))
//console.log("New "+ arr.reduce((cal, ind) => (cal+ind), 0));
/*for (let i = 0; i < arr.length; i++){
	//newarr.push((arr[i], arr[i+1]) =>arr[i] - arr[i+1])
	if(arr[i] < arr[i+1]){
	newarr.push(arr[i])
} else{
	newarr.push(arr[i+1])
}
} */
//console.log(" Ram "+arr);
//console.log(" Shyam "+newarr);

function addTwoSum(arr, tgt){
 /*for (let i=0; i < arr.length; i++){
	let n = arr.length; 
	for (let j = n; j >=1; j--){
	if(arr[i] + arr[j] == tgt){
	newarr1.push(arr[i], arr[j])
	console.log("Index "+newarr1);
}}}} */

//hashmap
const hm = new Map();
for (let i=0; i < arr.length; i++){
	let x = tgt - arr[i];
	if (hm.has(x)){
	let j = hm.get(x)
	console.log("Ram "+ arr[j], arr[i]) }
	hm.set(arr[i], i)
	}
	return arr[j], arr[i];
	}

let newarr1 = []
//addTwoSum(arr, 7);

