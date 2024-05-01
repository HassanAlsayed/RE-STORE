  import ReactDOM from 'react-dom/client'
  import './index.css'
  import '@fontsource/roboto/300.css';
  import '@fontsource/roboto/400.css';
  import '@fontsource/roboto/500.css';
  import '@fontsource/roboto/700.css';
  import { RouterProvider } from 'react-router-dom';
  import Router from './router/Router';
  import AppProvider from './Context/AppProvider';


  ReactDOM.createRoot(document.getElementById('root')).render(
    
    <AppProvider>
      <RouterProvider router={Router} />
    </AppProvider>
    
  )
