const fs =require('fs')
const chalk=require('chalk')


//To add notes
const addNotes=(title,body)=>{
    const notes=loadNotes()
    const duplicateNotes=notes.filter((note) => note.title===title)
    debugger
    if (duplicateNotes.length===0){
      notes.push({
         title:title,
         body:body
      })
      saveNotes(notes)
      console.log(chalk.green.inverse("New note added"))
    } else{
       console.log(chalk.red.inverse("Note title taken!"))
    }
      
}
//To remove notes
const removeNotes=(title)=>{
   const notes=loadNotes()
   const noteToKeep=notes.filter((note)=>note.title!==title)
   saveNotes(noteToKeep)
   if(noteToKeep.length<notes.length){
      console.log(chalk.green.inverse(`Note having title "${title}" has been removed`))
   }else{
      console.log(chalk.red.inverse("Note not found"))
   }
  }
 
//to save and reupdate json file when node added or removed
const saveNotes=(notes)=>{
   const dataJSON=JSON.stringify(notes)
   fs.writeFileSync('./notes.json',dataJSON)

}
//to load notes from the json file
const loadNotes=()=>{
   try {
      const dataBuffer=fs.readFileSync('./notes.json')
      const dataJSON=dataBuffer.toString()
      return JSON.parse(dataJSON)   
   } catch (e) {
      return []
   }
   
}
const listNotes=()=>{
      const notes= loadNotes()
      console.log(chalk.inverse('Your notes'))
      notes.forEach((note)=>{
         console.log(note.title)
      })

}


//we are exporting the function we created. so whats being exporte4d is being called in next file.
module.exports={
   listNotes:listNotes,
   addNotes:addNotes,
   removeNotes:removeNotes,
   
}

