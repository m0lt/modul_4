import express from "express"

// Express ist ein virtueller Server

const app = express()

const PORT = 3000

const users_DatenBank = [
  {
    id: 1,
    name: "John",
    city: "Hamburg",
    age: 20,
  },
  {
    id: 2,
    name: "Hannah",
    city: "Berlin",
    age: 20,
  },
  {
    id: 3,
    name: "Joe",
    city: "Berlin",
    age: 30,
  },
]
const cities = [
  {
    id: 1,
    name: "Hamburg",
  },

  {
    id: 2,
    name: "Berlin",
  },
  {
    id: 3,
    name: "Wien",
  },
]

//app.get() ist eine Get Methode und hat zwei Parameter:
// Erste: Route, Zweite: Callback Function
// Die Callbackfunction hat selbst wieder zwei Parameter: (req: request, res: response)
app.get("/users", (req, res) => {
  //Der Browser kann nur mit JSON Daten umgehen, daher müssen wir die Daten in res mit .json() umwandeln.
  res.json(users_DatenBank)
})
app.get("/cities", (req, res) => {
  //Der Browser kann nur mit JSON Daten umgehen, daher müssen wir die Daten in res mit .json() umwandeln.
  res.json(cities)
})

app.listen(PORT, () => {
  console.log("Server ist am Laufen auf localhost: " + PORT)
})

//Server starten mit command: npm run start
//Jetzt kann man den aufruf über http://localhost:3000/users machen
