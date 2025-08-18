import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import vina from "@/data/vina.json"

// Data o vínech jsou centrálně v JSON

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

export default async function DetailVinaPage({ params: paramsPromise }: { params: { id: string } }) {
  const params = await paramsPromise;
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
                  sizes="(max-width: 768px) 100vw, 50vw"
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
                    {vino.info.locality && (
                      <div>
                        <dt className="font-medium text-left">Lokalita</dt>
                        <dd className="text-muted-foreground text-left">{vino.info.locality}</dd>
                      </div>
                    )}
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
                  sizes="(max-width: 768px) 100vw, 50vw"
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