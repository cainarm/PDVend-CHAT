import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ChatBaloon from './ChatBaloon';

describe("<ChatBaloon />", ()=>{
    it("Deverá renderizar um balãozinho com uma mensagem", () => {
        const component = shallow(<ChatBaloon message="Hello" who="me" />);

        expect(component.find("div.chat-message.me")).to.have.length(1);
        expect(component.find('div.chat-message.me').text()).to.equal("Hello");
    });
});
