import { CreditCard, Download, Plus, Edit, Trash2, Check, Calendar, TrendingUp, AlertCircle, Building2, FileText, DollarSign, Clock, CheckCircle2, User, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Import VisumMaster logo
import visumMasterLogo from 'figma:asset/cdb43182cb144d4675600df51482a2a0beff7076.png';

interface Invoice {
  id: string;
  number: string;
  date: string;
  amount: string;
  status: 'paid' | 'pending' | 'overdue';
  period: string;
  downloadUrl: string;
}

interface PaymentMethod {
  id: string;
  type: 'card' | 'bank' | 'invoice';
  last4?: string;
  brand?: string;
  expiryMonth?: string;
  expiryYear?: string;
  bankName?: string;
  accountLast4?: string;
  isDefault: boolean;
}

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: string;
  status: 'completed' | 'pending' | 'failed';
  method: string;
}

export function BillingPayments() {
  // Mock subscription data
  const subscription = {
    plan: 'Plus',
    status: 'active',
    amount: '€2,450',
    billingCycle: 'Annual',
    nextBillingDate: 'January 14, 2025',
    daysUntilRenewal: 77,
    autoRenew: true,
    devices: {
      used: 4,
      included: 10,
      additional: 0
    },
    users: {
      used: 24,
      included: 30,
      additional: 0
    },
    storage: {
      used: 340,
      included: 500,
      unit: 'GB'
    }
  };

  const billingContact = {
    name: 'Thiago Souza',
    email: 'comercial@loriat.pt',
    phone: '+351 21 234 5678',
    company: 'Europastry',
    address: 'Praceta Anibal Faustino, 2 - 4º Esq.'
  };

  const paymentMethods: PaymentMethod[] = [
    {
      id: '1',
      type: 'card',
      last4: '4242',
      brand: 'Visa',
      expiryMonth: '12',
      expiryYear: '2025',
      isDefault: true
    },
    {
      id: '2',
      type: 'bank',
      bankName: 'Banco de Portugal',
      accountLast4: '8901',
      isDefault: false
    }
  ];

  const invoices: Invoice[] = [
    {
      id: '1',
      number: 'INV-2024-001',
      date: 'Jan 14, 2024',
      amount: '€2,450.00',
      status: 'paid',
      period: 'Jan 2024 - Jan 2025',
      downloadUrl: '#'
    },
    {
      id: '2',
      number: 'INV-2023-012',
      date: 'Dec 15, 2023',
      amount: '€650.00',
      status: 'paid',
      period: 'Device Setup Fee',
      downloadUrl: '#'
    },
    {
      id: '3',
      number: 'INV-2023-011',
      date: 'Jan 14, 2023',
      amount: '€2,100.00',
      status: 'paid',
      period: 'Jan 2023 - Jan 2024',
      downloadUrl: '#'
    }
  ];

  const transactions: Transaction[] = [
    {
      id: '1',
      date: 'Jan 14, 2024',
      description: 'Annual subscription renewal - Plus Plan',
      amount: '€2,450.00',
      status: 'completed',
      method: 'Visa •••• 4242'
    },
    {
      id: '2',
      date: 'Dec 15, 2023',
      description: 'Device setup and configuration',
      amount: '€650.00',
      status: 'completed',
      method: 'Visa •••• 4242'
    },
    {
      id: '3',
      date: 'Jan 14, 2023',
      description: 'Annual subscription - Plus Plan',
      amount: '€2,100.00',
      status: 'completed',
      method: 'Visa •••• 4242'
    }
  ];

  const getStatusBadge = (status: Invoice['status']) => {
    switch (status) {
      case 'paid':
        return <Badge className="bg-green-100 text-green-700 border-green-200">Paid</Badge>;
      case 'pending':
        return <Badge className="bg-amber-100 text-amber-700 border-amber-200">Pending</Badge>;
      case 'overdue':
        return <Badge className="bg-red-100 text-red-700 border-red-200">Overdue</Badge>;
    }
  };

  const getTransactionStatusIcon = (status: Transaction['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-4 h-4 text-green-600" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-amber-600" />;
      case 'failed':
        return <AlertCircle className="w-4 h-4 text-red-600" />;
    }
  };

  const getPaymentMethodIcon = (method: PaymentMethod) => {
    if (method.type === 'card') {
      return <CreditCard className="w-5 h-5 text-gray-400" />;
    } else if (method.type === 'bank') {
      return <Building2 className="w-5 h-5 text-gray-400" />;
    }
    return <FileText className="w-5 h-5 text-gray-400" />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-gray-900 mb-1">Billing & Payments</h1>
              <p className="text-gray-600">Manage your subscription, payment methods, and invoices</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export All
              </Button>
              <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Add Payment Method
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Current Subscription Overview */}
      <div className="px-8 py-8 bg-white border-b border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Plan Card */}
          <Card className="p-6 col-span-1 lg:col-span-2">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-gray-900">Current Plan: {subscription.plan}</h3>
                  <Badge className="bg-green-100 text-green-700 border-green-200">
                    {subscription.status === 'active' ? 'Active' : subscription.status}
                  </Badge>
                </div>
                <p className="text-gray-600">Billed {subscription.billingCycle.toLowerCase()}</p>
              </div>
              <div className="text-right">
                <div className="text-3xl text-gray-900 mb-1">{subscription.amount}</div>
                <div className="text-sm text-gray-500">per year</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {/* Devices */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-xs text-gray-500 uppercase mb-2">Devices</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl text-gray-900">{subscription.devices.used}</span>
                  <span className="text-sm text-gray-500">/ {subscription.devices.included}</span>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                  <div 
                    className="bg-cyan-500 h-1.5 rounded-full" 
                    style={{ width: `${(subscription.devices.used / subscription.devices.included) * 100}%` }}
                  />
                </div>
              </div>

              {/* Users */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-xs text-gray-500 uppercase mb-2">Users</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl text-gray-900">{subscription.users.used}</span>
                  <span className="text-sm text-gray-500">/ {subscription.users.included}</span>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                  <div 
                    className="bg-cyan-500 h-1.5 rounded-full" 
                    style={{ width: `${(subscription.users.used / subscription.users.included) * 100}%` }}
                  />
                </div>
              </div>

              {/* Storage */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-xs text-gray-500 uppercase mb-2">Storage</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl text-gray-900">{subscription.storage.used}</span>
                  <span className="text-sm text-gray-500">/ {subscription.storage.included} {subscription.storage.unit}</span>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                  <div 
                    className="bg-cyan-500 h-1.5 rounded-full" 
                    style={{ width: `${(subscription.storage.used / subscription.storage.included) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>Next billing date: <span className="text-gray-900">{subscription.nextBillingDate}</span></span>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Change Plan
                </Button>
                <Button variant="outline" size="sm" className="text-cyan-600 border-cyan-200 hover:bg-cyan-50">
                  Upgrade to Enterprise
                </Button>
              </div>
            </div>
          </Card>

          {/* Next Payment Card */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-cyan-50 rounded-lg">
                <DollarSign className="w-6 h-6 text-cyan-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Next Payment</div>
                <div className="text-2xl text-gray-900">{subscription.amount}</div>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Due Date</span>
                <span className="text-gray-900">{subscription.nextBillingDate}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Days Until Renewal</span>
                <span className="text-gray-900">{subscription.daysUntilRenewal} days</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Auto-Renewal</span>
                <Badge className="bg-green-100 text-green-700 border-green-200">
                  <Check className="w-3 h-3 mr-1" />
                  Enabled
                </Badge>
              </div>
            </div>

            <Button variant="outline" className="w-full" size="sm">
              Manage Auto-Renewal
            </Button>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-8 py-8">
        <Tabs defaultValue="payment-methods" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="payment-methods">Payment Methods</TabsTrigger>
            <TabsTrigger value="invoices">Invoices</TabsTrigger>
            <TabsTrigger value="transactions">Transaction History</TabsTrigger>
            <TabsTrigger value="billing-contact">Billing Contact</TabsTrigger>
          </TabsList>

          {/* Payment Methods Tab */}
          <TabsContent value="payment-methods" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {paymentMethods.map((method) => (
                <Card key={method.id} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        {getPaymentMethodIcon(method)}
                      </div>
                      <div>
                        {method.type === 'card' && (
                          <>
                            <div className="text-gray-900">
                              {method.brand} •••• {method.last4}
                            </div>
                            <div className="text-sm text-gray-500">
                              Expires {method.expiryMonth}/{method.expiryYear}
                            </div>
                          </>
                        )}
                        {method.type === 'bank' && (
                          <>
                            <div className="text-gray-900">{method.bankName}</div>
                            <div className="text-sm text-gray-500">
                              Account •••• {method.accountLast4}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    {method.isDefault && (
                      <Badge className="bg-cyan-100 text-cyan-700 border-cyan-200">
                        Default
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {!method.isDefault && (
                      <Button variant="outline" size="sm" className="flex-1">
                        Set as Default
                      </Button>
                    )}
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}

              {/* Add Payment Method Card */}
              <Card className="p-6 border-2 border-dashed border-gray-300 hover:border-cyan-400 hover:bg-cyan-50/50 transition-colors cursor-pointer">
                <div className="flex flex-col items-center justify-center h-full py-8 text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <Plus className="w-6 h-6 text-gray-400" />
                  </div>
                  <h4 className="text-gray-900 mb-2">Add Payment Method</h4>
                  <p className="text-sm text-gray-500">
                    Add a credit card or bank account
                  </p>
                </div>
              </Card>
            </div>

            {/* Payment Security Notice */}
            <Card className="p-6 bg-cyan-50 border-cyan-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-0.5" />
                <div>
                  <div className="text-gray-900 mb-1">Secure Payment Processing</div>
                  <p className="text-sm text-gray-600">
                    All payment information is encrypted and securely processed. We never store your full card details.
                    All transactions are PCI DSS compliant and meet FDA 21 CFR Part 11 audit requirements.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Invoices Tab */}
          <TabsContent value="invoices">
            <Card>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="px-6 py-4 text-left text-xs text-gray-500 uppercase tracking-wider">
                        Invoice
                      </th>
                      <th className="px-6 py-4 text-left text-xs text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-4 text-left text-xs text-gray-500 uppercase tracking-wider">
                        Period
                      </th>
                      <th className="px-6 py-4 text-left text-xs text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-4 text-left text-xs text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-4 text-right text-xs text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {invoices.map((invoice) => (
                      <tr key={invoice.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-900">{invoice.number}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-600">{invoice.date}</td>
                        <td className="px-6 py-4 text-gray-600">{invoice.period}</td>
                        <td className="px-6 py-4 text-gray-900">{invoice.amount}</td>
                        <td className="px-6 py-4">{getStatusBadge(invoice.status)}</td>
                        <td className="px-6 py-4 text-right">
                          <Button variant="ghost" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Showing {invoices.length} of {invoices.length} invoices
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" disabled>
                    Next
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Transactions Tab */}
          <TabsContent value="transactions">
            <Card>
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-gray-900 mb-1">Transaction History</h3>
                    <p className="text-sm text-gray-500">Complete record of all payments and charges</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Export CSV
                  </Button>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="p-6 hover:bg-gray-50">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          {getTransactionStatusIcon(transaction.status)}
                        </div>
                        <div>
                          <div className="text-gray-900 mb-1">{transaction.description}</div>
                          <div className="flex items-center gap-3 text-sm text-gray-500">
                            <span>{transaction.date}</span>
                            <span>•</span>
                            <span>{transaction.method}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-gray-900">{transaction.amount}</div>
                        {transaction.status === 'completed' && (
                          <div className="text-xs text-green-600">Completed</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Transaction Summary */}
              <div className="p-6 bg-gray-50 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div className="text-xs text-gray-500 uppercase mb-1">Total Paid (2024)</div>
                    <div className="text-2xl text-gray-900">€3,100.00</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase mb-1">Total Transactions</div>
                    <div className="text-2xl text-gray-900">{transactions.length}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase mb-1">Average Payment</div>
                    <div className="text-2xl text-gray-900">€1,033.33</div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Billing Contact Tab */}
          <TabsContent value="billing-contact">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-gray-900">Billing Contact</h3>
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <User className="w-3.5 h-3.5" />
                      <span className="uppercase tracking-wider">Name</span>
                    </div>
                    <p className="text-gray-900">{billingContact.name}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <Building2 className="w-3.5 h-3.5" />
                      <span className="uppercase tracking-wider">Company</span>
                    </div>
                    <p className="text-gray-900">{billingContact.company}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <Mail className="w-3.5 h-3.5" />
                      <span className="uppercase tracking-wider">Email</span>
                    </div>
                    <a 
                      href={`mailto:${billingContact.email}`}
                      className="text-cyan-600 hover:text-cyan-700 hover:underline"
                    >
                      {billingContact.email}
                    </a>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <Phone className="w-3.5 h-3.5" />
                      <span className="uppercase tracking-wider">Phone</span>
                    </div>
                    <a 
                      href={`tel:${billingContact.phone}`}
                      className="text-cyan-600 hover:text-cyan-700 hover:underline"
                    >
                      {billingContact.phone}
                    </a>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      <span className="uppercase tracking-wider">Address</span>
                    </div>
                    <p className="text-gray-900 leading-relaxed">{billingContact.address}</p>
                  </div>
                </div>
              </Card>

              <div className="space-y-6">
                {/* Billing Preferences */}
                <Card className="p-6">
                  <h3 className="text-gray-900 mb-4">Billing Preferences</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-gray-900">Email Invoices</div>
                        <div className="text-sm text-gray-500">Receive invoices via email</div>
                      </div>
                      <Badge className="bg-green-100 text-green-700 border-green-200">
                        <Check className="w-3 h-3 mr-1" />
                        Enabled
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                      <div>
                        <div className="text-gray-900">Payment Reminders</div>
                        <div className="text-sm text-gray-500">Get notified before due dates</div>
                      </div>
                      <Badge className="bg-green-100 text-green-700 border-green-200">
                        <Check className="w-3 h-3 mr-1" />
                        Enabled
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                      <div>
                        <div className="text-gray-900">Purchase Orders</div>
                        <div className="text-sm text-gray-500">Require PO numbers</div>
                      </div>
                      <Badge className="bg-gray-100 text-gray-700 border-gray-200">
                        Disabled
                      </Badge>
                    </div>
                  </div>
                </Card>

                {/* Support */}
                <Card className="p-6">
                  <h3 className="text-gray-900 mb-4">Need Help?</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Have questions about your billing or need to make changes? Our billing support team is here to help.
                  </p>
                  <Button variant="outline" className="w-full">
                    Contact Billing Support
                  </Button>
                </Card>

                {/* VisumMaster Badge */}
                <Card className="p-6">
                  <div className="bg-gradient-to-b from-gray-50 to-white border-2 border-gray-200 rounded-lg p-4">
                    <div className="text-xs text-gray-500 text-center mb-3">Powered by</div>
                    <div className="flex items-center justify-center">
                      <ImageWithFallback 
                        src={visumMasterLogo} 
                        alt="VisumMaster"
                        className="h-11 w-auto object-contain"
                      />
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
