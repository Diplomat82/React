/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(4);

	var _reactRouter = __webpack_require__(5);

	var _routes = __webpack_require__(6);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cors = __webpack_require__(17);
	var bodyParser = __webpack_require__(18);
	var knex = __webpack_require__(19);

	var app = (0, _express2.default)();
	app.use(cors());
	// parse application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({ extended: false }));

	// parse application/json
	app.use(bodyParser.json());

	// post post
	app.post('/post', function (req, res) {
	  knex('posts').insert({
	    title: req.body.title,
	    post: req.body.post,
	    email: req.body.email,
	    date: new Date().toLocaleString()
	  }).then(function (result) {
	    console.log("Success posting new post to DB", result);
	    res.status(200).send('Success');
	  }).catch(function (error) {
	    console.log("Error posting new post to DB", error);
	    res.status(404).send('Failed');
	  });
	});

	// get post
	app.get('/post', function (req, res) {
	  console.log("get 3 most recent posts");
	  knex('posts').select('*').limit(3).orderBy('id', 'desc').then(function (result) {
	    console.log("Success getting 3 posts from DB", result);
	    res.json({ result: result });
	    // res.status(200).send('Success')
	  }).catch(function (error) {
	    console.log("Error getting 3 posts from DB", error);
	    res.status(404).send('Failed');
	  });
	});

	// serve our static stuff like index.css
	app.use(_express2.default.static(_path2.default.join(__dirname, 'public'), { index: false }));

	// send all requests to index.html so browserHistory works
	app.get('*', function (req, res) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
	    if (err) {
	      res.status(500).send(err.message);
	    } else if (redirect) {
	      res.redirect(redirect.pathname + redirect.search);
	    } else if (props) {
	      var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
	      res.send(renderPage(appHtml));
	    } else {
	      res.status(404).send('Not Found');
	    }
	  });
	});

	function renderPage(appHtml) {
	  return '\n  <!DOCTYPE html  public "storage">\n  <html>\n    <head>\n      <meta charset=utf-8/>\n      <title>\n        Ready, Set, React\n      </title>\n\n      <!-- Bootstrap CDN -->\n        <!-- Latest compiled and minified CSS -->\n          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">\n\n          <!-- Optional theme -->\n          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css">\n\n      <!-- local css -->\n        <link rel="stylesheet" type="text/css" href="index.css">\n    </head>\n    <body>\n      <div id=app></div>\n      <script src="bundle.js"></script>\n    </body>\n  </html>\n   ';
	}

	var PORT = process.env.PORT || 8888;
	app.listen(PORT, function () {
	  console.log('Production Express server running at localhost:' + PORT);
	});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("path");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("react-dom/server");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = require("react-router");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	//node modules

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(5);

	var _App = __webpack_require__(7);

	var _App2 = _interopRequireDefault(_App);

	var _Home = __webpack_require__(9);

	var _Home2 = _interopRequireDefault(_Home);

	var _Test = __webpack_require__(11);

	var _Test2 = _interopRequireDefault(_Test);

	var _Lifecycles = __webpack_require__(12);

	var _Lifecycles2 = _interopRequireDefault(_Lifecycles);

	var _Dashboard = __webpack_require__(13);

	var _Dashboard2 = _interopRequireDefault(_Dashboard);

	var _Write = __webpack_require__(14);

	var _Write2 = _interopRequireDefault(_Write);

	var _Read = __webpack_require__(16);

	var _Read2 = _interopRequireDefault(_Read);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _App2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/dashboard/:email', component: _Dashboard2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/write/:email', component: _Write2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/read', component: _Read2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/lifecycles', component: _Lifecycles2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/test', component: _Test2.default })
	);

	//components

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _NavLink = __webpack_require__(8);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'App',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'section',
	        { id: 'header' },
	        _react2.default.createElement(
	          'h1',
	          { className: 'text-center' },
	          'Ready, Set, React'
	        ),
	        _react2.default.createElement(
	          'section',
	          { role: 'nav', className: 'row' },
	          _react2.default.createElement('div', { className: 'col-xs-4' }),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-1' },
	            _react2.default.createElement(
	              _NavLink2.default,
	              { to: '/', className: 'text-center', onlyActiveOnIndex: true },
	              'Home'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-1' },
	            _react2.default.createElement(
	              _NavLink2.default,
	              { to: '/write' },
	              'Write Post'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-1' },
	            _react2.default.createElement(
	              _NavLink2.default,
	              { to: '/read' },
	              'Read Posts'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-1' },
	            _react2.default.createElement(
	              _NavLink2.default,
	              { to: '/lifecycles' },
	              'Lifecycles'
	            )
	          )
	        )
	      ),
	      this.props.children
	    );
	  }
	});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // modules/NavLink.js


	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'NavLink',
	  render: function render() {
	    return _react2.default.createElement(_reactRouter.Link, _extends({}, this.props, { activeClassName: 'active' }));
	  }
	});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(10);

	var _reactRouter = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Home = function (_React$Component) {
	  _inherits(Home, _React$Component);

	  function Home(props) {
	    _classCallCheck(this, Home);

	    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

	    _this.state = {
	      email: ''
	    };
	    _this.onChange = _this.onChange.bind(_this);
	    return _this;
	  }

	  _createClass(Home, [{
	    key: 'Welcome',
	    value: function Welcome(props) {
	      return _react2.default.createElement(
	        'h1',
	        null,
	        'Hello, ',
	        props.email
	      );
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange(e) {
	      console.log("email: ", e.target.value);
	      this.setState({ email: e.target.value });
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      var element = _react2.default.createElement(this.Welcome, { email: 'Sara' });
	      var stateInAction = this.state.email;

	      var style = {
	        color: 'purple'
	      };

	      return _react2.default.createElement(
	        'section',
	        { id: 'home' },
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement('div', { className: 'col-xs-4' }),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-4' },
	            _react2.default.createElement(
	              'h1',
	              { className: 'text-center', style: style },
	              'Login Using Email'
	            ),
	            _react2.default.createElement('input', {
	              type: 'text',
	              name: 'user',
	              id: 'user',
	              placeholder: 'your email',
	              onChange: this.onChange,
	              className: 'center-block',
	              required: true
	            }),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/dashboard/' + this.state.email, activeClassName: 'active' },
	              _react2.default.createElement(
	                'button',
	                { className: 'btn center-block' },
	                'Login'
	              )
	            )
	          ),
	          _react2.default.createElement('div', { className: 'col-xs-4' })
	        )
	      );
	    }
	  }]);

	  return Home;
	}(_react2.default.Component);

	exports.default = Home;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = require("react-bootstrap");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Test = function (_React$Component) {
	  _inherits(Test, _React$Component);

	  function Test(props) {
	    _classCallCheck(this, Test);

	    var _this = _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).call(this, props));

	    _this.state = {
	      stateName: ''
	    };
	    return _this;
	  }

	  _createClass(Test, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      //onload
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit(event) {
	      event.preventDefault();
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      return _react2.default.createElement(
	        'section',
	        null,
	        _react2.default.createElement(
	          'h1',
	          null,
	          'The button below uses Bootstrap'
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Button,
	          null,
	          'Bootstrap Example'
	        )
	      );
	    }
	  }]);

	  return Test;
	}(_react2.default.Component);

	/*<section id="home">
	  <h1 className="text-center" style={style}>Home Page</h1>
	  <div className="row">
	    <div className="col-xs-6">
	      {element}
	      <label htmlFor="user">Have Something To Say?</label>

	        <input
	          type="text"
	          name="user"
	          id="user"
	          placeholder="your name"
	          onChange={this.wow}
	          required
	        />
	    </div>
	    <div className="col-xs-6">

	    </div>
	  </div>

	  <input
	    type="text"
	    name="user"
	    id="user"
	    placeholder="your name"
	    onChange={this.wow}
	    required
	  />
	<h1>{stateInAction}</h1>
	<About name="Sara"></About>

	</section>*/


	exports.default = Test;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Lifecycles = function (_React$Component) {
	  _inherits(Lifecycles, _React$Component);

	  function Lifecycles(props) {
	    _classCallCheck(this, Lifecycles);

	    var _this = _possibleConstructorReturn(this, (Lifecycles.__proto__ || Object.getPrototypeOf(Lifecycles)).call(this, props));

	    _this.state = {
	      name: 'Daniel',
	      input: ''
	    };
	    _this.click = _this.click.bind(_this);
	    _this.onChange = _this.onChange.bind(_this);
	    return _this;
	  }

	  _createClass(Lifecycles, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      // invoked once.
	      // fires before initial 'render'
	      console.log("componentWillMount()");
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // good for AJAX: fetch, ajax, or subscriptions.

	      // invoked once (client-side only).
	      // fires before initial 'render'
	      console.log("componentDidMount()");
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      // invoked every time component is recieves new props.
	      // does not before initial 'render'
	      console.log("componentWillReceiveProps(nextProps)");
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      // invoked before every update (new props or state).
	      // does not fire before initial 'render'.
	      console.log("shouldComponentUpdate(nextProps, nextState)");
	      return true;
	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(nextProps, nextState) {
	      // invoked immediately before update (new props or state).
	      // does not fire before initial 'render'.

	      // (see componentWillReceiveProps if you need to call setState)
	      console.log("componentWillUpdate(nextProps, nextState)");
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      // invoked immediately after DOM updates
	      // does not fire after initial 'render'
	      console.log("componentDidUpdate(prevProps, prevState)");
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit(event) {
	      event.preventDefault();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      // invoked immediately before a component is unmounted.
	    }
	  }, {
	    key: 'click',
	    value: function click() {
	      this.setState({ name: 'Madwire' });
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange(e) {
	      this.setState({ input: e.target.value });
	    }
	  }, {
	    key: 'Welcome',
	    value: function Welcome(props) {
	      return _react2.default.createElement(
	        'h1',
	        null,
	        'Hello, ',
	        props.email
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      var name = this.state.name;
	      var stateInAction = this.state.input;
	      var element = _react2.default.createElement(this.Welcome, { email: this.state.input });

	      return _react2.default.createElement(
	        'section',
	        { id: 'lifecycles' },
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement('div', { className: 'col-xs-3' }),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-6' },
	            _react2.default.createElement(
	              'h1',
	              { className: 'text-center' },
	              'Lifecycles'
	            ),
	            _react2.default.createElement(
	              'h1',
	              { className: 'text-center' },
	              'Hi, I am ',
	              name
	            ),
	            _react2.default.createElement(
	              _reactBootstrap.Button,
	              { onClick: this.click, className: 'center-block' },
	              'DO STUFF'
	            ),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('input', {
	              type: 'text',
	              name: 'user',
	              id: 'user',
	              className: 'center-block',
	              placeholder: 'your name',
	              onChange: this.onChange,
	              required: true
	            }),
	            element
	          ),
	          _react2.default.createElement('div', { className: 'col-xs-3' })
	        )
	      );
	    }
	  }]);

	  return Lifecycles;
	}(_react2.default.Component);

	exports.default = Lifecycles;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(10);

	var _reactRouter = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Dashboard = function (_React$Component) {
	  _inherits(Dashboard, _React$Component);

	  function Dashboard(props) {
	    _classCallCheck(this, Dashboard);

	    var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));

	    _this.state = {
	      stateName: ''
	    };
	    return _this;
	  }

	  _createClass(Dashboard, [{
	    key: 'render',
	    value: function render() {

	      var user = this.props.params.email;
	      var style = {
	        border: '1em solid blue'
	      };

	      return _react2.default.createElement(
	        'section',
	        { id: 'dashboard', style: style },
	        _react2.default.createElement(
	          'h1',
	          { className: 'text-center' },
	          'Hi ',
	          user
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement('div', { className: 'col-xs-3' }),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-6' },
	            _react2.default.createElement(
	              'p',
	              null,
	              'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'row' },
	              _react2.default.createElement('div', { className: 'col-xs-3' }),
	              _react2.default.createElement(
	                'div',
	                { className: 'col-xs-3' },
	                _react2.default.createElement(
	                  _reactRouter.Link,
	                  { to: '/write/' + this.props.params.email, activeClassName: 'active' },
	                  _react2.default.createElement(
	                    'button',
	                    { className: 'btn center-block' },
	                    'Write Posts'
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'col-xs-3' },
	                _react2.default.createElement(
	                  _reactRouter.Link,
	                  { to: '/read', activeClassName: 'active' },
	                  _react2.default.createElement(
	                    'button',
	                    { className: 'btn center-block' },
	                    'Read Posts'
	                  )
	                )
	              ),
	              _react2.default.createElement('div', { className: 'col-xs-3' })
	            )
	          ),
	          _react2.default.createElement('div', { className: 'col-xs-3' })
	        )
	      );
	    }
	  }]);

	  return Dashboard;
	}(_react2.default.Component);

	exports.default = Dashboard;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var request = __webpack_require__(15);
	var ReactRouter = __webpack_require__(5);
	var browserHistory = ReactRouter.browserHistory;

	var Write = function (_React$Component) {
	  _inherits(Write, _React$Component);

	  function Write(props) {
	    _classCallCheck(this, Write);

	    var _this = _possibleConstructorReturn(this, (Write.__proto__ || Object.getPrototypeOf(Write)).call(this, props));

	    _this.state = {
	      title: '',
	      post: ''
	    };
	    _this.setTitleValue = _this.setTitleValue.bind(_this);
	    _this.setPostValue = _this.setPostValue.bind(_this);
	    _this.publish = _this.publish.bind(_this);
	    return _this;
	  }

	  _createClass(Write, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      //onload
	      console.log("this.props.params", this.props.params.email);
	    }
	  }, {
	    key: 'setTitleValue',
	    value: function setTitleValue(e) {
	      this.setState({ title: e.target.value });
	      console.log(this.state.title);
	    }
	  }, {
	    key: 'setPostValue',
	    value: function setPostValue(e) {
	      this.setState({ post: e.target.value });
	      console.log(this.state.post);
	    }
	  }, {
	    key: 'publish',
	    value: function publish(event) {
	      var title = this.state.title;
	      var postBody = this.state.post;
	      var email = this.props.params.email;
	      event.preventDefault();

	      request.post('http://localhost:8888/post').send({ email: email, title: title, post: postBody }).set('Accept', 'application/json').set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*').end(function (err, res) {
	        if (err || !res.ok) {
	          console.log("error posting new post", err);
	        } else {
	          console.log("success with new post", JSON.stringify(res.body));
	          browserHistory.push('/read');
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      var user = this.props.params.email;

	      var style = {
	        width: '30em',
	        height: '10em'
	      };

	      var style2 = {
	        border: '1em solid blue'
	      };

	      return _react2.default.createElement(
	        'section',
	        { id: 'write', style: style2 },
	        _react2.default.createElement(
	          'h1',
	          { className: 'text-center' },
	          'Write Post'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement('div', { className: 'col-xs-3' }),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-6' },
	            _react2.default.createElement(
	              'label',
	              { htmlFor: 'title', className: 'text-center center-block' },
	              'Type Your Title Here'
	            ),
	            _react2.default.createElement('input', {
	              type: 'text',
	              name: 'title',
	              id: 'title',
	              className: 'center-block',
	              placeholder: 'Post Title Goes Here...',
	              onChange: this.setTitleValue,
	              required: true
	            }),
	            _react2.default.createElement(
	              'label',
	              { htmlFor: 'post', className: 'text-center center-block' },
	              'Type Your Post Here'
	            ),
	            _react2.default.createElement('textarea', {
	              name: 'post',
	              placeholder: 'Post Goes Here...',
	              id: 'post',
	              style: style,
	              onChange: this.setPostValue,
	              className: 'center-block'
	            })
	          ),
	          _react2.default.createElement('div', { className: 'col-xs-3' })
	        ),
	        _react2.default.createElement('br', null),
	        _react2.default.createElement(
	          'h6',
	          null,
	          'Post Written By: ',
	          user
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Button,
	          { className: 'center-block', onClick: this.publish },
	          'Publish Post'
	        )
	      );
	    }
	  }]);

	  return Write;
	}(_react2.default.Component);

	exports.default = Write;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = require("superagent");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var request = __webpack_require__(15);

	var Read = function (_React$Component) {
	  _inherits(Read, _React$Component);

	  function Read(props) {
	    _classCallCheck(this, Read);

	    var _this = _possibleConstructorReturn(this, (Read.__proto__ || Object.getPrototypeOf(Read)).call(this, props));

	    _this.state = {
	      posts: []
	    };
	    return _this;
	  }

	  _createClass(Read, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var that = this;
	      request.get('http://localhost:8888/post').set('Accept', 'application/json').set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*').end(function (err, res) {
	        if (err || !res.ok) {
	          console.log("error gettings posts", err);
	        } else {
	          console.log("success gettings posts", res.body.result);
	          that.setState({ posts: res.body.result });
	        }
	      });
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit(event) {
	      event.preventDefault();
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      var posts = [{ id: 1, title: "test1", post: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", email: "dan@madwire.com", date: "April 16, 2017 10:00 AM" }, { id: 2, title: "test2", post: "lorem", email: "dan2@madwire.com", date: "April 17, 2017 10:00 AM" }, { id: 3, title: "test3", post: "lorem", email: "dan3@madwire.com", date: "April 18, 2017 10:00 AM" }];

	      var postsView = this.state.posts.map(function (post) {
	        return _react2.default.createElement(
	          'section',
	          { key: post.id, className: 'col-xs-4' },
	          _react2.default.createElement(
	            'h1',
	            { className: 'text-center' },
	            post.title
	          ),
	          _react2.default.createElement(
	            'h4',
	            null,
	            post.date
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            post.post
	          ),
	          _react2.default.createElement(
	            'h3',
	            null,
	            post.email
	          )
	        );
	      });

	      var style = {
	        border: '1em solid blue;'
	      };

	      return _react2.default.createElement(
	        'section',
	        { id: 'read', style: style },
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement('div', { className: 'col-xs-3' }),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-6' },
	            _react2.default.createElement(
	              'h1',
	              { className: 'text-center' },
	              'Read Posts'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'row' },
	              postsView
	            )
	          ),
	          _react2.default.createElement('div', { className: 'col-xs-3' })
	        )
	      );
	    }
	  }]);

	  return Read;
	}(_react2.default.Component);

	exports.default = Read;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = require("cors");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = require("body-parser");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var env = process.env.NODE_ENV || 'development';
	var config = __webpack_require__(20)[env];
	module.exports = __webpack_require__(21)(config);

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = {

	    development: {
	        client: 'pg',
	        connection: 'postgresql://localhost/react-lightning'
	    },

	    production: {
	        client: 'pg',
	        connection: process.env.DATABASE_URL
	    }

	};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = require("knex");

/***/ })
/******/ ]);