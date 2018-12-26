import * as types from '../actions/types';
import { takeEvery } from 'redux-saga';

const handleNewMessage = function* handleNewMessage(params) {
  yield takeEvery(types.ADD_MESSAGE, action => {
    action.author = params.author;
    params.socket.send(JSON.stringify(action));
  })
};

export default handleNewMessage;