(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ba440ae"],{"03f2":function(t,e,s){"use strict";var a=s("29d6"),i=s.n(a);i.a},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"20e9":function(t,e,s){"use strict";var a=s("bda3"),i=s.n(a);i.a},2508:function(t,e,s){"use strict";var a=s("c19a"),i=s.n(a);i.a},2726:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cover-row",class:{"without-padding":t.withoutPadding},style:t.rowStyles},t._l(t.items,(function(e){return s("div",{key:e.id,staticClass:"item",class:{artist:"artist"===t.type}},[s("Cover",{attrs:{imageUrl:t.getImageUrl(e),type:t.type,id:e.id}}),s("div",{staticClass:"text"},[t.showPlayCount?s("div",{staticClass:"info"},[s("span",{staticClass:"play-count"},[s("svg-icon",{attrs:{"icon-class":"play"}}),t._v(t._s(t._f("formatPlayCount")(e.playCount))+" ")],1)]):t._e(),s("div",{staticClass:"title",style:{fontSize:t.subTextFontSize}},[t.isExplicit(e)?s("span",{staticClass:"explicit-symbol"},[s("ExplicitSymbol")],1):t._e(),t.isPrivacy(e)?s("span",{staticClass:"lock-icon"},[s("svg-icon",{attrs:{"icon-class":"lock"}})],1):t._e(),s("router-link",{attrs:{to:t.getTitleLink(e)}},[t._v(t._s(e.name))])],1),"artist"!==t.type&&"none"!==t.subText?s("div",{staticClass:"info"},[s("span",{domProps:{innerHTML:t._s(t.getSubText(e))}})]):t._e()])],1)})),0)},i=[],r=(s("a4d3"),s("e01a"),s("99af"),s("b0c0"),s("a9e3"),s("ac1f"),s("1276"),s("3020")),n=s("0c94"),o={name:"CoverRow",components:{Cover:r["a"],ExplicitSymbol:n["a"]},props:{items:{type:Array,required:!0},type:{type:String,required:!0},subText:{type:String,default:"null"},subTextFontSize:{type:String,default:"16px"},showPlayCount:{type:Boolean,default:!1},columnNumber:{type:Number,default:5},gap:{type:String,default:"44px 24px"},withoutPadding:{type:Boolean,default:!1}},computed:{rowStyles:function(){return{"grid-template-columns":"repeat(".concat(this.columnNumber,", 1fr)"),gap:this.gap}}},methods:{getSubText:function(t){if("copywriter"===this.subText)return t.copywriter;if("description"===this.subText)return t.description;if("updateFrequency"===this.subText)return t.updateFrequency;if("creator"===this.subText)return"by "+t.creator.nickname;if("releaseYear"===this.subText)return new Date(t.publishTime).getFullYear();if("artist"===this.subText){if(void 0!==t.artist)return'<a href="/#/artist/'.concat(t.artist.id,'">').concat(t.artist.name,"</a>");if(void 0!==t.artists)return'<a href="/#/artist/'.concat(t.artists[0].id,'">').concat(t.artists[0].name,"</a>")}if("albumType+releaseYear"===this.subText){var e=t.type;return"EP/Single"===t.type?e=1===t.size?"Single":"EP":"Single"===t.type?e="Single":"专辑"===t.type&&(e="Album"),"".concat(e," · ").concat(new Date(t.publishTime).getFullYear())}return"appleMusic"===this.subText?"by Apple Music":void 0},isPrivacy:function(t){return"playlist"===this.type&&10===t.privacy},isExplicit:function(t){return"album"===this.type&&1056768===t.mark},getTitleLink:function(t){return"/".concat(this.type,"/").concat(t.id)},getImageUrl:function(t){if(t.img1v1Url){var e=t.img1v1Url.split("/");if(e=e[e.length-1],"5639395138885805.jpg"===e)return"https://p2.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg?param=512y512"}var s=t.img1v1Url||t.picUrl||t.coverImgUrl;return"".concat(s,"?param=512y512")}}},l=o,c=(s("2508"),s("2877")),u=Object(c["a"])(l,a,i,!1,null,"20835ae4",null);e["a"]=u.exports},"29d6":function(t,e,s){},"2c46":function(t,e,s){"use strict";var a=s("862d"),i=s.n(a);i.a},3020:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cover",class:{"cover-hover":t.coverHover},on:{mouseover:function(e){t.focus=!0},mouseleave:function(e){t.focus=!1},click:function(e){t.clickCoverToPlay?t.play():t.goTo()}}},[s("div",{staticClass:"cover-container"},[s("div",{staticClass:"shade"},[s("button",{directives:[{name:"show",rawName:"v-show",value:t.focus,expression:"focus"}],staticClass:"play-button",style:t.playButtonStyles,on:{click:function(e){return e.stopPropagation(),t.play()}}},[s("svg-icon",{attrs:{"icon-class":"play"}})],1)]),s("img",{style:t.imageStyles,attrs:{src:t.imageUrl}}),t.coverHover||t.alwaysShowShadow?s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.focus||t.alwaysShowShadow,expression:"focus || alwaysShowShadow"}],staticClass:"shadow",style:t.shadowStyles})]):t._e()],1)])},i=[],r=(s("a9e3"),{props:{id:{type:Number,required:!0},type:{type:String,required:!0},imageUrl:{type:String,required:!0},fixedSize:{type:Number,default:0},playButtonSize:{type:Number,default:22},coverHover:{type:Boolean,default:!0},alwaysShowPlayButton:{type:Boolean,default:!0},alwaysShowShadow:{type:Boolean,default:!1},clickCoverToPlay:{type:Boolean,default:!1},shadowMargin:{type:Number,default:12},radius:{type:Number,default:12}},data:function(){return{focus:!1}},computed:{imageStyles:function(){var t={};return 0!==this.fixedSize&&(t.width=this.fixedSize+"px",t.height=this.fixedSize+"px"),"artist"===this.type&&(t.borderRadius="50%"),t},playButtonStyles:function(){var t={};return t.width=this.playButtonSize+"%",t.height=this.playButtonSize+"%",t},shadowStyles:function(){var t={};return t.backgroundImage="url(".concat(this.imageUrl,")"),"artist"===this.type&&(t.borderRadius="50%"),t}},methods:{play:function(){var t=this.$store.state.player,e={album:t.playAlbumByID,playlist:t.playPlaylistByID,artist:t.playArtistByID};e[this.type].bind(t)(this.id)},goTo:function(){this.$router.push({name:this.type,params:{id:this.id}})}}}),n=r,o=(s("2c46"),s("2877")),l=Object(o["a"])(n,a,i,!1,null,"f1a38860",null);e["a"]=l.exports},"4e22":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"search"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.artists.length>0||t.albums.length>0,expression:"artists.length > 0 || albums.length > 0"}],staticClass:"row"},[s("div",{staticClass:"artists"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.artists.length>0,expression:"artists.length > 0"}],staticClass:"section-title"},[t._v(t._s(t.$t("search.artist"))),s("router-link",{attrs:{to:"/search/"+t.keywords+"/artists"}},[t._v(t._s(t.$t("home.seeMore")))])],1),s("CoverRow",{attrs:{type:"artist",columnNumber:3,items:t.artists.slice(0,3),gap:"34px 24px",withoutPadding:!0}})],1),s("div",{staticClass:"albums"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.albums.length>0,expression:"albums.length > 0"}],staticClass:"section-title"},[t._v(t._s(t.$t("search.album"))),s("router-link",{attrs:{to:"/search/"+t.keywords+"/albums"}},[t._v(t._s(t.$t("home.seeMore")))])],1),s("CoverRow",{attrs:{type:"album",items:t.albums.slice(0,3),subText:"artist",columnNumber:3,subTextFontSize:"14px",gap:"34px 24px",withoutPadding:!0}})],1)]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.tracks.length>0,expression:"tracks.length > 0"}],staticClass:"tracks"},[s("div",{staticClass:"section-title"},[t._v(t._s(t.$t("search.song"))),s("router-link",{attrs:{to:"/search/"+t.keywords+"/tracks"}},[t._v(t._s(t.$t("home.seeMore")))])],1),s("TrackList",{attrs:{tracks:t.tracks,type:"tracklist",withoutPadding:!0}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:t.musicVideos.length>0,expression:"musicVideos.length > 0"}],staticClass:"music-videos"},[s("div",{staticClass:"section-title"},[t._v(t._s(t.$t("search.mv"))),s("router-link",{attrs:{to:"/search/"+t.keywords+"/music-videos"}},[t._v(t._s(t.$t("home.seeMore")))])],1),s("MvRow",{attrs:{mvs:t.musicVideos.slice(0,5),withoutPadding:!0}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:t.playlists.length>0,expression:"playlists.length > 0"}],staticClass:"playlists"},[s("div",{staticClass:"section-title"},[t._v(t._s(t.$t("search.playlist"))),s("router-link",{attrs:{to:"/search/"+t.keywords+"/playlists"}},[t._v(t._s(t.$t("home.seeMore")))])],1),s("CoverRow",{attrs:{type:"playlist",items:t.playlists.slice(0,12),subText:"title",columnNumber:6,subTextFontSize:"14px",gap:"34px 24px",withoutPadding:!0}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.haveResult,expression:"!haveResult"}],staticClass:"no-results"},[s("div",[s("svg-icon",{attrs:{"icon-class":"search"}}),t._v(" "+t._s(0===t.keywords.length?"输入关键字搜索":t.$t("search.noResult")))],1)])])},i=[],r=(s("7db0"),s("a15b"),s("d81d"),s("d3b7"),s("ac1f"),s("3ca3"),s("841c"),s("ddb0"),s("fefb")),n=s("dad3"),o=s("323e"),l=s.n(o),c=s("a1a1"),u=s("d4e3"),d=s("2726"),v={name:"Search",components:{TrackList:c["a"],MvRow:u["a"],CoverRow:d["a"]},data:function(){return{show:!1,tracks:[],artists:[],albums:[],playlists:[],musicVideos:[]}},computed:{keywords:function(){var t;return null!==(t=this.$route.params.keywords)&&void 0!==t?t:""},haveResult:function(){return this.tracks.length+this.artists.length+this.albums.length+this.playlists.length+this.musicVideos.length>0}},methods:{playTrackInSearchResult:function(t){var e=this.tracks.find((function(e){return e.id===t}));this.$store.state.player.appendTrackToPlayerList(e,!0)},search:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",e={all:1018,musicVideos:1004,tracks:1,albums:10,artists:100,playlists:1e3};return Object(n["a"])({keywords:this.keywords,type:e[t],limit:16}).then((function(e){return{result:e.result,type:t}}))},getData:function(){var t=this;l.a.start(),this.show=!1;var e=function(e){var s=t.keywords;Promise.all(e).then((function(e){s==t.keywords&&(e.map((function(e){var s,a,i,r,n,o=e.type;if(void 0!==e.result)switch(e=e.result,o){case"all":t.result=e;break;case"musicVideos":t.musicVideos=null!==(s=e.mvs)&&void 0!==s?s:[];break;case"artists":t.artists=null!==(a=e.artists)&&void 0!==a?a:[];break;case"albums":t.albums=null!==(i=e.albums)&&void 0!==i?i:[];break;case"tracks":t.tracks=null!==(r=e.songs)&&void 0!==r?r:[],t.getTracksDetail();break;case"playlists":t.playlists=null!==(n=e.playlists)&&void 0!==n?n:[];break}})),l.a.done(),t.show=!0)}))},s=[this.search("artists"),this.search("albums"),this.search("tracks")],a=[this.search("musicVideos"),this.search("playlists")];e(s),e(a)},getTracksDetail:function(){var t=this,e=this.tracks.map((function(t){return t.id}));0!==e.length&&Object(r["c"])(e.join(",")).then((function(e){t.tracks=e.songs}))}},created:function(){this.getData()},watch:{keywords:function(t){0!==t.length&&this.getData()}}},h=v,p=(s("03f2"),s("2877")),m=Object(p["a"])(h,a,i,!1,null,"4e7bc9df",null);e["default"]=m.exports},"841c":function(t,e,s){"use strict";var a=s("d784"),i=s("825a"),r=s("1d80"),n=s("129f"),o=s("14c3");a("search",1,(function(t,e,s){return[function(e){var s=r(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,s):new RegExp(e)[t](String(s))},function(t){var a=s(e,t,this);if(a.done)return a.value;var r=i(t),l=String(this),c=r.lastIndex;n(c,0)||(r.lastIndex=0);var u=o(r,l);return n(r.lastIndex,c)||(r.lastIndex=c),null===u?-1:u.index}]}))},"862d":function(t,e,s){},bda3:function(t,e,s){},c19a:function(t,e,s){},d4e3:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mv-row",class:{"without-padding":t.withoutPadding}},t._l(t.mvs,(function(e){return s("div",{key:t.getID(e),staticClass:"mv"},[s("div",{staticClass:"cover",on:{mouseover:function(s){t.hoverVideoID=t.getID(e)},mouseleave:function(e){t.hoverVideoID=0},click:function(s){t.goToMv(t.getID(e))}}},[s("img",{attrs:{src:t.getUrl(e)}}),s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.hoverVideoID===t.getID(e),expression:"hoverVideoID === getID(mv)"}],staticClass:"shadow",style:{background:"url("+t.getUrl(e)+")"}})])],1),s("div",{staticClass:"info"},[s("div",{staticClass:"title"},[s("router-link",{attrs:{to:"/mv/"+t.getID(e)}},[t._v(t._s(t.getTitle(e)))])],1),s("div",{staticClass:"artist",domProps:{innerHTML:t._s(t.getSubtitle(e))}})])])})),0)},i=[],r=(s("99af"),s("b0c0"),s("ac1f"),s("5319"),{name:"CoverVideo",props:{mvs:Array,subtitle:{type:String,default:"artist"},withoutPadding:{type:Boolean,default:!1}},data:function(){return{hoverVideoID:0}},methods:{goToMv:function(t){var e={};void 0!==this.$parent.player&&(e={autoplay:this.$parent.player.playing}),this.$router.push({path:"/mv/"+t,query:e})},getUrl:function(t){var e,s,a=null!==(e=null!==(s=t.imgurl16v9)&&void 0!==s?s:t.cover)&&void 0!==e?e:t.coverUrl;return a.replace(/^http:/,"https:")+"?param=464y260"},getID:function(t){return void 0!==t.id?t.id:void 0!==t.vid?t.vid:void 0},getTitle:function(t){return void 0!==t.name?t.name:void 0!==t.title?t.title:void 0},getSubtitle:function(t){if("artist"===this.subtitle){var e="null",s=0;return void 0!==t.artistName?(e=t.artistName,s=t.artistId):void 0!==t.creator&&(e=t.creator[0].userName,s=t.creator[0].userId),'<a href="/#/artist/'.concat(s,'">').concat(e,"</a>")}if("publishTime"===this.subtitle)return t.publishTime}}}),n=r,o=(s("20e9"),s("2877")),l=Object(o["a"])(n,a,i,!1,null,"71b4f1ff",null);e["a"]=l.exports},dad3:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var a=s("b775"),i=s("cf45");function r(t){return Object(a["a"])({url:"/search",method:"get",params:t}).then((function(t){var e;return void 0!==(null===(e=t.result)||void 0===e?void 0:e.song)&&(t.result.song.songs=Object(i["e"])(t.result.song.songs)),t}))}}}]);
//# sourceMappingURL=chunk-3ba440ae.df7b029d.js.map