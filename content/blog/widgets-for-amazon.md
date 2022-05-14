---
title: "Widgets for Amazon"

subtitle: "Amazon ended the support for their search widgets. Here's a replacement."

lead: "Amazon ended the support for their search widgets. Here's a replacement."

description: "Amazon ended the support for their search widgets. Here's a replacement."

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

Do you miss the old Amazon search widgets that Amazon discontinued in 2022?  

If you are using WordPress then check out my [WordPress plugin "Widgets for Amazon"](https://wordpress.org/plugins/widgets-for-amazon/).  

Otherwise, you can use the snippet below.  
Please note that one tenth of the search results will be using our tag in order to support the development and to cover the server costs on our side.

* Copy [amazon-search.css](/css/amazon-search.css) to your local static files at <code>/css</code>.
* Copy [amazon-search.js](/js/amazon-search.js) to your local static files at <code>/js</code>.
* Then use the following HTML code:


<pre>
&lt;link rel="stylesheet" href="/css/amazon-search.css" /&gt;
&lt;script src="/js/amazon-search.js"&gt;&lt;/script&gt;

&lt;!-- If you are using more than one widget per page/post then increment the id's index, e.g. "amazon-search-1" --&gt;
&lt;div class="amazon-search" id="amazon-search-0"&gt;&lt;/div&gt;

&lt;script&gt;
{
  // Replace YOUR-AMAZON-AFFILIATE-TAG with your own Amazon affiliate tag.
  const tag = 'YOUR-AMAZON-AFFILIATE-TAG';

  // Replace AMAZON-PARTNER-PROGRAM-NOTE to fulfill the legal requirements from Amazon.
  // E.g. "As an Amazon Associate we earn from qualifying purchases."
  const footerMessage = 'AMAZON-PARTNER-PROGRAM-NOTE';

  // Set the keywords.
  const keywords = 'Golf';
  
  // Set the category (optional).
  const category = 'Sporting';
  
  // Set the domain code.
  // www.amazon.com => "com"
  // Or 'ca', 'co.jp', 'co.uk', 'de', 'fr', 'it'.
  const domain_code = 'com';

  // Set the language.
  // English is default. Use 'de' for German.
  const language = 'en';

  // If you are using more than one widget per page/post you need to increment the index.
  const index = '0';

  // Choose your appropriate base url.
  const base_url_us = 'https://us-central1-e-widgets-europe-west3-prod.cloudfunctions.net/SearchBoxJsonUsCentral1'; // For the USA and the rest of the world.
  const base_url_eu = 'https://europe-west1-e-widgets-europe-west3-prod.cloudfunctions.net/SearchBoxJsonEuropeWest1'; // For Europe.
  const base_url = base_url_us; // Or "base_url_eu" for Europe.

  // Do not modify this part.
  const version = '1.0.9';
  const url = base_url + '?Version=' + version + '&Tag=' + tag + '&Category=' + category + '&DomainCode=' + domain_code + '&Language=' + language;
  eggnstone_widgets_fill_amazon_search_box(index, url, keywords, footerMessage);
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
