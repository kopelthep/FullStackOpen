const express = require('express')
const app = express()
app.use(express.json())





let persons = [
    { 
        "id": "1",
        "name": "Arto Hellas", 
        "number": "040-123456"
    },
    { 
        "id": "2",
        "name": "Ada Lovelace", 
        "number": "39-44-5323523"
    },
    { 
        "id": "3",
        "name": "Dan Abramov", 
        "number": "12-43-234345"
    },
    { 
        "id": "4",
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122"
    }
]

const currentStatus = () => {
    const length = persons.length
    const datenow = Date.now()
    const realtimestamp = Date(datenow).toString()
    console.log(realtimestamp)
    const responseString = String ("<p> Phonebook has info on " + String(length) + " people </p>") + ("<p>"+ realtimestamp +"</p>")
    return(
        responseString
    )

}

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get("/info",(request,response)=>{
    response.send(currentStatus())
})

app.get('/api/persons', (request, response) => {
    response.json(persons) 
})

app.get("/api/persons/:id",(request,response)=> {
    const id = request.params.id
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
    } 
    else {
        response.status(404).end()
    }
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})