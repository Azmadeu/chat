import { connect } from 'react-redux';

import SideBarComponent from '../components/SideBar';

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps, null)(SideBarComponent)