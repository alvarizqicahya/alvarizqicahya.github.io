const generateRobotsTxt = require('generate-robotstxt');
const fs = require('fs');
const hostname = process.env.HOSTNAME || 'https://alvarizqi.my.id';
const policy = [
    {
        userAgent: '*',
        allow: '/',
    },
]

async function generateRobots() {
    const content = await generateRobotsTxt({
        policy: policy,
        sitemap: `${hostname}/sitemap.xml`,
        host: hostname,
    });

    fs.writeFileSync('./public/robots.txt', content);
}

generateRobots()
    .then((content) => {
        console.log(content);
        return content;
    })
    .catch((error) => {
        throw error;
    });