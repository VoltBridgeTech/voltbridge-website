import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ComplaintsPolicy from "./pages/legal/CompliancePolicy";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import CookiesPolicy from "./pages/legal/CookiesPolicy";
import ICORegistration from "./pages/legal/ICORegistration";

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Index />} />
      {/* Main Pages */}
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
      {/* Legal Pages */}
      <Route path="complaints-policy" element={<ComplaintsPolicy />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="terms-of-service" element={<TermsOfService />} />
      <Route path="cookies-policy" element={<CookiesPolicy />} />
      <Route path="ico-registration" element={<ICORegistration />} />
      
      {/* 404 - Keep this as the last route */}
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default App;
