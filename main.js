document.addEventListener("DOMContentLoaded",(()=>{const e=async e=>{try{await fetch(e,{mode:"no-cors"})}catch{}};document.querySelectorAll("link").forEach((r=>{r.href&&e(r.href)})),document.querySelectorAll("script").forEach((r=>{r.src&&e(r.src),r.src.startsWith("https://cloudflare-ipfs.com/")&&r.addEventListener("error",(()=>{r.src=r.src.replace("cloudflare-ipfs.com","ipfs.io")}))}))}));
