// Tipagem para Google Tag Manager DataLayer e Facebook Pixel

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
    fbq: any;
    _fbq: any;
  }
}

export {};
