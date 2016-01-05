'use strict'

const Tabletop = require('tabletop');
const argv = require('yargs');
let templateData;

console.log( argv.week );

Tabletop.init( { key: '1xS1sKaA7D4b7slfxWQMHCElvjSOXPUFev0Elw-KAZK8',
                   callback: function(data, tabletop) {
                       templateData = data.map((item) => {
                           console.log( item );
                           // Extract codepen id here and make template.
                       });
                   },
                   simpleSheet: true } );


// <p data-height="268" data-theme-id="21361" data-slug-hash="MKyjoN" data-default-tab="result" data-user="DailyJavascript" class='codepen'>See the Pen <a href='http://codepen.io/DailyJavascript/pen/MKyjoN/'>Pythagoras Tree Template</a> by DailyJavascript (<a href='http://codepen.io/DailyJavascript'>@DailyJavascript</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
// <script async src="//assets.codepen.io/assets/embed/ei.js"></script>
//
// <iframe height='268' scrolling='no' src='//codepen.io/DailyJavascript/embed/MKyjoN/?height=268&theme-id=21361&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/DailyJavascript/pen/MKyjoN/'>Pythagoras Tree Template</a> by DailyJavascript (<a href='http://codepen.io/DailyJavascript'>@DailyJavascript</a>) on <a href='http://codepen.io'>CodePen</a></iframe>
