import { connect } from 'react-redux';
import Comment from '../../components/Comment';
import {
    getCommentList,
    updateComment,
    setCommentListFetch,
    setCommentPageNum,
    setCommentPageSize,
} from '../../actions';

const mapStateToProps = state => {
    return {
        dataList: state.comment.dataList,
        pageNum: state.comment.pageNum,
        pageSize: state.comment.pageSize,
        total: state.comment.total,
        isFetch: state.comment.isFetch,
        labelList: state.comment.labelList,
    };
};

const mapDispatchToProps = dispatch => ({
    getCommentList: () => dispatch(getCommentList()),
    setCommentListFetch: (data) => dispatch(setCommentListFetch(data)),
    setCommentPageNum: (data) => dispatch(setCommentPageNum(data)),
    setCommentPageSize: (data) => dispatch(setCommentPageSize(data)),
    updateComment: (id, label) => dispatch(updateComment(id, label)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Comment);