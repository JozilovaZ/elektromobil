/**
 * Ilovaning asosiy ma'lumot tiplari.
 * Backend (Node.js) ham keyinroq shu tuzilmaga mos API qaytaradi.
 */

/** O'zbekistonda uchraydigan ulagich standartlari */
export type ConnectorType =
  | 'GBT_AC' // GB/T AC — Xitoy mashinalari (BYD, Chery, Zeekr...)
  | 'GBT_DC' // GB/T DC
  | 'CCS2'
  | 'CHADEMO'
  | 'TYPE2'; // Yevropa AC

export type ConnectorStatus = 'free' | 'busy' | 'offline' | 'unknown';

/** Quvvat toifasi: AC 7–22 / DC 40–60 / DC 120+ */
export type PowerClass = 'ac' | 'dc' | 'ultra';

export interface Connector {
  id: string;
  type: ConnectorType;
  powerKw: number;
  status: ConnectorStatus;
}

export type AmenityType =
  | 'food' // oshxona, kafe
  | 'hotel'
  | 'mosque'
  | 'wc'
  | 'shop'
  | 'rest'; // dam olish joyi

export interface Amenity {
  type: AmenityType;
  name: string;
  distanceM: number;
}

export interface Station {
  id: string;
  name: string;
  operator: string;
  region: string; // viloyat
  address: string;
  lat: number;
  lng: number;
  connectors: Connector[];
  pricePerKwh: number; // so'm
  open24h: boolean;
  hours?: string; // masalan "08:00–22:00"
  amenities: Amenity[];
  rating: number; // 0–5
  reviewsCount: number;
}

export interface CarModel {
  id: string;
  brand: string;
  model: string;
  batteryKwh: number; // foydali sig'im
  maxAcKw: number;
  maxDcKw: number;
  connectors: ConnectorType[];
  consumptionKwhPer100km: number; // o'rtacha sarf
}

/** Foydalanuvchi ustuvorligi — AHP og'irliklar to'plamini tanlaydi */
export type Priority = 'fast' | 'cheap' | 'comfort';
