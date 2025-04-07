import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Instagram, ShoppingBag, ArrowRight } from "lucide-react"
import Link from "next/link"
import ContactForm from "@/components/contact/ContactForm"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/leaves.jpeg" alt="Vinice" fill className="object-cover" priority />
        </div>
        <div className="relative container h-full flex flex-col justify-center items-start">
          <div className="max-w-xl space-y-4 bg-white/80 backdrop-blur-sm p-8 rounded-lg">
            <Image src="/logo.png" alt="Dva Smysly" width={200} height={80} className="h-auto" />
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a472a]">Vinařství Dva Smysly</h1>
            <p className="text-lg text-[#1a472a]">
              „Ve vinařství Dva smysly věříme, že víno je jako poezie. Každá sklenka vypráví jedinečný příběh a probouzí
              naše smysly."
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="bg-[#1a472a] hover:bg-[#2a573a] text-white border-[#1a472a]">
                <a href="#degustace">Rezervovat degustaci</a>
              </Button>
              <Button
                variant="outline"
                asChild
                size="lg"
                className="bg-transparent text-[#1a472a] hover:bg-[#1a472a] hover:text-white border-[#1a472a]"
              >
                <a href="#about">Poznejte nás</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">O nás</h2>
              <p className="text-lg text-muted-foreground">Zdravíme tě, vínomilče!</p>
              <p className="text-muted-foreground">
                Tak dlouho jsme spolu s vínem kroužili, až jsme se rozhodli dát tomu všemu smysl – v našem případě
                dokonce Dva smysly. Naše cesta k vínu je nejen o vášni, ale i o snaze přenést naše nadšení na vás, naše
                zákazníky.
              </p>
              <p className="font-medium">Ondra a Lukáš, těší nás!</p>
              <p className="text-muted-foreground">
                Jsme dva a dává nám to smysl. Dva kluci, co žijí vínem, a rozhodli se jej tvořit společně. Od sklizně
                hroznů na našich vinicích až po zrození vína v našem sklepě je vše o jedné věci – sdílet smysluplný
                zážitek s vámi.
              </p>
              <p className="text-muted-foreground">
                Věříme, že víno není jen nápoj, ale příběh – plný vášně, tradice a lásky k přírodě. Každá sklenka je
                malým světem, který vás vtáhne a probudí vaše smysly.
              </p>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image 
                src="/images/about/about hlavni.JPG" 
                alt="Hrozny" 
                fill 
                className="object-contain md:object-cover rounded-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Degustace Section */}
      <section id="degustace" className="py-16 md:py-24 bg-gray-100">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Degustace</h2>
            <p className="text-muted-foreground">
              Poznejte svět vína prostřednictvím našich degustací. Každá degustace je pečlivě sestavena a zaměřena na to
              nejlepší z naší Znojemské vinařské podoblasti.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle>Řízená degustace</CardTitle>
                <CardDescription>350 Kč za osobu</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Každý den pracujeme s úsměvem a radostí, protože víno je pro nás nejen prací, ale především životním
                  stylem. Během degustace vám představíme vína z naší Znojemské vinařské podoblasti.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full border-[#1a472a] text-[#1a472a] hover:bg-[#1a472a] hover:text-white">
                  <Link href="/degustace">Více informací <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle>Firemní degustace</CardTitle>
                <CardDescription>Cena na vyžádání</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Přidejte do svých firemních večírků a teambuildingů nezapomenutelný prvek s našimi profesionálně
                  vedenými degustacemi. Posílíme vztahy mezi kolegy při společném objevování kvalitních vín.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full border-[#1a472a] text-[#1a472a] hover:bg-[#1a472a] hover:text-white">
                  <Link href="/degustace">Více informací <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle>Exkluzivní firemní víno</CardTitle>
                <CardDescription>Cena dle množství</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Vytvořte si s námi exkluzivní víno, které bude dokonale odrážet váš firemní brand. Nabízíme
                  personalizaci s vaším logem a firemním designem na etiketě.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full border-[#1a472a] text-[#1a472a] hover:bg-[#1a472a] hover:text-white">
                  <Link href="/degustace">Více informací <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Všechny degustace probíhají v našem vinném sklepě v Suchohrdlech u Znojma. Součástí každé degustace je
              profesionální výklad, představení našich vín a možnost ochutnat vína přímo ze sudu.
            </p>
            <Button asChild size="lg" className="bg-[#1a472a] hover:bg-[#2a573a] text-white">
              <Link href="#kontakt">Rezervovat degustaci</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sklep Section */}
      <section id="sklep" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image src="/images/Sklep/sklep1.jpg" alt="Vinný sklep" fill className="object-cover rounded-lg" />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Máme sklep a můžete ho vidět!</h2>
              <p className="text-muted-foreground">
                Navštivte náš vinný sklep, kde můžete zažít autentickou atmosféru vinařského řemesla. V našem sklepě
                udržujeme ideální podmínky pro zrání vín a jejich správné skladování.
              </p>
              <p className="text-muted-foreground">
                Přijďte se podívat na místo, kde vznikají naše vína. Během prohlídky vám ukážeme tradiční postupy výroby
                vína a můžete ochutnat naše nejlepší vína přímo ze sudu.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="relative h-[150px] rounded-lg overflow-hidden">
                  <Image src="/images/Sklep/sklep1.jpg" alt="Vinný sklep" fill className="object-cover rounded-lg" />
                </div>
                <div className="relative h-[150px] rounded-lg overflow-hidden">
                  <Image src="/images/Sklep/sklep2.jpg" alt="Vinný sklep" fill className="object-cover rounded-lg" />
                </div>
                <div className="relative h-[150px] rounded-lg overflow-hidden">
                  <Image src="/images/Sklep/sklep3.jpg" alt="Vinný sklep" fill className="object-cover rounded-lg" />
                </div>
              </div>
              <Button asChild className="bg-[#1a472a] hover:bg-[#2a573a] text-white">
                <a href="#kontakt">Domluvit návštěvu</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vína Section */}
      <section id="vina" className="py-16 md:py-24 bg-gray-100">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Naše vína</h2>
            <p className="text-muted-foreground">
              Naše portfolio zahrnuje pečlivě zpracovaná vína, která odrážejí terroir Znojemska. Věnujeme se bílým i
              červeným odrůdám.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                id: "sauvignon",
                name: "Sauvignon",
                description: "Suché, 0,75l, ročník 2024",
                image: "/images/vina/Sauvignon.JPG"
              },
              {
                id: "ryzlink-rynsky",
                name: "Ryzlink rýnský",
                description: "Suché, 0,75l, ročník 2024",
                image: "/images/vina/Ryzlink rýnský.JPG"
              },
              {
                id: "tramin-cerveny",
                name: "Tramín červený",
                description: "Polosladké, 0,75l, ročník 2024",
                image: "/images/vina/Tramín červený.JPG"
              },
              {
                id: "svatovarineske-rose",
                name: "Svatovařinecké rosé",
                description: "Polosuché, 0,75l, ročník 2024",
                image: "/images/vina/Svatovařinecké rosé.JPG"
              },
              {
                id: "svatovarineske",
                name: "Svatovařinecké",
                description: "Suché, 0,75l, ročník 2023",
                image: "/images/vina/Svatovařinecké.jpg"
              },
              {
                id: "veltlinske-zelene",
                name: "Veltlínské zelené",
                description: "Suché, 0,75l, ročník 2023",
                image: "/images/vina/Veltlínské zelené.JPG"
              }
            ].map((vino) => (
              <Link 
                key={vino.id}
                href={`/vina/${vino.id}`} 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1"
              >
                <div className="relative h-[280px] p-4">
                  <Image 
                    src={vino.image} 
                    alt={vino.name} 
                    fill 
                    className="object-contain p-2 rounded-xl" 
                  />
                </div>
                <div className="p-6 text-center bg-white border-t border-gray-100 flex-grow flex flex-col justify-center">
                  <h3 className="font-medium text-lg text-[#1a472a]">{vino.name}</h3>
                  <p className="text-sm text-gray-500 mt-2">{vino.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center bg-white p-8 rounded-xl shadow-sm max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-6">
              Naše vína jsou tvořena s důrazem na kvalitu a autentičnost. Rádi vám pomůžeme s výběrem vína, které
              uspokojí vaše chuťové pohárky.
            </p>
            <Button asChild className="bg-[#1a472a] hover:bg-[#2a573a] text-white rounded-full px-6">
              <Link href="/vina">Nabídka vín</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-[#1a472a]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <blockquote className="text-2xl md:text-3xl text-white font-light italic">
              "Ve víně je pravda, v našem víně je pravda o Znojemsku."
            </blockquote>
            <p className="text-white/80">- Dva Smysly Winery</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a472a]">Kontakt</h2>
              <p className="text-muted-foreground">Pro více informací o našich službách nás neváhejte kontaktovat.</p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 mt-1 text-[#1a472a]" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:ondrakarady1@seznam.cz"
                      className="text-muted-foreground hover:text-[#1a472a] transition-colors"
                    >
                      ondrakarady1@seznam.cz
                    </a>
                    <br />
                    <a
                      href="mailto:lukasmudrych@seznam.cz"
                      className="text-muted-foreground hover:text-[#1a472a] transition-colors"
                    >
                      lukasmudrych@seznam.cz
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 mt-1 text-[#1a472a]" />
                  <div>
                    <p className="font-medium">Telefon</p>
                    <a href="tel:+420720611514" className="text-muted-foreground hover:text-[#1a472a] transition-colors">
                      +420 720 611 514
                    </a>
                    <br />
                    <a href="tel:+420602600140" className="text-muted-foreground hover:text-[#1a472a] transition-colors">
                      +420 602 600 140
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 mt-1 text-[#1a472a]" />
                  <div>
                    <p className="font-medium">Lokalita</p>
                    <p className="text-muted-foreground">Suchohrdly u Znojma</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-medium mb-2">Sledujte nás</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/vinarstvi_dvasmysly/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a href="/vina" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                    <ShoppingBag className="h-5 w-5" />
                    <span className="sr-only">Nabídka vín</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Napište nám</h3>
              <div className="space-y-2 mb-4">
                <p className="text-sm text-muted-foreground">
                  Vyplňte formulář a my se vám co nejdříve ozveme. Pole označená * jsou povinná.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Image src="/logo/DVA SMYSLY Vector.png" alt="Dva Smysly" width={100} height={40} className="h-auto" />
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Vinařství Dva Smysly. Všechna práva vyhrazena.
            </p>
            <nav className="flex items-center gap-6">
              <a href="#about" className="text-sm text-muted-foreground hover:text-[#1a472a] transition-colors">
                O nás
              </a>
              <a href="#degustace" className="text-sm text-muted-foreground hover:text-[#1a472a] transition-colors">
                Degustace
              </a>
              <a href="#kontakt" className="text-sm text-muted-foreground hover:text-[#1a472a] transition-colors">
                Kontakt
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

