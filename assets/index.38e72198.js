import{d as w,r as p,a as f,b,c as n,w as i,e,f as u,u as o,g as y,o as v,h as m,i as O,p as V,V as E}from"./vendor.4233e768.js";const L=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))_(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&_(d)}).observe(document,{childList:!0,subtree:!0});function c(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function _(a){if(a.ep)return;a.ep=!0;const s=c(a);fetch(a.href,s)}};L();var k="/v-wave/assets/logo.af44a489.png";const C={alt:"Vue logo",src:k},N=y('<h1>v-wave</h1><div class="badges"><img src="https://github.com/justintaddei/v-wave/workflows/Tests/badge.svg" alt=""><img src="https://img.shields.io/github/issues-raw/justintaddei/v-wave.svg?style=flat" alt=""><img src="https://img.shields.io/npm/v/v-wave.svg?style=flat" alt=""></div><p>The material-ripple directive for Vue that actually works</p><p><a href="https://github.com/justintaddei/v-wave">Back to Github</a></p><br>',5),W={class:"editor"},B={class:"editorWrapper"},P={class:"previewWrapper"},T={class:"otherExamples"},j=e("h2",null,"Basic Examples",-1),A={class:"box"},S=m("default"),G=[S],q={style:{color:"#fff",background:"#333"},class:"box"},z=m("default (currentColor demo)"),F=[z],I={style:{"border-radius":"50% 10px"},class:"box"},J=m(" border-radius "),K=[J],M={class:"box"},H=m(" radial-gradient "),Q=[H],R={class:"triggerExamples"},U=e("h2",null,"Examples using triggers",-1),X={class:"editor"},Y={class:"editorWrapper"},Z={class:"previewWrapper"},$=e("h4",null,"Just an example of the flexibility that triggers provide (click/tap any box)",-1),ee={class:"waveGrid"},se={class:"box small"},oe={class:"box small"},ie={class:"box small"},te={class:"box small"},le={class:"box small"},ae={class:"box small"},de={class:"box small"},re={class:"box small"},ce={class:"box small"},ne={class:"box small"},ve={class:"box small"},_e={class:"box small"},ue={class:"box small"},me={class:"box small"},he={class:"box small"},ge={class:"box small"},pe={class:"box small"},fe={class:"box small"},be={class:"box small"},xe={class:"box small"},De={class:"box small"},we={class:"box small"},ye={class:"box small"},Oe={class:"box small"},Ve={class:"box small"},Ee=w({setup(D){let r=p(`
<!-- Edit me (all options are set to their default) -->
<div
  class="box"
  v-wave="{
    color: 'currentColor',
    easing: 'ease-out',
    duration: 0.4,
    dissolveDuration: 0.15,
    initialOpacity: 0.2,
    finalOpacity: 0.1,
    cancellationPeriod: 75,
    trigger: 'auto',
    tagName: 'div'
  }"
>
  Click here
</div>`),c=p(`
<label
  v-wave
  class="text-input"
>
  <input type="text" placeholder="Search" />
  
  <!-- Only show the wave when the trigger is clicked -->
  <img v-wave-trigger src="/imgs/search.svg" />
</label>`),_=d=>r.value=d,a=d=>c.value=d,s={color:"#09f",duration:2,initialOpacity:.1,finalOpacity:.7,trigger:"gridDemo"};return(d,Le)=>{const h=f("VueLiveEditor"),g=f("VueLivePreview"),l=b("wave-trigger"),t=b("wave");return v(),n("main",null,[i(e("img",C,null,512),[[l]]),N,e("div",W,[e("div",B,[u(h,{code:o(r),onChange:o(_)},null,8,["code","onChange"])]),e("div",P,[u(g,{code:o(r)},null,8,["code"])])]),e("div",T,[j,i((v(),n("div",A,G)),[[t]]),i((v(),n("div",q,F)),[[t]]),i((v(),n("div",I,K)),[[t,{color:"#09f",initialOpacity:.7,finalOpacity:.5,dissolveDuration:.3}]]),i((v(),n("div",M,Q)),[[t,{duration:2,color:"radial-gradient(closest-side, #fff, #1cb884)",initialOpacity:.7,finalOpacity:.3,easing:"cubic-bezier(0,.57,.89,0)"}]])]),e("div",R,[U,e("div",X,[e("div",Y,[u(h,{code:o(c),onChange:o(a)},null,8,["code","onChange"])]),e("div",Z,[u(g,{code:o(c)},null,8,["code"])])]),$,e("div",ee,[i(e("div",se,null,512),[[l,void 0,"gridDemo"],[t,o(s)]]),i(e("div",oe,null,512),[[l,void 0,"gridDemo"],[t,o(s)]]),i(e("div",ie,null,512),[[l,void 0,"gridDemo"],[t,o(s)]]),i(e("div",te,null,512),[[l,void 0,"gridDemo"],[t,o(s)]]),i(e("div",le,null,512),[[l,void 0,"gridDemo"],[t,o(s)]]),i(e("div",ae,null,512),[[l,void 0,"gridDemo"],[t,o(s)]]),i(e("div",de,null,512),[[l,void 0,"gridDemo"],[t,o(s)]]),i(e("div",re,null,512),[[l,void 0,"gridDemo"],[t,o(s)]]),i(e("div",ce,null,512),[[l,void 0,"gridDemo"],[t,o(s)]]),i(e("div",ne,null,512),[[l,void 0,"gridDemo"],[t,o(s)]]),i(e("div",ve,null,512),[[l,void 0,"gridDemo"],[t,o(s)]]),i(e("div",_e,null,512),[[l,void 0,"gridDemo"],[t,o(s)]]),i(e("div",ue,null,512),[[l,void 0,"gridDemo"],[t,o(s)]]),i(e("div",me,null,512),[[l,void 0,"gridDemo"],[t,o(s)]]),i(e("div",he,null,512),[[l,void 0,"gridDemo"],[t,o(s)]]),i(e("div",ge,null,512),[[l,void 0,"gridDemo"],[t,o(s)]]),i(e("div",pe,null,512),[[l,void 0,"gridDemo"],[t,o(s)]]),i(e("div",fe,null,512),[[l,void 0,"gridDemo"],[t,o(s)]]),i(e("div",be,null,512),[[l,void 0,"gridDemo"],[t,o(s)]]),i(e("div",xe,null,512),[[l,void 0,"gridDemo"],[t,o(s)]]),i(e("div",De,null,512),[[l,void 0,"gridDemo"],[t,o(s)]]),i(e("div",we,null,512),[[l,void 0,"gridDemo"],[t,o(s)]]),i(e("div",ye,null,512),[[l,void 0,"gridDemo"],[t,o(s)]]),i(e("div",Oe,null,512),[[l,void 0,"gridDemo"],[t,o(s)]]),i(e("div",Ve,null,512),[[l,void 0,"gridDemo"],[t,o(s)]])])])])}}}),x=O(Ee);x.use(V).use(E);x.mount("#app");