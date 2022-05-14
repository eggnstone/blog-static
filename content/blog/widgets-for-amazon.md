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

Just replace the YOUR-AMAZON-AFFILIATE-TAG and fill in the keywords, and you're ready to go.  
Please note that one tenth of the search results will be using our tag in order to support the development and to cover the server costs on our side.

* Copy [amazon-search-v1.0.6.css](/css/amazon-search-v1.0.6.css) to your local static files at <code>/css</code>.
* Copy [amazon-search-v1.0.6.js](/js/amazon-search-v1.0.6.js) to your local static files at <code>/js</code>.

Then use the following HTML:

<pre>
&lt;link rel="stylesheet" href="/css/amazon-search-v1.0.6.css" /&gt;
&lt;script src="/js/amazon-search-v1.0.6.js"&gt;&lt;/script&gt;

&lt;div class="amazon-search" id="amazon-search-0"&gt;&lt;/div&gt;
&lt;script&gt;
{
  const index = '0';
  const base_url_eu = 'https://europe-west1-e-widgets-europe-west3-prod.cloudfunctions.net/SearchBoxJsonEuropeWest1'; // For Europe.
  const base_url_us = 'https://us-central1-e-widgets-europe-west3-prod.cloudfunctions.net/SearchBoxJsonUsCentral1'; // For the USA and the rest of the world.
  const version = '1.0.6';
  const tag = 'YOUR-AMAZON-AFFILIATE-TAG'; // Replace with your Amazon affiliate tag!
  const category = 'Sporting'; // Category, may be empty.
  const domain_code = 'com'; // Or 'ca', 'co.jp', 'co.uk', 'de', 'fr', 'it'
  const language = 'en'; // English is default. Use 'de' for German.
  const url = base_url_us + '?Version=' + version + '&Tag=' + tag + '&Category=' + category + '&DomainCode=' + domain_code + '&Language=' + language;
  const keywords = 'Golf'; // Replace with your keywords!
  eggnstone_widgets_fill_amazon_search_box(index, url, keywords);
}
&lt;/script&gt;
</pre>
<br />
<br />
Example:
<div class="amazon-search" id="amazon-search-0"></div>
<link rel="stylesheet" href="/css/amazon-search-v1.0.6.css">
<script src="/js/amazon-search-v1.0.6.js"></script>
<script src="/js/amazon-search-sb-0.js"></script>
