import {
  AboutTab,
  BlogPost,
  ClinicProfile,
  Doctor,
  GalleryItem,
  HeroSlide,
  Highlight,
  NavLink,
  VisitStep,
  PricePlan,
  ServiceItem,
  StatItem,
  Testimonial,
} from '../models/clinic.models';

export const CLINIC: ClinicProfile = {
  name: 'Helia Zahn',
  logoLead: 'Helia',
  logoAccent: 'Zahn',
  tagline: 'Zahnmedizin mit ruhiger Hand',
  phoneDisplay: '+49 221 9876 540',
  phoneHref: 'tel:+492219876540',
  whatsappNumber: '492219876540',
  whatsappMessage: 'Guten Tag, ich möchte einen Termin in der Praxis Helia Zahn vereinbaren.',
  email: 'hallo@helia-zahn.de',
  address: 'Ehrenstraße 42',
  cityLine: '50672 Köln',
  mapEmbedUrl:
    'https://www.openstreetmap.org/export/embed.html?bbox=6.930%2C50.932%2C6.948%2C50.942&layer=mapnik&marker=50.9367%2C6.9394',
  openingHours: [
    { days: 'Montag – Freitag', hours: '08:00 – 18:00' },
    { days: 'Samstag', hours: '09:00 – 13:00' },
    { days: 'Sonntag', hours: 'geschlossen' },
  ],
};

export const VISIT_STEPS: VisitStep[] = [
  {
    step: '01',
    title: 'Kurz anfragen',
    text: 'Per WhatsApp oder Telefon nennen Sie den Anlass. Wir schlagen einen Termin vor, ohne Warteliste am Telefon.',
  },
  {
    step: '02',
    title: 'Erstbefund',
    text: 'Der erste Besuch ist eine Untersuchung und ein Gespräch. Behandelt wird nur, was an dem Tag nötig ist.',
  },
  {
    step: '03',
    title: 'Plan zum Mitnehmen',
    text: 'Sie bekommen den Befund in klaren Worten und entscheiden den nächsten Schritt zu Hause, nicht im Stuhl.',
  },
];

