import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ComplaintsPolicy = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Navigation Breadcrumb */}
      <nav className="mb-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-vb-electric-1/80">
          <li className="flex items-center">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
          </li>
          <li className="text-vb-electric-1/50">/</li>
          <li className="text-white font-medium">Complaints Policy</li>
        </ol>
      </nav>

      {/* Hero Section with Background Image */}
      <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12 shadow-xl">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/compliance/web_banner.jpeg" 
            alt="Complaints Policy"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              console.error('Error loading image:', target.src);
              target.src = 'https://via.placeholder.com/1920x500/1a1a2e/ffffff?text=VoltBridge+Complaints';
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-vb-navy/90 via-vb-navy/70 to-vb-electric-1/60 z-10"></div>
        <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Complaints &<br />Dispute Resolution
            </h1>
            <p className="text-xl text-vb-electric-2 max-w-2xl">
              Our commitment to transparency and customer satisfaction in all our services
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="bg-vb-dark-2/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-vb-electric-1/10 mb-16"
      >
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Customer Complaints & Dispute Resolution
          </h1>
          <div className="h-1 w-20 bg-vb-electric-1 rounded-full mb-6"></div>
          <p className="text-vb-electric-2 text-lg">
            Last Updated: September 10th 2025
          </p>
        </div>
        
        <div className="mb-8 text-sm text-vb-electric-1/80">
          Last Updated: September 10th 2025
        </div>
        
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            At VoltBridge Ltd, we place the highest importance on customer satisfaction and trust. Our clients are at the core of everything we do and we are committed to maintaining the highest standards of transparency, professionalism, and fairness in all of our services.
          </p>
          
          <p className="text-lg leading-relaxed">
            We recognize that, on occasion, concerns or issues may arise, and when they do, it is our responsibility to ensure that they are addressed promptly and effectively. We believe that every piece of feedback is an opportunity to improve the way we operate and strengthen the relationships we build with our clients.
          </p>

          <p className="text-lg leading-relaxed">
            For this reason, we have established a clear and structured complaints procedure that enables you to raise any concerns with confidence. We are dedicated to ensuring that every complaint is handled with care, impartiality, and respect, and that our responses are thorough, timely, and solution focused.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-vb-electric-1">The Complaint Process</h2>
          
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <p className="font-medium">Initial Contact</p>
              <p>The fastest way to discuss a complaint is to email or call VoltBridge Ltd. Our team will investigate the details and try to help resolve the complaint in the first instance.</p>
            </li>
            
            <li>
              <p className="font-medium">Escalation to Complaints Manager</p>
              <p>If you feel the solution offered does not satisfy your complaint, the next step is to escalate the matter to the Complaints Manager at VoltBridge. To do so, you should email <a href="mailto:support@voltbridge.co.uk" className="text-vb-electric-1 hover:underline">support@voltbridge.co.uk</a> or call <a href="tel:+447424912117" className="text-vb-electric-1 hover:underline">+44 (0)7424912117</a> providing your name, your business name, and a brief description of your complaint. We will issue a complaint reference number to ensure your complaint is registered and can be tracked.</p>
              <p className="mt-2">The Complaints Manager will contact you within 5 working days to discuss your complaint directly and will make every reasonable effort to agree a suitable solution within 10 working days.</p>
            </li>
            
            <li>
              <p className="font-medium">Ombudsman Services</p>
              <p>If after this time you are not happy with how your complaint has been handled, if we are not able to resolve your problem, or if 8 full weeks have passed since your initial complaint, you may engage with the Ombudsman Services: Energy Broker ADR (Alternative Dispute Resolution) Scheme who will open a complaints case on your behalf and engage directly with VoltBridge.</p>
              <div className="mt-3 bg-vb-dark-3 p-4 rounded-lg">
                <p className="font-medium">You can contact the Ombudsman by:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Phone: <a href="tel:03304401624" className="text-vb-electric-1 hover:underline">0330 440 1624</a></li>
                  <li>Email: <a href="mailto:enquiry@ombudsman-services.org" className="text-vb-electric-1 hover:underline">enquiry@ombudsman-services.org</a></li>
                  <li>Post: Ombudsman Services: Energy, PO Box 966, Warrington, WA4 9DF</li>
                </ul>
              </div>
            </li>
          </ol>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-vb-electric-1">Outcomes</h2>
          
          <p className="text-lg leading-relaxed">
            If our investigation confirms that VoltBridge Ltd was responsible for the issue, we will take ownership of the matter and may offer an appropriate remedy or goodwill gesture to resolve it.
          </p>
          
          <p className="text-lg leading-relaxed">
            Where the complaint involves the performance of an energy supplier, VoltBridge Ltd will act on your behalf and make every reasonable effort to pursue the matter directly with the supplier. Because suppliers are independent parties, we cannot guarantee their performance or the outcome of their processes. For example, the start of a new contract may be delayed due to circumstances outside our control.
          </p>
          
          <p className="text-lg leading-relaxed">
            Throughout the entire process, VoltBridge Ltd will keep you informed of the progress of your complaint and ensure you are aware of the options available to you at each stage.
          </p>
        </div>
        
        <div className="mt-12 pt-8 border-t border-vb-dark-3">
          <div className="mt-12 pt-8 border-t border-vb-dark-3">
            <p className="text-vb-electric-1/80 text-sm">
              If you have any questions about this document, please contact us at{' '}
              <a href="mailto:legal@voltbridge.com" className="text-vb-electric-1 hover:underline">
                legal@voltbridge.com
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ComplaintsPolicy;
