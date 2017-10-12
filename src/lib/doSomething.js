// @flow

/**
 * Returns name if not empty
 * @param {string} name - The name
 * @param {requestCallback} callback - Error first callback. Returns the name
 */
exports.do = (name: string, callback: Function) => {
    if (name === '') {
        callback({ errmsg: 'Name cant empty' }, null);
    } else {
        callback(null, `name is ${name}`);
    }
};
