import { renderReactRedux } from '../../';
import ConnectedComponent from './Containers/CounterApp';
import configureStore from './Store/Counter/ConfigureStore';

export default renderReactRedux(
  'CounterApp',
  ConnectedComponent,
  configureStore
);
