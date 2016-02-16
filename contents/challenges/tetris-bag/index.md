---
title: 'Tetris bag'
date: '2016-02-05'
author: ramon
template: challenge.jade
---
<img style="width: 100%; display:block;" src="http://daily-javascript.com/challenges/tetris-bag/header.jpg" >

Since I did not get any submissions for the Workshopper Challenge I will make this challenge a lot more technical, so you guys will actually feel challenged. Since all of you are probably nineteens kids, you all know Tetris.
It is a popular belief that the "tetromino" pieces you are given in a game of Tetris are not randomly selected.
What really happens is that all seven pieces are placed into a "bag". A piece is randomly removed from the bag and presented to the player. This process is repeated until the bag is empty.

Your challenge is to reproduce this.
For the first part of this challenge you will only need to focus on the algorithm of randomly removing elements from the bag and filling it once it's empty.
There is one limitation: Repetition of pieces will not be more then twice the same.
So you can get twice the same piece but never 3 times the same.

For now you can make the output just `log` the piece which needs to be dropped, next week we will explore the Tetris game some more.
Output a string signifying 50 tetromino pieces given to the player using the random bag system. This will be printed on a single line.
Some code to get you started can be found inside [this codepen](http://codepen.io/DailyJavascript/pen/bEmqpK).

The pieces will be represented by letters for now:

- O
- I
- S
- Z
- L
- J
- T

<p data-height="460" data-theme-id="21361" data-slug-hash="bEmqpK" data-default-tab="result" data-user="DailyJavascript" class='codepen'>See the Pen <a href='http://codepen.io/DailyJavascript/pen/bEmqpK/'>bEmqpK</a> by DailyJavascript (<a href='http://codepen.io/DailyJavascript'>@DailyJavascript</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

Submissions can be sent to this [Google Form.](http://goo.gl/forms/yBEvtgrO4K).

Don't forget to submit before next Friday.

Happy coding.


<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
