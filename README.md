# Apotheke-Notdienst24.de 🇩🇪

> **Offizielles Notdienst-Portal für Apotheken in Deutschland — 24h, Notdienst heute Nacht, sonntags & an Feiertagen**  
> Live-URL: **[https://www.apotheke-notdienst24.de](https://www.apotheke-notdienst24.de)**  
> Cloudflare Pages Subdomain: [https://apotheke-notdienst24.pages.dev](https://apotheke-notdienst24.pages.dev)  
> GitHub Repository: [rovelati/apotheke-notdienst24.de](https://github.com/rovelati/apotheke-notdienst24.de)

---

## 1. Übersicht & SEO-Architektur

- **Kanonische Hauptdomain:** `https://www.apotheke-notdienst24.de/` (Einziger autoritativer Host für Google).
- **Apex-Redirect (301 Permanent):** `https://apotheke-notdienst24.de/*` leitet mit HTTP 301 auf `https://www.apotheke-notdienst24.de/*` weiter (inkl. Pfad- und Query-Erhalt).
- **Always Use HTTPS:** Automatische Umleitung aller unsicheren HTTP-Anfragen auf HTTPS.
- **Sitemap & Robots.txt:** `robots.txt` verweist direkt auf `https://www.apotheke-notdienst24.de/sitemap-index.xml`. Alle URLs im Sitemap-Index tragen strikt das `www`-Präfix.
- **Gesetzliche Grundlagen:**
  - **Apothekenbetriebsordnung (ApBetrO) § 23:** 24-Stunden Notdienstrotationsplan (08:30 Uhr bis 08:30 Uhr des Folgetages).
  - **Arzneimittelpreisverordnung (AMPreisV) § 6:** Gesetzliche Notdienstgebühr von **2,50 €** in der Nacht sowie an Sonn- und Feiertagen (ausgenommen bei dringenden Rezepten mit Vermerk „noctu“).
  - **Rechtliche Konformität (Deutschland):** Vollständiges **Impressum gemäß § 5 DDG** (Digitale-Dienste-Gesetz) und **Datenschutzerklärung nach DSGVO & TTDSG** zur Vermeidung von Abmahnungen.

---

## 2. Tech-Stack

- **Framework:** [Astro 5](https://astro.build/) (Static Site Generation / SSG).
- **Hosting & CDN:** [Cloudflare Pages](https://pages.cloudflare.com/) mit globalem Edge-Caching und Instant Cache Purge.
- **Karten:** [Leaflet 1.9.4](https://leafletjs.com/) + [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster) auf Basis von OpenStreetMap (keine laufenden Google Maps API-Kosten).
- **Datenschutz & Consent:** Google Consent Mode v2 (default-denied) + Google Funding Choices CMP (TCF v2.2).
- **Monetarisierung:** Google AdSense (`ca-pub-2168172914069272`) mit transparentem Placeholder-Design gegen weiße Blöcke im Dark Mode.
- **Notfall-Hotlines:** Direkte Einbindung von **116 117** (Ärztl. Bereitschaftsdienst), **22 8 33** (Apotheken-Notdienstfinder Handy) und **112** (Notruf).

---

## 3. URL-Struktur & Sharding

| URL-Muster | Typ | Beschreibung |
| :--- | :--- | :--- |
| `/` | Startseite | Hero-Suche (PLZ/Stadt), interaktive Deutschlandkarte, 16 Bundesländer, FAQ Schema.org. |
| `/in-meiner-naehe/` | GPS-Suche | Automatische Standortermittlung mit Entfernungsberechnung (Haversine) zur nächsten Notapotheke. |
| `/apotheken-notdienst/` | Hub | Verzeichnis aller 16 Bundesländer mit Apotheken-Zählern. |
| `/apotheken-notdienst/[bundesland]/` | Land-Übersicht | Übersicht der Städte und Landkreise des Bundeslandes (z.B. Bayern, NRW). |
| `/apotheken-notdienst/[bundesland]/[ort]/` | Stadt / SEO Landing | **Kernseite für SEO:** Notdienstplan, Leaflet MarkerCluster-Karte, 25 km Umkreiserweiterung gegen Thin Content. |
| `/apotheke/[slug]/` | Detailseite | Vollständige Apothekeninformationen, Öffnungszeiten, Google Bewertungen, Schema.org `Pharmacy`. |
| `/impressum/` | Rechtliches | Pflichtangaben gemäß § 5 DDG und § 18 Abs. 2 MStV. |
| `/datenschutz/` | Rechtliches | Datenschutzerklärung nach DSGVO und TTDSG. |

---

## 4. Lokale Entwicklung & Deployment

```bash
# In das Verzeichnis wechseln
cd site

# Abhängigkeiten installieren
npm install

# Lokalen Entwicklungsserver starten
npm run dev

# Statisches Astro-Projekt bauen
npm run build

# Vollständiges Deployment auf Cloudflare Pages inklusive Cache Purge
./deploy.sh
```

---

## 5. Datenquellen & Lizenzen

- **GeoNames DE:** Postleitzahlen (PLZ) und Ortskoordinaten für über 20.400 deutsche Orte (Creative Commons Attribution 4.0 License).
- **Open Data & Google Places API:** Offizielle Apothekenstandorte, Öffnungszeiten, Telefonnummern und Notdienstzeiten.
- **OpenStreetMap:** Kartendarstellung unter Open Data Commons Open Database License (ODbL).
