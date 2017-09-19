import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class ChatBaloon extends React.Component{
    constructor(){
        super();
    }

    render(){
        const {
            who, 
            message
        } = this.props;

        return (
            <div className={`chat-message ${who}`}>
                {message || ""}
            </div>
        );  
    }
}

ChatBaloon.propTypes = {
  who: PropTypes.string.isRequired,
  message: PropTypes.string,
  
};

export default ChatBaloon;