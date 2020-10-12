const functions = require('firebase-functions');
const { Nuxt } = require('nuxt-start');

let nuxtConfig = require('./nuxt.config.js');

const config = {
  ...nuxtConfig,
  dev: false,
  debug: true,
  buildDir: 'nuxt',
};
// console.log(config)
const nuxt = new Nuxt(config);

exports.ssrapp = functions.https.onRequest(async (req, res) => {
  console.log('on Request ssr app')
  await nuxt.ready();
  console.log('request')
  console.log(req)
  nuxt.render(req, res);
});
