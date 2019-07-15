import { connect } from 'react-redux';
import Component from '../../components/Comment/Filter';
import {
    getCommentList,
    setCommentFilterKeyword,
    setCommentFilterLabel,
} from '../../actions';

const mapStateToProps = state => {
    return {
        filter: state.comment.filter,
        labelList: state.comment.labelList,
    };
};

const mapDispatchToProps = dispatch => ({
    getCommentList: () => dispatch(getCommentList()),
    setCommentFilterKeyword: (data) => dispatch(setCommentFilterKeyword(data)),
    setCommentFilterLabel: (data) => dispatch(setCommentFilterLabel(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component);