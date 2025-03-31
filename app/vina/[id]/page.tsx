import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

// Data o vínech
const vina = [
  {
    id: "ryzlink-rynsky",
    name: "Ryzlink rýnský",
    description: "Suché, 0,75l, ročník 2023",
    image: "/images/tramin.jpeg",
    detail: "Elegantní Ryzlink rýnský s typickou minerální strukturou a svěžími tóny zeleného jablka a citrusů.",
    longDescription: [
      "Náš Ryzlink rýnský je ztělesněním terroir Znojemské vinařské podoblasti. Hrozny byly ručně sbírány v optimální zralosti a zpracovány s maximální péčí a respektem k tradičním postupům.",
      "Víno zaujme svou zlatavou barvou s lehkými zelenkavými odlesky. V nose objevíte intenzivní aroma zeleného jablka, citrusových plodů a jemné minerální tóny. Na patře oceníte svěží kyselinku, která je v dokonalé harmonii s ovocnou složkou a minerálním charakterem.",
      "Tento Ryzlink rýnský je ideálním společníkem k rybím pokrmům, lehkým předkrmům nebo jako osvěžující aperitiv. Nejlépe vynikne při teplotě 8-10°C."
    ],
    info: {
      oblast: "Znojemská vinařská podoblast",
      alkohol: "12,5 % obj.",
      zbytkovy_cukr: "2,5 g/l",
      kyseliny: "6,8 g/l",
      doporucena_teplota: "8-10 °C"
    }
  },
  {
    id: "sauvignon",
    name: "Sauvignon",
    description: "Polosuché, 0,75l, ročník 2023",
    image: "/images/sauvignon.jpeg",
    detail: "Aromatický Sauvignon s bohatými tóny černého rybízu, angreštu a bylin.",
    longDescription: [
      "Sauvignon z našeho vinařství je výrazným reprezentantem této oblíbené odrůdy. Hrozny dozrávaly na nejlepších polohách, což jim dodalo nezaměnitelný charakter a intenzitu.",
      "Víno se vyznačuje světle žlutou barvou se zelenkavými odlesky. V aromatickém profilu dominují tóny černého rybízu, angreštu, kopřivy a dalších bylin. Chuť je svěží, s příjemným poměrem zbytkového cukru a kyselin, které umocňují ovocný charakter vína.",
      "Tento Sauvignon skvěle doplní pokrmy z čerstvých bylin, kozí sýry nebo lehké saláty. Doporučujeme podávat při teplotě 9-11°C."
    ],
    info: {
      oblast: "Znojemská vinařská podoblast",
      alkohol: "12 % obj.",
      zbytkovy_cukr: "7 g/l",
      kyseliny: "6,5 g/l",
      doporucena_teplota: "9-11 °C"
    }
  },
  {
    id: "veltlinske-zelene",
    name: "Veltlínské zelené",
    description: "Suché, 0,75l, ročník 2023",
    image: "/images/vecerka.jpeg",
    detail: "Tradiční Veltlínské zelené s jemným pepřovým nádechem a osvěžující kyselinkou.",
    longDescription: [
      "Veltlínské zelené je tradiční odrůdou znojemské oblasti a my jsme hrdí na to, že ji můžeme nabídnout v té nejlepší kvalitě. Naše vinice poskytují ideální podmínky pro pěstování této odrůdy.",
      "Víno se prezentuje světle žlutou barvou. V aromatickém profilu najdete typické tóny zeleného jablka, bílého pepře a jemných mandlí. Chuť je svěží, suchá, s příjemnou kyselinkou a charakteristickým lehce kořenitým závěrem.",
      "Veltlínské zelené je univerzálním vínem, které doprovodí širokou škálu pokrmů od tradičních českých jídel po asijskou kuchyni. Nejlépe chutná při teplotě 9-11°C."
    ],
    info: {
      oblast: "Znojemská vinařská podoblast",
      alkohol: "12 % obj.",
      zbytkovy_cukr: "1,8 g/l",
      kyseliny: "6,2 g/l",
      doporucena_teplota: "9-11 °C"
    }
  },
  {
    id: "frankovka-rose",
    name: "Frankovka Rosé",
    description: "Polosuché, 0,75l, ročník 2023",
    image: "/images/rose.jpeg",
    detail: "Svěží růžové víno s příjemnými ovocnými tóny lesních jahod a malin.",
    longDescription: [
      "Naše Frankovka Rosé představuje svěží a ovocnou stránku této tradiční odrůdy. Krátká macerace hroznů dodala vínu krásnou růžovou barvu a extrahovala jemné ovocné tóny.",
      "Víno zaujme svou lososovou barvou a intenzivním aromatem červeného ovoce, především lesních jahod, malin a třešní. Chuť je šťavnatá, s příjemnou ovocnou sladkostí v harmonii s osvěžující kyselinkou.",
      "Frankovka Rosé je ideálním společníkem pro letní posezení, lehké saláty, či jako aperitiv. Podávejte vychlazené na 8-10°C."
    ],
    info: {
      oblast: "Znojemská vinařská podoblast",
      alkohol: "11,5 % obj.",
      zbytkovy_cukr: "9 g/l",
      kyseliny: "6 g/l",
      doporucena_teplota: "8-10 °C"
    }
  },
  {
    id: "cuvee",
    name: "Cuvée",
    description: "Suché, 0,75l, ročník 2023",
    image: "/images/cuvee.jpeg",
    detail: "Harmonické cuvée vytvořené z pečlivě vybraných odrůd, které se navzájem doplňují a vytváří komplexní chuťový zážitek.",
    longDescription: [
      "Naše Cuvée je výsledkem pečlivého výběru a míchání těch nejlepších hroznů z naší produkce. Kombinace různých odrůd dodává vínu mimořádnou komplexnost a harmonii.",
      "Víno má atraktivní zlatožlutou barvu. V aromatickém profilu objevíte tóny tropického ovoce, medu a jemných květinových odstínů. Chuť je plná, s dobrou strukturou a dlouhým, harmonickým závěrem.",
      "Toto Cuvée je skvělým doprovodem k pokrmům z bílého masa, krémovým omáčkám či zrajícím sýrům. Doporučujeme podávat při teplotě 10-12°C."
    ],
    info: {
      oblast: "Znojemská vinařská podoblast",
      alkohol: "13 % obj.",
      zbytkovy_cukr: "3 g/l",
      kyseliny: "6,3 g/l",
      doporucena_teplota: "10-12 °C"
    }
  }
]

