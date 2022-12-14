import { CreateAuth } from 'Hooks/useAuth/use_auth';
import './App.css';
import PagesRoutes from './Routes/routes';

function App() {
  return (
    <CreateAuth>
      <PagesRoutes />
    </CreateAuth>
  );
}

export default App;
