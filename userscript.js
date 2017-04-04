// ==UserScript==
// @name        Talkiepedia Betaversion on Disqus
// @namespace   Talkiepedia Betaversion on Disqus 
// @description Stefan Brück - Talkiepedia    

// @include        http://www.lokabissi.de*
// @include        http://www.amazon.de*
// @include        http://hamburg.betahaus.de*
// @include        http://www.berufsbegleitung.de*
// @include        http://www.ebay.de*
// @include        http://kleinanzeigen.ebay.de*
// @include        http://preisvergleich.ebay.de*
// @include        http://www.faz.net*
// @include        http://www.future.de*
// @include        http://www.hamburg.betahaus.de*
// @include        http://www.heise.de*
// @include        http://www.hrinnovationslam.de*
// @include        http://www.huffingtonpost.de*
// @include        http://www.joergkunze.de*
// @include        http://www.linkedin.com*
// @include        http://www.n-tv.de*
// @include        http://www.nzz.ch*
// @include        http://www.otto.de*
// @include        http://www.ottogroup.com*
// @include        http://www.performance-media.de*
// @include        http://www.shortnews.de* 
// @include        http://www.spiegel.de*
// @include        http://www.stern.de*
// @include        http://www.threeheadedmonkeys.com/*
// @include        http://t3n.de* 
// @include        http://www.utopia.de*
// @include        http://www.web-developer-conference.de*
// @include        http://www.welt*
// @include        http://de.wikipedia.org*
// @include        http://www.wiwo.de* 
// @include        http://mitsloan.mit.edu/fellows/advantages/innovation-leadership*
// @include        http://www.dirkvongehlen.de* 

 
 
// @version     1.07
// @grant       none
// ==/UserScript==

var NewVariable = '';

//  if (window == window.parent) {  
//  Fuer die Demos via PEARLTREES muss die obige Zeile aktiviert werden: Schliessende Klammer unten ebenso auskommentiert    

var count=0;
var myurl = document.URL
var myurl = myurl.replace("www."," ");
var myurl = myurl.replace("https:"," ");
var myurl = myurl.replace("http:"," "); 
var backway = myurl.split("").reverse().join("");
myurl= backway;
for(var i=0;i< myurl.length;i++)
{
if(count<49){
if((((myurl.charCodeAt(i))>=65)&& ((myurl.charCodeAt(i))<=90))|| (((myurl.charCodeAt(i))>=97)&& ((myurl.charCodeAt(i))<=122)))
{
count++;
NewVariable= NewVariable+ myurl[i];
}
if((myurl.charCodeAt(i))==47)
{
count++;
NewVariable= NewVariable+ "hsals"; 
}
}
}
backway = NewVariable.split("").reverse().join("");
NewVariable = backway;
var temp = document.createElement("div");
var newElement = document.createElement("div");
temp.innerHTML = '';

// Layoutanmerkung: die Höhe des Iframes ist derzeit halbiert.
newElement.innerHTML = '<div style="position:relative; z-index:999; background-color:#;  height:505px; left:0%; width:100%; top:000px; text-align:center;"><p><iframe name="solution" id="solution" height="500px" width="100%" frameborder="0" scrolling="" src="https://ssl-account.com/onlineagenten.de/disqus/demo.html?'+NewVariable+'" onchange="this.src"></iframe></div>';

 
document.body.insertBefore(temp, document.body.lastChild);
targetElement = document.body.lastChild;
insertAfter(newElement, targetElement);

//  FUER PEARLTREES AUSKOMMENTIEREN (#KlammerZu)  
//  }

function insertAfter(newElement,targetElement) {
      var parent = targetElement.parentNode;
      if(parent.lastchild == targetElement) {
            parent.appendChild(newElement);
            } else {
            parent.insertBefore(newElement, targetElement.nextSibling);
            }
} 
