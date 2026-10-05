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
      "https://resource.logitech.com/content/dam/gaming/en/products/pro-x2-superlight-2/gallery/pro-x2-superlight-2-black-1.png",
    description:
      "A lightweight wireless gaming mouse built for competitive performance.",
    product_url:
      "https://www.logitechg.com/en-us/products/gaming-mice/pro-x2-superlight-wireless-mouse.html",
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
      "https://steelseries.com/cdn-cgi/image/format=auto,quality=80,width=800/https://media.steelseriescdn.com/thumbs/filer_public/1a/7a/1a7a1d6a-6a2c-4c7d-a8d3-3b3e3f4b5c6d/apex-pro-tkl-gen-3.png",
    description:
      "A premium competitive keyboard with adjustable actuation and rapid trigger.",
    product_url: "https://steelseries.com/gaming-keyboards/apex-pro-tkl-gen-3",
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

  // =========================
  // PCS
  // =========================

  {
    id: "corsair-vengeance-i8200",
    name: "Corsair Vengeance i8200",
    brand: "Corsair",
    category: "PCs",
    price: 4199,
    currency: "USD",
    image_url:
      "https://c1.neweggimages.com/productimage/nb640/83-304-054-06.png",
    description:
      "A high-end prebuilt gaming PC featuring a powerful Intel processor, NVIDIA GeForce RTX graphics, DDR5 memory and liquid cooling.",
    product_url:
      "https://www.corsair.com/us/en/p/gaming-computers/cs-9060028-na/vengeance-i8200-gaming-pc-intel-core-i9-14900kf-geforce-rtx-5080-64gb-ddr5-4tb-2tb-2tb-m2-ssd-win11-pro-cs-9060028-na",
    specs: [
      { label: "CPU", value: "Intel Core i9-14900KF" },
      { label: "GPU", value: "NVIDIA GeForce RTX 5080" },
      { label: "RAM", value: "64GB DDR5" },
      { label: "Storage", value: "4TB NVMe SSD" },
      { label: "Cooling", value: "360mm Liquid Cooling" },
    ],
  },

  {
    id: "alienware-aurora-r16",
    name: "Alienware Aurora R16",
    brand: "Alienware",
    category: "PCs",
    price: 2599,
    currency: "USD",
    image_url:
      "https://m.media-amazon.com/images/I/411AKdLr8cL._AC_.jpg",
    description:
      "A compact Alienware gaming desktop with a clean design, AlienFX lighting and strong gaming performance.",
    product_url:
      "https://www.dell.com/en-nz/shop/desktop-computers/sf/alienware-desktops",
    specs: [
      { label: "CPU", value: "Intel Core i7-14700F" },
      { label: "GPU", value: "NVIDIA GeForce RTX 4060" },
      { label: "RAM", value: "16GB DDR5" },
      { label: "Storage", value: "512GB SSD + 1TB HDD" },
      { label: "Lighting", value: "AlienFX RGB" },
    ],
  },

  {
    id: "asus-rog-g700",
    name: "ASUS ROG G700",
    brand: "ASUS ROG",
    category: "PCs",
    price: 3999,
    currency: "USD",
    image_url:
      "https://dlcdnwebimgs.asus.com/files/media/7526bd52-a9d8-45a1-abc4-757102207b86/v1/img/design/front-pd.png",
    description:
      "A full-tower ROG gaming desktop designed for high-end gaming with powerful NVIDIA RTX graphics and premium cooling.",
    product_url:
      "https://rog.asus.com/nz/desktops/full-tower/rog-g700-2025-g700/",
    specs: [
      { label: "CPU", value: "Intel Core Ultra 7" },
      { label: "GPU", value: "Up to NVIDIA GeForce RTX 5080" },
      { label: "RAM", value: "Up to 32GB DDR5" },
      { label: "Storage", value: "Up to 2TB PCIe 4.0" },
      { label: "PSU", value: "1000W" },
    ],
  },

  {
    id: "msi-aegis-rs2-ai",
    name: "MSI Aegis RS2 AI",
    brand: "MSI",
    category: "PCs",
    price: 2999,
    currency: "USD",
    image_url:
      "https://asset-us-store.msi.com/image/cache/catalog/Pd_page/Desktops/2025/AEGISRS2AIA/AEGISRS2AIA-1-1024x1024.png",
    description:
      "A powerful MSI gaming desktop with an Intel Core Ultra processor, NVIDIA RTX 5070 graphics, DDR5 memory and liquid RGB cooling.",
    product_url:
      "https://us-store.msi.com/Desktops/gaming-pcs/Aegis-Series/Aegis-RS2-AI-A2NVP7-2209US",
    specs: [
      { label: "CPU", value: "Intel Core Ultra 7 270K" },
      { label: "GPU", value: "NVIDIA GeForce RTX 5070 12GB" },
      { label: "RAM", value: "32GB DDR5" },
      { label: "Storage", value: "2TB NVMe Gen4" },
      { label: "Cooling", value: "Liquid RGB Cooling" },
    ],
  },

  {
    id: "hp-omen-45l",
    name: "HP OMEN 45L",
    brand: "HP OMEN",
    category: "PCs",
    price: 3999,
    currency: "USD",
    image_url:
      "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07762829.png",
    description:
      "A large high-performance gaming desktop featuring the signature OMEN Cryo Chamber, tempered glass and extensive upgrade options.",
    product_url:
      "https://www.hp.com/nz-en/desktops/omen-45l.html",
    specs: [
      { label: "CPU", value: "Up to Intel Core Ultra 9" },
      { label: "GPU", value: "Up to NVIDIA GeForce RTX 5090" },
      { label: "RAM", value: "Up to 64GB DDR5" },
      { label: "Cooling", value: "OMEN Cryo Chamber" },
      { label: "Case", value: "45L Tempered Glass" },
    ],
  },
]