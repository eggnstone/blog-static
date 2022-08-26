---
title: "How to fix the \"No Price\" problem in the \"WZone Direct Import\" Chrome Extension"
subtitle: "Always seeing \"No Price\"? Here's a quick fix."
lead: "Always seeing \"No Price\"? Here's a quick fix.."
description: "Always seeing \"No Price\"? Here's a quick fix..."
createdAt: 2021-11-05T00:00:00.000Z
updatedAt: 2021-11-06T00:00:00.000Z
cover: 
  image: "/images/chrome_extensions.jpg"
  alt: "Flutter"
  thumb: "/images/chrome_extensions_100h.jpg"
tags: 
  - WordPress
  - WooCommerce
  - WooZone
  - WZone
  - WZone Direct Import
  - Chrome Extensions
---
### Problem
If you are using WordPress with WooCommerce and the WooZone/WZone plugin then you are probably also using the [WZone Direct Import](https://chrome.google.com/webstore/detail/wzone-direct-import/gmpiiinlandbgcfejoeaodgpfkdjnolm) extension for Google Chrome.

Recently Amazon changed their web pages and the extension cannot pick up the prices anymore.

![With "No Price"](/images/wzone-direct-import-no-price.png)

### Solution
Fix for WZone Direct Import Chrome Extension v2.5.0:

In Windows File Explorer
- Go to `%LocalAppData%\Google\Chrome\User Data\Default\Extensions\gmpiiinlandbgcfejoeaodgpfkdjnolm\2.0.5_0\js`
- Edit the `content.js` file with a proper text editor, e.g., [Notepad++](https://notepad-plus-plus.org/).
- In line 1316 replace `product.amazon_price = jQuery.trim( page.find('#priceblock_ourprice, #priceblock_dealprice, #priceblock_saleprice').eq(0).text() );` with `product.amazon_price = jQuery.trim( page.find('#corePrice_desktop .apexPriceToPay .a-offscreen').eq(0).text() );`
- In line 1319 replace `product.list_price = jQuery.trim( page.find('#price .a-text-strike').eq(0).text() );` with `product.list_price = jQuery.trim( page.find('#corePrice_desktop .a-text-price .a-offscreen').eq(0).text() );`
- Save the file
In Google Chrome
- Reload the Amazon page.
- You should see the prices again.
![With price](/images/wzone-direct-import-price.png)

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
    s.src = 'https://blog-eggnstone-dev.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
