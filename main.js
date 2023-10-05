//begin_1

// const a = parseInt(prompt("Kvadratning tomoni uzunligini kiriting"));
// const P = a * 4
// alert(P)



//begin_2

// const b = parseInt(prompt("Kvadratning tomoni uzunligini kiriting (yuzini topish unchun)"));
// const S = b * b
// alert(S)



//beign_3

// const a = parseInt(prompt("to'g'rito'rtburchakning boyini kiriting"));
// const b = parseInt(prompt("to'g'rito'rtburchakning enini kiriting"));
// const S = a * b
// const P = 2 * (a + b)
// alert(`yuzi: ${S}`)
// alert(`perimetri: ${P}`)



//begin_4

// const d = parseInt(prompt("Aylanaaning diametrini kiriting"));
// const l = 3.14 * d
// alert(`Aylana uzunligi: ${l}`)



//begin_4

// const a = parseInt(prompt("Kubning tomonini kiriting"));
// const v = a ** 3
// const s = 6 * a**2
// alert(`kubning hajmi: ${v}`)
// alert(`kubning yuzasi: ${s}`)



//begin_8

// const a = parseInt(prompt("A qiymatga teng biron son kiriting"));
// const b = parseInt(prompt("B qiymatga teng biron son kiriting"));
// const x = (a + b) / 2
// alert(`Ularningf o'rta arifmetik qiymati: ${x}`)



//begin__13

// alert("Umumiy markazga ega bolgan ikita aylana berilgan")
// const r1 = parseInt(prompt("Katta aylana radiusini kiriting"));
// const r2 = parseInt(prompt("Kichik aylana radiusini kiriting"));
// const s1 = 3.14 * r1
// const s2 = 3.14 * r2
// const s3 = 3.14 * (r1 - r2)
// alert(`Katta aylana yuzi: ${s1}`)
// alert(`Katta aylana yuzi: ${s2}`)
// alert(`Ularning ayirmasi: ${s3}`)



//begin__32

// const x = parseInt(prompt("Temparturani gradus Selsiyda kiriting"));
// const c = (x - 32) * 5/9
// alert(`Franangeytda quyidagicha: ${c}`)



//integer__1

// const x = parseInt(prompt("Uzunlikni sm da kiriting"));
// const l = x / 100
// const y = Math.floor(l)
// alert(`To'liq metrlar soni: ${y}`)



//integer__2

// const x = parseInt(prompt("Og'irlikni kg da kiriting"));
// const m = x / 1000
// const y = Math.floor(m)
// alert(`To'liq tonnalar soni: ${y}`)



//integer__4

// const a = parseInt(prompt("A qiymatga ega son kiriting  (A > B)"));
// const b = parseInt(prompt("B qiymatga ega son kiriting  (A > B)"));
// const x = a / b 
// const y = Math.floor(x)
// alert(`Joylashtirishalar soni: ${y}`)



//integer__5

// const a = parseInt(prompt("A qiymatga ega son kiriting  (A > B)"));
// const b = parseInt(prompt("B qiymatga ega son kiriting  (A > B)"));
// const x = a % b 
// alert(`Joylashmagan qismi: ${x}`)



//integer__6

// const a = parseInt(prompt("Ixtiyoriy ikki xonali son kiriting"));
// const y = a % 10
// const x = a / 10 
// const z = Math.floor(x)
// alert(`O'nliklar xonasi: ${z}`)
// alert(`Birlikliklar xonasi: ${y}`)



//integer__7

// const a = parseInt(prompt("Ixtiyoriy ikki xonali son kiriting"));
// const y = a % 10
// const x = a / 10 
// const z = Math.floor(x)
// const s = z + y
// alert(`Raqamlar yig;indissi: ${s}`)



//integer__8

// const a = parseInt(prompt("Ixtiyoriy ikki xonali son kiriting"));
// const y = a % 10
// const x = a / 10 
// const z = Math.floor(x)
// alert(`Opoiste: ${y}${z}`)



//integer__23

const s = parseInt(prompt("Kun boshidan boshlab qancha sekund o'tganini kiriting"));
const h = s / 360
const hy = s % 360
const hx = Math.floor(h)
const m = hy / 60 
const my = hy % 60
const mx = Math.floor(m)
alert(`Hours: ${hx}
Minuts: ${mx}
Secunds: ${my}`)