export default function DetailVinaPage({ params }: { params: { id: string } }) {
  // Najdi víno podle ID
  const vino = vina.find((v) => v.id === params.id)
  
  // Pokud víno neexistuje, vrať 404
  if (!vino) {
    notFound()
  }

  // Najdi další víno (cyklicky)
  const currentIndex = vina.findIndex((v) => v.id === params.id)
  const nextIndex = (currentIndex + 1) % vina.length
  const nextVino = vina[nextIndex]

  return (
    <div className="min-h-screen bg-white">
      {/* Hlavička stránky */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src={vino.image} 
            alt={vino.name} 
            fill 
            className="object-cover grayscale" 
            priority 
          />
        </div>
        <div className="relative container h-full flex flex-col justify-end pb-16">
          <div className="max-w-3xl space-y-4 bg-black/30 backdrop-blur-sm p-8 rounded-lg">
            <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black mb-4">
              <Link href="/vina">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Zpět na nabídku vín
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold text-white">{vino.name}</h1>
            <p className="text-xl text-white">{vino.description}</p>
          </div>
        </div>
      </section>

      {/* Detail vína */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">O víně</h2>
                {vino.longDescription.map((paragraph, idx) => (
                  <p key={idx} className="text-lg text-muted-foreground">{paragraph}</p>
                ))}
              </div>
              
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-4">Parametry vína</h3>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <dt className="font-medium">Vinařská oblast</dt>
                      <dd className="text-muted-foreground">{vino.info.oblast}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Obsah alkoholu</dt>
                      <dd className="text-muted-foreground">{vino.info.alkohol}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Zbytkový cukr</dt>
                      <dd className="text-muted-foreground">{vino.info.zbytkovy_cukr}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Kyseliny</dt>
                      <dd className="text-muted-foreground">{vino.info.kyseliny}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Doporučená teplota</dt>
                      <dd className="text-muted-foreground">{vino.info.doporucena_teplota}</dd>
                    </div>
                  </dl>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center gap-4">
                <Button asChild className="bg-black hover:bg-gray-800 text-white">
                  <Link href="/#kontakt">Kontaktovat pro nákup</Link>
                </Button>
                <Button asChild variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                  <Link href="/degustace">Prohlédnout degustace</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Další vína */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Další vína</h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image 
                  src={nextVino.image} 
                  alt={nextVino.name} 
                  fill 
                  className="object-cover grayscale" 
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{nextVino.name}</h3>
                <p className="text-lg text-muted-foreground">{nextVino.description}</p>
                <p>{nextVino.detail}</p>
                <Button asChild className="bg-black hover:bg-gray-800 text-white">
                  <Link href={`/vina/${nextVino.id}`}>Zobrazit detail</Link>
                </Button>
              </div>
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
              <Link href="/#about" className="text-sm text-muted-foreground hover:text-black transition-colors">
                O nás
              </Link>
              <Link href="/vina" className="text-sm text-muted-foreground hover:text-black transition-colors">
                Vína
              </Link>
              <Link href="/#kontakt" className="text-sm text-muted-foreground hover:text-black transition-colors">
                Kontakt
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
} 