(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("moment"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "moment"], factory);
	else if(typeof exports === 'object')
		exports["react-input-calendar"] = factory(require("react"), require("moment"));
	else
		root["react-input-calendar"] = factory(root["React"], root["moment"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _moment = __webpack_require__(3);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	__webpack_require__(4);
	
	var _dayView = __webpack_require__(5);
	
	var _dayView2 = _interopRequireDefault(_dayView);
	
	var _monthView = __webpack_require__(8);
	
	var _monthView2 = _interopRequireDefault(_monthView);
	
	var _yearView = __webpack_require__(9);
	
	var _yearView2 = _interopRequireDefault(_yearView);
	
	var _util = __webpack_require__(10);
	
	var _util2 = _interopRequireDefault(_util);
	
	var Calendar = (function (_React$Component) {
	  _inherits(Calendar, _React$Component);
	
	  function Calendar(props, context) {
	    var _this = this;
	
	    _classCallCheck(this, Calendar);
	
	    _get(Object.getPrototypeOf(Calendar.prototype), 'constructor', this).call(this, props, context);
	
	    this.changeDate = function (e) {
	      //eslint-disable-line
	      _this.setState({ inputValue: e.target.value });
	    };
	
	    this.documentClick = function () {
	      if (!_this.state.isCalendar) {
	        _this.setVisibility(false);
	      }
	      _this.setState({ isCalendar: false });
	    };
	
	    this.inputBlur = function (e) {
	      var newDate = null;
	      var computableDate = null;
	      var date = _this.state.inputValue;
	      var format = _this.state.format;
	      var parsingFormat = _this.state.parsingFormat;
	
	      if (date) {
	        // format, with strict parsing true, so we catch bad dates
	        newDate = (0, _moment2['default'])(date, parsingFormat, true);
	        // if the new date didn't match our format, see if the native
	        // js date can parse it
	        if (!newDate.isValid() && !_this.props.strictDateParsing) {
	          var d = new Date(date);
	          // if native js cannot parse, just make a new date
	          if (isNaN(d.getTime())) {
	            d = new Date();
	          }
	          newDate = (0, _moment2['default'])(d);
	        }
	
	        computableDate = newDate.format(_this.state.computableFormat);
	      }
	
	      _this.setState({
	        date: newDate,
	        inputValue: newDate ? newDate.format(format) : null
	      });
	
	      if (_this.props.onChange) {
	        _this.props.onChange(computableDate);
	      }
	
	      if (_this.props.onBlur) {
	        _this.props.onBlur(e, computableDate);
	      }
	    };
	
	    this.keyDown = function (e) {
	      _util2['default'].keyDownActions.call(_this, e.keyCode);
	    };
	
	    this.nextView = function () {
	      if (_this.checkIfDateDisabled(_this.state.date)) return;
	      _this.setState({ currentView: ++_this.state.currentView });
	    };
	
	    this.prevView = function (date) {
	      var newDate = date;
	      if (_this.state.minDate && date.isBefore(_this.state.minDate, 'day')) {
	        newDate = _this.state.minDate.clone();
	      }
	
	      if (_this.state.maxDate && date.isAfter(_this.state.maxDate, 'day')) {
	        newDate = _this.state.maxDate.clone();
	      }
	
	      if (_this.state.currentView === _this.state.minView) {
	        _this.setState({
	          date: newDate,
	          inputValue: date.format(_this.state.format),
	          isVisible: false
	        });
	        if (_this.props.onChange) {
	          _this.props.onChange(date.format(_this.state.computableFormat));
	        }
	      } else {
	        _this.setState({
	          date: date,
	          currentView: --_this.state.currentView
	        });
	      }
	    };
	
	    this.setDate = function (date, isDayView) {
	      if (_this.checkIfDateDisabled(date)) return;
	
	      var calendarClosed = _this.props.closeOnSelect && isDayView;
	
	      _this.setState({
	        date: date,
	        isVisible: calendarClosed ? !_this.state.isVisible : _this.state.isVisible
	      });
	
	      if (calendarClosed && _this.props.onChangeAndBlur) {
	        _this.props.onChangeAndBlur(date.format(_this.state.computableFormat));
	      } else if (_this.props.onChange) {
	        _this.props.onChange(date.format(_this.state.computableFormat));
	      }
	    };
	
	    this.calendarClick = function () {
	      _this.setState({ isCalendar: true });
	    };
	
	    this.todayClick = function () {
	      var today = (0, _moment2['default'])().startOf('day');
	
	      if (_this.checkIfDateDisabled(today)) return;
	
	      _this.setState({
	        date: today,
	        currentView: _this.state.minView
	      });
	
	      if (_this.props.onChange) {
	        _this.props.onChange(today.format(_this.state.computableFormat));
	      }
	    };
	
	    this.toggleClick = function () {
	      _this.setState({ isCalendar: true });
	      _this.setVisibility();
	    };
	
	    var date = props.date ? (0, _moment2['default'])(_util2['default'].toDate(props.date)) : null;
	    var minDate = props.minDate ? (0, _moment2['default'])(_util2['default'].toDate(props.minDate)) : null;
	    var maxDate = props.maxDate ? (0, _moment2['default'])(_util2['default'].toDate(props.maxDate)) : null;
	    var format = props.format || 'MM-DD-YYYY';
	    var minView = parseInt(props.minView, 10) || 0;
	    var computableFormat = props.computableFormat || 'MM-DD-YYYY';
	    var strictDateParsing = props.strictDateParsing || false;
	    var parsingFormat = props.parsingFormat || format;
	
	    this.state = {
	      date: date,
	      minDate: minDate,
	      maxDate: maxDate,
	      format: format,
	      computableFormat: computableFormat,
	      inputValue: date ? date.format(format) : null,
	      views: ['days', 'months', 'years'],
	      minView: minView,
	      currentView: minView || 0,
	      isVisible: false,
	      strictDateParsing: strictDateParsing,
	      parsingFormat: parsingFormat
	    };
	  }
	
	  _createClass(Calendar, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      document.addEventListener('click', this.documentClick);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	
	      var date = nextProps.date ? (0, _moment2['default'])(_util2['default'].toDate(nextProps.date)) : null;
	      var inputValue = date && date.isValid() ? date.format(this.state.format) : nextProps.date;
	      this.setState({
	        date: date ? date : this.state.date,
	        inputValue: date ? inputValue : null
	      });
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      document.removeEventListener('click', this.documentClick);
	    }
	  }, {
	    key: 'checkIfDateDisabled',
	    value: function checkIfDateDisabled(date) {
	      return date && this.state.minDate && date.isBefore(this.state.minDate, 'day') || date && this.state.maxDate && date.isAfter(this.state.maxDate, 'day');
	    }
	  }, {
	    key: 'setVisibility',
	    value: function setVisibility(val) {
	      var value = val !== undefined ? val : !this.state.isVisible;
	      var eventMethod = value ? 'addEventListener' : 'removeEventListener';
	
	      document[eventMethod]('keydown', this.keyDown);
	
	      if (this.state.isVisible !== value && !this.props.disabled) {
	        this.setState({ isVisible: value });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      // its ok for this.state.date to be null, but we should never
	      // pass null for the date into the calendar pop up, as we want
	      // it to just start on todays date if there is no date set
	      var calendarDate = this.state.date && this.state.date.isValid() ? this.state.date : (0, _moment2['default'])();
	      var view = undefined;
	
	      switch (this.state.currentView) {
	        case 0:
	          view = _react2['default'].createElement(_dayView2['default'], {
	            date: calendarDate,
	            nextView: this.nextView,
	            maxDate: this.state.maxDate,
	            minDate: this.state.minDate,
	            setDate: this.setDate
	          });
	          break;
	        case 1:
	          view = _react2['default'].createElement(_monthView2['default'], {
	            date: calendarDate,
	            nextView: this.nextView,
	            maxDate: this.state.maxDate,
	            minDate: this.state.minDate,
	            prevView: this.prevView,
	            setDate: this.setDate
	          });
	          break;
	        case 2:
	          view = _react2['default'].createElement(_yearView2['default'], {
	            date: calendarDate,
	            maxDate: this.state.maxDate,
	            minDate: this.state.minDate,
	            prevView: this.prevView,
	            setDate: this.setDate
	          });
	          break;
	        default:
	          view = _react2['default'].createElement(_dayView2['default'], {
	            date: calendarDate,
	            nextView: this.nextView,
	            maxDate: this.state.maxDate,
	            minDate: this.state.minDate,
	            setDate: this.setDate
	          });
	      }
	
	      var todayText = this.props.todayText || (_moment2['default'].locale() === 'de' ? 'Heute' : 'Today');
	      var calendarClass = (0, _classnames2['default'])({
	        'input-calendar-wrapper': true,
	        'icon-hidden': this.props.hideIcon
	      });
	
	      var calendar = !this.state.isVisible ? '' : _react2['default'].createElement(
	        'div',
	        { className: calendarClass, onClick: this.calendarClick },
	        view,
	        _react2['default'].createElement(
	          'span',
	          {
	            className: 'today-btn' + (this.checkIfDateDisabled((0, _moment2['default'])().startOf('day')) ? ' disabled' : ''),
	            onClick: this.todayClick },
	          todayText
	        )
	      );
	
	      var readOnly = false;
	
	      if (this.props.hideTouchKeyboard) {
	        // do not break server side rendering:
	        try {
	          if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	            readOnly = true;
	          }
	        } catch (e) {
	          console.warn(e); //eslint-disable-line
	        }
	      }
	
	      var calendarIcon = undefined;
	      if (this.props.customIcon == null) {
	        // Do not show calendar icon if hideIcon is true
	        calendarIcon = this.props.hideIcon || this.props.disabled ? '' : _react2['default'].createElement(
	          'span',
	          { className: 'icon-wrapper calendar-icon', onClick: this.toggleClick },
	          _react2['default'].createElement(
	            'svg',
	            { width: '16', height: '16', viewBox: '0 0 16 16' },
	            _react2['default'].createElement('path', { d: 'M5 6h2v2h-2zM8 6h2v2h-2zM11 6h2v2h-2zM2 12h2v2h-2zM5 12h2v2h-2zM8 12h2v2h-2zM5 9h2v2h-2zM8 9h2v2h-2zM11 9h2v2h-2zM2 9h2v2h-2zM13 0v1h-2v-1h-7v1h-2v-1h-2v16h15v-16h-2zM14 15h-13v-11h13v11z'
	            })
	          )
	        );
	      } else {
	        calendarIcon = _react2['default'].createElement('span', {
	          className: (0, _classnames2['default'])('icon-wrapper', 'calendar-icon', this.props.customIcon),
	          onClick: this.toggleClick
	        });
	      }
	
	      var inputClass = this.props.inputFieldClass || 'input-calendar-field';
	
	      return _react2['default'].createElement(
	        'div',
	        { className: 'input-calendar' },
	        _react2['default'].createElement('input', {
	          name: this.props.inputName,
	          className: inputClass,
	          id: this.props.inputFieldId,
	          onBlur: this.inputBlur,
	          onChange: this.changeDate,
	          onFocus: this.props.openOnInputFocus ? this.toggleClick : '',
	          placeholder: this.props.placeholder,
	          readOnly: readOnly,
	          disabled: this.props.disabled,
	          type: 'text',
	          value: this.state.inputValue
	        }),
	        calendarIcon,
	        calendar
	      );
	    }
	  }]);
	
	  return Calendar;
	})(_react2['default'].Component);
	
	Calendar.propTypes = {
	  closeOnSelect: _react2['default'].PropTypes.bool,
	  computableFormat: _react2['default'].PropTypes.string,
	  strictDateParsing: _react2['default'].PropTypes.bool,
	  parsingFormat: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string)]),
	  date: _react2['default'].PropTypes.any,
	  minDate: _react2['default'].PropTypes.any,
	  maxDate: _react2['default'].PropTypes.any,
	  format: _react2['default'].PropTypes.string,
	  inputName: _react2['default'].PropTypes.string,
	  inputFieldId: _react2['default'].PropTypes.string,
	  inputFieldClass: _react2['default'].PropTypes.string,
	  minView: _react2['default'].PropTypes.number,
	  onBlur: _react2['default'].PropTypes.func,
	  onChange: _react2['default'].PropTypes.func,
	  onChangeAndBlur: _react2['default'].PropTypes.func,
	  openOnInputFocus: _react2['default'].PropTypes.bool,
	  placeholder: _react2['default'].PropTypes.string,
	  hideTouchKeyboard: _react2['default'].PropTypes.bool,
	  hideIcon: _react2['default'].PropTypes.bool,
	  customIcon: _react2['default'].PropTypes.string,
	  todayText: _react2['default'].PropTypes.string,
	  disabled: _react2['default'].PropTypes.bool
	};
	
	exports['default'] = Calendar;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	  if (true) {
	    // AMD. Register as an anonymous module unless amdModuleId is set
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (a0) {
	      return (root['DateRange'] = factory(a0));
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory(require("moment"));
	  } else {
	    root['DateRange'] = factory(moment);
	  }
	}(this, function (moment) {
	
	//-----------------------------------------------------------------------------
	// Contstants
	//-----------------------------------------------------------------------------
	
	
	
	var INTERVALS = {
	  year:   true,
	  month:  true,
	  week:   true,
	  day:    true,
	  hour:   true,
	  minute: true,
	  second: true
	};
	
	
	//-----------------------------------------------------------------------------
	// Date Ranges
	//-----------------------------------------------------------------------------
	
	/**
	 * DateRange class to store ranges and query dates.
	 *
	 * @constructor
	 * @param {(Moment|Date)} start Start of interval
	 * @param {(Moment|Date)} end End of interval
	 *//**
	 * DateRange class to store ranges and query dates.
	 *
	 * @constructor
	 * @param {!Array} range Array containing start and end dates.
	 *//**
	 * DateRange class to store ranges and query dates.
	 *
	 * @constructor
	 * @param {!String} range String formatted as an IS0 8601 time interval
	 */
	function DateRange(start, end) {
	  var parts;
	  var s = start;
	  var e = end;
	
	  if (arguments.length === 1 || end === undefined) {
	    if (typeof start === 'object' && start.length === 2) {
	      s = start[0];
	      e = start[1];
	    }
	    else if (typeof start === 'string') {
	      parts = start.split('/');
	      s = parts[0];
	      e = parts[1];
	    }
	  }
	
	  this.start = (s === null) ? moment(-8640000000000000) : moment(s);
	  this.end   = (e === null) ? moment(8640000000000000) : moment(e);
	}
	
	/**
	 * Constructor for prototype.
	 *
	 * @type {DateRange}
	 */
	DateRange.prototype.constructor = DateRange;
	
	/**
	 * Deep clone range.
	 *
	 * @return {!DateRange}
	 */
	DateRange.prototype.clone = function() {
	  return moment().range(this.start, this.end);
	};
	
	/**
	 * Determine if the current interval contains a given moment/date/range.
	 *
	 * @param {(Moment|Date|DateRange)} other Date to check
	 * @param {!boolean} exclusive True if the to value is exclusive
	 *
	 * @return {!boolean}
	 */
	DateRange.prototype.contains = function(other, exclusive) {
	  var start = this.start;
	  var end   = this.end;
	
	  if (other instanceof DateRange) {
	    return start <= other.start && (end > other.end || (end.isSame(other.end) && !exclusive));
	  }
	  else {
	    return start <= other && (end > other || (end.isSame(other) && !exclusive));
	  }
	};
	
	/**
	 * Determine if the current date range overlaps a given date range.
	 *
	 * @param {!DateRange} range Date range to check
	 *
	 * @return {!boolean}
	 */
	DateRange.prototype.overlaps = function(range) {
	  return this.intersect(range) !== null;
	};
	
	/**
	 * Determine the intersecting periods from one or more date ranges.
	 *
	 * @param {!DateRange} other A date range to intersect with this one
	 *
	 * @return {DateRange} Returns the intersecting date or `null` if the ranges do
	 *                     not intersect
	 */
	DateRange.prototype.intersect = function(other) {
	  var start = this.start;
	  var end   = this.end;
	
	  if ((start <= other.start) && (other.start < end) && (end < other.end)) {
	    return new DateRange(other.start, end);
	  }
	  else if ((other.start < start) && (start < other.end) && (other.end <= end)) {
	    return new DateRange(start, other.end);
	  }
	  else if ((other.start < start) && (start <= end) && (end < other.end)) {
	    return this;
	  }
	  else if ((start <= other.start) && (other.start <= other.end) && (other.end <= end)) {
	    return other;
	  }
	
	  return null;
	};
	
	/**
	 * Merge date ranges if they intersect.
	 *
	 * @param {!DateRange} other A date range to add to this one
	 *
	 * @return {DateRange} Returns the new `DateRange` or `null` if they do not
	 *                     overlap
	 */
	DateRange.prototype.add = function(other) {
	  if (this.overlaps(other)) {
	    return new DateRange(moment.min(this.start, other.start), moment.max(this.end, other.end));
	  }
	
	  return null;
	};
	
	/**
	 * Subtract one range from another.
	 *
	 * @param {!DateRange} other A date range to substract from this one
	 *
	 * @return {!Array<DateRange>}
	 */
	DateRange.prototype.subtract = function(other) {
	  var start = this.start;
	  var end   = this.end;
	
	  if (this.intersect(other) === null) {
	    return [this];
	  }
	  else if ((other.start <= start) && (start < end) && (end <= other.end)) {
	    return [];
	  }
	  else if ((other.start <= start) && (start < other.end) && (other.end < end)) {
	    return [new DateRange(other.end, end)];
	  }
	  else if ((start < other.start) && (other.start < end) && (end <= other.end)) {
	    return [new DateRange(start, other.start)];
	  }
	  else if ((start < other.start) && (other.start < other.end) && (other.end < end)) {
	    return [new DateRange(start, other.start), new DateRange(other.end, end)];
	  }
	  else if ((start < other.start) && (other.start < end) && (other.end < end)) {
	    return [new DateRange(start, other.start), new DateRange(other.start, end)];
	  }
	};
	
	/**
	 * Build a n array of dates.
	 *
	 * @param {(!DateRange|String)} range Date range to be used for iteration or
	 *                                    shorthand string (shorthands:
	 *                                    http://momentjs.com/docs/#/manipulating/add/)
	 * @param {!boolean} exclusive Indicate that the end of the range should not
	 *                             be included in the iter.
	 *
	 * @return {!Array}
	 */
	DateRange.prototype.toArray = function(by, exclusive) {
	  var acc = [];
	  this.by(by, function(unit) {
	    acc.push(unit);
	  }, exclusive);
	  return acc;
	};
	
	/**
	 * Iterate over the date range by a given date range, executing a function
	 * for each sub-range.
	 *
	 * @param {(!DateRange|String)} range Date range to be used for iteration or
	 *                                    shorthand string (shorthands:
	 *                                    http://momentjs.com/docs/#/manipulating/add/)
	 * @param {!DateRange~by} hollaback Callback
	 * @param {!boolean} exclusive Indicate that the end of the range should not
	 *                             be included in the iter.
	 *
	 * @return {DateRange} `this`
	 */
	DateRange.prototype.by = function(range, hollaback, exclusive) {
	  if (typeof range === 'string') {
	    _byString.call(this, range, hollaback, exclusive);
	  }
	  else {
	    _byRange.call(this, range, hollaback, exclusive);
	  }
	  return this;
	};
	
	
	/**
	 * Callback executed for each sub-range.
	 *
	 * @callback DateRange~by
	 *
	 * @param {!Moment} current Current moment object for iteration
	 */
	
	/**
	 * @private
	 */
	function _byString(interval, hollaback, exclusive) {
	  var current = moment(this.start);
	
	  while (this.contains(current, exclusive)) {
	    hollaback.call(this, current.clone());
	    current.add(1, interval);
	  }
	}
	
	/**
	 * @private
	 */
	function _byRange(interval, hollaback, exclusive) {
	  var div = this / interval;
	  var l = Math.floor(div);
	
	  if (l === Infinity) { return; }
	  if (l === div && exclusive) {
	    l--;
	  }
	
	  for (var i = 0; i <= l; i++) {
	    hollaback.call(this, moment(this.start.valueOf() + interval.valueOf() * i));
	  }
	}
	
	/**
	 * Date range formatted as an [ISO8601 Time
	 * Interval](http://en.wikipedia.org/wiki/ISO_8601#Time_intervals).
	 *
	 * @return {!String}
	 */
	DateRange.prototype.toString = function() {
	  return this.start.format() + '/' + this.end.format();
	};
	
	/**
	 * Date range in milliseconds. Allows basic coercion math of date ranges.
	 *
	 * @return {!number}
	 */
	DateRange.prototype.valueOf = function() {
	  return this.end - this.start;
	};
	
	/**
	 * Center date of the range.
	 *
	 * @return {!Moment}
	 */
	DateRange.prototype.center = function() {
	  var center = this.start + this.diff() / 2;
	  return moment(center);
	};
	
	/**
	 * Date range toDate
	 *
	 * @return {!Array<Date>}
	 */
	DateRange.prototype.toDate = function() {
	  return [this.start.toDate(), this.end.toDate()];
	};
	
	/**
	 * Determine if this date range is the same as another.
	 *
	 * @param {!DateRange} other Another date range to compare to
	 *
	 * @return {!boolean}
	 */
	DateRange.prototype.isSame = function(other) {
	  return this.start.isSame(other.start) && this.end.isSame(other.end);
	};
	
	/**
	 * The difference of the end vs start.
	 *
	 * @param {number} unit Unit of difference, if no unit is passed in
	 *                      milliseconds are returned. E.g.: `"days"`, `"months"`,
	 *                      etc...
	 *
	 * @return {!number}
	 */
	DateRange.prototype.diff = function(unit) {
	  return this.end.diff(this.start, unit);
	};
	
	
	//-----------------------------------------------------------------------------
	// Moment Extensions
	//-----------------------------------------------------------------------------
	
	/**
	 * Build a date range.
	 *
	 * @param {(Moment|Date)} start Start of range
	 * @param {(Moment|Date)} end End of range
	 *
	 * @this {Moment}
	 *
	 * @return {!DateRange}
	 */
	moment.range = function(start, end) {
	  if (start in INTERVALS) {
	    return new DateRange(moment(this).startOf(start), moment(this).endOf(start));
	  }
	  else {
	    return new DateRange(start, end);
	  }
	};
	
	/**
	 * Expose constructor
	 *
	 * @const
	 */
	moment.range.constructor = DateRange;
	
	/**
	 * @deprecated
	 */
	moment.fn.range = moment.range;
	
	/**
	 * Check if the current moment is within a given date range.
	 *
	 * @param {!DateRange} range Date range to check
	 *
	 * @this {Moment}
	 *
	 * @return {!boolean}
	 */
	moment.fn.within = function(range) {
	  return range.contains(this._d);
	};
	
	
	//-----------------------------------------------------------------------------
	// Export
	//-----------------------------------------------------------------------------
	
	
	
	return DateRange;
	
	}));


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _moment = __webpack_require__(3);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	__webpack_require__(4);
	
	var _cell = __webpack_require__(6);
	
	var _cell2 = _interopRequireDefault(_cell);
	
	var _viewHeader = __webpack_require__(7);
	
	var _viewHeader2 = _interopRequireDefault(_viewHeader);
	
	var DayView = (function (_React$Component) {
	  _inherits(DayView, _React$Component);
	
	  function DayView() {
	    var _this = this;
	
	    _classCallCheck(this, DayView);
	
	    _get(Object.getPrototypeOf(DayView.prototype), 'constructor', this).apply(this, arguments);
	
	    this.cellClick = function (e) {
	      var cell = e.target;
	      var date = parseInt(cell.innerHTML, 10);
	      var newDate = _this.props.date ? _this.props.date.clone() : (0, _moment2['default'])();
	
	      if (isNaN(date)) return;
	
	      if (cell.className.indexOf('prev') > -1) {
	        newDate.subtract(1, 'months');
	      } else if (cell.className.indexOf('next') > -1) {
	        newDate.add(1, 'months');
	      }
	
	      newDate.date(date);
	      _this.props.setDate(newDate, true);
	    };
	
	    this.next = function () {
	      var nextDate = _this.props.date.clone().add(1, 'months');
	      if (_this.props.maxDate && nextDate.isAfter(_this.props.maxDate, 'day')) {
	        nextDate = _this.props.maxDate;
	      }
	      _this.props.setDate(nextDate);
	    };
	
	    this.prev = function () {
	      var prevDate = _this.props.date.clone().subtract(1, 'months');
	      if (_this.props.minDate && prevDate.isBefore(_this.props.minDate, 'day')) {
	        prevDate = _this.props.minDate;
	      }
	      _this.props.setDate(prevDate);
	    };
	  }
	
	  _createClass(DayView, [{
	    key: 'getDays',
	    value: function getDays() {
	      var now = this.props.date ? this.props.date : (0, _moment2['default'])();
	      var start = now.clone().startOf('month').weekday(0);
	      var end = now.clone().endOf('month').weekday(6);
	      var minDate = this.props.minDate;
	      var maxDate = this.props.maxDate;
	      var month = now.month();
	      var today = (0, _moment2['default'])();
	      var currDay = now.date();
	      var year = now.year();
	      var days = [];
	
	      (0, _moment2['default'])().range(start, end).by('days', function (day) {
	        days.push({
	          label: day.format('D'),
	          prev: day.month() < month && !(day.year() > year) || day.year() < year,
	          next: day.month() > month || day.year() > year,
	          disabled: day.isBefore(minDate, 'day') || day.isAfter(maxDate, 'day'),
	          curr: day.date() === currDay && day.month() === month,
	          today: day.date() === today.date() && day.month() === today.month() && day.year() === today.year()
	        });
	      });
	      return days;
	    }
	  }, {
	    key: 'getDaysTitles',
	    value: function getDaysTitles() {
	      var now = (0, _moment2['default'])();
	      return [0, 1, 2, 3, 4, 5, 6].map(function (i) {
	        var weekday = now.weekday(i).format('dd');
	        return { val: weekday, label: weekday };
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var titles = this.getDaysTitles().map(function (item, i) {
	        return _react2['default'].createElement(_cell2['default'], { classes: 'day title', key: i, value: item.label });
	      });
	      var _class = undefined;
	
	      var days = this.getDays().map(function (item, i) {
	        _class = (0, _classnames2['default'])({
	          day: true,
	          next: item.next,
	          prev: item.prev,
	          disabled: item.disabled,
	          current: item.curr,
	          today: item.today
	        });
	        return _react2['default'].createElement(_cell2['default'], { classes: _class, key: i, value: item.label });
	      });
	
	      var currentDate = this.props.date ? this.props.date.format('MMMM') : (0, _moment2['default'])().format('MMMM');
	
	      return _react2['default'].createElement(
	        'div',
	        { className: 'view days-view', onKeyDown: this.keyDown },
	        _react2['default'].createElement(_viewHeader2['default'], {
	          data: currentDate,
	          next: this.next,
	          prev: this.prev,
	          titleAction: this.props.nextView }),
	        _react2['default'].createElement(
	          'div',
	          { className: 'days-title' },
	          titles
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'days', onClick: this.cellClick },
	          days
	        )
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      date: _react2['default'].PropTypes.object.isRequired,
	      minDate: _react2['default'].PropTypes.any,
	      maxDate: _react2['default'].PropTypes.any,
	      setDate: _react2['default'].PropTypes.func,
	      nextView: _react2['default'].PropTypes.func
	    },
	    enumerable: true
	  }]);
	
	  return DayView;
	})(_react2['default'].Component);
	
	exports['default'] = DayView;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = Cell;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(4);
	
	function Cell(_ref) {
	  var value = _ref.value;
	  var classes = _ref.classes;
	
	  var _classes = classes + ' cell';
	  return _react2['default'].createElement(
	    'div',
	    { className: _classes },
	    value
	  );
	}
	
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = ViewHeader;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function ViewHeader(_ref) {
	  var prev = _ref.prev;
	  var next = _ref.next;
	  var titleAction = _ref.titleAction;
	  var data = _ref.data;
	
	  return _react2["default"].createElement(
	    "div",
	    { className: "navigation-wrapper" },
	    _react2["default"].createElement(
	      "span",
	      { className: "icon", onClick: prev },
	      "<"
	    ),
	    _react2["default"].createElement(
	      "span",
	      { className: "navigation-title", onClick: titleAction },
	      data
	    ),
	    _react2["default"].createElement(
	      "span",
	      { className: "icon", onClick: next },
	      ">"
	    )
	  );
	}
	
	module.exports = exports["default"];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _moment = __webpack_require__(3);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	__webpack_require__(4);
	
	var _cell = __webpack_require__(6);
	
	var _cell2 = _interopRequireDefault(_cell);
	
	var _viewHeader = __webpack_require__(7);
	
	var _viewHeader2 = _interopRequireDefault(_viewHeader);
	
	var MonthView = (function (_React$Component) {
	  _inherits(MonthView, _React$Component);
	
	  function MonthView() {
	    var _this = this;
	
	    _classCallCheck(this, MonthView);
	
	    _get(Object.getPrototypeOf(MonthView.prototype), 'constructor', this).apply(this, arguments);
	
	    this.cellClick = function (e) {
	      var month = e.target.innerHTML;
	      if (_this.checkIfMonthDisabled(month)) return;
	
	      var date = _this.props.date.clone().month(month);
	      _this.props.prevView(date);
	    };
	
	    this.next = function () {
	      var nextDate = _this.props.date.clone().add(1, 'years');
	      if (_this.props.maxDate && nextDate.isAfter(_this.props.maxDate, 'day')) {
	        nextDate = _this.props.maxDate;
	      }
	      _this.props.setDate(nextDate);
	    };
	
	    this.prev = function () {
	      var prevDate = _this.props.date.clone().subtract(1, 'years');
	      if (_this.props.minDate && prevDate.isBefore(_this.props.minDate, 'day')) {
	        prevDate = _this.props.minDate;
	      }
	      _this.props.setDate(prevDate);
	    };
	  }
	
	  _createClass(MonthView, [{
	    key: 'checkIfMonthDisabled',
	    value: function checkIfMonthDisabled(month) {
	      var now = this.props.date;
	      return now.clone().month(month).endOf('month').isBefore(this.props.minDate, 'day') || now.clone().month(month).startOf('month').isAfter(this.props.maxDate, 'day');
	    }
	  }, {
	    key: 'getMonth',
	    value: function getMonth() {
	      var _this2 = this;
	
	      var month = this.props.date.month();
	      return _moment2['default'].monthsShort().map(function (item, i) {
	        return {
	          label: item,
	          disabled: _this2.checkIfMonthDisabled(i),
	          curr: i === month
	        };
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var currentDate = this.props.date.format('YYYY');
	      var months = this.getMonth().map(function (item, i) {
	        var _class = (0, _classnames2['default'])({
	          month: true,
	          disabled: item.disabled,
	          current: item.curr
	        });
	        return _react2['default'].createElement(_cell2['default'], { classes: _class, key: i, value: item.label });
	      });
	
	      return _react2['default'].createElement(
	        'div',
	        { className: 'months-view' },
	        _react2['default'].createElement(_viewHeader2['default'], { data: currentDate, next: this.next, prev: this.prev, titleAction: this.props.nextView }),
	        _react2['default'].createElement(
	          'div',
	          { className: 'months', onClick: this.cellClick },
	          months
	        )
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      date: _react2['default'].PropTypes.object.isRequired,
	      minDate: _react2['default'].PropTypes.any,
	      maxDate: _react2['default'].PropTypes.any
	    },
	    enumerable: true
	  }]);
	
	  return MonthView;
	})(_react2['default'].Component);
	
	exports['default'] = MonthView;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _moment = __webpack_require__(3);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	__webpack_require__(4);
	
	var _cell = __webpack_require__(6);
	
	var _cell2 = _interopRequireDefault(_cell);
	
	var _viewHeader = __webpack_require__(7);
	
	var _viewHeader2 = _interopRequireDefault(_viewHeader);
	
	var YearsView = (function (_React$Component) {
	  _inherits(YearsView, _React$Component);
	
	  function YearsView() {
	    var _this = this;
	
	    _classCallCheck(this, YearsView);
	
	    _get(Object.getPrototypeOf(YearsView.prototype), 'constructor', this).apply(this, arguments);
	
	    this.state = { years: [] };
	
	    this.cellClick = function (e) {
	      var year = parseInt(e.target.innerHTML, 10);
	      var date = _this.props.date.clone().year(year);
	      if (_this.checkIfYearDisabled(date)) return;
	      _this.props.prevView(date);
	    };
	
	    this.next = function () {
	      var nextDate = _this.props.date.clone().add(10, 'years');
	      if (_this.props.maxDate && nextDate.isAfter(_this.props.maxDate, 'day')) {
	        nextDate = _this.props.maxDate;
	      }
	      _this.props.setDate(nextDate);
	    };
	
	    this.prev = function () {
	      var prevDate = _this.props.date.clone().subtract(10, 'years');
	      if (_this.props.minDate && prevDate.isBefore(_this.props.minDate, 'day')) {
	        prevDate = _this.props.minDate;
	      }
	      _this.props.setDate(prevDate);
	    };
	
	    this.rangeCheck = function (currYear) {
	      var years = _this.state.years;
	
	      if (years.length == 0) {
	        return false;
	      }
	      return years[0].label <= currYear && years[years.length - 1].label >= currYear;
	    };
	  }
	
	  _createClass(YearsView, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.getYears();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps() {
	      this.getYears();
	    }
	  }, {
	    key: 'checkIfYearDisabled',
	    value: function checkIfYearDisabled(year) {
	      return year.clone().endOf('year').isBefore(this.props.minDate, 'day') || year.clone().startOf('year').isAfter(this.props.maxDate, 'day');
	    }
	  }, {
	    key: 'getYears',
	    value: function getYears() {
	      var _this2 = this;
	
	      var now = this.props.date;
	      var start = now.clone().subtract(5, 'year');
	      var end = now.clone().add(6, 'year');
	      var currYear = now.year();
	      var items = [];
	      var inRange = this.rangeCheck(currYear);
	
	      var years = this.state.years;
	
	      if (years.length > 0 && inRange) {
	        return years;
	      }
	
	      (0, _moment2['default'])().range(start, end).by('years', function (year) {
	        items.push({
	          label: year.format('YYYY'),
	          disabled: _this2.checkIfYearDisabled(year),
	          curr: currYear === year.year()
	        });
	      });
	
	      this.setState({ years: items });
	
	      return items;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var years = this.state.years;
	      var currYear = this.props.date.year();
	      var _class = undefined;
	
	      var yearsCells = years.map(function (item, i) {
	        _class = (0, _classnames2['default'])({
	          year: true,
	          disabled: item.disabled,
	          current: item.label == currYear
	        });
	        return _react2['default'].createElement(_cell2['default'], { value: item.label, classes: _class, key: i });
	      });
	      var currentDate = [years[0].label, years[years.length - 1].label].join('-');
	      return _react2['default'].createElement(
	        'div',
	        { className: 'years-view' },
	        _react2['default'].createElement(_viewHeader2['default'], { data: currentDate, next: this.next, prev: this.prev }),
	        _react2['default'].createElement(
	          'div',
	          { className: 'years', onClick: this.cellClick },
	          yearsCells
	        )
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      date: _react2['default'].PropTypes.object,
	      minDate: _react2['default'].PropTypes.any,
	      maxDate: _react2['default'].PropTypes.any,
	      changeView: _react2['default'].PropTypes.func
	    },
	    enumerable: true
	  }]);
	
	  return YearsView;
	})(_react2['default'].Component);
	
	exports['default'] = YearsView;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var _keyDownViewHelper = [{
	  prev: false,
	  next: true,
	  exit: true,
	  unit: 'day',
	  upDown: 7
	}, {
	  prev: true,
	  next: true,
	  unit: 'months',
	  upDown: 3
	}, {
	  prev: true,
	  next: false,
	  unit: 'years',
	  upDown: 3
	}];
	
	var KEYS = {
	  backspace: 8,
	  enter: 13,
	  esc: 27,
	  left: 37,
	  up: 38,
	  right: 39,
	  down: 40
	};
	
	exports['default'] = {
	  toDate: function toDate(date) {
	    return date instanceof Date ? date : new Date(date);
	  },
	
	  keyDownActions: function keyDownActions(code) {
	    var _viewHelper = _keyDownViewHelper[this.state.currentView];
	    var unit = _viewHelper.unit;
	
	    switch (code) {
	      case KEYS.left:
	        this.setDate(this.state.date.subtract(1, unit));
	        break;
	      case KEYS.right:
	        this.setDate(this.state.date.add(1, unit));
	        break;
	      case KEYS.up:
	        this.setDate(this.state.date.subtract(_viewHelper.upDown, unit));
	        break;
	      case KEYS.down:
	        this.setDate(this.state.date.add(_viewHelper.upDown, unit));
	        break;
	      case KEYS.enter:
	        if (_viewHelper.prev) {
	          this.prevView(this.state.date);
	        }
	        if (_viewHelper.exit) {
	          this.setState({ isVisible: false });
	        }
	        break;
	      case KEYS.esc:
	        this.setState({ isVisible: false });
	        break;
	      default:
	        break;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-input-calendar.js.map