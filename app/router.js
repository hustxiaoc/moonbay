'use strict';
const componentQuery = new AV.Query('Component');

module.exports = app => {
  app.get('/api/components', function*() {
      this.body = yield componentQuery.find();
  });

  app.get('/home', app.controller.home);

  app.redirect('/', '/news');
  app.get('/news', app.controller.news.list);
  app.get('/news/item/:id', app.controller.news.detail);
  app.get('/news/user/:id', app.controller.news.user);
};
