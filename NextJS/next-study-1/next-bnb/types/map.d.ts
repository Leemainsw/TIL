declare module "googlemap";

declare global {
  interface window {
    google: any;
    initMap: () => void;
  }
}
