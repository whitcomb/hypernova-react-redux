import ExampleReactReduxComponent from './components/Containers/CounterApp';
import ExampleReactReduxComponent2 from './components/Containers/FizzBuzzApp';
import exampleConfigureStore from './components/Store/Counter/ConfigureStore';

import React from 'react';
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

describe('renderReactRedux with multiple components', () => {
  let result;
  beforeEach(() => {
    result = renderReactRedux(
      'ExampleReactReduxComponent',
      <div>
        <ExampleReactReduxComponent />
        <ExampleReactReduxComponent2 />
      </div>,
      exampleConfigureStore
    )({ count: 12 });
  });

  it('has correct markup on server', () => {
    assert.isString(result);
    assert.match(result, /Count: .*?12/);
    assert.match(result, /Fizz/);
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
        <div>
          <ExampleReactReduxComponent />
          <ExampleReactReduxComponent2 />
        </div>,
        exampleConfigureStore
      );

      const initialElems = document.querySelectorAll('p');
      assert.match(initialElems[0].textContent, /Count: 12/);
      assert.match(initialElems[1].textContent, /Fizz/);

      document.querySelector('button').click();  // click +1 button

      const middleElems = document.querySelectorAll('p');
      assert.match(middleElems[0].textContent, /Count: 13/);
      assert.match(middleElems[1].textContent, /13/);

      document.querySelector('button').click();
      document.querySelector('button').click();

      const afterElems = document.querySelectorAll('p');
      assert.match(afterElems[0].textContent, /Count: 15/);
      assert.match(afterElems[1].textContent, /FizzBuzz/);

      delete global.window;
      delete global.document;

      done();
    });
  });
});
