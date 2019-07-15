import { connect } from 'react-redux';
import component from '../../components/Stopword/CreateModal';
import {
    createStopword,
    setStopwordCreateModalVisible,
    setStopwordCreateModalWord,
} from '../../actions';

const mapStateToProps = state => {
    return {
        createModal: state.stopword.createModal,
    };
};

const mapDispatchToProps = dispatch => ({
    createStopword: () => dispatch(createStopword()),
    setVisibleModal: (data) => dispatch(setStopwordCreateModalVisible(data)),
    setStopwordCreateModalWord: (data) => dispatch(setStopwordCreateModalWord(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(component);