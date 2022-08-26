---
title: "Widgets for Amazon"

subtitle: "Amazon ended the support for their search widgets. Here's a replacement."

lead: "Amazon ended the support for their search widgets. Here's a replacement."

description: "Amazon ended the support for their search widgets. Here's a replacement."

createdAt: 2022-05-14
updatedAt: 2022-08-14

cover:
  image: "/images/banner-772x250.png"
  alt: "Replacement for Amazon search widget"
  caption: "Replacement looks great!"
  thumb: "/images/icon-256x256.png"

tags:     
  - Amazon
  - Search
  - Widgets

---

**Do you miss the old Amazon search widgets that Amazon discontinued in 2022?**  

If you are using WordPress then check out my [WordPress plugin "Widgets for Amazon"](https://wordpress.org/plugins/widgets-for-amazon/).  

Otherwise, you can use the snippet below.  
Please note that one tenth of the search results will be using our tag in order to support the development and to cover the server costs on our side.

* Download [amazon-search.css](/css/amazon-search.css) to your static files at <code>/css</code> or adjust accordingly.
* Download [amazon-search.js](/js/amazon-search.js) to your static files at <code>/js</code> or adjust accordingly.
* Then use the following HTML code:

<pre>
&lt;link rel="stylesheet" href="/css/amazon-search.css" /&gt;
&lt;script src="/js/amazon-search.js"&gt;&lt;/script&gt;

&lt;!-- If you are using more than one widget per page/post then increment the id's index, e.g. "amazon-search-1" --&gt;
&lt;div class="amazon-search" id="amazon-search-0"&gt;&lt;/div&gt;

&lt;script&gt;
{
  // Replace YOUR-AMAZON-AFFILIATE-TAG with your own Amazon affiliate tag.
  const affiliateTag = 'YOUR-AMAZON-AFFILIATE-TAG';

  // Replace AMAZON-PARTNER-PROGRAM-NOTE to fulfill the legal requirements from Amazon.
  // E.g. "As an Amazon Associate we earn from qualifying purchases."
  const legalMessage = 'AMAZON-PARTNER-PROGRAM-NOTE';

  // Set the keywords.
  const keywords = 'Golf';
  
  // Set the category (optional).
  // See the bottom of https://blog.eggnstone.com/blog/widgets-for-amazon for a list of category codes. 
  const category = 'Sporting';
  
  // Set the domain code.
  // www.amazon.com => "com"
  // Or 'ca', 'co.jp', 'co.uk', 'de', 'fr', 'it'.
  const domainCode = 'com';

  // Set the language.
  // English is default. Use 'de' for German.
  const language = 'en';

  // If you are using more than one widget per page/post you need to increment the index.
  const index = '0';

  // Choose your appropriate base url.
  const baseUrlUs = 'https://us-central1-e-widgets-europe-west3-prod.cloudfunctions.net/SearchBoxJsonUsCentral1'; // For the USA and the rest of the world.
  const baseUrlEu = 'https://europe-west1-e-widgets-europe-west3-prod.cloudfunctions.net/SearchBoxJsonEuropeWest1'; // For Europe.
  const baseUrl = baseUrlUs; // Or "base_url_eu" for Europe.

  // Do not modify this part.
  const version = '1.0.27';
  const url = baseUrl + '?Version=' + version + '&Tag=' + affiliateTag + '&Category=' + category + '&DomainCode=' + domainCode + '&Language=' + language;

  document.addEventListener("DOMContentLoaded", function(event)
  {
    eggnstone_widgets_fill_amazon_search_box(index, url, keywords, legalMessage);
  });
}
&lt;/script&gt;
</pre>
<br />
<br />
Example:
<div class="amazon-search" id="amazon-search-0"></div>
<link rel="stylesheet" href="/css/amazon-search.css">
<script src="/js/amazon-search.js"></script>
<script src="/js/amazon-search-sb-0.js"></script>
<br/>

**Category**

If you provide a category it needs to be the category code amazon uses, e.g. if you want "Apps & Games" then you need to supply "mobile-apps".<br/>
See below for the appropriate codes for the different Amazon sites:<br/>
<a href='#categories-de'>Germany</a><br/>
<a href='#categories-it'>Italy</a><br/>
<a href='#categories-uk'>UK</a><br/>
<a href='#categories-us'>USA</a><br/>
<a href='#categories-us-intl'>USA (international shipping)</a><br/>
<br/>
<b id='categories-de'>Germany</b><br/>
alexa-skills: Alexa Skills<br/>
amazon-devices: Amazon Geräte<br/>
amazon-global-store: Amazon Global Store<br/>
warehouse-deals: Amazon Warehouse<br/>
mobile-apps: Apps & Spiele<br/>
audible: Audible Hörbücher<br/>
automotive: Auto & Motorrad<br/>
baby: Baby<br/>
diy: Baumarkt<br/>
beauty: Beauty<br/>
clothing: Bekleidung<br/>
lighting: Beleuchtung<br/>
stripbooks: Bücher<br/>
office-products: Bürobedarf & Schreibwaren<br/>
computers: Computer & Zubehör<br/>
drugstore: Drogerie & Körperpflege<br/>
dvd: DVD & Blu-ray<br/>
appliances: Elektro-Großgeräte<br/>
electronics: Elektronik & Foto<br/>
fashion: Fashion<br/>
videogames: Games<br/>
outdoor: Garten<br/>
gift-cards: Geschenkgutscheine<br/>
industrial: Gewerbe, Industrie & Wissenschaft<br/>
handmade: Handmade<br/>
pets: Haustier<br/>
local-services: Home & Business Services<br/>
photo: Kamera & Foto<br/>
digital-text: Kindle-Shop<br/>
classical: Klassik<br/>
luggage: Koffer, Rucksäcke & Taschen<br/>
kitchen: Küche, Haushalt & Wohnen<br/>
grocery: Lebensmittel & Getränke<br/>
popular: Musik-CDs & Vinyl<br/>
digital-music: Musik-Downloads<br/>
mi: Musikinstrumente & DJ-Equipment<br/>
luxury-beauty: Premium Beauty<br/>
instant-video: Prime Video<br/>
jewelry: Schmuck<br/>
shoes: Schuhe & Handtaschen<br/>
software: Software<br/>
specialty-aps-sns: Spar-Abo<br/>
toys: Spielzeug<br/>
sports: Sport & Freizeit<br/>
watches: Uhren<br/>
magazines: Zeitschriften<br/>
<br/>
<b id='categories-it'>Italy</b><br/>
apparel: Abbigliamento<br/>
alexa-skills: Alexa Skill<br/>
grocery: Alimentari e cura della casa<br/>
amazon-global-store: Amazon Global Store<br/>
warehouse-deals: Amazon Warehouse<br/>
mobile-apps: App e Giochi<br/>
audible: Audiolibri Audible<br/>
automotive: Auto e Moto - Parti e Accessori<br/>
beauty: Bellezza<br/>
gift-cards: Buoni Regalo<br/>
office-products: Cancelleria e prodotti per ufficio<br/>
kitchen: Casa e cucina<br/>
popular: CD e Vinili<br/>
amazon-devices: Dispositivi Amazon<br/>
electronics: Elettronica<br/>
diy: Fai da te<br/>
dvd: Film e TV<br/>
garden: Giardino e giardinaggio<br/>
toys: Giochi e giocattoli<br/>
jewelry: Gioielli<br/>
appliances: Grandi elettrodomestici<br/>
handmade: Handmade<br/>
lighting: Illuminazione<br/>
industrial: Industria e Scienza<br/>
computers: Informatica<br/>
specialty-aps-sns: Iscriviti e Risparmia<br/>
digital-text: Kindle Store<br/>
stripbooks: Libri<br/>
luxury: Luxury Stores<br/>
under-ten-dollars: Meno di 10€<br/>
fashion: Moda<br/>
digital-music: Musica Digitale<br/>
watches: Orologi<br/>
baby: Prima infanzia<br/>
instant-video: Prime Video<br/>
pets: Prodotti per animali domestici<br/>
hpc: Salute e cura della persona<br/>
shoes: Scarpe e borse<br/>
software: Software<br/>
sporting: Sport e tempo libero<br/>
mi: Strumenti musicali e DJ<br/>
luggage: Valigeria<br/>
videogames: Videogiochi<br/>
<br/>
<b id='categories-uk'>UK</b><br/>
alexa-skills: Alexa Skills<br/>
amazon-devices: Amazon Devices<br/>
amazon-global-store: Amazon Global Store<br/>
warehouse-deals: Amazon Warehouse<br/>
mobile-apps: Apps & Games<br/>
audible: Audible Audiobooks<br/>
baby: Baby<br/>
beauty: Beauty<br/>
stripbooks: Books<br/>
automotive: Car & Motorbike<br/>
popular: CDs & Vinyl<br/>
classical: Classical Music<br/>
clothing: Clothing<br/>
computers: Computers & Accessories<br/>
digital-music: Digital Music<br/>
diy: DIY & Tools<br/>
dvd: DVD & Blu-ray<br/>
electronics: Electronics & Photo<br/>
fashion: Fashion<br/>
outdoor: Garden & Outdoors<br/>
gift-cards: Gift Cards<br/>
grocery: Grocery<br/>
handmade: Handmade<br/>
drugstore: Health & Personal Care<br/>
local-services: Home & Business Services<br/>
kitchen: Home & Kitchen<br/>
industrial: Industrial & Scientific<br/>
jewelry: Jewellery<br/>
digital-text: Kindle Store<br/>
appliances: Large Appliances<br/>
lighting: Lighting<br/>
luggage: Luggage<br/>
mi: Musical Instruments & DJ Equipment<br/>
videogames: PC & Video Games<br/>
pets: Pet Supplies<br/>
luxury-beauty: Premium Beauty<br/>
instant-video: Prime Video<br/>
shoes: Shoes & Bags<br/>
software: Software<br/>
sports: Sports & Outdoors<br/>
office-products: Stationery & Office Supplies<br/>
specialty-aps-sns: Subscribe & Save<br/>
toys: Toys & Games<br/>
watches: Watches<br/>
<br/>
<b id='categories-us'>USA</b><br/>
alexa-skills: Alexa Skills<br/>
amazon-devices: Amazon Devices<br/>
live-explorations: Amazon Explore<br/>
amazonfresh: Amazon Fresh<br/>
amazon-pharmacy: Amazon Pharmacy<br/>
warehouse-deals: Amazon Warehouse<br/>
appliances: Appliances<br/>
mobile-apps: Apps & Games<br/>
arts-crafts: Arts, Crafts & Sewing<br/>
audible: Audible Books & Originals<br/>
automotive: Automotive Parts & Accessories<br/>
courses: AWS Courses<br/>
baby-products: Baby<br/>
beauty: Beauty & Personal Care<br/>
stripbooks: Books<br/>
popular: CDs & Vinyl<br/>
mobile: Cell Phones & Accessories<br/>
fashion: Clothing, Shoes & Jewelry<br/>
fashion-womens: Women<br/>
fashion-mens: Men<br/>
fashion-girls: Girls<br/>
fashion-boys: Boys<br/>
fashion-baby: Baby<br/>
collectibles: Collectibles & Fine Art<br/>
computers: Computers<br/>
financial: Credit and Payment Cards<br/>
edu-alt-content: Digital Educational Resources<br/>
digital-music: Digital Music<br/>
electronics: Electronics<br/>
lawngarden: Garden & Outdoor<br/>
gift-cards: Gift Cards<br/>
grocery: Grocery & Gourmet Food<br/>
handmade: Handmade<br/>
hpc: Health, Household & Baby Care<br/>
local-services: Home & Business Services<br/>
garden: Home & Kitchen<br/>
industrial: Industrial & Scientific<br/>
prime-exclusive: Just for Prime<br/>
digital-text: Kindle Store<br/>
fashion-luggage: Luggage & Travel Gear<br/>
luxury: Luxury Stores<br/>
magazines: Magazine Subscriptions<br/>
movies-tv: Movies & TV<br/>
mi: Musical Instruments<br/>
office-products: Office Products<br/>
pets: Pet Supplies<br/>
luxury-beauty: Premium Beauty<br/>
instant-video: Prime Video<br/>
smart-home: Smart Home<br/>
software: Software<br/>
sporting: Sports & Outdoors<br/>
specialty-aps-sns: Subscribe & Save<br/>
subscribe-with-amazon: Subscription Boxes<br/>
tools: Tools & Home Improvement<br/>
toys-and-games: Toys & Games<br/>
under-ten-dollars: Under $10<br/>
videogames: Video Games<br/>
wholefoods: Whole Foods Market<br/>
<br/>
<b id='categories-us-intl'>USA (international shipping)</b><br/>
arts-crafts-intl-ship: Arts & Crafts<br/>
automotive-intl-ship: Automotive<br/>
baby-products-intl-ship: Baby<br/>
beauty-intl-ship: Beauty & Personal Care<br/>
stripbooks-intl-ship: Books<br/>
fashion-boys-intl-ship: Boys' Fashion<br/>
computers-intl-ship: Computers<br/>
deals-intl-ship: Deals<br/>
digital-music: Digital Music<br/>
electronics-intl-ship: Electronics<br/>
fashion-girls-intl-ship: Girls' Fashion<br/>
hpc-intl-ship: Health & Household<br/>
kitchen-intl-ship: Home & Kitchen<br/>
industrial-intl-ship: Industrial & Scientific<br/>
digital-text: Kindle Store<br/>
luggage-intl-ship: Luggage<br/>
fashion-mens-intl-ship: Men's Fashion<br/>
movies-tv-intl-ship: Movies & TV<br/>
music-intl-ship: Music, CDs & Vinyl<br/>
pets-intl-ship: Pet Supplies<br/>
instant-video: Prime Video<br/>
software-intl-ship: Software<br/>
sporting-intl-ship: Sports & Outdoors<br/>
tools-intl-ship: Tools & Home Improvement<br/>
toys-and-games-intl-ship: Toys & Games<br/>
videogames-intl-ship: Video Games<br/>
fashion-womens-intl-ship: Women's Fashion<br/>
        </div>

<div id="disqus_thread"></div>
<script>
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://blog-eggenstone-com.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
