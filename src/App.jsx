import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignIn from "./components/SignIn";
import Home from "./pages/Home";
import Towns from "./pages/Towns";
import Receipt from "./pages/Receipt";
import Navbar from "./components/Navbar"; // Import the Navbar component
import Footer from "./components/footer"; // Import the Footer component

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? (
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <div className="flex-grow">{children}</div>
        {/* Footer */}
        <Footer />
      </div>
    ) : (
      <Navigate to="/" />
    );
  };

  return (
    <Router>
      <Routes>
        {/* Public route */}
        <Route
          path="/"
          element={<SignIn setIsAuthenticated={setIsAuthenticated} />}
        />
        {/* Protected routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/towns"
          element={
            <ProtectedRoute>
              <Towns />
            </ProtectedRoute>
          }
        />
        <Route
          path="/receipt"
          element={
            <ProtectedRoute>
              <Receipt />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
