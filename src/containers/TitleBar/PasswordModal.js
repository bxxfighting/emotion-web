import { connect } from 'react-redux';
import component from '../../components/TitleBar/PasswordModal';
import {
    changePassword,
    setPasswordModalVisible,
    setOldPassword,
    setNewPassword,
} from '../../actions';

const mapStateToProps = state => {
    return {
        modal: state.titleBar.passwordModal,
    };
};

const mapDispatchToProps = dispatch => ({
    changePassword: () => dispatch(changePassword()),
    setVisibleModal: (data) => dispatch(setPasswordModalVisible(data)),
    setOldPassword: (data) => dispatch(setOldPassword(data)),
    setNewPassword: (data) => dispatch(setNewPassword(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(component);