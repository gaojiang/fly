'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _jsonGraphqlServer = require('json-graphql-server');

var _jsonGraphqlServer2 = _interopRequireDefault(_jsonGraphqlServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import data from '../db/users';

const users = [{
    "id": 1,
    "first_name": "Babbie",
    "last_name": "Veelers",
    "email": "bveelers0@fc2.com",
    "gender": "Female",
    "department": "Support",
    "country": "United States"
}, {
    "id": 2,
    "first_name": "Fairleigh",
    "last_name": "Jedras",
    "email": "fjedras1@diigo.com",
    "gender": "Male",
    "department": "Development",
    "country": "United Kingdom"
}, {
    "id": 3,
    "first_name": "Lutero",
    "last_name": "Symcox",
    "email": "lsymcox2@fotki.com",
    "gender": "Male",
    "department": "Development",
    "country": "United States"
}, {
    "id": 4,
    "first_name": "Pyotr",
    "last_name": "Kalinsky",
    "email": "pkalinsky3@wp.com",
    "gender": "Male",
    "department": "Support",
    "country": "Ireland"
}, {
    "id": 5,
    "first_name": "Consuelo",
    "last_name": "Fairey",
    "email": "cfairey4@nature.com",
    "gender": "Female",
    "department": "Legal",
    "country": "United Kingdom"
}, {
    "id": 6,
    "first_name": "Jemimah",
    "last_name": "Rodwell",
    "email": "jrodwell5@arizona.edu",
    "gender": "Female",
    "department": "Support",
    "country": "United States"
}, {
    "id": 7,
    "first_name": "Sonny",
    "last_name": "Read",
    "email": "sread6@fastcompany.com",
    "gender": "Female",
    "department": "Support",
    "country": "United States"
}, {
    "id": 8,
    "first_name": "Marion",
    "last_name": "Janczewski",
    "email": "mjanczewski7@hatena.ne.jp",
    "gender": "Male",
    "department": "Development",
    "country": "Ireland"
}];

console.log('users is=' + JSON.stringify(users));
const PORT = 3000;
const app = (0, _express2.default)();

app.use('/graphql', (0, _jsonGraphqlServer2.default)(users));
app.listen(PORT);