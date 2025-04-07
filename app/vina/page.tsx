import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function VinaPage() {
  const vina = [
    {
      id: "sauvignon",
      name: "Sauvignon",
      description: "Suché, 0,75l, ročník 2024",
      image: "/images/vina/Sauvignon.JPG",
      detail: "Na vůni i chuti silný citrusový projev. Výrazný je červený grepfruit a pomelo. Výrazná a dlouhá dochuť."
    },
    {
      id: "ryzlink-rynsky",
      name: "Ryzlink rýnský",
      description: "Suché, 0,75l, ročník 2024",
      image: "/images/vina/Ryzlink rýnský.JPG",
      detail: "Intezivní aroma čerstvé meruňky s limetkovou šťávou. Křupavá kyselina."
    },
    {
      id: "tramin-cerveny",
      name: "Tramín červený",
      description: "Polosladké, 0,75l, ročník 2024",
      image: "/images/vina/Tramín červený.JPG",
      detail: "Na vůni jemné aroma květu růže, na chutí příjemně kořenité. Celý aromatický profil výborně podporuje lehce vyšší zbytkový cukr."
    },
    {
      id: "svatovarineske-rose",
      name: "Svatovařinecké rosé",
      description: "Polosuché, 0,75l, ročník 2024",
      image: "/images/vina/Svatovařinecké rosé.JPG",
      detail: "Lehké víno snižším obsahem alkoholu. Na vůni i chuti nalezneme třešnový kompot s lístkem máty."
    },
    {
      id: "svatovarineske",
      name: "Svatovařinecké",
      description: "Suché, 0,75l, ročník 2023",
      image: "/images/vina/Svatovařinecké.jpg",
      detail: "Středně intezivní garnátová barva. Vyznačuje se tóny švestek a povidel s decentním nádechem dubového dřeva."
    },
    {
      id: "veltlinske-zelene",
      name: "Veltlínské zelené",
      description: "Suché, 0,75l, ročník 2024",
      image: "/images/vina/Veltlínské zelené.JPG",
      detail: "Typický znojemský Veltlín. Začátek lehce bylinný doplněný minerálnímy tóny. Dochuť je dlouhá a dominuje zde bílý pepř."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hlavička stránky */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/grapes-bw.jpeg" alt="Vinice" fill className="object-cover grayscale" priority />
        </div>
        <div className="relative container h-full flex flex-col justify-center">
          <div className="max-w-3xl space-y-4 bg-black/30 backdrop-blur-sm p-8 rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Nabídka vín</h1>
            <p className="text-lg text-white">
              Naše portfolio zahrnuje pečlivě zpracovaná vína, která odrážejí terroir Znojemska. Věnujeme se bílým i
              červeným odrůdám.
            </p>
            <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black">
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
          <div className="grid gap-12">
            {vina.map((vino, index) => (
              <div key={vino.id} className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="relative h-[600px] rounded-lg overflow-hidden group">
                  <Image 
                    src={vino.image} 
                    alt={vino.name} 
                    fill 
                    className="object-contain transition-all duration-300 grayscale group-hover:grayscale-0" 
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">{vino.name}</h2>
                  <p className="text-xl text-muted-foreground">{vino.description}</p>
                  <p className="text-lg">{vino.detail}</p>
                  <Button asChild className="bg-black hover:bg-gray-800 text-white">
                    <Link href={`/vina/${vino.id}`}>Více informací</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA sekce */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">Máte zájem o naše vína?</h2>
            <p className="text-lg text-muted-foreground">
              Kontaktujte nás pro více informací o dostupnosti jednotlivých vín nebo pro rezervaci degustace.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white">
                <Link href="/#kontakt">Kontaktovat</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white">
                <Link href="/degustace">Prohlédnout degustace</Link>
              </Button>
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
              <Link href="/degustace" className="text-sm text-muted-foreground hover:text-black transition-colors">
                Degustace
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