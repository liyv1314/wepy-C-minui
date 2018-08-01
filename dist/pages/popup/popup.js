'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Popup = function (_wepy$page) {
  _inherits(Popup, _wepy$page);

  function Popup() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Popup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Popup.__proto__ || Object.getPrototypeOf(Popup)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'popup',
      usingComponents: {
        'wxc-popup': '../../packages/@minui/wxc-popup/dist/index'
      }
    }, _this.methods = {
      showpopup: function showpopup(index) {
        var popupComponent = this.$wxpage.selectComponent('.wxc-popup' + index);
        popupComponent && popupComponent.show();
      },
      onCancel: function onCancel(index) {
        var popupComponent = this.$wxpage.selectComponent('.wxc-popup' + index);
        popupComponent && popupComponent.hide();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Popup, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('onLoad');
    }
  }]);

  return Popup;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Popup , 'pages/popup/popup'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVwLmpzIl0sIm5hbWVzIjpbIlBvcHVwIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsIm1ldGhvZHMiLCJzaG93cG9wdXAiLCJpbmRleCIsInBvcHVwQ29tcG9uZW50IiwiJHd4cGFnZSIsInNlbGVjdENvbXBvbmVudCIsInNob3ciLCJvbkNhbmNlbCIsImhpZGUiLCJjb25zb2xlIiwibG9nIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixPQURqQjtBQUVQQyx1QkFBaUI7QUFDZixxQkFBYTtBQURFO0FBRlYsSyxRQU1UQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDRUMsS0FERixFQUNTO0FBQ2YsWUFBSUMsaUJBQWlCLEtBQUtDLE9BQUwsQ0FBYUMsZUFBYixDQUE2QixlQUFlSCxLQUE1QyxDQUFyQjtBQUNBQywwQkFBa0JBLGVBQWVHLElBQWYsRUFBbEI7QUFDRCxPQUpPO0FBS1JDLGNBTFEsb0JBS0NMLEtBTEQsRUFLUTtBQUNkLFlBQUlDLGlCQUFpQixLQUFLQyxPQUFMLENBQWFDLGVBQWIsQ0FBNkIsZUFBZUgsS0FBNUMsQ0FBckI7QUFDQUMsMEJBQWtCQSxlQUFlSyxJQUFmLEVBQWxCO0FBQ0Q7QUFSTyxLOzs7Ozs2QkFVRDtBQUNQQyxjQUFRQyxHQUFSLENBQVksUUFBWjtBQUNEOzs7O0VBbkJnQ0MsZUFBS0MsSTs7a0JBQW5CaEIsSyIsImZpbGUiOiJwb3B1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAncG9wdXAnLFxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICd3eGMtcG9wdXAnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1wb3B1cC9kaXN0L2luZGV4JyxcbiAgICAgIH1cbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHNob3dwb3B1cChpbmRleCkge1xuICAgICAgICBsZXQgcG9wdXBDb21wb25lbnQgPSB0aGlzLiR3eHBhZ2Uuc2VsZWN0Q29tcG9uZW50KCcud3hjLXBvcHVwJyArIGluZGV4KTtcbiAgICAgICAgcG9wdXBDb21wb25lbnQgJiYgcG9wdXBDb21wb25lbnQuc2hvdygpO1xuICAgICAgfSxcbiAgICAgIG9uQ2FuY2VsKGluZGV4KSB7XG4gICAgICAgIGxldCBwb3B1cENvbXBvbmVudCA9IHRoaXMuJHd4cGFnZS5zZWxlY3RDb21wb25lbnQoJy53eGMtcG9wdXAnICsgaW5kZXgpO1xuICAgICAgICBwb3B1cENvbXBvbmVudCAmJiBwb3B1cENvbXBvbmVudC5oaWRlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdvbkxvYWQnKVxuICAgIH1cbiAgfVxuXG4iXX0=