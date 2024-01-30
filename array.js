const arr=[1,2,3,4,5,6,7,8];
console.log(arr)
for(let i=0;i<arr.length;i++){//for loop
  console.log(arr[i])
}

arr[8]=9
console.log(arr)
console.log(arr.length)//length of array
arr[8]=10//Arrays are Immutable
console.log(arr)
console.log(typeof arr)

//Array Methods

let num=[1,2,3,4,5,6,7]
let b=num.toString();//b is now a string
console.log(typeof b)
let c=num.join('a')//join method
console.log(c)
let v=num.pop()//pops the last element
console.log(v,num)
let r=num.push(9)//push returns the new array length
console.log(r,num)
let s=num.shift()
console.log(s, num)//Shifts the first element of the array
let q=num.unshift(21)
console.log(q, num)//Adds the element at the first position of the array
delete num[0]
console.log(num)//Deletes the element at the given index
delete num[3]
console.log(num)
console.log(num.length)//length will stay same after deleting as well


//Concat
let newArray = [1, 2, 3, 4, 5];
let newArray2 = [6, 7, 8, 9, 10];
let p=newArray.concat(newArray2)//concatenates two arrays
console.log(p)

//sort 
let compare =(a,b)=>{//compares the elements of the array
  return a-b; //ascending order
  return b-a; //descending order
}

let ar=[3,5,12,5,23,78,92,12,34,54]
x=ar.sort()  //sorts the array alphabetically
console.log(x) //[12,12,23,3,34,5,5,54,78,92]]



