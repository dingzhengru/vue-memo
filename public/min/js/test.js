"use strict";var app=new Vue({el:"#app",data:{message:"Hello Vue!"}}),app2=new Vue({el:"#app2",data:{seen:!0}}),app3=new Vue({el:"#app3",data:{todos:[{text:"Learn JavaScript"},{text:"Learn Vue"},{text:"Build something awesome"}]}}),app4=new Vue({el:"#app4",data:{message:"Hello Vue.js"},methods:{reverseMessage:function(){this.message=this.message.split("").reverse().join("")}}}),app5=new Vue({el:"#app5",data:{message:"Hi v-model"}});Vue.component("greeter",{props:["name"],template:"<div> Hello, {{ name }}!</div>"});var app6=new Vue({el:"#app6",data:{}}),obj={foo:"foo"};Object.freeze(obj);var app7=new Vue({el:"#app7",data:obj}),d={a:1},vm=new Vue({data:d});new Vue({data:{a:1},beforeCreate:function(){console.log("beforeCreate")},created:function(){console.log("created")},beforeMount:function(){console.log("beforeMount")},mounted:function(){console.log("mounted")},beforeDestory:function(){console.log("beforeDestory")},destory:function(){console.log("destory")}});var app8=new Vue({el:"#app8",data:{msg:"content",rawHtml:'<span style="color: red">This should be red.</span>',isButtonDisabled:!0,number:1,url:"/",onSubmit:function(){console.log("Submit")},doSomething:function(e){console.log(e)},attr:"href",e:"mouseover"}}),app9=new Vue({el:"#app9",data:{msg:"message",username:"",errMsg:""},methods:{reverseText:function(e){return String(e).split("").reverse().join("")},usernameValid:function(e){var t=[];return e||t.push("不可為空"),/^[0-9]/.test(e)&&t.push("使用者名稱開頭不可為數字"),/\s/.test(e)&&t.push("不可以有特殊字元"),t&&0!=t.length||t.push("合法的使用者名稱"),t.join(", ")}},watch:{username:function(e){this.errMsg=this.usernameValid(e)}}}),app10=new Vue({el:"#app10",data:{isGood:!1,hasError:!0,error:null,activeClass:"static",errorClass:"text-danger",activeColor:"green",activeFontSize:28,classObject:{isGood:!0,hasError:!1},classFunction:function(){return{static:this.isGood&&!this.error,"text-danger":this.error}}}}),app11=new Vue({el:"#app11",data:{type:"",types:["A","B","C","D"]},created:function(){this.type=this.types[Math.floor(4*Math.random())]}}),app12=new Vue({el:"#app12",data:{items:[{message:"foo"},{message:"bar"}],obj:{title:"How to do lists in Vue",author:"Jane Doe",publishedAt:"2016-04-10"}},methods:{setNewItems:function(){this.items=[{message:"new foo"},{message:"new bar"}]},setOldItems:function(){Vue.set(this.items,0,{message:"foo"}),Vue.set(this.items,1,{message:"bar"})},setNewObject:function(){Vue.set(this.obj,"author","Ding"),Vue.set(this.obj,"age",18)},setOldObject:function(){this.obj={title:"How to do lists in Vue",author:"Jane Doe",publishedAt:"2016-04-10"}}}}),app13=new Vue({el:"#app13",data:{searchText:"123",numbers:[1,2,3,4,5,6,7,8,9],products:[{name:"cookie",price:100},{name:"tea",price:200}]},computed:{productsFilter:function(){return this.searchProductsByAll(this.searchText)}},methods:{even:function(e){return e.filter(function(e){return e%2==0})},searchProductsByAll:function(o){return this.products.filter(function(e){for(var t in e)if(console.log(String(e[t]),o,String(e[t]).includes(o)),String(e[t]).includes(o))return e})}}}),app14=new Vue({el:"#app14",data:{inputText:"",nodes:[{text:"defaultNode01"},{text:"defaultNode02"},{text:"defaultNode03"}]},methods:{addNode:function(e){this.nodes.push(e)},removeNode:function(e,t){console.log("remove:",t),this.nodes.splice(this.nodes.indexOf(e),1)}}}),app15=new Vue({el:"#app15",data:{clickEvent:function(e,t){console.log(t.type),console.log(t.target),console.log(t.target.tagName),console.log(t.target.id),console.log(t.target.style.color)}},methods:{doThis:function(e){console.log("doThis")},doThat:function(e){console.log("doThat")},onSubmit:function(e){console.log("submit")},onScroll:function(e){console.log("scroll")},onEnter:function(e){console.log("Enter")},onSpace:function(e){console.log("Space")},onOnlyCtrl:function(e){console.log("Only Press Ctrl")}}}),app16=new Vue({el:"#app16",data:{msg:"default msg",checkedNames:[],picked:null,selected:"default000",checkboxValue:"this is true-value",radioValue:null,a:"123123",lazyTest:"",numberTest:"",trimTest:"",multiSelected:[]}});Vue.component("button-counter",{data:function(){return{count:0}},template:'<button v-on:click="count++">\n                  You clicked me {{ count }} times.\n               </button>'}),Vue.component("blog-post",{props:["title","id"],template:"<h3>Title: {{ id }} {{ title }}</h3>"}),Vue.component("good-blog-post",{props:["post"],template:'\n        <div class="blog-post">\n            <h3>{{ post.title }}</h3>\n            <div v-html="post.content"></div>\n        </div>\n    '}),Vue.component("event-blog-post",{props:["post"],template:'\n        <div class="blog-post">\n            <button v-on:click="$emit(\'enlarge-text\', 2)">Enlarge text</button>\n        </div>\n    '}),Vue.component("custom-input",{props:["value"],template:'\n    <input\n      v-bind:value="value"\n      v-on:input="$emit(\'input\', $event.target.value)"\n    >\n  '});var app17=new Vue({el:"#app17",data:{postFontSize:1,posts:[{id:1,title:"title1",content:"content1"}],searchText:"123123"},methods:{onEnlargeText:function(e){this.postFontSize+=e}}}),app18=new Vue({el:"#app18",data:{}});