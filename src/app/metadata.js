const props = {
  hostname: process.env.HOSTNAME || 'https://alvarizqi.my.id',
  name: "Alvarizqi Cahya Saputra",
  jobTitle: "Software Developer",
  description: "I am a Software Developer specializing in web application development, with expertise in PHP, Python, JavaScript, and more, and can use several frameworks.",
  keywords: "alvarizqi, Alvarizqi Cahya, Developer, Software Developer, Pengembang Aplikasi Web, Web Development, Pengembangan Mobile Apps, React Developer, Full-stack Developer, Pemrograman JavaScript, Backend Development, Cloud Computing, Pengembangan API, Pengembangan Perangkat Lunak, Mobile App Developer, Python Developer, Data Science, AI Developer, Blockchain Development, Agile Software Development, Teknologi Terbaru, Solusi Teknologi Inovatif, Pengembangan Solusi Digital, Pengembang Software Indonesia",
}

export const globalMetadata = {
  name: props.name,
  title: `${props.name} | ${props.jobTitle}`,
  description: props.description,
  keywords: props.keywords,
  metadataBase: new URL(props.hostname),
  canonical: props.hostname,
  openGraph: {
    title: `${props.name} | ${props.jobTitle}`,
    description: props.description,
    url: props.hostname,
    siteName: props.name,
    profile: {
      firstName: "Alvarizqi Cahya",
      lastName: "Saputra",
      username: "alvarizqicahya",
    },
    images: [
      {
        url: "/assets/images/profile.png",
        width: 300,
        height: 300,
        alt: props.name,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    cardType: "summary_large_image",
    title: `${props.name} | ${props.jobTitle}`,
    description: props.description,
    handle: "@alvarizqicahya",
    site: "@alvarizqicahya",
    creator: "@alvarizqicahya",
    images: ["/assets/images/profile.png"],
    icons: {
      icon: "/favicon.ico",
      apple: "/favicon.ico",
    },
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "author",
      content: props.name,
    },
    {
      name: "keywords",
      content: props.keywords,
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/assets/images/icon.png",
    },
    {
      rel: "apple-touch-icon",
      href: "/assets/images/icon.png",
      sizes: "80x80",
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
    {
      rel: 'sitemap',
      type: 'application/xml',
      title: 'Sitemap',
      href: '/sitemap.xml',
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
  icon: "/favicon.ico",
};