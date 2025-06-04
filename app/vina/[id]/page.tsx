import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

// Data o vínech
const vina = [
  {
    id: "sauvignon",
    name: "Sauvignon",
    description: "Suché, 0,75l, ročník 2024",
    image: "/images/vina/sauvignon_2024.png",
    detail: "Na vůni i chuti silný citrusový projev. Výrazný je červený grepfruit a pomelo. Výrazná a dlouhá dochuť.",
    longDescription: [
      "Sauvignon z našeho vinařství je výrazným reprezentantem této oblíbené odrůdy. Hrozny dozrávaly na nejlepších polohách, což jim dodalo nezaměnitelný charakter a intenzitu.",
      "Víno se vyznačuje světle žlutou barvou se zelenkavými odlesky. V aromatickém profilu dominují tóny citrusů, především červeného grepfruitu a pomela. Chuť je svěží, s výraznou a dlouhou dochutí.",
      "Tento Sauvignon skvěle doplní pokrmy z čerstvých bylin, kozí sýry nebo lehké saláty. Doporučujeme podávat při teplotě 9-11°C."
    ],
    info: {
      oblast: "Znojemská",
      alkohol: "11,5 % obj.",
      zbytkovy_cukr: "8,9 g/l",
      kyseliny: "6,5 g/l",
      doporucena_teplota: "9-11 °C"
    }
  },
  {
    id: "ryzlink-rynsky",
    name: "Ryzlink rýnský",
    description: "Suché, 0,75l, ročník 2024",
    image: "/images/vina/ryzlink_2024.png",
    detail: "Intezivní aroma čerstvé meruňky s limetkovou šťávou. Křupavá kyselina.",
    longDescription: [
      "Ryzlink rýnský je ztělesněním terroir Znojemské vinařské podoblasti. Hrozny byly ručně sbírány v optimální zralosti a zpracovány s maximální péčí a respektem k tradičním postupům.",
      "Víno zaujme svou zlatavou barvou s lehkými zelenkavými odlesky. V nose objevíte intenzivní aroma čerstvé meruňky s limetkovou šťávou. Na patře oceníte křupavou kyselinku, která je v dokonalé harmonii s ovocnou složkou.",
      "Tento Ryzlink rýnský je ideálním společníkem k rybím pokrmům, lehkým předkrmům nebo jako osvěžující aperitiv. Nejlépe vynikne při teplotě 8-10°C."
    ],
    info: {
      oblast: "Znojemská",
      alkohol: "12,5 % obj.",
      zbytkovy_cukr: "7,7 g/l",
      kyseliny: "6,8 g/l",
      doporucena_teplota: "8-10 °C"
    }
  },
  {
    id: "tramin-cerveny",
    name: "Tramín červený",
    description: "Polosladké, 0,75l, ročník 2024",
    image: "/images/vina/tramin_2024.png",
    detail: "Na vůni jemné aroma květu růže, na chutí příjemně kořenité. Celý aromatický profil výborně podporuje lehce vyšší zbytkový cukr.",
    longDescription: [
      "Tramín červený je odrůda známá svým výrazným aromatickým profilem a my jsme se snažili tento charakter v našem víně maximálně podtrhnout.",
      "Víno se vyznačuje zlatožlutou barvou. V aromatickém profilu dominuje jemné aroma květu růže a kořenité tóny. Chuť je plná, s příjemnou kořenitostí, kterou skvěle doplňuje vyšší zbytkový cukr.",
      "Toto víno je skvělým společníkem k pikantním asijským pokrmům, sýrům s modrou plísní nebo jako aperitiv. Podávejte při teplotě 10-12°C."
    ],
    info: {
      oblast: "Znojemská",
      alkohol: "12,0 % obj.",
      zbytkovy_cukr: "18 g/l",
      kyseliny: "6,0 g/l",
      doporucena_teplota: "10-12 °C"
    }
  },
  {
    id: "svatovavrinecke-rose",
    name: "Svatovavřinecké rosé",
    description: "Polosuché, 0,75l, ročník 2024",
    image: "/images/vina/svatovavrinecke_rose_2024.png",
    detail: "Lehké víno snižším obsahem alkoholu. Na vůni i chuti nalezneme třešnový kompot s lístkem máty.",
    longDescription: [
      "Naše Svatovavřinecké rosé představuje svěží a ovocnou stránku této tradiční odrůdy. Krátká macerace hroznů dodala vínu krásnou růžovou barvu a extrahovala jemné ovocné tóny.",
      "Víno zaujme svou lososovou barvou a intenzivním aromatem červeného ovoce, především třešní s nádechem máty. Chuť je šťavnatá, s příjemnou ovocnou sladkostí v harmonii s osvěžující kyselinkou.",
      "Svatovavřinecké rosé je ideálním společníkem pro letní posezení, lehké saláty, či jako aperitiv. Podávejte vychlazené na 8-10°C."
    ],
    info: {
      oblast: "Znojemská",
      alkohol: "10,5 % obj.",
      zbytkovy_cukr: "12,2 g/l",
      kyseliny: "6,0 g/l",
      doporucena_teplota: "8-10 °C"
    }
  },
  {
    id: "svatovavrinecke",
    name: "Svatovavřinecké",
    description: "Suché, 0,75l, ročník 2023",
    image: "/images/vina/svatovavrinecke_2023.png",
    detail: "Středně intezivní garnátová barva. Vyznačuje se tóny švestek a povidel s decentním nádechem dubového dřeva.",
    longDescription: [
      "Svatovavřinecké je tradiční moravská odrůda, která v našich podmínkách dosahuje vynikající kvality. Hrozny pro toto víno byly pečlivě vybírány a zpracovány s důrazem na zachování odrůdového charakteru.",
      "Víno má středně intenzivní granátovou barvu. V aromatickém profilu dominují tóny švestek a povidel, které jsou decentně doplněny nádechem dubového dřeva. Chuť je plná, s příjemnou tříslovinou a dlouhou dochutí.",
      "Toto víno skvěle doprovodí pečená masa, zvěřinu nebo zralé sýry. Doporučujeme podávat při teplotě 16-18°C."
    ],
    info: {
      oblast: "Znojemská",
      alkohol: "12,0 % obj.",
      zbytkovy_cukr: "1 g/l",
      kyseliny: "5,2 g/l",
      doporucena_teplota: "16-18 °C"
    }
  },
  {
    id: "veltlinske-zelene",
    name: "Veltlínské zelené",
    description: "Suché, 0,75l, ročník 2024",
    image: "/images/vina/veltlin_2024.png",
    detail: "Typický znojemský Veltlín. Začátek lehce bylinný doplněný minerálnímy tóny. Dochuť je dlouhá a dominuje zde bílý pepř.",
    longDescription: [
      "Veltlínské zelené je tradiční odrůdou znojemské oblasti a my jsme hrdí na to, že ji můžeme nabídnout v té nejlepší kvalitě. Naše vinice poskytují ideální podmínky pro pěstování této odrůdy.",
      "Víno se prezentuje světle žlutou barvou. V aromatickém profilu najdete lehce bylinné tóny doplněné o minerální podtón. Chuť je svěží, suchá, s charakteristickou dlouhou dochutí, kde dominuje bílý pepř.",
      "Veltlínské zelené je univerzálním vínem, které doprovodí širokou škálu pokrmů od tradičních českých jídel po asijskou kuchyni. Nejlépe chutná při teplotě 9-11°C."
    ],
    info: {
      oblast: "Znojemská",
      alkohol: "12,5 % obj.",
      zbytkovy_cukr: "1,8 g/l",
      kyseliny: "6,2 g/l",
      locality: "Nový Šaldorf - Sedlešovice",
      doporucena_teplota: "9-11 °C"
    }
  }
]

