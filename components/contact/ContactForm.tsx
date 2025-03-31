import { useState, type FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';

// Nahraďte tyto konstanty vašimi EmailJS údaji
const SERVICE_ID = "service_id"; // Nutno nastavit
const TEMPLATE_ID = "template_id"; // Nutno nastavit
const PUBLIC_KEY = "public_key"; // Nutno nastavit

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Chyba",
        description: "Vyplňte prosím všechna povinná pole.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Připravíme parametry pro EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      };

      // Odešleme e-mail
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      if (response.status === 200) {
        toast({
          title: "Úspěch!",
          description: "Vaše zpráva byla úspěšně odeslána. Děkujeme!",
        });
        
        // Resetovat formulář
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error("Chyba při odesílání e-mailu:", error);
      toast({
        title: "Chyba",
        description: "Při odesílání zprávy došlo k chybě. Zkuste to prosím později.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Jméno *
          </label>
          <input
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-200 rounded-md"
            placeholder="Vaše jméno"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email *
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-200 rounded-md"
            placeholder="vas@email.cz"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Předmět
        </label>
        <input
          id="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-200 rounded-md"
          placeholder="Předmět zprávy"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Zpráva *
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-200 rounded-md"
          placeholder="Vaše zpráva..."
          required
        />
      </div>
      <Button 
        type="submit" 
        className="w-full bg-black hover:bg-gray-800 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Odesílám..." : "Odeslat zprávu"}
      </Button>
    </form>
  );
} 