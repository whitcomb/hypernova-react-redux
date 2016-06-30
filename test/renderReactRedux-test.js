import ExampleReactReduxComponent from './components/Containers/CounterApp';
import exampleConfigureStore from './components/Store/Counter/ConfigureStore';

import jsdom from 'jsdom';
import { assert } from 'chai';
import { renderReactRedux } from '..';

describe('renderReactRedux', () => {
  let result;
  beforeEach(() => {
    result = renderReactRedux(
      'ExampleReactReduxComponent',
      ExampleReactReduxComponent,
      exampleConfigureStore
    )({ count: 12 });
  });

  it('exists', () => {
    assert.isFunction(renderReactRedux);
    assert.equal(renderReactRedux.length, 3);
  });

  it('has correct markup on server', () => {
    assert.isString(result);
    assert.match(result, /Count: .*?12/);
  });

  it('calls hypernova.client', (done) => {
    jsdom.env(result, (err, window) => {
      if (err) {
        done(err);
        return;
      }

      global.window = window;
      global.document = window.document;

      // Calling it again for the client.
      renderReactRedux(
        'ExampleReactReduxComponent',
        ExampleReactReduxComponent,
        exampleConfigureStore
      );

      assert.match(document.querySelector('p').textContent, /Count: 12/);
      document.querySelector('button').click(); // click +1 button
      assert.match(document.querySelector('p').textContent, /Count: 13/);

      delete global.window;
      delete global.document;

      done();
    });
  });
});
