const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');
const pages = [];
const hostname = process.env.HOSTNAME || 'https://alvarizqi.my.id';

async function generateSitemap() {
    const sitemap = new SitemapStream({ hostname: hostname });

    sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
    pages.forEach((page) => {
        sitemap.write({ url: page, changefreq: 'weekly', priority: 0.8 });
    });

    sitemap.end();
    const data = await streamToPromise(sitemap);
    fs.writeFileSync('./public/sitemap.xml', data.toString());
}

generateSitemap()
    .then((content) => {
        console.log(content);
        return content;
    })
    .catch((error) => {
        throw error;
    });