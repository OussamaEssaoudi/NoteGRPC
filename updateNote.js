const client = require('./client')

const updateNote = {
    id: '1',
    title: 'Git',
    content: 'push aujourd`hui'
}

client.update(updateNote, (error, note) => {
    if (!error) {
        console.log('Note modifiée avec succès', note)
    } else {
        console.error(error)
    }
})