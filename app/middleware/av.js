'use strict';
var AV = require('leanengine');

AV.init({
  appId: process.env.LEANCLOUD_APP_ID || 'XSlTuCoI24N4ikmUyGnbbVL3-gzGzoHsz',
  appKey: process.env.LEANCLOUD_APP_KEY || 'QwMLBkVnyhrHWNWggaomyYwi',
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || '9tsHO2sGropCJHN7C7zW5yRH'
});

module.exports = function () {
  return AV.koa();
};
