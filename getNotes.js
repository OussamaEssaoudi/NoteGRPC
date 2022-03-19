const client = require('./client')
client.list({}, (error, notes) => {
    if (!error) {
        console.log('Liste des notes récupérée avec succès')
        console.log(notes)
    }
})