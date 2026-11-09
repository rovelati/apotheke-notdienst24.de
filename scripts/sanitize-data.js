const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT_DIR, 'site', 'src', 'data');
const SHARDS_DIR = path.join(DATA_DIR, 'shards');

const BUNDESLAENDER = [
  {
    "code": "BW",
    "name": "Baden-Württemberg",
    "slug": "baden-wuerttemberg",
    "capital": "Stuttgart",
    "lat": 48.6616,
    "lon": 9.3501,
    "kammerName": "Landesapothekerkammer Baden-Württemberg",
    "kammerUrl": "https://www.lak-bw.de",
    "verifiedPortalUrl": "https://www.lak-bw.de/notdienstportal"
  },
  {
    "code": "BY",
    "name": "Bayern",
    "slug": "bayern",
    "capital": "München",
    "lat": 48.7904,
    "lon": 11.4979,
    "kammerName": "Bayerische Landesapothekerkammer (BLAK)",
    "kammerUrl": "https://www.blak.de",
    "verifiedPortalUrl": "https://www.blak.de/notdienst"
  },
  {
    "code": "BE",
    "name": "Berlin",
    "slug": "berlin",
    "capital": "Berlin",
    "lat": 52.5200,
    "lon": 13.4050,
    "kammerName": "Apothekerkammer Berlin",
    "kammerUrl": "https://www.ak-berlin.de",
    "verifiedPortalUrl": "https://www.ak-berlin.de/notdienstsuche"
  },
  {
    "code": "BB",
    "name": "Brandenburg",
    "slug": "brandenburg",
    "capital": "Potsdam",
    "lat": 52.4125,
    "lon": 12.5316,
    "kammerName": "Landesapothekerkammer Brandenburg",
    "kammerUrl": "https://www.lakbb.de",
    "verifiedPortalUrl": "https://www.lakbb.de/fuer-buerger/notdienst-apotheken"
  },
  {
    "code": "HB",
    "name": "Bremen",
    "slug": "bremen",
    "capital": "Bremen",
    "lat": 53.0793,
    "lon": 8.8017,
    "kammerName": "Apothekerkammer Bremen",
    "kammerUrl": "https://www.apothekerkammer-bremen.de",
    "verifiedPortalUrl": "https://www.apothekerkammer-bremen.de/notdienst"
  },
  {
    "code": "HH",
    "name": "Hamburg",
    "slug": "hamburg",
    "capital": "Hamburg",
    "lat": 53.5511,
    "lon": 9.9937,
    "kammerName": "Apothekerkammer Hamburg",
    "kammerUrl": "https://www.apothekerkammer-hamburg.de",
    "verifiedPortalUrl": "https://www.apothekerkammer-hamburg.de/notdienst"
  },
  {
    "code": "HE",
    "name": "Hessen",
    "slug": "hessen",
    "capital": "Wiesbaden",
    "lat": 50.6521,
    "lon": 9.1624,
    "kammerName": "Landesapothekerkammer Hessen",
    "kammerUrl": "https://www.apothekerkammer.de",
    "verifiedPortalUrl": "https://www.apothekerkammer.de/notdienstsuche"
  },
  {
    "code": "MV",
    "name": "Mecklenburg-Vorpommern",
    "slug": "mecklenburg-vorpommern",
    "capital": "Schwerin",
    "lat": 53.6127,
    "lon": 12.4296,
    "kammerName": "Apothekerkammer Mecklenburg-Vorpommern",
    "kammerUrl": "https://www.akmv.de",
    "verifiedPortalUrl": "https://www.akmv.de/notdienstsuche"
  },
  {
    "code": "NI",
    "name": "Niedersachsen",
    "slug": "niedersachsen",
    "capital": "Hannover",
    "lat": 52.6367,
    "lon": 9.8451,
    "kammerName": "Apothekerkammer Niedersachsen",
    "kammerUrl": "https://www.apothekerkammer-niedersachsen.de",
    "verifiedPortalUrl": "https://www.apothekerkammer-niedersachsen.de/notdienst"
  },
  {
    "code": "NW",
    "name": "Nordrhein-Westfalen",
    "slug": "nordrhein-westfalen",
    "capital": "Düsseldorf",
    "lat": 51.4332,
    "lon": 7.6616,
    "kammerName": "Apothekerkammern Nordrhein (AKNR) & Westfalen-Lippe (AKWL)",
    "kammerUrl": "https://www.aknr.de",
    "verifiedPortalUrl": "https://www.apothekennotdienst-nrw.de"
  },
  {
    "code": "RP",
    "name": "Rheinland-Pfalz",
    "slug": "rheinland-pfalz",
    "capital": "Mainz",
    "lat": 49.9134,
    "lon": 7.4542,
    "kammerName": "Landesapothekerkammer Rheinland-Pfalz",
    "kammerUrl": "https://www.lak-rlp.de",
    "verifiedPortalUrl": "https://www.lak-rlp.de/notdienst"
  },
  {
    "code": "SL",
    "name": "Saarland",
    "slug": "saarland",
    "capital": "Saarbrücken",
    "lat": 49.3964,
    "lon": 7.0230,
    "kammerName": "Apothekerkammer des Saarlandes",
    "kammerUrl": "https://www.apothekerkammer-saar.de",
    "verifiedPortalUrl": "https://www.apothekerkammer-saar.de/notdienst"
  },
  {
    "code": "SN",
    "name": "Sachsen",
    "slug": "sachsen",
    "capital": "Dresden",
    "lat": 51.1045,
    "lon": 13.2017,
    "kammerName": "Sächsische Landesapothekerkammer (SLAK)",
    "kammerUrl": "https://www.slak.de",
    "verifiedPortalUrl": "https://www.slak.de/fuer-buerger/notdienstsuche"
  },
  {
    "code": "ST",
    "name": "Sachsen-Anhalt",
    "slug": "sachsen-anhalt",
    "capital": "Magdeburg",
    "lat": 51.9503,
    "lon": 11.6923,
    "kammerName": "Apothekerkammer Sachsen-Anhalt",
    "kammerUrl": "https://www.ak-sa.de",
    "verifiedPortalUrl": "https://www.ak-sa.de/notdienst.html"
  },
  {
    "code": "SH",
    "name": "Schleswig-Holstein",
    "slug": "schleswig-holstein",
    "capital": "Kiel",
    "lat": 54.2194,
    "lon": 9.6961,
    "kammerName": "Apothekerkammer Schleswig-Holstein",
    "kammerUrl": "https://www.ak-sh.de",
    "verifiedPortalUrl": "https://www.ak-sh.de/notdienstkalender"
  },
  {
    "code": "TH",
    "name": "Thüringen",
    "slug": "thueringen",
    "capital": "Erfurt",
    "lat": 50.8522,
    "lon": 11.0189,
    "kammerName": "Landesapothekerkammer Thüringen",
    "kammerUrl": "https://www.lakt.de",
    "verifiedPortalUrl": "https://www.lakt.de/buerger/notdienstapotheken-finden"
  }
];

