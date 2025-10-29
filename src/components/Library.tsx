import { Library as LibraryIcon, Star, LayoutGrid, Table } from 'lucide-react';
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

const products = [
  {
    id: 1,
    name: 'Flour Powder',
    featured: true,
    image: 'https://images.unsplash.com/photo-1661551428485-d4099df4982e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG91ciUyMHBvd2RlcnxlbnwxfHx8fDE3NjE3MzQ4NjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: [
      'Quick access to information.',
      'Facilitated learning.',
      'Breaking the distance barrier.',
      'Simplifying tasks.',
      'Providing entertainment.',
      'Increased productivity and efficiency...'
    ]
  },
  {
    id: 2,
    name: 'Dry Gay',
    featured: true,
    image: 'https://images.unsplash.com/photo-1690047413034-9098ddfe283e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXklMjBiYWxlcyUyMGZpZWxkfGVufDF8fHx8MTc2MTczNDg2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: [
      'Quick access to information.',
      'Facilitated learning.',
      'Breaking the distance barrier.',
      'Simplifying tasks.',
      'Providing entertainment.',
      'Increased productivity and efficiency...'
    ]
  },
  {
    id: 3,
    name: 'Dry Corn',
    featured: true,
    image: 'https://images.unsplash.com/photo-1701326786998-3688beceadda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JuJTIwa2VybmVsc3xlbnwxfHx8fDE3NjE3MzQ4NjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: [
      'Quick access to information.',
      'Facilitated learning.',
      'Breaking the distance barrier.',
      'Simplifying tasks.',
      'Providing entertainment.',
      'Increased productivity and efficiency...'
    ]
  },
  {
    id: 4,
    name: 'Triticale',
    featured: true,
    image: 'https://images.unsplash.com/photo-1714168526009-2d0d333640d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGVhdCUyMGdyYWluc3xlbnwxfHx8fDE3NjE3MDg0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: [
      'Quick access to information.',
      'Facilitated learning.',
      'Breaking the distance barrier.',
      'Simplifying tasks.',
      'Providing entertainment.',
      'Increased productivity and efficiency...'
    ]
  },
  {
    id: 5,
    name: 'Soyhulls',
    featured: true,
    image: 'https://images.unsplash.com/photo-1600243640509-49a3755d7a28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3liZWFuJTIwc2VlZHN8ZW58MXx8fHwxNzYxNzM0ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: [
      'Quick access to information.',
      'Facilitated learning.',
      'Breaking the distance barrier.',
      'Simplifying tasks.',
      'Providing entertainment.',
      'Increased productivity and efficiency...'
    ]
  },
  {
    id: 6,
    name: 'Coffee',
    featured: true,
    image: 'https://images.unsplash.com/photo-1675306408031-a9aad9f23308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFuc3xlbnwxfHx8fDE3NjE3Mjc3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: [
      'Quick access to information.',
      'Facilitated learning.',
      'Breaking the distance barrier.',
      'Simplifying tasks.',
      'Providing entertainment.',
      'Increased productivity and efficiency...'
    ]
  },
];

export function Library() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LibraryIcon className="w-5 h-5 text-cyan-600" />
          <h1 className="text-gray-800">Library</h1>
        </div>
        
        <div className="flex items-center gap-2">
          <Select defaultValue="food">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Food" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="food">Food</SelectItem>
              <SelectItem value="pharma">Pharma</SelectItem>
              <SelectItem value="chemical">Chemical</SelectItem>
            </SelectContent>
          </Select>
          
          <Select defaultValue="cereals">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Cereals" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cereals">Cereals</SelectItem>
              <SelectItem value="dairy">Dairy</SelectItem>
              <SelectItem value="bakery">Bakery</SelectItem>
            </SelectContent>
          </Select>
          
          <Input placeholder="Food" className="w-48" />
          
          <div className="flex items-center gap-1 bg-gray-100 rounded p-1">
            <button className="p-1.5 hover:bg-white rounded transition-colors">
              <Table className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-1.5 bg-white rounded shadow-sm">
              <LayoutGrid className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative h-40">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.featured && (
                <div className="absolute top-3 right-3 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  Featured
                </div>
              )}
            </div>
            
            <div className="p-5">
              <h3 className="text-gray-800 mb-3">{product.name}</h3>
              
              <div className="mb-4">
                <div className="text-xs text-gray-500 uppercase mb-2">Description</div>
                <ul className="space-y-1 text-sm text-gray-600">
                  {product.description.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
