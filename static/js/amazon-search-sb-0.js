{
  const affiliateTag = 'ewidgets-sb-20'; // Replace with your Amazon affiliate tag!

  const legalMessage = 'As an Amazon Associate we earn from qualifying purchases.';

  const keywords = 'Golf'; // Replace with your keywords!

  const category = 'Sporting'; // Category, may be empty.

  const domainCode = 'com'; // Or 'ca', 'co.jp', 'co.uk', 'de', 'fr', 'it'

  const language = 'en'; // English is default. Use 'de' for German.

  const index = '0';

  const baseUrlUs = 'https://us-central1-e-widgets-europe-west3-prod.cloudfunctions.net/SearchBoxJsonUsCentral1'; // For the USA and the rest of the world.
  const baseUrlEu = 'https://europe-west1-e-widgets-europe-west3-prod.cloudfunctions.net/SearchBoxJsonEuropeWest1'; // For Europe.
  const baseUrl = baseUrlUs;

  const version = '1.0.9';
  const url = baseUrl + '?Version=' + version + '&Tag=' + affiliateTag + '&Category=' + category + '&DomainCode=' + domainCode + '&Language=' + language;
  eggnstone_widgets_fill_amazon_search_box(index, url, keywords, legalMessage);
}
