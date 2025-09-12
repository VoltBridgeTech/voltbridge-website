import { LegalPageTemplate } from '../template';

// Set document title and meta description
const title = 'Privacy Policy (UK GDPR)';
const description = 'Learn how VoltBridge protects your personal data and respects your privacy in compliance with UK GDPR regulations.';

if (typeof document !== 'undefined') {
  document.title = `${title} | VoltBridge`;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  } else {
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = description;
    document.head.appendChild(meta);
  }
}

const content = `
  <div class="space-y-12">
    {/* Hero Section */}
    <div class="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-12 bg-gradient-to-r from-vb-electric-1/20 to-vb-dark-2/50">
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center px-6">
          <h1 class="text-3xl md:text-5xl font-bold text-white mb-4">Privacy Policy (UK GDPR)</h1>
          <p class="text-vb-electric-1 text-lg">Your privacy is important to us</p>
        </div>
      </div>
    </div>
    
    <div class="space-y-8">
      <section class="bg-vb-dark-2/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-vb-electric-1/10">
        <h2 class="text-2xl font-bold text-vb-electric-1 mb-4">Privacy Policy (UK GDPR)</h2>
        <p class="text-sm text-vb-gray-300 mb-6">Last Updated: September 10th 2025</p>
      
        <div class="prose prose-invert max-w-none">
          <p class="mt-4">
            VoltBridge Ltd ("VoltBridge", "we", "us", "our") is committed to protecting your personal data and respecting your privacy. 
            We are registered with the Information Commissioner's Office (ICO) under registration number ZB968646.
          </p>
          
          <p class="mt-4">
            This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. 
            Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>
        </div>
      </section>

      <section class="bg-vb-dark-2/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-vb-electric-1/10">
        <h2 class="text-2xl font-bold text-vb-electric-1 mb-6">1. Who We Are</h2>
        <div class="prose prose-invert max-w-none">
          <p><strong>Controller:</strong> VoltBridge Ltd (Company No. 16574977)</p>
          <p><strong>Registered Office:</strong> 71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ</p>
          <p><strong>Email:</strong> <a href="mailto:privacy@voltbridge.co.uk" class="text-vb-electric-1 hover:underline">privacy@voltbridge.co.uk</a></p>
          <p><strong>Phone:</strong> <a href="tel:+447424912117" class="text-vb-electric-1 hover:underline">+44 7424 912117</a></p>
          <p><strong>ICO Registration Number:</strong> ZB968646</p>
        </div>
      </section>

      <section class="bg-vb-dark-2/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-vb-electric-1/10">
        <h2 class="text-2xl font-bold text-vb-electric-1 mb-6">2. Data We Collect</h2>
        <div class="prose prose-invert max-w-none">
          <p>We may collect and process the following categories of personal data:</p>
          
          <div class="mt-4 space-y-6">
            <div class="bg-vb-dark-3/50 p-4 rounded-lg">
              <h3 class="text-lg font-semibold text-vb-electric-1">Contact and Identity Information</h3>
              <p class="text-vb-gray-300">Name, email address, phone number, job title, company name, billing/shipping address.</p>
            </div>
            
            <div class="bg-vb-dark-3/50 p-4 rounded-lg">
              <h3 class="text-lg font-semibold text-vb-electric-1">Business Information</h3>
              <p class="text-vb-gray-300">Company registration details, VAT number, business type, industry sector.</p>
            </div>
            
            <div class="bg-vb-dark-3/50 p-4 rounded-lg">
              <h3 class="text-lg font-semibold text-vb-electric-1">Energy Usage Data</h3>
              <p class="text-vb-gray-300">Meter details, consumption data, MPAN/MPR numbers, historical usage, contract details.</p>
            </div>
            
            <div class="bg-vb-dark-3/50 p-4 rounded-lg">
              <h3 class="text-lg font-semibold text-vb-electric-1">Financial Information</h3>
              <p class="text-vb-gray-300">Payment details, bank account information (for refunds), credit history (where applicable).</p>
            </div>
          </div>
          
          <p class="mt-6">We collect this data through direct interactions, automated technologies, and third parties. We only collect what is necessary for our services.</p>
        </div>
      </section>

      <section class="bg-vb-dark-2/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-vb-electric-1/10">
        <h2 class="text-2xl font-bold text-vb-electric-1 mb-6">3. How We Use Your Data</h2>
        <div class="prose prose-invert max-w-none">
          <p>We process your personal data for the following purposes and legal bases:</p>
          
          <div class="mt-6 space-y-6">
            <div class="bg-vb-dark-3/50 p-4 rounded-lg">
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="text-lg font-semibold text-vb-electric-1">Service Delivery</h3>
                  <p class="text-vb-gray-300">To provide and manage our services, process quotes, and handle customer support.</p>
                </div>
                <span class="bg-vb-electric-1/20 text-vb-electric-1 text-xs font-medium px-3 py-1 rounded-full">Contract</span>
              </div>
            </div>
            
            <div class="bg-vb-dark-3/50 p-4 rounded-lg">
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="text-lg font-semibold text-vb-electric-1">Energy Procurement</h3>
                  <p class="text-vb-gray-300">To obtain quotes from suppliers and manage the switching process.</p>
                </div>
                <span class="bg-vb-electric-1/20 text-vb-electric-1 text-xs font-medium px-3 py-1 rounded-full">Legitimate Interest</span>
              </div>
            </div>
            
            <div class="bg-vb-dark-3/50 p-4 rounded-lg">
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="text-lg font-semibold text-vb-electric-1">Legal Compliance</h3>
                  <p class="text-vb-gray-300">To comply with our legal and regulatory obligations.</p>
                </div>
                <span class="bg-vb-electric-1/20 text-vb-electric-1 text-xs font-medium px-3 py-1 rounded-full">Legal Obligation</span>
              </div>
            </div>
            
            <div class="bg-vb-dark-3/50 p-4 rounded-lg">
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="text-lg font-semibold text-vb-electric-1">Marketing</h3>
                  <p class="text-vb-gray-300">To send you marketing communications about our services (with your consent).</p>
                </div>
                <span class="bg-vb-electric-1/20 text-vb-electric-1 text-xs font-medium px-3 py-1 rounded-full">Consent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-vb-dark-2/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-vb-electric-1/10">
        <h2 class="text-2xl font-bold text-vb-electric-1 mb-6">4. Data Sharing</h2>
        <div class="prose prose-invert max-w-none">
          <p>We may share your personal data with the following categories of recipients:</p>
          
          <div class="mt-4 space-y-4">
            <div class="flex items-start">
              <div class="flex-shrink-0 mt-1">
                <div class="w-2 h-2 bg-vb-electric-1 rounded-full mt-2"></div>
              </div>
              <div class="ml-3">
                <p class="font-medium text-vb-electric-1">Energy Suppliers & Partners</p>
                <p class="text-vb-gray-300">To obtain quotes and manage your energy contracts.</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex-shrink-0 mt-1">
                <div class="w-2 h-2 bg-vb-electric-1 rounded-full mt-2"></div>
              </div>
              <div class="ml-3">
                <p class="font-medium text-vb-electric-1">Service Providers</p>
                <p class="text-vb-gray-300">Including IT, payment processing, and customer support services.</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex-shrink-0 mt-1">
                <div class="w-2 h-2 bg-vb-electric-1 rounded-full mt-2"></div>
              </div>
              <div class="ml-3">
                <p class="font-medium text-vb-electric-1">Professional Advisors</p>
                <p class="text-vb-gray-300">Including legal, accounting, and other professional services.</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex-shrink-0 mt-1">
                <div class="w-2 h-2 bg-vb-electric-1 rounded-full mt-2"></div>
              </div>
              <div class="ml-3">
                <p class="font-medium text-vb-electric-1">Authorities</p>
                <p class="text-vb-gray-300">When required by law or to protect our legal rights.</p>
              </div>
            </div>
          </div>
          
          <p class="mt-6 font-semibold text-vb-electric-1">We do not sell your personal data to third parties.</p>
        </div>
      </section>

      <section class="bg-vb-dark-2/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-vb-electric-1/10">
        <h2 class="text-2xl font-bold text-vb-electric-1 mb-6">5. Your Data Protection Rights</h2>
        <div class="prose prose-invert max-w-none">
          <p>Under data protection laws, you have rights in relation to your personal data that include the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data, and (where the lawful ground of processing is consent) to withdraw consent.</p>
          
          <div class="mt-6 grid md:grid-cols-2 gap-4">
            <div class="bg-vb-dark-3/50 p-4 rounded-lg">
              <h3 class="font-semibold text-vb-electric-1">Access</h3>
              <p class="text-sm text-vb-gray-300">Request a copy of your personal data.</p>
            </div>
            
            <div class="bg-vb-dark-3/50 p-4 rounded-lg">
              <h3 class="font-semibold text-vb-electric-1">Rectification</h3>
              <p class="text-sm text-vb-gray-300">Request correction of inaccurate data.</p>
            </div>
            
            <div class="bg-vb-dark-3/50 p-4 rounded-lg">
              <h3 class="font-semibold text-vb-electric-1">Erasure</h3>
              <p class="text-sm text-vb-gray-300">Request deletion of your personal data.</p>
            </div>
            
            <div class="bg-vb-dark-3/50 p-4 rounded-lg">
              <h3 class="font-semibold text-vb-electric-1">Restriction</h3>
              <p class="text-sm text-vb-gray-300">Request limitation of processing.</p>
            </div>
          </div>
          
          <div class="mt-6 bg-vb-dark-3/50 p-4 rounded-lg border border-vb-electric-1/20">
            <p class="font-medium text-vb-electric-1 mb-2">How to Exercise Your Rights</p>
            <p class="text-vb-gray-300">To exercise any of these rights, please contact us using the details in the "Contact Us" section below. We may need to verify your identity before processing your request.</p>
          </div>
          
          <p class="mt-6">You also have the right to lodge a complaint with the Information Commissioner's Office (ICO), the UK supervisory authority for data protection issues (www.ico.org.uk).</p>
        </div>
      </section>

      <section class="bg-vb-dark-2/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-vb-electric-1/10">
        <h2 class="text-2xl font-bold text-vb-electric-1 mb-6">6. Data Security</h2>
        <div class="prose prose-invert max-w-none">
          <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.</p>
          
          <div class="mt-4 space-y-4">
            <div class="flex items-start">
              <div class="flex-shrink-0 mt-1">
                <div class="w-2 h-2 bg-vb-electric-1 rounded-full mt-2"></div>
              </div>
              <div class="ml-3">
                <p class="font-medium text-vb-electric-1">Encryption</p>
                <p class="text-vb-gray-300">Data is encrypted in transit using TLS 1.2+ and at rest using AES-256 encryption.</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex-shrink-0 mt-1">
                <div class="w-2 h-2 bg-vb-electric-1 rounded-full mt-2"></div>
              </div>
              <div class="ml-3">
                <p class="font-medium text-vb-electric-1">Access Controls</p>
                <p class="text-vb-gray-300">Strict access controls and authentication mechanisms are in place.</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex-shrink-0 mt-1">
                <div class="w-2 h-2 bg-vb-electric-1 rounded-full mt-2"></div>
              </div>
              <div class="ml-3">
                <p class="font-medium text-vb-electric-1">Regular Audits</p>
                <p class="text-vb-gray-300">Regular security assessments and penetration testing.</p>
              </div>
            </div>
          </div>
          
          <p class="mt-6">Despite these measures, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.</p>
        </div>
      </section>

      <section class="bg-vb-dark-2/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-vb-electric-1/10">
        <h2 class="text-2xl font-bold text-vb-electric-1 mb-6">7. Contact Us</h2>
        <div class="prose prose-invert max-w-none">
          <p>If you have any questions or concerns about this privacy policy or our privacy practices, we encourage you to contact our Data Protection Officer using the details below:</p>
          
          <div class="mt-6 grid md:grid-cols-2 gap-6">
            <div class="bg-vb-dark-3/50 p-6 rounded-lg">
              <h3 class="text-lg font-semibold text-vb-electric-1 mb-4">General Inquiries</h3>
              <div class="space-y-2">
                <p class="flex items-start">
                  <svg class="h-5 w-5 text-vb-electric-1 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:privacy@voltbridge.co.uk" class="text-vb-electric-1 hover:underline">privacy@voltbridge.co.uk</a>
                </p>
                <p class="flex items-start">
                  <svg class="h-5 w-5 text-vb-electric-1 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+447424912117" class="text-vb-electric-1 hover:underline">+44 7424 912117</a>
                </p>
                <p class="flex items-start">
                  <svg class="h-5 w-5 text-vb-electric-1 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ
                </p>
              </div>
            </div>
            
            <div class="bg-vb-dark-3/50 p-6 rounded-lg">
              <h3 class="text-lg font-semibold text-vb-electric-1 mb-4">Data Protection Officer</h3>
              <p class="text-vb-gray-300 mb-4">For all data protection and privacy-related inquiries, please contact our Data Protection Officer directly:</p>
              <p class="flex items-start">
                <svg class="h-5 w-5 text-vb-electric-1 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:dpo@voltbridge.co.uk" class="text-vb-electric-1 hover:underline">dpo@voltbridge.co.uk</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
`;

export default function PrivacyPolicy() {
  return (
    <LegalPageTemplate
      title={title}
      description={description}
      content={content}
      lastUpdated="2025-09-10"
    />
  );
}
