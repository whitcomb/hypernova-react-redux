"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = _interopRequire(require("react"));

var ReactDOM = _interopRequire(require("react-dom"));

var ReactDOMServer = _interopRequire(require("react-dom/server"));

var Provider = require("react-redux").Provider;

var _hypernova = require("hypernova");

var hypernova = _interopRequire(_hypernova);

var serialize = _hypernova.serialize;
var load = _hypernova.load;

function buildProvider(connectedComponent, store) {
  return React.createElement(
    Provider,
    { store: store },
    React.isValidElement(connectedComponent) ? connectedComponent : React.createElement(connectedComponent)
  );
}

var renderReactRedux = function (name, connectedComponent, configureStore) {
  return hypernova({
    server: function server() {
      return function (props) {
        var provider = buildProvider(connectedComponent, configureStore(props));
        var contents = ReactDOMServer.renderToString(provider);
        return serialize(name, contents, props);
      };
    },

    client: function client() {
      var payloads = load(name);
      if (payloads) {
        payloads.forEach(function (payload) {
          var node = payload.node;
          var data = payload.data;

          var provider = buildProvider(connectedComponent, configureStore(data));
          ReactDOM.render(provider, node);
        });
      }
      return connectedComponent;
    }
  });
};
exports.renderReactRedux = renderReactRedux;