//question

const questions = [
{
question: "Q.  How use a function  on array for sort?",
options: ["arr.sort() for string & arr.sort((a, b) => a - b); use for compare", "Ram"],
correct: "mount"},
{
question: "Q.  How use a function on array for electration ?",
options: ["arr.forEach((call back = item, index, arr) => item or index or arr[index] can be used", "Ram"],
correct: "Ram"},
{question: "Q.  How use a function on array for find?",
options: ["arr.find((call back = item, index, arr) => item or index or arr[index] === 'value') can be used to find", "Ram"],
correct: "Ram"},
{question: "Q.  How use a function on array for filter?",
options: ["arr.filter((call back = product) => product.cat ==='electronic') can be used to filter all value", "Ram"],
correct: "Ram"},
{question: "Q.  How use a function on array for reduce (Total of Sum)?",
options: ["arr.reduce((call back = calculate, sum) => calculate + sum.cat, index like 0,1,2) can be used to filter all value", "Ram"],
correct: "Ram"},
{question: "Q.  How use a function on array for .splice ?",
options: ["arr.splice(0, 1 or index 2 or 3 till)  can be used to splice the value", "Ram"],
correct: "Ram"},
{question: "Q.  How use a function on array for slice?",
options: ["arr.slice(0, 5) can be used to slice means a piece value", "Ram"],
correct: "Ram"},
{question: "Q.  How use a function on array for map?",
options: ["arr.map((function (item) => {return item * item}) can be used to filter all value", "Ram"],
correct: "Ram"},
{question: "Q.  How use a function on array for indexOf?",
options: ["arr.indexOf(arr[i]) can be used to check index of a value", "Ram"],
correct: "Ram"},
{question: "Q.  How write a function declaration ?",
options: ["function twoSum(perameter) { console.log(parameter) }can be used to declaration of a function", "Ram"],
correct: "Ram"},
{question: "Q.  How write a call a function twoSum   ?",
options: ["twoSum(arr) can be used to call of a function two Sum", "Ram"],
correct: "Ram"},
{question: "Q.  How use if, if else, nested if & nested if else for compare two values   ?",
options: ["if(true) {console.log(arr)} || if (true) {  } else if () {} else {} || if (true){ if(true) { } }} (arr) can be used to call of a function two Sum", "Ram"],
correct: "Ram"},
{question: "Q.  How to prepare for an interview?",
options: ["1. Who you are ? what are you doing? 2. Strong point + Tell about Career Gp(Why)? 3. What I have learned for this industry ? How I have trained myself for the role? 4.  What are my goals?", "Ram"],
correct: "Ram"},
{question: "Q.  How prepare english?",
options: ["1.  Grammar - Tense, Setence formation (sentence structure), Verb Noun matching. 2. Reading moral stories.  3 Assertive communcation practise.  4. Preparing self-introduction ", "Ram"],
correct: "Ram"},
{question: "Q.  What is Maharbin formula ?",
options: ["1.  55% body lan/ 38% Tone /7 % content 2.  Assertive - Direct, Respectful and Clear. 3. PREP and STAR techniques. 4.  Voice modulation.  5. Active listening", "Ram"],
correct: "Ram"},
{question: "Q.  What is behavour type question STAR technics and optional question PREP technics   ?",
options: ["Situation Task Action Result and Point Reason Example Point reiteration ", "Ram"],
correct: "Ram"},
{question: "Q.  Remember for reading paragraphs  ?",
options: ["Each participant reads the script aloud, focusing on - Emphasizing key points( e.g numbers, achievement) 2. Slowing down or pausing at transitions (e.g For instance) 3.  Adding enthusiasm  through pitch variation (e.g achieve measurable growth)", "Ram"],
correct: "Ram"},
{question: "Q.  Phrase and context  ?",
options: ["1. Could you elaborate on that? : Asking for clarification 2. We need to prioritize this. : Task management. 3. Thank you for your feedback. : Receiving constructive input. 4.  I would recommend considering : Expressing opinion or suggestions", "Ram"],
correct: "Ram"},
{question: "Q.  How non verbal work ?",
options: ["1.  Body lang Strategy (mendler's SLANT (s.. Listen Action and ask question, Node T .... strategy) 2. Tone of the voice (Excited/happy situation- high pitch. Serious/Authorative/sad - Low pitch", "Ram"],
correct: "Ram"},
{question: "Q.  How self-introduction via personal branding strategy?",
options: ["1.  Who you are and what you do? 2.  What you bring to the table. 3.  What you are looking forward to ?","Ram"],
correct: "Ram"},
{question: "Q.  Tell me about a time when you failed at  a task. What did you learn from that Experience?",
options: ["Ram", "Ram"],
correct: "Ram"},
{question: "Q.  Describe a time when you had multiple tasks to complete in a short period.  How did you prioritise and manage your time.?",
options: ["Ram", "Ram"],
correct: "Ram"},
{question: "Q.  How you ever worked in a team with confilicting opinions? How did you manage to work together and achieve success?",
options: ["Ram", "Ram"],
correct: "Ram"},
{question: "Q.  Tell me about a time when a project or task you were working on did't go as planned.  What did you learn from it?",
options: ["Ram", "Ram"],
correct: "Ram"},
{question: "Q.  Opinion based Qs.What would you do if you had to manage a project with limited resources but a tight deadline?",
options: ["Ram", "Ram"],
correct: "Ram"},
{question: "Q.  Opinion based Qs. How imortant is work-life balance in a professional career? Is it more important than job growth and career advancement?",
options: ["Ram", "Ram"],
correct: "Ram"},
{question: "Q.  Do you believe flexible working hours help improve productivity? Why or why not?",
options: ["Ram", "Ram"],
correct: "Ram"},
{question: "Q.  If you were managing a team and one member was consistently underperforming, how would you handle the situation?",
options: ["Ram", "Ram"],
correct: "Ram"},
{question: "Q.  Imagine you are in a situation where a colleague disagrees with your approach to a project.  How would you handle the conflict?",
options: ["Ram", "Ram"],
correct: "Ram"},
{question: "Q.  How use Linear in DSA (Data Structure and Algorithms?",
options: ["Array, LinkedList, Stacks, Queues, Hash Tables", "Ram"],
correct: "Ram"},
{question: "Q.  How use Non Linear in DSA (Data Structure and Algorithms?",
options: ["Trees, Binary Search Tree, Heaps, Graphs, Trie, Union-Find", "Ram"],
correct: "Ram"},
{question: "Q.  How use Linear in DSA (Data Structure and Algorithms/Technique?",
options: ["Array, LinkedList, Stacks, Queues, Hash Tables", "Ram"],
correct: "Ram"},
{question: "Q.  How use (Data Structure and Algorithms?",
options: ["Arrays, LinkedList, Stack & Queues, Hash Table, Two Pointers/Sliding Window, Recursion/Backtracking, Sorting, Searching, Bit Manipulation, Tree/BST/Trie, Heaps, Greedy, Dynamic Programing, Graphs/Union Find", "Ram"],
correct: "Ram"},
{question: "Q.  Clock is ticking but are you?",
options: ["DSA, System Design, Full Stack Development, Resume, Mock interviews, Projects", "Ram"],
correct: "Ram"},
{question: "Q.  How use Time and space complexity?",
options: ["O(1), O(log2(n)), O(n), O(n Log2(n)), O(n^2), O(2^n), O(n!)", "Ram"],
correct: "Ram"},
{question: "Q.  Topic for math question in TCS?",
options: ["%, Elementary Statistics, Number System, Arithmetic, Data Interpretation, Geometry & Mensuration, Profit & Loss : (P = Sell P - Buy.P) ,Ratio & Proportion, Time & work, Simplification,  ", "Ram"],
correct: "Ram"},
{question: "Q.  Topic for math question in TCS?",
options: ["Speed, Time & Distance: (S = D/T) (D = S * T) (T = D/S) , LCM/HCF, Linear Equation, Mixture & Aligation, Permutation & Combination", "Ram"],
correct: "Ram"},
{question: "Q.  Topic for math question in TCS?",
options: ["Simple & Compound Interest, Average, Divisibility Rules, Partnership, Probaility, Age Problem, Train Problems", "Ram"],
correct: "Ram"},
{question: "Q.  How handle with Queue?",
options: ["(FIFO)  Queue<Double> queue = new PriorityQueue<>(); queue.offer(3.0); while (!queue.isEmpty()){System.out.println(queue.poll());  ", "Ram"],
correct: "Ram"},
{question: "Q.  How handle with Stack?",
options: ["(FILO)  Stack<Double> stack = new Stack<>(); stack.push(3); while (!queue.isEmpty()){System.out.println(stack.pop());  ", "Ram"],
correct: "Ram"},
{question: "Q.  Time complexity?",
options: ["JAVA long startTime; long endTime; long elapsedTime; for(int i=0; i<100000; i++){ linkedList.add(i); arrayList.add(i); startTime = System.nanoTime(); linkedList.get(0/5000) or linkedList.remove(0/59999); endTime = System.nanoTime(); elapsedTime = endTime - startTime;System.out.println('LinkedList: \t' + elapsedTime+' ns'; same code to array list", "Ram"],
correct: "Ram"},
{question: "Q.  How use reverse on arry?",
options: ["arr.reverse()", "Ram"],
correct: "Ram"},
{question: "Q.  How many type of search ?",
options: ["Binnery Search, Breadth First S, Depth First S, Exponential S, Interpolation S, Hashing S, Jump S, Kmuth-Morris Pratt (KMP) S,Linear S, Ternary S;  ", "Ram"],
correct: "Ram"},
{question: "Q.  How many type of Sort?",
options: ["Bubble S, Bucket S, Counting S, Heep Sort, Insertion S, Merge S, quick S, Radix S, Selection S, Timsort", "Ram"],
correct: "Ram"},
{question: "Q.  How many type of Algorithm?",
options: ["Brute Force, Binnery S, Bit Manipolation, Divide & conquer, Dynamic Programming, Greedy Algorith, Hash Table, Sorting, Sliding Window, Two Pointer", "Ram"],
correct: "Ram"},
{question: "Q.  How many type of Data Structure?",
options: ["Array, Array list, Array Buffer, Array Deque, ArrayBlockingQueue, Current LinkedList, CopyOnWrite, DataView, Generator, HashSet, HashMap, Iterator, Linked List, Linkedblockingqueue, Map, Prorityqueue, Promise, Queue, Stack, Seltator, Tree, TreeMap, TreeSet, vector, weekMap, WeekSet", "Ram"],
correct: "Ram"},
{question: "Q.  How use for loop in javascript?",
options: ["for (let i = 0; i < 10 or n or arr.length; i++) { console.log(i) }", "Ram"],
correct: "Ram"},
{question: "Q.  How use while loop in javascript?",
options: ["let i = 0; let n = arr.length; while(i < n) { console.log(i); i++ }", "Ram"],
correct: "Ram"},
{question: "Q.  How use break in a loop in javascript?",
options: ["for (let i = 0; i < 10 or n or arr.length; i++) { if (i === 5) {console.log(i); break;}", "Ram"],
correct: "Ram"},
{question: "Q.  How use continue in a loop in javascript?",
options: ["for (let i = 0; i < 10 or n or arr.length; i++) { if (i === 5) {console.log(i); continue;}", "Ram"],
correct: "Ram"},
{question: "Q.  How use return in a loop in javascript?",
options: ["for (let i = 0; i < 10 or n or arr.length; i++) { if (i === 5) {console.log(i); return i;}", "Ram"],
correct: "Ram"},
{question: "Q.  How use insertion Sort javascript?",
options: ["function insertionSort(arr){for (let i = 1; i < arr.length; i++){	let temp = arr[i];let j = i -1;	while(j>=0 && arr[j] > temp){arr[j+1] = arr[j];	j--;}	arr[j+1] = temp} return arr}console.log(insertionSort(arr))", "Ram"],
correct: "Ram"},
{question: "Q.  How use factorialNum in javascript?",
options: ["function factorialNum(num){if(num <1) return 1; // base case return num * factorialNum(num -1); //recursive  return arr}console.log(factorialNum(4))", "Ram"],
correct: "Ram"},
{question: "Q.  How use LinkedList in javascript?",
options: ["linkedList.offer('A');linkedList.offer('B'); linkedList.add(2,'C'); linkedList.remove('C'); console.log(linkedList.peekFirst());console.log(linkedList.peekLast()); let first = linkedList.removeFirst(); let last = linkedList.removeLast();", "Ram"],
correct: "Ram"},
{question: "Q.  How use Core Data Structures in javascript?",
options: ["1. Array, LinkedList, Stacks, Queues, Binary Trees, Hash Table. 2  Heeps, Graphs.  3  Tries, Union Find ", "Ram"],
correct: "Ram"},
{question: "Q.  How use Core Array function in javascript?",
options: ["1. Searching, Sorting, Two Pointers, Sliding Window ", "Ram"],
correct: "Ram"},
{question: "Q.  How use Core program  in javascript?",
options: ["1. Recursion, Backtracking, Dynamic Programming, Greedy Algorithms ", "Ram"],
correct: "Ram"},
{question: "Q.  How use  in javascript?",
options: ["1. Write Code, Test, Understand Big O ", "Ram"],
correct: "Ram"},
{question: "Q.  How use i=i+2 value in javascript?",
options: ["for (let i = 0; i < n; i=i+2){console.log(i)},for (let i = 10; i < 5; i=i-2){console.log(i)}, for (let i = 0; i < n; i=i*2){console.log(i)}  ", "Ram"],
correct: "Ram"},
{question: "Q.  How use for loop action  in javascript?",
options: ["for ((let i = 0;//(1) i < n;//(2) i=i+2//(4)){console.log(i)//(3)} last 2-5 exit  ", "Ram"],
correct: "Ram"},
{question: "Q.  How use 6 Step Strategy to solve any problem in javascript?",
options: ["1. Understand the problem. 2. Design test data/test case (input and expected output). 3. Derive the solution- solve the problem(write pseudo code) 4. Test the solution(against the test data/test cases). 5. Write the program/code (using java or js). 6. Test the code(resolve errors and debug if required)   ", "Ram"],
correct: "Ram"},
{question: "Q.  How use concat in arr  in javascript?",
options: ["let str1 = 'Hello'; let str2 = 'World'; console.log(str1+ ' '+str2) or console.log(str1.concat(' ', str2); console.log(`${str1} ${str2}`); console.log(str1.trim()); console.log(str1.toUpperCase());console.log(str1.trim()); console.log(str1.toLowerCase());  ", "Ram"],
correct: "Ram"},
{question: "Q.  What is Data Types in javascript?",
options: ["Understanding different data types in javascript is crucial for hanlding various form of data correctly. It is aids in writing efficient and bug-free code, ensuring that operations on variables are performed as expected. 2. JS primarily has two categories of data types. Primitive and Non-Primitive. - PDT: These include String, Number, Boolean, Undefined, Null, BigInt and Symbol. NPDT : These mainly inculde Object(which encompasses objects, arrays, function and dates). Real World usage- in real world applications, understanding and correctly utilizing these data types is fundamental.  For ex. string-textual data,Number for numerical computations,Boolean for logical operations, object for complex structures like user profilesand Array for lists of items. ", "Ram"],
correct: "Ram"},
{question: "Q.  What is Data difference between == and === in javascript?",
options: ["Into Line - In Js == and === are operators used for comparison, but the differ in how they compare values. 3 point of comparison:- 1.Type Coercin # ==  type coercion, it converts values to a common type before comparison. # === not coercion. Strict equality op. both value and type for equality.  3.  RWU: === comparisons to avoid unintended results eu to type coercion by ==; Example: validing inputs or comparing values fatched (database) or API, === ensure both value & type, reducing the risk of bugs.2. it con", "Ram"],
correct: "Ram"},
{question: "Q.  Can you explain the concept of String Immutability in javascript?",
options: ["Need for it - Understanding string immutability is vital in JS as it affects how strins are handled, manipulated and stored in memory. It helps in avoiding unintended side-effects in string manipulation. 2. What is it: > In JS, strings are immutable, meaning once a string is created, it cannot be altered. > Any operation that seems to modity a string actually creates a new string. The original string remain unchanged in memory. 3. How is it used: in practice this means that operation like concat, trim, replacing char in a str result in the create of new str. ", "Ram"],
correct: "Ram"},
{question: "Q.  What is Closures  in javascript?",
options: [" ", "Ram"],
correct: "Ram"},
{question: "Q.  What is a callback function in javascript?",
options: [" ", "Ram"],
correct: "Ram"},
{question: "Q.  Explain Hoisting in javascript?",
options: [" ", "Ram"],
correct: "Ram"},
{question: "Q.  What is the differences between var, let and const in javascript?",
options: [" ", "Ram"],
correct: "Ram"},
{question: "Q.  Differentiate between map(), filter() and reduce() in javascript?",
options: [" ", "Ram"],
correct: "Ram"},
{question: "Q.  Describe the features introduced in ES6 in javascript?",
options: [" ", "Ram"],
correct: "Ram"},
{question: "Q.  What is the differences between arro function and function expressions in javascript?",
options: [" ", "Ram"],
correct: "Ram"},
{question: "Q.  What are the differences between pass-by-value and pass-by-reference in javascript?",
options: [" ", "Ram"],
correct: "Ram"},
{question: "Q.  Differentiate between the rest and spread operators in javascript?",
options: [" ", "Ram"],
correct: "Ram"},
{question: "Q.  Can you explain the difference between a shallow copy and a deep copy of an object in javascript?",
options: [" ", "Ram"],
correct: "Ram"},
{question: "Q.  Explain array destructuring and object destructuring in javascript?",
options: [" ", "Ram"],
correct: "Ram"},
{question: "Q.  How are arrays different from objects in javascript?",
options: [" ", "Ram"],
correct: "Ram"},
{question: "Q.  Explain the difference between null and undefined in javascript?",
options: [" ", "Ram"],
correct: "Ram"},
{question: "Q.  Can you explain the difference between dot notation and square bracket [] notation when accessing object properties? When would you use one over the other in javascript?",
options: [" ", "Ram"],
correct: "Ram"},
{question: "Q.  Explain about profit loss and % ?",
options: ["Profit = SP - CP, Profit % = (profit/CP) * 100, Loss = CP -SP, Loss % = (Loss/CP) * 100, x - loss/100 * x = SP ", "Ram"],
correct: "Ram"},
{question: "Q.  Explain about Mixture & Aligation and their % ?",
options: ["Mixture : 1. Mix = (Qty of 1st * Rate of 1st) + (Qty of 2st * Rate of 2st), 2. Mean Price = Total Cost / Total Qty, 3. % of 1st Item = (Qty of 1st item /Total Qty) * 100  4.  % of 2nd Item = (Qty of 2nd item /Total Qty) * 100   Alligation Formula : 1.  Alligation = (Rate of cheeper item * Rate of dearer item)/ (Rate of dearer item - Rate of cheaper item) 2. Mean Price = (Rate of cheaper item + Rate of dearer item) / 2. 3. % of cheaper item = (Rate of cheaper item / Mean Price) * 100  4. % of dearer item = (Rate of dearer item / Mean Price) * 100", "Ram"],
correct: "Ram"},
{question: "Q.  Formula of LCM & HCF?",
options: ["LCM (Least common Multiple) HCF (Highest Common Multiple) 1.  LCM (a, b) = (a * b) / HCF (a, b)  2. LCM (a, b, c) = LCM(LCM(a,b),c).  3. HCF(a, b) = GCD(a, b) Greatest common Divisor) 4. HCF(a, b, c) = HCF(HCF(a, b), c) ", "Ram"],
correct: "Ram"},
{question: "Q.  Formula for Permutation and Combination?",
options: ["P(n, r) = n! / (n-4)! (P of n objects taken r at a time.  2. C(n, r) = n! / (r! * (n-r)!)  3. C(n, r) = P(n,r) /r! ", "Ram"],
correct: "Ram"},
{question: "Q.  Formula of average?",
options: ["Average = (sum of values) / number of values) ", "Ram"],
correct: "Ram"},
{question: "Q.  Formula of partnership?",
options: ["Profit/Loss = (Investment * Rate * Time)/100 2.  Partnership ratio = investment rato", "Ram"],
correct: "Ram"},
{question: "Q.  Formula of Probability ?",
options: ["1.  Probability = (Number of favorable outcomes)/ (Total number of outcomes)  2.  Probability of event A = P(A) = (Number of outcomes favorable to A) / (Total number of outcomes) ", "Ram"],
correct: "Ram"},
{question: "Q.  Formula of Age problem?",
options: ["Age of person after x years = present age + X  2.  Age of person before x years = present age - x ", "Ram"],
correct: "Ram"},
{question: "Q.  Formula of Train Problem?",
options: ["1.  Distance = Speed * Time 2. Time = Distance /Speed ", "Ram"],
correct: "Ram"},
{question: "Q.  Formula of Ratio and Proportion?",
options: ["1.  Ratio -> a:b = a/b 2. Porportion = a/b = c/d ", "Ram"],
correct: "Ram"},
{question: "Q.  Formula of Time and work?",
options: ["1.  Time = work / Rate  2. Rate = work / time ", "Ram"],
correct: "Ram"},
{question: "Q.  Formula of Geometry and mensuration?",
options: ["1.  Perimeter of rectangle = 2 (l + b)  2.  Area of rectangle = l x b  3. Perimeter of circle = 2 x 22/7 * R 4.  Area of circle = 22/7 * r^2  ", "Ram"],
correct: "Ram"},
{question: "Q.  Formula of Simplification ?",
options: ["1.  a ^m * a ^n = a^(m+n) 2. a^m / a^n = a ^(m-n)  3. (a ^m) ^ n = a ^ (m * n) ", "Ram"],
correct: "Ram"},
{question: "Q.  Formula of Number system ?",
options: ["1.  a x b = b x a (commutative property)  2. a + b = b + a  3. a x (b + C) = a x b + a x c)", "Ram"],
correct: "Ram"},
{question: "Q.  Formula of Arithmetic?",
options: ["1.  Percentage = (value/Total) * 100   2.  Discount = Marked price - Selling price.  3. Profit = selling price - cost price  ", "Ram"],
correct: "Ram"},
{question: "Q.  Formula of Simple Interest (SI) and compoint Interest ?",
options: ["1.  Simple : SI = (P x R x T) / 100 2.  P = SI * 100 / ( R x T) 3.  R = SI * 100 / (P x T) 4. T = SI * 100 / (P * R)  2.  (CI) = P x (1 + R/100) ^ T - P 2. CI = P x (1+R/n)^", "Ram"],
correct: "Ram"},
{question: "Q.  Formula of Divisibility Rules ?",
options: ["1.  2: Last digit even. 3: sum of digits divisible by 3 4: Last two digits divisible by 4  5: Last digit 0 or 5  6: Divisible by 2 and 3  7.  Double the last digit and subtract from remaining digits  8.  Last three digits divisible by 8  9: Sum of digits divisible by 9  10: Last digit 0", "Ram"],
correct: "Ram"},
{question: "Q.  Two Pointer code Templete ?",
options: ["function twoPointer() {// Initialise the pointers left = 0, right = 0 OR let = 0, right = len -1  let left =  ; let right =  ; while( condition (left < right)) { if (condition){ // update code  }} }      ", "Ram"],
correct: "Ram"},
{question: "Q.  What is .include() and .substring()  ?",
options: ["1.  arr.include('ram'); arr.substring('Ram is going (continues part)') Substring : any continous part of the string is know as substr.  " , "Ram"],
correct: "Ram"},
{question: "Q.  What is subsequence ?",
options: ["1.  Subsequence : a collection of characters, picked from left to right in continous or non continous part. " , "Ram"],
correct: "Ram"},
{question: "Q.  How convert a string to an array and convert arr to str ?",
options: ["1.  let newarr = str.split('space',',','/','a','9')  2. newarr.join(' ', or ',')  "  , "Ram"],
correct: "Ram"},
{question: "Q.  What is prefix and suffix in javascript ?",
options: ["1.  Prefix : start point is fixed.  (str = abcd; prefix str = a, ab, abc, abcd) 2. Suffix = end point is fixed.  (str = abcd; suffix str = d, cd, bcd, abcd)  ", "Ram"],
correct: "Ram"},
{question: "Q.  What is time and space complexity in javascript ?",
options: ["1.  Time C (TC) = time taken to excute the program with respect to input size. 2.  Spce C (SC) = extra space taken by the program with respect to input size" , "Ram"],
correct: "Ram"},
{question: "Q.  Linear search => loopin over all the element to find the tgt element code Template (LS has a TC of O(n) SC = O(1) constant ?",
options: ["function linearSearch(arr) { for (let i = 0; i<arr.length; i++) { if(arr[i] == tgt){ return true; }}", "Ram"],
correct: "Ram"},
{question: "Q.  Formula of Binnery Search (only on sorted arr) (Binary search has a TC of O(log n) & making it much faster than linear search (O(n)) for large datasets) ?",
options: ["function binnerySearch(arr, tgt){low = 0; high = arr.length -1; while(low <= high){ let mid = (low + high)/2; if(arr[mid] == tgt){ returm mid;} else if (arr[mid] < tgt) { low = mid+1;} else {high = mid -1} } return -1; } result = binnerSearch(arr,tgt); ", "Ram"],
correct: "Ram"},
{question: "Q.  Breadth First Search code template (BFS has a time complexity of O(|E| + |B|) |E| = Number of edges and |V| is number of vertices in the graph) ?",
options: ["function bfs(graph, root) {const visited  = new Set(); const queue = [root]; const visitedOrder = []; while (queue.length > 0){const node = queue.shift(); if(!visited.has(node)){ visited.add(node); visitedOrder.push(node); graph[node].forEach(neighbor) => {if(! visited.has(neighor)) {queue.push(neighbor); }});}} return visitedOrder; } const graph = {'A': ['B', 'C'], 'B': ['A', 'D','E']}; const rootNode = 'A'; const visitedNodes = bfs(graph, rootNde); console.log('visited Nodes:', visitedNodes);  ", "Ram"],
correct: "Ram"},
{question: "Q.  Depth Search code template (BFS has a time complexity of O(|E| + |B|) |E| = Number of edges and |V| is number of vertices in the graph) ?",
options: ["function dfs(graph, root) {const visited  = new Set(); const visitedOrder = []; function dfsHelper(node) { visited.add(node); visitedOrder.push(node); graph[node].forEach(neighbor) => {if(! visited.has(neighor)) {dfsHelper(neighbor); }}); } dfsHelper(root); return visitedOrder; } const graph = {'A': ['B', 'C'], 'B': ['A', 'D','E']}; const rootNode = 'A'; const visitedNodes = bfs(graph, rootNde); console.log('visited Nodes:', visitedNodes);  ", "Ram"],
correct: "Ram"},
{question: "Q.  Exponential Search code template (ES has a TC of O(log n) and O(log n) for BS, resulting in an overall TC O(log n) ?",
options: ["function exponentialSearch(arr, tgt) {if (arr[0] === tgt){ return 0;} let i = 1; while (i < arr.length && arr[i] <= tgt){ i *=2;} return binarySearch(arr, tgt, Math.floor( i/2), Math.min(i, arr.length)) }  function binarySearch(arr, tgt,low,high){ while (low<=high){ const mid = Math.floor((low + high) / 2); if(arr[mid] === tgt){ return mid; } else if(arr[mid] < tgt){ low = mid +1; } else {high = mid -1}} return -1; } const result = result = exponentialSearch(arr, tgt); if (result !== -1){console.log('Element found at index', result); }else{console.log('Element not found in the array') ", "Ram"],
correct: "Ram"},
{question: "Q.  Interpolation search code Template (IS has an average TC of O(log log n) and WC TC O(n) ?",
options: ["function interpolationSearch(arr, tgt) { let low = 0; let high = arr.length -1; while(low <= high && tgt >= arr[low] && tgt <= arr[high]) { const index = Math.floor(low + ((tgt - arr[low]) * (high - low)) / (arr[high] - arr[low])); if (arr[index] === tgt) {return index;} else if{ arr[index] < tgt){ low = index +1;} else{high = index -1; }} return -1 } const result = interpolationSearch(arr, tgt) ", "Ram"],
correct: "Ram"},
{question: "Q.  Hashing Search Code Template (HS has an average TC O(1) and WC TC O(n) ?",
options: ["class HashTable{ constructor(size){ this.size = size; this.table = new Array(size).fill(null).map(() => []); _hash(key) { return key % this.size;} insert(key, value){ const index = this._has(key); const bucket = this.table[index]; for(const[k, v] of bucket) {if (k === key){ v= value; return; }} bucket.push([key,value]); } search(key){ const index = this._hash(key); const bucket = this.table[index]; for( const [k, v] of bucket) { if(k === key){ return v; }} return null; } delete(key){ const index = this._hash(key); const bucket = this.table[index]; for (let i=0; i < bucket.length; i++){ if (bucket [i][0] === key) {bucket.splice(i, 1); return; }}}} const hashTable = new HashTable(10); hashTable.insert(1, 'Apple'); hashTable.insert(2, 'Banana') console.log(hashTable.search(1)); // Output Apple hashTable.delete(2); console.log(hashTable.search(2)) //output null", "Ram"],
correct: "Ram"},
{question: "Q.  Jump search code Template (JS has a TC of O(/-n and SC = O(1)?",
options: ["function jumpSearch(arr, tgt) { const n = arr.length; const step = Math.floor(Math.sqrt(n)); let prev = 0; while (arr[Math.min(step, n) -1] < tgt) { prev = step; step += Math.floor(Math.sqrt(n)); if(prev >=n) {return -1; }} while (arr[prev] < tgt) { prev++; if(prev === Math.min(step, n)) { return -1; }} if (arr[prev] === tgt) {return prev; } return -1; } const result = jumpSearch(arr,tgt);  ", "Ram"],
correct: "Ram"},
{question: "Q.  Bubble sort code Template (BS has a TC of O(n^2) and SC = O(1)?",
options: ["function bubbleSort(arr) { const n = arr.length; for (let i = 0; i < n-1; i++){ for(let j = 0; j <n-i-1; j++) { if (arr[j] > arr[j+1]) { [arr[j], arr[j+1]] = [arr[j+1], arr[j]]; }}} return arr; } console.log(bubbleSort(arr)); ", "Ram"],
correct: "Ram"},
{question: "Q.  Bucket Sort code Template (BS has a TC of O(n+k) WC TC O(n^2) and SC = O(1)?",
options: ["function bucketSort(arr) { const minVal = Math.min(...arr); const maxVal = Math.max(...arr); const bucketSize = 10; const bucketCount = Math.ceil(M(maxVal - minVal) / bucketSize); const buckets = Array(bucketCount).fill(0).map(() => []); // Distru element into buckets for (const num of arr){ const bucketIndex = Math.floor(num - minVal) / bucketSize); buckets[bucketIndex] .push(num);} // sort each bucket; for(let i =0; i < bucketCount; i++){ buckets[i].sort((a, b) => a - b);} //merge sorted buckets; const sortedArr = []; for(const bucket of buckets) { sortedArr.push(...bucket);} return sortedArr; } console.log(bucketSort(arr));   ", "Ram"],
correct: "Ram"},
{question: "Q.  Counting sort code Template (CS has a TC of O(n+k) ?",
options: ["function countingSort(arr) { const maxVal = Math.max(...arr); const countArray = Array(maxVal +1).fill(0); // count occurences of each value; for(const num of arr){countArray[num]++;} //cal cumulative counts; for (let i=0; i< countArray.length; i++){ countArray[i] += countArray[i+1]; } // build sorted array ; const sortedArr = Array(arr.length); for(const num of arr){ sortedArr[countArray[num]-1] = num; countArray[num]--;} return sortedArr; } console.log(countingSort(arr));         ", "Ram"],
correct: "Ram"},
{question: "Q.  Left (main) side Diagnoal sum of a matrix (RSD has a TC of O(n) ? ?",
options: ["let leftSumDiag= 0; for (let i=0; i<n; i++){ leftSumDiag = leftSumDiag+matrix[i][i];}  or let row = matrix.length;  let col = matrix[0].length; for (let i=0;i<row; i++){//outer loop only for row // row is fixed; for(let j=0; j<col; j++){ inner loop respresent the column; if(i=j){ console.log(matrix[j][j]}} space console.log('');  or let i =0; let j=0; while(i<row && j< col) { console.log(matrix[i][j]; i++; j++;}         ", "Ram"],
correct: "Ram"},
{question: "Q.  Right side Diagnoal sum of a matrix (RSD has a TC of O(n) ?",
options: ["let secSumDiag= 0; for (let i=0; i<n; i++){ secSumDiag = secSumDiag+matrix[i][n-i-1];}        ", "Ram"],
correct: "Ram"},
{question: "Q.  Left (main) side Diagnoal sum of a matrix (RSD has a TC of O(n) ?",
options: ["let leftSumDiag= 0; for (let i=0; i<n; i++){ leftSumDiag = leftSumDiag+matrix[i][i];}  or let row = matrix.length;  let col = matrix[0].length; for (let i=0;i<row; i++){//outer loop only for row // row is fixed; for(let j=0; j<col; j++){ inner loop respresent the column; if(i=j){ console.log(matrix[j][j]}} space console.log('');  or let i =0; let j=0; while(i<row && j< col) { console.log(matrix[i][j]; i++; j++;} ", "Ram"],
correct: "Ram"},
{question: "Q.  Right side Diagnoal sum of a matrix (RSD has a TC of O(n) ?",
options: ["let secSumDiag= 0; for (let i=0; i<n; i++){ secSumDiag = secSumDiag+matrix[i][n-i-1];}  ", "Ram"],
correct: "Ram"},
{question: "Q.  Counting sort code Template (CS has a TC of O(n+k) ?",
options: ["function countingSort(arr) { const maxVal = Math.max(...arr); const countArray = Array(maxVal +1).fill(0); // count occurences of each value; for(const num of arr){countArray[num]++;} //cal cumulative counts; for (let i=0; i< countArray.length; i++){ countArray[i] += countArray[i+1]; } // build sorted array ; const sortedArr = Array(arr.length); for(const num of arr){ sortedArr[countArray[num]-1] = num; countArray[num]--;} return sortedArr; } console.log(countingSort(arr));         ", "Ram"],
correct: "Ram"},
{question: "Q.  Tranform and reverse for 90 degree of matrix ?",
options: ["matrix[i][j] = matrix[j][i] or and fixed for rowwise outterloop i and innerloop j then rowwise matrix[i][j] and columnwise matrix[j][i]  ", "Ram"],
correct: "Ram"},
{question: "Q.  For time complexity in two loop ?",
options: ["if one 1st loop run for <n time and second loop <5 or 10 or 20 number then TC = 5 x O(n) and 5 is constent the O(n)  ", "Ram"],
correct: "Ram"},
	



]

