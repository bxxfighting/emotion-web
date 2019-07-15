import { connect } from 'react-redux';
import Stopword from '../../components/Stopword';
import {
    getStopwordList,
    updateStopword,
    deleteStopword,
    setStopwordListFetch,
    setStopwordPageNum,
    setStopwordPageSize,
    setStopwordCreateModalVisible,
} from '../../actions';

const mapStateToProps = state => {
    return {
        dataList: state.stopword.dataList,
        pageNum: state.stopword.pageNum,
        pageSize: state.stopword.pageSize,
        total: state.stopword.total,
        isFetch: state.stopword.isFetch,
        statusList: state.stopword.statusList,
    };
};

const mapDispatchToProps = dispatch => ({
    getStopwordList: () => dispatch(getStopwordList()),
    setStopwordListFetch: (data) => dispatch(setStopwordListFetch(data)),
    setStopwordPageNum: (data) => dispatch(setStopwordPageNum(data)),
    setStopwordPageSize: (data) => dispatch(setStopwordPageSize(data)),
    updateStopword: (id, status) => dispatch(updateStopword(id, status)),
    deleteStopword: (data) => dispatch(deleteStopword(data)),
    setStopwordCreateModalVisible: (data) => dispatch(setStopwordCreateModalVisible(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Stopword);