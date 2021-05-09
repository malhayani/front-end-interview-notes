# CSS 
[Guide](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/src/questions/css-questions.md) 

### What is CSS selector specificity and how does it work? 
- Specificity is a way of “ranking” CSS classes for which one should take priority in the case of conflicting rules. 
    - Inline styles, ID, classname & pseudo-classes (`:hover`), element & pseudo-elements (`:before`, `:after`)
---
### What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?
- Resetting CSS removes all built-in browser styling, and then you add all decoration yourself
- Normalize CSS makes built-in browser styling consistent across all browsers. You add only the differences in your decoration.
- You can use both solutions and take what you want from each
- Reset is good if your having to write a lot of CSS to undo browser built-ins
---
### How do floats work?
- Places element on left or right side of container, and allows inline elements to wrap around it. Element is removed from normal flow, but is still part of the flow (unlike absolute)
---
### Describe z-index and how stacking context is formed.
-  3D of HTML elements along a z-axis. 
- Without `z-index` value, elements stack in order they appear in Dom
---
### Describe BFC (Block Formatting Context) and how it works.
- Region in which the layout of block boxes occurs and in which floats interact w/ other elements. 
- Floats, absolutely positioned elements, inline blocks, table cells and table captions and els with overflow other than visible establish new block formatting contexts 
---
### What are the various learning techniques and which is appropriate for what context? 
- Empty fix method - `<div style="clear:both;"></div>`
- Clearfix method -
```css
.clearfix:after {
    content: '.';
    visibility: hidden;
    display: block;
    height: 0;
    clear: both;
}
```
- `overflow: auto` or `overflow: hidden` method - parent will establish a new flock formatting context and expand to contain its floated children 
- `.clearfix` is ideal. Overflow:hidden might clip children if the children is taller than the parent and it is not very ideal.
---
### What are CSS sprites? 
- Combine multiple images into one single larger image. Used for icons.
- To create, use a sprite generator to get CSS for it, add the CSS class to an element
- Beneficial because you can load in a single sprite sheet that contains multiple images instead of several HTTP requests to get all images
---
### How would you approach fixing browser specific styling issues?
- Identify browser and use separate style sheet that loads for that browser. This requires server side rendering 
- Libraries like bootstrap
- Use autoprefixer to auto add vendor prefixes to your code
- Reset or normalize CSS
---
### How do you serve your pages for feature-constrained browsers? What techniques/processes do you use?
- `Graceful degradation` - practice of building an app for modern browsers while ensuring it remains functional in older browsers
- `Progressive enhancement` - proactive of building apps for base level of user experience, but adding functional enhancements when the browser supports ti 
- Auto prefixers
---
### What are ways to visually hide content and make it available for only screen readers?
- `visibility: hidden` - the element is still in the flow of the page and takes up space
- `width: 0 and height:0` - make the element not take space, resulting in hiding it
- `position: absolute; left: -999999px` - position outside of screen
- `text-indent: -99999px` - must be on text within a block element 
- Absolute positioning seems to be the preferred approach
---
### Grid systems
- Float, grid, flex 
- Float has most browser support 
---
### Have you used or implemented media queries or mobile-specific layouts/CSS?
---
### How do you optimize your webpages for print?
- Create print style sheet or media queries (@media print {})
```html
<!-- Main stylesheet on top -->
<link rel="stylesheet" href="/global.css" media="all" />
<!-- Print only, on bottom -->
<link rel="stylesheet" href="/print.css" media="print" />
```
---
### What are some gotchas for writing efficient CSS?
- Browsers match selectors from rightmost to left. They filter out elements in the DOM by traversing up it’s parent to determine matches. The short the selector, the quicker it can find it to match. Avoid key selectors that are tags and universal selectors. They match a large number of elements and browsers will have to do more work in determining if the parents do match.
    - BEM (Block Element Modifier) recommends that everything has a single class and where you need hierarchy, gets baked into the name, making it more efficient to override
---
### Advantages/disadvantages of CSS preprocessors?
- Advantages: CSS is more maintainable, nested selectors are easier, variables, mixins to generate repeat CSS, split code into multiple files easier
- Disadvantages: requires additional tooling, re-compilation time can be slow 
---
### How would you implement a web design comp that uses non-standard fonts?
- Use `@font-face` and define font-family for different font-weights
---
### Explain how a browser determines what elements match a CSS selector.
- Match selectors from rightmost to left
- Traverse up parent to determine if it’s a match
- Shorter the length of selector change, the faster the browser can determine a match
---
### Describe pseudo-elements and discuss what they are used for.
- Keyword added to a selector that lets you style a septic part of the selected element
    - Can be used for decoration (`:first-line` `:first-letter`)
    - Can be used to add elements to markup (`:content`)
    - Can be used to modify markup (`:before`, `:after`)
---
### What is the box model?
- Box model is responsible to determine how much space a block level element takes up 
- Whether or not borders and margins overlap or collapse 
- Determine a box’s dimensions
- Dimensions of a block element are calculated by width, height, padding, border, margin
    - If no height, will have height of the content in plus padding
    - If no width, non-floated element will expand to fit parent minus padding
- By default padding and border not part of the width and height of an element
---
### What does * { box-sizing: border-box; } do? What are its advantages?
- By default elements have box-sizing: content-box applied and only the content size is accounted for 
- Changes width and height of elements that are being calculated to include border and padding.
---
### What are values of the display attribute?
- `none`, `block`, `inline`, `inline-block`, `table`, `table-view`, `table-cell`, `list-item`, `flex`
---
### What is the difference between inline and inline-block?
- `block` - fills up width of parent. Start on new line. No elements next to it. Can specify height and width. Vertical-align works. Margin and padding
- `inline-block` - size depends on content, flows along with other content and has elements on side, can specify height and width, vertical-align, margins and padding
- `inline` - size depends on content, flows along with other elements and allows elements on sides, CANNOT specify height and width, vertical-align must be done through line-height. Can set vertical margin and padding
---
### What is the difference between relative, fixed, absolute, and static? 
- `static` - default. Flows with page. Top, right, bottom, left, and z-index do not apply.
- `relative` - elements position is relative to self, without changing layout. Leaves gap where it would have been if not positioned
- `absolute` - removed from flow of page and position in a specific area based on nearest ancestor. Can have margins. Do not collapse with other margins
- `fixed` - removed from flow of page, and position at specified position relative to viewport. Doesn’t move when scrolled
- `sticky` - hybrid of fixed and relative. Treated as relative until crosses threshold and then fixed.
---
### Flex vs grid?
- Flex is meant for 1D and grid is meant for 2D
---
### Responsive vs adaptive design 
- Responsive is single app can resize to any viewport 
- Adaptive detects the screen and provides the appropriate features 
---
### EM, REM, and PX
- `em` is font size of element, Can be influenced by parent
- `rem` is font size of <html>
