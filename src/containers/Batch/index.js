import { connect } from 'react-redux';
import Batch from '../../components/Batch';
import {
    getBatchList,
    setBatchListFetch,
    deleteBatch,
    setBatchCreateModalVisible,
    setBatchUpdateModalVisible,
    setBatchUpdateModalId,
    setBatchUpdateModalName,
    setBatchUpdateModalSign,
    setBatchUpdateModalRemark,
} from '../../actions';

const mapStateToProps = state => {
    return {
        dataList: state.batch.dataList,
        isFetch: state.batch.isFetch,
    };
};

const mapDispatchToProps = dispatch => ({
    getBatchList: () => dispatch(getBatchList()),
    setBatchListFetch: (data) => dispatch(setBatchListFetch(data)),
    setBatchCreateModalVisible: (data) => dispatch(setBatchCreateModalVisible(data)),
    deleteBatch: (data) => dispatch(deleteBatch(data)),
    setBatchUpdateModalVisible: (data) => dispatch(setBatchUpdateModalVisible(data)),
    setBatchUpdateModalId: (data) => dispatch(setBatchUpdateModalId(data)),
    setBatchUpdateModalName: (data) => dispatch(setBatchUpdateModalName(data)),
    setBatchUpdateModalSign: (data) => dispatch(setBatchUpdateModalSign(data)),
    setBatchUpdateModalRemark: (data) => dispatch(setBatchUpdateModalRemark(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Batch);