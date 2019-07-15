import { connect } from 'react-redux';
import component from '../../components/Batch/UpdateModal';
import {
    updateBatch,
    setBatchUpdateModalVisible,
    setBatchUpdateModalName,
    setBatchUpdateModalSign,
    setBatchUpdateModalRemark,
} from '../../actions';

const mapStateToProps = state => {
    return {
        updateModal: state.batch.updateModal,
    };
};

const mapDispatchToProps = dispatch => ({
    updateBatch: () => dispatch(updateBatch()),
    setVisibleModal: (data) => dispatch(setBatchUpdateModalVisible(data)),
    setBatchUpdateModalName: (data) => dispatch(setBatchUpdateModalName(data)),
    setBatchUpdateModalSign: (data) => dispatch(setBatchUpdateModalSign(data)),
    setBatchUpdateModalRemark: (data) => dispatch(setBatchUpdateModalRemark(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(component);