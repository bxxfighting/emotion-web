import { connect } from 'react-redux';
import component from '../../components/Url/CreateModal';
import {
    createUrl,
    setUrlCreateModalVisible,
    setUrlCreateModalName,
    setUrlCreateModalUrl,
} from '../../actions';

const mapStateToProps = state => {
    return {
        createModal: state.url.createModal,
        mods: state.mod.dataList,
    };
};

const mapDispatchToProps = dispatch => ({
    createUrl: () => dispatch(createUrl()),
    setVisibleModal: (data) => dispatch(setUrlCreateModalVisible(data)),
    setUrlCreateModalName: (data) => dispatch(setUrlCreateModalName(data)),
    setUrlCreateModalUrl: (data) => dispatch(setUrlCreateModalUrl(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(component);