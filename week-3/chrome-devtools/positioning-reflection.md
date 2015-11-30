**How can you use Chrome's DevTools inspector to help you format or position elements?**

With Chrome's DevTools inspector, you can modify code and watch the page update on the fly. You can select elements either in the DOM tree or on the page, and then edit, add, disable, enable, or remove styles. This makes it easy to make sensitive adjustments (for instance, nudge an object's position a little bit at a time until it's where you want it) without having to edit the page in your editor, then refresh the page in your browser, over and over.

**How can you resize elements on the DOM using CSS?**
You can resize elements by changing their width or height attributes, or by changing other elements such as margin or position that will result in the browser calculating a different size for the element.


**What are the differences between absolute, fixed, static, and relative positioning? Which did you find easiest to use? Which was most difficult?**

Absolute- You define the element's position within its closest positioned parent element. If there isn't one, then it's positioned relative to the document body (and moves with it when you scroll). The element stands outside of the normal flow and may even end up overlapping other items.

Fixed- The element is positioned relative to the edges of the browser viewport, and stays there even when you scroll the page. It stands outside the normal flow, which adjusts everything else to fill the gap, as if the fixed element weren't there.

Static- The element sits where it normally would within the page flow.

Relative- The element is positioned in relation to wherever it would normally end up within the page flow. However, the rest of the flow is not adjusted, and acts as if the element were still in its regular position.

Each of the different kinds of positioning has its own difficulties, but I guess relative has the most ways to go wrong. You have to remember not to depend on an element ending up in a certain position in the flow, since that could change due to any number of factors. In contrast, absolute is at least the most straightforward positioning style.

**What are the differences between margin, border, and padding?**

                            margin
                            border
                            padding
margin | border | padding | **element** | padding | border | margin
                            padding
                            border
                            margin

What was your impression of this challenge overall? (love, hate, and why?)

I enjoyed this challenge a lot. I'd never seen Chrome's DevTools before and found it to be an awesome tool. Being able to see changes instantly helped my pair and me come up with two different, functional solutions to our final problem.