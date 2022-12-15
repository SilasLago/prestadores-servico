import { CreateAuth } from 'Hooks/useAuth/use_auth';
import { CreateDesapear } from 'Hooks/useDesapear/useDesapear';
import './App.css';
import PagesRoutes from './Routes/routes';

function App() {
  return (
    <CreateAuth>
      <CreateDesapear>
        <PagesRoutes />
      </CreateDesapear>
    </CreateAuth>
  );
}

export default App;
