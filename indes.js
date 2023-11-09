// // ! variables and fuctions
// // ? int name =1;

// // todo declare variable 
// const name="cs 2023"
// let name2="cs 2022"
// var name3="cs 2924"
// // ! const must be initialized

// let student;
// student=[1,2,3,4]
// console.log(student)
// console.log(name2)

// // ? arrays in js 

// const arr=[1,2,3,4,5];

// // !empty array
// const arr2=[];
// // ? another way
// const arr3= Array(20)

// const arr4=["jane",1,2,"cs 2023"];
// console.log(arr4);

// const arr5=[1,2,3,4,5];

// // !loop
// arr4.forEach(function (element) {
//     console.log(element)

// });
// // ! map 
// let arr6=[]
//  arr6= arr5.map((el)=> el+1)

// //? function

// function loopArray(){

//     console.log("hello world");
// }


// // ! call
// loopArray()
// // ! arrow function

// const loopArray2= ()=>{
//     console.log("hello cs 50")

// }
// loopArray2()


// console.log(arr6)


// console.log(arr3);
// console.log(arr)


// // ! DOM  MANIPULATION

// const btn=document.querySelector(".btn")
// console.log(btn)
// //  ! second method
// const btn2=document.getElementsByTagName("button")
// //  method  3


// const btn3= document.getElementById("btn2")
// console.log(btn3)
// // ?click event

// btn.addEventListener("click",()=>{

// alert("clicked")

// })


// ! handle form 

const error= document.querySelector("small")
const form =document.querySelector(".form1")
console.log(form)


form.addEventListener("submit",(e)=>{

    e.preventDefault();

    // ! formdata
    const formValues=new FormData(form)

 const name =formValues.get("name")
 const email =formValues.get("email")
 const password =formValues.get("password")
 const con_pass =formValues.get("con-pass")

 console.log(name,email,password,con_pass)

 if(password!=con_pass){
    error.innerHTML="password dont match!!!"
 }else{
    error.innerHTML=''
 }


//  send data to the backend
// ! CRUD


fetch("http://localhost:8000/api/v2/login",)
// fetch data from an api using the fetch function


})

