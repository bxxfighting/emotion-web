import { connect } from 'react-redux';
import component from '../../components/User/CreateModal';
import {
    createUser,
    setUserCreateModalVisible,
    setUserCreateModalUsername,
    setUserCreateModalPassword,
    setUserCreateModalName,
    setUserCreateModalPhone,
    setUserCreateModalEmail,
    setUserCreateModalRoleIds,
} from '../../actions';

const mapStateToProps = state => {
    return {
        createModal: state.user.createModal,
        roles: state.role.dataList,
    };
};

const mapDispatchToProps = dispatch => ({
    createUser: () => dispatch(createUser()),
    setVisibleModal: (data) => dispatch(setUserCreateModalVisible(data)),
    setUserCreateModalUsername: (data) => dispatch(setUserCreateModalUsername(data)),
    setUserCreateModalPassword: (data) => dispatch(setUserCreateModalPassword(data)),
    setUserCreateModalName: (data) => dispatch(setUserCreateModalName(data)),
    setUserCreateModalPhone: (data) => dispatch(setUserCreateModalPhone(data)),
    setUserCreateModalEmail: (data) => dispatch(setUserCreateModalEmail(data)),
    setUserCreateModalRoleIds: (data) => dispatch(setUserCreateModalRoleIds(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(component);