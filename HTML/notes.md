# HTML
[Guide](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/src/questions/html-questions.md) 

---
### What does doctype do? 
```html
<!doctype html>
```
- Stands for Document Type Declaration 
- Informs browser about the type & version of HTML that is used to build the web page
- Used in HTML5 to distinguish between standards-compliant parsing mode and a quirks parsing mode
    - It’s presence tells the browser to render in standard mode
---
### What is the difference between standards mode, almost standards mode and quirks mode?
- `Quirks mode` the layout emulates non-standard behavior in NetScape and IE5. Supports websites that were built before the adoption of standards
- `Full standards mode` layout behavior described by HTML and CSS
- `Almost standards mode` very small amounts of quirks implemented 
---
### What is the difference between HTML and XHTML?
- XHTML is in the family of XML. 
- They must be well-formed. 
- Case-sensitive for elements and attribute names. 
- Raw < and & characters are not allowed outside of CDATA. 
- Fatal parse error causes doc processing to be aborted.
---
### Are there any problems w/ serving pages as application/xhtml+xml?
- XHTML issues above
- IE 8 shows an error about not know the format of the file
---
### How would you serve content in multiple languages?
- HTTP request is made to a server, the requesting user agent sends info about language preferences (Accept-Language).
- Allow the user to explicitly define language (url param or cookie)
- Look at the Accept-Language request header. This is a browser supplied prioritized list of languages
- Browsers look at the charset through the Content Type header. There is also the `<meta charset=‘utf-8’/>` tag. Finally, there is the lang attribute that can be provided on the html attribute.
- Serving page in multiple languages can harm SEO (duplicated content). Specify the canonical url to define a ‘default’ language and then specify localized versions. `<link rel="alternate" hreflang='en-gb’>`
---
### What kind of things should you be careful of with multi-lingual sites?
- Allow users to change languages easily 
- Text in images is not scalable. Each language would have to have it’s own image.
- Lang attribute to define the language, and dir attribute to define the direction (`ltr` - left to right) on HTML elements
- Concatenated translation strings can cause sentence structure to be incorrect in some languages. Use library features to manage that.
- Use Unicode UTF-8
---
### What are data- attributes used for?
- Allow you to store additional data on an element without visually representing it. Can be accessed through javascript
- Can also be used as CSS selectors
- For example, you have an article, and the article is about electric cars, you can store data-parent=“cars” to show that the article is about cars 
---
### Consider HTML5 as an open web platform. What are the building blocks of HTML5?
- More semantic markup, new form elements, video & audio, new JS API, canvas and SVG, communication API, geolocation API, web worker API, new data storage
---
### What is the difference between cookie, sessionStorage and localStorage?
- All: 
    - can be blocked by users
    - String format
    - Very high browser support
    - Can be edited by user
    - None are a secure data storage
- Cookie: 
    - Accessible on server-side
    - Transferred on every HTTP request
    - SSL
    - Can be accessed server or client side
    - Can be cleared through JS, automatically, or server
    - Lifetime is SPECIFIED
- Session Storage:
    - Client side only
    - Can be cleared through JS or automatically
    - Lifetime is until TAB CLOSES
- Local Storage:
    - No auto expire option
    - Client side only
    - Can only be cleared by JS
    - Lifetime is UNTIL DELETED
---
### Why is it generally a good idea to position CSS <link>s between <head></head> and JS <script>s just before </body>? Do you know any exceptions?
- Putting `<link>` in head tag is part of specification
- Putting `<link>` at bottom prevents progressive rendering - browsers block rendering to avoid having to repaint elements of the page if style changes
- `<script>` blocks HTML parsing while they are being downloaded and executed. Placing it at the bottom allows the HTML to be parsed and displayed first
    - You might need to place the script first if you are calling `document.write()`, but that is not recommended. You can place the script in the head tag with the defer attribute 
---
### What is progressive rendering?
- Aims to render content for display as quickly as possible. 
- Lazy loading - Not loading everything on page load. For example, loading in image through JS when the user scrolls to the image viewport
- Prioritizing visible content - (above the fold) include only the minimum CSS/content/scripts necessary for the amount of page that would be rendered in the browser. Then use deferred JS to load in other resources or content 
---
### Why you would use a srcset attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute
- `srcsct` attribute allows you to serve different images based on the users device display width. You can server higher quality images for users with retina displays, and lower quality vice versa.
- With `srcset`, you provide images, and the browser calculates the screen width to determine with image to return to the user
---
### Difference between SVG and Canvas?
- SVG
    - Scales between for higher quality resolution
    - Better performance w/ smaller number of objects or larger surface
    - Can be modified through script and CSS
    - Vector based and composed of shapes
- Canvas 
    - Not great at higher resolution
    - Better performance w/ smaller surface or larger number of objects
    - Canvas is modified through script only
    - Raster based and composed of pixels
---
### What are empty elements in HTML?
- Elements that cannot have child nodes. Elements that are self closing 
- Area, base, br, col, embed, hr, img, input, keggen, link, meta, param, source, track, wbr
---
### What is the difference between <script>, <script async> and <script defer>?
- `<script>` blocks HTML parsing unit script is fetched and executed
- `<script async>` fetched in påarallel with HTML parsing and executed as soon as available. This is good when the script is independent of other scripts on the page
- `<script defer>` fetch in parallel with HTML parsing and executed when page finishes parsing. If multiple, they are executed in order that they were encountered 
- `defer` and `async` are ignored for scripts with no src attribute
