import { BarChart3, AlertTriangle, CheckCircle2, Clock, TrendingUp, TrendingDown, Activity } from 'lucide-react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const planData = [
  { name: 'BASIC', value: 21, color: '#1e3a8a' },
  { name: 'SMART', value: 75, color: '#06b6d4' },
  { name: 'GMP', value: 93, color: '#22d3ee' },
  { name: 'EXPERT', value: 45, color: '#a5f3fc' },
];

const continentData = [
  { name: 'EUROPE', value: 56 },
  { name: 'ASIA', value: 27 },
  { name: 'AFRICA', value: 10 },
  { name: 'OCEANIA', value: 15 },
  { name: 'AMERICA', value: 80 },
];

const subscriptionData = [
  { name: 'FOOD', value: 60, color: '#22d3ee' },
  { name: 'PHARMA', value: 40, color: '#06b6d4' },
  { name: 'Other INDUSTRIES', value: 20, color: '#0891b2' },
];

const sectorDevicesData = [
  { sector: 'FOOD', value: 420 },
  { sector: 'PHARMA', value: 310 },
  { sector: 'CHEMICAL', value: 180 },
  { sector: 'NUTRACEUTICS', value: 520 },
  { sector: 'PLASTIC', value: 280 },
  { sector: 'LUMBER', value: 350 },
  { sector: 'TOBACCO INDUSTRY', value: 220 },
];

const complianceData = [
  { month: 'Jan', rate: 96 },
  { month: 'Feb', rate: 97 },
  { month: 'Mar', rate: 95 },
  { month: 'Apr', rate: 98 },
  { month: 'May', rate: 99 },
  { month: 'Jun', rate: 98 },
];

export function ImprovedDashboard() {
  const totalClients = planData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="space-y-6">
      {/* Critical Alerts Banner */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
          <div className="flex-1">
            <h3 className="text-red-900 mb-1">Critical Alerts (3)</h3>
            <div className="space-y-1 text-sm text-red-800">
              <p>• 2 devices require immediate calibration (compliance risk)</p>
              <p>• 1 GMP certification expires in 15 days</p>
              <p>• 4 models pending QA approval for over 7 days</p>
            </div>
          </div>
          <Button size="sm" variant="outline" className="border-red-300 text-red-700 hover:bg-red-100">
            View Details
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-100 rounded">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
              +2.3%
            </Badge>
          </div>
          <h3 className="text-2xl text-gray-900 mb-1">98.5%</h3>
          <p className="text-sm text-gray-600">Compliance Rate</p>
          <p className="text-xs text-gray-500 mt-2">Last 30 days</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-orange-100 rounded">
              <Clock className="w-5 h-5 text-orange-600" />
            </div>
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">
              Urgent
            </Badge>
          </div>
          <h3 className="text-2xl text-gray-900 mb-1">7</h3>
          <p className="text-sm text-gray-600">Calibrations Due</p>
          <p className="text-xs text-gray-500 mt-2">Next 14 days</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-100 rounded">
              <Activity className="w-5 h-5 text-blue-600" />
            </div>
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
              +15%
            </Badge>
          </div>
          <h3 className="text-2xl text-gray-900 mb-1">1,247</h3>
          <p className="text-sm text-gray-600">Active Devices</p>
          <p className="text-xs text-gray-500 mt-2">Across all clients</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-100 rounded">
              <BarChart3 className="w-5 h-5 text-purple-600" />
            </div>
            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">
              23 Active
            </Badge>
          </div>
          <h3 className="text-2xl text-gray-900 mb-1">156</h3>
          <p className="text-sm text-gray-600">Validated Models</p>
          <p className="text-xs text-gray-500 mt-2">Production ready</p>
        </div>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Clients by Plan */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5 text-cyan-600" />
            <h3 className="text-gray-700">Clients by Plan</h3>
          </div>
          
          <div className="flex items-center justify-between">
            <ResponsiveContainer width="60%" height={180}>
              <PieChart>
                <Pie
                  data={planData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {planData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            
            <div className="space-y-2">
              {planData.map((item) => (
                <div key={item.name} className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }} />
                    <span className="text-xs text-gray-600">{item.name}</span>
                  </div>
                  <span className="text-sm">{item.value}</span>
                </div>
              ))}
              <div className="pt-2 border-t border-gray-200 mt-2">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs">TOTAL</span>
                  <span>{totalClients}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Trend */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <h3 className="text-gray-700">Compliance Trend</h3>
            </div>
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
              Above Target
            </Badge>
          </div>
          
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={complianceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis domain={[90, 100]} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="rate"
                stroke="#06b6d4"
                strokeWidth={2}
                dot={{ fill: '#06b6d4', r: 4 }}
              />
              <Line
                type="monotone"
                dataKey={() => 95}
                stroke="#ef4444"
                strokeWidth={1}
                strokeDasharray="5 5"
                dot={false}
                name="Target"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Clients by Continent */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5 text-cyan-600" />
            <h3 className="text-gray-700">Clients by Region</h3>
          </div>
          
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={continentData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tick={false} />
              <YAxis />
              <Bar dataKey="value" fill="#06b6d4" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          
          <div className="flex justify-around mt-2">
            {continentData.map((item) => (
              <div key={item.name} className="text-center">
                <div className="text-sm">{item.value}</div>
                <div className="text-xs text-gray-500">{item.name.slice(0, 2)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Subscriptions by Industry */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5 text-cyan-600" />
            <h3 className="text-gray-700">Industry Distribution</h3>
          </div>
          
          <div className="flex items-center justify-center mb-4">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={subscriptionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={0}
                  dataKey="value"
                >
                  {subscriptionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="space-y-2">
            {subscriptionData.map((item) => (
              <div key={item.name} className="flex items-center gap-3">
                <div className="flex-1 bg-gray-100 rounded overflow-hidden">
                  <div 
                    className="h-8 flex items-center px-3 text-xs text-white"
                    style={{ width: `${item.value}%`, backgroundColor: item.color }}
                  >
                    {item.value}%
                  </div>
                </div>
                <span className="text-xs text-gray-600 w-24">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-5 h-5 text-cyan-600" />
            <h3 className="text-gray-700">System Health</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-600">Device Uptime</span>
                <span className="text-sm text-green-600">99.8%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '99.8%' }} />
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-600">Data Quality Score</span>
                <span className="text-sm text-green-600">96.5%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '96.5%' }} />
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-600">Model Accuracy Avg</span>
                <span className="text-sm text-cyan-600">97.2%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '97.2%' }} />
              </div>
            </div>
            
            <div className="pt-2 border-t border-gray-200">
              <div className="text-xs text-gray-500 mb-2">Recent Activity</div>
              <div className="space-y-1 text-xs text-gray-700">
                <p>• 23 scans completed today</p>
                <p>• 5 models validated this week</p>
                <p>• 2 new devices registered</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sector Devices */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="w-5 h-5 text-cyan-600" />
          <h3 className="text-gray-700">Devices by Sector</h3>
        </div>
        
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={sectorDevicesData} layout="vertical" margin={{ left: 120 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" />
            <YAxis dataKey="sector" type="category" tick={{ fontSize: 11 }} />
            <Tooltip />
            <Bar dataKey="value" fill="#06b6d4" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
