import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, ArrowRight, ArrowLeft } from "lucide-react";
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

  // Auto-save to localStorage
  useEffect(() => {
    const saved = localStorage.getItem('voltbridge-form');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setFormData(parsed);
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
    return formData.postcode && 
           formData.monthlySpend && 
           formData.contractStatus &&
           (formData.contractStatus === 'out-of-contract' || formData.contractEndDate);
  };

  const isStep2Valid = () => {
    return formData.firstName && 
           formData.lastName && 
           formData.email && 
           formData.whatsapp;
  };

  const handleSubmit = async () => {
    if (!isStep2Valid()) return;

    setIsSubmitting(true);
    
    const submitData = {
      postcode: formData.postcode,
      monthlySpend: formData.monthlySpend,
      contractStatus: formData.contractStatus,
      contractEndDate: formData.contractEndDate ? format(formData.contractEndDate, 'yyyy-MM-dd') : null,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      whatsapp: formData.whatsapp,
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
        toast({
          title: "Thank you!",
          description: "We'll reach out via WhatsApp or email shortly.",
        });
        
        // Clear form and localStorage
        setFormData({
          postcode: "",
          monthlySpend: "",
          contractStatus: "",
          firstName: "",
          lastName: "",
          email: "",
          whatsapp: ""
        });
        setStep(1);
        localStorage.removeItem('voltbridge-form');
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

  return (
    <section id="quote-form" className="py-20 bg-surface">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get a Free Quote
            </h2>
            <p className="text-xl text-muted-foreground">
              Start your journey to better energy deals today
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg border border-card-border">
            {/* Progress Bar */}
            <div className="progress-bar mb-8">
              <div 
                className="progress-fill"
                style={{ width: `${(step / 2) * 100}%` }}
              />
            </div>

            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                Step {step} of 2
              </p>
            </div>

            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Energy Information
                </h3>

                <div>
                  <Label className="form-label">Postcode or Meter Number</Label>
                  <Input
                    className="form-input"
                    value={formData.postcode}
                    onChange={(e) => handleInputChange('postcode', e.target.value)}
                    placeholder="e.g. SW1A 1AA or 1234567890"
                  />
                </div>

                <div>
                  <Label className="form-label">Monthly Spend (£)</Label>
                  <Input
                    className="form-input"
                    type="number"
                    value={formData.monthlySpend}
                    onChange={(e) => handleInputChange('monthlySpend', e.target.value)}
                    placeholder="e.g. 150"
                  />
                </div>

                <div>
                  <Label className="form-label">Contract Status</Label>
                  <RadioGroup
                    value={formData.contractStatus}
                    onValueChange={(value) => handleInputChange('contractStatus', value)}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="have-contract" id="have-contract" />
                      <Label htmlFor="have-contract">I have a contract</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="out-of-contract" id="out-of-contract" />
                      <Label htmlFor="out-of-contract">I am out of contract</Label>
                    </div>
                  </RadioGroup>
                </div>

                {formData.contractStatus === 'have-contract' && (
                  <div>
                    <Label className="form-label">Contract End Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal form-input",
                            !formData.contractEndDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.contractEndDate ? 
                            format(formData.contractEndDate, "PPP") : 
                            <span>Pick a date</span>
                          }
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={formData.contractEndDate}
                          onSelect={(date) => handleInputChange('contractEndDate', date!)}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                )}

                <Button
                  onClick={() => setStep(2)}
                  disabled={!isStep1Valid()}
                  className="w-full btn-hero"
                >
                  Next Step <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Contact Information
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="form-label">First Name</Label>
                    <Input
                      className="form-input"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <Label className="form-label">Last Name</Label>
                    <Input
                      className="form-input"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <Label className="form-label">Email Address</Label>
                  <Input
                    className="form-input"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="john.smith@example.com"
                  />
                </div>

                <div>
                  <Label className="form-label">WhatsApp Number</Label>
                  <Input
                    className="form-input"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                    placeholder="+44 7123 456789"
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={() => setStep(1)}
                    variant="outline"
                    className="flex-1"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    disabled={!isStep2Valid() || isSubmitting}
                    className="flex-1 btn-hero"
                  >
                    {isSubmitting ? "Submitting..." : "Get My Quote"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;