export const NAV_LINKS: NavLink[] = [
  { label: 'Startseite', path: '/' },
  { label: 'Über uns', path: '/ueber-uns' },
  { label: 'Leistungen', path: '/leistungen' },
  { label: 'Ärzteteam', path: '/aerzte' },
  { label: 'Blog', path: '/blog' },
  { label: 'Kontakt', path: '/kontakt' },
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    image: 'images/bg_1.jpg',
    title: 'Moderne Zahnmedizin in einer ruhigen, entspannten Atmosphäre',
    text: 'In unserer Praxis in Köln verbinden wir sorgfältige Behandlung, klare Beratung und Zeit, die der Befund braucht.',
  },
  {
    image: 'images/bg_2.jpg',
    title: 'Das Lächeln, das zu Ihnen passt',
    text: 'Von der Prophylaxe bis zum Implantat begleiten wir Sie mit einem Plan, den Sie verstehen – und mit Zeit, die Sie brauchen.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'aufhellung',
    title: 'Zahnaufhellung',
    summary: 'Schonende Aufhellung für ein helleres Lächeln, abgestimmt auf Ihren Zahnschmelz.',
    details:
      'Wir hellen Verfärbungen durch Kaffee, Tee oder die Zeit auf – im Praxisablauf oder mit einer Schiene für zu Hause. Vorher prüfen wir, ob der Zahnschmelz dafür geeignet ist.',
    icon: 'whitening',
  },
  {
    id: 'reinigung',
    title: 'Professionelle Zahnreinigung',
    summary: 'Gründliche Reinigung, die Beläge entfernt und das Zahnfleisch beruhigt.',
    details:
      'Die Professionelle Zahnreinigung entfernt Beläge an Stellen, die die Zahnbürste nicht erreicht, und ist die Basis jeder langfristigen Vorsorge.',
    icon: 'cleaning',
  },
  {
    id: 'zahnspange',
    title: 'Zahnspangen',
    summary: 'Feste und herausnehmbare Spangen für eine ruhige, gleichmäßige Zahnstellung.',
    details:
      'Wir beraten zu klassischen Brackets und dezenteren Varianten und begleiten die Behandlung in klaren Abständen.',
    icon: 'braces',
  },
  {
    id: 'anaesthesie',
    title: 'Moderne Anästhesie',
    summary: 'Örtliche Betäubung, die den Eingriff ruhig und gut steuerbar macht.',
    details:
      'Wir erklären jeden Schritt vorher. Die Betäubung wird so dosiert, dass Sie den Eingriff nicht spüren und danach schnell wieder klar sind.',
    icon: 'anesthesia',
  },
  {
    id: 'zahnstein',
    title: 'Zahnsteinentfernung',
    summary: 'Sanftes Entfernen von harten Belägen oberhalb und unterhalb des Zahnfleischrands.',
    details:
      'Zahnstein ist ein häufiger Grund für gereiztes Zahnfleisch. Wir entfernen ihn und zeigen, wie Sie neue Beläge länger fernhalten.',
    icon: 'calculus',
  },
  {
    id: 'parodontologie',
    title: 'Parodontologie',
    summary: 'Behandlung von Zahnfleischerkrankungen, damit Zähne fest im Kiefer bleiben.',
    details:
      'Bei Parodontitis reinigen wir die Zahnfleischtaschen und begleiten die Nachsorge, damit die Entzündung zur Ruhe kommt.',
    icon: 'gum',
  },
  {
    id: 'implantate',
    title: 'Zahnimplantate',
    summary: 'Fester Zahnersatz, der sich anfühlt wie ein eigener Zahn.',
    details:
      'Fehlt ein Zahn, planen wir das Implantat mit Bildgebung und einem Zeitplan, der zu Ihrer Heilung passt. Danach folgt die Krone in Form und Farbe Ihrer Zähne.',
    icon: 'implant',
  },
  {
    id: 'kiefer',
    title: 'Kieferorthopädie',
    summary: 'Korrektur von Zahn- und Kieferstellung bei Jugendlichen und Erwachsenen.',
    details:
      'Eine gerade Zahnreihe ist leichter zu pflegen. Wir schauen auf Funktion und Aussehen und wählen die Apparatur, die zum Alltag passt.',
    icon: 'care',
  },
];

export const HIGHLIGHTS: Highlight[] = [
  {
    title: 'Erfahrene Zahnärztinnen und Zahnärzte',
    text: 'Jede Behandlung beginnt mit einer Untersuchung und einer Erklärung in ruhiger Sprache – ohne Eile und ohne Fachchinesisch.',
  },
  {
    title: 'Moderne Praxisausstattung',
    text: 'Digitale Abformung, aktuelle Bildgebung und steriles Instrumentarium gehören zum Alltag der Praxis.',
  },
  {
    title: 'Ruhige Behandlungsräume',
    text: 'Helle Räume, gedämpftes Licht und ein Team, das Sie mit Namen begrüßt. Der Besuch soll sich sicher anfühlen.',
  },
];

