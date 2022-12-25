(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{115:function(e,t,a){"use strict";var r=a(8),n=a(9),l=a(0),o=a.n(l),i=a(2),c=(a(25),a(11)),s=a(13),u=a.n(s),m=a(19),f=a(97),d=a.n(f),h=a(94),p=a(93),b=a.n(p);t.a=Object(i.i)(function(e){var t=e.match,a=e.history,i=Object(l.useState)({loanDetails:[],isLoading:!1}),s=Object(n.a)(i,2),f=s[0],p=s[1],g=JSON.parse(sessionStorage.getItem("userData")).token;Object(l.useEffect)(function(){p(Object(r.a)({},f,{isLoading:!0})),u()({method:"get",url:"".concat(c.i,"/").concat(t.params.id,"/details"),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(g)},timeout:c.p}).then(function(e){p(Object(r.a)({},f,{isLoading:!1})),"Successful"===e.data.respCode?p(Object(r.a)({},f,{loanDetails:e.data.respBody})):p(Object(r.a)({},f,{isLoading:!1,errorMessage:e.data.respDescription}))}).catch(function(e){p(Object(r.a)({},f,{isLoading:!1,errorMessage:e}))})},[f.errorMessage]);var v=f.loanDetails,y=f.isLoading;return o.a.createElement(l.Fragment,null,o.a.createElement("div",{className:"user-layout"},o.a.createElement("div",{className:"dashboard-mainXX"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"loan-table-heading"},o.a.createElement("div",{className:"d-flex align-items-center"},o.a.createElement("div",{onClick:function(){return a.goBack()},className:"mr-3 cursor"},o.a.createElement("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M21 11H1",stroke:"#EC008C","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),o.a.createElement("path",{d:"M11 21L1 11L11 1",stroke:"#EC008C","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}))),o.a.createElement("h1",{className:"heading"},"Loan Details")),o.a.createElement("div",{className:"d-flex align-items-center mr-5"},o.a.createElement("div",{className:"ml-2 cursor",onClick:function(){return window.location.reload()}},o.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.92066 1.98574C9.92066 0.389607 8.13055 -0.552042 6.81527 0.352215L4.36735 2.03516C3.22163 2.82284 3.22163 4.51454 4.36735 5.30222L6.81527 6.98516C8.13055 7.88942 9.92066 6.94777 9.92066 5.35163V1.98574ZM4.61777 10.929C4.61777 10.9874 4.615 11.0451 4.60959 11.1021H4.61616C4.86613 13.8121 7.14573 15.9341 9.92095 15.9341C12.8633 15.9341 15.2485 13.5488 15.2485 10.6065C15.2485 7.66421 12.8633 5.27899 9.92095 5.27899V1.74824C14.8129 1.74879 18.7785 5.71469 18.7785 10.6068C18.7785 15.4993 14.8124 19.4654 9.91995 19.4654C5.34815 19.4654 1.58524 16.0021 1.11163 11.556C1.03943 11.3606 1 11.1494 1 10.929C1 9.92994 1.80986 9.12007 2.80888 9.12007C3.8079 9.12007 4.61777 9.92994 4.61777 10.929Z",fill:"#828282"}))))),o.a.createElement("div",{className:"card-body overflow-auto p-0"},o.a.createElement("div",{className:"card-headerX-sub-head"},o.a.createElement("div",{className:"d-flex justify-content-between align-items-center first-head-sub"},!y&&v.createdAt?o.a.createElement("p",{className:"text-capitalize",style:{color:"#828282"}},o.a.createElement("span",{style:{color:"#333333",fontWeight:"500"}},"Date: "),"  ",d()(v.createdAt).format("DD-MM-YYYY")):o.a.createElement("p",{className:"text-capitalize"},"Loading..."),v.status?o.a.createElement("div",{className:"d-flex align-items-center "},"approved"===v.status?o.a.createElement("div",{className:"d-flex align-items-center "},"Status: "," ",o.a.createElement(h.a,{style:{color:"#219653",background:"rgba(229, 254, 228, 0.7)"},value:v.status,text:!0})):"pending"===v.status?o.a.createElement("div",{className:"d-flex align-items-center "},"Status: "," ",o.a.createElement(h.a,{style:{color:"#A9AC1F",background:"rgba(254, 253, 228, 0.7);"},value:v.status,text:!0})):o.a.createElement("div",{className:"d-flex align-items-center "},"Status: "," ",o.a.createElement(h.a,{style:{color:"#AC1F1F",background:"rgba(254, 228, 228, 0.7)"},value:v.status,text:!0}))):o.a.createElement("p",{className:"text-capitalize"},"Loading...")),o.a.createElement("div",{className:"d-flex justify-content-between mb-4 flex-wrap nd-head-sub"},y?o.a.createElement(m.a,null):o.a.createElement(l.Fragment,null,o.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center price-br"},o.a.createElement(h.a,{style:{color:"#1F57AC",background:"rgba(228, 242, 254, 0.7)"},value:v.requestedAmount?v.requestedAmount/100:0,text:!1}),o.a.createElement("h5",{className:"price-h"},"Amount Loaned")),o.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center price-br"},o.a.createElement(h.a,{style:{color:"#AC1F1F",background:"rgba(254, 228, 228, 0.7)"},value:"".concat(v.durationType?v.durationType:0),text:!0}),o.a.createElement("h5",{className:"price-h"},"Loan Term")),o.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center price-br"},o.a.createElement(h.a,{style:{color:"#1FAC46",background:"rgba(229, 254, 228, 0.7)"},value:"".concat(v.loanPaybacks?v.loanPaybacks[0].interestRate:0,"%"),text:!0}),o.a.createElement("h5",{className:"price-h"},"Interest Rate")),o.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center price-br"},o.a.createElement(h.a,{style:{color:"#A9AC1F",background:"rgba(254, 253, 228, 0.7)"},value:"".concat(v.loanDuration?v.loanDuration:0," Months"),text:!0}),o.a.createElement("h5",{className:"price-h"},"Duation")),o.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center"},o.a.createElement(h.a,{style:{color:"#A9AC1F",background:"rgba(254, 253, 228, 0.7)"},value:v.totalPaymentAmount?v.totalPaymentAmount/100:0,text:!1}),o.a.createElement("h5",{className:"price-h"},"Amount to be paid"))))),o.a.createElement("div",{className:"card-body mt-5",style:{overflowX:"auto"}},o.a.createElement("h5",null,"Repayment Schedule"),o.a.createElement("div",null,y?o.a.createElement(m.a,null):o.a.createElement("div",{className:"table-responsive"},o.a.createElement("table",{className:"table",style:{overflowX:"auto"}},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Month"),o.a.createElement("th",null,"Capital"),o.a.createElement("th",null,"Interest"),o.a.createElement("th",null,"Repayment Amount"),o.a.createElement("th",null,"Repayment Date"),o.a.createElement("th",null,"Status"))),o.a.createElement("tbody",null,v.loanPaybacks?v.loanPaybacks.map(function(e,t){var a=e.currentPrincipal,r=e.interest,n=e.payableAmount,l=e.paymentDate,i=e.status;return o.a.createElement("tr",{key:t},o.a.createElement("th",{scope:"row"}," ",t+1),o.a.createElement("td",null," ","\u20a6",b()(a/100).format("0,0")),o.a.createElement("td",null," ","\u20a6",b()(r/100).format("0,0")),o.a.createElement("td",null," ","\u20a6",b()(n/100).format("0,0")),o.a.createElement("td",null,l?l.substring(0,10):""),o.a.createElement("td",null,o.a.createElement("div",{className:"loan-status-buttonX",style:{color:function(e){return"approved"===e?"#219653":"pending"===e?"#F2C94C":"#EB5757"}(i),textTransform:"capitalize"}},i)))}):null))))))))))})},290:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(115);t.default=function(e){return n.a.createElement("div",{className:"container spacing-top"},n.a.createElement(l.a,null))}},93:function(e,t,a){var r,n;void 0===(n="function"===typeof(r=function(){var e,t,a={},r={},n={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},l={currentLocale:n.currentLocale,zeroFormat:n.zeroFormat,nullFormat:n.nullFormat,defaultFormat:n.defaultFormat,scalePercentBy100:n.scalePercentBy100};function o(e,t){this._input=e,this._value=t}return(e=function(r){var n,i,c,s;if(e.isNumeral(r))n=r.value();else if(0===r||"undefined"===typeof r)n=0;else if(null===r||t.isNaN(r))n=null;else if("string"===typeof r)if(l.zeroFormat&&r===l.zeroFormat)n=0;else if(l.nullFormat&&r===l.nullFormat||!r.replace(/[^0-9]+/g,"").length)n=null;else{for(i in a)if((s="function"===typeof a[i].regexps.unformat?a[i].regexps.unformat():a[i].regexps.unformat)&&r.match(s)){c=a[i].unformat;break}n=(c=c||e._.stringToNumber)(r)}else n=Number(r)||null;return new o(r,n)}).version="2.0.6",e.isNumeral=function(e){return e instanceof o},e._=t={numberToFormat:function(t,a,n){var l,o,i,c,s,u,m,f,d=r[e.options.currentLocale],h=!1,p=!1,b="",g="",v=!1;if(t=t||0,i=Math.abs(t),e._.includes(a,"(")?(h=!0,a=a.replace(/[\(|\)]/g,"")):(e._.includes(a,"+")||e._.includes(a,"-"))&&(u=e._.includes(a,"+")?a.indexOf("+"):t<0?a.indexOf("-"):-1,a=a.replace(/[\+|\-]/g,"")),e._.includes(a,"a")&&(o=!!(o=a.match(/a(k|m|b|t)?/))&&o[1],e._.includes(a," a")&&(b=" "),a=a.replace(new RegExp(b+"a[kmbt]?"),""),i>=1e12&&!o||"t"===o?(b+=d.abbreviations.trillion,t/=1e12):i<1e12&&i>=1e9&&!o||"b"===o?(b+=d.abbreviations.billion,t/=1e9):i<1e9&&i>=1e6&&!o||"m"===o?(b+=d.abbreviations.million,t/=1e6):(i<1e6&&i>=1e3&&!o||"k"===o)&&(b+=d.abbreviations.thousand,t/=1e3)),e._.includes(a,"[.]")&&(p=!0,a=a.replace("[.]",".")),c=t.toString().split(".")[0],s=a.split(".")[1],m=a.indexOf(","),l=(a.split(".")[0].split(",")[0].match(/0/g)||[]).length,s?(e._.includes(s,"[")?(s=(s=s.replace("]","")).split("["),g=e._.toFixed(t,s[0].length+s[1].length,n,s[1].length)):g=e._.toFixed(t,s.length,n),c=g.split(".")[0],g=e._.includes(g,".")?d.delimiters.decimal+g.split(".")[1]:"",p&&0===Number(g.slice(1))&&(g="")):c=e._.toFixed(t,0,n),b&&!o&&Number(c)>=1e3&&b!==d.abbreviations.trillion)switch(c=String(Number(c)/1e3),b){case d.abbreviations.thousand:b=d.abbreviations.million;break;case d.abbreviations.million:b=d.abbreviations.billion;break;case d.abbreviations.billion:b=d.abbreviations.trillion}if(e._.includes(c,"-")&&(c=c.slice(1),v=!0),c.length<l)for(var y=l-c.length;y>0;y--)c="0"+c;return m>-1&&(c=c.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+d.delimiters.thousands)),0===a.indexOf(".")&&(c=""),f=c+g+(b||""),h?f=(h&&v?"(":"")+f+(h&&v?")":""):u>=0?f=0===u?(v?"-":"+")+f:f+(v?"-":"+"):v&&(f="-"+f),f},stringToNumber:function(e){var t,a,n,o=r[l.currentLocale],i=e,c={thousand:3,million:6,billion:9,trillion:12};if(l.zeroFormat&&e===l.zeroFormat)a=0;else if(l.nullFormat&&e===l.nullFormat||!e.replace(/[^0-9]+/g,"").length)a=null;else{for(t in a=1,"."!==o.delimiters.decimal&&(e=e.replace(/\./g,"").replace(o.delimiters.decimal,".")),c)if(n=new RegExp("[^a-zA-Z]"+o.abbreviations[t]+"(?:\\)|(\\"+o.currency.symbol+")?(?:\\))?)?$"),i.match(n)){a*=Math.pow(10,c[t]);break}a*=(e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1,e=e.replace(/[^0-9\.]+/g,""),a*=Number(e)}return a},isNaN:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){return"number"===typeof e&&isNaN(e)}),includes:function(e,t){return-1!==e.indexOf(t)},insert:function(e,t,a){return e.slice(0,a)+t+e.slice(a)},reduce:function(e,t){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!==typeof t)throw new TypeError(t+" is not a function");var a,r=Object(e),n=r.length>>>0,l=0;if(3===arguments.length)a=arguments[2];else{for(;l<n&&!(l in r);)l++;if(l>=n)throw new TypeError("Reduce of empty array with no initial value");a=r[l++]}for(;l<n;l++)l in r&&(a=t(a,r[l],l,r));return a},multiplier:function(e){var t=e.toString().split(".");return t.length<2?1:Math.pow(10,t[1].length)},correctionFactor:function(){return Array.prototype.slice.call(arguments).reduce(function(e,a){var r=t.multiplier(a);return e>r?e:r},1)},toFixed:function(e,t,a,r){var n,l,o,i,c=e.toString().split("."),s=t-(r||0);return n=2===c.length?Math.min(Math.max(c[1].length,s),t):s,o=Math.pow(10,n),i=(a(e+"e+"+n)/o).toFixed(n),r>t-n&&(l=new RegExp("\\.?0{1,"+(r-(t-n))+"}$"),i=i.replace(l,"")),i}},e.options=l,e.formats=a,e.locales=r,e.locale=function(e){return e&&(l.currentLocale=e.toLowerCase()),l.currentLocale},e.localeData=function(e){if(!e)return r[l.currentLocale];if(e=e.toLowerCase(),!r[e])throw new Error("Unknown locale : "+e);return r[e]},e.reset=function(){for(var e in n)l[e]=n[e]},e.zeroFormat=function(e){l.zeroFormat="string"===typeof e?e:null},e.nullFormat=function(e){l.nullFormat="string"===typeof e?e:null},e.defaultFormat=function(e){l.defaultFormat="string"===typeof e?e:"0.0"},e.register=function(e,t,a){if(t=t.toLowerCase(),this[e+"s"][t])throw new TypeError(t+" "+e+" already registered.");return this[e+"s"][t]=a,a},e.validate=function(t,a){var r,n,l,o,i,c,s,u;if("string"!==typeof t&&(t+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",t)),(t=t.trim()).match(/^\d+$/))return!0;if(""===t)return!1;try{s=e.localeData(a)}catch(m){s=e.localeData(e.locale())}return l=s.currency.symbol,i=s.abbreviations,r=s.delimiters.decimal,n="."===s.delimiters.thousands?"\\.":s.delimiters.thousands,(null===(u=t.match(/^[^\d]+/))||(t=t.substr(1),u[0]===l))&&(null===(u=t.match(/[^\d]+$/))||(t=t.slice(0,-1),u[0]===i.thousand||u[0]===i.million||u[0]===i.billion||u[0]===i.trillion))&&(c=new RegExp(n+"{2}"),!t.match(/[^\d.,]/g)&&!((o=t.split(r)).length>2)&&(o.length<2?!!o[0].match(/^\d+.*\d$/)&&!o[0].match(c):1===o[0].length?!!o[0].match(/^\d+$/)&&!o[0].match(c)&&!!o[1].match(/^\d+$/):!!o[0].match(/^\d+.*\d$/)&&!o[0].match(c)&&!!o[1].match(/^\d+$/)))},e.fn=o.prototype={clone:function(){return e(this)},format:function(t,r){var n,o,i,c=this._value,s=t||l.defaultFormat;if(r=r||Math.round,0===c&&null!==l.zeroFormat)o=l.zeroFormat;else if(null===c&&null!==l.nullFormat)o=l.nullFormat;else{for(n in a)if(s.match(a[n].regexps.format)){i=a[n].format;break}o=(i=i||e._.numberToFormat)(c,s,r)}return o},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){var a=t.correctionFactor.call(null,this._value,e);return this._value=t.reduce([this._value,e],function(e,t,r,n){return e+Math.round(a*t)},0)/a,this},subtract:function(e){var a=t.correctionFactor.call(null,this._value,e);return this._value=t.reduce([e],function(e,t,r,n){return e-Math.round(a*t)},Math.round(this._value*a))/a,this},multiply:function(e){return this._value=t.reduce([this._value,e],function(e,a,r,n){var l=t.correctionFactor(e,a);return Math.round(e*l)*Math.round(a*l)/Math.round(l*l)},1),this},divide:function(e){return this._value=t.reduce([this._value,e],function(e,a,r,n){var l=t.correctionFactor(e,a);return Math.round(e*l)/Math.round(a*l)}),this},difference:function(t){return Math.abs(e(this._value).subtract(t).value())}},e.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var t=e%10;return 1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},currency:{symbol:"$"}}),e.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(t,a,r){var n,l=e._.includes(a," BPS")?" ":"";return t*=1e4,a=a.replace(/\s?BPS/,""),n=e._.numberToFormat(t,a,r),e._.includes(n,")")?((n=n.split("")).splice(-1,0,l+"BPS"),n=n.join("")):n=n+l+"BPS",n},unformat:function(t){return+(1e-4*e._.stringToNumber(t)).toFixed(15)}}),function(){var t={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]},a={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},r=t.suffixes.concat(a.suffixes.filter(function(e){return t.suffixes.indexOf(e)<0})).join("|");r="("+r.replace("B","B(?!PS)")+")",e.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(r)},format:function(r,n,l){var o,i,c,s=e._.includes(n,"ib")?a:t,u=e._.includes(n," b")||e._.includes(n," ib")?" ":"";for(n=n.replace(/\s?i?b/,""),o=0;o<=s.suffixes.length;o++)if(i=Math.pow(s.base,o),c=Math.pow(s.base,o+1),null===r||0===r||r>=i&&r<c){u+=s.suffixes[o],i>0&&(r/=i);break}return e._.numberToFormat(r,n,l)+u},unformat:function(r){var n,l,o=e._.stringToNumber(r);if(o){for(n=t.suffixes.length-1;n>=0;n--){if(e._.includes(r,t.suffixes[n])){l=Math.pow(t.base,n);break}if(e._.includes(r,a.suffixes[n])){l=Math.pow(a.base,n);break}}o*=l||1}return o}})}(),e.register("format","currency",{regexps:{format:/(\$)/},format:function(t,a,r){var n,l,o=e.locales[e.options.currentLocale],i={before:a.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:a.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(a=a.replace(/\s?\$\s?/,""),n=e._.numberToFormat(t,a,r),t>=0?(i.before=i.before.replace(/[\-\(]/,""),i.after=i.after.replace(/[\-\)]/,"")):t<0&&!e._.includes(i.before,"-")&&!e._.includes(i.before,"(")&&(i.before="-"+i.before),l=0;l<i.before.length;l++)switch(i.before[l]){case"$":n=e._.insert(n,o.currency.symbol,l);break;case" ":n=e._.insert(n," ",l+o.currency.symbol.length-1)}for(l=i.after.length-1;l>=0;l--)switch(i.after[l]){case"$":n=l===i.after.length-1?n+o.currency.symbol:e._.insert(n,o.currency.symbol,-(i.after.length-(1+l)));break;case" ":n=l===i.after.length-1?n+" ":e._.insert(n," ",-(i.after.length-(1+l)+o.currency.symbol.length-1))}return n}}),e.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(t,a,r){var n=("number"!==typeof t||e._.isNaN(t)?"0e+0":t.toExponential()).split("e");return a=a.replace(/e[\+|\-]{1}0/,""),e._.numberToFormat(Number(n[0]),a,r)+"e"+n[1]},unformat:function(t){var a=e._.includes(t,"e+")?t.split("e+"):t.split("e-"),r=Number(a[0]),n=Number(a[1]);return n=e._.includes(t,"e-")?n*=-1:n,e._.reduce([r,Math.pow(10,n)],function(t,a,r,n){var l=e._.correctionFactor(t,a);return t*l*(a*l)/(l*l)},1)}}),e.register("format","ordinal",{regexps:{format:/(o)/},format:function(t,a,r){var n=e.locales[e.options.currentLocale],l=e._.includes(a," o")?" ":"";return a=a.replace(/\s?o/,""),l+=n.ordinal(t),e._.numberToFormat(t,a,r)+l}}),e.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(t,a,r){var n,l=e._.includes(a," %")?" ":"";return e.options.scalePercentBy100&&(t*=100),a=a.replace(/\s?\%/,""),n=e._.numberToFormat(t,a,r),e._.includes(n,")")?((n=n.split("")).splice(-1,0,l+"%"),n=n.join("")):n=n+l+"%",n},unformat:function(t){var a=e._.stringToNumber(t);return e.options.scalePercentBy100?.01*a:a}}),e.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,t,a){var r=Math.floor(e/60/60),n=Math.floor((e-60*r*60)/60),l=Math.round(e-60*r*60-60*n);return r+":"+(n<10?"0"+n:n)+":"+(l<10?"0"+l:l)},unformat:function(e){var t=e.split(":"),a=0;return 3===t.length?(a+=60*Number(t[0])*60,a+=60*Number(t[1]),a+=Number(t[2])):2===t.length&&(a+=60*Number(t[0]),a+=Number(t[1])),Number(a)}}),e})?r.call(t,a,t,e):r)||(e.exports=n)},94:function(e,t,a){"use strict";var r=a(8),n=a(0),l=a.n(n),o=a(93),i=a.n(o);t.a=function(e){var t=e.value,a=e.style;return e.text?l.a.createElement("div",{style:Object(r.a)({},a,{textTransform:"capitalize"}),className:"price-card-dd"},t):l.a.createElement("div",{style:Object(r.a)({},a),className:"price-card-dd"},"\u20a6",i()(t).format("0,0"))}}}]);
//# sourceMappingURL=44.7d2b0247.chunk.js.map