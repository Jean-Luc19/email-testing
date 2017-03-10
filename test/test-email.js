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
        result.props.children.props.children.props.children.should.be.an('array')
          .with.lengthOf(4);
        const resultContent = result.props.children.props.children.props.children[3];
        const resultFrom = result.props.children.props.children.props.children[1];

        resultContent.should.equal(content);
        resultFrom.should.equal(from);
        console.log(result.props.children.props.children)
    });
});
