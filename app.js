const notes = require('./notes.js')
//imports  yargs for parsing
const yargs=require('yargs')
// const { removeNotes } = require('./notes.js')
// const { argv, demandOption } = require('yargs')

//customize yargs version
yargs.version('1.1.0')

//add,remove,read,;ist
//create add command
yargs.command({
        command:'add',
        describe:'Add a new note',
        builder:{
            title:{
                describe:'Note title',
                demandOption:true,
                type:'string'
            },
            body:{
                describe:"Body of the note",
                demandOption:true,
            }
        },
        handler(argv){
          notes.addNotes(argv.title,argv.body)
        }

})
// create remove command
yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})
//create list notes command
yargs.command({
    command:'listNotes',
    describe:'list all notes',
    handler(){
        notes.listNotes()
    }
})
 yargs.parse()
