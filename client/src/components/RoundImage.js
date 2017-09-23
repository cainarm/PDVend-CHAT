import React from 'react';
import PropTypes from 'prop-types';

const defaultStyle = {
    borderRadius: 400,
};

const RoundImage = props => {
    const {
        src,
        style
    } = props;

    return (
        <span>
            <img src={src} style={style ? {...defaultStyle, ...style}: defaultStyle}/>
        </span>
    );  
};

RoundImage.propTypes = {
  src: PropTypes.string.isRequired,
  style: PropTypes.object
};

export default RoundImage;