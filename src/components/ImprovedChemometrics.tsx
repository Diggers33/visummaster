import { useState } from 'react';
import { Beaker, FolderOpen, Save, Send, Trash2, AlertCircle, CheckCircle2, Clock, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Alert, AlertDescription } from './ui/alert';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from './ui/tabs';

export function ImprovedChemometrics() {
  const [validationStatus, setValidationStatus] = useState<'draft' | 'validating' | 'validated' | 'approved'>('draft');
  
  const getStatusBadge = () => {
    switch (validationStatus) {
      case 'draft':
        return <Badge variant="outline" className="gap-1"><Clock className="w-3 h-3" />Draft</Badge>;
      case 'validating':
        return <Badge className="bg-blue-100 text-blue-800 gap-1"><Clock className="w-3 h-3" />Under Validation</Badge>;
      case 'validated':
        return <Badge className="bg-green-100 text-green-800 gap-1"><CheckCircle2 className="w-3 h-3" />Validated</Badge>;
      case 'approved':
        return <Badge className="bg-cyan-600 text-white gap-1"><CheckCircle2 className="w-3 h-3" />Approved</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Beaker className="w-5 h-5 text-cyan-600" />
          <h1 className="text-gray-800">Chemometrics Model Management</h1>
          {getStatusBadge()}
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
          
          <Input placeholder="Search models..." className="w-48" />
          
          <Button className="bg-cyan-600 hover:bg-cyan-700 gap-2">
            <span className="text-lg">+</span>
            Add Model
          </Button>
        </div>
      </div>

      {/* Validation Alerts */}
      {validationStatus === 'draft' && (
        <Alert className="bg-yellow-50 border-yellow-200">
          <AlertCircle className="h-4 w-4 text-yellow-600" />
          <AlertDescription className="text-yellow-800">
            This model is in draft status. Complete all required fields and run validation tests before submitting for approval.
          </AlertDescription>
        </Alert>
      )}

      {validationStatus === 'validated' && (
        <Alert className="bg-blue-50 border-blue-200">
          <AlertCircle className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-blue-800">
            Model validation completed successfully. Ready for QA Manager approval. All FDA 21 CFR Part 11 requirements met.
          </AlertDescription>
        </Alert>
      )}

      {/* New Model Form */}
      <div className="bg-white rounded-lg shadow-sm">
        <Tabs defaultValue="general" className="w-full">
          <div className="border-b border-gray-200 px-6 pt-4">
            <TabsList>
              <TabsTrigger value="general">General Information</TabsTrigger>
              <TabsTrigger value="parameters">Parameters & Statistics</TabsTrigger>
              <TabsTrigger value="validation">Validation & Audit</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="general" className="p-6 space-y-6">
            {/* Model Name */}
            <div>
              <Label className="text-xs text-gray-500 uppercase mb-2">
                Model Name <span className="text-red-500">*</span>
              </Label>
              <Input 
                defaultValue="Corn Protein 2025" 
                className="max-w-2xl" 
                required
              />
              <p className="text-xs text-gray-500 mt-1">Must be unique and descriptive</p>
            </div>

            {/* Row 1 - 4 columns */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <Label className="text-xs text-gray-500 uppercase mb-2">
                  Sector <span className="text-red-500">*</span>
                </Label>
                <Select defaultValue="food" required>
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
                <Label className="text-xs text-gray-500 uppercase mb-2">
                  Family Product <span className="text-red-500">*</span>
                </Label>
                <Select defaultValue="cereals" required>
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
                <Label className="text-xs text-gray-500 uppercase mb-2">
                  Product Library <span className="text-red-500">*</span>
                </Label>
                <Select defaultValue="corn" required>
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
                <Label className="text-xs text-gray-500 uppercase mb-2">
                  Parameter <span className="text-red-500">*</span>
                </Label>
                <Select defaultValue="protein" required>
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

            {/* Row 2 - 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label className="text-xs text-gray-500 uppercase mb-2">
                  Device <span className="text-red-500">*</span>
                </Label>
                <Select defaultValue="visum-palm" required>
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
                <Label className="text-xs text-gray-500 uppercase mb-2">
                  Creation Date <span className="text-red-500">*</span>
                </Label>
                <Input type="date" defaultValue="2025-03-04" required />
              </div>
              
              <div>
                <Label className="text-xs text-gray-500 uppercase mb-2">Model Owner</Label>
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

            {/* Description */}
            <div>
              <Label className="text-xs text-gray-500 uppercase mb-2">Model Description</Label>
              <Textarea 
                className="min-h-[100px] resize-none"
                placeholder="Describe the purpose, scope, and application of this model..."
              />
            </div>
          </TabsContent>

          <TabsContent value="parameters" className="p-6 space-y-6">
            {/* Row 3 - Statistics */}
            <div>
              <h3 className="text-gray-800 mb-4">Statistical Performance Metrics</h3>
              <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
                <div>
                  <Label className="text-xs text-gray-500 uppercase mb-2">
                    Min <span className="text-red-500">*</span>
                  </Label>
                  <Input defaultValue="7.78" type="number" step="0.01" required />
                </div>
                
                <div>
                  <Label className="text-xs text-gray-500 uppercase mb-2">
                    Max <span className="text-red-500">*</span>
                  </Label>
                  <Input defaultValue="10.44" type="number" step="0.01" required />
                </div>
                
                <div>
                  <Label className="text-xs text-gray-500 uppercase mb-2">Range</Label>
                  <Input defaultValue="0.37" type="number" step="0.01" disabled />
                </div>
                
                <div>
                  <Label className="text-xs text-gray-500 uppercase mb-2">
                    SEC(rep) <span className="text-red-500">*</span>
                  </Label>
                  <Input defaultValue="0.37" type="number" step="0.01" required />
                </div>
                
                <div>
                  <Label className="text-xs text-gray-500 uppercase mb-2">
                    R² (Est.) <span className="text-red-500">*</span>
                  </Label>
                  <Input defaultValue="0.96" type="number" step="0.01" max="1" required />
                  {parseFloat("0.96") >= 0.95 && (
                    <CheckCircle2 className="w-4 h-4 text-green-500 absolute right-2 top-8" />
                  )}
                </div>
                
                <div>
                  <Label className="text-xs text-gray-500 uppercase mb-2">RMSEP</Label>
                  <Input defaultValue="0.85" type="number" step="0.01" />
                </div>
                
                <div>
                  <Label className="text-xs text-gray-500 uppercase mb-2">Bias</Label>
                  <Input defaultValue="0.05" type="number" step="0.01" />
                </div>
              </div>
            </div>

            {/* Acceptance Criteria */}
            <div className="bg-gray-50 border border-gray-200 rounded p-4">
              <h4 className="text-sm text-gray-700 mb-3">Acceptance Criteria (FDA/GMP)</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600">R² ≥ 0.95</span>
                  <Badge className="bg-green-100 text-green-800">Pass</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600">SEC(rep) ≤ 0.5</span>
                  <Badge className="bg-green-100 text-green-800">Pass</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600">Bias ≤ 0.1</span>
                  <Badge className="bg-green-100 text-green-800">Pass</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600">Sample size ≥ 100</span>
                  <Badge className="bg-green-100 text-green-800">Pass</Badge>
                </div>
              </div>
            </div>

            {/* Row 4 - File paths */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-xs text-gray-500 uppercase mb-2">
                  Training Data Path <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Input defaultValue="../catten/model/corn/protein" className="pr-10" required />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                  >
                    <FolderOpen className="w-4 h-4 text-gray-400" />
                  </Button>
                </div>
              </div>
              
              <div>
                <Label className="text-xs text-gray-500 uppercase mb-2">
                  Model File Path <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Input defaultValue="../Library/Models" className="pr-10" required />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                  >
                    <FolderOpen className="w-4 h-4 text-gray-400" />
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="validation" className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Validation Status */}
              <div>
                <h3 className="text-gray-800 mb-4">Validation Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
                    <span className="text-sm text-gray-700">Data Integrity Check</span>
                    <Badge className="bg-green-100 text-green-800">Passed</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
                    <span className="text-sm text-gray-700">Statistical Validation</span>
                    <Badge className="bg-green-100 text-green-800">Passed</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
                    <span className="text-sm text-gray-700">Cross-Validation</span>
                    <Badge className="bg-green-100 text-green-800">Passed</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
                    <span className="text-sm text-gray-700">Outlier Detection</span>
                    <Badge className="bg-green-100 text-green-800">Passed</Badge>
                  </div>
                </div>
              </div>

              {/* Approval Workflow */}
              <div>
                <h3 className="text-gray-800 mb-4">Approval Workflow</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 border border-gray-200 rounded">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">Model Creator</p>
                      <p className="text-xs text-gray-500">john.davies@artec.com</p>
                      <p className="text-xs text-gray-400">Submitted: 2025-10-25 14:30</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 border border-gray-200 rounded">
                    <Clock className="w-5 h-5 text-blue-500 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">QA Manager Review</p>
                      <p className="text-xs text-gray-500">Pending approval</p>
                      <Button size="sm" className="mt-2 bg-cyan-600 hover:bg-cyan-700">
                        Request Approval
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 border border-gray-200 rounded bg-gray-50">
                    <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-500">Production Release</p>
                      <p className="text-xs text-gray-400">Awaiting approval</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Audit Information */}
            <div className="bg-gray-50 border border-gray-200 rounded p-4">
              <h4 className="text-sm text-gray-700 mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Audit Information
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Version</p>
                  <p className="text-gray-900">v2.1.0</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Created By</p>
                  <p className="text-gray-900">john.davies@artec.com</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Created Date</p>
                  <p className="text-gray-900">2025-10-25 14:30:22 UTC</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Last Modified</p>
                  <p className="text-gray-900">2025-10-29 10:15:45 UTC</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Action Buttons */}
        <div className="flex justify-between items-center p-6 border-t border-gray-200 bg-gray-50">
          <div className="text-xs text-gray-500">
            <span className="text-red-500">*</span> Required fields
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Trash2 className="w-4 h-4" />
              Discard
            </Button>
            
            <Button variant="outline" className="gap-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50">
              <Save className="w-4 h-4" />
              Save Draft
            </Button>
            
            <Button className="bg-cyan-600 hover:bg-cyan-700 gap-2">
              <Send className="w-4 h-4" />
              Submit for Validation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
