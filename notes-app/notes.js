const fs = require('fs')
const chalk = require('chalk')

const getnotes = () => {
    console.log(chalk.blue.inverse("your notes..."))
}

const addnotes = (title, body)=>
{
    const notes = loadnotes()

    const duplicatenote = notes.find((note)=>note.title === title)

    debugger
    if(!duplicatenote)
    {
        notes.push(
            {
                title: title,
                body: body
            }
        )
    
        savenotes(notes)
        console.log(chalk.green.inverse("New note added."))
    }
    
    else{
        console.log(chalk.red.inverse("Note already taken"))
    }
}

const loadnotes = ()=>
{
    try{
        const databuffer = fs.readFileSync('notes.json')
        const data = JSON.parse(databuffer.toString())
        return data
    
    }
    catch(e)
    {
        return []
    }

}

const savenotes = (notes)=>{
    fs.writeFileSync('notes.json' , JSON.stringify(notes))
}

const removenotes = (title)=>
{
    const notes = loadnotes()
    const notestokeep = notes.filter((note)=> note.title != title)
    if(notestokeep.length < notes.length)
    {
        savenotes(notestokeep)
        console.log(chalk.green.inverse("Note Removed!"))
    }

    else
    {
        console.log(chalk.red.inverse("No Note Removed!"))
    }
    
}

const listnotes = ()=>{
    const notes = loadnotes()
    notes.forEach(note => {
        console.log(note.title)
    });
}

const readnote = (title)=>{
    const notes = loadnotes()
    const duplicatenote = notes.find((note)=>note.title === title)
    if(duplicatenote){
        console.log(chalk.inverse("Title: "+ duplicatenote.title))
        console.log(chalk.inverse("Body: "+ duplicatenote.body))
    }
    else{
        console.log(chalk.red.inverse("No Note Found"))
    }
}
module.exports = {
    getnotes: getnotes,
    addnotes: addnotes,
    removenotes: removenotes,
    listnotes: listnotes,
    readnote: readnote
}