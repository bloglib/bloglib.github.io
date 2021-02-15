(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34c9a112"],{"041b":function(t,e,a){"use strict";var i=a("8e1b"),s=a.n(i);s.a},"0c94":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg-icon",{style:t.svgStyle,attrs:{"icon-class":"explicit"}})},s=[],o=(a("a9e3"),a("0032")),n={name:"ExplicitSymbol",components:{SvgIcon:o["a"]},props:{size:{type:Number,default:16}},data:function(){return{svgStyle:{}}},created:function(){this.svgStyle={height:this.size+"px",width:this.size+"px"}}},r=n,l=a("2877"),c=Object(l["a"])(r,i,s,!1,null,"7e2a888e",null);e["a"]=c.exports},"0f0a":function(t,e,a){"use strict";var i=a("4fb2"),s=a.n(i);s.a},2508:function(t,e,a){"use strict";var i=a("c19a"),s=a.n(i);s.a},2726:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cover-row",class:{"without-padding":t.withoutPadding},style:t.rowStyles},t._l(t.items,(function(e){return a("div",{key:e.id,staticClass:"item",class:{artist:"artist"===t.type}},[a("Cover",{attrs:{imageUrl:t.getImageUrl(e),type:t.type,id:e.id}}),a("div",{staticClass:"text"},[t.showPlayCount?a("div",{staticClass:"info"},[a("span",{staticClass:"play-count"},[a("svg-icon",{attrs:{"icon-class":"play"}}),t._v(t._s(t._f("formatPlayCount")(e.playCount))+" ")],1)]):t._e(),a("div",{staticClass:"title",style:{fontSize:t.subTextFontSize}},[t.isExplicit(e)?a("span",{staticClass:"explicit-symbol"},[a("ExplicitSymbol")],1):t._e(),t.isPrivacy(e)?a("span",{staticClass:"lock-icon"},[a("svg-icon",{attrs:{"icon-class":"lock"}})],1):t._e(),a("router-link",{attrs:{to:t.getTitleLink(e)}},[t._v(t._s(e.name))])],1),"artist"!==t.type&&"none"!==t.subText?a("div",{staticClass:"info"},[a("span",{domProps:{innerHTML:t._s(t.getSubText(e))}})]):t._e()])],1)})),0)},s=[],o=(a("a4d3"),a("e01a"),a("99af"),a("b0c0"),a("a9e3"),a("ac1f"),a("1276"),a("3020")),n=a("0c94"),r={name:"CoverRow",components:{Cover:o["a"],ExplicitSymbol:n["a"]},props:{items:{type:Array,required:!0},type:{type:String,required:!0},subText:{type:String,default:"null"},subTextFontSize:{type:String,default:"16px"},showPlayCount:{type:Boolean,default:!1},columnNumber:{type:Number,default:5},gap:{type:String,default:"44px 24px"},withoutPadding:{type:Boolean,default:!1}},computed:{rowStyles:function(){return{"grid-template-columns":"repeat(".concat(this.columnNumber,", 1fr)"),gap:this.gap}}},methods:{getSubText:function(t){if("copywriter"===this.subText)return t.copywriter;if("description"===this.subText)return t.description;if("updateFrequency"===this.subText)return t.updateFrequency;if("creator"===this.subText)return"by "+t.creator.nickname;if("releaseYear"===this.subText)return new Date(t.publishTime).getFullYear();if("artist"===this.subText){if(void 0!==t.artist)return'<a href="/#/artist/'.concat(t.artist.id,'">').concat(t.artist.name,"</a>");if(void 0!==t.artists)return'<a href="/#/artist/'.concat(t.artists[0].id,'">').concat(t.artists[0].name,"</a>")}if("albumType+releaseYear"===this.subText){var e=t.type;return"EP/Single"===t.type?e=1===t.size?"Single":"EP":"Single"===t.type?e="Single":"专辑"===t.type&&(e="Album"),"".concat(e," · ").concat(new Date(t.publishTime).getFullYear())}return"appleMusic"===this.subText?"by Apple Music":void 0},isPrivacy:function(t){return"playlist"===this.type&&10===t.privacy},isExplicit:function(t){return"album"===this.type&&1056768===t.mark},getTitleLink:function(t){return"/".concat(this.type,"/").concat(t.id)},getImageUrl:function(t){if(t.img1v1Url){var e=t.img1v1Url.split("/");if(e=e[e.length-1],"5639395138885805.jpg"===e)return"https://p2.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg?param=512y512"}var a=t.img1v1Url||t.picUrl||t.coverImgUrl;return"".concat(a,"?param=512y512")}}},l=r,c=(a("2508"),a("2877")),u=Object(c["a"])(l,i,s,!1,null,"20835ae4",null);e["a"]=u.exports},"2c46":function(t,e,a){"use strict";var i=a("862d"),s=a.n(i);s.a},3020:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cover",class:{"cover-hover":t.coverHover},on:{mouseover:function(e){t.focus=!0},mouseleave:function(e){t.focus=!1},click:function(e){t.clickCoverToPlay?t.play():t.goTo()}}},[a("div",{staticClass:"cover-container"},[a("div",{staticClass:"shade"},[a("button",{directives:[{name:"show",rawName:"v-show",value:t.focus,expression:"focus"}],staticClass:"play-button",style:t.playButtonStyles,on:{click:function(e){return e.stopPropagation(),t.play()}}},[a("svg-icon",{attrs:{"icon-class":"play"}})],1)]),a("img",{style:t.imageStyles,attrs:{src:t.imageUrl}}),t.coverHover||t.alwaysShowShadow?a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.focus||t.alwaysShowShadow,expression:"focus || alwaysShowShadow"}],staticClass:"shadow",style:t.shadowStyles})]):t._e()],1)])},s=[],o=(a("a9e3"),{props:{id:{type:Number,required:!0},type:{type:String,required:!0},imageUrl:{type:String,required:!0},fixedSize:{type:Number,default:0},playButtonSize:{type:Number,default:22},coverHover:{type:Boolean,default:!0},alwaysShowPlayButton:{type:Boolean,default:!0},alwaysShowShadow:{type:Boolean,default:!1},clickCoverToPlay:{type:Boolean,default:!1},shadowMargin:{type:Number,default:12},radius:{type:Number,default:12}},data:function(){return{focus:!1}},computed:{imageStyles:function(){var t={};return 0!==this.fixedSize&&(t.width=this.fixedSize+"px",t.height=this.fixedSize+"px"),"artist"===this.type&&(t.borderRadius="50%"),t},playButtonStyles:function(){var t={};return t.width=this.playButtonSize+"%",t.height=this.playButtonSize+"%",t},shadowStyles:function(){var t={};return t.backgroundImage="url(".concat(this.imageUrl,")"),"artist"===this.type&&(t.borderRadius="50%"),t}},methods:{play:function(){var t=this.$store.state.player,e={album:t.playAlbumByID,playlist:t.playPlaylistByID,artist:t.playArtistByID};e[this.type].bind(t)(this.id)},goTo:function(){this.$router.push({name:this.type,params:{id:this.id}})}}}),n=o,r=(a("2c46"),a("2877")),l=Object(r["a"])(n,i,s,!1,null,"f1a38860",null);e["a"]=l.exports},"4fb2":function(t,e,a){},"5e45":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{class:t.color,style:t.buttonStyle},[null!==t.iconClass?a("svg-icon",{style:{marginRight:t.iconButton?"0px":"8px"},attrs:{iconClass:t.iconClass}}):t._e(),t._t("default")],2)},s=[],o=(a("a9e3"),{name:"ButtonTwoTone",props:{iconClass:{type:String,default:null},iconButton:{type:Boolean,default:!1},horizontalPadding:{type:Number,default:16},color:{type:String,default:"blue"},backgroundColor:{type:String,default:""},textColor:{type:String,default:""},shape:{type:String,default:"square"}},computed:{buttonStyle:function(){var t={borderRadius:"round"===this.shape?"50%":"8px",padding:"8px ".concat(this.horizontalPadding,"px"),width:"round"===this.shape?"38px":"auto"};return""!==this.backgroundColor&&(t.backgroundColor=this.backgroundColor),""!==this.textColor&&(t.color=this.textColor),t}}}),n=o,r=(a("0f0a"),a("2877")),l=Object(r["a"])(n,i,s,!1,null,"18f7e8ba",null);e["a"]=l.exports},"862d":function(t,e,a){},"8e1b":function(t,e,a){},"91d0":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"explore"},[a("h1",[t._v(t._s(t.$t("explore.explore")))]),a("div",{staticClass:"buttons"},[t._l(t.settings.playlistCategories.filter((function(t){return t.enable})),(function(e){return a("div",{key:e.name,staticClass:"button",class:{active:e.name===t.activeCategory&&!t.showCatOptions},on:{click:function(a){return t.goToCategory(e.name)}}},[t._v(" "+t._s(e.name)+" ")])})),a("div",{staticClass:"button more",class:{active:t.showCatOptions},on:{click:function(e){t.showCatOptions=!t.showCatOptions}}},[a("svg-icon",{attrs:{"icon-class":"more"}})],1)],2),a("div",{staticClass:"panel",class:{show:t.showCatOptions}},t._l(t.allBigCats,(function(e){return a("div",{key:e,staticClass:"big-cat"},[a("div",{staticClass:"name"},[t._v(t._s(e))]),a("div",{staticClass:"cats"},t._l(t.getCatsByBigCat(e),(function(e){return a("div",{key:e.name,staticClass:"cat",class:{active:e.enable},on:{click:function(a){return t.toggleCat(e.name)}}},[a("span",[t._v(t._s(e.name))])])})),0)])})),0),a("div",{staticClass:"playlists"},[a("CoverRow",{attrs:{type:"playlist",items:t.playlists,subText:t.subText,showPlayButton:!0,showPlayCount:"排行榜"!==t.activeCategory,imageSize:"排行榜"!==t.activeCategory?512:1024}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!1===["推荐歌单","排行榜"].includes(t.activeCategory),expression:"['推荐歌单', '排行榜'].includes(activeCategory) === false"}],staticClass:"load-more"},[a("ButtonTwoTone",{directives:[{name:"show",rawName:"v-show",value:t.showLoadMoreButton&&t.hasMore,expression:"showLoadMoreButton && hasMore"}],attrs:{color:"grey",loading:t.loadingMore},nativeOn:{click:function(e){return t.getPlaylist(e)}}},[t._v(t._s(t.$t("explore.loadMore")))])],1)])},s=[],o=(a("4de4"),a("d0ff")),n=a("f3f3"),r=a("2f62"),l=a("323e"),c=a.n(l),u=a("1e9a"),p=a("5e45"),y=a("2726"),d=a("0032"),h={name:"Explore",components:{CoverRow:y["a"],ButtonTwoTone:p["a"],SvgIcon:d["a"]},data:function(){return{show:!1,playlists:[],activeCategory:"全部",loadingMore:!1,showLoadMoreButton:!1,hasMore:!0,allBigCats:["语种","风格","场景","情感","主题"],showCatOptions:!1}},computed:Object(n["a"])(Object(n["a"])({},Object(r["d"])(["settings"])),{},{subText:function(){return"排行榜"===this.activeCategory?"updateFrequency":"推荐歌单"===this.activeCategory?"copywriter":"none"}}),methods:Object(n["a"])(Object(n["a"])({},Object(r["c"])(["togglePlaylistCategory"])),{},{loadData:function(){this.show||c.a.start(),this.activeCategory=void 0===this.$route.query.category?"全部":this.$route.query.category,this.getPlaylist()},goToCategory:function(t){this.showCatOptions||this.$router.push({path:"/explore?category="+t})},updatePlaylist:function(t){var e;(e=this.playlists).push.apply(e,Object(o["a"])(t)),this.loadingMore=!1,this.showLoadMoreButton=!0,c.a.done(),this.show=!0},getPlaylist:function(){return this.loadingMore=!0,"推荐歌单"===this.activeCategory?this.getRecommendPlayList():"精品歌单"===this.activeCategory?this.getHighQualityPlaylist():"排行榜"===this.activeCategory?this.getTopLists():this.getTopPlayList()},getRecommendPlayList:function(){var t=this;Object(u["f"])({limit:100}).then((function(e){t.playlists=[],t.updatePlaylist(e.result)}))},getHighQualityPlaylist:function(){var t=this,e=this.playlists,a=0!==e.length?e[e.length-1].updateTime:0;Object(u["e"])({limit:50,before:a}).then((function(e){t.updatePlaylist(e.playlists),t.hasMore=e.more}))},getTopLists:function(){var t=this;Object(u["i"])().then((function(e){t.playlists=[],t.updatePlaylist(e.list)}))},getTopPlayList:function(){var t=this;Object(u["h"])({cat:this.activeCategory,offset:this.playlists.length}).then((function(e){t.updatePlaylist(e.playlists),t.hasMore=e.more}))},getCatsByBigCat:function(t){return this.settings.playlistCategories.filter((function(e){return e.bigCat===t}))},toggleCat:function(t){this.togglePlaylistCategory(t)}}),activated:function(){var t=this,e=function(){var e=t.$el.getElementsByClassName("panel")[0].children;t.$el.style.setProperty("--explore-panel-children-height","".concat(Math.abs(e[0].getBoundingClientRect().y-(e[e.length-1].getBoundingClientRect().y+e[e.length-1].clientHeight))+16,"px"))};window.addEventListener("load",e),window.addEventListener("resize",e),this.loadData()},beforeRouteUpdate:function(t,e,a){c.a.start(),this.showLoadMoreButton=!1,this.hasMore=!0,this.playlists=[],this.offset=1,this.activeCategory=t.query.category,this.getPlaylist(),a()}},f=h,g=(a("041b"),a("2877")),v=Object(g["a"])(f,i,s,!1,null,"5410b8e5",null);e["default"]=v.exports},c19a:function(t,e,a){},d0ff:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var i=a("b680");function s(t){if(Array.isArray(t))return Object(i["a"])(t)}a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("d3b7"),a("3ca3"),a("ddb0");function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var n=a("dde1");function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return s(t)||o(t)||Object(n["a"])(t)||r()}}}]);
//# sourceMappingURL=chunk-34c9a112.6466ea85.js.map