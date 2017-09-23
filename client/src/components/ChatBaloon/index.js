import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ChatBaloon = props => {
    const {
        who, 
        message
    } = props;

    return (
        <div className={`chat-message ${who}`}>
            {message || ""}
        </div>
    ); 
};

ChatBaloon.propTypes = {
  who: PropTypes.string.isRequired,
  message: PropTypes.string,
  
};

export default ChatBaloon;