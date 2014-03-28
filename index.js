// Generated by LiveScript 1.2.0
var colors, Padnews, out, x$;
colors = require('colors');
Padnews = require('padnews');
out = function(event, msg){
  var prefix, i$, ref$, len$, p;
  prefix = event === 'update'
    ? '更新 '.yellow
    : event === 'remove' ? '移除 '.red : '';
  console.log(((prefix + "" + msg.time.magenta + " ") + ("[" + (msg.location || '？？') + "]").green).bold);
  for (i$ = 0, len$ = (ref$ = msg.content).length; i$ < len$; ++i$) {
    p = ref$[i$];
    console.log(p + "\n");
  }
};
x$ = new Padnews('FRzDUBto4Vj');
x$.onMsg = function(event, msg){
  var i$, ref$, len$;
  if (event === 'ready') {
    for (i$ = 0, len$ = (ref$ = this.news).length; i$ < len$; ++i$) {
      msg = ref$[i$];
      out(event, msg);
    }
  } else {
    out(event, msg);
  }
};
x$.run();