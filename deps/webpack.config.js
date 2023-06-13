const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'hash.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
