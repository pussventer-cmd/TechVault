export type Creator = {
  id: string
  name: string
  handle: string
  role: string
  image: string
  description: string

  gear: {
    label: string
    value: string
  }[]

  socials: {
    label: string
    url: string
  }[]
}

export const creators: Creator[] = [
  {
    id: "kawtech",
    name: "KawTech",
    handle: "@kaw.tech",
    role: "Tech Creator",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0syfHOmQsDipOjmTRONZeWf2mvj4Ug8R5_eIrXdKsPQ&s=10",
    description:
      "Gaming and tech creator focused on setups, gaming gear, PCs and tech content.",

    gear: [
      {
        label: "Keyboard",
        value: "Logitech G915 TKL",
      },
      {
        label: "Mouse",
        value: "Logitech G903",
      },
      {
        label: "Monitor",
        value: "Samsung Odyssey G6",
      },
      {
        label: "Headset",
        value: "Logitech A10",
      },
    ],

    socials: [
      {
        label: "Instagram",
        url: "https://www.instagram.com/kaw.tech/",
      },
      {
        label: "YouTube",
        url: "https://www.youtube.com/@kawtech",
      },
    ],
  },

  {
    id: "vermax",
    name: "Vermax",
    handle: "@vermax",
    role: "Tech & Gaming Creator",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnL33_dyYddsgsi3YtVzKedRg_MvYDHLT7nM9FM2cREdHKmd97B0F5ZGU&s=10",
    description:
      "Gaming, tech and setup creator known for PC builds, desk setups and gaming content.",

    gear: [
      {
        label: "Keyboard",
        value: "Razer Huntsman V3 Pro Mini",
      },
      {
        label: "Mouse",
        value: "Corsair Sabre v2 PRO Ultralight",
      },
      {
        label: "Monitor",
        value: 'LG 45GX900A-B 45" UltraGear OLED',
      },
      {
        label: "Microphone",
        value: "Elgato Wave:3",
      },
    ],

    socials: [
      {
        label: "YouTube",
        url: "https://www.youtube.com/@Vermax",
      },
    ],
  },

  {
    id: "exotech",
    name: "ExoTech",
    handle: "@exo..tech",
    role: "Tech Creator",
    image:
      "https://yt3.googleusercontent.com/cDeUyRjrLDaSVTu8lnqofLqf_3jXSRH-scBdaQeZus7twpl0Lp4iVWgNm7WQ-unfugFoI5BExCI=s900-c-k-c0x00ffffff-no-rj",
    description:
      "Tech and gaming setup creator covering PCs, gaming gear, setups and tech.",

    gear: [
      {
        label: "Keyboard",
        value: "Gear not verified",
      },
      {
        label: "Mouse",
        value: "Gear not verified",
      },
      {
        label: "Monitor",
        value: "Gear not verified",
      },
      {
        label: "Headset",
        value: "Gear not verified",
      },
    ],

    socials: [
      {
        label: "TikTok",
        url: "https://www.tiktok.com/@exo..tech",
      },
    ],
  },
]