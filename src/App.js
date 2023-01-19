import { Container } from 'react-bootstrap';
import Expense from './components/Expense';
import MainTemplate from './MainTempalte';
import { store } from './store/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="App">
    <Provider store={store}>
        <Container>
          <MainTemplate/>
        </Container>
     </Provider>,
    </div>
  );
}

export default App;
