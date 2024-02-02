//map method
arr=[5,4,3,2]
let a=arr.map((value, index,Array)=>
  {
    console.log(value,index,Array)
    return value+1
  }
  )
console.log("Map Output : " +a)

//filter method
let arr2=[45,23,21,0,3,5]
let c=arr2.filter((s)=>  
  {
   return s>10
  }
  )
console.log("Filter Output : " +c)

//reduce method
let arr3=[1,2,3,5,3,4,2]
let newar=arr3.reduce((a,b)=>{
  return a+b
})
console.log("Reduce Output : " +newar)