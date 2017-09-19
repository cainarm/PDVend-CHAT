import React from 'react';
import RoundImage from '../components/RoundImage';
import PropTypes from 'prop-types';

const style = {
    width: '100%',
    height: 60,
    backgroundColor: "white",
    marginBottom: 5,
    marginTop: 5,
    image: {
        height:55, 
        marginTop: 2,
        marginLeft: 5,
        float: 'left',
    },
    name: {
        marginLeft: 15,
        float: 'left',
        marginTop: 10,
        paddingBottom: 28,
        borderBottom: '1px solid #F5F5F5',
        width: "calc(100% - 90px)"
    },
    divider: {
        width: "60%",
        height: 1,
        borderBottom: '1px solid black'

    }
};

class ListElement extends React.Component{
    constructor(){
        super();
    }
    
    render(){

        const {
            imgSrc,
            name
        } = this.props;

        return (
            <div style={style}>
                <RoundImage src={imgSrc} style={style.image}/>
                <span style={style.name}>
                    {name}
                </span>
            </div>
        );
    }
}

ListElement.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string
};

export default ListElement;