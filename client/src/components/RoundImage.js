import React from 'react';
import PropTypes from 'prop-types';

const defaultStyle = {
    borderRadius: 400,
}

class RoundImage extends React.Component{
    constructor(){
        super();
    }

    render(){
        const {
            src,
            style
        } = this.props;

        return (
            <span>
                <img src={src} style={style ? {...defaultStyle, ...style}: defaultStyle}/>
            </span>
        );  
    }
}

RoundImage.propTypes = {
  src: PropTypes.string.isRequired,
  style: PropTypes.object
};

export default RoundImage;