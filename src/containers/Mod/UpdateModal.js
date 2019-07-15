import { connect } from 'react-redux';
import component from '../../components/Mod/UpdateModal';
import {
    updateMod,
    setModUpdateModalVisible,
    setModUpdateModalName,
    setModUpdateModalSign,
    setModUpdateModalRank,
    setModUpdateModalUrlIds,
} from '../../actions';

const mapStateToProps = state => {
    return {
        updateModal: state.mod.updateModal,
        urls: state.url.dataList,
    };
};

const mapDispatchToProps = dispatch => ({
    updateMod: () => dispatch(updateMod()),
    setVisibleModal: (data) => dispatch(setModUpdateModalVisible(data)),
    setModUpdateModalName: (data) => dispatch(setModUpdateModalName(data)),
    setModUpdateModalSign: (data) => dispatch(setModUpdateModalSign(data)),
    setModUpdateModalRank: (data) => dispatch(setModUpdateModalRank(data)),
    setModUpdateModalUrlIds: (data) => dispatch(setModUpdateModalUrlIds(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(component);