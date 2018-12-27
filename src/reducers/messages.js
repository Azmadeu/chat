import * as types from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
  console.log(action, 'action');

  switch (action.type) {
    case types.ADD_MESSAGE:
    case types.MESSAGE_RECEIVED:
      return [
        ...state,
        {
          message: action.message,
          author: action.author,
          id: action.id,
        }
      ];

    default:
      return state;
  }
}