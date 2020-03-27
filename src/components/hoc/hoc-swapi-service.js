import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context';

const hocSwapiServiceContext = (Comp) => (props) => {
    return (
      <SwapiServiceConsumer>
        {
          (value) => <Comp {...props} value={value} />
        }
      </SwapiServiceConsumer>
    )
  }

export default hocSwapiServiceContext;