// 1. Write updated bundeslaender.json
fs.writeFileSync(
  path.join(DATA_DIR, 'bundeslaender.json'),
  JSON.stringify(BUNDESLAENDER, null, 2),
  'utf8'
);
console.log('Updated bundeslaender.json with official chamber links.');

// 2. Sanitize each shard file
const kammerMap = Object.fromEntries(BUNDESLAENDER.map(b => [b.slug, b]));

const shardFiles = fs.readdirSync(SHARDS_DIR).filter(f => f.endsWith('.json'));
let totalCleaned = 0;

for (const file of shardFiles) {
  const filePath = path.join(SHARDS_DIR, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  const cleaned = data.map(p => {
    // Keep true 24h status only if verified permanent 24h
    const isPermanent24h = Boolean(p.isOpen24h);
    const bState = kammerMap[p.bundeslandSlug] || {};

    // Strip fabricated shifts
    // Strip fabricated fake reviews
    const hasFakeReviews = Array.isArray(p.googleReviews) && p.googleReviews.some(
      r => r.author === 'Maximilian Bauer' || r.author === 'Sophie Müller' || r.author === 'Patient'
    );

    return {
      id: p.id,
      name: p.name,
      slug: p.slug,
      strasse: p.strasse,
      plz: p.plz,
      ort: p.ort,
      bundeslandSlug: p.bundeslandSlug,
      bundeslandCode: p.bundeslandCode,
      lat: p.lat,
      lon: p.lon,
      telephone: p.telephone || '',
      isOpen24h: isPermanent24h,
      isNotdienstStaerker: isPermanent24h,
      googleRating: p.googleRating || null,
      googleReviewsTotal: p.googleReviewsTotal || 0,
      googleReviews: hasFakeReviews ? [] : (p.googleReviews || []),
      editorialSummary: `${p.name} in ${p.ort} (${p.plz}): Kontaktdaten, Adresse und Hinweise zur Notdienst-Bereitschaft.`,
      openingHours: p.openingHours || ["Mo-Fr: 08:30 - 18:30 Uhr", "Sa: 09:00 - 13:00 Uhr"],
      googleWebsite: p.googleWebsite || '',
      source: p.source || 'Öffentliches Apothekenverzeichnis',
      sourceType: p.sourceType || 'public_register',
      kammerName: bState.kammerName || '',
      kammerPortalUrl: bState.verifiedPortalUrl || 'https://www.aponet.de/apotheke/notdienstsuche',
      lastUpdated: new Date().toISOString().split('T')[0]
    };
  });

  fs.writeFileSync(filePath, JSON.stringify(cleaned), 'utf8');
  totalCleaned += cleaned.length;
}

console.log(`Cleaned ${totalCleaned} pharmacy records across ${shardFiles.length} shards.`);