async function getVinoData(id: string) {
  const vino = vina.find((v) => v.id === id);
  if (!vino) {
    return { vino: null, nextVino: null };
  }
  const currentIndex = vina.findIndex((v) => v.id === id);
  // Tento případ by neměl nastat, pokud je víno nalezeno a ID jsou konzistentní
  if (currentIndex === -1) { 
      return { vino: null, nextVino: null };
  }
  const nextIndex = (currentIndex + 1) % vina.length;
  const nextVino = vina[nextIndex];
  return { vino, nextVino };
}

export default async function DetailVinaPage({ params }: { params: { id: string } }) {
  const { vino, nextVino } = await getVinoData(params.id);

  if (!vino || !nextVino) { 
    notFound();
  }

  return (
    <div className="min-h-screen bg-white -mt-16 pt-16">
      {/* Navigace */}
      <div className="container py-3 md:py-4">
        <Button asChild variant="outline" className="text-sm md:text-base bg-transparent text-[#1a472a] border-[#1a472a] hover:bg-[#1a472a] hover:text-white">
          <Link href="/vina">
            <ArrowLeft className="mr-2 h-3 w-3 md:h-4 md:w-4" />
            Zpět na nabídku vín
          </Link>
        </Button>
      </div>

      {/* Detail vína */}
      <section className="py-6 md:py-12 lg:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {/* Levá část - fotka */}
            <div className="space-y-6 md:space-y-8">
              <div className="relative w-full h-[500px] md:h-[600px] lg:h-[750px] bg-transparent rounded-lg overflow-hidden">
                <Image 
                  src={vino.image} 
                  alt={vino.name} 
                  fill 
                  className="object-contain rounded-lg" 
                  priority 
                />
              </div>
            </div>

            {/* Pravá část - informace */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 text-left">{vino.name}</h1>
                <p className="text-base md:text-xl text-muted-foreground text-left">{vino.description}</p>
              </div>

              <div className="space-y-2 md:space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-left">O víně</h2>
                {vino.longDescription.map((paragraph, idx) => (
                  <p key={`${vino.id}-desc-${idx}`} className="text-sm md:text-base lg:text-lg text-muted-foreground text-left">{paragraph}</p>
                ))}
              </div>
              
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-left">Parametry vína</h3>
                <div className="bg-gray-50 p-4 md:p-6 rounded-lg">
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-sm md:text-base">
                    <div>
                      <dt className="font-medium text-left">Vinařská oblast</dt>
                      <dd className="text-muted-foreground text-left">{vino.info.oblast}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-left">Lokalita</dt>
                      <dd className="text-muted-foreground text-left">{vino.info.locality}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-left">Obsah alkoholu</dt>
                      <dd className="text-muted-foreground text-left">{vino.info.alkohol}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-left">Zbytkový cukr</dt>
                      <dd className="text-muted-foreground text-left">{vino.info.zbytkovy_cukr}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-left">Kyseliny</dt>
                      <dd className="text-muted-foreground text-left">{vino.info.kyseliny}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-left">Doporučená teplota</dt>
                      <dd className="text-muted-foreground text-left">{vino.info.doporucena_teplota}</dd>
                    </div>
                  </dl>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button asChild className="text-sm md:text-base bg-[#1a472a] hover:bg-[#2a573a] text-white">
                  <Link href="/#kontakt">Kontaktovat pro nákup</Link>
                </Button>
                <Button asChild variant="outline" className="text-sm md:text-base border-[#1a472a] text-[#1a472a] hover:bg-[#1a472a] hover:text-white">
                  <Link href="/degustace">Prohlédnout degustace</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Další vína */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-8 text-left">Další vína</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden group">
                <Image 
                  src={nextVino.image} 
                  alt={nextVino.name} 
                  fill 
                  className="object-contain transition-all duration-300 rounded-lg" 
                />
              </div>
              <div className="space-y-3 md:space-y-4 text-left">
                <h3 className="text-xl md:text-2xl font-bold text-left">{nextVino.name}</h3>
                <p className="text-base md:text-lg text-muted-foreground text-left">{nextVino.description}</p>
                <p className="text-sm md:text-base text-left">{nextVino.detail}</p>
                <Button asChild className="text-sm md:text-base bg-[#1a472a] hover:bg-[#2a573a] text-white">
                  <Link href={`/vina/${nextVino.id}`}>Zobrazit detail</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
} 