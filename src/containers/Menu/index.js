import { connect } from 'react-redux';
import component from '../../components/Menu';
import {
    getUserModList,
    setMenuListFetch,
    setMenuSelectedKey,
} from '../../actions';

const mapStateToProps = state => {
    return {
        dataList: state.menu.dataList,
        isFetch: state.menu.isFetch,
        selectedKey: state.menu.selectedKey,
    };
};

const mapDispatchToProps = dispatch => ({
    getUserModList: () => dispatch(getUserModList()),
    setMenuListFetch: (data) => dispatch(setMenuListFetch(data)),
    setMenuSelectedKey: (data) => dispatch(setMenuSelectedKey(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(component);