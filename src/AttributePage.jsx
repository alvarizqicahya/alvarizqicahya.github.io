import Attribute from "./Attribute.jsx";

const AttributePage = {
    'Title': `${Attribute.Name} | ${Attribute.JobTitle}`,
    'Description': 'I am a Software Developer specializing in building reliable and user-friendly web applications. Proficient in programming languages like JavaScript, Python, PHP, and more. I focus on developing scalable solutions using frameworks such as React, Django, Laravel.',
    'Icon': Attribute.ImgIcon,
    'Profile': Attribute.ImgProfile || 'https://via.placeholder.com/150',
    'Keywords': 'Alvarizqi Cahya, Developer, Software Developer, Pengembang Aplikasi Web, Web Development, Pengembangan Mobile Apps, React Developer, Full-stack Developer, Pemrograman JavaScript, Backend Development, Cloud Computing, Pengembangan API, Pengembangan Perangkat Lunak, Mobile App Developer, Python Developer, Data Science, AI Developer, Blockchain Development, Agile Software Development, Teknologi Terbaru, Solusi Teknologi Inovatif, Pengembangan Solusi Digital, Pengembang Software Indonesia',
    'Author': Attribute.Name,
    'Language': 'id',
    'Robots': 'index, follow',
    'Copyright': Attribute.Name,
    'Canonical': window.location.href,
    'Alternate': '',
    'OpenGraph': '',
    'Twitter': '@alvarizqicahya',
    'Schema': '',
    'JsonLd': '',
    'JsonLdScript': `
    <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": AttributePage['Title'],
          "description": AttributePage['Description'],
          "url": AttributePage['Canonical'],
          "author": {
            "@type": "Person",
            "name": AttributePage['Author']
          }
        }
     </script>`,
}

export default AttributePage;