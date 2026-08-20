import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ServiceCatalogue from './Service/ServiceCatalogue.jsx';
import ServiceManagement from './Service/ServiceManagement.jsx';

function App() {
  return (
      <BrowserRouter>
        <Routes>

          {/* Customer Service Catalogue */}
          <Route path="/services" element={<ServiceCatalogue />} />

          {/* Admin Service Management */}
          <Route
              path="/service-management"
              element={<ServiceManagement />}
          />

        </Routes>
      </BrowserRouter>
  );
}

export default App;