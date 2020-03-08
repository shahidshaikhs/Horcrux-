# How CSS specificity works?

1. Specificity determines, which CSS rule is applied by the browsers.
2. Specificity is usually the reason why your CSS-rules don’t apply to some elements, although you think they should.
3. Every selector has its place in the specificity hierarchy.
4. If two selectors apply to the same element, the one with higher specificity wins.
5. There are four distinct categories which define the specificity level of a given selector: inline styles, IDs, classes, attributes, and elements.
6. You can understand specificity if you love Star Wars: CSS Specificity Wars.
7. You can understand specificity if you love poker: CSS Specificity for Poker Players
8. When selectors have an equal specificity value, the latest rule is the one that counts.
9. When selectors have an unequal specificity value, the more specific rule is the one that counts.
10. Rules with more specific selectors have a greater specificity.
11. The last rule defined overrides any previous, conflicting rules.
12. The embedded style sheet has a greater specificity than other rules.
13. ID selectors have a higher specificity than attribute selectors.
14. You should always try to use IDs to increase the specificity.
15. A class selector beats any number of element selectors.
16. The universal selector and inherited selectors have a specificity of 0, 0, 0, 0.
17. You can calculate CSS specificity with CSS Specificity Calculator.

What Is Specificity?
If two CSS selectors apply to the same element, the one with higher specificity wins.
Specificity Hierarchy

Every selector has its place in the specificity hierarchy. There are four distinct categories which define the specificity level of a given selector:

1. Inline styles (Presence of style in document). An inline style lives within your XHTML document. It is attached directly to the element to be styled. E.g. `<h1 style=“color: #fff;”>`
2. IDs (# of ID selectors) ID is an identifier for your page elements, such as `#div`.
3. Classes, attributes and pseudo-classes (# of class selectors). This group includes `.classes`, `[attributes]` and pseudo-classes such as `:hover`, `:focus` etc.
4. Elements and pseudo-elements (# of Element (type) selectors). Including for instance `:before` and `:after`.

How To Measure Specificity?
Memorize how to measure specificity. “Start at 0, add 1000 for style attribute, add 100 for each ID, add 10 for each attribute, class or pseudo-class, add 1 for each element name or pseudo-element. So in

    body #content .data img:hover

the specificity value would be 122 (0,1,2,2 or 0122): 100 for #content, 10 for .data, 10 for :hover, 1 for body and 1 for img.” [CSS Specificity]
Alternative way: “Count the number of ID attributes in the selector (= a). Count the number of other attributes and pseudo-classes in the selector (= b). Count the number of element names and pseudo-elements in the selector (= c). Concatenating the three numbers a-b-c gives the specificity. [CSS Selector Specificity]

::: tip
The universal selector (\*) has no specificity value (0,0,0,0)\*\* The pseudo-class :not() adds no specificity by itself, only what’s inside it’s parentheses.The !important value appended a CSS property value is an automatic win. It overrides even inline styles from the markup. The only way an !important value can be overridden is with another !important rule declared later in the CSS and with equal or great specificity value otherwise.If you have 2 or more rules with same specificity value (for example you wrote the same rule multiple times in your style sheet), then the last rule will be applied
:::