let currentQuestion = 0;
let newFun = "Ram1"; 
//console.log(newFun);
function loadQuestion() {
if (currentQuestion >=questions.length){
document.getElementById("question-container").innerHTML = "Quiz Completed!";
} else {
const question = questions[currentQuestion];
document.getElementById("question").innerHTML = question.question;
document.getElementById("label1").innerHTML = question.options[0];
document.getElementById("label2").innerHTML = question.options[1];
document.getElementById("submit-btn").style.display="block";
document.getElementById("result").innerHTML = "";
}}
let ans = 0;

var errorMsg = document.getElementById("errorMsg");
var successMsg = document.getElementById("successMsg");
function checkAnswer(event){
const selectedAnswer1 = document.querySelector('input[name="answer"]:checked').value;
//console.log(selectedAnswer1)
const question = questions[currentQuestion];
const newFun1 = question.options[0];
//console.log(`Result : ${newFun1}`);
//addTwoSum(arr, 7);
console.log("Result : "+newFun1);

const correctAnswer1 = question.options.indexOf(question.correct);
const correctAnswer = ' "" '+correctAnswer1+' "" ';
const selectedAnswer = ' "" '+selectedAnswer1+' "" ';
if(selectedAnswer === correctAnswer){
newFun = question.options[0];

	console.log(correctAnswer);
	errorMsg.style.display = "none";
	successMsg.style.display = "block";
ans1 = ++ans;
let totalq = ans+"/"+questions.length;
document.getElementById("ans").innerHTML = totalq;
} else{
	errorMsg.style.display = "block";
	successMsg.style.display = "none";
}
document.getElementById("submit-btn").style.display="block";
setTimeout(function () {
currentQuestion++;
loadQuestion();
//document.querySelectorAll(                                                                                                                                                                                     'input[name="answer"]').forEach(function (input) {input.checked=false });
}, 500); 

}

loadQuestion();

