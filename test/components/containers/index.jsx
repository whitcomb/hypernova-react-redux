import Counter from '../components/counter';
import { incrementCounter, decrementCounter } from '../actions';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return { count: state.count };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement() { return dispatch(incrementCounter()); },
    onDecrement() { return dispatch(decrementCounter()); },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
