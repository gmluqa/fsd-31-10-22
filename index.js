const mongoose = require("mongoose")

const main = async () => {
    await mongoose.connect("mongodb://localhost:27017/demo-pelis")

    // Schema for peli
    const peliSchema = new mongoose.Schema({
        titulo: String,
        genero: String,
        puntuacion: Number
    })

    // Model for peli
    const Peli = mongoose.model("Peli", peliSchema)


    // Creating new entry
    const newEntry = new Peli({
        titulo: "Superbad",
        genero: "Comedia",
        puntuacion: 10
    })

    console.log(newEntry.titulo)

    await newEntry.save()

    const pelis = await Peli.find()

    console.log(pelis)

    await mongoose.disconnect();
}

main().catch(console.error)
