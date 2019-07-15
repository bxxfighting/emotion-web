import { connect } from 'react-redux';
import Mod from '../../components/Mod';
import {
    getModList,
    getUrlList,
    setModListFetch,
    setModCreateModalVisible,
    deleteMod,
    setModUpdateModalVisible,
    setModUpdateModalID,
    setModUpdateModalName,
    setModUpdateModalSign,
    setModUpdateModalRank,
    setModUpdateModalUrlIds,
} from '../../actions';

const mapStateToProps = state => {
    return {
        dataList: state.mod.dataList,
        isFetch: state.mod.isFetch,
    };
};

const mapDispatchToProps = dispatch => ({
    getModList: () => dispatch(getModList()),
    getUrlList: () => dispatch(getUrlList()),
    setModListFetch: (data) => dispatch(setModListFetch(data)),
    setModCreateModalVisible: (data) => dispatch(setModCreateModalVisible(data)),
    deleteMod: (data) => dispatch(deleteMod(data)),
    setModUpdateModalID: (data) => dispatch(setModUpdateModalID(data)),
    setModUpdateModalName: (data) => dispatch(setModUpdateModalName(data)),
    setModUpdateModalSign: (data) => dispatch(setModUpdateModalSign(data)),
    setModUpdateModalRank: (data) => dispatch(setModUpdateModalRank(data)),
    setModUpdateModalVisible: (data) => dispatch(setModUpdateModalVisible(data)),
    setModUpdateModalUrlIds: (data) => dispatch(setModUpdateModalUrlIds(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Mod);