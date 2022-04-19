const express = require('express')
const app = express()
const port = 3000
const includes = require('lodash/includes')
const some = require('lodash/some')
const split = require('lodash/split')

app.use(express.json())

app.post('/message', (req, res) => {
    if (!req.body.conversation_id) {
        throw new Error('Conversation ID is required.')
    }

    if (!req.body.message) {
        throw new Error('Message is required.')
    }

    const {conversation_id, message} = req.body

    const explodedMessage = split(message, /\s+|,\s+/g)

    let params = {response_id: conversation_id, response: 'Sorry, I don’t understand.'}

    some(explodedMessage, (word) => {
        if (includes(['Hello', 'Hi'], word)) {
            params = {response_id: conversation_id, response: 'Welcome to StationFive.'}
            return true
        }

        if (includes(['Goodbye', 'bye'], word)) {
            params = {response_id: conversation_id, response: 'Thank you, see you around.'}
            return true
        }
    })

    res.send(params)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})