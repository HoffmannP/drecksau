(function(e){function n(n){for(var i,a,u=n[0],s=n[1],l=n[2],f=0,h=[];f<u.length;f++)a=u[f],r[a]&&h.push(r[a][0]),r[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);o&&o(n);while(h.length)h.shift()();return c.push.apply(c,l||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],i=!0,u=1;u<t.length;u++){var s=t[u];0!==r[s]&&(i=!1)}i&&(c.splice(n--,1),e=a(a.s=t[0]))}return e}var i={},r={app:0},c=[];function a(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=i,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)a.d(t,i,function(n){return e[n]}.bind(null,i));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=n,u=u.slice();for(var l=0;l<u.length;l++)n(u[l]);var o=s;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"0d87":function(e,n,t){"use strict";var i=t("3688"),r=t.n(i);r.a},"2fe9":function(e,n,t){"use strict";var i=t("9d4a"),r=t.n(i);r.a},3688:function(e,n,t){},"37cd":function(e,n,t){e.exports=t.p+"img/sauber.7566ba8a.png"},"49c5":function(e,n,t){e.exports=t.p+"img/waschen.a6d8736c.png"},"56d7":function(e,n,t){"use strict";t.r(n);t("14c6"),t("08c1"),t("4842"),t("d9fc");var i=t("2b0e"),r=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{attrs:{id:"app"}},[i("img",{attrs:{alt:"Drecksau",src:t("9df8")}}),0===e.spielerinnen.length?i("ConfigGame",{on:{start:e.start}}):e._e(),e._l(e.spielerinnen,function(e){return i("Spielerin",{key:e,attrs:{id:e}})})],2)},c=[],a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h1",[e._v("Spiel einrichten")]),t("div",[t("label",[e._v("\n      Anzahl Spieler*innen:\n      "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.anzahl_spielerinnen,expression:"anzahl_spielerinnen"}],attrs:{type:"number",min:"2",max:"4"},domProps:{value:e.anzahl_spielerinnen},on:{input:function(n){n.target.composing||(e.anzahl_spielerinnen=n.target.value)}}})])]),t("div",[t("button",{on:{click:e.start}},[e._v("Spielen!")])])])},u=[],s={data:function(){return{anzahl_spielerinnen:2}},methods:{start:function(){this.$emit("start",this.anzahl_spielerinnen)}}},l=s,o=t("2877"),f=Object(o["a"])(l,a,u,!1,null,"f8150b80",null),h=f.exports,d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{class:{amZug:e.amZug}},[t("h2",[e._v("Spielerin "+e._s(e.id))]),e.gewonnen?t("div",[e._v("Gewonnen!")]):e._e(),t("div",{staticClass:"schweine"},e._l(e.schweine,function(e){return t("Schwein",{key:e,attrs:{id:e}})}),1),t("div",{staticClass:"karten"},[e._l(e.karten,function(e){return t("Karte",{key:e,attrs:{id:e}})}),t("button",{on:{click:e.abwerfen}},[e._v("Hand abwerfen")])],2)])},p=[],g=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{class:e.schwein.highlight,on:{click:e.zielWaehlen}},[i("img",{staticClass:"schwein",attrs:{src:t("9e01")("./"+(e.schwein.dreckig?"dreckig":"sauber")+".png")}}),e.schwein.stall?i("img",{staticClass:"stall",attrs:{src:t("cc7e")}}):e._e(),e.schwein.blitzableiter?i("img",{staticClass:"blitzableiter",attrs:{src:t("5fa2")}}):e._e(),e.schwein.vernagelt?i("img",{staticClass:"vernagelt",attrs:{src:t("9b00")}}):e._e()])},v=[],w={props:["id"],computed:{schwein:function(){return this.$store.getters.schwein(this.id)}},methods:{zielWaehlen:function(){this.$store.dispatch("zielWaehlen",this.id)}}},b=w,k=(t("7623"),Object(o["a"])(b,g,v,!1,null,"c46f876e",null)),m=k.exports,S=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",[i("img",{class:{active:e.aktiv===e.karte.id},attrs:{src:t("9e01")("./"+e.karte.value+".png")},on:{mouseover:e.hover,mouseout:e.unhover,click:e.click}})])},_=[],O={props:["id"],computed:{karte:function(){return this.$store.getters.karte(this.id)},aktiv:function(){return this.$store.getters.aktiveKarte}},methods:{hover:function(){this.$store.dispatch("karteTesten",this.id)},unhover:function(){this.$store.dispatch("karteVerlassen",this.id)},click:function(){this.$store.dispatch("karteSpielen",this.id)}}},z=O,y=(t("2fe9"),Object(o["a"])(z,S,_,!1,null,"9e4aa83e",null)),j=y.exports,K={props:["id"],components:{Schwein:m,Karte:j},computed:{schweine:function(){return this.$store.getters.schweine(this.id)},karten:function(){return this.$store.getters.karten(this.id)},amZug:function(){return this.$store.getters.current===this.id},gewonnen:function(){return this.$store.getters.gewonnen(this.id)}},methods:{abwerfen:function(){this.$store.dispatch("abwerfen",this.id)}}},x=K,$=(t("0d87"),Object(o["a"])(x,d,p,!1,null,"597b4e30",null)),A=$.exports,D={name:"app",computed:{spielerinnen:function(){return this.$store.getters.spielerinnen}},components:{ConfigGame:h,Spielerin:A},methods:{start:function(e){this.$store.dispatch("addSpielerinnen",e)}}},M=D,C=(t("7faf"),Object(o["a"])(M,r,c,!1,null,null,null)),E=C.exports,P=(t("ac6a"),t("6c7b"),t("75fc")),T=t("cebc"),N=(t("6762"),t("2fdb"),t("7514"),t("2f62")),V=Array.prototype.concat(Array(4).fill("blitz"),Array(4).fill("blitzableiter"),Array(21).fill("matschen"),Array(4).fill("regen"),Array(9).fill("stall"),Array(8).fill("waschen"),Array(4).fill("vernagelt")),B=W(V);function W(e){for(var n=e.length-1;n>0;n--){var t=Math.floor(Math.random()*(n+1)),i=[e[t],e[n]];e[n]=i[0],e[t]=i[1]}return e}var G=function(){return B.pop()};i["a"].use(N["a"]);var Z=3,J=[void 0,void 0,5,4,3],U=function(e){return{dreckig:!1,stall:!1,blitzableiter:!1,vernagelt:!1,highlight:""}};function F(e,n){return"".concat(n,":").concat(e[n].length)}var H=new N["a"].Store({strict:!0,state:{current:0,aktive_karte:void 0,schweine:[],karten:[],spielerin_schweine:[],spielerin_karten:[],spielerinnen:[]},getters:{spielerinnen:function(e){return e.spielerinnen},schweine:function(e){return function(n){return e.spielerin_schweine.find(function(e){return e.id===n}).schweine}},schwein:function(e){return function(n){return e.schweine.find(function(e){return e.id===n})}},karten:function(e){return function(n){return e.spielerin_karten.find(function(e){return e.id===n}).karten}},karte:function(e){return function(n){return e.karten.find(function(e){return e.id===n})}},current:function(e){return e.spielerinnen[e.current]},aktiveKarte:function(e){return e.aktive_karte},spielerinDerKarte:function(e){return function(n){return e.spielerin_karten.find(function(e){return e.karten.includes(n)}).id}},eigeneSchweine:function(e,n){return function(e){return n.schweine(n.spielerinDerKarte(e)).map(function(e){return n.schwein(e)})}},fremdeSchweine:function(e,n){return function(t){return e.spielerin_schweine.filter(function(e){return e.id!==n.spielerinDerKarte(t)}).map(function(e){return e.schweine}).flat().map(function(e){return n.schwein(e)})}},alleSchweine:function(e){return e.schweine},fremdeSchweineMitStallOhneBlitzableiter:function(e,n){return function(e){return n.fremdeSchweine(e).filter(function(e){return e.stall&&!e.blitzableiter})}},eigeneSchweineMitStallOhneBlitzableiter:function(e,n){return function(e){return n.eigeneSchweine(e).filter(function(e){return e.stall&&!e.blitzableiter})}},eigeneSchweineNichtDreckig:function(e,n){return function(e){return n.eigeneSchweine(e).filter(function(e){return!e.dreckig})}},alleSchweineDreckigOhneStall:function(e,n){return function(e){return n.alleSchweine.filter(function(e){return e.dreckig&&!e.stall})}},eigeneSchweineOhneStall:function(e,n){return function(e){return n.eigeneSchweine(e).filter(function(e){return!e.stall})}},fremdeSchweineDreckig:function(e,n){return function(e){return n.fremdeSchweine(e).filter(function(e){return e.dreckig})}},eigeneSchweineDreckigMitStallOhneVernagelt:function(e,n){return function(e){return n.eigeneSchweine(e).filter(function(e){return e.dreckig&&e.stall&&!e.vernagelt})}},aktionSelektion:function(e,n){return function(e){return{blitz:n.fremdeSchweineMitStallOhneBlitzableiter,blitzableiter:n.eigeneSchweineMitStallOhneBlitzableiter,matschen:n.eigeneSchweineNichtDreckig,regen:n.alleSchweineDreckigOhneStall,stall:n.eigeneSchweineOhneStall,waschen:n.fremdeSchweineDreckig,vernagelt:n.eigeneSchweineDreckigMitStallOhneVernagelt}[n.karte(e).value](e).map(function(e){return e.id})}},modifiedSchwein:function(e,n){return function(e,t){var i=Object(T["a"])({},n.schwein(t));switch(n.karte(e).value){case"blitz":i.stall=!1,i.vernagelt=!1;break;case"blitzableiter":i.blitzableiter=!0;break;case"matschen":i.dreckig=!0;break;case"regen":case"waschen":i.dreckig=!1;break;case"stall":i.stall=!0;break;case"vernagelt":i.vernagelt=!0;break}return i}},gewonnen:function(e,n){return function(t){return e.spielerin_schweine.find(function(e){return e.id===t}).schweine.every(function(e){return n.schwein(e).dreckig})}}},mutations:{setSchwein:function(e,n){e.schweine=[].concat(Object(P["a"])(e.schweine.filter(function(e){return e.id!==n.id})),[n])},highlightSchwein:function(e,n){var t=n.schweine,i=n.highlight;e.schweine=Object(P["a"])(e.schweine.map(function(e){return Object(T["a"])({},e,{highlight:t.includes(e.id)?i:""})}))},setKarte:function(e,n){e.karten=[].concat(Object(P["a"])(e.karten.filter(function(e){return e.id!==n.id})),[n])},setAktiveKarte:function(e,n){e.aktive_karte=n},addSpielerin:function(e,n){var t=F(e,"spielerinnen"),i=Array(n).fill(U()).map(function(e,n){return Object(T["a"])({},e,{id:"schwein:".concat(t,":").concat(n)})}),r=Array(Z).fill({}).map(function(e,n){return{id:"karte:".concat(t,":").concat(n),value:G()}});e.schweine=[].concat(Object(P["a"])(e.schweine),Object(P["a"])(i)),e.spielerin_schweine.push({id:t,schweine:i.map(function(e){return e.id})}),e.karten=[].concat(Object(P["a"])(e.karten),Object(P["a"])(r)),e.spielerin_karten.push({id:t,karten:r.map(function(e){return e.id})}),e.spielerinnen.push(t)},updateCurrent:function(e){e.current=(e.current+1)%e.spielerinnen.length},newKarte:function(e,n){i["a"].set(e.karten,n,G())},regen:function(e){e.schweine=Object(P["a"])(e.schweine.map(function(e){return Object(T["a"])({},e,{dreckig:e.dreckig&&e.stall})}))}},actions:{addSpielerinnen:function(e,n){for(var t=e.commit,i=0;i<n;i++)t("addSpielerin",J[n])},karteTesten:function(e,n){var t=e.commit,i=e.getters;i.spielerinDerKarte(n)===i.current&&t("highlightSchwein",{schweine:i.aktionSelektion(n),highlight:["blitz","blitzableiter","vernagelt"].includes(i.karte(n).value)?"stall":"schwein"})},karteSpielen:function(e,n){var t=e.dispatch,i=e.commit,r=e.getters;if(r.spielerinDerKarte(n)===r.current)return"regen"===r.karte(n).value&&void 0===r.aktiveKarte?t("regen",n):void(r.aktiveKarte===n?(i("setAktiveKarte"),t("karteVerlassen",n)):(i("setAktiveKarte",n),t("karteTesten",n)))},regen:function(e,n){var t=e.commit,i=e.dispatch;e.getters;return t("setAktiveKarte",n),t("regen"),i("zugEnde")},karteVerlassen:function(e,n){var t=e.commit,i=e.getters;void 0===i.aktiveKarte&&t("highlightSchwein",{schweine:[]})},zielWaehlen:function(e,n){var t=e.commit,i=e.dispatch,r=e.getters;r.aktiveKarte&&r.aktionSelektion(r.aktiveKarte).includes(n)&&(t("setSchwein",r.modifiedSchwein(r.aktiveKarte,n)),i("zugEnde"))},zugEnde:function(e){var n=e.commit,t=e.getters;n("setKarte",{id:t.aktiveKarte,value:G()}),n("setAktiveKarte"),n("highlightSchwein",{schweine:[]}),n("updateCurrent")},abwerfen:function(e,n){var t=e.commit,i=e.getters;i.karten(n).forEach(function(e){return t("setKarte",{id:e,value:G()})})}}});i["a"].config.productionTip=!1,new i["a"]({store:H,render:function(e){return e(E)}}).$mount("#app")},"5de5":function(e,n,t){e.exports=t.p+"img/matschen.ae814d4c.png"},"5fa2":function(e,n,t){e.exports=t.p+"img/blitzableiter.6f401ed0.png"},7623:function(e,n,t){"use strict";var i=t("aab5"),r=t.n(i);r.a},"7faf":function(e,n,t){"use strict";var i=t("8fba"),r=t.n(i);r.a},"8fba":function(e,n,t){},"9b00":function(e,n,t){e.exports=t.p+"img/vernagelt.07fb2214.png"},"9d4a":function(e,n,t){},"9df8":function(e,n,t){e.exports=t.p+"img/dreckig.ed3ba4cb.png"},"9e01":function(e,n,t){var i={"./blitz.png":"eb34","./blitzableiter.png":"5fa2","./dreckig.png":"9df8","./matschen.png":"5de5","./regen.png":"a755","./sauber.png":"37cd","./stall.png":"cc7e","./vernagelt.png":"9b00","./waschen.png":"49c5"};function r(e){var n=c(e);return t(n)}function c(e){var n=i[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}r.keys=function(){return Object.keys(i)},r.resolve=c,e.exports=r,r.id="9e01"},a755:function(e,n,t){e.exports=t.p+"img/regen.3a1ad4fb.png"},aab5:function(e,n,t){},cc7e:function(e,n,t){e.exports=t.p+"img/stall.2be5554d.png"},eb34:function(e,n,t){e.exports=t.p+"img/blitz.b56f928c.png"}});