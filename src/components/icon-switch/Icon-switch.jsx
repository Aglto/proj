import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const IconsSwitch = ({onChangeList}) => {
    return (
        <div className='icons-block'>
            <button onClick={onChangeList} className='material-icons'>
                view_module
            </button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    onChangeList() {
        dispatch(ActionCreator.changeList());
    },
});

export default connect(null, mapDispatchToProps)(IconsSwitch);