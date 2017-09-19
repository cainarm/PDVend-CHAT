import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import LeftBar from './LeftBar';

describe("<LeftBar>", ()=>{
    it("Teste de menu lateral ", () => {
        const component = shallow(<LeftBar usrImg="../assets/img/logo.png" users={Array(15).fill({name: "BOT", img: "../assets/img/user1.png"})}/>);

        expect(component.find('TopHeader')).to.have.length(1);
        expect(component.find('List')).to.have.length(1);
    });
});
