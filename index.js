const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

// load env vars if .env exists
if (fs.existsSync(path.join(__dirname, './.env'))) {
    dotenv.load();
} else {
    throw new ReferenceError('You need an .env file!');
}

const doSomething = require('./lib/doSomething');

/**
 * @fileOverview API
 * @author <a href="mailto:bla">Lasse</a>
 * @version 0.0.1
 */

/**
 * Returns the name if not empty
 * @param {string} name - The name.
 * @param {requestCallback} callback - Error first callback. Returns the name.
 * @example
 *
 * const doSomething = require('one-time-download');
 *
 * do('examplecode', function(err, name){
 *      name ? console.log(name) : console.log(err)
 * }
 */
exports.do = function(name, callback) {
    doSomething.do(name, callback);
};
