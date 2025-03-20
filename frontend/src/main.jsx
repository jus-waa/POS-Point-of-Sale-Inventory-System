import { StrictMode } from 'react'; //enables extra checks and warnings in development
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './routes/App.jsx';
import HomePage from './routes/HomePage.jsx';
import UpdatePage from './routes/UpdatePage.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products/:id/update" element={<UpdatePage />}/>
            </Routes>
        </Router>
    </StrictMode>
);