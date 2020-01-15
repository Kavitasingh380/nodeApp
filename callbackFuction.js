//settimeout is also a callback function
setTimeout(() => {
    console.log("Two second are up")
}, 2000)

//syncronous example 
const name = ["Ayush", "Sunil", "kavita", "manoj"]
const filterData = name.filter((n) => {

    return n.length <= 5
})
console.log(filterData)
//simple example of callback function
const geocode = (address, call) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        call(data)
    }, 2000)
}

geocode('callback Function', (response) => {
    console.log(response)
})

//add ,sub,mul of two parameter using  callback function
const add = (a, b, call) => {
    setTimeout(() => {
        call(a - b)
    }, 1000);
    setTimeout(() => {
        call(a + b)

    }, 2000)
    console.log(a * b)
    setTimeout(() => {
        call(a * b)

    }, 2000)

}
add(2, 5, (response) => {
    console.log(response)
})

//this shows undefined  becoj return is under  setTimeout
const sum = (a, b) => {
    setTimeout(()=>{
    return a * b
    },1000)
}

const output = sum(6, 9)
console.log(output)