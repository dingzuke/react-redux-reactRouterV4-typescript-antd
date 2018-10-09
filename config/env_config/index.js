let env;
switch (process.argv[2]) {
    case 'debug':
        env = require('./debug');
        break;

    case 'dev':
        env = require('./debug');
        break;

    case 'production':
        env = require('./production');
        break;

    case 'test':
        env = require('./test');
        break;

    case 'demo':
        env = require('./demo');
        break;

    case 'cas':
        env = require('./cas');
        break;    

    default:
        env = require('./debug');
}

module.exports = JSON.stringify(env);