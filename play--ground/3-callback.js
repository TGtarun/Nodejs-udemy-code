// setTimeout(() => {
//     console.log("2 second timer")
// }, 2000);

// const geocode = (address, callback) =>{
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 1
//         }
    
//         callback(data);
//     }, 2000);

// }

// geocode('bharatpur', (data)=>{
//     console.log(data)
// })

const add = (a,b,callback)=>{
    setTimeout(() => {
        const data = a+b
        callback(data)
    }, 2000);
}

add(1,4,(sum)=>{
    console.log(sum)
})