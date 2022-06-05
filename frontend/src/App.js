import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import AuthPage from './pages/Auth';
import EventsPage from './pages/Events';
import BookingsPage from './pages/Bookings';
import MainNavigation from './components/Navigation/MainNavigation';


function App() {

  
    
    return (
      <BrowserRouter>
        <MainNavigation />
        <main>
        <Routes>
          <Route path="/" >
            <Route index element={<AuthPage />} />
            <Route path="events" element={<EventsPage />} />
            <Route path="bookings" element={<BookingsPage />} />
      </Route>
        </Routes>
        </main>
      </BrowserRouter>
    ); 
  }

export default App;
