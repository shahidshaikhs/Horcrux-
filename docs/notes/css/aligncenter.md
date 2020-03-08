# Align an element in center

### Text-Align Method
The “text-align: center” method is perhaps the most common one you’ll see for centering. It’s used mostly for centering text on your HTML page, but it can be used to center divs as well.

The trick here is to:

1. Enclose the div that you want to center with a parent element (commonly known as a wrapper or container)
2. Set “text-align: center” to parent element
3. Then set the inside div to “display: inline-block”
----------

### Margin Auto Method
Another common way of centering is using the margin auto method. Using this method, we don’t need a parent element.
We can simply apply “margin: 0 auto” to our yellow box, as long as we have a defined width.
“margin: 0 auto” is shorthand for setting the top and bottom margins to zero, and the left and right margins to auto.

----------

### Absolute Positioning Method
Absolute positioning an element allows us to essentially place the element wherever we want it on the page…with one drawback.

Absolute positioning removes the element from the flow of the page.
Why is this important?

Well it’s important because this can cause overlapping of elements if used incorrectly.

If we we want to simply center an element horizontally on the page like we’ve been doing in the first two methods, there are three steps we need to remember:

1. Set the element’s position property to absolute
2. Apply “left: 50%” to the element
3. Set a margin-left of half of the element’s width
----------

### Flexbox Method
If you’re not familiar with Flexbox, that’s okay! Flexbox is a layout module that provides a more efficient way of aligning and placing elements on the page.
If you’re interested in learning Flexbox (highly recommend), Flexbox Froggy is an awesome and fun way to learn (not affiliated of course — it’s just what I used to learn Flexbox)!
The four steps to centering horizontally and vertically with Flexbox are the following:

1. HTML, body, and parent container need to have a height of 100%
2. Set display to flex on parent container
3. Set align-items to center on parent container
4. Set justify-content to center on parent container
