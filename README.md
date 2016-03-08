# passport-http-header-strategy
[![Build Status](https://travis-ci.org/FengYuHe/passport-http-header-strategy.svg?branch=master)](https://travis-ci.org/FengYuHe/passport-http-header-strategy)

HTTP define header authentication strategy for[Passport](https://github.com/jaredhanson/passport)

## Install

	$ npm install passport-http-header-strategy

## Usage
* `header` 设置请求头(默认authorization)
* `param` 设置以`req.body`或`req.query`参数形式请求的`token`名称(默认access_token)
*  `passReqToCallback` 是否返回

#### Configure Strategy
```js
passport.use(new headerStrategy({header: 'X-APP-TOKEN', param: 'app_token', passReqToCallback: true},
  function(req, token, done) {
    User.findOne({ token: token }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      return done(null, user, { scope: 'all' });
    });
  }
));
```

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'bearer'` strategy, to
authenticate requests.  Requests containing bearer tokens do not require session
support, so the `session` option can be set to `false`.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/profile', 
      passport.authenticate('bearer', { session: false }),
      function(req, res) {
        res.json(req.user);
      });

## Examples
[examples](https://github.com/FengYuHe/passport-http-header-strategy/tree/master/examples) - 示例

## Tests
	
	$ npm install
	$ mocha

## 参考
参考[Jared Hanson](https://github.com/jaredhanson)的[passport-http-bearer](https://github.com/jaredhanson/passport-http-bearer)模块

## License
[The MIT License](http://opensource.org/licenses/MIT)
