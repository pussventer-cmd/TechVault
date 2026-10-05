export type Product = {
  id: string
  name: string
  brand: string
  category: string
  price: number
  currency: string
  image_url: string
  description: string
  product_url: string
  specs: {
    label: string
    value: string
  }[]
}

export const products: Product[] = [
  {
    id: "wooting-80he",
    name: "Wooting 80HE",
    brand: "Wooting",
    category: "Keyboards",
    price: 291,
    currency: "USD",
    image_url:
      "https://tech4gamers.com/wp-content/uploads/2024/09/Wooting-80-Beauty-Shot.jpg",
    description:
      "A high-performance gaming keyboard with Hall Effect switches and Rapid Trigger.",
    product_url: "https://wooting.io/wooting-80he",
    specs: [
      { label: "Switches", value: "Hall Effect" },
      { label: "Polling Rate", value: "8K Hz" },
      { label: "Layout", value: "80%" },
      { label: "Connection", value: "USB-C" },
    ],
  },
  {
    id: "razer-viper-v3-pro",
    name: "Razer Viper V3 Pro",
    brand: "Razer",
    category: "Mice",
    price: 159,
    currency: "USD",
    image_url:
      "https://assets2.razerzone.com/images/pnx.assets/4c0e9e3b9e5c7e8d7a4d7c8d4f5e4f4d/razer-viper-v3-pro-black-hero.png",
    description:
      "A lightweight competitive wireless gaming mouse designed for high-performance FPS gaming.",
    product_url: "https://www.razer.com/gaming-mice/razer-viper-v3-pro",
    specs: [
      { label: "Weight", value: "54 g" },
      { label: "Sensor", value: "Focus Pro 35K" },
      { label: "Polling Rate", value: "8K Hz" },
      { label: "Connection", value: "Wireless" },
    ],
  },
  {
    id: "logitech-g-pro-x-superlight-2",
    name: "Logitech G Pro X Superlight 2",
    brand: "Logitech",
    category: "Mice",
    price: 159,
    currency: "USD",
    image_url:
      "https://resource.logitech.com/content/dam/gaming/en/products/pro-x-superlight-2/gallery/pro-x-superlight-2-black-1.png",
    description:
      "A lightweight wireless gaming mouse built for competitive performance.",
    product_url:
      "https://www.logitechg.com/en-us/products/gaming-mice/pro-x-superlight-2-wireless-mouse.html",
    specs: [
      { label: "Weight", value: "60 g" },
      { label: "Sensor", value: "HERO 2" },
      { label: "Polling Rate", value: "4K Hz" },
      { label: "Connection", value: "Wireless" },
    ],
  },
  {
    id: "steelseries-apex-pro-tkl-gen-3",
    name: "SteelSeries Apex Pro TKL Gen 3",
    brand: "SteelSeries",
    category: "Keyboards",
    price: 219,
    currency: "USD",
    image_url:
      "https://media.steelseriescdn.com/thumbs/filer_public/1a/7a/1a7a1d6a-6a2c-4c7d-a8d3-3b3e3f4b5c6d/apex-pro-tkl-gen-3.png",
    description:
      "A premium competitive keyboard with adjustable actuation and rapid trigger.",
    product_url:
      "https://steelseries.com/gaming-keyboards/apex-pro-tkl-gen-3",
    specs: [
      { label: "Switches", value: "OmniPoint 3.0" },
      { label: "Layout", value: "TKL" },
      { label: "Polling Rate", value: "8K Hz" },
      { label: "Connection", value: "USB-C" },
    ],
  },
  {
    id: "razer-huntsman-v3-pro-tkl",
    name: "Razer Huntsman V3 Pro TKL",
    brand: "Razer",
    category: "Keyboards",
    price: 219,
    currency: "USD",
    image_url:
      "https://assets2.razerzone.com/images/pnx.assets/8f8d6d9a2b7d4f7d9e5a3b2c1d0e9f8a/razer-huntsman-v3-pro-tkl.png",
    description:
      "A tournament-ready analog optical keyboard built for competitive gaming.",
    product_url:
      "https://www.razer.com/gaming-keyboards/razer-huntsman-v3-pro-tenkeyless",
    specs: [
      { label: "Switches", value: "Analog Optical" },
      { label: "Layout", value: "TKL" },
      { label: "Rapid Trigger", value: "Yes" },
      { label: "Connection", value: "USB-C" },
    ],
  },
]