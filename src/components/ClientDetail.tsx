import { ArrowLeft, Building2, MapPin, Mail, Phone, Users, Plus, Edit, Trash2, Download, MoreVertical, TrendingUp, AlertCircle, CheckCircle2, Activity, Calendar, Clock, Shield, FileText, BarChart3, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Import device images
import visumInlineImg from 'figma:asset/9f37a4b4834653ad97bb7a82200e45275054f767.png';
import visumHSIImg from 'figma:asset/215b8c1c8daeedb44f8accf3bbf4cccf350afc13.png';
import visumRamanImg from 'figma:asset/af6775da0ad9e0b649beed01dcc3abcea85154c7.png';

// Import client logo
import europastryLogo from 'figma:asset/d0cc346e7223b639eeb42527686c17c783aac5e1.png';

// Import VisumMaster logo
import visumMasterLogo from 'figma:asset/cdb43182cb144d4675600df51482a2a0beff7076.png';

interface Device {
  id: string;
  name: string;
  type: string;
  serialNumber: string;
  date: string;
  tier: string;
  badges: string[];
  lastCorrection: string;
  location: string;
  lastMaintenance: string;
  scheduledMaintenance: string;
  image: string;
  uptime: number;
  status: 'operational' | 'warning' | 'offline';
}

interface ClientDetailProps {
  onBack: () => void;
}

export function ClientDetail({ onBack }: ClientDetailProps) {
  // Mock data - in production this would come from API/props
  const client = {
    id: '1',
    name: 'Europastry',
    logo: europastryLogo,
    users: 24,
    userLimit: 30,
    address: 'Praceta Anibal Faustino, 2 - 4º Esq.',
    contact: 'Thiago Souza',
    email: 'comercial@loriat.pt',
    phone: '+351 21 234 5678',
    tier: 'Plus',
    status: 'active',
    healthScore: 92,
    contractStart: 'Jan 15, 2024',
    contractEnd: 'Jan 14, 2025',
    mrr: '€2,450',
    csm: 'Sarah Martinez',
    lastActivity: '2 hours ago',
    openTickets: 1,
    complianceStatus: 'Compliant'
  };

  const devices: Device[] = [
    {
      id: '1',
      name: 'VisumInline',
      type: 'Inline Analyzer',
      serialNumber: 'VP100520241BS',
      date: 'Deployed May 2, 2024',
      tier: 'Plus',
      badges: ['GMP'],
      lastCorrection: '07:35 - 02/05/2024',
      location: 'Production Line A, Carneira',
      lastMaintenance: '07:35 - 02/05/2024',
      scheduledMaintenance: '07:35 - 12/05/2024',
      image: visumInlineImg,
      uptime: 99.9,
      status: 'operational'
    },
    {
      id: '2',
      name: 'VisumHSI',
      type: 'HSI Scanner',
      serialNumber: 'VH203820241HS',
      date: 'Deployed Apr 18, 2024',
      tier: 'Plus',
      badges: [],
      lastCorrection: '14:22 - 28/04/2024',
      location: 'Quality Control Lab',
      lastMaintenance: '14:22 - 28/04/2024',
      scheduledMaintenance: '14:22 - 28/05/2024',
      image: visumHSIImg,
      uptime: 98.7,
      status: 'operational'
    },
    {
      id: '3',
      name: 'VisumRaman',
      type: 'Raman Spectrometer',
      serialNumber: 'VR145220241RM',
      date: 'Deployed Mar 12, 2024',
      tier: 'Plus',
      badges: [],
      lastCorrection: '09:15 - 01/05/2024',
      location: 'R&D Laboratory',
      lastMaintenance: '09:15 - 01/05/2024',
      scheduledMaintenance: '09:15 - 12/05/2024',
      image: visumRamanImg,
      uptime: 99.5,
      status: 'operational'
    },
    {
      id: '4',
      name: 'VisumPalm',
      type: 'Handheld Analyzer',
      serialNumber: 'VP087520241HH',
      date: 'Deployed Jan 22, 2024',
      tier: 'Plus',
      badges: ['GMP'],
      lastCorrection: '16:45 - 30/04/2024',
      location: 'Mobile - Warehouse',
      lastMaintenance: '16:45 - 30/04/2024',
      scheduledMaintenance: '16:45 - 22/05/2024',
      image: visumInlineImg,
      uptime: 100,
      status: 'operational'
    }
  ];

  const recentActivity = [
    { id: 1, type: 'device', message: 'VisumInline completed calibration', time: '2 hours ago', icon: CheckCircle2, color: 'text-green-600' },
    { id: 2, type: 'user', message: 'Thiago Souza logged in', time: '5 hours ago', icon: Users, color: 'text-blue-600' },
    { id: 3, type: 'alert', message: 'Scheduled maintenance due in 3 days', time: '1 day ago', icon: Clock, color: 'text-amber-600' },
    { id: 4, type: 'compliance', message: 'GMP audit report generated', time: '2 days ago', icon: Shield, color: 'text-cyan-600' },
  ];

  const getStatusColor = (status: Device['status']) => {
    switch (status) {
      case 'operational':
        return 'bg-green-500';
      case 'warning':
        return 'bg-amber-500';
      case 'offline':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = (status: Device['status']) => {
    switch (status) {
      case 'operational':
        return 'Operational';
      case 'warning':
        return 'Warning';
      case 'offline':
        return 'Offline';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-8 py-6">
          {/* Breadcrumb & Back Button */}
          <div className="flex items-center gap-4 mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="text-gray-600 hover:text-gray-900 -ml-2"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Clients
            </Button>
            <div className="text-sm text-gray-400">/</div>
            <span className="text-sm text-gray-600">{client.name}</span>
          </div>

          {/* Title & Actions */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-32 h-32 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center p-4 overflow-hidden">
                <ImageWithFallback 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-gray-900 mb-1">{client.name}</h1>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="border-cyan-200 bg-cyan-50 text-cyan-700">
                    {client.tier} Plan
                  </Badge>
                  <Badge variant="outline" className="border-green-200 bg-green-50 text-green-700">
                    Active
                  </Badge>
                  <span className="text-sm text-gray-500">{devices.length} Devices</span>
                  <span className="text-sm text-gray-400">•</span>
                  <span className="text-sm text-gray-500">Last activity {client.lastActivity}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <Edit className="w-4 h-4 mr-2" />
                Edit Client
              </Button>
              <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Add Device
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="px-8 py-8 bg-white border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Health Score */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-gray-500">Health Score</div>
              <Activity className="w-4 h-4 text-gray-400" />
            </div>
            <div className="flex items-baseline gap-2">
              <div className="text-3xl text-gray-900">{client.healthScore}</div>
              <div className="text-sm text-green-600 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                +5%
              </div>
            </div>
            <div className="mt-3 w-full bg-gray-100 rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full" 
                style={{ width: `${client.healthScore}%` }}
              />
            </div>
          </Card>

          {/* Uptime */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-gray-500">System Uptime</div>
              <Zap className="w-4 h-4 text-gray-400" />
            </div>
            <div className="flex items-baseline gap-2">
              <div className="text-3xl text-gray-900">99.8%</div>
            </div>
            <div className="mt-3 text-xs text-gray-600">
              Last 30 days • {devices.filter(d => d.badges.includes('GMP')).length} GMP certified
            </div>
          </Card>

          {/* Monthly Value */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-gray-500">Monthly Revenue</div>
              <BarChart3 className="w-4 h-4 text-gray-400" />
            </div>
            <div className="flex items-baseline gap-2">
              <div className="text-3xl text-gray-900">{client.mrr}</div>
            </div>
            <div className="mt-3 text-xs text-gray-600">
              Renews {client.contractEnd}
            </div>
          </Card>

          {/* Support Status */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-gray-500">Open Tickets</div>
              <AlertCircle className="w-4 h-4 text-gray-400" />
            </div>
            <div className="flex items-baseline gap-2">
              <div className="text-3xl text-gray-900">{client.openTickets}</div>
            </div>
            <div className="mt-3 text-xs text-gray-600">
              Avg response: 2.3 hours
            </div>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column - Company Info */}
          <div className="col-span-12 lg:col-span-4 xl:col-span-3 space-y-6">
            {/* Account Overview */}
            <Card className="p-6">
              <h3 className="text-gray-900 mb-6">Account Overview</h3>

              <div className="space-y-4">
                {/* Contract Period */}
                <div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="uppercase tracking-wider">Contract Period</span>
                  </div>
                  <p className="text-sm text-gray-900">{client.contractStart} - {client.contractEnd}</p>
                </div>

                {/* CSM */}
                <div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <Users className="w-3.5 h-3.5" />
                    <span className="uppercase tracking-wider">Success Manager</span>
                  </div>
                  <p className="text-gray-900">{client.csm}</p>
                  <button className="text-sm text-cyan-600 hover:text-cyan-700 mt-1">Send Message →</button>
                </div>

                {/* Users */}
                <div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <Users className="w-3.5 h-3.5" />
                    <span className="uppercase tracking-wider">User Licenses</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-900">{client.users} / {client.userLimit} seats</p>
                    <span className="text-xs text-gray-500">{Math.round((client.users/client.userLimit)*100)}%</span>
                  </div>
                  <div className="mt-2 w-full bg-gray-100 rounded-full h-1.5">
                    <div 
                      className="bg-cyan-500 h-1.5 rounded-full" 
                      style={{ width: `${(client.users/client.userLimit)*100}%` }}
                    />
                  </div>
                </div>

                {/* Compliance */}
                <div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <Shield className="w-3.5 h-3.5" />
                    <span className="uppercase tracking-wider">Compliance Status</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-100 text-green-700 border-green-200">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      {client.complianceStatus}
                    </Badge>
                  </div>
                  <button className="text-sm text-cyan-600 hover:text-cyan-700 mt-2">View Audit Trail →</button>
                </div>

                {/* Plan Details */}
                <div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <span className="uppercase tracking-wider">Plan</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900">{client.tier}</span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-cyan-600 hover:text-cyan-700 -mr-2"
                    >
                      Upgrade
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Contact Information */}
            <Card className="p-6">
              <h3 className="text-gray-900 mb-6">Contact Information</h3>

              <div className="space-y-4">
                {/* Address */}
                <div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="uppercase tracking-wider">Address</span>
                  </div>
                  <p className="text-gray-900 leading-relaxed text-sm">{client.address}</p>
                </div>

                {/* Contact Person */}
                <div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <Building2 className="w-3.5 h-3.5" />
                    <span className="uppercase tracking-wider">Primary Contact</span>
                  </div>
                  <p className="text-gray-900">{client.contact}</p>
                </div>

                {/* Email */}
                <div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <Mail className="w-3.5 h-3.5" />
                    <span className="uppercase tracking-wider">Email</span>
                  </div>
                  <a 
                    href={`mailto:${client.email}`}
                    className="text-cyan-600 hover:text-cyan-700 hover:underline text-sm"
                  >
                    {client.email}
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <Phone className="w-3.5 h-3.5" />
                    <span className="uppercase tracking-wider">Phone</span>
                  </div>
                  <a 
                    href={`tel:${client.phone}`}
                    className="text-cyan-600 hover:text-cyan-700 hover:underline text-sm"
                  >
                    {client.phone}
                  </a>
                </div>
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-gray-900">Recent Activity</h3>
                <button className="text-xs text-cyan-600 hover:text-cyan-700">View All</button>
              </div>

              <div className="space-y-4">
                {recentActivity.map((activity) => {
                  const Icon = activity.icon;
                  return (
                    <div key={activity.id} className="flex items-start gap-3">
                      <div className={`p-1.5 rounded-lg bg-gray-50 ${activity.color}`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">{activity.message}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{activity.time}</p>
                      </div>
                    </div>
                  );
                })}
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

            {/* Danger Zone */}
            <div>
              <Button 
                variant="outline" 
                className="w-full text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete Client
              </Button>
            </div>
          </div>

          {/* Right Column - Devices Grid */}
          <div className="col-span-12 lg:col-span-8 xl:col-span-9">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-gray-900">Deployed Devices</h2>
              <div className="flex items-center gap-2">
                <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500">
                  <option>All Devices</option>
                  <option>GMP Certified</option>
                  <option>Standard</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {devices.map((device) => (
                <Card key={device.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Device Image */}
                  <div className="w-full h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
                    <ImageWithFallback 
                      src={device.image} 
                      alt={device.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Device Info */}
                  <div className="p-6">
                    {/* Device Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-gray-900">{device.name}™</h4>
                          {device.badges.includes('GMP') && (
                            <Badge className="bg-cyan-600 text-white text-xs px-2 py-0">
                              GMP
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">{device.type}</p>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit Device</DropdownMenuItem>
                          <DropdownMenuItem>Download Reports</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Remove Device</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    {/* Device Metrics */}
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Uptime</div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-lg text-gray-900">{device.uptime}%</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-500 mb-1">Status</div>
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${getStatusColor(device.status)}`}></div>
                            <span className="text-sm text-gray-900">{getStatusText(device.status)}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Device Info Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {/* Serial Number */}
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                          Serial Number
                        </div>
                        <div className="text-sm text-gray-900">{device.serialNumber}</div>
                      </div>

                      {/* Date */}
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                          Deployed
                        </div>
                        <div className="text-sm text-gray-900">{device.date.replace('Deployed ', '')}</div>
                      </div>

                      {/* Location */}
                      <div className="col-span-2">
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                          Location
                        </div>
                        <div className="text-sm text-gray-900" title={device.location}>
                          {device.location}
                        </div>
                      </div>

                      {/* Last Maintenance */}
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                          Last Maintenance
                        </div>
                        <div className="text-sm text-gray-900">{device.lastMaintenance}</div>
                      </div>

                      {/* Scheduled Maintenance */}
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                          Next Maintenance
                        </div>
                        <div className="text-sm text-cyan-600">{device.scheduledMaintenance}</div>
                      </div>
                    </div>

                    {/* Action Footer */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-gray-600 hover:text-gray-900 text-sm -ml-2"
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          Reports
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-cyan-600 hover:text-cyan-700 text-sm -mr-2"
                        >
                          View Details →
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Empty State */}
            {devices.length === 0 && (
              <Card className="p-12 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plus className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-gray-900 mb-2">No Devices Yet</h3>
                <p className="text-gray-600 mb-6">
                  Get started by adding the first device for this client.
                </p>
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Add First Device
                </Button>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
