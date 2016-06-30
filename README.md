# hypernova-react-redux

> [React](https://github.com/facebook/react)/[Redux](https://github.com/reactjs/redux) ([react-redux](https://github.com/reactjs/react-redux)) bindings for [Hypernova](https://github.com/airbnb/hypernova).

[![NPM version](https://img.shields.io/npm/v/hypernova-react-redux.svg?style=flat-square)](https://badge.fury.io/js/hypernova-react-redux)
[![Build Status](https://img.shields.io/travis/noriaki/hypernova-react-redux.svg?style=flat-square)](https://travis-ci.org/noriaki/hypernova-react-redux)
[![PeerDependency Status](https://img.shields.io/david/peer/noriaki/hypernova-react-redux.svg?style=flat-square)](https://david-dm.org/noriaki/hypernova-react-redux)
[![DevDependency Status](https://img.shields.io/david/dev/noriaki/hypernova-react-redux.svg?style=flat-square)](https://david-dm.org/noriaki/hypernova-react-redux)

On the server, wraps the redux connected component in a function to render it to a HTML string given its props.

On the client, calling this function with your component scans the DOM for any server-side rendered instances of it. It then resumes those components using the server-specified props.

## Install

```sh
npm install hypernova-react-redux
```

## Usage

Here's how use use it in your module:

```js
import { renderReactRedux } from 'hypernova-react-redux';
import MyConnectedComponent from './src/MyConnectedComponent.jsx';
import myConfigureStore from './src/MyStore/ConfigureStore.jsx';

export default renderReactRedux(
  'MyConnectedComponent.hypernova.js', // this file's name (or really any unique name)
  MyConnectedComponent,
  myConfigureStore
);
```

## Todo

- [ ] To handle the multiple of the connected components

## Contribution

1. Fork it ( http://github.com/noriaki/hypernova-react-redux/fork )
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

## Licence

[MIT](https://github.com/noriaki/hypernova-react-redux/blob/master/LICENCE)

## Author

[noriaki](https://github.com/noriaki)