export const DOCTORS: Doctor[] = [
  {
    slug: 'tom-bergmann',
    name: 'Dr. Tom Bergmann',
    role: 'Zahnarzt · Implantologie',
    shortBio: 'Plant festen Zahnersatz und erklärt jeden Schritt, bevor etwas beginnt.',
    bio: [
      'Dr. Tom Bergmann führt die Praxis seit 2012. Sein Schwerpunkt liegt auf Implantaten und Zahnersatz, der sich natürlich einfügt.',
      'Vor jedem Eingriff zeigt er das Röntgenbild und den Ablauf. Patientinnen und Patienten sollen wissen, was passiert und warum.',
    ],
    image: 'images/person_5.jpg',
    focus: ['Implantate', 'Kronen und Brücken', 'Beratung bei Zahnersatz'],
  },
  {
    slug: 'mira-hoffmann',
    name: 'Dr. Mira Hoffmann',
    role: 'Zahnärztin · Prophylaxe',
    shortBio: 'Sorgt mit gründlicher Vorsorge dafür, dass große Eingriffe selten werden.',
    bio: [
      'Dr. Mira Hoffmann leitet die Prophylaxe. Professionelle Zahnreinigung, Parodontitis-Nachsorge und Aufhellung liegen bei ihr.',
      'Sie nimmt sich Zeit für Putztechnik und für Fragen, die im Behandlungsstuhl oft zu kurz kommen.',
    ],
    image: 'images/person_6.jpg',
    focus: ['Professionelle Zahnreinigung', 'Parodontologie', 'Zahnaufhellung'],
  },
  {
    slug: 'patrick-jensen',
    name: 'Dr. Patrick Jensen',
    role: 'Zahnarzt · Ästhetik',
    shortBio: 'Arbeitet an Form und Farbe, damit das Ergebnis zum Gesicht passt.',
    bio: [
      'Dr. Patrick Jensen verbindet ästhetische Zahnmedizin mit zurückhaltenden Veränderungen: Veneers, Aufhellung und unsichtbare Korrekturen.',
      'Er fotografiert vorher und nachher, damit das Ziel gemeinsam feststeht.',
    ],
    image: 'images/person_7.jpg',
    focus: ['Ästhetische Zahnmedizin', 'Veneers', 'Aufhellung'],
  },
  {
    slug: 'leonie-kruse',
    name: 'Leonie Kruse',
    role: 'Kieferorthopädie',
    shortBio: 'Begleitet Zahnspangen bei Jugendlichen und Erwachsenen über die ganze Dauer.',
    bio: [
      'Leonie Kruse plant kieferorthopädische Behandlungen und bleibt über Monate die feste Ansprechpartnerin.',
      'Sie erklärt, welche Spange zum Alltag passt und wie die Pflege während der Behandlung gelingt.',
    ],
    image: 'images/person_8.jpg',
    focus: ['Feste Zahnspangen', 'Aligner', 'Kontrollen'],
  },
];

export const STATS: StatItem[] = [
  { value: 18, suffix: '', label: 'Jahre Erfahrung' },
  { value: 12, suffix: '', label: 'Behandlerinnen und Behandler' },
  { value: 8500, suffix: '+', label: 'Behandelte Patientinnen und Patienten' },
  { value: 1200, suffix: '', label: 'Patientinnen und Patienten im Jahr' },
];

export const PRICE_PLANS: PricePlan[] = [
  {
    name: 'Basis',
    price: '49 €',
    period: '/ Sitzung',
    features: ['Untersuchung', 'Beratungsgespräch', 'Kontrollröntgen bei Bedarf', 'Putzanleitung', 'Schriftlicher Kurzplan'],
    highlighted: false,
  },
  {
    name: 'Standard',
    price: '89 €',
    period: '/ Sitzung',
    features: ['Professionelle Zahnreinigung', 'Zahnsteinentfernung', 'Politur', 'Fluoridierung', 'Erinnerung zur Nachsorge'],
    highlighted: false,
  },
  {
    name: 'Premium',
    price: '149 €',
    period: '/ Sitzung',
    features: ['Ausführliche Diagnostik', 'Ästhetische Beratung', 'Aufhellungsplanung', 'Fotoanalyse', 'Persönlicher Behandlungsplan'],
    highlighted: true,
  },
  {
    name: 'Platin',
    price: '249 €',
    period: '/ Sitzung',
    features: ['Implantatberatung', 'Digitaler Ablaufplan', 'Materialauswahl', 'Koordination mit dem Labor', 'Nachsorgetermine inklusive'],
    highlighted: false,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Anna Keller',
    role: 'Patientin seit 2019',
    quote:
      'Ich hatte jahrelang Angst vor dem Zahnarzt. Hier wurde mir jeder Schritt erklärt, und die Reinigung war ruhig und gründlich. Ich komme seitdem regelmäßig.',
    image: 'images/person_1.jpg',
  },
  {
    name: 'Jonas Weber',
    role: 'Implantatpatient',
    quote:
      'Nach dem Verlust eines Backenzahns wollte ich etwas Festes. Der Plan war klar, die Termine pünktlich, und die Krone fühlt sich an wie ein eigener Zahn.',
    image: 'images/person_2.jpg',
  },
  {
    name: 'Sofia Rahman',
    role: 'Prophylaxe',
    quote:
      'Die Professionelle Zahnreinigung ist gründlich, ohne dass es unangenehm wird. Danach bekomme ich konkrete Tipps, die im Alltag funktionieren.',
    image: 'images/person_3.jpg',
  },
  {
    name: 'Lars Petersen',
    role: 'Vater von zwei Kindern',
    quote:
      'Unsere Kinder gehen ohne Diskussion mit. Das Team nimmt sich Zeit, erklärt die Geräte und macht aus dem Kontrolltermin keinen Stress.',
    image: 'images/person_4.jpg',
  },
];

