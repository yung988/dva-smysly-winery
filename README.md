# Vinařství Dva Smysly - Webová Stránka

Provizorní webová stránka pro Vinařství Dva Smysly.

## Instalace

```bash
# Instalace závislostí
pnpm install

# Spuštění vývojového serveru
pnpm dev
```

Po spuštění bude aplikace dostupná na adrese [http://localhost:3000](http://localhost:3000).

## Produkční nasazení

```bash
# Vytvoření produkčního buildu
pnpm build

# Spuštění produkční verze
pnpm start
```

## Struktura projektu

- `app/` - Next.js aplikace
- `public/` - Statické soubory (obrázky, fonty, atd.)
- `components/` - React komponenty
- `styles/` - CSS styly

## Obrázky

Obrázky jsou umístěny ve složce `public/images/`. Složka obsahuje:

- `public/images/` - Fotografie vín
- `public/images/Sklep/` - Fotografie sklepa
- `public/images/degustace/` - Fotografie z degustací

## Kontakt

- Ondřej Karady - ondrakarady1@seznam.cz
- Lukáš Mudrych - lukasmudrych@seznam.cz

## Nastavení kontaktního formuláře

Pro správné fungování kontaktního formuláře je potřeba nastavit službu EmailJS:

1. Zaregistrujte se na [EmailJS](https://www.emailjs.com/)
2. Vytvořte novou službu (Service) a zaznamenejte si Service ID
3. Vytvořte novou šablonu (Template) s následujícími parametry:
   - `from_name` - Jméno odesílatele
   - `from_email` - E-mail odesílatele
   - `subject` - Předmět zprávy
   - `message` - Text zprávy
4. Zaznamenejte si Template ID
5. Získejte Public Key z nastavení vašeho účtu
6. Aktualizujte konstanty v souboru `/components/contact/ContactForm.tsx`:
   ```jsx
   const SERVICE_ID = "vaše_service_id"; 
   const TEMPLATE_ID = "vaše_template_id"; 
   const PUBLIC_KEY = "váš_public_key"; 
   ```

Po správném nastavení těchto hodnot bude kontaktní formulář odesílat e-maily na váš e-mail. 