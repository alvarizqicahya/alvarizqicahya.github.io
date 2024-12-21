const hostname = process.env.HOSTNAME || 'https://alvarizqi.my.id';

export const globalMetadata = {
  title: "Alvarizqi Cahya Saputra | Software Developer",
  description: "I am a Software Developer specializing in web application development, with expertise in PHP, Python, JavaScript, and more, and can use several frameworks.",
  metadataBase: new URL(hostname),
  canonical: hostname,
  openGraph: {
    title: this.title,
    description: this.description,
    url: this.canonical,
    siteName: this.title,
    images: [
      {
        url: "/assets/images/profile.png",
        width: 300,
        height: 300,
        alt: this.title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: this.title,
    description: this.description,
    images: ["/assets/images/profile.png"],
    icons: {
      icon: "/favicon.ico",
      apple: "/favicon.ico",
    },
  },
  manifest: "/manifest.json",
  icon: "/favicon.ico",
};