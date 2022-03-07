import './App.css';
import LoginScreen from './components/LoginScreen';
import NotesScreen from './components/NotesScreen';

function App() {
  return (
    false ? <NotesScreen /> : <LoginScreen />
  );
}

export default App;