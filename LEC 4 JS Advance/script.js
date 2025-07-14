// console.log(1 === "1");

// console.log(1 + 2);
// let a = 10
// let str = "hello world"
// console.log(str);



// // template litrals
// let str2 = `hello world ${a}`
// console.log(str2);


//ARRAY METHODS
// let colors = ['red' ,'green', 'orange', 'blue', 'white']
// colors.splice(1,2)
// console.log(arr.join("_"));


// STRING METHODS
// let str = "hello world everyone"
// console.log();
// let arr = str.split(" ")


// let arr = [10,20,30,40,50]
// MAP METHOD
// let newArr = arr.map((val , index)=>{
//     console.log(val," ---> " , index);
    
//    return val += 5
// })
// console.log(newArr);


// let arr = [5,2,3,4,5,6,7,8,9,10]
// console.log(arr.length); 


// FILTER METHOD
// let newArr = arr.filter((val , indx)=>{
//     if(val % 2 != 0){
//         return val
//     }
// })

// console.log(newArr);
// console.log(newArr.length);


// REDUCE METHOD
// let newArr = arr.reduce((prev , val, index , arrrr)=>{
//     // console.log(prev);
    
//     console.log("previous ---> ",prev);
//     console.log("current ---> ",val);  
//     console.log("current index ---> ",index);
//     console.log("");
      
//     return prev+val
    
// })

// console.log(newArr);



// FOREACH LOOP
// let newArr = arr.forEach((val , index)=>{
//     return val++
// })

// console.log(newArr);



// OBJECT 
// let person = {
//     "fisrt Name" : "raj",
//     "last Name" : "gupta",
//     age : 22,
//     address : {
//         city : "Nagpur",
//         state : "Maharashtra"
//     }, 

//     fun : function() {
//         console.log(this);
        
//         // console.log("Hello everyone from ", this.fisrtName); 
//     }
// }

// let key = "age"

// person.age = 25
// person.branch = "CSE"
// console.log(person["branch"]);

// person.fun()

// console.log(person.fisrt Name);

// console.log(person["fisrt Name"]);


// person.fisrtName = "Aryan"
// person.fun()
// console.log(person);
// console.log(person);

// console.log(this);




// SPREAD AND REST OPERATOR
// let arr = [10,20,30, 40, 50 ,60, 70]
// console.log(arr);
// let newArr = [...arr]
// newArr.push(80)

// console.log(arr);
// console.log(newArr);


// console.log(...arr);


// function number(a , b , ...numbers) {
//     console.log(numbers);
       
// }
// number(10,20,30,40,50)



// STRING METHODS
// let str = "   vips     "
// str = str.trim()
// console.log(str);
// console.log(str.length);




// DATE 

// let date = new Date()

// console.log(date.getFullYear());

// let float = 12.5890
// console.log(Math.floor(float));
// console.log(Math.ceil(float));

// let ran = Math.random()*100
// console.log(Math.floor(ran));


// console.log(Math.max(20, 10));
// console.log(Math.min(20, 10));




// OBJECT DESTRUCTURING 

// let person = {
//     fisrtName : "raj",
//     lastName : "gupta",
//     age : 22,

// }

// person.fisrtName
// let { fisrtName } = person
// let {lastName } = person
// console.log(fisrtName);



// FOR OF LOOP
// let arr = ['c', 'b' ,'a' , 'd']

// for (const elem of arr) {
//     console.log(elem);
    
// }


// FOR IN LOOP
// for (const key in person) {
//     // console.log(key);
//     console.log(key ,"-->" ,person[key]);
// }   



// CALLBACK FUNCTION
// function one() {
//     console.log("chacha ka function");
    
// }

// function second(chacha) {
//     chacha()
// }

// second(one)


// higher order function and closer
// function parent() {
    
//     let a = 10
//     return  function child() {
//         console.log(a);
        
//         console.log("helllo bhaiyoooo");
        
//     }
// }


// let aagya = parent()
// aagya()

// console.log("hello bhai");
// console.log("kya chal rha hai");
// console.log("sab thik ");

// setTimeout(()=>{
//     console.log("hello bhai ");
    
// },3000)

// console.log("kya chal rha hai");
// console.log("sab thik ");


// let timer =  setInterval(()=>{
//     console.log("helllo  world");
    
// },2000)

// setTimeout(()=>{
//     console.log("clear kr diya");
    
//     clearInterval(timer)
// },6000)

