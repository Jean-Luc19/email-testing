import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import EMAILS from '../js/emails';

const should = chai.should();

    import InboxEmailList from '../js/components/inbox-email-list';

    describe('Component Should Return a list of emails', function() {
        const folder = 'spam';
        it('Renders Emails in a List', function() {
            const renderer = TestUtils.createRenderer();
            renderer.render(<InboxEmailList folder="inbox" emails={EMAILS}/>)
            const result = renderer.getRenderOutput();
            result.props.className.should.equal('email-list')
            const h2 = result.props.children[0];
            const ul = result.props.children[1];
            h2.type.should.equal('h2');
            ul.type.should.equal('ul');
            ul.props.children.length.should.equal(2);
        });
    });
