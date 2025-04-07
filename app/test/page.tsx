import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TestPage() {
  return (
    <section id="vina" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a472a]">Naše vína</h2>
          <p className="text-lg text-[#1a472a] max-w-3xl mx-auto">
            Naše portfolio zahrnuje pečlivě zpracovaná vína, která odrážejí terroir Znojemska. Věnujeme se bílým i
            červeným odrůdám.
          </p>
        </div>

        {/* Carousel component */}
        <div className="relative mb-12">
          {/* Carousel navigation arrows */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none md:flex hidden items-center justify-center" aria-label="Předchozí">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#1a472a]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          <div className="overflow-x-auto hide-scrollbar">
            <div className="flex gap-4 pb-4 px-2">
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
                  id: "svatovarinecke",
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
                  className="bg-gray-50 rounded-lg min-w-[220px] sm:min-w-[240px] overflow-hidden hover:bg-gray-100 transition-all duration-300 flex flex-col shadow-sm hover:shadow-md border border-gray-200 group"
                >
                  <div className="relative h-[220px] p-3">
                    <Image
                      src={vino.image}
                      alt={vino.name}
                      fill
                      className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-medium text-lg text-[#1a472a]">{vino.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{vino.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none md:flex hidden items-center justify-center" aria-label="Další">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#1a472a]">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          
          {/* Carousel indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {[...Array(3)].map((_, i) => (
              <button 
                key={i} 
                className={`h-2 rounded-full ${i === 0 ? 'w-6 bg-[#1a472a]' : 'w-2 bg-gray-300'} transition-all duration-300`} 
                aria-label={`Přejít na slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center bg-gray-100 p-6 sm:p-8 rounded-xl border border-gray-200 max-w-xl mx-auto">
          <p className="text-muted-foreground mb-6">
            Naše vína jsou tvořena s důrazem na kvalitu a autentičnost. Rádi vám pomůžeme s výběrem vína, které
            uspokojí vaše chuťové pohárky.
          </p>
          <Button asChild className="bg-[#1a472a] hover:bg-[#2a573a] text-white font-medium rounded-full px-6">
            <Link href="/vina">Nabídka vín</Link>
          </Button>
        </div>
      </div>

      {/* Přidáme CSS pro skrytí posuvníku */}
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;  /* Chrome, Safari and Opera */
        }
      `}</style>
    </section>
  );
}