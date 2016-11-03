import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import hypernova, { serialize, load } from 'hypernova';

function buildProvider(connectedComponent, store) {
  return (
    <Provider store={store}>
      {
        React.isValidElement(connectedComponent)
          ? connectedComponent
          : React.createElement(connectedComponent)
      }
    </Provider>
  );
}

export const renderReactRedux =
  (name, connectedComponent, configureStore) => hypernova({
    server() {
      return (props) => {
        const provider = buildProvider(connectedComponent, configureStore(props));
        const contents = ReactDOMServer.renderToString(provider);
        return serialize(name, contents, props);
      };
    },

    client() {
      const payloads = load(name);
      if (payloads) {
        payloads.forEach((payload) => {
          const { node, data } = payload;
          const provider = buildProvider(connectedComponent, configureStore(data));
          ReactDOM.render(provider, node);
        });
      }
      return connectedComponent;
    }
  });
