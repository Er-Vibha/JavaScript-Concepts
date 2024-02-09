let runagain = true;
const candrive = (age) => {
    return age >= 18 ? true : false
}
while (runagain) {
    let age = prompt('Enter age')
    age = Number.parseInt(age)
    if (age < 0) {
        console.error("Enter correct number")
        break;
    }
    if (candrive(age)) {
        alert('You can drive')
    }
    else {
        alert('You cannot drive')
    }
    runagain = confirm('do you want to ask again?')
}
