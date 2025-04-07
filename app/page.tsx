import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Instagram, ShoppingBag, ArrowRight, Quote } from "lucide-react"
import Link from "next/link"
import ContactForm from "@/components/contact/ContactForm"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-[#1a472a]/90 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Dva Smysly" width={120} height={40} className="h-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
              O nás
            </a>
            <a href="#degustace" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
              Degustace
            </a>
            <a href="#sklep" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
              Sklep
            </a>
            <a href="#vina" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
              Vína
            </a>
            <a href="#kontakt" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
              Kontakt
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="/vina"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300 transition-colors"
            >
              <ShoppingBag className="h-4 w-4" />
              Nabídka vín
            </a>
            <a
              href="https://www.instagram.com/vinarstvi_dvasmysly/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/grapes-green.jpeg" alt="Vinice" fill className="object-cover" priority />
        </div>
        <div className="relative container h-full flex flex-col justify-center">
          <div className="max-w-3xl space-y-4 bg-white/80 backdrop-blur-sm p-8 rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a472a]">Dva Smysly Winery</h1>
            <p className="text-lg text-[#1a472a]">
              Vítejte ve světě našeho vinařství, kde se snoubí tradice s moderním přístupem. Naše vína jsou výsledkem
              pečlivé práce a respektu k terroir Znojemské vinařské podoblasti.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-[#1a472a] hover:bg-[#2a573a] text-white">
                <Link href="/vina">Prohlédnout vína</Link>
              </Button>
              <Button asChild variant="outline" className="border-[#1a472a] text-[#1a472a] hover:bg-[#1a472a] hover:text-white">
                <Link href="/degustace">Rezervovat degustaci</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <Image src="/images/about/about hlavni.JPG" alt="O nás" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#1a472a]">O nás</h2>
              <p className="text-lg text-muted-foreground">
                Jsme mladé vinařství ze Znojemské vinařské podoblasti, které vzniklo v roce 2020. Naším cílem je produkovat
                kvalitní vína, která budou reprezentovat terroir této oblasti.
              </p>
              <p className="text-lg text-muted-foreground">
                Název Dva Smysly symbolizuje spojení dvou základních smyslů při vnímání vína - čichu a chuti. Zároveň
                odkazuje na dva přátele, kteří stojí za vznikem tohoto projektu.
              </p>
              <Button asChild className="bg-[#1a472a] hover:bg-[#2a573a] text-white">
                <Link href="/vina">Prohlédnout vína</Link>
              </Button>
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
                <Button variant="outline" asChild className="w-full border-black text-black hover:bg-black hover:text-white">
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
                <Button variant="outline" asChild className="w-full border-black text-black hover:bg-black hover:text-white">
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
                <Button variant="outline" asChild className="w-full border-black text-black hover:bg-black hover:text-white">
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
            <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white">
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
              <Image src="/images/Sklep/sklep1.jpg" alt="Vinný sklep" fill className="object-cover grayscale" />
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
                  <Image src="/images/Sklep/sklep1.jpg" alt="Vinný sklep" fill className="object-cover grayscale" />
                </div>
                <div className="relative h-[150px] rounded-lg overflow-hidden">
                  <Image src="/images/Sklep/sklep2.jpg" alt="Vinný sklep" fill className="object-cover grayscale" />
                </div>
                <div className="relative h-[150px] rounded-lg overflow-hidden">
                  <Image src="/images/Sklep/sklep3.jpg" alt="Vinný sklep" fill className="object-cover grayscale" />
                </div>
              </div>
              <Button asChild className="bg-black hover:bg-gray-800 text-white">
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8 mb-8">
            <Link href="/vina/sauvignon" className="bg-white rounded-lg overflow-hidden shadow-sm group">
              <div className="relative h-[300px]">
                <Image src="/images/vina/Sauvignon.JPG" alt="Sauvignon" fill className="object-contain grayscale transition-all duration-300 group-hover:grayscale-0 rounded-lg" />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-medium">Sauvignon</h3>
                <p className="text-sm text-gray-500 mt-1">Suché, 0,75l, ročník 2024</p>
              </div>
            </Link>
            
            <Link href="/vina/ryzlink-rynsky" className="bg-white rounded-lg overflow-hidden shadow-sm group">
              <div className="relative h-[300px]">
                <Image src="/images/vina/Ryzlink rýnský.JPG" alt="Ryzlink rýnský" fill className="object-contain grayscale transition-all duration-300 group-hover:grayscale-0 rounded-lg" />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-medium">Ryzlink rýnský</h3>
                <p className="text-sm text-gray-500 mt-1">Suché, 0,75l, ročník 2024</p>
              </div>
            </Link>
            
            <Link href="/vina/tramin-cerveny" className="bg-white rounded-lg overflow-hidden shadow-sm group">
              <div className="relative h-[300px]">
                <Image src="/images/vina/Tramín červený.JPG" alt="Tramín červený" fill className="object-contain grayscale transition-all duration-300 group-hover:grayscale-0 rounded-lg" />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-medium">Tramín červený</h3>
                <p className="text-sm text-gray-500 mt-1">Polosladké, 0,75l, ročník 2024</p>
              </div>
            </Link>
            
            <Link href="/vina/svatovarineske-rose" className="bg-white rounded-lg overflow-hidden shadow-sm group">
              <div className="relative h-[300px]">
                <Image src="/images/vina/Svatovařinecké rosé.JPG" alt="Svatovařinecké rosé" fill className="object-contain grayscale transition-all duration-300 group-hover:grayscale-0 rounded-lg" />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-medium">Svatovařinecké rosé</h3>
                <p className="text-sm text-gray-500 mt-1">Polosuché, 0,75l, ročník 2024</p>
              </div>
            </Link>
            
            <Link href="/vina/svatovarineske" className="bg-white rounded-lg overflow-hidden shadow-sm group">
              <div className="relative h-[300px]">
                <Image src="/images/vina/Svatovařinecké.jpg" alt="Svatovařinecké" fill className="object-contain grayscale transition-all duration-300 group-hover:grayscale-0 rounded-lg" />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-medium">Svatovařinecké</h3>
                <p className="text-sm text-gray-500 mt-1">Suché, 0,75l, ročník 2023</p>
              </div>
            </Link>

            <Link href="/vina/veltlinske-zelene" className="bg-white rounded-lg overflow-hidden shadow-sm group">
              <div className="relative h-[300px]">
                <Image src="/images/vina/Veltlínské zelené.JPG" alt="Veltlínské zelené" fill className="object-contain grayscale transition-all duration-300 group-hover:grayscale-0 rounded-lg" />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-medium">Veltlínské zelené</h3>
                <p className="text-sm text-gray-500 mt-1">Suché, 0,75l, ročník 2024</p>
              </div>
            </Link>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Naše vína jsou tvořena s důrazem na kvalitu a autentičnost. Rádi vám pomůžeme s výběrem vína, které
              uspokojí vaše chuťové pohárky.
            </p>
            <Button asChild className="bg-black hover:bg-gray-800 text-white">
              <Link href="/vina">Nabídka vín</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-[#1a472a]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Quote className="h-12 w-12 text-white mx-auto" />
            <blockquote className="text-2xl md:text-3xl text-white font-light italic">
              "Ve víně je pravda, v našem víně je pravda o Znojemsku."
            </blockquote>
            <p className="text-white/80">- Dva Smysly Winery</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#1a472a]">Kontakt</h2>
              <p className="text-lg text-muted-foreground">
                Máte zájem o naše vína nebo degustaci? Neváhejte nás kontaktovat. Rádi zodpovíme všechny vaše dotazy.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#1a472a]" />
                  <span>Znojemská vinařská podoblast</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-[#1a472a]" />
                  <a href="mailto:info@dvasmysly.cz" className="hover:underline">
                    info@dvasmysly.cz
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-[#1a472a]" />
                  <a href="tel:+420777888999" className="hover:underline">
                    +420 777 888 999
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Instagram className="h-5 w-5 text-[#1a472a]" />
                  <a href="https://instagram.com/dvasmysly" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    @dvasmysly
                  </a>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/map.jpeg" alt="Mapa" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Dva Smysly" width={100} height={40} className="h-auto" />
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Vinařství Dva Smysly. Všechna práva vyhrazena.
            </p>
            <nav className="flex items-center gap-6">
              <a href="#about" className="text-sm text-muted-foreground hover:text-black transition-colors">
                O nás
              </a>
              <a href="#degustace" className="text-sm text-muted-foreground hover:text-black transition-colors">
                Degustace
              </a>
              <a href="#kontakt" className="text-sm text-muted-foreground hover:text-black transition-colors">
                Kontakt
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

