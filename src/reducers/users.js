import * as types from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {

    case types.ADD_USER:
      return [...state, { name: action.name, id: action.id }];

    case types.USERS_LIST:
      return action.users;

    default:
      return state;
  }
}