export const GALLERY: GalleryItem[] = [
  { image: 'images/gallery-1.jpg', alt: 'Behandlungsraum der Praxis Helia Zahn' },
  { image: 'images/gallery-2.jpg', alt: 'Zahnmedizinische Instrumente' },
  { image: 'images/gallery-3.jpg', alt: 'Beratung in der Praxis' },
  { image: 'images/gallery-4.jpg', alt: 'Helles Lächeln nach der Behandlung' },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'professionelle-zahnreinigung',
    title: 'Warum die Professionelle Zahnreinigung mehr ist als Kosmetik',
    excerpt: 'Beläge unter dem Zahnfleischrand sieht man nicht – und genau dort beginnt oft die Entzündung.',
    date: '12. März 2026',
    author: 'Dr. Mira Hoffmann',
    image: 'images/image_1.jpg',
    paragraphs: [
      'Eine Zahnbürste erreicht die Flächen zwischen den Zähnen und am Zahnfleischrand nur zum Teil. Dort setzen sich Beläge fest und werden mit der Zeit zu Zahnstein.',
      'Bei der Professionellen Zahnreinigung entfernen wir diese Beläge, polieren die Flächen und schauen, ob das Zahnfleisch bereits gereizt ist.',
      'Für die meisten Erwachsenen ist ein Termin alle sechs Monate sinnvoll. Wer eine Parodontitis hatte, kommt häufiger – das legen wir gemeinsam fest.',
    ],
  },
  {
    slug: 'implantat-ablauf',
    title: 'So läuft eine Implantatbehandlung in der Praxis ab',
    excerpt: 'Vom ersten Bild bis zur Krone: welche Termine wirklich nötig sind.',
    date: '28. Januar 2026',
    author: 'Dr. Tom Bergmann',
    image: 'images/image_2.jpg',
    paragraphs: [
      'Ein Implantat ersetzt die Zahnwurzel. Darauf sitzt später eine Krone. Beides braucht Planung, nicht Tempo.',
      'Zuerst prüfen wir Knochen und Nachbarzähne. Dann folgt das Setzen des Implantats in örtlicher Betäubung. Die Einheilzeit liegt meist bei einigen Monaten.',
      'Erst wenn das Implantat fest ist, nehmen wir die Abformung und setzen die Krone. In der Zwischenzeit gibt es bei Bedarf einen provisorischen Ersatz.',
    ],
  },
  {
    slug: 'zahnaufhellung',
    title: 'Zahnaufhellung: was sie kann und was sie nicht kann',
    excerpt: 'Nicht jeder Farbwunsch ist mit dem Zahnschmelz verträglich. Wir sagen vorher, welches Ergebnis realistisch ist.',
    date: '4. November 2025',
    author: 'Dr. Patrick Jensen',
    image: 'images/image_3.jpg',
    paragraphs: [
      'Aufhellung wirkt auf den eigenen Zahn. Füllungen, Kronen und Verfärbungen im Dentin reagieren anders als gesunder Schmelz.',
      'Deshalb schauen wir zuerst auf die Ursache der Farbe. Manchmal reicht eine Reinigung, manchmal ist eine Schiene für zu Hause die ruhigere Lösung.',
      'Empfindliche Zähne behandeln wir zurückhaltend. Ein helleres Lächeln soll nicht mit Tagen voller Schmerzempfindlichkeit bezahlt werden.',
    ],
  },
  {
    slug: 'angstpatienten',
    title: 'Zum Zahnarzt trotz Angst',
    excerpt: 'Angst ist ein Grund, langsamer zu arbeiten – kein Grund, die Behandlung aufzuschieben.',
    date: '18. September 2025',
    author: 'Praxisteam',
    image: 'images/image_4.jpg',
    paragraphs: [
      'Viele unserer Patientinnen und Patienten kommen mit einer langen Pause. Der erste Termin ist dann oft nur ein Gespräch und eine kurze Kontrolle.',
      'Wir kündigen Berührungen an, lassen Pausen zu und betäuben, bevor etwas unangenehm wird.',
      'Wer möchte, verabredet ein Zeichen, mit dem die Behandlung sofort stoppt. Das nimmt den meisten den Druck aus dem Stuhl.',
    ],
  },
  {
    slug: 'kinderprophylaxe',
    title: 'Der erste Zahnarztbesuch mit Kindern',
    excerpt: 'Früh, kurz und ohne Bohrer: so wird die Praxis ein normaler Ort.',
    date: '2. Juni 2025',
    author: 'Leonie Kruse',
    image: 'images/image_5.jpg',
    paragraphs: [
      'Der erste Besuch sollte stattfinden, bevor ein Zahn wehtut. Dann bleibt Zeit, den Stuhl, das Licht und die Spiegel kennenzulernen.',
      'Wir zählen Zähne, zeigen die Bürste und loben, was schon gut klappt. Behandeln müssen wir an diesem Tag fast nie.',
      'Eltern bleiben im Raum. Wer zu Hause vom Besuch erzählt, ohne dass es spannend oder bedrohlich klingt, macht den nächsten Termin leichter.',
    ],
  },
  {
    slug: 'alltagspflege',
    title: 'Drei Dinge, die im Bad mehr bringen als jede neue Zahnpasta',
    excerpt: 'Zwischenräume, Zahnfleischrand und Regelmäßigkeit entscheiden über den nächsten Befund.',
    date: '14. Februar 2025',
    author: 'Dr. Mira Hoffmann',
    image: 'images/image_6.jpg',
    paragraphs: [
      'Zweimal täglich zwei Minuten reichen nur, wenn auch die Zwischenräume drankommen. Zahnseide oder Zwischenraumbürsten sind keine Zugabe.',
      'Die Bürste gehört an den Zahnfleischrand, nicht nur auf die Kaufläche. Ein zu harter Druck nützt nicht, er reizt.',
      'Zuckerfreie Getränke zwischen den Mahlzeiten und Wasser nach dem Kaffee helfen mehr als ein teures Whitening-Gel am Abend.',
    ],
  },
];

