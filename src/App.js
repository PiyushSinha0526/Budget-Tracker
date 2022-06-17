import './App.css';
import Form from './components/Form/Form';
import List from './components/List/List';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App container my-8 mx-auto  px-4 w-96">
      <Main/>
      <Form/>
      <List/>
    </div>
  );
}

export default App;
