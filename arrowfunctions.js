// const square = function(x){
//     return x*x

// }
// const square =(x)=>{
// return x*x
// }
// const square =(x)=>x*x
// console.log(square(6))


// const printGuestList ={
//     name:"Birthday party",
//     list :function(){
//         console.log("Make list of "+this.name)
//     }
// }
// const printGuestList = {
//     name: "Birthday Party",
//     guestList: ["Kavita", "Suman", "Badal"],
//     list() {
//         console.log("Make list of " + this.name)
//         let that = this

//         this.guestList.forEach((guest) => {
//             console.log(guest + ' is attending ' + this.name)

//         });
//     },
//     test: {
//         namee: "kavita",
//         testList(){

//             console.log("sssssssssssss")
//             console.log(this.namee)
//         }
//     }
// }

// printGuestList.list()
// printGuestList.test.testList()
debugger
const tasks = {
    tasks: [{
        text: "Procurement",
        completed: true
    }, {
        text: "Inventory Planning",
        completed: false
    },
    {
        text:"Administration",
        completed:false
    }
    ],

     getTaskTodo(){
        const tasktodo = this.tasks.filter((task)=>{
         return task.completed===true
        })
        return tasktodo
      
    } 
}

console.log(tasks.getTaskTodo())