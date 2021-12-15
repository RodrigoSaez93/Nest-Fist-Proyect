import {schema } from 'normalizr';

const authorSchema = new schema.Entity('authors', {}, {
    idAttribute: 'email'
});

const messageSchema = new schema.Entity('messages', {
    author: authorSchema
}, {
    idAttribute: '_id'
})

const messageListSchema = [messageSchema]

export default messageListSchema;∆