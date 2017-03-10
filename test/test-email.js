import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Email from '../js/components/email';

describe('Email Component', function() {
    it('Renders an H3 tag', function() {
        const from = "somebody";
        const content = "new content";
        const folder = "inbox";
        const id = 'id';
        console.log("testing");

        const renderer = TestUtils.createRenderer();
        renderer.render(<Email from={from} content={content} folder={folder} id={id}/>);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('email');
        console.log("the props: " + result.props);

    });
});
