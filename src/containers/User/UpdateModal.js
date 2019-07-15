import { connect } from 'react-redux';
import component from '../../components/User/UpdateModal';
import {
    updateUser,
    setUserUpdateModalVisible,
    setUserUpdateModalName,
    setUserUpdateModalPassword,
    setUserUpdateModalPhone,
    setUserUpdateModalEmail,
    setUserUpdateModalRoleIds,
} from '../../actions';

const mapStateToProps = state => {
    return {
        updateModal: state.user.updateModal,
        roles: state.role.dataList,
    };
};

const mapDispatchToProps = dispatch => ({
    updateUser: () => dispatch(updateUser()),
    setVisibleModal: (data) => dispatch(setUserUpdateModalVisible(data)),
    setUserUpdateModalName: (data) => dispatch(setUserUpdateModalName(data)),
    setUserUpdateModalPassword: (data) => dispatch(setUserUpdateModalPassword(data)),
    setUserUpdateModalPhone: (data) => dispatch(setUserUpdateModalPhone(data)),
    setUserUpdateModalEmail: (data) => dispatch(setUserUpdateModalEmail(data)),
    setUserUpdateModalRoleIds: (data) => dispatch(setUserUpdateModalRoleIds(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(component);