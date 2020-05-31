const notes = require("./notes.js")
const yargs = require("yargs")
const chalk = require("chalk")

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title : {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },

        body : {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
        
    },
    handler(argv) {
        notes.addnotes(argv.title,argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a  note',
    builder: {
        title : {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removenotes(argv.title)
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        notes.readnote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler(){
        notes.getnotes()
        notes.listnotes()
    }
})

//console.log(yargs.argv)
yargs.parse()