export const ABOUT_TABS: AboutTab[] = [
  {
    id: 'arbeit',
    label: 'Was wir tun',
    title: 'Zahnmedizin, die man verstehen kann',
    paragraphs: [
      'Wir untersuchen, erklären und behandeln in einer Reihenfolge, die Sie mittragen. Prophylaxe, Füllungen, Zahnersatz, Implantate und Kieferorthopädie liegen in einer Praxis.',
      'Vor größeren Schritten bekommen Sie einen Plan mit Alternativen. Entscheiden können Sie in Ruhe, nicht im Behandlungsstuhl.',
    ],
  },
  {
    id: 'auftrag',
    label: 'Unser Auftrag',
    title: 'Für alle, die eine feste Praxis suchen',
    paragraphs: [
      'Familien, Berufstätige und Menschen mit langer Zahnarztpause sollen denselben Standard bekommen: Zeit, klare Worte und eine Behandlung, die zum Befund passt.',
      'Wir nehmen gesetzlich und privat Versicherte auf und sagen vorab, welche Leistungen die Kasse trägt und welche privat sind.',
    ],
  },
  {
    id: 'ziel',
    label: 'Unser Ziel',
    title: 'Zähne, die lange bleiben',
    paragraphs: [
      'Das schönste Ergebnis ist der Zahn, den wir nicht ersetzen müssen. Deshalb liegt der Schwerpunkt auf Reinigung, früher Erkennung und kleinen Reparaturen.',
      'Wenn Ersatz nötig ist, soll er fest sitzen, pflegbar sein und zum Rest der Zahnreihe passen.',
    ],
  },
];

export const PROCEDURE_POINTS = [
  'Untersuchung und Befund in verständlicher Sprache',
  'Behandlungsplan, bevor etwas begonnen wird',
  'Nachsorge, damit das Ergebnis hält',
];
