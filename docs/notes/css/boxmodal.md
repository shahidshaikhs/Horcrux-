# CSS Box Modal

HTML elements are treated as boxes in CSS and the manner and way these elements are arranged on a web page is governed by the CSS box model which is a set of rules that define how web page are rendered.

Having a good understanding of the box model will aid you in creating your desired layout.

Elements appear in rectangular shapes, with some element spanning the entire width of the page e.g h1, li and some some occupying just a fraction of the page e.g the span element. Why? you might ask.

In CSS these boxes are classified into two:

- block boxes
- inline boxes

## Block Property

If a box is defined as a block, it will extend in the inline direction to fill space available in its container (i.e its parent) and the elements that generate this type of boxes are called block level element. Examples include div, h1, li e.t.c. Some other characteristics of these boxes are:

- They will break into a new line if need be.
- Their width and height properties will apply
- Padding, margins and border will cause other element to move away from the box
  This behavior of block boxes can be changed in CSS with the display property which accepts values like inline, flex, grid.

```CSS
* {
outline: 3px solid #1560bd;
margin-bottom: 1.5em;
background-color: #f9f9fa;
display: inline; /* Add this */
}
```

## Inline Property

As their name suggest these boxes will be rendered on a line and by default the width and height properties will not apply. Other behavior of these boxes include:

- Padding or margin will not cause other elements to move away from the box
- They will not break into a new line
- Just like block boxes, inline box behavior can be changed using the display property.

```CSS
span.block {
  display: block;
  outline: 3px solid red;
}
```

:::tip
The display: block can be applied to other inline elements like a (link), em, strong, etc.
:::

**With that out of the way, these boxes in CSS are made of four main parts. They are:**

- Content
- Padding
- Border
- Margin

## Content

The is the text, images, or other media content contained in the element.

## Padding

This is an internal spacing that exists between the boundary of the element and the element's edge. And the element edge itself can have a border.

```css
h1 {
  padding: 20px;
}
```

Padding property is actually shorthand for:

- padding-top
- padding-bottom
- padding-right
- padding-left

And it gets interesting, if you supply two values to the padding property, the browser will use the first value for the top and bottom, and the second value for the right and left. Say What?

```css
h1 {
  padding: 20px 10px;
}
```

But what happens if we supply three values?, the first value will be used for the top, the second value will be used for the right and left, and the third value will be used for the bottom.

```css
h1 {
  padding: 20px 10px 15px;
}
```

## Border

The is the line between the box’s padding and margin.

Just like the padding property, the border can be used to declare all four side of the border at once. The sides are:

- border-top
- border-right
- border-bottom
- border-left

But unlike padding, you cannot declare different border width of all four border sides with the border property, you will have to explicitly change each side border width. This means

```css
header {
  border: 1px solid green; /* this is valid */
}
```

**IS NOT THE SAME AS**

```css
header {
  border: 2px 3px solid green; /* this is invalid */
}
```

**You will have to do this instead:**

```css
header {
  border-top: 3px dashed green;
  border-right: 1px solid red;
  border-bottom: 5px solid gold;
  border-left: 4px solid maroon;
}
```

## Margin

The margin controls the space between different elements on a page. Repeat similar steps as the explanation on border and padding.

The margin property is also short for four other properties:

- margin-top
- margin-right
- margin-bottom
- margin-left

The margin property behave similarly to the padding property and you can supply one, two or three values and the browser will do the rest.

:::tip
This parts (content, padding, border and margin) applies to block level elements and inline elements with the display property set to block.
:::

The paddings, borders, margins and the content of an element allow the rendered box to occupy a specific width and height on the page, most of the time you will have to know how to calculate the width and height of an element to make sure your web page is displayed correctly in all browsers.

When it come to this calculation you should have it in mind that there are two box models in CSS. They are:

- **The standard box model (content-box)**
- **The alternate box model (border-box)**

## Standard Box Model (content-box)

::: tip
**FROM MDN**
<br>
In the standard box model, if you give a box a width and a height, this defines the width and height of the content box\_. Any padding and border is then added to that width and height to get the total size taken up by the box
:::

This translates to: In the standard box model if you define a width and height for an element it becomes the height and width of the content box. What is the content box?

The content box is the box that contains the content of a page element. For example if you have the following HTML:

## Alternate Box Model (border-box)

The alternate box model was introduced some time after the standard box model. Using this model, any width is the width of the visible box on the page, therefore the content area width is that width minus the width for the padding and border. Say What? Take a deep breath. Exhale. Now read on.

This alternate box model is not enabled by default compared to the standard box model which is the default model used in web browsers.

To use the alternate box model, you will have to tweak your CSS with the box-sizing property.

```css
.box {
  width: 350px;
  height: 150px;
  margin: 25px;
  padding: 25px;
  border: 5px solid #1560bd;
  box-sizing: border-box; /* Add this */
}
```

The browser will use the width and height values we explicitly specified in our CSS i.e 350px and 150px. Why? When you declared the box-sizing property with a value of border-box you are telling the browser: **_to take the border box as the area defined by any size you set._**

### Summary

Using the alternative box model is a common choice among developers (myself included) and to make it work for all element in the web page, we'll have to set the box-sizing on the html element and set all other element to inherit that value as depicted in the snippet below.

:::tip
Internet Explorer used to default to the alternative box model, with no mechanism available to switch. 🤯
:::
