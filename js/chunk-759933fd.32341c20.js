(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-759933fd"],{"27d7":function(n,a,t){},"346f":function(n,a,t){"use strict";t("27d7")},caa6:function(n,a,t){"use strict";t.r(a);var e=function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("div",{staticClass:"barra-avance",class:[n.showBarra?"barra-avance--open":"barra-avance--close"]},[t("span",{staticClass:"me-auto ps-2 ms-1"},[n._v("Unidad 2")]),t("router-link",{staticClass:"barra-avance__boton--regresar",class:[!n.controlLinks.back.name&&"barra-avance__boton--disable"],attrs:{to:{name:n.controlLinks.back.name,hash:n.controlLinks.back.hash?"#"+n.controlLinks.back.hash:""}}},[t("div",{staticClass:"content"},[t("i",{staticClass:"me-3 fas fa-arrow-left"}),t("span",[n._v("Regresar")])])]),t("router-link",{staticClass:"barra-avance__boton--siguiente",class:[!n.controlLinks.next.name&&"barra-avance__boton--disable"],attrs:{to:{name:n.controlLinks.next.name,hash:n.controlLinks.next.hash?"#"+n.controlLinks.next.hash:""}}},[t("div",{staticClass:"content"},[t("span",{staticClass:"me-3"},[n._v("Siguiente")]),t("i",{staticClass:"fas fa-arrow-right"})])])],1)},s=[],r=(t("caad"),t("2532"),t("b0c0"),t("7db0"),t("d3b7"),t("d81d"),{name:"BarraAvance",data:function(){return{cursoSelection:null,idSelecctionArr:[]}},computed:{menuData:function(){return this.$config.menuPrincipal.menu},showBarra:function(){var n=this.$route.fullPath.includes("/introduccion"),a=this.$route.fullPath.includes("/curso"),t=this.controlLinks.next&&this.controlLinks.next.name||this.controlLinks.back&&this.controlLinks.back.name;return!this.menuOpen&&(n||a)&&t},controlLinks:function(){var n=this,a=this.menuData.find((function(a){return a.nombreRuta===n.$route.name}));if("introduccion"===this.$route.name){var t=this.menuData.find((function(n){return"tema1"===n.nombreRuta}));return{next:{name:t.nombreRuta,hash:""},back:{name:"",hash:""}}}if(a){var e={},s=this.menuData.map((function(n){return n.nombreRuta})).indexOf(this.$route.name),r=this.menuData[s-1],i=r&&r.nombreRuta.includes("tema"),o=r&&r.nombreRuta.includes("introduccion");e.back=i||o?{name:r.nombreRuta,hash:""}:{name:"",hash:""};var c=this.menuData[s+1],u=c&&c.nombreRuta.includes("tema");return e.next=u?{name:c.nombreRuta,hash:""}:{name:"",hash:""},e}return{next:{name:"",hash:""},back:{name:"",hash:""}}},menuOpen:function(){return this.$store.getters.isMenuOpen}}}),i=r,o=(t("346f"),t("2877")),c=Object(o["a"])(i,e,s,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-759933fd.32341c20.js.map