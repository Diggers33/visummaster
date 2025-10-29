import { TrendingUp, FolderOpen, Save, Send, X, Edit2, Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

const characteristics = [
  'Facilitated learning.',
  'Breaking the distance barrier.',
  'Simplifying tasks.',
  'Providing entertainment.',
  'Increased productivity and efficiency.',
  'Increased life expectancy.',
];

export function Marketing() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-cyan-600" />
          <h1 className="text-gray-800">Marketing</h1>
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
        </div>
      </div>

      {/* Draft Form */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-gray-800 mb-6">Draft</h2>
        
        <div className="space-y-6">
          {/* Row 1 - Image and Model Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label className="text-xs text-gray-500 uppercase mb-2">Add Image</Label>
              <div className="relative">
                <Input defaultValue="../Corn_Library.jpg" className="pr-10" />
                <FolderOpen className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>
            
            <div>
              <Label className="text-xs text-gray-500 uppercase mb-2">Model Name</Label>
              <Input defaultValue="Corn Protein 2025" />
            </div>
          </div>

          {/* Row 2 - Description and Characteristics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label className="text-xs text-gray-500 uppercase mb-2">Description</Label>
              <Textarea 
                className="min-h-[200px] resize-none"
                defaultValue="Lorem ipsum dolor sit amet consectetur adipiscing elit. Donec eleifend ac nibh tincidunt venenatis. Maecenas convallis quis gravida risus. Aliquam nisl in nulla in malesuada vehicula vel massa. Curabitur eget tortor accumsan dolor elementum lacinia nec sed justo. Fusce ac magna quis enim euismod vehicula. Duis eu ullamcorper eros. Curabitur at eros metus. In blandit ultrices placerat dolor a dapibus. Etiam odio arcu, vulputate nec ornare id, varius quam. Morbi scelerisque vitae dolor eget porttitor. Aliquam tristique nibh at mollis egestas."
              />
            </div>
            
            <div>
              <Label className="text-xs text-gray-500 uppercase mb-2">Characteristics</Label>
              <div className="space-y-2">
                {characteristics.map((char, index) => (
                  <div key={index} className="flex items-center justify-between gap-2 p-2 border border-gray-200 rounded">
                    <span className="text-sm text-gray-700 flex-1">{char}</span>
                    <div className="flex gap-1">
                      <button className="text-gray-400 hover:text-cyan-600">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="text-gray-400 hover:text-red-600">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full gap-2 border-dashed">
                  <Plus className="w-4 h-4" />
                  Add Characteristic
                </Button>
              </div>
            </div>
          </div>

          {/* Row 3 - 4 columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <Label className="text-xs text-gray-500 uppercase mb-2">Sector</Label>
              <Select defaultValue="food">
                <SelectTrigger>
                  <SelectValue placeholder="Food" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="food">Food</SelectItem>
                  <SelectItem value="pharma">Pharma</SelectItem>
                  <SelectItem value="chemical">Chemical</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label className="text-xs text-gray-500 uppercase mb-2">Family Product</Label>
              <Select defaultValue="cereals">
                <SelectTrigger>
                  <SelectValue placeholder="Cereals" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cereals">Cereals</SelectItem>
                  <SelectItem value="dairy">Dairy</SelectItem>
                  <SelectItem value="bakery">Bakery</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label className="text-xs text-gray-500 uppercase mb-2">Product</Label>
              <Select defaultValue="corn">
                <SelectTrigger>
                  <SelectValue placeholder="Corn" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="corn">Corn</SelectItem>
                  <SelectItem value="wheat">Wheat</SelectItem>
                  <SelectItem value="rice">Rice</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label className="text-xs text-gray-500 uppercase mb-2">Parameter</Label>
              <Select defaultValue="protein">
                <SelectTrigger>
                  <SelectValue placeholder="Protein" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="protein">Protein</SelectItem>
                  <SelectItem value="moisture">Moisture</SelectItem>
                  <SelectItem value="fat">Fat</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Row 4 - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label className="text-xs text-gray-500 uppercase mb-2">Device</Label>
              <Select defaultValue="visum-palm">
                <SelectTrigger>
                  <SelectValue placeholder="Visum Palm™" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="visum-palm">Visum Palm™</SelectItem>
                  <SelectItem value="visum-inline">Visum Inline</SelectItem>
                  <SelectItem value="visum-hsi">Visum HSI</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label className="text-xs text-gray-500 uppercase mb-2">Date</Label>
              <Input type="text" defaultValue="04/03/2025" />
            </div>
            
            <div>
              <Label className="text-xs text-gray-500 uppercase mb-2">Update Model</Label>
              <Select defaultValue="iris-sl">
                <SelectTrigger>
                  <SelectValue placeholder="IRIS SL" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="iris-sl">IRIS SL</SelectItem>
                  <SelectItem value="iris-plus">IRIS Plus</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Row 5 - Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
            <div>
              <Label className="text-xs text-gray-500 uppercase mb-2">Min</Label>
              <Input defaultValue="7.78" />
            </div>
            
            <div>
              <Label className="text-xs text-gray-500 uppercase mb-2">Max</Label>
              <Input defaultValue="10.44" />
            </div>
            
            <div>
              <Label className="text-xs text-gray-500 uppercase mb-2">Range</Label>
              <Input defaultValue="0.37" />
            </div>
            
            <div>
              <Label className="text-xs text-gray-500 uppercase mb-2">Sec(rep)</Label>
              <Input defaultValue="0.37" />
            </div>
            
            <div>
              <Label className="text-xs text-gray-500 uppercase mb-2">R2 (Est.)</Label>
              <Input defaultValue="0.96" />
            </div>
            
            <div>
              <Label className="text-xs text-gray-500 uppercase mb-2">RSE (False)</Label>
              <Input defaultValue="0.85" />
            </div>
            
            <div>
              <Label className="text-xs text-gray-500 uppercase mb-2">Bias (UMB)</Label>
              <Input defaultValue="0.05" />
            </div>
          </div>

          {/* Row 6 - File paths */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label className="text-xs text-gray-500 uppercase mb-2">Upload Training</Label>
              <div className="relative">
                <Input defaultValue="../catten/model/corn/protein" className="pr-10" />
                <FolderOpen className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>
            
            <div>
              <Label className="text-xs text-gray-500 uppercase mb-2">Upload Model</Label>
              <div className="relative">
                <Input defaultValue="../Library/Models" className="pr-10" />
                <FolderOpen className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline" className="gap-2 text-red-600 border-red-600 hover:bg-red-50">
              <X className="w-4 h-4" />
              Reject
            </Button>
            
            <Button variant="outline" className="gap-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50">
              <Save className="w-4 h-4" />
              View Draft
            </Button>
            
            <Button className="bg-cyan-600 hover:bg-cyan-700 gap-2">
              <Send className="w-4 h-4" />
              Aprove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
