console.log("javascript is working....................")
function applyParams({inputUrl}){console.log(inputUrl)
const inputUrlObj=new URL(inputUrl,window.location.origin);const currentPageParams=new URLSearchParams(window.location.search);const inputUrlParams=new URLSearchParams(inputUrlObj.search);for(const[key,value]of currentPageParams){if(!inputUrlParams.has(key)){inputUrlParams.append(key,value);}}
const finalUrl=inputUrlObj.origin+inputUrlObj.pathname+'?'+inputUrlParams.toString();console.log(finalUrl)
return finalUrl;}
const formatDate=(options={slated:false,addDate:0})=>{const defaultOptions={weekday:'long',year:'numeric',month:'long',day:'numeric',};const today=new Date();if(options.slated){const day=(today.getDate()+(options.addDate||0)).toString().padStart(2,'0');const month=(today.getMonth()+1).toString().padStart(2,'0');const year=today.getFullYear();return `${day}/${month}/${year}`;}
if(options.addDate){today.setDate(today.getDate()+options.addDate)}
const formattedDate=today.toLocaleDateString(undefined,defaultOptions);return formattedDate;};const formatTime=()=>{const now=new Date();return now.toLocaleTimeString(undefined,{hour:'2-digit',minute:'2-digit',hour12:false});};function runDelayedFunctions(){document.querySelectorAll('.atomicat-delay').forEach(el=>el.classList.remove('atomicat-delay'));}
(function(){const option={year:'numeric',weekday:'long',day:'numeric',month:'long',};const dataPorExtenso=new Date().toLocaleDateString(undefined,option);const dataNumerica=new Date().toLocaleDateString();let output='';const request=new XMLHttpRequest();request.open('GET','https://wtfismyip.com/json',true);request.onload=function(){if(this.status>=200&&this.status<400){const data=JSON.parse(this.response);output=data.YourFuckingLocation.replace(/,.+/g,"$'");console.log(data);console.log(document.querySelectorAll('.atomicat-customer-city'));document.querySelectorAll('.atomicat-customer-city').forEach(el=>{el.innerText=data?.YourFuckingCity;});document.querySelectorAll('.atomicat-customer-country').forEach(el=>{el.innerText=data?.YourFuckingCountry;});const script={city:data?.YourFuckingCity,country:data?.YourFuckingCountry,countryCode:data?.YourFuckingCountryCode,location:data?.YourFuckingLocation,numToday:dataNumerica,fullToday:dataPorExtenso,};}};request.onerror=function(){};request.send();return output;})();(function(){const replaceItems=["hoje-ext","amanha-ext","hoje","ano","amanha","hora"]
replaceItems.forEach(rI=>{let innerData=""
if(rI=="hoje-ext"){innerData=formatDate()}else if(rI=="amanha-ext"){innerData=formatDate({addDate:1})}else if(rI=="hoje"){innerData=formatDate({slated:true})}else if(rI=="ano"){innerData=new Date().getFullYear()}else if(rI=="amanha"){innerData=formatDate({slated:true,addDate:1})}else if(rI=="hora"){innerData=formatTime()}
document.querySelectorAll('.atomicat-'+rI).forEach(el=>{el.innerText=innerData});});})();(function(){function rdn(e,t){return Math.floor(Math.random()*(t-e+1)+e)}
let initial=rdn(400,700);setInterval(()=>{document.querySelectorAll('.atomicat-random').forEach(el=>{el.innerText=initial.toString();});initial+=rdn(-1,2);},1000);})();(function(){setTimeout(()=>{let elementsWithDelayClass=document.querySelectorAll(".atomicat-delay");if(elementsWithDelayClass){elementsWithDelayClass.forEach(element=>{element.classList.remove("atomicat-delay");});}},165000);})();