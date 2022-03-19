const client = require('./client')

client.delete({ id: '1' }, (error, _) => {
    if (!error) {
        console.log('Note supprimé avec succès')
    } else {
        console.error(error)
    }
})
            