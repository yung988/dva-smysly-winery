import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function VinaPage() {
  const vina = [
    {
      id: "sauvignon",
      name: "Sauvignon",
      description: "Suché, 0,75l, ročník 2024",
      image: "/images/vina/sauvignon_2024.png",
      detail: "Na vůni i chuti silný citrusový projev. Výrazný je červený grepfruit a pomelo. Výrazná a dlouhá dochuť."
    },
    {
      id: "ryzlink-rynsky",
      name: "Ryzlink rýnský",
      description: "Suché, 0,75l, ročník 2024",
      image: "/images/vina/ryzlink_2024.png",
      detail: "Intezivní aroma čerstvé meruňky s limetkovou šťávou. Křupavá kyselina."
    },
    {
      id: "tramin-cerveny",
      name: "Tramín červený",
      description: "Polosladké, 0,75l, ročník 2024",
      image: "/images/vina/tramin_2024.png",
      detail: "Na vůni jemné aroma květu růže, na chutí příjemně kořenité. Celý aromatický profil výborně podporuje lehce vyšší zbytkový cukr."
    },
    {
      id: "svatovavrinecke-rose",
      name: "Svatovavřinecké rosé",
      description: "Polosuché, 0,75l, ročník 2024",
      image: "/images/vina/svatovavrinecke_rose_2024.png",
      detail: "Lehké víno snižším obsahem alkoholu. Na vůni i chuti nalezneme třešnový kompot s lístkem máty."
    },
    {
      id: "svatovavrinecke",
      name: "Svatovavřinecké",
      description: "Suché, 0,75l, ročník 2023",
      image: "/images/vina/svatovavrinecke_2023.png",
      detail: "Středně intezivní garnátová barva. Vyznačuje se tóny švestek a povidel s decentním nádechem dubového dřeva."
    },
    {
      id: "veltlinske-zelene",
      name: "Veltlínské zelené",
      description: "Suché, 0,75l, ročník 2024",
      image: "/images/vina/veltlin_2024.png",
      detail: "Typický znojemský Veltlín. Začátek lehce bylinný doplněný minerálnímy tóny. Dochuť je dlouhá a dominuje zde bílý pepř."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hlavička stránky - upraveno pro odstranění bílého pruhu */}
      <section className="relative h-[50vh] overflow-hidden -mt-16 pt-16">
        <div className="absolute inset-0">
          <Image src="/grapes-dark.jpeg" alt="Vinice" fill className="object-cover" priority />
        </div>
        <div className="relative container h-full flex flex-col justify-center">
          <div className="max-w-3xl space-y-4 bg-white/80 backdrop-blur-sm p-8 rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a472a] text-left">Nabídka vín</h1>
            <p className="text-lg text-[#1a472a] text-left">
              Naše portfolio zahrnuje pečlivě zpracovaná vína, která odrážejí terroir Znojemska. Věnujeme se bílým i
              červeným odrůdám.
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

      {/* Seznam vín */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {vina.map((vino) => (
              <div key={vino.id} className="flex flex-col h-full border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-[450px] md:h-[500px] bg-white overflow-hidden">
                  <Image 
                    src={vino.image} 
                    alt={vino.name} 
                    fill 
                    className="object-contain transition-all duration-300" 
                  />
                </div>
                <div className="flex flex-col flex-grow p-6 space-y-4 text-left">
                  <h2 className="text-2xl font-bold text-[#1a472a] text-left">{vino.name}</h2>
                  <p className="text-lg text-muted-foreground text-left">{vino.description}</p>
                  <p className="text-base flex-grow text-left">{vino.detail}</p>
                  <Button asChild className="bg-[#1a472a] hover:bg-[#2a573a] text-white w-full mt-auto">
                    <Link href={`/vina/${vino.id}`}>Více informací</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA sekce */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl text-left space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a472a] text-left">Máte zájem o naše vína?</h2>
            <p className="text-lg text-muted-foreground text-left">
              Kontaktujte nás pro více informací o dostupnosti jednotlivých vín nebo pro rezervaci degustace.
            </p>
            <div className="flex flex-wrap justify-start gap-4">
              <Button asChild size="lg" className="bg-[#1a472a] hover:bg-[#2a573a] text-white">
                <Link href="/#kontakt">Kontaktovat</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[#1a472a] text-[#1a472a] hover:bg-[#1a472a] hover:text-white">
                <Link href="/degustace">Prohlédnout degustace</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
} 