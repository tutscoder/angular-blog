(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{nZJs:function(t,e,o){"use strict";o.r(e),o.d(e,"QuestionsModule",function(){return y});var i=o("ofXK"),n=o("fXoL"),s=o("tyNb");let r=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Fb({type:t,selectors:[["app-questions"]],decls:1,vars:0,template:function(t,e){1&t&&n.Mb(0,"router-outlet")},directives:[s.j],encapsulation:2}),t})();var c=o("CPSL"),l=o("7aS5"),a=o("2f20"),g=o("ngAm"),b=o("GQ31");function h(t,e){if(1&t&&(n.Rb(0,"div",10),n.Rb(1,"h2",11),n.Dc(2),n.Qb(),n.Mb(3,"p",12),n.Qb()),2&t){const t=n.bc();n.zb(2),n.Ec(t.post.title),n.zb(1),n.ic("innerHtml",t.post.html,n.xc)}}let p=(()=>{class t{constructor(t,e,o,i,n){this.route=t,this.questionService=e,this.highlightService=o,this.categoryService=i,this.seoService=n,this.highlighted=!1}ngAfterViewChecked(){this.post&&!this.highlighted&&(this.highlightService.highlightAll(),this.highlighted=!0)}ngOnInit(){this.route.params.subscribe(t=>{this.questionService.getQuestionBySlug(t.slug).subscribe(t=>{this.post=t,this.seoService.setMetaTags({title:`${this.post.title} | TutsCoder`,description:`${this.post.metaDescription}`}),this.getAllCategory(),this.getAllTags()})})}getAllCategory(){this.categoryService.getAllCateogry().subscribe(t=>{this.categories=t})}getAllTags(){this.categoryService.getAllTags().subscribe(t=>{this.tagsList=t.data.tags})}}return t.\u0275fac=function(e){return new(e||t)(n.Lb(s.a),n.Lb(c.a),n.Lb(l.a),n.Lb(a.a),n.Lb(g.a))},t.\u0275cmp=n.Fb({type:t,selectors:[["app-question-detail"]],decls:13,vars:1,consts:[[1,"block-wrapper"],[1,"container"],[1,"row"],[1,"col-xs-12","col-sm-12","col-md-8"],[1,"content"],[1,"col-xs-12","col-sm-12","posts"],["class","blog-post",4,"ngIf"],[1,"col-sm-12","col-xs-12"],[1,"col-xs-12","col-sm-12","col-xs-12"],[1,"col-xs-12","col-sm-12","col-md-4"],[1,"blog-post"],[1,"blog-post-title"],[3,"innerHtml"]],template:function(t,e){1&t&&(n.Rb(0,"section",0),n.Rb(1,"div",1),n.Rb(2,"div",2),n.Rb(3,"div",3),n.Rb(4,"div",4),n.Rb(5,"div",5),n.Rb(6,"div",2),n.Bc(7,h,4,2,"div",6),n.Mb(8,"div",7),n.Qb(),n.Qb(),n.Rb(9,"div",8),n.Mb(10,"div",2),n.Qb(),n.Qb(),n.Qb(),n.Rb(11,"div",9),n.Mb(12,"app-sidebar"),n.Qb(),n.Qb(),n.Qb(),n.Qb()),2&t&&(n.zb(7),n.ic("ngIf",e.post))},directives:[i.l,b.a],styles:[".blog-header[_ngcontent-%COMP%]{line-height:1;border-bottom:1px solid #e5e5e5}.blog-header-logo[_ngcontent-%COMP%]{font-family:Playfair Display,Georgia,Times New Roman,serif;font-size:2.25rem}.blog-header-logo[_ngcontent-%COMP%]:hover{text-decoration:none}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Playfair Display,Georgia,Times New Roman,serif}.display-4[_ngcontent-%COMP%]{font-size:2.5rem}@media (min-width:768px){.display-4[_ngcontent-%COMP%]{font-size:3rem}}.nav-scroller[_ngcontent-%COMP%]{position:relative;z-index:2;height:2.75rem;overflow-y:hidden}.nav-scroller[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;padding-bottom:1rem;margin-top:-1px;overflow-x:auto;text-align:center;white-space:nowrap;-webkit-overflow-scrolling:touch}.nav-scroller[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{padding-top:.75rem;padding-bottom:.75rem;font-size:.875rem}.card-img-right[_ngcontent-%COMP%]{height:100%;border-radius:0 3px 3px 0}.flex-auto[_ngcontent-%COMP%]{flex:0 0 auto}.h-250[_ngcontent-%COMP%]{height:250px}@media (min-width:768px){.h-md-250[_ngcontent-%COMP%]{height:250px}}.blog-pagination[_ngcontent-%COMP%]{margin-bottom:4rem}.blog-pagination[_ngcontent-%COMP%] > .btn[_ngcontent-%COMP%]{border-radius:2rem}.blog-post[_ngcontent-%COMP%]{margin-bottom:4rem}.blog-post-title[_ngcontent-%COMP%]{margin-bottom:.25rem;font-size:2.5rem}.blog-post-meta[_ngcontent-%COMP%]{margin-bottom:1.25rem;color:#999}.blog-footer[_ngcontent-%COMP%]{padding:2.5rem 0;color:#999;text-align:center;background-color:#f9f9f9;border-top:.05rem solid #e5e5e5}.blog-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}"]}),t})();var d=o("RfpP");function m(t,e){if(1&t&&(n.Rb(0,"article"),n.Rb(1,"div",11),n.Rb(2,"div",12),n.Rb(3,"div",13),n.Mb(4,"div",14),n.Rb(5,"h5",15),n.Rb(6,"a",16),n.Dc(7),n.Qb(),n.Qb(),n.Rb(8,"div",17),n.Rb(9,"span",18),n.Dc(10),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb()),2&t){const t=e.$implicit,o=n.bc();n.zb(6),n.lc("routerLink","/interview-questions/",o.category,"/",t.slug,""),n.zb(1),n.Ec(t.title),n.zb(3),n.Ec(t.excerpt)}}let u=(()=>{class t{constructor(t,e,o,i){this.route=t,this.questionService=e,this.categoryService=o,this.seoService=i,this.tagsList=[]}ngOnInit(){this.route.params.subscribe(t=>{this.category=t.category,this.getQuestionByCategory(),this.getAllCategory(),this.getAllTags()})}getQuestionByCategory(){this.questionService.getQuestionByCategory(this.category).subscribe(t=>{this.posts=t})}getAllCategory(){this.categoryService.getAllCateogry().subscribe(t=>{this.categories=t})}getAllTags(){this.categoryService.getAllTags().subscribe(t=>{this.tagsList=t.data.tags})}}return t.\u0275fac=function(e){return new(e||t)(n.Lb(s.a),n.Lb(c.a),n.Lb(a.a),n.Lb(g.a))},t.\u0275cmp=n.Fb({type:t,selectors:[["app-question-listing"]],decls:18,vars:1,consts:[[1,"block-wrapper"],[1,"container"],[1,"row"],[1,"col-xs-12","col-sm-12","col-md-8"],[1,"content"],[1,"col-xs-12","col-sm-12","posts"],[1,"loop-list","loop-list-style-1"],[4,"ngFor","ngForOf"],[1,"col-sm-12","col-xs-12"],[1,"col-xs-12","col-sm-12","col-xs-12"],[1,"col-lg-4","col-md-12","sidebars","s_right",2,"padding-right","0px"],[1,"row","mb-40","list-style-2"],[1,"col-md-12","align-self-center"],[1,"post-content"],[1,"entry-meta","meta-0","font-small","mb-10"],[1,"post-title","font-weight-900","mb-20"],[3,"routerLink"],[1,"entry-meta","meta-1","float-left","font-x-small","text-uppercase","mb-3"],[1,"post-on"]],template:function(t,e){1&t&&(n.Rb(0,"section",0),n.Rb(1,"div",1),n.Rb(2,"div",2),n.Rb(3,"div",3),n.Rb(4,"div",4),n.Rb(5,"div",5),n.Rb(6,"div",2),n.Rb(7,"div",6),n.Bc(8,m,11,4,"article",7),n.Qb(),n.Mb(9,"div",8),n.Mb(10,"div",8),n.Mb(11,"div",8),n.Mb(12,"div",8),n.Mb(13,"div",8),n.Qb(),n.Qb(),n.Rb(14,"div",9),n.Mb(15,"div",2),n.Qb(),n.Qb(),n.Qb(),n.Rb(16,"aside",10),n.Mb(17,"app-sidebar"),n.Qb(),n.Qb(),n.Qb(),n.Qb()),2&t&&(n.zb(8),n.ic("ngForOf",e.posts))},directives:[i.k,b.a,s.h],styles:[""]}),t})();var v=o("2oBQ");const f=[{path:"",component:r,children:[{path:":category",component:u},{path:":category/:slug",component:p}]}];let y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.Jb({type:t}),t.\u0275inj=n.Ib({imports:[[i.c,d.a,v.a,s.i.forChild(f)]]}),t})()}}]);