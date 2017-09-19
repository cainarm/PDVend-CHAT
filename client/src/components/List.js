import React from 'react';
import PropTypes from 'prop-types';
import ListElement from '../components/ListElement';
import '../assets/css/customScrollbar.css';

const style = {
    overflowY: 'scroll',
    height: window.innerHeight - 64
};

class List extends React.Component{
    constructor(){
        super();
    }

    render(){
        const {
            elements
        } = this.props;

        return (
            <div style={style} className="trackbar">
                {
                    elements.map((element, i) => {
                        return (
                            <ListElement key={i} imgSrc={element.img} name={element.name}/>
                        );
                    })
                }        
            </div>
        );  
    }
}

List.propTypes = {
    elements: PropTypes.array.isRequired,
};

export default List;