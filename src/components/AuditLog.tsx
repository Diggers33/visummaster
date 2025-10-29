import { FileText, Filter, Download, Info } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

interface AuditEntry {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  module: string;
  entity: string;
  changes: string;
  ipAddress: string;
  status: 'success' | 'failed';
}

const auditData: AuditEntry[] = [
  {
    id: '1',
    timestamp: '2025-10-29 14:35:22',
    user: 'john.davies@artec.com',
    action: 'UPDATE',
    module: 'Chemometrics',
    entity: 'Corn Protein 2025',
    changes: 'R2 value changed from 0.94 to 0.96',
    ipAddress: '192.168.1.45',
    status: 'success',
  },
  {
    id: '2',
    timestamp: '2025-10-29 13:22:15',
    user: 'admin@iris.com',
    action: 'APPROVE',
    module: 'Marketing',
    entity: 'Wheat Moisture Model',
    changes: 'Model approved for production',
    ipAddress: '192.168.1.10',
    status: 'success',
  },
  {
    id: '3',
    timestamp: '2025-10-29 12:18:45',
    user: 'sergio.coli@grupoalaba.es',
    action: 'CREATE',
    module: 'Clients',
    entity: 'New Device Registration',
    changes: 'Added device VP1005202419S',
    ipAddress: '185.43.21.98',
    status: 'success',
  },
  {
    id: '4',
    timestamp: '2025-10-29 11:05:33',
    user: 'thiago.souza@forlab.pt',
    action: 'DELETE',
    module: 'Library',
    entity: 'Obsolete Model v1.2',
    changes: 'Removed deprecated calibration model',
    ipAddress: '192.168.1.55',
    status: 'failed',
  },
  {
    id: '5',
    timestamp: '2025-10-29 10:42:18',
    user: 'qa.manager@iris.com',
    action: 'VALIDATE',
    module: 'Chemometrics',
    entity: 'Soybean Protein Model',
    changes: 'Validation tests completed: 98% accuracy',
    ipAddress: '192.168.1.12',
    status: 'success',
  },
];

export function AuditLog() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-cyan-600" />
          <h1 className="text-gray-800">Audit Log</h1>
        </div>
        
        <div className="flex items-center gap-2">
          <Select defaultValue="all-modules">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Module" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-modules">All Modules</SelectItem>
              <SelectItem value="chemometrics">Chemometrics</SelectItem>
              <SelectItem value="clients">Clients</SelectItem>
              <SelectItem value="library">Library</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
            </SelectContent>
          </Select>
          
          <Select defaultValue="all-actions">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Action" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-actions">All Actions</SelectItem>
              <SelectItem value="create">Create</SelectItem>
              <SelectItem value="update">Update</SelectItem>
              <SelectItem value="delete">Delete</SelectItem>
              <SelectItem value="approve">Approve</SelectItem>
              <SelectItem value="validate">Validate</SelectItem>
            </SelectContent>
          </Select>
          
          <Input type="date" className="w-[180px]" />
          
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" />
            Advanced Filters
          </Button>
          
          <Button className="bg-cyan-600 hover:bg-cyan-700 gap-2">
            <Download className="w-4 h-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Audit Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead>Timestamp</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Module</TableHead>
              <TableHead>Entity</TableHead>
              <TableHead>Changes</TableHead>
              <TableHead>IP Address</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {auditData.map((entry) => (
              <TableRow key={entry.id} className="hover:bg-gray-50">
                <TableCell className="text-sm text-gray-600">{entry.timestamp}</TableCell>
                <TableCell className="text-sm text-gray-900">{entry.user}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="text-xs">
                    {entry.action}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-gray-600">{entry.module}</TableCell>
                <TableCell className="text-sm text-gray-900">{entry.entity}</TableCell>
                <TableCell className="text-sm text-gray-600 max-w-xs truncate">
                  {entry.changes}
                </TableCell>
                <TableCell className="text-sm text-gray-600 font-mono text-xs">
                  {entry.ipAddress}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={entry.status === 'success' ? 'default' : 'destructive'}
                    className={
                      entry.status === 'success'
                        ? 'bg-green-100 text-green-800 hover:bg-green-100'
                        : ''
                    }
                  >
                    {entry.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Compliance Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 mt-0.5" />
          <div>
            <p className="text-sm text-blue-900">
              This audit log is compliant with FDA 21 CFR Part 11, EU GMP Annex 11, and ISO 13485 requirements.
            </p>
            <p className="text-xs text-blue-700 mt-1">
              All entries are tamper-proof and retained for the regulatory required period (minimum 5 years).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
