import React from 'react';
import { Provider } from 'react-redux';
import { Container } from "@material-ui/core";
import { store } from "./redux/store";
import Example from "./components/Example";

const App: React.FC = () => {
  return (
        <Provider store={store}>
          <Container>
            <Example />
          </Container>
        </Provider>
  );
};

export default App;
