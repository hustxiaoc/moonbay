'use strict';

const isLocal = process.env.NODE_ENV !== 'production' && !process.env.EGG_SERVER_ENV;

require('egg').startCluster({
  baseDir: __dirname,
  port: process.env.LEANCLOUD_APP_PORT || 7001, // default to 7001
  workers: isLocal ? 1 : 1, // default to cpu count
});
