import { connect } from 'react-redux';
import component from '../../components/Batch/CreateModal';
import {
    createBatch,
    setBatchCreateModalVisible,
    setBatchCreateModalName,
    setBatchCreateModalSign,
    setBatchCreateModalRemark,
} from '../../actions';

const mapStateToProps = state => {
    return {
        createModal: state.batch.createModal,
    };
};

const mapDispatchToProps = dispatch => ({
    createBatch: () => dispatch(createBatch()),
    setVisibleModal: (data) => dispatch(setBatchCreateModalVisible(data)),
    setBatchCreateModalName: (data) => dispatch(setBatchCreateModalName(data)),
    setBatchCreateModalSign: (data) => dispatch(setBatchCreateModalSign(data)),
    setBatchCreateModalRemark: (data) => dispatch(setBatchCreateModalRemark(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(component);