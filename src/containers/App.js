import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import App from '../components/App.jsx';

const mapStateToProps = (state) => {
    const props = state;
    return props;
};

const AppContainer = connect(mapStateToProps, actionCreators)(App);

export default AppContainer;
