import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import App from '../components/App.jsx';
import data from '../../data/data.js';

const mapStateToProps = ({ subject, method, time }) => {
    const props = { subject, method, time, data };
    return props;
};

const AppContainer = connect(mapStateToProps, actionCreators)(App);

export default AppContainer;
