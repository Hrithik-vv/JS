// destructure

// const { log } = require("async");

// const arr =[1,2,3,4,5]
// const [v1,v2,v3,v4,v5] =arr;
// console.log(v2);

// const obj ={
//     name :"hrithik",
//     age:25,
//     place:"kannur"
// }

// const {name, age, place} =obj
// console.log(name,age);

// ------------------------------------------------

// spread operator

// const array = [1, 2, 3, 4, 5];

// const copyArray = [...array];

// copyArray.push(6);

// console.log(array);
// console.log(copyArray);

// const object = {
//   name: "Hrithik",
//   age: 20,
//   place: "Kannur",
// };

// const copyObj ={...object}

// copyObj.qualification ="BA"

// console.log(object, copyObj);

// --------------------------------------------
// rest operator -> get remaining elements

// const arr1 = [1, 2, 3, 4];

// const [e1, ...remaining] = arr1

// console.log(e1, remaining)

// const obj1 = {
//     username: "John Doe",
//     age: 20,
//     place: "Kannur"
// }

// const {username, ...remainingObj} = obj1

// console.log(username, remainingObj)

// -------------------------------------------------
// promise

const promise =() =>{

}
// promise().then((res) => {
//     console.log("success", res)
// }).catch((err) => {
//     console.log("error", err)
// })
// async await

// async function handlePromise() {

// }

// async await

// async function handlePromise() {

// }


const handleAsync = async () => {
    try {
        const res = await promise()
        console.log(res)
    } catch (error) {
        console.log("error", error)
    }
}

handleAsync()

// fetch

// api -> application programming interface
// client -> server, server -> client, server -> server

// const jsonString = '{"name": "John", "age":20}'

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const res = await response.json();
    console.log(res);
  } catch (error) {}
};

fetchData();
