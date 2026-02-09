// Tipagem para Google Tag Manager DataLayer e Facebook Pixel

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    dataLayer: Record<string, any>[];
    fbq: any;
    _fbq: any;
  }
}

export {};
