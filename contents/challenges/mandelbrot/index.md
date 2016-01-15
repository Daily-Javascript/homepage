---
title: 'Mandelbrot'
date: '2016-01-08'
author: ramon
template: challenge.jade
---

![header](https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Mandel_zoom_00_mandelbrot_set.jpg/1280px-Mandel_zoom_00_mandelbrot_set.jpg?1452271778770)

Since I'm a big fan of fractals, this weeks challenge is another fractal. Next week we will have something more divers, but I just want to see how crazy you guys can make this.
So for this weeks challenge I picked the [Mandelbrot set](http://www.wikiwand.com/en/Mandelbrot_set). I had a lot of fun learning how to do this so I hope you will have the same experience.

The Mandelbrot set is the set of complex numbers `c` for which the function `f(z)=z²+c` does not diverge when iterated, i.e., for which the sequence `f(0)`, `f(f(0))`, etc., remains bounded.

Mandelbrot set images are made by sampling complex numbers and determining for each whether the result tends towards infinity when a particular mathematical operation is iterated on it.
Treating the real and imaginary parts of each number as image coordinates, pixels are colored according to how rapidly the sequence diverges, if at all.

You can implement it as broad as you want, it can be in ascii like this:
<p style="text-align: center">
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Mandel.png?1452271413045" style="max-width: 400px; width: 100%; display: inline-block" />
</p>

Or make it with an animated zoom like so:
<p style="text-align: center">
<img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Mandelbrot_zoom.gif" style="max-width: 400px; width: 100%; display: inline-block" />
</p>

As a reference here is some pseudo code to help you along which was provided by wikipedia:

```
For each pixel (Px, Py) on the screen, do:
{
  x0 = scaled x coordinate of pixel (scaled to lie in the Mandelbrot X scale (-2.5, 1))
  y0 = scaled y coordinate of pixel (scaled to lie in the Mandelbrot Y scale (-1, 1))
  x = 0.0
  y = 0.0
  iteration = 0
  max_iteration = 1000
  while ( x*x + y*y < 2*2  AND  iteration < max_iteration ) {
    xtemp = x*x - y*y + x0
    y = 2*x*y + y0
    x = xtemp
    iteration = iteration + 1
  }
  color = palette[iteration]
  plot(Px, Py, color)
}
```

And again I've created [a Codepen for you to start with](http://codepen.io/DailyJavascript/pen/PZmJyp).
Please submit your solution to this [Google Form](http://goo.gl/forms/HGJOmcyzB0) and happy coding.
