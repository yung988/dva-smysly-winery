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
            <svg width="200" height="80" viewBox="0 0 522 241" className="text-[#1a472a]">
              <path d="M152.373 193.773C152.373 191.997 152.094 190.43 151.537 189.071C151.014 187.678 150.074 186.424 148.715 185.31C147.392 184.195 145.546 183.133 143.177 182.123C140.844 181.112 137.883 180.085 134.295 179.04C130.534 177.925 127.138 176.689 124.107 175.331C121.077 173.937 118.482 172.353 116.323 170.576C114.163 168.8 112.509 166.762 111.359 164.463C110.21 162.165 109.635 159.535 109.635 156.574C109.635 153.614 110.245 150.879 111.464 148.372C112.683 145.864 114.424 143.687 116.688 141.841C118.987 139.96 121.722 138.497 124.891 137.452C128.061 136.407 131.596 135.885 135.497 135.885C141.209 135.885 146.051 136.982 150.021 139.176C154.027 141.336 157.075 144.174 159.165 147.692C161.254 151.175 162.299 154.902 162.299 158.873H152.268C152.268 156.017 151.659 153.492 150.439 151.297C149.22 149.068 147.374 147.327 144.901 146.073C142.428 144.784 139.294 144.14 135.497 144.14C131.91 144.14 128.949 144.68 126.615 145.759C124.282 146.839 122.54 148.302 121.391 150.148C120.276 151.994 119.719 154.101 119.719 156.47C119.719 158.072 120.05 159.535 120.711 160.858C121.408 162.147 122.47 163.349 123.898 164.463C125.361 165.578 127.207 166.605 129.437 167.546C131.701 168.486 134.4 169.392 137.535 170.263C141.854 171.482 145.581 172.84 148.715 174.338C151.85 175.836 154.428 177.525 156.448 179.406C158.503 181.252 160.018 183.359 160.993 185.728C162.003 188.061 162.508 190.708 162.508 193.669C162.508 196.769 161.881 199.573 160.627 202.081C159.374 204.588 157.58 206.73 155.246 208.507C152.912 210.283 150.109 211.659 146.834 212.634C143.595 213.575 139.973 214.045 135.967 214.045C132.449 214.045 128.984 213.557 125.57 212.582C122.192 211.607 119.109 210.144 116.323 208.193C113.571 206.243 111.359 203.84 109.688 200.983C108.05 198.092 107.232 194.749 107.232 190.952H117.263C117.263 193.564 117.768 195.811 118.778 197.692C119.788 199.538 121.164 201.07 122.906 202.29C124.682 203.509 126.685 204.414 128.914 205.006C131.178 205.564 133.529 205.842 135.967 205.842C139.485 205.842 142.463 205.355 144.901 204.379C147.34 203.404 149.186 202.011 150.439 200.2C151.728 198.389 152.373 196.246 152.373 193.773ZM183.898 136.93H193.668L218.589 198.946L243.458 136.93H253.281L222.351 213H214.723L183.898 136.93ZM180.711 136.93H189.331L190.742 183.324V213H180.711V136.93ZM247.795 136.93H256.415V213H246.384V183.324L247.795 136.93ZM281.514 136.93L301.263 175.122L321.065 136.93H332.507L306.279 184.578V213H296.196V184.578L269.968 136.93H281.514ZM387.334 193.773C387.334 191.997 387.055 190.43 386.498 189.071C385.975 187.678 385.035 186.424 383.676 185.31C382.353 184.195 380.507 183.133 378.138 182.123C375.805 181.112 372.844 180.085 369.257 179.04C365.495 177.925 362.099 176.689 359.069 175.331C356.038 173.937 353.443 172.353 351.284 170.576C349.124 168.8 347.47 166.762 346.321 164.463C345.171 162.165 344.596 159.535 344.596 156.574C344.596 153.614 345.206 150.879 346.425 148.372C347.644 145.864 349.386 143.687 351.65 141.841C353.948 139.96 356.683 138.497 359.852 137.452C363.022 136.407 366.557 135.885 370.458 135.885C376.17 135.885 381.012 136.982 384.983 139.176C388.988 141.336 392.036 144.174 394.126 147.692C396.216 151.175 397.26 154.902 397.26 158.873H387.229C387.229 156.017 386.62 153.492 385.401 151.297C384.182 149.068 382.335 147.327 379.863 146.073C377.39 144.784 374.255 144.14 370.458 144.14C366.871 144.14 363.91 144.68 361.576 145.759C359.243 146.839 357.501 148.302 356.352 150.148C355.237 151.994 354.68 154.101 354.68 156.47C354.68 158.072 355.011 159.535 355.673 160.858C356.369 162.147 357.432 163.349 358.86 164.463C360.322 165.578 362.168 166.605 364.398 167.546C366.662 168.486 369.361 169.392 372.496 170.263C376.815 171.482 380.542 172.84 383.676 174.338C386.811 175.836 389.389 177.525 391.409 179.406C393.464 181.252 394.979 183.359 395.954 185.728C396.964 188.061 397.469 190.708 397.469 193.669C397.469 196.769 396.842 199.573 395.589 202.081C394.335 204.588 392.541 206.73 390.207 208.507C387.874 210.283 385.07 211.659 381.796 212.634C378.556 213.575 374.934 214.045 370.928 214.045C367.411 214.045 363.945 213.557 360.531 212.582C357.153 211.607 354.07 210.144 351.284 208.193C348.532 206.243 346.321 203.84 344.649 200.983C343.012 198.092 342.193 194.749 342.193 190.952H352.224C352.224 193.564 352.729 195.811 353.739 197.692C354.75 199.538 356.125 201.07 357.867 202.29C359.643 203.509 361.646 204.414 363.875 205.006C366.139 205.564 368.49 205.842 370.928 205.842C374.446 205.842 377.424 205.355 379.863 204.379C382.301 203.404 384.147 202.011 385.401 200.2C386.689 198.389 387.334 196.246 387.334 193.773ZM461.805 204.797V213H423.77V204.797H461.805ZM425.755 136.93V213H415.672V136.93H425.755ZM469.663 136.93L489.412 175.122L509.213 136.93H520.655L494.428 184.578V213H484.344V184.578L458.117 136.93H469.663Z" fill="currentColor"/>
              <path d="M65.7213 196.52C61.988 196.52 58.388 195.987 54.9213 194.92C51.4547 193.853 48.188 192.52 45.1213 190.92C42.188 189.453 39.0547 187.653 35.7213 185.52C32.5213 183.52 29.6547 181.72 27.1213 180.12C25.388 180.52 23.5213 180.987 21.5213 181.52C19.6547 182.187 17.4547 182.52 14.9213 182.52C13.0547 182.52 10.988 182.387 8.72134 182.12C6.45467 181.853 4.52134 181.253 2.92134 180.32C1.45467 179.52 0.721338 178.12 0.721338 176.12C0.721338 174.52 1.388 173.387 2.72134 172.72C4.05467 172.053 5.588 171.653 7.32134 171.52C9.188 171.253 10.6547 171.12 11.7213 171.12C14.788 171.12 17.988 171.587 21.3213 172.52C24.788 173.453 28.388 174.587 32.1213 175.92C36.388 174.853 40.4547 173.253 44.3213 171.12C46.3213 170.053 49.0547 168.453 52.5213 166.32C55.988 164.053 59.7213 161.387 63.7213 158.32C67.8547 155.12 71.8547 151.653 75.7213 147.92C79.588 144.053 82.9213 139.987 85.7213 135.72C89.988 129.32 93.3213 122.653 95.7213 115.72C98.2547 108.787 99.5213 102.453 99.5213 96.7199C99.5213 90.7199 97.9213 85.7866 94.7213 81.9199C91.5213 78.0533 86.0547 76.1199 78.3213 76.1199C72.3213 76.1199 66.6547 77.5866 61.3213 80.5199C56.1213 83.4533 51.6547 87.4533 47.9213 92.5199C44.188 97.5866 41.4547 103.32 39.7213 109.72C39.188 111.72 38.9213 113.653 38.9213 115.52C38.9213 119.787 40.1213 123.12 42.5213 125.52C45.0547 127.787 47.9213 128.92 51.1213 128.92C54.0547 128.92 56.9213 127.987 59.7213 126.12C62.6547 124.253 65.0547 121.32 66.9213 117.32C67.3213 115.987 67.9213 115.32 68.7213 115.32C69.1213 115.32 69.3213 115.653 69.3213 116.32C69.3213 116.453 69.3213 116.72 69.3213 117.12C69.3213 117.387 69.188 117.72 68.9213 118.12C67.588 122.253 64.7213 125.853 60.3213 128.92C55.9213 131.853 51.388 133.32 46.7213 133.32C44.588 133.32 42.5213 132.987 40.5213 132.32C38.6547 131.653 36.9213 130.587 35.3213 129.12C33.7213 127.653 32.5213 125.853 31.7213 123.72C31.0547 121.587 30.7213 119.253 30.7213 116.72C30.7213 112.987 31.4547 109.12 32.9213 105.12C34.388 101.12 36.2547 97.4533 38.5213 94.1199C41.8547 89.4533 45.8547 85.4533 50.5213 82.1199C55.3213 78.7866 60.388 76.2533 65.7213 74.5199C71.188 72.6533 76.4547 71.7199 81.5213 71.7199C90.188 71.7199 97.3213 74.3199 102.921 79.5199C108.521 84.7199 111.321 91.7199 111.321 100.52C111.321 101.187 111.321 101.92 111.321 102.72C111.321 103.387 111.255 104.053 111.121 104.72C110.455 110.987 108.188 117.253 104.321 123.52C100.455 129.653 95.6547 135.587 89.9213 141.32C84.188 146.92 78.0547 152.12 71.5213 156.92C64.988 161.72 58.588 165.853 52.3213 169.32C46.188 172.787 40.8547 175.387 36.3213 177.12C38.588 178.187 41.588 179.52 45.3213 181.12C49.0547 182.72 53.188 184.12 57.7213 185.32C62.388 186.653 67.1213 187.32 71.9213 187.32C74.7213 187.32 77.4547 186.987 80.1213 186.32C82.9213 185.653 85.588 184.653 88.1213 183.32C89.8547 182.253 90.988 180.92 91.5213 179.32C92.0547 177.72 92.188 176.52 91.9213 175.72C91.6547 174.92 91.5213 174.387 91.5213 174.12C91.5213 173.32 91.788 172.92 92.3213 172.92C93.1213 172.92 93.8547 173.787 94.5213 175.52C94.788 176.32 94.9213 177.053 94.9213 177.72C94.9213 179.987 94.188 182.187 92.7213 184.32C90.188 187.92 86.4547 190.853 81.5213 193.12C76.7213 195.387 71.4547 196.52 65.7213 196.52ZM14.3213 178.52C15.9213 178.52 17.5213 178.453 19.1213 178.32C20.8547 178.187 22.2547 177.987 23.3213 177.72C21.7213 176.787 19.9213 175.92 17.9213 175.12C16.0547 174.187 13.8547 173.72 11.3213 173.72C8.388 173.72 6.92134 174.387 6.92134 175.72C6.92134 176.253 7.25467 176.787 7.92134 177.32C8.72134 177.853 9.588 178.187 10.5213 178.32C11.0547 178.453 11.6547 178.52 12.3213 178.52C12.988 178.52 13.6547 178.52 14.3213 178.52Z" fill="currentColor"/>
            </svg>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a472a]">Vinařství Dva Smysly</h1>
            <p className="text-lg text-[#1a472a]">
              "Ve vinařství Dva smysly věříme, že víno je jako poezie. Každá sklenka vypráví jedinečný příběh a probouzí
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
      <section id="vina" className="py-16 md:py-24 bg-[#1a472a]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Naše vína</h2>
            <p className="text-white/80">
              Naše portfolio zahrnuje pečlivě zpracovaná vína, která odrážejí terroir Znojemska. Věnujeme se bílým i
              červeným odrůdám.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
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
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1 border border-white/20"
              >
                <div className="relative h-[280px] p-4">
                  <Image 
                    src={vino.image} 
                    alt={vino.name} 
                    fill 
                    className="object-contain p-2" 
                  />
                </div>
                <div className="p-6 text-center flex-grow flex flex-col justify-center">
                  <h3 className="font-medium text-xl text-white">{vino.name}</h3>
                  <p className="text-sm text-white/70 mt-2">{vino.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 max-w-2xl mx-auto">
            <p className="text-white/80 mb-6">
              Naše vína jsou tvořena s důrazem na kvalitu a autentičnost. Rádi vám pomůžeme s výběrem vína, které
              uspokojí vaše chuťové pohárky.
            </p>
            <Button asChild className="bg-white hover:bg-white/80 text-[#1a472a] font-medium rounded-full px-6">
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
              <Image src="/logo/dvasmysly.svg" alt="Dva Smysly" width={100} height={40} className="h-auto" />
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

