import { connect } from 'react-redux';
import Component from '../../components/Stopword/Filter';
import {
    getStopwordList,
    setStopwordFilterKeyword,
    setStopwordFilterStatus,
} from '../../actions';

const mapStateToProps = state => {
    return {
        filter: state.stopword.filter,
        statusList: state.stopword.statusList,
    };
};

const mapDispatchToProps = dispatch => ({
    getStopwordList: () => dispatch(getStopwordList()),
    setStopwordFilterKeyword: (data) => dispatch(setStopwordFilterKeyword(data)),
    setStopwordFilterStatus: (data) => dispatch(setStopwordFilterStatus(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component);