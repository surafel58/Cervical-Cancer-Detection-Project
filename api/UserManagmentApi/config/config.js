const { initializeApp, cert } = require('firebase-admin/app');
const admin = require('firebase-admin');

const serviceAccount = require('../serviceAccountKey.json');

const app = initializeApp({
  credential: cert(serviceAccount)
});

module.exports = admin.auth()