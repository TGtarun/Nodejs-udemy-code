console.log("javascript Log")


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')



weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value
    messageOne.textContent = ''
    messageTwo.textContent = ''
    //console.log(location)

    fetch('/weather?address=' + location).then((response)=>{
    response.json().then((data)=>{
        if(data.error)
        {
            messageOne.textContent = data.error
        }

        else{
            messageOne.textContent = data.forcast
        messageTwo.textContent = data.location
        }
        
    })
})

})