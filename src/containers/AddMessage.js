import { connect } from 'react-redux';

import { addMessage } from '../actions';
import AddMessageComponent from '../components/AddMessage';

const mapDispatchToProps = {
  addMessage
};

export default connect(null, mapDispatchToProps)(AddMessageComponent);