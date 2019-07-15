import { connect } from 'react-redux';
import Url from '../../components/Url';
import {
    getUrlList,
    setUrlListFetch,
    getModList,
    deleteUrl,
    setUrlCreateModalVisible,
    setUrlUpdateModalVisible,
    setUrlUpdateModalId,
    setUrlUpdateModalName,
    setUrlUpdateModalUrl,
} from '../../actions';

const mapStateToProps = state => {
    return {
        dataList: state.url.dataList,
        isFetch: state.url.isFetch,
    };
};

const mapDispatchToProps = dispatch => ({
    getUrlList: () => dispatch(getUrlList()),
    getModList: () => dispatch(getModList()),
    setUrlListFetch: (data) => dispatch(setUrlListFetch(data)),
    setUrlCreateModalVisible: (data) => dispatch(setUrlCreateModalVisible(data)),
    deleteUrl: (data) => dispatch(deleteUrl(data)),
    setUrlUpdateModalVisible: (data) => dispatch(setUrlUpdateModalVisible(data)),
    setUrlUpdateModalId: (data) => dispatch(setUrlUpdateModalId(data)),
    setUrlUpdateModalName: (data) => dispatch(setUrlUpdateModalName(data)),
    setUrlUpdateModalUrl: (data) => dispatch(setUrlUpdateModalUrl(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Url);