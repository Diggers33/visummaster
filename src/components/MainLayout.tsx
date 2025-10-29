import { useState } from 'react';
import { LayoutDashboard, Users, Library, CreditCard, FileText, User, Cpu, Beaker, TrendingUp, Database, Settings, HelpCircle, Search, LogOut, Shield } from 'lucide-react';
import type { Page } from '../App';
import irisLogo from 'figma:asset/b4b5fb44d3420665dc9e7f2c2e7ca37c8e9e3b40.png';
import { NotificationCenter } from './NotificationCenter';
import { VisumLogo } from './EnhancedLogo';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface MainLayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function MainLayout({ children, currentPage, onNavigate }: MainLayoutProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  
  const menuItems = [
    { id: 'dashboard' as Page, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'clients' as Page, label: 'Clients', icon: Users },
    { id: 'library' as Page, label: 'Library', icon: Library },
    { id: 'payments' as Page, label: 'Billing & Payments', icon: CreditCard },
    { id: 'users' as Page, label: 'Users', icon: User },
    { id: 'devices' as Page, label: 'Devices', icon: Cpu },
    { id: 'chemometrics' as Page, label: 'Chemometrics', icon: Beaker },
    { id: 'marketing' as Page, label: 'Marketing', icon: TrendingUp },
    { id: 'repository' as Page, label: 'Repository', icon: Database },
    { id: 'audit-log' as Page, label: 'Audit Log', icon: Shield },
    { id: 'visum-master' as Page, label: 'My Visum Master', icon: Settings },
    { id: 'support' as Page, label: 'Support', icon: HelpCircle },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200 bg-gradient-to-b from-white to-gray-50/50">
          <VisumLogo variant="compact" />
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center gap-3 px-6 py-3 transition-colors ${
                  isActive
                    ? 'text-cyan-600 bg-cyan-50 border-l-4 border-cyan-600'
                    : 'text-gray-600 hover:bg-gray-50 border-l-4 border-transparent'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* IRIS Logo */}
        <div className="p-6 border-t border-gray-200">
          <img src={irisLogo} alt="IRIS Technology Solutions" className="h-6 opacity-60" />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search clients, models, devices... (Ctrl+K)"
                className="pl-10 bg-gray-50"
                onFocus={() => setSearchOpen(true)}
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Compliance Indicator */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-xs text-green-700">GMP Compliant</span>
            </div>
            
            {/* Notifications */}
            <NotificationCenter />
            
            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-sm">
                    AD
                  </div>
                  <div className="text-left hidden md:block">
                    <div className="text-sm text-gray-900">Admin User</div>
                    <div className="text-xs text-gray-500">admin@iris.com</div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="w-4 h-4 mr-2" />
                  Profile Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onNavigate('support')}>
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Help & Support
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-8 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}
