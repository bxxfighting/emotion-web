import { connect } from 'react-redux';
import component from '../../components/Login';
import {
    setLoginUsername,
    setLoginPassword,
    login,
} from '../../actions';

const mapStateToProps = state => {
    return {
        username: state.login.username,
        password: state.login.password,
    };
};

const mapDispatchToProps = dispatch => ({
    setLoginUsername: (data) => dispatch(setLoginUsername(data)),
    setLoginPassword: (data) => dispatch(setLoginPassword(data)),
    login: () => dispatch(login()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(component);