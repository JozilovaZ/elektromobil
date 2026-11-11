type Scale = Record<50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, string>;

declare const colors: {
  brand: Scale;
  power: { ac: string; dc: string; ultra: string };
  status: { free: string; busy: string; offline: string; unknown: string };
  risk: { safe: string; warn: string; danger: string };
  surface: { light: string; card: string; dark: string; cardDark: string };
};

export = colors;
