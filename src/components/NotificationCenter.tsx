import { Bell, AlertTriangle, CheckCircle, Info, X, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './ui/popover';

interface Notification {
  id: string;
  type: 'alert' | 'warning' | 'info' | 'success';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  priority: 'high' | 'medium' | 'low';
}

const notifications: Notification[] = [
  {
    id: '1',
    type: 'alert',
    title: 'Device Calibration Overdue',
    message: 'VisumPalm VP1005202418S calibration is 3 days overdue',
    timestamp: '2 hours ago',
    read: false,
    priority: 'high',
  },
  {
    id: '2',
    type: 'warning',
    title: 'Model Approval Pending',
    message: 'Corn Protein 2025 model requires approval from QA Manager',
    timestamp: '5 hours ago',
    read: false,
    priority: 'medium',
  },
  {
    id: '3',
    type: 'info',
    title: 'GMP Certification Expiring',
    message: 'Grupo Alaba GMP certification expires in 30 days',
    timestamp: '1 day ago',
    read: true,
    priority: 'medium',
  },
  {
    id: '4',
    type: 'success',
    title: 'Model Validation Complete',
    message: 'Wheat Moisture 2024 model passed all validation tests',
    timestamp: '2 days ago',
    read: true,
    priority: 'low',
  },
];

export function NotificationCenter() {
  const unreadCount = notifications.filter(n => !n.read).length;

  const getIcon = (type: string) => {
    switch (type) {
      case 'alert':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      default:
        return <Info className="w-4 h-4 text-blue-500" />;
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5 text-gray-600" />
          {unreadCount > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-red-500 text-white text-xs">
              {unreadCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-0" align="end">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h3 className="text-gray-800">Notifications</h3>
            <p className="text-xs text-gray-500">{unreadCount} unread messages</p>
          </div>
          <Button variant="ghost" size="sm" className="text-xs">
            Mark all read
          </Button>
        </div>
        
        <ScrollArea className="h-[400px]">
          <div className="divide-y divide-gray-100">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                  !notification.read ? 'bg-cyan-50/30' : ''
                }`}
              >
                <div className="flex gap-3">
                  <div className="mt-0.5">{getIcon(notification.type)}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="text-sm text-gray-800">{notification.title}</p>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-cyan-500 rounded-full flex-shrink-0 mt-1" />
                      )}
                    </div>
                    <p className="text-xs text-gray-600 mb-2">{notification.message}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Clock className="w-3 h-3" />
                      {notification.timestamp}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        
        <div className="p-3 border-t border-gray-200 text-center">
          <Button variant="ghost" className="text-xs text-cyan-600 hover:text-cyan-700">
            View All Notifications
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
