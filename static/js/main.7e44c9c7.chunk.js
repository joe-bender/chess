(this.webpackJsonpchess=this.webpackJsonpchess||[]).push([[0],{11:function(o,r,e){},12:function(o,r,e){},14:function(o,r,e){"use strict";e.r(r);var c=e(1),t=e.n(c),n=e(5),l=e.n(n),u=(e(11),e(12),e(2)),a=e(0);var i=function(o){var r=function(r){var e=r.target.value;o.onChange(e)};return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Choose a piece:"}),Object(a.jsx)("button",{type:"button",value:"queen",onClick:r,children:"Queen"}),Object(a.jsx)("button",{type:"button",value:"rook",onClick:r,children:"Rook"}),Object(a.jsx)("button",{type:"button",value:"bishop",onClick:r,children:"Bishop"}),Object(a.jsx)("button",{type:"button",value:"knight",onClick:r,children:"Knight"})]})},w={king:"\u265a",queen:"\u265b",rook:"\u265c",bishop:"\u265d",knight:"\u265e",pawn:"\u265f",promo:"?"},s=function(){return{color:"black",type:"rook",code:"\u265c",hasMoved:!1}},p=function(){return{color:"black",type:"knight",code:"\u265e"}},d=function(){return{color:"black",type:"bishop",code:"\u265d"}},h=function(){return{color:"black",type:"queen",code:"\u265b"}},f=function(){return{color:"white",type:"rook",code:"\u2656",hasMoved:!1}},b=function(){return{color:"white",type:"knight",code:"\u2658"}},j=function(){return{color:"white",type:"bishop",code:"\u2657"}},v=function(){return{color:"white",type:"queen",code:"\u2655"}},k=[[s(),p(),d(),h(),{color:"black",type:"king",code:"\u265a",hasMoved:!1},d(),p(),s()],[{color:"black",type:"pawn",code:"\u265f",justJumped:!1},{color:"black",type:"pawn",code:"\u265f",justJumped:!1},{color:"black",type:"pawn",code:"\u265f",justJumped:!1},{color:"black",type:"pawn",code:"\u265f",justJumped:!1},{color:"black",type:"pawn",code:"\u265f",justJumped:!1},{color:"black",type:"pawn",code:"\u265f",justJumped:!1},{color:"black",type:"pawn",code:"\u265f",justJumped:!1},{color:"black",type:"pawn",code:"\u265f",justJumped:!1}],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[{color:"white",type:"pawn",code:"\u2659",justJumped:!1},{color:"white",type:"pawn",code:"\u2659",justJumped:!1},{color:"white",type:"pawn",code:"\u2659",justJumped:!1},{color:"white",type:"pawn",code:"\u2659",justJumped:!1},{color:"white",type:"pawn",code:"\u2659",justJumped:!1},{color:"white",type:"pawn",code:"\u2659",justJumped:!1},{color:"white",type:"pawn",code:"\u2659",justJumped:!1},{color:"white",type:"pawn",code:"\u2659",justJumped:!1}],[f(),b(),j(),v(),{color:"white",type:"king",code:"\u2654",hasMoved:!1},j(),b(),f()]],y=[[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1]];var g=function(o){var r=[o.squareColor];o.selected&&r.push("selected"),o.target&&r.push("target");var e=o.piece?w[o.piece.type]:null;if(o.piece){var c=o.piece;r.push(c.color),"king"===c.type&&o.check&&(o.winner?c.color!==o.turn&&r.push("check"):c.color===o.turn&&r.push("check"))}else r.push("empty");return Object(a.jsx)("td",{onClick:o.onClick,onMouseEnter:o.onMouseEnter,onMouseLeave:o.onMouseLeave,"data-row":o.row,"data-col":o.col,className:r.join(" "),children:e})};var O=function(o){return Object(a.jsx)("table",{children:Object(a.jsx)("tbody",{children:Array.from({length:8},(function(o,r){return r})).map((function(r){return Object(a.jsx)("tr",{children:o.board[r].map((function(e,c){return Object(a.jsx)(g,{squareColor:(r+c)%2===0?"whiteSquare":"blackSquare",row:r,col:c,piece:e,check:o.check,winner:o.winner,turn:o.turn,selected:r===o.selected.row&&c===o.selected.col,target:o.targets[r][c],onClick:o.onClick,onMouseEnter:o.onMouseEnter,onMouseLeave:o.onMouseLeave},c)}))},r)}))})})},m=e(6);function M(o){return o.map((function(o){return o.slice()}))}function x(o,r,e){var c;switch(o.type){case"king":c=function(o,r,e){return S(o,r,e,[{row:-1,col:-1},{row:-1,col:0},{row:-1,col:1},{row:0,col:-1},{row:0,col:1},{row:1,col:-1},{row:1,col:0},{row:1,col:1}])}(o,r,e);break;case"rook":c=function(o,r,e){for(var c=M(y),t=0,n=[{row:1,col:0},{row:-1,col:0},{row:0,col:1},{row:0,col:-1}];t<n.length;t++){c=C(o,r,e,c,n[t])}return c}(o,r,e);break;case"bishop":c=function(o,r,e){for(var c=M(y),t=0,n=[{row:1,col:1},{row:1,col:-1},{row:-1,col:1},{row:-1,col:-1}];t<n.length;t++){c=C(o,r,e,c,n[t])}return c}(o,r,e);break;case"queen":c=function(o,r,e){for(var c=M(y),t=0,n=[{row:1,col:0},{row:-1,col:0},{row:0,col:1},{row:0,col:-1},{row:1,col:1},{row:1,col:-1},{row:-1,col:1},{row:-1,col:-1}];t<n.length;t++){c=C(o,r,e,c,n[t])}return c}(o,r,e);break;case"knight":c=function(o,r,e){return S(o,r,e,[{row:-1,col:-2},{row:-2,col:-1},{row:-2,col:1},{row:-1,col:2},{row:1,col:-2},{row:2,col:-1},{row:2,col:1},{row:1,col:2}])}(o,r,e);break;case"pawn":c=function(o,r,e){var c=M(y),t="black"===o.color?1:-1,n="black"===o.color?1:6;e[r.row+t][r.col]||(c[r.row+t][r.col]=!0,r.row===n&&(e[r.row+2*t][r.col]||(c[r.row+2*t][r.col]=!0)));for(var l=0,u=[{bound:function(o){return o>0},dir:-1},{bound:function(o){return o<7},dir:1}];l<u.length;l++){var a=u[l];(a.bound(r.col)&&e[r.row+t][r.col+a.dir]&&e[r.row+t][r.col+a.dir].color!==o.color||e[r.row][r.col+a.dir]&&e[r.row][r.col+a.dir].color!==o.color&&"pawn"===e[r.row][r.col+a.dir].type&&e[r.row][r.col+a.dir].justJumped)&&(c[r.row+t][r.col+a.dir]=!0)}return c}(o,r,e);break;default:c=M(y)}return c}function J(o,r,e){var c=x(o,r,e);return"king"!==o.type||o.hasMoved||function(o,r,e,c){var t,n="black"===o.color?0:7;!(t=e[n][7])||"rook"!==t.type||t.hasMoved||e[n][5]||e[n][6]||F(o.color,{row:n,col:4},e)||F(o.color,{row:n,col:5},e)||F(o.color,{row:n,col:6},e)||(c[n][6]=!0);!(t=e[n][0])||"rook"!==t.type||t.hasMoved||e[n][1]||e[n][2]||e[n][3]||F(o.color,{row:n,col:4},e)||F(o.color,{row:n,col:3},e)||F(o.color,{row:n,col:2},e)||(c[n][2]=!0)}(o,0,e,c),c=function(o,r,e,c){for(var t=M(c),n=0;n<8;n++)for(var l=0;l<8;l++)c[n][l]&&(t[n][l]=q(o.color,r,e,{row:n,col:l}));return t}(o,e,r,c)}function C(o,r,e,c,t){for(var n=r.row+t.row,l=r.col+t.col,u=function(o){return 1===o?function(o){return o<8}:-1===o?function(o){return o>=0}:function(o){return!0}},a=u(t.row),i=u(t.col);a(n)&&i(l);){if(e[n][l]){e[n][l].color!==o.color&&(c[n][l]=!0);break}c[n][l]=!0,n+=t.row,l+=t.col}return c}function S(o,r,e,c){var t,n=M(y),l=Object(m.a)(c);try{for(l.s();!(t=l.n()).done;){var u=t.value,a=r.row+u.row,i=r.col+u.col;a>=0&&a<8&&i>=0&&i<8&&(null!==e[a][i]&&e[a][i].color===o.color||(n[a][i]=!0))}}catch(w){l.e(w)}finally{l.f()}return n}function q(o,r,e,c){return!E(o,L(r,e,c))}function L(o,r,e){var c=M(o),t=c[r.row][r.col];return c[r.row][r.col]=null,c[e.row][e.col]=t,c}function E(o,r){return F(o,function(o,r){for(var e=0;e<8;e++)for(var c=0;c<8;c++){var t=r[e][c];if(t&&t.color===o&&"king"===t.type)return{row:e,col:c}}}(o,r),r)}function I(o){for(var r=0;r<8;r++)for(var e=0;e<8;e++)if(o[r][e])return!0;return!1}function F(o,r,e){for(var c=0;c<8;c++)for(var t=0;t<8;t++){if(e[c][t]&&e[c][t].color!==o)if(x(e[c][t],{row:c,col:t},e)[r.row][r.col])return!0}return!1}function B(o,r,e){var c=M(o);return c=function(o){for(var r=M(o),e=0;e<8;e++)for(var c=0;c<8;c++)r[e][c]&&"pawn"===r[e][c].type&&(r[e][c].justJumped=!1);return r}(c),2===Math.abs(e.row-r.row)&&(c[r.row][r.col].justJumped=!0),"pawn"!==c[r.row][r.col].type||1!==Math.abs(e.row-r.row)||1!==Math.abs(e.col-r.col)||c[e.row][e.col]||(c[r.row][e.col]=null),c}var N=function(){var o=Object(c.useState)(k),r=Object(u.a)(o,2),e=r[0],t=r[1],n=Object(c.useState)(y),l=Object(u.a)(n,2),w=l[0],g=l[1],m=Object(c.useState)({row:-1,col:-1}),x=Object(u.a)(m,2),C=x[0],S=x[1],q=Object(c.useState)("white"),F=Object(u.a)(q,2),N=F[0],T=F[1],A=Object(c.useState)(!1),P=Object(u.a)(A,2),D=P[0],G=P[1],K=Object(c.useState)(null),Q=Object(u.a)(K,2),R=Q[0],z=Q[1],H=Object(c.useState)(!1),U=Object(u.a)(H,2),V=U[0],W=U[1],X=Object(c.useState)(null),Y=Object(u.a)(X,2),Z=Y[0],$=Y[1],_=function(o,r,e){var c=M(o);if(w[e.row][e.col]){c=function(o,r,e){var c=M(o),t=c[r.row][r.col];return"king"!==t.type||2!==Math.abs(r.col-e.col)||E(t.color,c)||(t.hasMoved=!0,6===e.col?(c[r.row][7].hasMoved=!0,c=L(c,{row:r.row,col:7},{row:r.row,col:5})):2===e.col&&(c[r.row][0].hasMoved=!0,c=L(c,{row:r.row,col:0},{row:r.row,col:3}))),"king"!==t.type&&"rook"!==t.type||(t.hasMoved=!0),c}(c,r,e),c=L(c=B(c,r,e),r,e);var n=function(o,r,e){var c=M(o)[r.row][r.col];return"pawn"===c.type&&("black"===c.color&&7===e.row||"white"===c.color&&0===e.row)&&e}(o,r,e);if(n)return $(n),W(!0),c[n.row][n.col]={color:N,type:"promo"},t(c),void oo();t(c),ro(c)}},oo=function(){S({row:-1,col:-1}),g(y)},ro=function(o){var r="white"===N?"black":"white";E(r,o)?G(!0):G(!1),function(o,r){for(var e=0;e<8;e++)for(var c=0;c<8;c++){var t=r[e][c];if(t&&t.color===o&&I(J(t,{row:e,col:c},r)))return!1}return!0}(r,o)?z(N):T((function(o){return r}))};return Object(a.jsxs)("div",{children:[Object(a.jsx)(O,{board:e,check:D,winner:R,turn:N,onClick:function(o){if(!V&&!R){var r=parseInt(o.target.dataset.row),c=parseInt(o.target.dataset.col);if(C.row<0&&C.col<0){if(!e[r][c])return;if(e[r][c])return void(N===e[r][c].color&&(S({row:r,col:c}),g(J(e[r][c],{row:r,col:c},e))))}else{var t={row:C.row,col:C.col};_(e,t,{row:r,col:c}),oo()}}},selected:C,targets:w,onMouseEnter:function(o){if(C.row<0&&C.col<0){var r=parseInt(o.target.dataset.row),c=parseInt(o.target.dataset.col);e[r][c]&&e[r][c].color===N&&g(J(e[r][c],{row:r,col:c},e))}},onMouseLeave:function(){C.row<0&&C.col<0&&g(y)}}),V&&Object(a.jsx)(i,{onChange:function(o){var r=M(e);r[Z.row][Z.col]=function(o,r){if("white"===o)switch(r){case"queen":return v();case"rook":return f();case"bishop":return j();case"knight":return b();default:return v()}else switch(r){case"queen":return h();case"rook":return s();case"bishop":return d();case"knight":return p();default:return h()}}(N,o),W(!1),t(r),ro(r)}}),Object(a.jsx)("p",{children:R?"":"Turn: ".concat(N)}),Object(a.jsx)("p",{children:D&&!R?"Check!":""}),Object(a.jsx)("p",{children:R?"".concat(R," wins!"):""}),Object(a.jsx)("button",{type:"button",onClick:function(){t(k),T("white"),oo(),G(!1),z(null)},children:"New Game"})]})};var T=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Chess"}),Object(a.jsx)(N,{})]})},A=function(o){o&&o instanceof Function&&e.e(3).then(e.bind(null,15)).then((function(r){var e=r.getCLS,c=r.getFID,t=r.getFCP,n=r.getLCP,l=r.getTTFB;e(o),c(o),t(o),n(o),l(o)}))};l.a.render(Object(a.jsx)(t.a.StrictMode,{children:Object(a.jsx)(T,{})}),document.getElementById("root")),A()}},[[14,1,2]]]);
//# sourceMappingURL=main.7e44c9c7.chunk.js.map