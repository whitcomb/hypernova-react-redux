import FizzBuzzComponent from '../../Components/FizzBuzz';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return { count: state.count };
}

export default connect(mapStateToProps)(FizzBuzzComponent);
