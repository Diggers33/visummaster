import { useState } from 'react';
import { BarChart3, Plus, Users, Pencil, Copy, Trash2, MoreHorizontal, LayoutGrid, Table as TableIcon, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

interface ClientsTableProps {
  onViewChange: (view: 'table' | 'grid') => void;
  onClientClick?: (clientId: number) => void;
}

const clientsData = [
  {
    id: 1,
    company: 'ForLab',
    contact: 'Thiago Souza',
    address: 'Rua das Flores, 123',
    email: 'contact@forlab.com',
    plan: 'Plus',
    paymentPlan: 'Anual',
    devices: 7,
    users: 23,
    master: true,
  },
  {
    id: 2,
    company: 'ANAEL',
    contact: 'M. Vaysse C.',
    address: 'Avenue des Champs',
    email: 'info@anael.fr',
    plan: 'Plus',
    paymentPlan: 'Anual',
    devices: 7,
    users: 23,
    master: true,
  },
  {
    id: 3,
    company: 'PANATEC',
    contact: 'Jose Juliano',
    address: 'Rua Paulista 456',
    email: 'contact@panatec.br',
    plan: 'Basic',
    paymentPlan: 'Anual',
    devices: 1,
    users: 4,
    master: false,
  },
  {
    id: 4,
    company: 'Grupo Alaba',
    contact: 'Sergio Coli',
    address: 'Plaza Xavier Cug...',
    email: 'scoli@gmail.c...',
    plan: 'GMP',
    paymentPlan: 'Anual',
    devices: 2,
    users: 2,
    master: true,
    selected: true,
  },
  {
    id: 5,
    company: 'SOLUTON',
    contact: 'Hendrick Man',
    address: 'Talhofarese 32...',
    email: 'info@soluton...',
    plan: 'Basic',
    paymentPlan: 'Anual',
    devices: 7,
    users: 5,
    master: false,
  },
  {
    id: 6,
    company: 'ARTEC',
    contact: 'John Davides',
    address: '4 Rue Lou Hemm...',
    email: 'support@arte...',
    plan: 'Basic',
    paymentPlan: 'Anual',
    devices: 2,
    users: 2,
    master: false,
  },
  {
    id: 7,
    company: 'WG Technology',
    contact: 'Carlos Gomez',
    address: 'Calle 111 47 A 98...',
    email: 'ventas@solas...',
    plan: 'Plus',
    paymentPlan: 'Anual',
    devices: 2,
    users: 6,
    master: false,
  },
  {
    id: 8,
    company: 'BD Instruments',
    contact: 'Bernardo Diaz',
    address: 'Av Marginal 601',
    email: 'bd@bdinstrru...',
    plan: 'Basic',
    paymentPlan: 'Anual',
    devices: 1,
    users: 4,
    master: false,
  },
  {
    id: 9,
    company: 'Ingenio Nuclear',
    contact: 'Alberto Silvatera',
    address: 'Praceta Anibal Fa...',
    email: 'info@ingenton...',
    plan: 'Basic',
    paymentPlan: 'Anual',
    devices: 8,
    users: 7,
    master: false,
  },
  {
    id: 10,
    company: 'Calidad Pascual',
    contact: 'Thiago Souza',
    address: 'Praceta Anibal Fa...',
    email: 'aduero@calid...',
    plan: 'Plus',
    paymentPlan: 'Anual',
    devices: 1,
    users: 2,
    master: false,
  },
];

export function ClientsTable({ onViewChange, onClientClick }: ClientsTableProps) {
  const [selectedContinent, setSelectedContinent] = useState('all');
  const [searchFilter, setSearchFilter] = useState('');

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
            <Select value={selectedContinent} onValueChange={setSelectedContinent}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Continent" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Continent</SelectItem>
                <SelectItem value="country">Country</SelectItem>
                <SelectItem value="region">Region</SelectItem>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="distributor">Distributor</SelectItem>
                <SelectItem value="payments">Payments</SelectItem>
                <SelectItem value="subscription">Subscription</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={searchFilter} onValueChange={setSearchFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Spain" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="spain">Spain</SelectItem>
                <SelectItem value="portugal">Portugal</SelectItem>
                <SelectItem value="france">France</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input placeholder="Search..." className="pl-9" />
          </div>
          
          <div className="flex items-center gap-1 bg-gray-100 rounded p-1">
            <button
              onClick={() => onViewChange('table')}
              className="p-1.5 bg-white rounded shadow-sm"
            >
              <TableIcon className="w-4 h-4 text-gray-600" />
            </button>
            <button
              onClick={() => onViewChange('grid')}
              className="p-1.5 hover:bg-white rounded transition-colors"
            >
              <LayoutGrid className="w-4 h-4 text-gray-600" />
            </button>
          </div>
          
          <Button className="bg-cyan-600 hover:bg-cyan-700 gap-2">
            <Plus className="w-4 h-4" />
            Add Client
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Company</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Address</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Mail</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Plan</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Payment Plan</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Devices</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Users</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Master</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Edit</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Copy</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Delete</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {clientsData.map((client) => (
                <tr 
                  key={client.id} 
                  className={client.selected ? 'bg-cyan-50 border-l-4 border-cyan-600' : 'hover:bg-gray-50'}
                >
                  <td 
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 cursor-pointer hover:text-cyan-600 font-medium"
                    onClick={() => onClientClick?.(client.id)}
                  >
                    {client.company}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{client.contact}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{client.address}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{client.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{client.plan}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{client.paymentPlan}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{client.devices}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{client.users}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {client.master && <Users className="w-5 h-5 text-cyan-600" />}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-gray-400 hover:text-cyan-600">
                      <Pencil className="w-4 h-4" />
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-gray-400 hover:text-cyan-600">
                      <Copy className="w-4 h-4" />
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-gray-400 hover:text-red-600">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
