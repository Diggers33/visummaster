import { useState } from 'react';
import { Users, Plus, Search, Filter, Download, MoreVertical, Edit, Trash2, Shield, Mail, Phone, Calendar, Clock, CheckCircle2, XCircle, AlertCircle, User, Building2, Key, Activity, FileText, Lock, Unlock } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from './ui/dropdown-menu';
import { Avatar, AvatarFallback } from './ui/avatar';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Import VisumMaster logo
import visumMasterLogo from 'figma:asset/cdb43182cb144d4675600df51482a2a0beff7076.png';

interface UserData {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'operator' | 'viewer';
  status: 'active' | 'inactive' | 'pending';
  client: string;
  department: string;
  phone: string;
  lastLogin: string;
  createdAt: string;
  mfaEnabled: boolean;
  gmpCertified: boolean;
  certificationExpiry?: string;
  loginCount: number;
  devicesAccess: number;
}

interface UserDetailProps {
  user: UserData;
  onBack: () => void;
}

export function UsersManagement() {
  const [view, setView] = useState<'list' | 'detail'>('list');
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRole, setFilterRole] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  // Mock data
  const users: UserData[] = [
    {
      id: '1',
      name: 'Thiago Souza',
      email: 'thiago.souza@europastry.com',
      role: 'admin',
      status: 'active',
      client: 'Europastry',
      department: 'Quality Control',
      phone: '+351 21 234 5678',
      lastLogin: '2 hours ago',
      createdAt: 'Jan 15, 2024',
      mfaEnabled: true,
      gmpCertified: true,
      certificationExpiry: 'Dec 31, 2024',
      loginCount: 342,
      devicesAccess: 4
    },
    {
      id: '2',
      name: 'Maria Silva',
      email: 'm.silva@europastry.com',
      role: 'manager',
      status: 'active',
      client: 'Europastry',
      department: 'Production',
      phone: '+351 21 234 5679',
      lastLogin: '5 hours ago',
      createdAt: 'Jan 20, 2024',
      mfaEnabled: true,
      gmpCertified: true,
      certificationExpiry: 'Dec 31, 2024',
      loginCount: 287,
      devicesAccess: 3
    },
    {
      id: '3',
      name: 'João Costa',
      email: 'j.costa@europastry.com',
      role: 'operator',
      status: 'active',
      client: 'Europastry',
      department: 'Production',
      phone: '+351 21 234 5680',
      lastLogin: '1 day ago',
      createdAt: 'Feb 5, 2024',
      mfaEnabled: true,
      gmpCertified: true,
      certificationExpiry: 'Nov 15, 2024',
      loginCount: 156,
      devicesAccess: 2
    },
    {
      id: '4',
      name: 'Ana Ferreira',
      email: 'a.ferreira@europastry.com',
      role: 'operator',
      status: 'active',
      client: 'Europastry',
      department: 'R&D',
      phone: '+351 21 234 5681',
      lastLogin: '3 hours ago',
      createdAt: 'Feb 10, 2024',
      mfaEnabled: false,
      gmpCertified: true,
      certificationExpiry: 'Oct 20, 2024',
      loginCount: 198,
      devicesAccess: 3
    },
    {
      id: '5',
      name: 'Pedro Martins',
      email: 'p.martins@europastry.com',
      role: 'viewer',
      status: 'active',
      client: 'Europastry',
      department: 'Quality Assurance',
      phone: '+351 21 234 5682',
      lastLogin: '2 days ago',
      createdAt: 'Mar 1, 2024',
      mfaEnabled: false,
      gmpCertified: false,
      loginCount: 45,
      devicesAccess: 1
    },
    {
      id: '6',
      name: 'Sofia Santos',
      email: 's.santos@europastry.com',
      role: 'operator',
      status: 'inactive',
      client: 'Europastry',
      department: 'Production',
      phone: '+351 21 234 5683',
      lastLogin: '30 days ago',
      createdAt: 'Jan 25, 2024',
      mfaEnabled: true,
      gmpCertified: true,
      certificationExpiry: 'Sep 15, 2024',
      loginCount: 89,
      devicesAccess: 2
    },
    {
      id: '7',
      name: 'Miguel Oliveira',
      email: 'm.oliveira@europastry.com',
      role: 'manager',
      status: 'pending',
      client: 'Europastry',
      department: 'Operations',
      phone: '+351 21 234 5684',
      lastLogin: 'Never',
      createdAt: 'Oct 28, 2024',
      mfaEnabled: false,
      gmpCertified: false,
      loginCount: 0,
      devicesAccess: 0
    },
  ];

  const stats = {
    total: users.length,
    active: users.filter(u => u.status === 'active').length,
    inactive: users.filter(u => u.status === 'inactive').length,
    pending: users.filter(u => u.status === 'pending').length,
    admins: users.filter(u => u.role === 'admin').length,
    gmpCertified: users.filter(u => u.gmpCertified).length,
    mfaEnabled: users.filter(u => u.mfaEnabled).length,
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    const matchesStatus = filterStatus === 'all' || user.status === filterStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleUserClick = (user: UserData) => {
    setSelectedUser(user);
    setView('detail');
  };

  const handleBack = () => {
    setSelectedUser(null);
    setView('list');
  };

  if (view === 'detail' && selectedUser) {
    return <UserDetail user={selectedUser} onBack={handleBack} />;
  }

  const getRoleBadge = (role: UserData['role']) => {
    const config = {
      admin: { className: 'bg-purple-100 text-purple-700 border-purple-200', label: 'Admin' },
      manager: { className: 'bg-blue-100 text-blue-700 border-blue-200', label: 'Manager' },
      operator: { className: 'bg-cyan-100 text-cyan-700 border-cyan-200', label: 'Operator' },
      viewer: { className: 'bg-gray-100 text-gray-700 border-gray-200', label: 'Viewer' },
    };
    return <Badge className={config[role].className}>{config[role].label}</Badge>;
  };

  const getStatusBadge = (status: UserData['status']) => {
    const config = {
      active: { className: 'bg-green-100 text-green-700 border-green-200', label: 'Active', icon: CheckCircle2 },
      inactive: { className: 'bg-gray-100 text-gray-700 border-gray-200', label: 'Inactive', icon: XCircle },
      pending: { className: 'bg-amber-100 text-amber-700 border-amber-200', label: 'Pending', icon: Clock },
    };
    const Icon = config[status].icon;
    return (
      <Badge className={config[status].className}>
        <Icon className="w-3 h-3 mr-1" />
        {config[status].label}
      </Badge>
    );
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-gray-900 mb-1">User Management</h1>
              <p className="text-gray-600">Manage users, roles, and access permissions</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Add User
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            <Card className="p-4">
              <div className="text-xs text-gray-500 uppercase mb-1">Total Users</div>
              <div className="text-2xl text-gray-900">{stats.total}</div>
            </Card>
            <Card className="p-4">
              <div className="text-xs text-gray-500 uppercase mb-1">Active</div>
              <div className="text-2xl text-green-600">{stats.active}</div>
            </Card>
            <Card className="p-4">
              <div className="text-xs text-gray-500 uppercase mb-1">Inactive</div>
              <div className="text-2xl text-gray-600">{stats.inactive}</div>
            </Card>
            <Card className="p-4">
              <div className="text-xs text-gray-500 uppercase mb-1">Pending</div>
              <div className="text-2xl text-amber-600">{stats.pending}</div>
            </Card>
            <Card className="p-4">
              <div className="text-xs text-gray-500 uppercase mb-1">Admins</div>
              <div className="text-2xl text-purple-600">{stats.admins}</div>
            </Card>
            <Card className="p-4">
              <div className="text-xs text-gray-500 uppercase mb-1">GMP Certified</div>
              <div className="text-2xl text-cyan-600">{stats.gmpCertified}</div>
            </Card>
            <Card className="p-4">
              <div className="text-xs text-gray-500 uppercase mb-1">MFA Enabled</div>
              <div className="text-2xl text-blue-600">{stats.mfaEnabled}</div>
            </Card>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="px-8 py-6 bg-white border-b border-gray-200">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search users by name, email, or department..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select 
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white"
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
          >
            <option value="all">All Roles</option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="operator">Operator</option>
            <option value="viewer">Viewer</option>
          </select>
          <select 
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="px-8 py-8">
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-6 py-4 text-left text-xs text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-4 text-left text-xs text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-4 text-left text-xs text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-4 text-left text-xs text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs text-gray-500 uppercase tracking-wider">
                    Compliance
                  </th>
                  <th className="px-6 py-4 text-left text-xs text-gray-500 uppercase tracking-wider">
                    Last Login
                  </th>
                  <th className="px-6 py-4 text-right text-xs text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.map((user) => (
                  <tr 
                    key={user.id} 
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => handleUserClick(user)}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-gradient-to-br from-cyan-400 to-blue-500 text-white">
                            {getInitials(user.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {getRoleBadge(user.role)}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {user.department}
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(user.status)}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {user.gmpCertified && (
                          <Badge className="bg-cyan-100 text-cyan-700 border-cyan-200 text-xs">
                            <Shield className="w-3 h-3 mr-1" />
                            GMP
                          </Badge>
                        )}
                        {user.mfaEnabled && (
                          <Badge className="bg-blue-100 text-blue-700 border-blue-200 text-xs">
                            <Lock className="w-3 h-3 mr-1" />
                            MFA
                          </Badge>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">
                      {user.lastLogin}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <User className="w-4 h-4 mr-2" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="w-4 h-4 mr-2" />
                            Edit User
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Key className="w-4 h-4 mr-2" />
                            Reset Password
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          {user.status === 'active' ? (
                            <DropdownMenuItem>
                              <XCircle className="w-4 h-4 mr-2" />
                              Deactivate
                            </DropdownMenuItem>
                          ) : (
                            <DropdownMenuItem>
                              <CheckCircle2 className="w-4 h-4 mr-2" />
                              Activate
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete User
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredUsers.length === 0 && (
            <div className="p-12 text-center">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-gray-900 mb-2">No users found</h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </div>
          )}

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Showing {filteredUsers.length} of {users.length} users
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" disabled>
                Next
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function UserDetail({ user, onBack }: UserDetailProps) {
  const recentActivity = [
    { id: 1, action: 'Logged in via web portal', timestamp: '2 hours ago', type: 'login' },
    { id: 2, action: 'Viewed device VisumInline calibration data', timestamp: '3 hours ago', type: 'view' },
    { id: 3, action: 'Downloaded GMP compliance report', timestamp: '5 hours ago', type: 'download' },
    { id: 4, action: 'Updated profile information', timestamp: '2 days ago', type: 'update' },
    { id: 5, action: 'Accessed audit log for Client: Europastry', timestamp: '3 days ago', type: 'audit' },
  ];

  const permissions = {
    dashboard: { view: true, edit: false, admin: false },
    clients: { view: true, edit: true, admin: user.role === 'admin' },
    devices: { view: true, edit: user.role !== 'viewer', admin: user.role === 'admin' },
    chemometrics: { view: true, edit: user.role !== 'viewer', admin: false },
    reports: { view: true, edit: false, admin: false },
    auditLog: { view: user.role !== 'viewer', edit: false, admin: user.role === 'admin' },
    users: { view: user.role === 'admin' || user.role === 'manager', edit: user.role === 'admin', admin: user.role === 'admin' },
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  const getRoleBadge = (role: UserData['role']) => {
    const config = {
      admin: { className: 'bg-purple-100 text-purple-700 border-purple-200', label: 'Administrator' },
      manager: { className: 'bg-blue-100 text-blue-700 border-blue-200', label: 'Manager' },
      operator: { className: 'bg-cyan-100 text-cyan-700 border-cyan-200', label: 'Operator' },
      viewer: { className: 'bg-gray-100 text-gray-700 border-gray-200', label: 'Viewer' },
    };
    return <Badge className={config[role].className}>{config[role].label}</Badge>;
  };

  const getStatusBadge = (status: UserData['status']) => {
    const config = {
      active: { className: 'bg-green-100 text-green-700 border-green-200', label: 'Active' },
      inactive: { className: 'bg-gray-100 text-gray-700 border-gray-200', label: 'Inactive' },
      pending: { className: 'bg-amber-100 text-amber-700 border-amber-200', label: 'Pending Activation' },
    };
    return <Badge className={config[status].className}>{config[status].label}</Badge>;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-8 py-6">
          {/* Breadcrumb & Back */}
          <div className="flex items-center gap-4 mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="text-gray-600 hover:text-gray-900 -ml-2"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Users
            </Button>
            <div className="text-sm text-gray-400">/</div>
            <span className="text-sm text-gray-600">{user.name}</span>
          </div>

          {/* User Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="w-20 h-20">
                <AvatarFallback className="bg-gradient-to-br from-cyan-400 to-blue-500 text-white text-2xl">
                  {getInitials(user.name)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-gray-900 mb-1">{user.name}</h1>
                <div className="flex items-center gap-3 mb-2">
                  {getRoleBadge(user.role)}
                  {getStatusBadge(user.status)}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{user.department}</span>
                  <span>•</span>
                  <span>Last login {user.lastLogin}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
              <Button variant="outline" size="sm">
                <Edit className="w-4 h-4 mr-2" />
                Edit User
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Key className="w-4 h-4 mr-2" />
                    Reset Password
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Lock className="w-4 h-4 mr-2" />
                    Configure MFA
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  {user.status === 'active' ? (
                    <DropdownMenuItem>
                      <XCircle className="w-4 h-4 mr-2" />
                      Deactivate User
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem>
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Activate User
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete User
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column - User Info */}
          <div className="col-span-12 lg:col-span-4 xl:col-span-3 space-y-6">
            {/* Contact Information */}
            <Card className="p-6">
              <h3 className="text-gray-900 mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <Mail className="w-3.5 h-3.5" />
                    <span className="uppercase tracking-wider">Email</span>
                  </div>
                  <a 
                    href={`mailto:${user.email}`}
                    className="text-cyan-600 hover:text-cyan-700 hover:underline text-sm"
                  >
                    {user.email}
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <Phone className="w-3.5 h-3.5" />
                    <span className="uppercase tracking-wider">Phone</span>
                  </div>
                  <a 
                    href={`tel:${user.phone}`}
                    className="text-cyan-600 hover:text-cyan-700 hover:underline text-sm"
                  >
                    {user.phone}
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <Building2 className="w-3.5 h-3.5" />
                    <span className="uppercase tracking-wider">Client</span>
                  </div>
                  <p className="text-gray-900">{user.client}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <Users className="w-3.5 h-3.5" />
                    <span className="uppercase tracking-wider">Department</span>
                  </div>
                  <p className="text-gray-900">{user.department}</p>
                </div>
              </div>
            </Card>

            {/* Security & Compliance */}
            <Card className="p-6">
              <h3 className="text-gray-900 mb-6">Security & Compliance</h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-900">Multi-Factor Auth</span>
                  </div>
                  {user.mfaEnabled ? (
                    <Badge className="bg-green-100 text-green-700 border-green-200">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Enabled
                    </Badge>
                  ) : (
                    <Badge className="bg-red-100 text-red-700 border-red-200">
                      <XCircle className="w-3 h-3 mr-1" />
                      Disabled
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-900">GMP Certified</span>
                  </div>
                  {user.gmpCertified ? (
                    <Badge className="bg-cyan-100 text-cyan-700 border-cyan-200">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Certified
                    </Badge>
                  ) : (
                    <Badge className="bg-gray-100 text-gray-700 border-gray-200">
                      Not Certified
                    </Badge>
                  )}
                </div>

                {user.gmpCertified && user.certificationExpiry && (
                  <div className="pt-3 border-t border-gray-200">
                    <div className="text-xs text-gray-500 uppercase mb-2">Certification Expiry</div>
                    <p className="text-sm text-gray-900">{user.certificationExpiry}</p>
                  </div>
                )}
              </div>
            </Card>

            {/* Account Stats */}
            <Card className="p-6">
              <h3 className="text-gray-900 mb-6">Account Statistics</h3>

              <div className="space-y-4">
                <div>
                  <div className="text-xs text-gray-500 uppercase mb-1">Total Logins</div>
                  <div className="text-2xl text-gray-900">{user.loginCount}</div>
                </div>

                <div className="pt-3 border-t border-gray-200">
                  <div className="text-xs text-gray-500 uppercase mb-1">Devices Access</div>
                  <div className="text-2xl text-gray-900">{user.devicesAccess}</div>
                </div>

                <div className="pt-3 border-t border-gray-200">
                  <div className="text-xs text-gray-500 uppercase mb-1">Account Created</div>
                  <div className="text-sm text-gray-900">{user.createdAt}</div>
                </div>
              </div>
            </Card>

            {/* VisumMaster Badge */}
            <Card className="p-6">
              <div className="bg-gradient-to-b from-gray-50 to-white border-2 border-gray-200 rounded-lg p-4">
                <div className="text-xs text-gray-500 text-center mb-3">Powered by</div>
                <div className="flex items-center justify-center">
                  <ImageWithFallback 
                    src={visumMasterLogo} 
                    alt="VisumMaster"
                    className="h-11 w-auto object-contain"
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Details */}
          <div className="col-span-12 lg:col-span-8 xl:col-span-9">
            <Tabs defaultValue="activity">
              <TabsList className="mb-6">
                <TabsTrigger value="activity">Recent Activity</TabsTrigger>
                <TabsTrigger value="permissions">Permissions</TabsTrigger>
                <TabsTrigger value="devices">Device Access</TabsTrigger>
              </TabsList>

              {/* Activity Tab */}
              <TabsContent value="activity">
                <Card>
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-gray-900">Recent Activity</h3>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="p-6 flex items-start gap-4">
                        <div className="p-2 bg-gray-50 rounded-lg">
                          <Activity className="w-4 h-4 text-gray-400" />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-900 mb-1">{activity.action}</p>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{activity.timestamp}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-6 border-t border-gray-200 text-center">
                    <Button variant="outline" size="sm">
                      View Full Activity Log
                    </Button>
                  </div>
                </Card>
              </TabsContent>

              {/* Permissions Tab */}
              <TabsContent value="permissions">
                <Card>
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-gray-900">Access Permissions</h3>
                    <p className="text-sm text-gray-500 mt-1">Module-level permissions for this user</p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200 bg-gray-50">
                          <th className="px-6 py-4 text-left text-xs text-gray-500 uppercase tracking-wider">
                            Module
                          </th>
                          <th className="px-6 py-4 text-center text-xs text-gray-500 uppercase tracking-wider">
                            View
                          </th>
                          <th className="px-6 py-4 text-center text-xs text-gray-500 uppercase tracking-wider">
                            Edit
                          </th>
                          <th className="px-6 py-4 text-center text-xs text-gray-500 uppercase tracking-wider">
                            Admin
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {Object.entries(permissions).map(([module, perms]) => (
                          <tr key={module}>
                            <td className="px-6 py-4 text-gray-900 capitalize">
                              {module.replace(/([A-Z])/g, ' $1').trim()}
                            </td>
                            <td className="px-6 py-4 text-center">
                              {perms.view ? (
                                <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
                              ) : (
                                <XCircle className="w-5 h-5 text-gray-300 mx-auto" />
                              )}
                            </td>
                            <td className="px-6 py-4 text-center">
                              {perms.edit ? (
                                <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
                              ) : (
                                <XCircle className="w-5 h-5 text-gray-300 mx-auto" />
                              )}
                            </td>
                            <td className="px-6 py-4 text-center">
                              {perms.admin ? (
                                <CheckCircle2 className="w-5 h-5 text-purple-600 mx-auto" />
                              ) : (
                                <XCircle className="w-5 h-5 text-gray-300 mx-auto" />
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="p-6 border-t border-gray-200 flex justify-end">
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Permissions
                    </Button>
                  </div>
                </Card>
              </TabsContent>

              {/* Devices Tab */}
              <TabsContent value="devices">
                <Card>
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-gray-900">Authorized Devices</h3>
                    <p className="text-sm text-gray-500 mt-1">Devices this user can access</p>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {['VisumInline™', 'VisumHSI™', 'VisumRaman™', 'VisumPalm™'].slice(0, user.devicesAccess).map((device, idx) => (
                        <div key={idx} className="p-4 border border-gray-200 rounded-lg flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-cyan-50 rounded-lg">
                              <Activity className="w-5 h-5 text-cyan-600" />
                            </div>
                            <div>
                              <div className="text-gray-900">{device}</div>
                              <div className="text-sm text-gray-500">Full Access</div>
                            </div>
                          </div>
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 border-t border-gray-200 flex justify-end">
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4 mr-2" />
                      Manage Device Access
                    </Button>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

// Missing ArrowLeft import fix
import { ArrowLeft } from 'lucide-react';
