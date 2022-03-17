"use strict";(self.webpackChunkrunlet_website=self.webpackChunkrunlet_website||[]).push([[34],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},217:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),l=["components"],i={id:"actor",title:"Actor",sidebar_label:"Actor",displayed_sidebar:"gameframework"},c=void 0,s={unversionedId:"gameframework/classes/actor",id:"gameframework/classes/actor",title:"Actor",description:"Inheritance Hierarchy",source:"@site/docs/gameframework/classes/actor.md",sourceDirName:"gameframework/classes",slug:"/gameframework/classes/actor",permalink:"/docs/gameframework/classes/actor",tags:[],version:"current",frontMatter:{id:"actor",title:"Actor",sidebar_label:"Actor",displayed_sidebar:"gameframework"},sidebar:"gameframework",previous:{title:"Classes Api",permalink:"/docs/gameframework/classes"},next:{title:"CameraBlockingVolume",permalink:"/docs/gameframework/classes/camerablockingvolume"}},p={},m=[{value:"Inheritance Hierarchy",id:"inheritance-hierarchy",level:2},{value:"References",id:"references",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Remarks",id:"remarks",level:2}],d={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"inheritance-hierarchy"},"Inheritance Hierarchy"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"UObjectBase\n UObjectBaseUtility\n  UObject\n   Actor\n")),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"References"),(0,o.kt)("th",{parentName:"tr",align:null},"Detail"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Module")),(0,o.kt)("td",{parentName:"tr",align:null},"Engine")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Header")),(0,o.kt)("td",{parentName:"tr",align:null},"/Engine/Source/Runtime/Engine/Classes/GameFramework/Actor.h")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Include")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'#include "GameFramework/Actor.h"'))))),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"class Actor : public UObject\n")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"Actor is the base class for an Object that can be placed or spawned in a level. Actors may contain a collection of ActorComponents, which can be used to control how actors move, how they are rendered, etc. The other main function of an Actor is the replication of properties and function calls across the network during play."),(0,o.kt)("p",null,"Actor initialization has multiple steps, here's the order of important virtual functions that get called:"),(0,o.kt)("p",null,"UObject::PostLoad: For actors statically placed in a level, the normal UObject PostLoad gets called both in the editor and during gameplay. This is not called for newly spawned actors."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"UActorComponent::OnComponentCreated: When an actor is spawned in the editor or during gameplay, this gets called for any native components. For blueprint-created components, this gets called during construction for that component. This is not called for components loaded from a level.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Actor::PreRegisterAllComponents: For statically placed actors and spawned actors that have native root components, this gets called now. For blueprint actors without a native root component, these registration functions get called later during construction.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"UActorComponent::RegisterComponent: All components are registered in editor and at runtime, this creates their physical/visual representation. These calls may be distributed over multiple frames, but are always after PreRegisterAllComponents. This may also get called later on after an UnregisterComponent call removes it from the world.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Actor::PostRegisterAllComponents: Called for all actors both in the editor and in gameplay, this is the last function that is called in all cases.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Actor::PostActorCreated: When an actor is created in the editor or during gameplay, this gets called right before construction. This is not called for components loaded from a level.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Actor::UserConstructionScript: Called for blueprints that implement a construction script.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Actor::OnConstruction: Called at the end of ExecuteConstruction, which calls the blueprint construction script. This is called after all blueprint-created components are fully created and registered. This is only called during gameplay for spawned actors, and may get rerun in the editor when changing blueprints.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Actor::PreInitializeComponents: Called before InitializeComponent is called on the actor's components. This is only called during gameplay and in certain editor preview windows.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"UActorComponent::Activate: This will be called only if the component has bAutoActivate set. It will also got called later on if a component is manually activated.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"UActorComponent::InitializeComponent: This will be called only if the component has bWantsInitializeComponentSet. This only happens once per gameplay session.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Actor::PostInitializeComponents: Called after the actor's components have been initialized, only during gameplay and some editor previews.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Actor::BeginPlay: Called when the level starts ticking, only during actual gameplay. This normally happens right after PostInitializeComponents but can be delayed for networked or child actors."))))}u.isMDXComponent=!0}}]);