import { useState, useEffect } from "react";
import { motion, AnimatePresence, Transition } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, ArrowRight, ArrowLeft, Loader2, CheckCircle, Zap, Lock, ShieldCheck, ChevronRight } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  postcode: string;
  monthlySpend: string;
  contractStatus: string;
  contractEndDate?: Date;
  firstName: string;
  lastName: string;
  email: string;
  whatsapp: string;
}

const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    postcode: "",
    monthlySpend: "",
    contractStatus: "",
    firstName: "",
    lastName: "",
    email: "",
    whatsapp: ""
  });
  const { toast } = useToast();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring" as const, 
        stiffness: 300, 
        damping: 24 
      },
    },
  } as const;

  const formTransition: Transition = {
    type: 'spring',
    damping: 30,
    stiffness: 300,
  };

  // Auto-save to localStorage
  useEffect(() => {
    const saved = localStorage.getItem('voltbridge-form');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setFormData(prev => ({
          ...prev,
          ...parsed,
          contractEndDate: parsed.contractEndDate ? new Date(parsed.contractEndDate) : undefined
        }));
        setStep(parsed.step || 1);
      } catch (e) {
        console.error('Error parsing saved form data:', e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('voltbridge-form', JSON.stringify({ ...formData, step }));
  }, [formData, step]);

  const handleInputChange = (field: keyof FormData, value: string | Date) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isStep1Valid = () => {
    return formData.postcode?.trim() !== '' && 
           formData.monthlySpend?.trim() !== '' && 
           formData.contractStatus &&
           (formData.contractStatus === 'out-of-contract' || formData.contractEndDate);
  };

  const isStep2Valid = () => {
    return formData.firstName?.trim() !== '' && 
           formData.lastName?.trim() !== '' && 
           formData.email?.trim() !== '' && 
           formData.whatsapp?.trim() !== '';
  };

  const handleSubmit = async () => {
    if (!isStep2Valid()) return;

    setIsSubmitting(true);
    
    // Format WhatsApp number: remove all non-digit characters and ensure it starts with 44
    let formattedWhatsapp = formData.whatsapp.replace(/\D/g, '');
    if (formattedWhatsapp.startsWith('0')) {
      formattedWhatsapp = '44' + formattedWhatsapp.substring(1);
    } else if (!formattedWhatsapp.startsWith('44')) {
      formattedWhatsapp = '44' + formattedWhatsapp;
    }
    
    const submitData = {
      postcode: formData.postcode,
      monthlySpend: formData.monthlySpend,
      contractStatus: formData.contractStatus,
      contractEndDate: formData.contractEndDate ? format(formData.contractEndDate, 'yyyy-MM-dd') : null,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      whatsapp: formattedWhatsapp,
      timestamp: new Date().toISOString()
    };

    try {
      const response = await fetch('https://hook.eu2.make.com/2w143fc0jof3fif1eprw3buotoqdpgjh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      if (response.ok) {
        setIsSuccess(true);
        // Clear form data after successful submission
        const resetData = {
          postcode: "",
          monthlySpend: "",
          contractStatus: "",
          firstName: "",
          lastName: "",
          email: "",
          whatsapp: ""
        };
        setFormData(resetData);
        setStep(1);
        localStorage.removeItem('voltbridge-form');
        
        toast({
          title: "Thank you!",
          description: "We'll reach out via WhatsApp or email shortly.",
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="quote-form" className="py-20 bg-surface">
        <div className="section-container">
          <motion.div 
            className="max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 mb-6">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Thank You!</h2>
            <p className="text-lg text-white/80 mb-8 max-w-lg mx-auto">
              Your information has been submitted successfully. Our energy experts will contact you shortly with your personalized quote.
            </p>
            <Button 
              onClick={() => setIsSuccess(false)}
              className="bg-gradient-to-r from-[#0D76FA] to-[#b100cd] hover:opacity-90 text-white font-semibold py-6 px-8 rounded-xl transition-all duration-300 group"
            >
              Submit Another Request
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote-form" className="py-12 sm:py-16">
      <div className="w-full">
        <motion.div 
          className="text-center mb-8 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Get Your Free Quote</h1>
          <p className="text-lg text-white/80 mb-8 max-w-lg mx-auto">
            Fill out the form below to get a personalized quote from our energy experts.
          </p>
          <div className="flex justify-center mb-6">
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-12 h-12 rounded-full text-lg font-semibold transition-all duration-300 ${
                step >= 1 
                  ? 'bg-gradient-to-br from-[#0D76FA] to-[#b100cd] text-white shadow-lg shadow-[#0D76FA]/30' 
                  : 'bg-vb-dark-3 text-white/40 border border-white/10'
              }`}>
                1
              </div>
              <div className={`w-32 h-1 transition-all duration-500 ${
                step >= 2 
                  ? 'bg-gradient-to-r from-[#0D76FA] to-[#b100cd]' 
                  : 'bg-vb-dark-3'
              }`}></div>
              <div className={`flex items-center justify-center w-12 h-12 rounded-full text-lg font-semibold transition-all duration-300 ${
                step >= 2 
                  ? 'bg-gradient-to-br from-[#0D76FA] to-[#b100cd] text-white shadow-lg shadow-[#0D76FA]/30' 
                  : 'bg-vb-dark-3 text-white/40 border border-white/10'
              }`}>
                2
              </div>
            </div>
          </div>
        </motion.div>

        <div className="relative overflow-hidden rounded-[32px] border border-white/12 bg-[#07070D]/88 backdrop-blur-xl shadow-[0_40px_130px_-80px_rgba(0,0,0,0.85)]">
          <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(60% 60% at 20% 15%, rgba(13,118,250,0.18), transparent 70%), radial-gradient(70% 70% at 80% 85%, rgba(177,0,205,0.12), transparent 75%)' }} />
          <div className="relative p-6 sm:p-8">
            <div className="text-center mb-6">
              <p className="text-sm font-medium text-[#0D76FA] mb-1">
                Step {step} of 2
              </p>
              <div className="h-1 bg-vb-dark-3 rounded-full overflow-hidden mt-2">
                <div 
                  className="h-full bg-gradient-to-r from-[#0D76FA] to-[#b100cd] transition-all duration-500"
                  style={{ width: step === 1 ? '50%' : '100%' }}
                ></div>
              </div>
            </div>
            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={formTransition}
                  className="space-y-8"
                >
                  <motion.div variants={itemVariants}>
                    <Label htmlFor="postcode" className="block text-sm font-medium text-white/80 mb-2">
                      Your Postcode
                    </Label>
                    <Input
                      id="postcode"
                      type="text"
                      value={formData.postcode}
                      onChange={(e) => handleInputChange('postcode', e.target.value)}
                      placeholder="e.g. SW1A 1AA"
                      className="w-full bg-vb-dark-3/50 border-white/10 text-white placeholder:text-white/40 h-14 px-5 text-base focus:ring-2 focus:ring-[#0D76FA]/50 focus:border-[#0D76FA]/30"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Label htmlFor="monthlySpend" className="block text-sm font-medium text-white/80 mb-2">
                      Your current monthly energy spend (£)
                    </Label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 text-base">£</span>
                      <Input
                        id="monthlySpend"
                        type="number"
                        value={formData.monthlySpend}
                        onChange={(e) => handleInputChange('monthlySpend', e.target.value)}
                        placeholder="e.g. 150"
                        className="w-full bg-vb-dark-3/50 border-white/10 text-white placeholder:text-white/40 h-14 pl-10 pr-5 text-base focus:ring-2 focus:ring-[#0D76FA]/50 focus:border-[#0D76FA]/30"
                      />
                    </div>
                    <p className="text-xs text-white/60 mt-1">
                      Enter your approximate monthly energy bill amount
                    </p>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Label className="block text-sm font-medium text-white/80 mb-2">
                      Your current contract status
                    </Label>
                    <RadioGroup
                      value={formData.contractStatus}
                      onValueChange={(value) => handleInputChange('contractStatus', value)}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="out-of-contract" id="out-of-contract" className="w-5 h-5" />
                        <label htmlFor="out-of-contract" className="text-white cursor-pointer">
                          Out of contract
                        </label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="in-contract" id="in-contract" className="w-5 h-5" />
                        <label htmlFor="in-contract" className="text-white cursor-pointer">
                          In contract (ending soon)
                        </label>
                      </div>
                    </RadioGroup>
                  </motion.div>

                  <div className="flex justify-end">
                    <Button
                      disabled={!isStep1Valid()}
                      onClick={() => setStep(2)}
                      className="bg-gradient-to-r from-[#0D76FA] to-[#b100cd] hover:opacity-90 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300"
                    >
                      Continue to Step 2
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={formTransition}
                  className="space-y-8"
                >
                  <motion.div variants={itemVariants}>
                    <Label htmlFor="firstName" className="block text-sm font-medium text-white/80 mb-2">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="Your first name"
                      className="w-full bg-vb-dark-3/50 border-white/10 text-white placeholder:text-white/40 h-14 px-5 text-base focus:ring-2 focus:ring-[#0D76FA]/50 focus:border-[#0D76FA]/30"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Label htmlFor="lastName" className="block text-sm font-medium text-white/80 mb-2">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Your last name"
                      className="w-full bg-vb-dark-3/50 border-white/10 text-white placeholder:text-white/40 h-14 px-5 text-base focus:ring-2 focus:ring-[#0D76FA]/50 focus:border-[#0D76FA]/30"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your@email.com"
                      className="w-full bg-vb-dark-3/50 border-white/10 text-white placeholder:text-white/40 h-14 px-5 text-base focus:ring-2 focus:ring-[#0D76FA]/50 focus:border-[#0D76FA]/30"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Label htmlFor="whatsapp" className="block text-sm font-medium text-white/80 mb-2">
                      WhatsApp Number
                    </Label>
                    <Input
                      id="whatsapp"
                      type="text"
                      value={formData.whatsapp}
                      onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                      placeholder="Your WhatsApp number"
                      className="w-full bg-vb-dark-3/50 border-white/10 text-white placeholder:text-white/40 h-14 px-5 text-base focus:ring-2 focus:ring-[#0D76FA]/50 focus:border-[#0D76FA]/30"
                    />
                  </motion.div>

                  <div className="flex justify-between items-center">
                    <Button
                      variant="outline"
                      onClick={() => setStep(1)}
                      className="py-4 px-6 rounded-xl font-semibold text-white/80 hover:text-white transition-all duration-300"
                    >
                      <ArrowLeft className="mr-2 h-5 w-5" />
                      Back
                    </Button>
                    <Button
                      disabled={!isStep2Valid()}
                      onClick={handleSubmit}
                      className="bg-gradient-to-r from-[#0D76FA] to-[#b100cd] hover:opacity-90 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "Get My Free Quote"
                      )}
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0D76FA]/10 text-[#0D76FA]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Your data is secure</p>
                  <p className="text-xs text-white/60">We'll never share your information</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-xs text-white/60">
                <Lock className="w-3.5 h-3.5" />
                <span>256-bit SSL encryption</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
