import { connect } from 'react-redux';
import component from '../../components/Url/UpdateModal';
import {
    updateUrl,
    setUrlUpdateModalVisible,
    setUrlUpdateModalName,
    setUrlUpdateModalUrl,
} from '../../actions';

const mapStateToProps = state => {
    return {
        updateModal: state.url.updateModal,
        mods: state.mod.dataList,
    };
};

const mapDispatchToProps = dispatch => ({
    updateUrl: () => dispatch(updateUrl()),
    setVisibleModal: (data) => dispatch(setUrlUpdateModalVisible(data)),
    setUrlUpdateModalName: (data) => dispatch(setUrlUpdateModalName(data)),
    setUrlUpdateModalUrl: (data) => dispatch(setUrlUpdateModalUrl(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(component);