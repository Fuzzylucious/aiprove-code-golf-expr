const {evalExpr}=require('./solution'),cases=require('./cases.json');
let pass=0,fail=0;
function check(s,w){let g;try{g=evalExpr(s)}catch(e){g=e}if(g===w||Number.isNaN(g)&&Number.isNaN(w))pass++;else{fail++;console.log('FAIL',s,'expected',w,'got',g)}}
cases.forEach(x=>check(x.in,x.out));
let seed=123456789;function rand(n){seed=(seed*1664525+1013904223)>>>0;return seed%n}
function num(){let a=String(rand(1000)+1);return rand(2)?a+'.'+rand(1000):rand(2)?'.'+(rand(999)+1):a}
function expr(d=0){let s=rand(6)==0?'-'+(rand(2)?' ':'')+atom(d):atom(d);for(let k=rand(3);k--;){let op=['+','-','*','/'][rand(4)];s+=(rand(3)?'':' ')+op+(rand(3)?'':' ')+atom(d)}return s}
function atom(d){let s=d<3&&rand(3)==0?'('+expr(d+1)+')':num();return rand(3)==0?' '+s+' ':s}
for(let j=0;j<2000;j++){let s=expr(),w;try{w=(0,eval)(s)}catch(e){continue}check(s,w)}
console.log(`PASS ${pass} FAIL ${fail}`);if(fail)process.exit(1);
