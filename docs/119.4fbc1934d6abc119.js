"use strict";(self.webpackChunkWeek3_session1=self.webpackChunkWeek3_session1||[]).push([[119],{7119:(I,m,s)=>{s.r(m),s.d(m,{CartModule:()=>A});var l=s(6895),p=s(1483),t=s(4650),d=s(5434);let C=(()=>{class n{transform(e){return e.filter(o=>0!=o.count)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=t.Yjl({name:"filterCart",type:n,pure:!0}),n})();function g(n,r){1&n&&(t.TgZ(0,"button",9),t._uU(1,"Continue to pay"),t.qZA())}function _(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",10)(1,"div",11),t._UZ(2,"img",12),t.qZA(),t.TgZ(3,"div",13)(4,"div",14)(5,"div",15)(6,"h5"),t._uU(7),t.qZA(),t.TgZ(8,"h6",7),t._uU(9),t.qZA(),t.TgZ(10,"button",16),t.NdJ("click",function(){const a=t.CHM(e).$implicit,u=t.oxw(2);return t.KtG(u.removeItemFromCart(a.product.id))}),t._UZ(11,"i",17),t._uU(12," Remove"),t.qZA()(),t.TgZ(13,"div")(14,"button",18),t.NdJ("click",function(){const a=t.CHM(e).$implicit,u=t.oxw(2);return t.KtG(u.updateItems(a.product.id,a.count+1))}),t._uU(15,"+"),t.qZA(),t.TgZ(16,"span",19),t._uU(17),t.qZA(),t.TgZ(18,"button",18),t.NdJ("click",function(){const a=t.CHM(e).$implicit,u=t.oxw(2);return t.KtG(u.updateItems(a.product.id,a.count-1))}),t._uU(19,"-"),t.qZA()()()()()}if(2&n){const e=r.$implicit;t.xp6(2),t.Q6J("src",e.product.imageCover,t.LSH),t.xp6(5),t.Oqu(e.product.title),t.xp6(2),t.hij("",e.price," EGP"),t.xp6(8),t.Oqu(e.count)}}const f=function(n){return["Checkout",n]};function h(n,r){if(1&n&&(t.ynx(0),t.TgZ(1,"div",3)(2,"h2"),t._uU(3,"Cart Shop"),t.qZA(),t.TgZ(4,"a",4),t.YNc(5,g,2,0,"button",5),t.qZA()(),t.TgZ(6,"div",6)(7,"h5"),t._uU(8,"Total Price : "),t.TgZ(9,"span",7),t._uU(10),t.qZA()(),t.TgZ(11,"h5"),t._uU(12,"Total Number : "),t.TgZ(13,"span",7),t._uU(14),t.qZA()()(),t.TgZ(15,"div"),t.YNc(16,_,20,4,"div",8),t.ALo(17,"filterCart"),t.qZA(),t.BQk()),2&n){const e=t.oxw();t.xp6(4),t.Q6J("routerLink",t.VKq(7,f,e.cartDetails.data._id)),t.xp6(1),t.Q6J("ngIf",0!=e.cartDetails.numOfCartItems),t.xp6(5),t.hij("",e.cartDetails.data.totalCartPrice," EGP"),t.xp6(4),t.Oqu(e.cartDetails.numOfCartItems),t.xp6(2),t.Q6J("ngForOf",t.lcZ(17,5,e.cartDetails.data.products))}}let Z=(()=>{class n{constructor(e){this._cartService=e,this.cartDetails={},this.getCart()}getCart(){this._cartService.getCart().subscribe({next:e=>this.cartDetails=e,error:e=>console.log("error")})}removeItemFromCart(e){this._cartService.removeItem(e).subscribe({next:o=>{this.cartDetails=o,console.log(o)}})}updateItems(e,o){this._cartService.updateItem(e,o).subscribe({next:c=>this.cartDetails=c,error:c=>console.log("error in response")})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d.N))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-cart"]],decls:3,vars:1,consts:[[1,"container","py-5","my-5"],[1,"cart","p-5"],[4,"ngIf"],[1,"d-flex","justify-content-between","mb-4"],[3,"routerLink"],["class","btn btn-success",4,"ngIf"],[1,"d-flex","justify-content-between","align-item-center"],[1,"text-main"],["class","row border-bottom p-2 align-item-center",4,"ngFor","ngForOf"],[1,"btn","btn-success"],[1,"row","border-bottom","p-2","align-item-center"],[1,"col-md-1"],["alt","producr Img",1,"w-100",3,"src"],[1,"col-md-11"],[1,"d-flex","justify-content-between","p-4"],[1,"w-75"],[1,"btn","m-0","p-0","text-danger",3,"click"],[1,"fa-solid","fa-trash-can"],[1,"btn","btn-count","text-main",3,"click"],[1,"px-3"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,h,18,9,"ng-container",2),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("ngIf",null==o.cartDetails?null:o.cartDetails.data))},dependencies:[l.sg,l.O5,p.rH,C],styles:[".cart[_ngcontent-%COMP%]{background-color:#eee}.btn-count[_ngcontent-%COMP%]{border:2px solid #0aad0a}"]}),n})();var i=s(4006);function b(n,r){if(1&n&&(t.TgZ(0,"option",12),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}let v=(()=>{class n{constructor(e,o){this._cartService=e,this._activatedRoute=o,this.shippingForm=new i.cw({details:new i.NI("",[i.kI.required]),phone:new i.NI("",[i.kI.required]),city:new i.NI("Open this select menu",[i.kI.required])}),e.getAllCountries().subscribe({next:c=>{this.countries=c.map(a=>a.name),console.log(this.countries)},error:c=>console.log(c)})}ngOnInit(){this.cartID=this._activatedRoute.snapshot.paramMap.get("cartId")}handleOnline(){this._cartService.generateOnlinePayment(this.cartID,this.shippingForm.value).subscribe({next:e=>{"success"==e.status&&(window.location.href=e.session.url)},error:e=>console.log(e)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d.N),t.Y36(p.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-checkout"]],decls:17,vars:2,consts:[[1,"container","py-5","my-5"],[1,"w-75","mx-auto"],[1,"form-group",3,"formGroup","ngSubmit"],["for","details"],["formControlName","details","id","details",1,"form-control","mb-3"],["for","city"],["name","city","id","city","formControlName","city",1,"form-select","mb-3"],["selected","selected","disabled",""],[3,"value",4,"ngFor","ngForOf"],["for","phone"],["type","tel","formControlName","phone","id","phone",1,"form-control","mb-3"],[1,"btn","btn-primary","w-100"],[3,"value"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"form",2),t.NdJ("ngSubmit",function(){return o.handleOnline()}),t.TgZ(3,"label",3),t._uU(4,"Details"),t.qZA(),t._UZ(5,"input",4),t.TgZ(6,"label",5),t._uU(7,"City"),t.qZA(),t.TgZ(8,"select",6)(9,"option",7),t._uU(10,"Open this select menu"),t.qZA(),t.YNc(11,b,2,2,"option",8),t.qZA(),t.TgZ(12,"label",9),t._uU(13,"Phone"),t.qZA(),t._UZ(14,"input",10),t.TgZ(15,"button",11),t._uU(16,"Continue"),t.qZA()()()()),2&e&&(t.xp6(2),t.Q6J("formGroup",o.shippingForm),t.xp6(9),t.Q6J("ngForOf",o.countries))},dependencies:[l.sg,i._Y,i.YN,i.Kr,i.Fj,i.EJ,i.JJ,i.JL,i.sg,i.u]}),n})();const T=[{path:"",canActivate:[s(6870).a],component:Z,title:"My Cart"},{path:"Checkout/:cartId",component:v,title:"Checkout"}];let y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.Bz.forChild(T),p.Bz]}),n})(),A=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,y]}),n})()}}]);