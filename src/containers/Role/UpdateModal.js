import { connect } from 'react-redux';
import component from '../../components/Role/UpdateModal';
import {
    updateRole,
    setRoleUpdateModalVisible,
    setRoleUpdateModalName,
    setRoleUpdateModalSign,
    setRoleUpdateModalModIds,
} from '../../actions';

const mapStateToProps = state => {
    return {
        updateModal: state.role.updateModal,
        mods: state.mod.dataList,
    };
};

const mapDispatchToProps = dispatch => ({
    updateRole: () => dispatch(updateRole()),
    setVisibleModal: (data) => dispatch(setRoleUpdateModalVisible(data)),
    setRoleUpdateModalName: (data) => dispatch(setRoleUpdateModalName(data)),
    setRoleUpdateModalSign: (data) => dispatch(setRoleUpdateModalSign(data)),
    setRoleUpdateModalModIds: (data) => dispatch(setRoleUpdateModalModIds(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(component);