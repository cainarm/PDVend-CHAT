import React from 'react';
import ChatBaloon from './ChatBaloon';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import '../assets/css/transitions/enterIn.css';
import '../assets/css/customScrollbar.css';

const style = {
    container: {
        width: '100%',
        height: 'calc(100% - 110px)',
        backgroundColor: "#FAFAFA",
    },
    messages: {
        position: 'relative',
        overflowY: 'scroll',
        overflowX: 'hidden',
        height: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 6,
        paddingBottom: -40
    },
};

const ChatContainer = props => {
    const {
        messages 
    } = props;

    return (
        <div style={style.container}>
            <div style={style.messages} className="trackbar">
                <ReactCSSTransitionGroup
                    transitionName="enterIn"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}
                >
                {
                    messages.map((element, i) => {
                        return (
                            <ChatBaloon 
                                key={element.message + "-" + i} 
                                message={element.message} 
                                who={element.who} 
                            />
                        );
                    })
                }
                </ReactCSSTransitionGroup>
            </div>
        </div>
    );

};

ChatContainer.propTypes = {
  messages: PropTypes.array.isRequired,
};


export default ChatContainer;