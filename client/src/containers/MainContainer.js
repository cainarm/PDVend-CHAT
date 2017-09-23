import React from 'react';
import { connect } from 'react-redux';
import TopHeader from '../components/TopHeader';
import ChatDialog from '../components/ChatDialog';
import { getTemperature } from '../actions/TemperatureActions';
import { sendMessage } from '../actions/MessageActions';
import PropTypes from 'prop-types';

const style = {
    container: {
        width: '100%',
        height: '100%',
    },
    main: {
        width: `100%`,
        height: '100%', 
        float: "right"
    },
    inputContainer: {
        backgroundColor: '#EEEEEE',
        height: 50,
        position:'relative',
        float: 'bottom',
    },
    input: {
        width: 'calc(100% - 100px)',
        marginTop: 10,
        marginLeft: 7,
        height: 30,
        border: 0,
        borderRadius: 5,
        paddingLeft: 10,
        color: "#424242",
        fontSize: 15,
        fontWeight: 100
    },
    none: {
        display: 'none'
    },
    sendButton: {
        width: 30,
        float: 'right',
        marginTop: 10,
        marginRight: 20
    }


};

class Container extends React.Component{
    constructor(props){
        super(props);
        props.getTemperature();
    }
    
    sendMessage(e){
        e.preventDefault();
        if(this.message.value){
            this.props.send(this.message.value);
            this.message.value = "";
        }
    }

    render(){
        const { messages } = this.props;

        return(
            <div style={style.container}>
                <div style={style.main}>
                    <TopHeader 
                        imgSrc="../assets/img/logo.png" 
                        chatTarget="PDVEND"
                    />
                    <ChatDialog messages={messages}/>

                    <div style={style.inputContainer}>
                        <form onClick={e => this.sendMessage(e)}>
                            <input style={style.input} type="text" placeholder="Digite uma mensagem" ref={input => this.message = input}/>
                            <span onClick={e => this.sendMessage(e)}>
                                <button type="submit" style={style.none}/>
                                <img src="../assets/icons/send.png" style={style.sendButton}/>
                            </span>
                        </form>

                    </div>
                </div>

            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        messages: state.messages 
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        getTemperature: () => {
            dispatch(getTemperature());
        },
        send: (message) => {
            dispatch(sendMessage(message));
        }
    };
};

Container.propTypes = {
  getTemperature: PropTypes.func,
  messages: PropTypes.array,
  send: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);