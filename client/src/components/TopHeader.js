import React from 'react';
import RoundImage from '../components/RoundImage';
import PropTypes from 'prop-types';

const style = {
    width: '100%',
    height: 60,
    backgroundColor: "#EEEEEE",
    borderBottom: "1px solid #E0E0E0",
    image: {
        height:55, 
        marginTop: 2,
        marginLeft: 5,
        float: 'left',
    },
    name: {
        marginLeft: 20,
        float: 'left',
        marginTop: 15
    }
};

class TopHeader extends React.Component{
    constructor(){
        super();
    }
    
    render(){

        const {
            imgSrc,
            chatTarget
        } = this.props;

        return (
            <div style={style}>
                <RoundImage src={imgSrc} style={style.image}/>
                <span style={style.name}>
                    {chatTarget}
                </span>
            </div>
        );
    }
}

TopHeader.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  chatTarget: PropTypes.string
};

export default TopHeader;