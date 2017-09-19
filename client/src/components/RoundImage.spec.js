import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import RoundImage from './RoundImage';

describe("<RoundImage>", ()=>{
    it("Deverá aparecer uma imagem redonda ", () => {
        const component = shallow(<RoundImage src="../assets/img/logo.png"/>);

        expect(component.find('img')).to.have.length(1);
        expect(component.find('img').prop('src')).to.equal("../assets/img/logo.png");
    });
});
