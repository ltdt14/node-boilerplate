'use strict';

const chai = require('chai');
const expect = require('chai').expect;


const doSomething = require('../lib/doSomething');
const api = require('../index');

describe('doSomething', function() {
    describe('do', function() {
        it('should return name', done =>
            doSomething.do('name', (err, name) => {
                expect(err).to.equal(null);
                expect(name).to.equal('name is name');
                done();
            })
        );

        it('should return error', done =>
            doSomething.do('', (err, name) => {
                expect(err).to.not.equal(null);
                expect(name).to.equal(null);
                done();
            })
        );
    });
});

