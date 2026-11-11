# Ilova ekranlari rejasi

## Navigatsiya tuzilmasi

```
Root (Stack)
├── (tabs)
│   ├── Xarita          /            — 2-kun
│   ├── Stansiyalar     /stations    — 3-kun
│   ├── Yo'l            /planner     — 6-kun
│   └── Profil          /profile     — 5-kun, 7-kun
├── station/[id]        — Stansiya kartochkasi, 4-kun
├── onboarding          — Birinchi ochilish: mashina tanlash, 5-kun
└── planner/result      — Yo'l natijasi, 6-kun
```

## Ekranlar

| Ekran | Asosiy elementlar | Kun |
|---|---|---|
| **Xarita** | MapLibre xaritasi, quvvat bo'yicha rangli markerlar, joriy joylashuv, "Eng yaqin stansiya" tugmasi, marker bosilganda pastdan qisqa kartochka | 2 |
| **Stansiyalar** | Filtrlar (ulagich, quvvat toifasi, 24/7, narx), masofa bo'yicha saralangan ro'yxat, bo'sh/band nishoni | 3 |
| **Stansiya kartochkasi** | Nomi, operator, manzil, ulagichlar va holati, "yetib borganda bo'sh joy ehtimoli", narx, ish vaqti, qulayliklar (oshxona, masjid, mehmonxona, hojatxona, do'kon), reyting va sharhlar, "Ishlamayapti" tugmasi, "Yo'l chizish" tugmasi | 4 |
| **Onboarding / Mashina profili** | Mashina modelini tanlash (BYD, Chery, Zeekr...), batareya %, ulagich turi | 5 |
| **Yo'l rejalashtiruvchi** | Qayerdan / Qayerga, ustuvorlik (tez / arzon / qulaylik) | 6 |
| **Yo'l natijasi** | Marshrut xaritada, to'xtash joylari, har birida zaryad vaqti va qulayliklar, yetib borish ehtimoli (%), qizil zonalar ogohlantirishi, umumiy vaqt (haydash + chetlanish + navbat + zaryad) | 6 |
| **Sozlamalar** | Til (o'zbek / rus), tungi rejim, avtomobil rejimi (katta tugmalar, gorizontal ekran) | 7 |

## Dizayn tizimi

Ranglar `mobile/src/theme/colors.js` faylida — Tailwind va JS bir manbadan o'qiydi.

| Ma'no | Rang | Ishlatilishi |
|---|---|---|
| Brend | `brand-500` #10B981 | Asosiy tugmalar, faol tab |
| AC 7–22 kVt | `power-ac` #3B82F6 | Marker, nishon |
| DC 40–60 kVt | `power-dc` #F59E0B | Marker, nishon |
| DC 120+ kVt | `power-ultra` #8B5CF6 | Marker, nishon |
| Bo'sh / Band / Ishlamaydi | `status-free` / `status-busy` / `status-offline` | Ulagich holati |
| Xavfsiz / Ehtiyot / Xavfli | `risk-safe` / `risk-warn` / `risk-danger` | Yetib borish ehtimoli, qizil zonalar |

UI komponentlar (`mobile/src/components/ui`): `Screen`, `Button` (md / lg — avtomobil rejimi uchun), `Card`, `Badge`, `Chip`.
