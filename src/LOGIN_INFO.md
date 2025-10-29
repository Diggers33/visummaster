# Visum Supervisor - Login Information

## 🔐 Demo Access

This is a **prototype application** without real authentication. You can use any credentials to log in.

---

## Quick Login Options

### Option 1: Use Demo Credentials Button
Click the **"Use demo credentials"** link on the login form to auto-fill:
- **Email**: `admin@iris-tech.com`
- **Password**: `demo123`

### Option 2: Enter Any Credentials
The login accepts **any email and password combination**. Examples:

**Admin User**
- Email: `admin@iris-tech.com`
- Password: `admin123`

**Quality Manager**
- Email: `qm@pharma-company.com`
- Password: `quality123`

**Lab Technician**
- Email: `lab.tech@food-company.com`
- Password: `lab123`

**Compliance Officer**
- Email: `compliance@iris-tech.com`
- Password: `compliance123`

---

## SSO Options (Demo Only)

The login page includes **Google** and **Microsoft SSO** buttons. These are visual demos only and will log a console message when clicked. In a production environment, these would integrate with:

- **Google Workspace** for enterprise SSO
- **Microsoft Azure AD** for enterprise authentication
- **SAML 2.0** for custom identity providers

---

## Login Page Features

### Visual Elements
✅ **Two-panel layout** (desktop) with branding and form  
✅ **Enhanced logo** with gradient design  
✅ **Professional typography** using Inter font  
✅ **Responsive design** for mobile and desktop  
✅ **Laboratory background** with gradient overlay  

### Form Features
✅ **Email validation** (requires valid email format)  
✅ **Password field** with secure input masking  
✅ **Remember me** checkbox  
✅ **Forgot password** link (demo)  
✅ **Auto-fill demo credentials** button  
✅ **SSO integration** buttons (visual demo)  

### Security Messaging
✅ **FDA 21 CFR Part 11** compliance badge  
✅ **Enterprise encryption** notice  
✅ **Secure login** divider  

---

## Behind the Scenes

### Current Authentication Logic
```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log('Login submitted:', { email, password, rememberMe });
  onLogin(); // Immediately logs in - no validation
};
```

### Production Implementation

For a real-world deployment, you would integrate:

1. **Backend Authentication API**
   ```typescript
   const response = await fetch('/api/auth/login', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ email, password })
   });
   const { token, user } = await response.json();
   ```

2. **JWT Token Storage**
   ```typescript
   localStorage.setItem('authToken', token);
   localStorage.setItem('user', JSON.stringify(user));
   ```

3. **Role-Based Access Control (RBAC)**
   ```typescript
   const userRoles = {
     admin: ['dashboard', 'clients', 'audit-log', 'settings'],
     quality_manager: ['dashboard', 'chemometrics', 'audit-log'],
     lab_tech: ['dashboard', 'chemometrics', 'library'],
     viewer: ['dashboard']
   };
   ```

4. **Session Management**
   - Automatic logout after inactivity (FDA compliance)
   - Token refresh mechanism
   - Secure session storage

5. **Audit Trail**
   - Log all login attempts (successful and failed)
   - Track session duration
   - Record IP address and device info
   - Compliance with 21 CFR Part 11

---

## FDA 21 CFR Part 11 Compliance

### Required Authentication Features (Production)

For FDA-regulated environments, the authentication system must include:

✅ **Unique User IDs**: Each user must have a unique identifier  
✅ **Password Requirements**:
  - Minimum 8 characters
  - Combination of letters, numbers, symbols
  - Password expiration (90 days)
  - Password history (prevent reuse of last 5)

✅ **Account Lockout**:
  - Lock after 5 failed attempts
  - Require admin unlock or time-based unlock

✅ **Session Timeout**:
  - Automatic logout after 15 minutes of inactivity
  - Warning before logout

✅ **Audit Trail**:
  - Log all login/logout events
  - Record failed login attempts
  - Track password changes
  - Cannot be modified by users

✅ **Multi-Factor Authentication (MFA)**:
  - SMS verification
  - Authenticator app (TOTP)
  - Hardware tokens

---

## Planned Features (Future Enhancements)

### Phase 1: Basic Security
- [ ] Real authentication backend
- [ ] JWT token management
- [ ] Password validation
- [ ] Account lockout mechanism

### Phase 2: Enterprise SSO
- [ ] SAML 2.0 integration
- [ ] OAuth 2.0 / OpenID Connect
- [ ] Active Directory integration
- [ ] LDAP support

### Phase 3: Advanced Security
- [ ] Multi-factor authentication (MFA)
- [ ] Biometric authentication
- [ ] Hardware token support
- [ ] Risk-based authentication

### Phase 4: Compliance
- [ ] FDA 21 CFR Part 11 validation
- [ ] GxP audit trails
- [ ] Electronic signatures
- [ ] Automated compliance reporting

---

## Testing Scenarios

### Recommended Test Cases

1. **Happy Path**
   - Enter valid email format
   - Enter any password
   - Click "Sign In"
   - Should navigate to dashboard

2. **Demo Credentials**
   - Click "Use demo credentials"
   - Fields should auto-fill
   - Click "Sign In"
   - Should navigate to dashboard

3. **Remember Me**
   - Check "Remember me"
   - Log in
   - (In production: session persists)

4. **Forgot Password**
   - Click "Forgot Password?"
   - (Currently logs to console)
   - (In production: sends reset email)

5. **SSO Buttons**
   - Click "Google" or "Microsoft"
   - (Currently logs to console)
   - (In production: OAuth flow)

---

## Browser Console Commands

Open browser DevTools (F12) to see authentication logging:

```javascript
// After clicking login, you'll see:
Login submitted: {
  email: "admin@iris-tech.com",
  password: "demo123",
  rememberMe: true
}
```

---

## Support & Questions

### Need Help?
- **Contact Support** link on login page
- **Documentation**: See `/DESIGN_SYSTEM.md` and `/VISUAL_QUALITY_REPORT.md`
- **Technical Issues**: Check browser console for errors

### Common Issues

**Issue**: Email validation error  
**Solution**: Ensure email follows format: `name@domain.com`

**Issue**: Form doesn't submit  
**Solution**: Both email and password fields are required

**Issue**: SSO buttons don't work  
**Solution**: These are visual demos only in this prototype

---

## Summary

🎯 **Quick Start**: Click "Use demo credentials" → Click "Sign In"  
🔓 **Any Credentials Work**: This is a demo - no real authentication  
🏢 **Enterprise Ready**: Design follows Fortune 500 standards  
✅ **Compliance Aware**: Messaging highlights FDA 21 CFR Part 11  

**Current Version**: Demo/Prototype  
**Production Ready**: Design ✅ | Authentication ⏳  
**Last Updated**: October 29, 2025
