# Zaryad Xarita

**Diplom ishi:** "O'zbekiston Respublikasi bo'yicha elektromobillarni zaryadlash stansiyalarini ko'rsatuvchi va optimal stansiyani tanlash imkonini beruvchi aqlli xarita tizimini ishlab chiqish"

## Asosiy imkoniyatlar

- O'zbekiston bo'yicha zaryadlash stansiyalari xaritasi (ulagich, quvvat, narx, ish vaqti)
- Atrofdagi qulayliklar: oshxona, mehmonxona, masjid, hojatxona, do'kon
- Optimal stansiyani tanlash — ko'p mezonli baholash (AHP + TOPSIS)
- Uzoq yo'l rejalashtiruvchi — qayerda va qancha zaryadlash kerak
- **Yetib borish ehtimoli** — harorat, shamol, relyef va tezlikni hisobga olgan holda
- **Yetib borganda bo'sh joy ehtimoli** — navbat modeli (M/M/c)
- Qizil zonalar — stansiyalar kam bo'lgan trassa qismlari
- Avtomobil rejimi (katta tugmalar), oflayn rejim

## Tuzilma

| Papka | Tarkibi |
|---|---|
| `mobile/` | React Native (Expo SDK 58) + NativeWind ilova |
| `backend/` | Node.js API + PostgreSQL/PostGIS (8-kundan) |
| `docs/` | Loyiha hujjatlari, ekranlar rejasi |

## Ishga tushirish

```bash
cd mobile
npm install
npx expo run:android   # development build (Android Studio kerak)
```
