// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import { Button } from '@ui/index';
import { TestComponent } from './test-component';

export function App() {
  return (
    <div>
      <div className="bg-indigo-500 text-white p-4 rounded">
        <span className="text-2xl font-medium">Tailwind works from libs/ui 🎉</span>
      </div>
      <Button>Button</Button>
      <TestComponent />
      {/* <NxWelcome title="kanban-react-client" /> */}

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
