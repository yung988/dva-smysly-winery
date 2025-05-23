import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ArrowLeft, Wine, Euro, Instagram, Facebook, ShoppingBag } from "lucide-react"

export default function DegustacePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hlavička stránky */}
      <section className="relative h-[50vh] overflow-hidden -mt-16 pt-16">
        <div className="absolute inset-0">
          <Image src="images/degustace/degustace.png" alt="Degustace" fill className="object-cover" priority />
        </div>
        <div className="relative container h-full flex flex-col justify-center">
          <div className="max-w-3xl space-y-4 bg-white/80 backdrop-blur-sm p-8 rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a472a] text-left">Degustace</h1>
            <p className="text-lg text-[#1a472a] text-left">
              Poznejte naše vína osobně během řízené degustace. Dozvíte se o našem přístupu k vinařství a ochutnáte to
              nejlepší z naší produkce.
            </p>
            <Button asChild variant="outline" className="bg-transparent text-[#1a472a] border-[#1a472a] hover:bg-[#1a472a] hover:text-white">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Zpět na hlavní stránku
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Obsah stránky */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-left">Naše degustační programy</h2>
          
          <div className="space-y-16">
            {/* Řízená degustace */}
            <div className="grid md:grid-cols-5 gap-10 items-start">
              <div className="md:col-span-3 space-y-6">
                <h3 className="text-2xl font-bold text-left">Řízená degustace</h3>
                <div className="flex items-center space-x-2">
                  <div className="font-medium">Cena:</div>
                  <div>350 Kč za osobu</div>
                </div>
                <div className="space-y-4 text-left">
                  <p className="text-left">
                    Naše řízené degustace jsou perfektní způsob, jak poznat naše vína a vinařskou filozofii. Během dvou hodin vás provedeme světem vína a ukážeme vám, jak správně víno degustovat, hodnotit a především si ho užít.
                  </p>
                  <p className="text-left">
                    Degustace probíhá v našem autentickém vinném sklepě v Suchohrdlech u Znojma, kde můžete zažít pravou atmosféru znojemského vinařství.
                  </p>
                  <h4 className="font-bold text-lg text-left">Co degustace zahrnuje:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-left">
                    <li>6 vzorků pečlivě vybraných vín z naší produkce</li>
                    <li>Odborný výklad o vinařství, vinicích a výrobě vína</li>
                    <li>Možnost zakoupení degustovaných vín přímo na místě</li>
                    <li>Prohlídka vinného sklepa</li>
                  </ul>
                  <h4 className="font-bold text-lg text-left">Pro koho je degustace vhodná:</h4>
                  <p className="text-left">
                    Degustace je ideální pro milovníky vína všech úrovní znalostí - od začátečníků po znalce. Přizpůsobíme výklad tak, aby byl srozumitelný a zajímavý pro všechny účastníky.
                  </p>

                  {/* Poznámka 1: Degustace zdarma */}
                  <p className="text-sm text-muted-foreground mt-4 text-left">
                    <strong>Tip:</strong> Při zakoupení minimálně 3 lahví vína na osobu je degustace <strong>zdarma</strong>.
                  </p>

                  {/* Poznámka 2: Posezení a raut */}
                  <p className="text-sm text-muted-foreground mt-2 text-left">
                    Po degustaci je možné posedět v naší degustační místnosti. Na přání rádi zajistíme občerstvení, raut či doprovodný program.
                  </p>
                </div>
                
                <div className="flex items-center gap-2">
                  <Wine className="h-5 w-5 text-[#1a472a]" />
                  <span>350 Kč</span>
                </div>
                <Button asChild className="bg-[#1a472a] hover:bg-[#2a573a] text-white">
                  <Link href="/#kontakt">Rezervovat</Link>
                </Button>
              </div>
              <div className="md:col-span-2 relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/images/Sklep/sklep1.jpg" alt="Řízená degustace" fill className="object-cover rounded-lg" />
              </div>
            </div>
            
            {/* Firemní degustace */}
            <div className="grid md:grid-cols-5 gap-10 items-start">
              <div className="order-2 md:order-1 md:col-span-2 relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/images/Sklep/sklep2.jpg" alt="Firemní degustace" fill className="object-cover rounded-lg" />
              </div>
              <div className="order-1 md:order-2 md:col-span-3 space-y-6">
                <h3 className="text-2xl font-bold text-left">Firemní degustace</h3>
                <div className="flex items-center space-x-2">
                  <div className="font-medium">Cena:</div>
                  <div>Individuální kalkulace dle počtu osob a programu</div>
                </div>
                <div className="space-y-4 text-left">
                  <p className="text-left">
                    Přidejte do svých firemních večírků a teambuildingů nezapomenutelný prvek s našimi profesionálně vedenými degustacemi. Posílíme vztahy mezi kolegy při společném objevování kvalitních vín.
                  </p>
                  <p className="text-left">
                    Firemní degustace je skvělou příležitostí, jak stmelit váš tým nebo odměnit vaše klienty a partnery. Prostředí našeho vinného sklepa poskytuje perfektní kulisu pro neformální setkání i obchodní jednání.
                  </p>
                  <h4 className="font-bold text-lg text-left">Co nabízíme:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-left">
                    <li>Přizpůsobení programu podle vašich potřeb a počtu účastníků</li>
                    <li>Kompletní catering včetně občerstvení nebo večeře</li>
                    <li>Možnost rozšíření o další aktivity (vinohradnické práce, soutěže)</li>
                    <li>Dárkové balení vín pro účastníky</li>
                    <li>Možnost dlouhodobé spolupráce</li>
                  </ul>
                  <h4 className="font-bold text-lg text-left">Proč zvolit firemní degustaci:</h4>
                  <p className="text-left">
                    Společný zážitek posiluje týmovou spolupráci a v příjemné atmosféře často vznikají nejlepší nápady. Navíc získáte znalosti o víně, které můžete využít při obchodních jednáních či společenských událostech.
                  </p>
                </div>
                
                <Button asChild className="bg-[#1a472a] hover:bg-[#2a573a] text-white mt-4">
                  <Link href="/#kontakt">Požádat o nabídku</Link>
                </Button>
              </div>
            </div>
            
            {/* Exkluzivní firemní víno */}
            <div className="grid md:grid-cols-5 gap-10 items-start">
              <div className="md:col-span-3 space-y-6">
                <h3 className="text-2xl font-bold text-left">Exkluzivní firemní víno</h3>
                <div className="flex items-center space-x-2">
                  <div className="font-medium">Cena:</div>
                  <div>Dle množství a typu vína</div>
                </div>
                <div className="space-y-4 text-left">
                  <p className="text-left">
                    Vytvořte si s námi exkluzivní víno, které bude dokonale odrážet váš firemní brand. Nabízíme personalizaci s vaším logem a firemním designem na etiketě.
                  </p>
                  <p className="text-left">
                    Firemní víno je výjimečným dárkem pro vaše klienty, partnery nebo zaměstnance. Díky osobitému designu a kvalitnímu obsahu vytvoříte nezapomenutelný dojem a posílíte svou značku.
                  </p>
                  <h4 className="font-bold text-lg text-left">Možnosti personalizace:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-left">
                    <li>Vlastní design etikety s logem vaší společnosti</li>
                    <li>Výběr vhodného vína podle vašich preferencí</li>
                    <li>Volba typu lahve a uzávěru</li>
                    <li>Luxusní balení pro jednotlivé lahve nebo celé sady</li>
                    <li>Doplňkové materiály (brožura, přání)</li>
                  </ul>
                  <h4 className="font-bold text-lg text-left">Výhody firemního vína:</h4>
                  <p className="text-left">
                    Firemní víno je dárkem s přidanou hodnotou - nejen že potěší svou chutí, ale také posílí povědomí o vaší značce a vytvoří osobní spojení mezi vámi a obdarovaným. Je to elegantní způsob, jak se odlišit od konkurence.
                  </p>
                </div>
                
                <Button asChild className="bg-[#1a472a] hover:bg-[#2a573a] text-white mt-4">
                  <Link href="/#kontakt">Požádat o nabídku</Link>
                </Button>
              </div>
              <div className="md:col-span-2 relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/images/Sklep/sklep3.jpg" alt="Firemní víno" fill className="object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA sekce */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-left space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a472a] text-left">Máte zájem o degustaci?</h2>
            <p className="text-lg text-muted-foreground text-left">
              Kontaktujte nás pro více informací o termínech nebo pro rezervaci degustace.
            </p>
            <div className="flex flex-wrap justify-start gap-4">
              <Button asChild size="lg" className="bg-[#1a472a] hover:bg-[#2a573a] text-white">
                <Link href="/#kontakt">Kontaktovat</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[#1a472a] text-[#1a472a] hover:bg-[#1a472a] hover:text-white">
                <Link href="/vina">Prohlédnout vína</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
} 