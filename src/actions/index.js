import * as types from './types'

let nextMessageId = 0;
const nextUserId = 0;

export const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author
});

export const addUser = user => ({
  type: types.ADD_USER,
  id: nextUserId++,
  user
});

export const messageReceived = (message, author) => ({
  type: types.ADD_USER,
  id: nextMessageId++,
  message,
  author
});

export const usersList = users => ({
  type: types.USERS_LIST,
  users
});