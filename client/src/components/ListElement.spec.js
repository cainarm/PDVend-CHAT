import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ListElement from './ListElement';

describe("<ListElement>", ()=>{
    it("Teste de elemento de lista", () => {
        const component = shallow( <ListElement imgSrc="../assets/img/user1.png" name="John Doe"/>);
        
        expect(component.find('RoundImage')).to.have.length(1);
        expect(component.find('span').text()).to.equal("John Doe");
    });
});
