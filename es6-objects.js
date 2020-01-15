//Object property shorthand
const name = "kavita"
const UserAge = 25
const user ={
    name,           
    age :UserAge,
    location :"Gurugram"
} 


console.log(user)

//object Destructuring  
const product = {
    label:"Red noteBook",
    price:3,
    stock:201,
    salePrice:undefined

}

// const label = product.label
// const stock = product.stock

// const {label, stock} = product
// console.log(label)
// console.log(stock)
//label:productLabel renaming the variable label
// const {label: productLabel,stock,rating} = product    
//  console.log(productLabel)
//  console.log(stock)
//  console.log(rating)//will give undefined

// const {label: productLabel,stock,rating=5} = product    
// console.log(productLabel)
//  console.log(stock)
//  console.log(rating)//will give  5



const transaction = (type,{label,stock})=>{
    console.log(type,label,stock)
}

transaction("order",product)