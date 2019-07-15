import { connect } from 'react-redux';
import Component from '../../components/Comment/Filter';
import {
    getCommentList,
    setCommentFilterKeyword,
    setCommentFilterLabel,
    setCommentFilterStatus,
} from '../../actions';

const mapStateToProps = state => {
    return {
        filter: state.comment.filter,
        labelList: state.comment.labelList,
        statusList: state.comment.statusList,
    };
};

const mapDispatchToProps = dispatch => ({
    getCommentList: () => dispatch(getCommentList()),
    setCommentFilterKeyword: (data) => dispatch(setCommentFilterKeyword(data)),
    setCommentFilterLabel: (data) => dispatch(setCommentFilterLabel(data)),
    setCommentFilterStatus: (data) => dispatch(setCommentFilterStatus(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component);