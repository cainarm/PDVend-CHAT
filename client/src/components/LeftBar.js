import React from 'react';
import PropTypes from 'prop-types';
import TopBar  from './TopHeader';
import List from './List';

const style = {
    leftBar: {
        borderRight: '1px solid #ccc'
    }
};

const LeftBar = props =>{
    const {
        userImg,
        users
    } = props;

    return (
        <div style={style.leftBar}>
            <TopBar imgSrc={userImg}/>
            <div>
                <List 
                    elements={users}
                />
            </div>
        </div>
    );  
    
};

LeftBar.propTypes = {
    userImg: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired
};

export default LeftBar;