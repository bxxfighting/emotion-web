import { connect } from 'react-redux';
import component from '../../components/Mod/CreateModal';
import {
    createMod,
    setModCreateModalVisible,
    setModCreateModalName,
    setModCreateModalSign,
    setModCreateModalRank,
    setModCreateModalUrlIds,
} from '../../actions';

const mapStateToProps = state => {
    return {
        createModal: state.mod.createModal,
        urls: state.url.dataList,
    };
};

const mapDispatchToProps = dispatch => ({
    createMod: () => dispatch(createMod()),
    setVisibleModal: (data) => dispatch(setModCreateModalVisible(data)),
    setModCreateModalName: (data) => dispatch(setModCreateModalName(data)),
    setModCreateModalSign: (data) => dispatch(setModCreateModalSign(data)),
    setModCreateModalRank: (data) => dispatch(setModCreateModalRank(data)),
    setModCreateModalUrlIds: (data) => dispatch(setModCreateModalUrlIds(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(component);