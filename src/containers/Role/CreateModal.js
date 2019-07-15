import { connect } from 'react-redux';
import component from '../../components/Role/CreateModal';
import {
    createRole,
    setRoleCreateModalVisible,
    setRoleCreateModalName,
    setRoleCreateModalSign,
    setRoleCreateModalModIds,
} from '../../actions';

const mapStateToProps = state => {
    return {
        createModal: state.role.createModal,
        mods: state.mod.dataList,
    };
};

const mapDispatchToProps = dispatch => ({
    createRole: () => dispatch(createRole()),
    setVisibleModal: (data) => dispatch(setRoleCreateModalVisible(data)),
    setRoleCreateModalName: (data) => dispatch(setRoleCreateModalName(data)),
    setRoleCreateModalSign: (data) => dispatch(setRoleCreateModalSign(data)),
    setRoleCreateModalModIds: (data) => dispatch(setRoleCreateModalModIds(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(component);