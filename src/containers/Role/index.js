
import { connect } from 'react-redux';
import Role from '../../components/Role';
import {
    getRoleList,
    setRoleListFetch,
    getModList,
    deleteRole,
    setRoleCreateModalVisible,
    setRoleUpdateModalVisible,
    setRoleUpdateModalId,
    setRoleUpdateModalName,
    setRoleUpdateModalSign,
    setRoleUpdateModalModIds,
} from '../../actions';

const mapStateToProps = state => {
    return {
        dataList: state.role.dataList,
        isFetch: state.role.isFetch,
    };
};

const mapDispatchToProps = dispatch => ({
    getRoleList: () => dispatch(getRoleList()),
    getModList: () => dispatch(getModList()),
    setRoleListFetch: (data) => dispatch(setRoleListFetch(data)),
    setRoleCreateModalVisible: (data) => dispatch(setRoleCreateModalVisible(data)),
    deleteRole: (data) => dispatch(deleteRole(data)),
    setRoleUpdateModalVisible: (data) => dispatch(setRoleUpdateModalVisible(data)),
    setRoleUpdateModalId: (data) => dispatch(setRoleUpdateModalId(data)),
    setRoleUpdateModalName: (data) => dispatch(setRoleUpdateModalName(data)),
    setRoleUpdateModalSign: (data) => dispatch(setRoleUpdateModalSign(data)),
    setRoleUpdateModalModIds: (data) => dispatch(setRoleUpdateModalModIds(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Role);