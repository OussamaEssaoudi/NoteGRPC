const client = require('./client')
let newNote = {
    title: "Projet irrigation",
    content: "Resoudre unexpected token error :/ "
}

client.insert(newNote, (error, note) => {
    if (!error) {
        console.log('Nouvelle note crée avec succès', note)
    } else {
        console.error(error)
    }
})
