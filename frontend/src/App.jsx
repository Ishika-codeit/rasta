import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import PrivateRoute from './components/PrivateRoute';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ChatPage from './pages/ChatPage';
import DashboardPage from './pages/DashboardPage';
import VerifyPage from './pages/VerifyPage';
import SchemeDirectoryPage from './pages/SchemeDirectoryPage';
import SchemeDetailsPage from './pages/SchemeDetailsPage';
import DocumentLockerPage from './pages/DocumentLockerPage';
import ApplicationsPage from './pages/ApplicationsPage';

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Protected Routes */}
            <Route element={<PrivateRoute />}>
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/verify" element={<VerifyPage />} />
              <Route path="/schemes" element={<SchemeDirectoryPage />} />
              <Route path="/schemes/:id" element={<SchemeDetailsPage />} />
              <Route path="/locker" element={<DocumentLockerPage />} />
              <Route path="/applications" element={<ApplicationsPage />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;
