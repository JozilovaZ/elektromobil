/**
 * Dizayn tizimi ranglari вЂ” yagona manba.
 * tailwind.config.js shu fayldan o'qiydi, shuning uchun ranglar
 * className ('bg-brand-500') va JS ichida (ikonka, xarita markeri) bir xil bo'ladi.
 */
const colors = {
  brand: {
    50: '#ECFDF5',
    100: '#D1FAE5',
    200: '#A7F3D0',
    300: '#6EE7B7',
    400: '#34D399',
    500: '#10B981',
    600: '#059669',
    700: '#047857',
    800: '#065F46',
    900: '#064E3B',
  },

  /** Quvvat toifalari вЂ” xarita markerlari va nishonlar uchun */
  power: {
    ac: '#3B82F6', // AC 7вЂ“22 kVt вЂ” sekin
    dc: '#F59E0B', // DC 40вЂ“60 kVt вЂ” tez
    ultra: '#8B5CF6', // DC 120+ kVt вЂ” o'ta tez
  },

  /** Ulagich / stansiya holati */
  status: {
    free: '#22C55E', // bo'sh
    busy: '#F59E0B', // band
    offline: '#EF4444', // ishlamayapti
    unknown: '#94A3B8', // ma'lumot yo'q
  },

  /** Xavf darajasi вЂ” yetib borish ehtimoli, qizil zonalar */
  risk: {
    safe: '#22C55E',
    warn: '#F59E0B',
    danger: '#EF4444',
  },

  surface: {
    light: '#F8FAFC',
    card: '#FFFFFF',
    dark: '#0B1220',
    cardDark: '#151E2E',
  },
};

module.exports = colors;

