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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _compression = __webpack_require__(3);

	var _compression2 = _interopRequireDefault(_compression);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(5);

	var _reactRouter = __webpack_require__(6);

	var _routes = __webpack_require__(7);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = (0, _express2.default)();

	app.use((0, _compression2.default)());

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
	      // hey we made it!
	      var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
	      res.send(renderPage(appHtml));
	    } else {
	      res.status(404).send('Not Found');
	    }
	  });
	});

	function renderPage(appHtml) {
	  return '\n    <!doctype html public="storage">\n    <html>\n    <meta charset=utf-8/>\n    <title>My First React Router App</title>\n    <link rel=stylesheet href=/index.css>\n    <div id=app>' + appHtml + '</div>\n    <script src="/bundle.js"></script>\n   ';
	}

	var PORT = process.env.PORT || 8888;
	app.listen(PORT, function () {
	  console.log('Production Express server running at localhost:' + PORT);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	//node modules

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(6);

	var _App = __webpack_require__(8);

	var _App2 = _interopRequireDefault(_App);

	var _About = __webpack_require__(10);

	var _About2 = _interopRequireDefault(_About);

	var _Home = __webpack_require__(11);

	var _Home2 = _interopRequireDefault(_Home);

	var _Test = __webpack_require__(12);

	var _Test2 = _interopRequireDefault(_Test);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//components
	module.exports = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _App2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _About2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/test', component: _Test2.default })
	);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _NavLink = __webpack_require__(9);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'App',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h1',
	        null,
	        'Ready, Set, React'
	      ),
	      _react2.default.createElement(
	        'ul',
	        { role: 'nav' },
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _NavLink2.default,
	            { to: '/', onlyActiveOnIndex: true },
	            'Home'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _NavLink2.default,
	            { to: '/about' },
	            'About'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _NavLink2.default,
	            { to: '/test' },
	            'Test'
	          )
	        )
	      ),
	      this.props.children
	    );
	  }
	});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // modules/NavLink.js


	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'NavLink',
	  render: function render() {
	    return _react2.default.createElement(_reactRouter.Link, _extends({}, this.props, { activeClassName: 'active' }));
	  }
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'About',
	  render: function render() {
	    return _react2.default.createElement(
	      'section',
	      null,
	      _react2.default.createElement(
	        'h1',
	        null,
	        'Ready, Set, React'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        'This application makes a React.js application ready to run'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        'and ',
	        this.props.name,
	        ' loves React'
	      )
	    );
	  }
	});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _About = __webpack_require__(10);

	var _About2 = _interopRequireDefault(_About);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// export default React.createClass({
	//
	//
	//
	//
	//   Welcome(props) {
	//     return <h1>Hello, {props.name}</h1>;
	//   },
	//
	//   wow(e){
	//     console.log("wow: ",e.target.value);
	//     this.setState({wow: e.target.value});
	//   },
	//
	//
	//   render() {
	//
	//     const element = <this.Welcome name="Sara" />;
	//     const stateInAction = this.state.wow;
	//
	//     return (
	//       <section>
	//         <h1>Home Page</h1>
	//         {element}
	//         <input
	//           type="text"
	//           name="user"
	//           id="user"
	//           placeholder="your name"
	//           onChange={this.wow}
	//           required
	//         />
	//       {stateInAction}
	//       <About name="Sara"></About>
	//
	//       </section>
	//     )
	//   }
	// })

	var NameForm = function (_React$Component) {
	  _inherits(NameForm, _React$Component);

	  function NameForm(props) {
	    _classCallCheck(this, NameForm);

	    var _this = _possibleConstructorReturn(this, (NameForm.__proto__ || Object.getPrototypeOf(NameForm)).call(this, props));

	    _this.state = { value: '' };

	    _this.handleChange = _this.handleChange.bind(_this);
	    _this.handleSubmit = _this.handleSubmit.bind(_this);
	    return _this;
	  }

	  _createClass(NameForm, [{
	    key: 'handleChange',
	    value: function handleChange(event) {
	      this.setState({ value: event.target.value });
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit(event) {
	      alert('A name was submitted: ' + this.state.value);
	      event.preventDefault();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'form',
	        { onSubmit: this.handleSubmit },
	        _react2.default.createElement(
	          'label',
	          null,
	          'Name:',
	          _react2.default.createElement('input', { type: 'text', value: this.state.value, onChange: this.handleChange })
	        ),
	        _react2.default.createElement('input', { type: 'submit', value: 'Submit' })
	      );
	    }
	  }]);

	  return NameForm;
	}(_react2.default.Component);

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*
	      Title: file title
	      Job: file job
	*/

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(13);

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

	exports.default = Test;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("react-bootstrap");

/***/ }
/******/ ]);