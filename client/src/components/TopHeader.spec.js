import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import TopHeader from './TopHeader';
import RoundImage from './RoundImage';

describe("<TopHeader />", ()=>{
    it("Deverá renderizar um header com os textos ", () => {
        const component = shallow(<TopHeader imgSrc="../assets/img/logo.png" chatTarget="teste"/>);

        expect(component.find(RoundImage)).to.have.length(1);
        expect(component.find('span').text()).to.equal("teste");
    });
});
