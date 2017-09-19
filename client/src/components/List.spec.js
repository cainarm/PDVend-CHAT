import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import List from './List';

describe("<List>", ()=>{
    it("Teste de lista ", () => {
        const component = shallow(<List elements={Array(15).fill({name: "BOT", img: "../assets/img/user1.png"})}/>);

        expect(component.find('ListElement')).to.have.length(15);
    
    });
});
