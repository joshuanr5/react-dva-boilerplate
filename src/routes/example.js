import React from 'react';
import { connect } from 'dva';
import Example from '../components/example';

export default connect()(() => {
  return (
    <Example />
  );
})
