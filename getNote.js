const client = require('./client')

client.get({ id: '1' }, (error, note) => {
    if (!error) {
        console.log('Note récupérée avec succès', note)
    } else {
        console.error(error)
    }
})
