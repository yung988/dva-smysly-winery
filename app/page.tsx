'use client';

import Image from "next/image"
import heroImage from "@/public/vineyard2.JPG"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Instagram, ShoppingBag, ArrowRight, Facebook, Loader2 } from "lucide-react"
import Link from "next/link"
import vina from "@/data/vina.json"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from 'react'

// Vína pro carousel bereme z centrálního JSON

export default function Home() {
  // State for the contact form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitStatus) {
        setSubmitStatus(null);
        setSubmitMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Děkujeme! Vaše zpráva byla úspěšně odeslána.');
        setFormData({ name: '', email: '', message: '' }); 
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.error || 'Chyba při odesílání zprávy. Zkuste to prosím znovu.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setSubmitMessage('Došlo k neočekávané chybě. Zkuste to prosím později.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section - Zarovnáno doleva na mobilech */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden -mt-16 pt-16">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Vinice"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            placeholder="blur"
          />
        </div>
        <div className="relative container h-full flex flex-col justify-center items-start text-left">
          <div className="max-w-xl w-full space-y-4 bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-lg">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a472a] text-left">Vinařství Dva Smysly</h1>
            <p className="text-base sm:text-lg text-[#1a472a] text-left">
              "Ve vinařství Dva smysly věříme, že víno je jako poezie. Každá sklenka vypráví jedinečný příběh a probouzí
              naše smysly."
            </p>
            <div className="flex flex-col sm:flex-row justify-start md:justify-center gap-4 pt-4">
              <Button asChild size="lg" className="w-full sm:w-auto bg-[#1a472a] hover:bg-[#2a573a] text-white border-[#1a472a]">
                <a href="#degustace">Rezervovat degustaci</a>
              </Button>
              <Button
                variant="outline"
                asChild
                size="lg"
                className="w-full sm:w-auto bg-transparent text-[#1a472a] hover:bg-[#1a472a] hover:text-white border-[#1a472a]"
              >
                <a href="#about">Poznejte nás</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Zarovnáno doleva na mobilech, na střed na desktopu */}
      <section id="about" className="py-8 sm:py-12 md:py-20 bg-white">
        <div className="container px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left md:text-center mb-6 md:mb-8">O nás</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image column - Na mobilech nahoře */}
            <div className="order-1 md:order-2 relative h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-6 md:mb-0">
              <Image 
                src="/images/about/about-hlavni.webp" 
                alt="Hrozny" 
                fill 
                className="object-contain rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Text column - Na mobilech dole */}
            <div className="order-2 md:order-1 space-y-4 md:space-y-6 text-left md:text-center">
              <p className="text-base md:text-lg text-muted-foreground text-left md:text-center">Zdravíme tě, vínomilče!</p>
              <p className="text-sm md:text-base text-muted-foreground text-left md:text-center">
                Tak dlouho jsme spolu s vínem kroužili, až jsme se rozhodli dát tomu všemu smysl – v našem případě
                dokonce Dva Smysly. Naše cesta k vínu je nejen o vášni, ale i o snaze přenést naše nadšení na vás, naše
                zákazníky.
              </p>
              <p className="font-medium text-sm md:text-base text-left md:text-center">Ondra a Lukáš, těší nás!</p>
              <p className="text-sm md:text-base text-muted-foreground text-left md:text-center">
                Jsme dva a dává nám to smysl. Dva kluci, co žijí vínem, a rozhodli se jej tvořit společně. Od sklizně
                hroznů na našich vinicích až po zrození vína v našem sklepě je vše o jedné věci – sdílet smysluplný
                zážitek s vámi.
              </p>
              <p className="text-sm md:text-base text-muted-foreground text-left md:text-center">
                Věříme, že víno není jen nápoj, ale příběh – plný vášně, tradice a lásky k přírodě. Každá sklenka je
                malým světem, který vás vtáhne, a probudí vaše smysly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Degustace Section - Zarovnáno doleva na mobilech, na střed na desktopu */}
      <section id="degustace" className="py-12 md:py-20 bg-gray-100">
        <div className="container">
          <div className="text-left md:text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-left md:text-center">Degustace</h2>
            <p className="text-sm md:text-base text-muted-foreground text-left md:text-center">
              Poznejte svět vína prostřednictvím našich degustací. Každá degustace je pečlivě sestavena a zaměřena na to
              nejlepší z naší Znojemské vinařské podoblasti.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Adjusted Card padding and text size */}
            <Card className="bg-white border-gray-200 flex flex-col">
              <CardHeader className="pb-3 md:pb-4">
                <CardTitle className="text-lg md:text-xl">Řízená degustace</CardTitle>
                <CardDescription>350 Kč za osobu</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm md:text-base text-muted-foreground">
                  Každý den pracujeme s úsměvem a radostí, protože víno je pro nás nejen prací, ale především životním
                  stylem. Během degustace vám představíme vína z naší Znojemské vinařské podoblasti.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full text-sm md:text-base border-[#1a472a] text-[#1a472a] hover:bg-[#1a472a] hover:text-white">
                  <Link href="/degustace">Více informací <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-white border-gray-200 flex flex-col">
              <CardHeader className="pb-3 md:pb-4">
                <CardTitle className="text-lg md:text-xl">Firemní degustace</CardTitle>
                <CardDescription>Cena na vyžádání</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm md:text-base text-muted-foreground">
                  Přidejte do svých firemních večírků a teambuildingů nezapomenutelný prvek s našimi profesionálně
                  vedenými degustacemi. Posílíme vztahy mezi kolegy při společném objevování kvalitních vín.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full text-sm md:text-base border-[#1a472a] text-[#1a472a] hover:bg-[#1a472a] hover:text-white">
                  <Link href="/degustace">Více informací <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-white border-gray-200 flex flex-col">
              <CardHeader className="pb-3 md:pb-4">
                <CardTitle className="text-lg md:text-xl">Exkluzivní firemní víno</CardTitle>
                <CardDescription>Cena dle množství</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm md:text-base text-muted-foreground">
                  Vytvořte si s námi exkluzivní víno, které bude dokonale odrážet váš firemní brand. Nabízíme
                  personalizaci s vaším logem a firemním designem na etiketě.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full text-sm md:text-base border-[#1a472a] text-[#1a472a] hover:bg-[#1a472a] hover:text-white">
                  <Link href="/degustace">Více informací <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-8 md:mt-12 text-left">
            <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
              Všechny degustace probíhají v našem vinném sklepě v Suchohrdlech u Znojma. Součástí každé degustace je
              profesionální výklad, představení našich vín, a možnost ochutnat vína přímo ze sudu.
            </p>
            <Button asChild size="lg" className="text-sm md:text-base bg-[#1a472a] hover:bg-[#2a573a] text-white">
              <Link href="#kontakt">Rezervovat degustaci</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sklep Section - Zarovnáno doleva na mobilech */}
      <section id="sklep" className="py-12 md:py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Text Column - First on mobile */}
            <div className="order-1 space-y-4 md:space-y-6 text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left">Máme sklep a můžete ho vidět!</h2>
              <p className="text-sm md:text-base text-muted-foreground text-left">
                Navštivte náš vinný sklep, kde můžete zažít autentickou atmosféru vinařského řemesla. V našem sklepě
                udržujeme ideální podmínky pro skladování vín a jejich potřebného zrání.
              </p>
              <p className="text-sm md:text-base text-muted-foreground text-left">
                Přijďte se podívat na místo, kde vznikají naše vína. Během prohlídky vám ukážeme tradiční postupy výroby
                vína a můžete ochutnat naše nejlepší vína přímo ze sudu.
              </p>
              {/* Mini gallery - Adjusted size */}
              <div className="grid grid-cols-3 gap-2 md:gap-4 pt-2 md:pt-4">
              <div className="relative h-[100px] sm:h-[120px] md:h-[150px] rounded-lg overflow-hidden">
                <Image src="/images/Sklep/sklep1.webp" alt="Vinný sklep detail 1" fill className="object-cover rounded-lg" sizes="(max-width: 768px) 33vw, 200px" />
                </div>
                <div className="relative h-[100px] sm:h-[120px] md:h-[150px] rounded-lg overflow-hidden">
                <Image src="/images/Sklep/sklep2.webp" alt="Vinný sklep detail 2" fill className="object-cover rounded-lg" sizes="(max-width: 768px) 33vw, 200px" />
                </div>
                <div className="relative h-[100px] sm:h-[120px] md:h-[150px] rounded-lg overflow-hidden">
                <Image src="/images/Sklep/sklep3.webp" alt="Vinný sklep detail 3" fill className="object-cover rounded-lg" sizes="(max-width: 768px) 33vw, 200px" />
                </div>
              </div>
              <div className="text-left">
                <Button asChild className="text-sm md:text-base bg-[#1a472a] hover:bg-[#2a573a] text-white">
                  <a href="#kontakt">Domluvit návštěvu</a>
                </Button>
              </div>
            </div>
            
            {/* Image Column - Second on mobile, first on desktop */}
            <div className="order-2 md:order-1 relative h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image src="/images/Sklep/sklep1.webp" alt="Vinný sklep" fill className="object-cover rounded-lg" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Vína Section - Zarovnáno doleva na mobilech, na střed na desktopu */}
      <section id="vina" className="py-12 md:py-20 bg-white">
        <div className="container">
          <div className="mb-8 md:mb-12 text-left md:text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-[#1a472a] text-left md:text-center">Naše vína</h2>
            <p className="text-base md:text-lg text-[#1a472a] text-left md:text-center">
              Naše portfolio zahrnuje pečlivě zpracovaná vína, která odrážejí terroir Znojemska. Věnujeme se bílým i
              červeným odrůdám.
            </p>
          </div>

          <Carousel 
            opts={{ 
              align: "start",
              loop: true,
              slidesToScroll: 1,
             }} 
             className="w-full mb-8 md:mb-12"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {/* Adjusted basis for different screen sizes */}
              {vina.map((vino) => (
                <CarouselItem key={vino.id} className="pl-2 md:pl-4 basis-11/12 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Link
                    href={`/vina/${vino.id}`}
                    className="block h-full bg-white shadow-sm hover:shadow-md transition-all duration-300 rounded-xl overflow-hidden border border-gray-100 group"
                  >
                    <div className="relative h-[380px] sm:h-[450px] bg-white p-2">
                      <Image
                        src={vino.image}
                        alt={vino.name}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    <div className="p-3 md:p-4 text-left">
                      <h3 className="font-medium text-base md:text-lg lg:text-xl text-[#1a472a] mb-1">{vino.name}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">{vino.description}</p>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-start md:justify-center mt-4 md:mt-6">
              <CarouselPrevious className="static mx-2 bg-white hover:bg-gray-50 text-[#1a472a] border-[#1a472a]" />
              <CarouselNext className="static mx-2 bg-white hover:bg-gray-50 text-[#1a472a] border-[#1a472a]" />
            </div>
          </Carousel>
          
        
        </div>
      </section>

      {/* Quote Section - Zarovnáno doleva na mobilech, na střed na desktopu */}
      <section className="py-12 md:py-16 bg-[#1a472a]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-left md:text-center space-y-4 md:space-y-6">
            <blockquote className="text-xl sm:text-2xl md:text-3xl text-white font-light italic text-left md:text-center">
              "Ve vinařství Dva smysly věříme, že víno je jako poezie. Každá sklenka vypráví jedinečný příběh a probouzí naše smysly."
            </blockquote>
            <p className="text-sm md:text-base text-white/80 text-left md:text-center">- Ondřej a Lukáš</p>
          </div>
        </div>
      </section>

      {/* Contact Section - Zarovnáno doleva na mobilech, na střed na desktopu pro nadpisy */}
      <section id="kontakt" className="py-12 md:py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info Column */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a472a] text-left md:text-center">Kontakt</h2>
              <p className="text-sm md:text-base text-muted-foreground text-left md:text-center">Pro více informací o našich službách nás neváhejte kontaktovat.</p>

              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start gap-3 md:gap-4">
                  <Mail className="h-4 w-4 md:h-5 md:w-5 mt-1 text-[#1a472a] flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm md:text-base">Email</p>
                    <a
                      href="mailto:ondrakarady1@seznam.cz"
                      className="text-xs md:text-sm text-muted-foreground hover:text-[#1a472a] transition-colors block break-words"
                    >
                      ondrakarady1@seznam.cz
                    </a>
                    <a
                      href="mailto:lukasmudrych@seznam.cz"
                      className="text-xs md:text-sm text-muted-foreground hover:text-[#1a472a] transition-colors block break-words"
                    >
                      lukasmudrych@seznam.cz
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <Phone className="h-4 w-4 md:h-5 md:w-5 mt-1 text-[#1a472a] flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm md:text-base">Telefon</p>
                    <a href="tel:+420720611514" className="text-xs md:text-sm text-muted-foreground hover:text-[#1a472a] transition-colors block">
                      +420 720 611 514
                    </a>
                    <a href="tel:+420602600140" className="text-xs md:text-sm text-muted-foreground hover:text-[#1a472a] transition-colors block">
                      +420 602 600 140
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 mt-1 text-[#1a472a] flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm md:text-base">Lokalita</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Suchohrdly u Znojma</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Nový Šaldorf - Sedlešovice</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 md:pt-4">
                <h3 className="text-base md:text-lg font-medium mb-2 text-left md:text-center">Sledujte nás</h3>
                <div className="flex gap-3 md:gap-4 justify-start md:justify-center">
                  <a
                    href="https://www.instagram.com/vinarstvi_dvasmysly/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-gray-200 p-2 md:p-3 rounded-full transition-colors"
                    aria-label="Instagram Dva Smysly"
                  >
                    <Instagram className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61560188686793"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-gray-200 p-2 md:p-3 rounded-full transition-colors"
                    aria-label="Facebook Dva Smysly"
                  >
                    <Facebook className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="sr-only">Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a472a] text-left md:text-center">Napište nám</h2>
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sm md:text-base text-[#1a472a] text-left">Jméno</Label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                    className="mt-1 text-sm md:text-base border-gray-300 focus:border-[#1a472a] focus:ring-[#1a472a] text-left"
                    placeholder="Vaše jméno"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm md:text-base text-[#1a472a] text-left">Email</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                    className="mt-1 text-sm md:text-base border-gray-300 focus:border-[#1a472a] focus:ring-[#1a472a] text-left"
                    placeholder="vas@email.cz"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm md:text-base text-[#1a472a] text-left">Zpráva</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={4} // Reduced rows for mobile
                    value={formData.message}
                    onChange={handleInputChange}
                    required 
                    className="mt-1 text-sm md:text-base border-gray-300 focus:border-[#1a472a] focus:ring-[#1a472a] text-left"
                    placeholder="Vaše zpráva, dotaz nebo poptávka..."
                    disabled={isSubmitting}
                  />
                </div>
                
                {/* Submit Status Messages */}
                {submitStatus === 'success' && (
                  <p className="text-green-600 bg-green-100 border border-green-300 rounded-md p-2 md:p-3 text-xs md:text-sm text-left">{submitMessage}</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 bg-red-100 border border-red-300 rounded-md p-2 md:p-3 text-xs md:text-sm text-left">{submitMessage}</p>
                )}

                <Button 
                  type="submit" 
                  className="w-full text-sm md:text-base bg-[#1a472a] hover:bg-[#2a573a] text-white text-left"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Odesílám...
                    </>
                  ) : (
                    'Odeslat zprávu'
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
}

