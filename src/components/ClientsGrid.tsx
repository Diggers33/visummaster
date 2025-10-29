import { useState } from 'react';
import { BarChart3, LayoutGrid, Table as TableIcon, Search, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Import VisumMaster logo
import visumMasterLogo from 'figma:asset/cdb43182cb144d4675600df51482a2a0beff7076.png';

interface ClientsGridProps {
  onViewChange: (view: 'table' | 'grid') => void;
  onClientClick?: (clientId: number) => void;
}

const devicesData = [
  {
    id: 1,
    name: 'VisumInline',
    badge: 'GMP',
    serialNumber: 'VP1005202418S',
    date: 'Plus',
    lastConnection: '07:35 - 02/05/2024',
    location: 'Carretera d\'Esplug...',
    lastMaintenance: '07:35 - 02/05/2024',
    scheduledMaintenance: '07:35 - 02/05/2024',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=200&fit=crop',
  },
  {
    id: 2,
    name: 'VisumHSI',
    badge: 'GMP',
    serialNumber: 'VP1005202418S',
    date: 'Plus',
    lastConnection: '07:35 - 02/05/2024',
    location: 'Carretera d\'Esplug...',
    lastMaintenance: '07:35 - 02/05/2024',
    scheduledMaintenance: '07:35 - 02/05/2024',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=200&fit=crop',
  },
  {
    id: 3,
    name: 'VisumRaman',
    badge: 'GMP',
    serialNumber: 'VP1005202418S',
    date: 'Plus',
    lastConnection: '07:35 - 02/05/2024',
    location: 'Carretera d\'Esplug...',
    lastMaintenance: '07:35 - 02/05/2024',
    scheduledMaintenance: '07:35 - 02/05/2024',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=200&fit=crop',
  },
  {
    id: 4,
    name: 'VisumPalm',
    badge: 'GMP',
    serialNumber: 'VP1005202418S',
    date: 'Plus',
    lastConnection: '07:35 - 02/05/2024',
    location: 'Carretera d\'Esplug...',
    lastMaintenance: '07:35 - 02/05/2024',
    scheduledMaintenance: '07:35 - 02/05/2024',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=200&fit=crop',
  },
];

export function ClientsGrid({ onViewChange }: ClientsGridProps) {
  const [sector, setSector] = useState('food');
  const [category, setCategory] = useState('cereals');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-cyan-600" />
          <h1 className="text-gray-800">Clients</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Select value={sector} onValueChange={setSector}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Food" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="pharma">Pharma</SelectItem>
                <SelectItem value="chemical">Chemical</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Cereals" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cereals">Cereals</SelectItem>
                <SelectItem value="dairy">Dairy</SelectItem>
                <SelectItem value="bakery">Bakery</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input placeholder="Food" className="pl-9" />
          </div>
          
          <div className="flex items-center gap-1 bg-gray-100 rounded p-1">
            <button
              onClick={() => onViewChange('table')}
              className="p-1.5 hover:bg-white rounded transition-colors"
            >
              <TableIcon className="w-4 h-4 text-gray-600" />
            </button>
            <button
              onClick={() => onViewChange('grid')}
              className="p-1.5 bg-white rounded shadow-sm"
            >
              <LayoutGrid className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Company Info Card */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="space-y-6">
            <div>
              <div className="text-gray-800 mb-4">europastry</div>
            </div>
            
            <div>
              <div className="text-xs text-gray-500 uppercase mb-2">Company</div>
              <div className="text-sm text-gray-800">Europastry</div>
            </div>
            
            <div>
              <div className="text-xs text-gray-500 uppercase mb-2">Users</div>
              <div className="text-sm text-gray-800">23</div>
            </div>
            
            <div>
              <div className="text-xs text-gray-500 uppercase mb-2">Address</div>
              <div className="text-sm text-gray-800">Praceta Anibal Faustino, 2 - 4º Esq</div>
            </div>
            
            <div>
              <div className="text-xs text-gray-500 uppercase mb-2">Contact</div>
              <div className="text-sm text-gray-800">Thiago Souza</div>
            </div>
            
            <div>
              <div className="text-xs text-gray-500 uppercase mb-2">Mail</div>
              <div className="text-sm text-gray-800">comercial@forlab.pt</div>
            </div>
            
            <div>
              <div className="text-xs text-gray-500 uppercase mb-2">Plan</div>
              <div className="text-sm text-gray-800">Plus</div>
            </div>
            
            <div className="pt-4">
              <div className="w-full bg-gradient-to-b from-gray-50 to-white border-2 border-gray-200 rounded-lg p-3 flex items-center justify-center">
                <ImageWithFallback 
                  src={visumMasterLogo} 
                  alt="VisumMaster"
                  className="h-9 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Device Cards */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {devicesData.map((device) => (
            <div key={device.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-40">
                <ImageWithFallback
                  src={device.image}
                  alt={device.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <div className="text-gray-800">{device.name}</div>
                  {device.badge && (
                    <span className="inline-block mt-1 px-2 py-0.5 bg-cyan-500 text-white text-xs rounded">
                      {device.badge}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="p-4 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-xs text-gray-500 uppercase mb-1">Serial Number</div>
                    <div className="text-xs text-gray-800">{device.serialNumber}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase mb-1">Date</div>
                    <div className="text-xs text-gray-800">{device.date}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-xs text-gray-500 uppercase mb-1">Last Connection</div>
                    <div className="text-xs text-gray-800">{device.lastConnection}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase mb-1">Location</div>
                    <div className="text-xs text-gray-800">{device.location}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-xs text-gray-500 uppercase mb-1">Last Maintenance</div>
                    <div className="text-xs text-gray-800">{device.lastMaintenance}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase mb-1">Scheduled Maintenance</div>
                    <div className="text-xs text-gray-800">{device.scheduledMaintenance}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
