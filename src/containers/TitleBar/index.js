import { connect } from 'react-redux';
import component from '../../components/TitleBar';
import {
    logout,
    setPasswordModalVisible,
} from '../../actions';

const mapStateToProps = state => {
    const isLogin = localStorage.getItem('isLogin');
    return {
        isLogin: isLogin,
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    setPasswordModalVisible: (data) => dispatch(setPasswordModalVisible(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(component);