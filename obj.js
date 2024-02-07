const marks={
Rohit:23,
bumrah: 33,
Kohli:45,
Rahul:67
}

//Using For loop
for(let i=0;i<Object.keys(marks).length;i++){
    console.log(Object.keys(marks)[i]+":"+marks[Object.keys(marks)[i]])
}

//Using For in loop
for(i in marks){
    console.log(i+' in '+marks[i])
}
