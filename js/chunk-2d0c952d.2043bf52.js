(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c952d"],{"593f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}},[a("half-circle-spinner",{attrs:{"animation-duration":1e3,size:60,color:"#835050"}})],1),a("div",{staticClass:"container"},[a("HomeNavbar"),a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb mt-1 bg-coffee"},[a("li",{staticClass:"breadcrumb-item breadcrumb-text-color"},[a("router-link",{attrs:{to:"/"}},[t._v("首頁")])],1),a("li",{staticClass:"breadcrumb-item breadcrumb-text-color"},[a("router-link",{attrs:{to:"/productlist"}},[t._v("旅遊景點")])],1),a("li",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.product.title))])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 col-lg-8 text-center my-auto"},[a("swiper",{attrs:{options:t.CarouselOption}},[a("swiper-slide",[a("img",{staticClass:"bg-item",attrs:{src:t.imgSrc}})]),a("swiper-slide",[a("img",{staticClass:"bg-item",attrs:{src:"https://i.imgur.com/7ZOYSCP.png"}})]),a("swiper-slide",[a("img",{staticClass:"bg-item",attrs:{src:"https://i.imgur.com/NZNEg9N.jpg"}})]),a("swiper-slide",[a("img",{staticClass:"bg-item",attrs:{src:"https://i.imgur.com/nEPB8Uu.jpg"}})]),a("swiper-slide",[a("img",{staticClass:"bg-item",attrs:{src:"https://i.imgur.com/5lXG6IE.jpg"}})]),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),a("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),a("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],1)],1),a("div",{staticClass:"col-md-12 col-lg-4 right-info"},[a("h4",{staticClass:"text-center text-bold text-coffee"},[t._v(t._s(t.product.title))]),a("hr"),a("div",{staticClass:"row"},[t.product.price?t._e():a("div",{staticClass:"col-md-12"},[t._v(t._s(t.product.origin_price)+" 元")]),t.product.price?a("del",{staticClass:"col-md-12 text-origin"},[t._v("原價 "+t._s(t.product.origin_price)+" 元")]):t._e(),a("div",{staticClass:"col-md-12 pt-3"},[t.product.price?a("div",{staticClass:"discountPrice text-danger"},[t._v(" 限時優惠 "+t._s(t.product.price)+" 元 ")]):t._e(),a("div",[a("i",{staticClass:"fas fa-stopwatch text-danger"}),a("span",{staticClass:"text-danger text-bold"},[t._v(" "+t._s(t.days+"天 "+t.hours+"時 "+t.minutes+"分 "+t.seconds+"秒")+" ")])])]),a("hr"),a("div",{staticClass:"col-md-12 pt-3"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.itemNum,expression:"itemNum"}],staticClass:"text-center form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.itemNum=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",disabled:"",selected:""}},[t._v("請選擇人數")]),t._l(9,(function(e){return a("option",{key:e,domProps:{value:e}},[t._v(" "+t._s(e)+" "+t._s(t.product.unit)+" ")])}))],2)]),t._m(0),t._m(1),t._m(2),a("div",{staticClass:"col-md-12 pt-1"},[t._v(" 小計："),a("span",{staticClass:"text-success"},[t._v(t._s(t.itemNum*t.product.price)+"元")])])]),a("hr"),a("button",{staticClass:"btn btn-coffee px-5 mt-2 w-100",on:{click:function(e){return e.preventDefault(),t.addtoCart(t.product.id,t.itemNum)}}},[t._v(" 加入購物車 ")]),a("button",{staticClass:"btn btn-danger px-5 mt-2 w-100",on:{click:function(e){return e.preventDefault(),t.goCheck(t.product.id,t.itemNum)}}},[t._v("直接結帳 ")]),t._m(3)])]),a("hr"),t._m(4),a("hr"),a("div",{staticClass:"col-md-12"},[a("h4",{staticClass:"text-center text-coffee text-bold py-3"},[t._v("【相關產品】")]),a("swiper",{attrs:{options:t.SwiperOption}},t._l(t.filterProduct,(function(e,s){return a("swiper-slide",{key:s,staticClass:"swiper-box px-1"},[a("a",{staticClass:"hvr-bob",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.gotoProduct(e.id)}}},[a("span",{staticClass:"swiper-position mr-3 mt-2 p-1"},[t._v(t._s(e.title))]),a("img",{staticClass:"bg-carousel",attrs:{src:e.imageUrl}})])])})),1)],1),a("hr"),a("h4",{staticClass:"text-center text-coffee text-bold py-3"},[t._v("【報名須知】")]),a("div",{staticClass:"accordion text-center",attrs:{id:"accordionExample"}},[a("div",{staticClass:"card",on:{click:function(e){t.point=1}}},[a("button",{staticClass:"btn description-btn collapse-item",class:{"btn-coffee , active":1===t.point},attrs:{type:"button","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}},[a("h6",{class:{"text-white , active":1===t.point}},[t._v("報名須知與注意事項")])]),t._m(5)]),a("div",{staticClass:"card",on:{click:function(e){t.point=2}}},[a("button",{staticClass:"btn collapsed description-btn",class:{"btn-coffee , active":2===t.point},attrs:{type:"button","data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"}},[a("h6",{class:{"text-white , active":2===t.point}},[t._v("報名繳款方式")])]),t._m(6)]),a("div",{staticClass:"card",on:{click:function(e){t.point=3}}},[a("button",{staticClass:"btn collapsed description-btn",class:{"btn-coffee , active":3===t.point},attrs:{type:"button","data-toggle":"collapse","data-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"}},[a("h6",{class:{"text-white , active":3===t.point}},[t._v("報名費用相關問題")])]),t._m(7)])]),a("Footer")],1)],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-12 pt-3 text-coffee"},[a("i",{staticClass:"far fa-clock"}),a("small",{staticClass:"pl-2"},[t._v("24小時內確認訂單")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-12 pt-1 text-coffee"},[a("i",{staticClass:"fas fa-user-tie"}),a("small",{staticClass:"pl-2"},[t._v("優秀專業人員服務")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-12 pt-1 text-coffee"},[a("i",{staticClass:"far fa-grin-beam"}),a("small",{staticClass:"pl-2"},[t._v("最優惠的價格")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("small",{staticClass:"pt-2 d-block text-coffee"},[t._v(" 購買即視為同意"),a("br"),t._v("取消政策 取消訂單，將收取所有實際產生費用 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-12"},[a("h4",{staticClass:"text-center text-coffee text-bold"},[t._v("【產品介紹】")]),a("ul",{staticClass:"list py-2"},[a("li",[t._v(" 如果你想要去歐洲大城市採購、買各種奢侈品香水化妝品之類的， 享受低廉的價格，那麼法國巴黎的老佛爺、英國倫敦的商業街、 義大利米蘭的名牌店是不能錯過的三條最重要線路， 當然在比利時的安特衛普的時尚街也可以買到西歐最時尚的服飾， 北歐的丹麥瑞典首都也都可以買到最棒的北歐時尚品牌服裝。 總體來說歐洲最潮的就在西歐、北歐，以及義大利，西班牙的時尚產業比較一般。 ")]),a("br"),a("li",[t._v(" 如果你比較喜歡自然風景，那麼瑞士、挪威、冰島、法國都算是很好的選擇， 不但可以看到峽灣、山川、冰川還能看到各種高地、河流、花園、湖泊、溫泉， 尤其是北歐的挪威、冰島、瑞典、芬蘭冬天的時候可以看到極光，夏天就可以享受24小時日光沐浴的極晝。 ")]),a("br"),a("li",[t._v(" 如果你喜歡歷史建築，那麼歐洲最美的未被破壞過的首都應該算是布拉格了。 二戰期間只有這座城市希特勒下令沒有破壞，還保持著歷史的原貌， 其他大部分歐洲國家都被炸的滿目瘡痍，雖然歐洲重建工作非常好， 能夠按照原貌建起來，但是要想看到最純粹的歐洲古建築那就是這裡了。 ")]),a("br"),a("li",[t._v(" 如果你喜歡文化歷史藝術，參觀博物館是個很好的選擇， 知名的包括倫敦的大英博物館，巴黎的羅浮宮、奧賽博物館，梵蒂岡的博物館、佛羅倫斯的烏菲齊藝術館， 大英博物館和羅浮宮有來自世界各地的展品，大部分是通過戰爭搶奪過來的。不過因為他們的保存質量很高， 也讓這些文物能夠得以很好的留存下來並展示給世界各地的人們欣賞。 ")]),a("br"),a("li",[t._v(" 如果你比較喜歡看宮殿和城堡， 那麼法國的羅浮宮、楓丹白露、愛麗舍宮， 德國波茲坦的無憂宮、奧地利的美泉宮，俄羅斯的克利姆林宮、羅馬的金宮， 梵蒂岡宮殿、盧森堡宮、英國的白金漢宮等都是不可錯過的地方。 ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"collapse",attrs:{id:"collapseOne","aria-labelledby":"headingOne","data-parent":"#accordionExample"}},[a("div",{staticClass:"card-body"},[a("ul",{staticClass:"text-left"},[a("li",[t._v(" 此行程20人成團，屬超值特惠行程，此行程採合車合團方式走團，但不因此而影響行程。 ")]),a("li",[t._v("本商品嬰兒定義：限制0~3歲以下，不含車位及其他活動費用，僅含保險及作業費用。")]),a("li",[t._v(" 此行程可依當天人數、活動節慶或天候等…因素，由領隊調整行程順序，本公司不另公告。 ")]),a("li",[t._v(" 請於規定時間內準時集合，行程中如旅客因個人因素私自脫隊或集合不到，本公司不予退費。 ")]),a("li",[t._v(" 以上行程所載明之行車時間僅供參考，因路況或假日車流過大時，行程順序或時間將視實際情況調整。 ")]),a("li",[t._v("如有身體不適請自備個人隨身藥品：如暈車藥、感冒藥、防蚊蟲液...等。")]),a("li",[t._v("山區氣候溫差較大，敬請自備禦寒衣物及雨具。")]),a("li",[t._v("若遇天候不佳或不可抗拒之因素，本公司保有取消或變更行程的權利。")]),a("li",[t._v("旅客同意，本商品經訂購付款後，如要取消或延期所衍生之費用需自行負責。")]),a("li",[t._v(" 通知取消日需以人事行政局公告之正常上班時間為依準，超過時間以下個工作日計算，敬請見諒。 ")]),a("li",[t._v("行程內包含的活動項目為『附加贈送』放棄者恕不退費。")]),a("li",[t._v(" 本商品經訂購付款完成後，視同雙方同意簽屬觀光局發布的【國內旅遊定型化契約書】"),a("br"),t._v(" 恕無法任意更改日期及行程，如要取消或延期將按照契約收取相關費用。 ")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"collapse",attrs:{id:"collapseTwo","aria-labelledby":"headingTwo","data-parent":"#accordionExample"}},[a("div",{staticClass:"card-body"},[a("ul",{staticClass:"text-left"},[a("li",[t._v("報名：請直接在網路上填妥訂購單，並送出資料，即完成報名程序。")]),a("li",[t._v("線上預約並非保證訂位成功，仍需以客服人員回覆確認為準。")]),a("li",[t._v("請詳列姓名，生日，身分證字號。以利保險作業。另素食者請事前告知。")]),a("li",[t._v("繳費：在行程確認（業務人員通知確認）之後，請於規定的時間內繳清團費。")]),a("li",[t._v("如需任何服務請電冾客服人員02-25612999。我們將竭誠為您服務！")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"collapse",attrs:{id:"collapseThree","aria-labelledby":"headingThree","data-parent":"#accordionExample"}},[a("div",{staticClass:"card-body"},[a("ul",{staticClass:"text-left"},[a("h6",[t._v("【費用包含】")]),a("li",[t._v("一日車資")]),a("li",[t._v("行程各景點門票")]),a("li",[t._v("每位旅客享200萬旅遊責任險+20萬醫療險")])]),a("ul",{staticClass:"text-left"},[a("h6",[t._v("【費用不包含】")]),a("li",[t._v("旅遊景點精緻伴手禮")]),a("li",[t._v("提醒您別忘了給予辛勞的司導人員嘉勉鼓勵，依照國際禮儀小費每人每天100元。")])])])])}],c=(a("99af"),a("4de4"),a("a434"),a("4583")),r=(a("a7a3"),a("7212")),o=a("8dd1"),l=a("fd2d"),n={components:{HomeNavbar:o["a"],HalfCircleSpinner:c["a"],Footer:l["a"],swiper:r["swiper"],swiperSlide:r["swiperSlide"]},data:function(){return{CarouselOption:{spaceBetween:30,speed:600,parallax:!0,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:4500,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},SwiperOption:{slidesPerView:3,spaceBetween:30,freeMode:!0,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{1024:{slidesPerView:3,spaceBetween:30},768:{slidesPerView:2,spaceBetween:20},450:{slidesPerView:1,spaceBetween:10}}},local:"",countDownDate:"",days:0,hours:0,minutes:0,seconds:0,distance:0,title:"",price:"",qty:"",categoryData:"",imgSrc:"",detailId:"",itemNum:"0",product:{},products:{},filterProduct:{},status:{loadingItem:""},isLoading:!1,cart:"",point:""}},methods:{getProduct:function(t){var e=this,a="".concat("https://vue-course-api.herokuapp.com","/api/").concat("travel590","/product/").concat(t);e.isLoading=!0,e.$http.get(a).then((function(t){e.product=t.data.product,e.product.num=0,e.itemNum=e.product.num,e.imgSrc=t.data.product.imageUrl,e.isLoading=!1,e.categoryData=t.data.product.category,e.getProducts(e.categoryData)}))},getProducts:function(t){var e=this,a="".concat("https://vue-course-api.herokuapp.com","/api/").concat("travel590","/products/all");e.$http.get(a).then((function(a){e.products=a.data.products,e.filterProduct=e.products.filter((function(e){return e.category===t})),e.filterProduct.splice(t,1)}))},gotoProduct:function(t){this.$router.push("/product/".concat(t)),window.location.reload()},addtoCart:function(t,e){0!==e?this.$bus.$emit("updateSameCart",t,e):this.$bus.$emit("message:push","請選擇正確人數","danger")},goCheck:function(t,e){var a=this;0!==e?(this.$bus.$emit("updateSameCart",t,e),this.$router.push("/checkout"),setTimeout((function(){a.$bus.$emit("updateStep")}),1e3)):this.$bus.$emit("message:push","請先選擇數量","danger")}},created:function(){var t=this;t.detailId=t.$route.params.detailId,t.getProduct(t.detailId),t.getProducts()},mounted:function(){var t=this;t.countDownDate=new Date("Dec 1 2020 00:00:00").getTime(),setInterval((function(){var e=(new Date).getTime();t.distance=t.countDownDate-e,t.days=Math.floor(t.distance/864e5),t.hours=Math.floor(t.distance%864e5/36e5),t.minutes=Math.floor(t.distance%36e5/6e4),t.seconds=Math.floor(t.distance%6e4/1e3),t.distance<0&&t.distance<864e5&&(t.countDownDate+=31536e6)}),1e3)},destroyed:function(){this.$bus.$off("updateSameCart")}},d=n,p=a("2877"),u=Object(p["a"])(d,s,i,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0c952d.2043bf52.js.map