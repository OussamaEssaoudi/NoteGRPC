const grpc = require('grpc')
const notesProto = grpc.load('notes.proto')
const uuidv1 = require('uuid/v1')

const server = new grpc.Server()
const notes = [
    { id: '1', title: 'Note 1', content: 'Complete ton projet xml'},
    { id: '2', title: 'Note 2', content: 'TD5 Theorie des jeux !!!'},
    { id: '3', title: 'Note 3', content: 'Docker !!!'}
]

server.addService(notesProto.NoteService.service, {
    list: (_, callback) => {
        callback(null, notes)
    },
    get: (call, callback) => {
        let note = notes.find((n) => n.id == call.request.id)
        if (note) {
            callback(null, note)
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: "Not found"
            })
        }
    },
    insert: (call, callback) => {
        let note = call.request
        note.id = uuidv1()
        notes.push(note)
        callback(null, note)
    },
    update: (call, callback) => {
        let existingNote = notes.find((n) => n.id == call.request.id)
        if (existingNote) {
            existingNote.title = call.request.title
            existingNote.content = call.request.content
            callback(null, existingNote)         
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: "Not found"
            })
        }
    },
    delete: (call, callback) => {
        let existingNoteIndex = notes.findIndex((n) => n.id == call.request.id)
        if (existingNoteIndex != -1) {
            notes.splice(existingNoteIndex, 1)
            callback(null, {})
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: "Not found"
            })
        }
    }
})

server.bind('127.0.0.1:8080',
  grpc.ServerCredentials.createInsecure())
console.log('Server running at http://127.0.0.1:8080')
server.start()
