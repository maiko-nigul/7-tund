# 🚀 Eesrakenduse Projekt: JS Raamatukogud

Antud projekt on valminud eesrakenduse õppeaine raames. Eesmärk on demonstreerida nelja erineva JavaScripti teegi (library) integratsiooni ja praktilist kasutust ühes veebirakenduses.

---

## 👥 Tiimi liikmed
* **Maiko Nigul**

---

## 🛠️ Kasutatud JavaScripti teegid

Olen valinud neli teeki, mis katavad tänapäeva veebiarenduse olulisemad suunad: **andmed, animatsioon, 3D ja interaktiivsus.**

| Teema | Teek (Library) | Kirjeldus |
| :--- | :--- | :--- |
| **Data Visualization** | [Chart.js](https://www.chartjs.org/) | Interaktiivne tulpdiagramm veinivalmistamise statistika kohta. |
| **Animation** | [GSAP](https://gsap.com/) | Sujuv *timeline*-põhine animatsioon teksti ja elementide sisselennuks. |
| **3D & WebGL** | [Three.js](https://threejs.org/) | Dünaamiline 3D stseen koos pöörleva *wireframe*-kuubikuga. |
| **Creative & Effects** | [Typed.js](https://mattboldt.com/demos/typed-js/) | Trükimasina efektiga animeeritud tekstiloogika. |

---

## 📁 Projekti struktuur

Projekti failid on jaotatud loogiliselt, et hoida kood puhas ja kergesti hooldatav:

```text
/7-tund
├── index.html          # Pealeht (Chart.js)
├── README.md           # Projekti dokumentatsioon
├── scripts/            # JavaScripti loogika
│   ├── chart.js
│   ├── gsap.js
│   ├── three.js
│   └── typed.js
├── styles/             # CSS kujundusfailid
│   └── style.css
└── views/              # Alamlehed teekide jaoks
    ├── GSAP.html
    ├── threejs.html
    └── typedjs.html
