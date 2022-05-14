{
  const index = '0';
  const base_url_eu = 'https://europe-west1-e-widgets-europe-west3-prod.cloudfunctions.net/SearchBoxJsonEuropeWest1'; // For Europe.
  const base_url_us = 'https://us-central1-e-widgets-europe-west3-prod.cloudfunctions.net/SearchBoxJsonUsCentral1'; // For the USA and the rest of the world.
  const version = '1.0.9';
  const tag = 'ewidgets-sb-20'; // Replace with your Amazon affiliate tag!
  const category = 'Sporting'; // Category, may be empty.
  const domain_code = 'com'; // Or 'ca', 'co.jp', 'co.uk', 'de', 'fr', 'it'
  const language = 'en'; // English is default. Use 'de' for German.
  const url = base_url_us + '?Version=' + version + '&Tag=' + tag + '&Category=' + category + '&DomainCode=' + domain_code + '&Language=' + language;
  const keywords = 'Golf'; // Replace with your keywords!
  const footerMessage = 'AMAZON-PARTNER-PROGRAM-NOTE';
  eggnstone_widgets_fill_amazon_search_box(index, url, keywords, footerMessage);
}
