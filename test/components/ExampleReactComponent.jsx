import React from 'react';

function ExampleReactComponent(props) {
  const name = ['Hello', props.name];
  return <div id="example">{name.join(' ')}</div>;
}

ExampleReactComponent.propTypes = {
  name: React.PropTypes.string,
};

export default ExampleReactComponent;
