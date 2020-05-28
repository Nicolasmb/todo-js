(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=1)})([function(){},function(a,b,c){'use strict';function d(c,a){if(!(c instanceof a))throw new TypeError('Cannot call a class as a function')}function e(e,a){for(var b,c=0;c<a.length;c++)b=a[c],b.enumerable=b.enumerable||!1,b.configurable=!0,'value'in b&&(b.writable=!0),Object.defineProperty(e,b.key,b)}function f(d,a,b){return a&&e(d.prototype,a),b&&e(d,b),d}function g(i){if('undefined'==typeof Symbol||null==i[Symbol.iterator]){if(Array.isArray(i)||(i=h(i))){var a=0,b=function(){};return{s:b,n:function(){return a>=i.length?{done:!0}:{done:!1,value:i[a++]}},e:function(b){throw b},f:b}}throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')}var j,d,e=!0,f=!1;return{s:function(){j=i[Symbol.iterator]()},n:function(){var b=j.next();return e=b.done,b},e:function(b){f=!0,d=b},f:function a(){try{a||null==j['return']||j['return']()}finally{if(f)throw d}}}}function h(d,e){if(d){if('string'==typeof d)return i(d,e);var b=Object.prototype.toString.call(d).slice(8,-1);return'Object'===b&&d.constructor&&(b=d.constructor.name),'Map'===b||'Set'===b?Array.from(d):'Arguments'===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)?i(d,e):void 0}}function i(e,a){(null==a||a>e.length)&&(a=e.length);for(var b=0,c=Array(a);b<a;b++)c[b]=e[b];return c}function j(c,a){if(!(c instanceof a))throw new TypeError('Cannot call a class as a function')}function k(e,a){for(var b,c=0;c<a.length;c++)b=a[c],b.enumerable=b.enumerable||!1,b.configurable=!0,'value'in b&&(b.writable=!0),Object.defineProperty(e,b.key,b)}function l(d,a,b){return a&&k(d.prototype,a),b&&k(d,b),d}function m(h){if('undefined'==typeof Symbol||null==h[Symbol.iterator]){if(Array.isArray(h)||(h=n(h))){var a=0,b=function(){};return{s:b,n:function(){return a>=h.length?{done:!0}:{done:!1,value:h[a++]}},e:function(b){throw b},f:b}}throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')}var i,d,e=!0,f=!1;return{s:function(){i=h[Symbol.iterator]()},n:function(){var b=i.next();return e=b.done,b},e:function(b){f=!0,d=b},f:function a(){try{a||null==i['return']||i['return']()}finally{if(f)throw d}}}}function n(d,e){if(d){if('string'==typeof d)return o(d,e);var b=Object.prototype.toString.call(d).slice(8,-1);return'Object'===b&&d.constructor&&(b=d.constructor.name),'Map'===b||'Set'===b?Array.from(d):'Arguments'===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)?o(d,e):void 0}}function o(e,a){(null==a||a>e.length)&&(a=e.length);for(var b=0,c=Array(a);b<a;b++)c[b]=e[b];return c}c.r(b),c.d(b,'todoList',function(){return y});var p=function(){function h(a){d(this,h),this.tarea=a,this.id=new Date().getTime(),this.completado=!1,this.creado=new Date}return f(h,null,[{key:'fromJson',value:function(a){var b=a.id,c=a.tarea,d=a.completado,e=a.creado,f=new h(c);return f.id=b,f.completado=d,f.creado=e,f}}]),h}(),q=function(){function b(){j(this,b),this.cargarLocalStorage()}return l(b,[{key:'nuevoTodo',value:function(b){this.todos.push(b),this.guardarLocalStorage()}},{key:'eliminarTodo',value:function(c){this.todos=this.todos.filter(function(a){return a.id!=c}),this.guardarLocalStorage()}},{key:'marcarCompletado',value:function(e){var a,b=g(this.todos);try{for(b.s();!(a=b.n()).done;){var c=a.value;if(c.id==e){c.completado=!c.completado,this.guardarLocalStorage();break}}}catch(c){b.e(c)}finally{b.f()}}},{key:'eliminarCompletados',value:function(){this.todos=this.todos.filter(function(b){return!b.completado}),this.guardarLocalStorage()}},{key:'guardarLocalStorage',value:function(){localStorage.setItem('todo',JSON.stringify(this.todos))}},{key:'cargarLocalStorage',value:function(){this.todos=localStorage.getItem('todo')?JSON.parse(localStorage.getItem('todo')):[],this.todos=this.todos.map(function(b){return p.fromJson(b)})}}]),b}(),r=document.querySelector('.todo-list'),s=document.querySelector('.new-todo'),t=document.querySelector('.clear-completed'),u=document.querySelector('.filters'),v=document.querySelectorAll('.filtro'),w=function(d){var a='\n    <li class="'.concat(d.completado?'completed':'','" data-id="').concat(d.id,'">\n\t\t<div class="view">\n\t\t\t<input class="toggle" type="checkbox" ').concat(d.completado?'checked':'','>\n\t\t\t<label>').concat(d.tarea,'</label>\n\t\t\t<button class="destroy"></button>\n\t\t</div>\n\t    <input class="edit" value="Create a TodoMVC template">\n    </li>'),b=document.createElement('div');return b.innerHTML=a,r.append(b.firstElementChild),b.firstElementChild};s.addEventListener('keyup',function(c){if(13===c.keyCode&&0<s.value.length){console.log(s.value);var a=new p(s.value);y.nuevoTodo(a),w(a),s.value=''}}),r.addEventListener('click',function(e){var a=e.target.localName,b=e.target.parentElement.parentElement,c=b.getAttribute('data-id');a.includes('input')?(y.marcarCompletado(c),b.classList.toggle('completed')):a.includes('button')&&(y.eliminarTodo(c),r.removeChild(b))}),t.addEventListener('click',function(){y.eliminarCompletados();for(var c,a=r.children.length-1;0<=a;a--)c=r.children[a],c.classList.contains('completed')&&r.removeChild(c)}),u.addEventListener('click',function(g){var a=g.target.text;if(a){v.forEach(function(b){return b.classList.remove('selected')}),g.target.classList.add('selected');var b,c=m(r.children);try{for(c.s();!(b=c.n()).done;){var d=b.value;d.classList.remove('hidden');var e=d.classList.contains('completed');'Pendientes'===a?e&&d.classList.add('hidden'):'Completados'===a?e||d.classList.add('hidden'):void 0}}catch(b){c.e(b)}finally{c.f()}}});var x=c(0),y=new q;y.todos.forEach(w),console.log('todos',y.todos)}]);