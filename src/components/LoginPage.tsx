import { Shield, CheckCircle2 } from 'lucide-react';
import { LoginForm } from './LoginForm';
import { VisumLogo } from './EnhancedLogo';
import backgroundImage from 'figma:asset/8e347cb58aa7229e6c74f93aada028e312be1058.png';
import irisLogo from 'figma:asset/b4b5fb44d3420665dc9e7f2c2e7ca37c8e9e3b40.png';

interface LoginPageProps {
  onLogin: () => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  return (
    <div className="min-h-screen relative flex items-center justify-center md:justify-between">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/60 via-blue-900/50 to-slate-900/70" />
      
      {/* Left Side - Branding (Hidden on mobile) */}
      <div className="hidden md:flex relative z-10 flex-1 flex-col justify-center px-12 lg:px-20 text-white">
        <div className="max-w-xl">
          <VisumLogo variant="default" />
          
          <h1 className="text-white mt-8 mb-4" style={{ fontSize: '1.5rem', fontWeight: 600, letterSpacing: '-0.025em' }}>
            Industrial SaaS Platform
          </h1>
          <p className="text-cyan-100 mb-8" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
            FDA 21 CFR Part 11 compliant platform for pharmaceutical and food manufacturing industries.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-1.5 bg-cyan-500/20 rounded-lg mt-0.5">
                <CheckCircle2 className="w-5 h-5 text-cyan-300" />
              </div>
              <div>
                <h4 className="text-white mb-1">GMP Validated Workflows</h4>
                <p className="text-cyan-100 text-sm">Complete audit trails and electronic signatures</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="p-1.5 bg-cyan-500/20 rounded-lg mt-0.5">
                <CheckCircle2 className="w-5 h-5 text-cyan-300" />
              </div>
              <div>
                <h4 className="text-white mb-1">Advanced Chemometrics</h4>
                <p className="text-cyan-100 text-sm">Real-time spectral analysis and quality control</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="p-1.5 bg-cyan-500/20 rounded-lg mt-0.5">
                <Shield className="w-5 h-5 text-cyan-300" />
              </div>
              <div>
                <h4 className="text-white mb-1">Enterprise Security</h4>
                <p className="text-cyan-100 text-sm">Role-based access control and encrypted data</p>
              </div>
            </div>
          </div>
          
          {/* IRIS Logo - Left side */}
          <div className="mt-16 pt-8 border-t border-cyan-400/20">
            <p className="text-cyan-200 text-xs uppercase tracking-wider mb-3">Powered by</p>
            <img 
              src={irisLogo} 
              alt="IRIS Technology Solutions" 
              className="h-7 opacity-90"
            />
          </div>
        </div>
      </div>
      
      {/* Right Side - Login Form */}
      <div className="relative z-10 w-full md:w-auto md:min-w-[480px] lg:min-w-[520px] mx-4 md:mr-12 lg:mr-20">
        <div className="bg-white rounded-xl shadow-2xl p-8 md:p-10 lg:p-12">
          {/* Mobile Logo (Visible on mobile only) */}
          <div className="md:hidden flex justify-center mb-8">
            <VisumLogo variant="compact" />
          </div>
          
          {/* Welcome Text */}
          <div className="mb-8">
            <h2 className="text-gray-900 mb-2">Welcome Back</h2>
            <p className="text-gray-600">Sign in to access your dashboard</p>
          </div>
          
          {/* Demo Credentials Notice */}
          <div className="mb-6 p-4 bg-cyan-50 border border-cyan-200 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="p-1 bg-cyan-100 rounded">
                <svg className="w-4 h-4 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm text-cyan-900 mb-1">Demo Mode</h4>
                <p className="text-xs text-cyan-700 leading-relaxed">
                  This is a prototype. Use any email and password to sign in.
                  <br />
                  <span className="font-medium">Example:</span> admin@iris-tech.com
                </p>
              </div>
            </div>
          </div>
          
          {/* Login Form */}
          <LoginForm onLogin={onLogin} />
          
          {/* Footer Text */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Protected by enterprise-grade encryption. <br className="md:hidden" />
              <span className="text-cyan-600">FDA 21 CFR Part 11</span> compliant.
            </p>
          </div>
          
          {/* Mobile IRIS Logo */}
          <div className="md:hidden mt-8 flex justify-center">
            <img 
              src={irisLogo} 
              alt="IRIS Technology Solutions" 
              className="h-7 opacity-80"
            />
          </div>
        </div>
        
        {/* Help Link */}
        <div className="mt-6 text-center">
          <a 
            href="#" 
            className="text-sm text-white/90 hover:text-white transition-colors"
            onClick={(e) => e.preventDefault()}
          >
            Need help signing in? <span className="underline">Contact Support</span>
          </a>
        </div>
      </div>
    </div>
  );
}
