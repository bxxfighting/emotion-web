import { connect } from 'react-redux';
import Component from '../../components/MainScreen';
import {
    setUserListFetch,
    setRoleListFetch,
    setModListFetch,
    setUrlListFetch,
    setCommentListFetch,
    setStopwordListFetch,
} from '../../actions';

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => ({
    setUserListFetch: (data) => dispatch(setUserListFetch(data)),
    setRoleListFetch: (data) => dispatch(setRoleListFetch(data)),
    setModListFetch: (data) => dispatch(setModListFetch(data)),
    setUrlListFetch: (data) => dispatch(setUrlListFetch(data)),
    setCommentListFetch: (data) => dispatch(setCommentListFetch(data)),
    setStopwordListFetch: (data) => dispatch(setStopwordListFetch(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component);