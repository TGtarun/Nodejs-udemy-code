// const square = function(x) {
//     return x*x
// }

// const square = (x) =>
// {
//     return x*x
// }

// const square = (x) => x*x

// console.log(square(3))

const event = {
    name: "Birthday Party",
    guestlist: ['tarun','neha','nitin'],
    printGuestList () {
        console.log("Guest List for " + this.name)

        this.guestlist.forEach((guest)=>
        {
            console.log(guest + " is atending " + this.name)
        })
    }
}

event.printGuestList()