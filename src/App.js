import { lazy, Suspense } from 'react';
import './App.css';
import  Carrito  from './components/Carrito.js';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ShowServerConfig } from './components/ShowServerConfig';

const Contador = lazy(()=> import('./components/Contador'));

function App() {
  return (
    <div >
      <Suspense fallback="Loading">
      <ErrorBoundary>
          <Contador/>
        </ErrorBoundary>
      </Suspense>
      <ShowServerConfig config={{minConnections:1, maxConnections:10, restartAlways:true}} environment="live"/>
      <Carrito />
    </div>
  );
}

export default App;
