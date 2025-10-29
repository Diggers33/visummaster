import { useState } from 'react';
import { 
  Folder, 
  File, 
  FileText, 
  FileSpreadsheet, 
  FileImage,
  Upload,
  Search,
  MoreVertical,
  Grid3x3,
  List,
  Download,
  Trash2,
  Share2,
  FolderOpen,
  ChevronRight,
  Filter
} from 'lucide-react';
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

interface FileItem {
  id: string;
  name: string;
  type: 'pdf' | 'doc' | 'xls' | 'ppt' | 'jpg' | 'png';
  date: string;
  size: string;
  folder?: string;
}

interface FolderItem {
  id: string;
  name: string;
  fileCount: number;
  color: string;
}

const folders: FolderItem[] = [
  { id: '1', name: 'Legal Files', fileCount: 24, color: 'bg-blue-100 text-blue-700' },
  { id: '2', name: 'Devices', fileCount: 156, color: 'bg-cyan-100 text-cyan-700' },
  { id: '3', name: 'Datasheets', fileCount: 89, color: 'bg-purple-100 text-purple-700' },
  { id: '4', name: 'Logos', fileCount: 12, color: 'bg-green-100 text-green-700' },
];

const files: FileItem[] = [
  {
    id: '1',
    name: 'Datasheet_VisumPalmTM.pdf',
    type: 'pdf',
    date: '03/04/2025, 11:59',
    size: '253 KB',
    folder: 'Visum Palm'
  },
  {
    id: '2',
    name: 'Manual_VisumPalmTM.doc',
    type: 'doc',
    date: '03/04/2025, 11:59',
    size: '128 KB',
    folder: 'Visum Palm'
  },
  {
    id: '3',
    name: 'Library Cereals_VisumPalmTM.xls',
    type: 'xls',
    date: '03/04/2025, 11:59',
    size: '96 KB',
    folder: 'Visum Palm'
  },
  {
    id: '4',
    name: 'Presentation_VisumPalmTM.ppt',
    type: 'ppt',
    date: '03/04/2025, 11:59',
    size: '457 KB',
    folder: 'Visum Palm'
  },
  {
    id: '5',
    name: 'VisumPalmTM_Cover.jpg',
    type: 'jpg',
    date: '03/04/2025, 11:59',
    size: '758 KB',
    folder: 'Visum Palm'
  },
  {
    id: '6',
    name: 'VisumPalmTM_Introduction.jpg',
    type: 'jpg',
    date: '03/04/2025, 11:59',
    size: '750.345 KB',
    folder: 'Visum Palm'
  },
];

const getFileIcon = (type: string) => {
  switch (type) {
    case 'pdf':
      return <FileText className="w-4 h-4 text-red-500" />;
    case 'doc':
      return <FileText className="w-4 h-4 text-blue-500" />;
    case 'xls':
      return <FileSpreadsheet className="w-4 h-4 text-green-600" />;
    case 'ppt':
      return <File className="w-4 h-4 text-orange-500" />;
    case 'jpg':
    case 'png':
      return <FileImage className="w-4 h-4 text-purple-500" />;
    default:
      return <File className="w-4 h-4 text-gray-500" />;
  }
};

const formatFileSize = (size: string) => {
  return <span className="tabular-nums">{size}</span>;
};

