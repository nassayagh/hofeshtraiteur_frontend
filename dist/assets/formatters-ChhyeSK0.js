const a=(t,r={month:"short",day:"numeric",year:"numeric"})=>t&&new Intl.DateTimeFormat("fr-FR",r).format(new Date(t)),e=t=>{const r={month:"short",year:"2-digit"};return new Intl.DateTimeFormat("fr-FR",r).format(new Date(t))},o=(t,r,n)=>new Intl.NumberFormat(n||"fr-FR",{style:"currency",currency:r||"EUR",minimumFractionDigits:2,maximumFractionDigits:2}).format(t);export{a,e as b,o as f};