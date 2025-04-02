import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='m-md-3 m-1'>

      <App />
    </div>
  </StrictMode>,
)