export function Repository() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [currentFolder, setCurrentFolder] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-cyan-100 rounded-lg">
            <FolderOpen className="w-5 h-5 text-cyan-600" />
          </div>
          <div>
            <h1 className="text-gray-900">Repository</h1>
            <p className="text-sm text-gray-500">Manage documents and files</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Filters */}
          <Select defaultValue="all-types">
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="File Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-types">All Types</SelectItem>
              <SelectItem value="pdf">PDF Documents</SelectItem>
              <SelectItem value="doc">Word Documents</SelectItem>
              <SelectItem value="xls">Spreadsheets</SelectItem>
              <SelectItem value="images">Images</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="recent">
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="name">Name (A-Z)</SelectItem>
              <SelectItem value="size">File Size</SelectItem>
              <SelectItem value="type">File Type</SelectItem>
            </SelectContent>
          </Select>

          {/* Search */}
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input placeholder="Search files..." className="pl-10" />
          </div>

          {/* Upload Button */}
          <Button className="bg-cyan-600 hover:bg-cyan-700 gap-2">
            <Upload className="w-4 h-4" />
            Upload File
          </Button>

          {/* View Toggle */}
          <div className="flex items-center gap-1 p-1 bg-gray-100 rounded-lg">
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('list')}
              className={viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}
            >
              <List className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className={viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}
            >
              <Grid3x3 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Folders Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-800">Folders</h3>
          <Button variant="ghost" size="sm" className="text-cyan-600 hover:text-cyan-700">
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {folders.map((folder) => (
            <div
              key={folder.id}
              className="group bg-white border border-gray-200 rounded-lg p-4 hover:border-cyan-300 hover:shadow-md transition-all cursor-pointer"
              onClick={() => setCurrentFolder(folder.name)}
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`p-2.5 rounded-lg ${folder.color}`}>
                  <Folder className="w-5 h-5" />
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <FolderOpen className="w-4 h-4 mr-2" />
                      Open
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <h4 className="text-gray-900 mb-1">{folder.name}</h4>
              <p className="text-xs text-gray-500">{folder.fileCount} files</p>
            </div>
          ))}
        </div>
      </div>

      {/* Files Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h3 className="text-gray-800">Files</h3>
            {currentFolder && (
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <ChevronRight className="w-4 h-4" />
                <Badge variant="outline" className="gap-1.5">
                  <Folder className="w-3 h-3" />
                  {currentFolder}
                </Badge>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">{files.length} items</span>
            <Button variant="ghost" size="sm" className="gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </div>
        </div>

        {/* File List View */}
        {viewMode === 'list' && (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="w-[50%]">Name</TableHead>
                  <TableHead className="w-[25%]">Date</TableHead>
                  <TableHead className="w-[15%] text-right">Size</TableHead>
                  <TableHead className="w-[10%]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {files.map((file) => (
                  <TableRow key={file.id} className="group hover:bg-gray-50">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        {getFileIcon(file.type)}
                        <span className="text-sm text-gray-900">{file.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      {file.date}
                    </TableCell>
                    <TableCell className="text-sm text-gray-600 text-right">
                      {formatFileSize(file.size)}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8"
                          >
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Share2 className="w-4 h-4 mr-2" />
                            Share
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {files.map((file) => (
              <div
                key={file.id}
                className="group bg-white border border-gray-200 rounded-lg p-4 hover:border-cyan-300 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 p-4 bg-gray-50 rounded-lg group-hover:bg-cyan-50 transition-colors">
                    {getFileIcon(file.type)}
                  </div>
                  <h4 className="text-sm text-gray-900 mb-1 line-clamp-2 w-full">
                    {file.name}
                  </h4>
                  <p className="text-xs text-gray-500 tabular-nums">{file.size}</p>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8"
                      >
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Storage Info */}
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="text-gray-900 mb-1">Storage Usage</h4>
            <p className="text-sm text-gray-600">
              <span className="tabular-nums">24.8 GB</span> of <span className="tabular-nums">100 GB</span> used
            </p>
          </div>
          <Button variant="outline" size="sm" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50">
            Upgrade Storage
          </Button>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2.5 rounded-full" style={{ width: '24.8%' }} />
        </div>
        
        <div className="grid grid-cols-4 gap-4 mt-4 pt-4 border-t border-cyan-200">
          <div>
            <p className="text-xs text-gray-500 mb-1">Documents</p>
            <p className="text-sm tabular-nums text-gray-900">12.4 GB</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Images</p>
            <p className="text-sm tabular-nums text-gray-900">8.2 GB</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Data Files</p>
            <p className="text-sm tabular-nums text-gray-900">3.5 GB</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Other</p>
            <p className="text-sm tabular-nums text-gray-900">0.7 GB</p>
          </div>
        </div>
      </div>
    </div>
  );
}
