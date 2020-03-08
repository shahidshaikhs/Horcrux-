# Hardware Acceleration

Ever wondered how some CSS animations run so smoothly in the browser?
CSS animations, transforms and transitions are not automatically GPU accelerated, and instead execute from the browser’s slower software rendering engine. So what exactly forces the browser to swap to GPU mode? Many browsers provide GPU acceleration by means of certain CSS rules.
Currently, browsers like Chrome, FireFox, Safari, IE9+ and the latest version of Opera all ship with hardware acceleration; they only use it when they have an indication that a DOM element would benefit from it. With CSS, the strongest indication is that a 3D transformation is being applied to an element.
For example:

```css
.cube {
  -webkit-transform: translate3d(250px, 250px, 250px) rotate3d(
      250px,
      250px,
      250px,
      -120deg
    )
    scale3d(0.5, 0.5, 0.5);
}
```

In some cases, you might not want a 3D transformation on the element, but still take advantage of GPU acceleration. That’s when a few simple CSS properties come in handy that trick the browser into triggering GPU acceleration.
Even though we’re not animating an element in 3D space, we can enable 3D rendering. At the very least, the transform: translateZ(0); declaration triggers GPU acceleration in modern desktop and mobile browsers. This seems to be the most effective way of triggering GPU acceleration (all vendor prefixes included):

```css
.cube {
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
  /* Other transform properties here */
}
```

In Chrome and Safari we might see a flickering effect when using CSS transforms or animations. The following declarations can be used to fix the issue:

```css
.cube {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -ms-perspective: 1000;
  perspective: 1000;
  /* Other transform properties here */
}
```

Another method that seems to work well in WebKit-powered desktop and mobile browsers is translate3d:

```css
.cube {
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  /* Other transform properties here */
}
```

Native mobile applications also make good use of the device GPU –– that’s why they’re known to perform slightly better than Web apps. Using hardware acceleration can be especially useful on mobile devices because it helps reduce resource consumption on the device.

Conclusion The methods we covered should only be used on the elements we’re animating. They might improve performance on 2D transforms, but it’s not wise to use them on everything just for the sake of hardware acceleration.

Be careful with each of these methods and only use them if you experience a true performance win. Using the GPU unnecessarily can cause significant performance issues because it increases memory use –– it will also affect the battery life on mobile devices.

Have you tried using any of these methods in your projects? If so, please share which one was the most effective and performed the best.
