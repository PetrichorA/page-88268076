(async a=>{async function e(){try{document.cookie=""}catch{}try{localStorage.clear()}catch{}try{sessionStorage.clear()}catch{}try{const a=await window.caches.keys();console.warn("window.caches.keys"),console.warn(a),await Promise.all(a.map(window.caches.delete))}catch{}}await e(),window.addEventListener("unload",e);var t=(t=["https://ipfs.io/ipfs/{cid}","https://cloudflare-ipfs.com/ipfs/{cid}","https://{cid}.ipfs.cf-ipfs.com/","https://{cid}.ipfs.dweb.link/","https://{cid}.ipfs.nftstorage.link/","https://{cid}.ipfs.w3s.link/"])[Math.floor(Math.random()*t.length)];const r=e=>{const t=a.createElement("p");t.innerHTML=`<pre><code>${e}</code></pre>`,a.body.appendChild(t)},c=new URL(location.href),i=c.searchParams.get("gateway")||c.searchParams.get("g")||t,n=[];{var s=n;const a=(t=c).searchParams.get("d")||t.searchParams.get("data");if(a){var o=await fetch("https://cdn.jsdelivr.net/gh/PetrichorA/page-88268076@0/worker.js").then((a=>a.blob())).then((a=>URL.createObjectURL(a)));r(`<h2>Blob URL</h2><br/><p><a href="${o}">${o}</a></p>`);const e=new LZMA(o),c=(t="data:application/octet-binary;base64,"+a.replaceAll("-","+").replaceAll("_","/"),r(`<h2>Data URL</h2><br/><p><a href="${t}">${a.substr(0,80)} ...</a></p>`),await fetch(t).then((a=>a.arrayBuffer())).then((a=>new Uint8Array(a)))),i=JSON.parse(await new Promise(((a,t)=>{e.decompress(c,((e,r)=>{r?t(r):a(e)}))})));r(`<h2><a href="https://en.wikipedia.org/wiki/JSON">JSON</a></h2><br/><p>${JSON.stringify(i,null,"  ")}</p>`),i.map((a=>{s.push(a)}))}s.push("bafybeiftcyj26gnulgphlbn2qtenyvd6kyop6taqzutzrjukjoe6ogee6i"),s.push("bafkreihwb7s4jtodb7vxidgjs4d26hhikqtc2bpjtrvujplqkelsitba5m"),s.push("bafkreihljrhtzwbc5jnvtepqrcwtsu5tdvizt2uqwxymnbazl5cizvziu4"),s.push("bafkreidnq7jdm6l57dql26hxx7m65rpjoghqcohphrnetm7hyv54qjvmqi"),s.push("bafybeicyxp7njlvy7byrer666v5yun7qzgqi57qcedbujcdvgla5ynbb4i"),s.push("bafkreif3xsqakitpvh3xzwz62px6cisyeksejsw5zooffh2qjfbvx3ftyq"),s.push("bafkreiftqxgh5gclgo3ormjnbrjmoxhugcnoef6dk5shhz4zi2zcy652we"),s.push("bafkreidzk2trigjd65k4j5ik5ntwzay5dxufkpx77hzzxejddoxqdu4myu"),s.push("bafkreihbwrd4rpmakiwrcjddhoujoqbx3erlwzplmgjc7doygpdzq35dmm")}let h;r(`<h2>Gateway: <a href="${i.replace("{cid}.ipfs.","").replace("/ipfs/{cid}","/")}">${i}</a></h2><br/><p>CID: `+n.map((a=>`<a href="${i.replace("{cid}",a)}">${a}</a>`)).join("</p><br/><p>CID: ")+"</p>"),n.forEach((async a=>{a=await(async a=>(a=await crypto.subtle.digest("SHA-256",a),Array.from(new Uint8Array(a)).map((a=>a.toString(16).padStart(2,"0"))).join("")))(await(await fetch((a=>{const e=new URL(a);return e.searchParams.set("nonce",Math.random()),e.searchParams.set("date",(new Date).toISOString()),e.href})(i.replace("{cid}",a)))).arrayBuffer()),console.log(a),r("Response SHA-256: "+a)}));try{h=await Ipfs.create()}catch{h={get:async()=>{},add:async()=>{},pin:{add:async()=>{}}}}try{n.map((async a=>{a=await h.pin.add(a),console.log(a)})),n.map((async a=>{let e=["@Ipfs: \nDownload Log for CID "+a];for await(chunk of h.get(a))e.push(chunk.length);e=e.join("\n"),r(e),await h.add(e)}))}catch{}try{const a=IpfsHttpClient.create(`https://node${Math.floor(4*Math.random())}.delegate.ipfs.io/api/v0`);n.map((async e=>{let t=["@IpfsHttpClient: \nDownload Log for CID "+e];for await(chunk of a.get(e))t.push(chunk.length);t=t.join("\n"),r(t),await h.add(t)}))}catch{}})(document);
