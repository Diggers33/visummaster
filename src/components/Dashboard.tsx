import { BarChart3 } from 'lucide-react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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

export function Dashboard() {
  const totalClients = planData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="space-y-6">
      {/* Top Row - Clients Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Clients by Plan */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5 text-cyan-600" />
            <h3 className="text-gray-700">Clients</h3>
          </div>
          <div className="text-xs text-gray-500 mb-4">FILTER: Plan</div>
          
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

        {/* Clients by Continent */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5 text-cyan-600" />
            <h3 className="text-gray-700">Clients</h3>
          </div>
          <div className="text-xs text-gray-500 mb-4">FILTER: Continent</div>
          
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

        {/* Subscriptions Map */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5 text-cyan-600" />
            <h3 className="text-gray-700">Subscriptions</h3>
          </div>
          
          <div className="relative h-[180px] flex items-center justify-center">
            <svg viewBox="0 0 400 200" className="w-full h-full">
              {/* Simplified world map dots */}
              <circle cx="100" cy="60" r="15" fill="#22d3ee" opacity="0.6" />
              <circle cx="150" cy="70" r="12" fill="#22d3ee" opacity="0.6" />
              <circle cx="80" cy="120" r="18" fill="#22d3ee" opacity="0.6" />
              <circle cx="200" cy="65" r="10" fill="#22d3ee" opacity="0.6" />
              <circle cx="280" cy="80" r="14" fill="#22d3ee" opacity="0.6" />
              <circle cx="300" cy="110" r="16" fill="#22d3ee" opacity="0.6" />
              <circle cx="120" cy="150" r="12" fill="#06b6d4" opacity="0.6" />
              <circle cx="240" cy="130" r="11" fill="#06b6d4" opacity="0.6" />
            </svg>
            <div className="absolute top-2 right-2 text-2xl">234</div>
          </div>
          
          <div className="space-y-1 mt-4">
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">EUROPE</span>
              <span>21</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">ASIA</span>
              <span>93</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">OCEANIA</span>
              <span>93</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">AMERICA</span>
              <span>75</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">AFRICA</span>
              <span>45</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sector Devices */}
        <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5 text-cyan-600" />
            <h3 className="text-gray-700">Sector Devices</h3>
          </div>
          
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={sectorDevicesData} layout="vertical" margin={{ left: 100 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" />
              <YAxis dataKey="sector" type="category" tick={{ fontSize: 11 }} />
              <Bar dataKey="value" fill="#06b6d4" radius={[0, 4, 4, 0]} />
              <Bar dataKey="value" fill="#1e3a8a" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Subscriptions Donut */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5 text-cyan-600" />
            <h3 className="text-gray-700">Subscriptions</h3>
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
      </div>
    </div>
  );
}
