import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ChatDialog from './ChatDialog';

describe("<ChatDialog>", ()=>{
    it("Deverá renderizar dois balão de mensagens  ", () => {
        
        const component = shallow(
            <ChatDialog messages={[
                    {
                        message: "Teste",
                        who: "me"
                    },
                    {
                        message: "Teste",
                        who: "them"
                    },
                ]}
            />
        );

        const actual = component.find('ChatBaloon');
        expect(actual).to.have.length(2);
    });
});
