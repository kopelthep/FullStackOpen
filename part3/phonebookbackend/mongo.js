const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://kopelthep:${password}@cluster0.pditrmn.mongodb.net/phonebookApp?retryWrites=true&w=majority&appName=Cluster0`
            

mongoose.set('strictQuery',false)

mongoose.connect(url, { family: 4 })

const phonebookSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Person = mongoose.model('Person', phonebookSchema)

const person = new Person({
  content: 'HTML is easy',
  important: true,
})

person.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})

// Note.find({}).then(result => { //print all notes
//   result.forEach(note => {
//     console.log(note)
//   })
//   mongoose.connection.close()
// })

// Note.find({ important: true }).then(result => { //print ONLY IMPORTANT NOTES
//   result.forEach(note => {
//     console.log(note)
//   })
//   mongoose.connection.close()
// })
