import { LegalPageTemplate } from '../template';

// Set document title and meta description
const title = 'Complaints & Dispute Resolution';
const description = 'Our commitment to transparency and customer satisfaction in all our services.';

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
          <h1 class="text-3xl md:text-5xl font-bold text-white mb-4">Complaints & Dispute Resolution</h1>
          <p class="text-vb-electric-1 text-lg">Our commitment to transparency and customer satisfaction in all our services</p>
        </div>
      </div>
    </div>
    
    <div class="space-y-8">
      <section class="bg-vb-dark-2/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-vb-electric-1/10">
        <h2 class="text-2xl font-bold text-vb-electric-1 mb-4">Customer Complaints & Dispute Resolution</h2>
        <p class="text-sm text-vb-gray-300 mb-6">Last Updated: September 10th 2025</p>
      
        <div class="prose prose-invert max-w-none">
          <p class="mt-4">
            At VoltBridge Ltd, we place the highest importance on customer satisfaction and trust. 
            Our clients are at the core of everything we do and we are committed to maintaining 
            the highest standards of transparency, professionalism, and fairness in all of our services.
          </p>
          
          <p class="mt-4">
            We recognize that, on occasion, concerns or issues may arise, and when they do, 
            it is our responsibility to ensure that they are addressed promptly and effectively. 
            We believe that every piece of feedback is an opportunity to improve the way we 
            operate and strengthen the relationships we build with our clients.
          </p>
        </div>
      </section>

      <section class="bg-vb-dark-2/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-vb-electric-1/10">
        <h2 class="text-2xl font-bold text-vb-electric-1 mb-6">The Complaint Process</h2>
        
        <div class="space-y-6">
          <div class="bg-vb-dark-3/50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold text-vb-electric-1 mb-3">1. Initial Contact</h3>
            <p class="text-vb-gray-300">
              The fastest way to discuss a complaint is to email or call VoltBridge Ltd. 
              Our team will investigate the details and try to help resolve the complaint 
              in the first instance.
            </p>
          </div>

          <div class="bg-vb-dark-3/50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold text-vb-electric-1 mb-3">2. Escalation to Complaints Manager</h3>
            <div class="space-y-4">
              <p class="text-vb-gray-300">
                If you feel the solution offered does not satisfy your complaint, the next step is to 
                escalate the matter to the Complaints Manager at VoltBridge. To do so, you should:
              </p>
              <ul class="list-disc pl-6 space-y-2 text-vb-gray-300">
                <li>Email: <a href="mailto:support@voltbridge.co.uk" class="text-vb-electric-1 hover:underline">support@voltbridge.co.uk</a></li>
                <li>Phone: <a href="tel:+447424912117" class="text-vb-electric-1 hover:underline">+44 7424 912117</a></li>
              </ul>
              <p class="text-vb-gray-300">
                Please provide your name, your business name, and a brief description of your complaint. 
                We will issue a complaint reference number to ensure your complaint is registered and 
                can be tracked.
              </p>
              <div class="bg-vb-dark-2/30 p-4 rounded-lg border border-vb-electric-1/20">
                <p class="text-vb-electric-1 font-medium">
                  The Complaints Manager will contact you within 5 working days to discuss your complaint 
                  directly and will make every reasonable effort to agree a suitable solution within 10 working days.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-vb-dark-3/50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold text-vb-electric-1 mb-3">3. Ombudsman Services</h3>
            <div class="space-y-4">
              <p class="text-vb-gray-300">
                If after this time you are not happy with how your complaint has been handled, 
                if we are not able to resolve your problem, or if 8 full weeks have passed since 
                your initial complaint, you may engage with the Ombudsman Services: Energy 
                Broker ADR (Alternative Dispute Resolution) Scheme who will open a complaints 
                case on your behalf and engage directly with VoltBridge.
              </p>
              <div class="bg-vb-dark-2/30 p-4 rounded-lg border border-vb-electric-1/20">
                <p class="font-medium text-vb-electric-1 mb-2">You can contact the Ombudsman by:</p>
                <ul class="list-disc pl-6 space-y-1 text-vb-gray-300">
                  <li>Phone: <a href="tel:03304401624" class="text-vb-electric-1 hover:underline">0330 440 1624</a></li>
                  <li>Email: <a href="mailto:enquiry@ombudsman-services.org" class="text-vb-electric-1 hover:underline">enquiry@ombudsman-services.org</a></li>
                  <li>Post: Ombudsman Services: Energy, PO Box 966, Warrington, WA4 9DF</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-vb-dark-2/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-vb-electric-1/10">
        <h2 class="text-2xl font-bold text-vb-electric-1 mb-6">Outcomes</h2>
        <div class="prose prose-invert max-w-none">
          <p>
            If our investigation confirms that VoltBridge Ltd was responsible for the issue, 
            we will take ownership of the matter and may offer an appropriate remedy or 
            goodwill gesture to resolve it.
          </p>
          <p class="mt-4">
            Where the complaint involves the performance of an energy supplier, VoltBridge Ltd 
            will act on your behalf and make every reasonable effort to pursue the matter 
            directly with the supplier. Because suppliers are independent parties, we cannot 
            guarantee their performance or the outcome of their processes. For example, the 
            start of a new contract may be delayed due to circumstances outside our control.
          </p>
          <p class="mt-4">
            Throughout the entire process, VoltBridge Ltd will keep you informed of the 
            progress of your complaint and ensure you are aware of the options available 
            to you at each stage.
          </p>
        </div>
      </section>
  </div>
`;

export default function ComplaintsPolicy() {
  return (
    <LegalPageTemplate
      title={title}
      description={description}
      content={content}
      lastUpdated="2025-09-10"
    />
  );
}
