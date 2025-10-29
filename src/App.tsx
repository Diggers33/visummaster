import { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { MainLayout } from './components/MainLayout';
import { ImprovedDashboard } from './components/ImprovedDashboard';
import { ClientsTable } from './components/ClientsTable';
import { ClientsGrid } from './components/ClientsGrid';
import { ClientDetail } from './components/ClientDetail';
import { ImprovedChemometrics } from './components/ImprovedChemometrics';
import { Marketing } from './components/Marketing';
import { Library } from './components/Library';
import { Repository } from './components/Repository';
import { AuditLog } from './components/AuditLog';

export type Page = 'dashboard' | 'clients' | 'clients-grid' | 'client-detail' | 'library' | 'payments' | 'subscriptions' | 'users' | 'devices' | 'chemometrics' | 'marketing' | 'repository' | 'audit-log' | 'visum-master' | 'support';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [clientsView, setClientsView] = useState<'table' | 'grid'>('table');
  const [selectedClientId, setSelectedClientId] = useState<number | null>(null);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  const handleClientsViewChange = (view: 'table' | 'grid') => {
    setClientsView(view);
  };

  const handleClientClick = (clientId: number) => {
    setSelectedClientId(clientId);
    setCurrentPage('client-detail');
  };

  const handleBackToClients = () => {
    setSelectedClientId(null);
    setCurrentPage('clients');
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <ImprovedDashboard />;
      case 'clients':
        return clientsView === 'table' 
          ? <ClientsTable onViewChange={handleClientsViewChange} onClientClick={handleClientClick} />
          : <ClientsGrid onViewChange={handleClientsViewChange} onClientClick={handleClientClick} />;
      case 'client-detail':
        return <ClientDetail onBack={handleBackToClients} />;
      case 'library':
        return <Library />;
      case 'chemometrics':
        return <ImprovedChemometrics />;
      case 'marketing':
        return <Marketing />;
      case 'repository':
        return <Repository />;
      case 'audit-log':
        return <AuditLog />;
      default:
        return (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <h2 className="text-gray-600 mb-2">Coming Soon</h2>
              <p className="text-gray-500">This page is under construction</p>
            </div>
          </div>
        );
    }
  };

  return (
    <MainLayout currentPage={currentPage} onNavigate={handleNavigate}>
      {renderPage()}
    </MainLayout>
  );
}
