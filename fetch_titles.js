const fs = require('fs');
const https = require('https');

const urls = [
  "https://www.linkedin.com/learning/certificates/836efb8e1f86af1f46d292966543ebc44b8b43611c6ce68ce97de5cc8af42aad",
  "https://www.linkedin.com/learning/certificates/977ee8f4ca31243f19d6183771c07e0e7350e2b530cae9c25bee67c1ff80d915",
  "https://www.coursera.org/account/accomplishments/verify/8RXB16LFQVEW",
  "https://www.coursera.org/account/accomplishments/verify/27UUCT4HYEB2",
  "https://www.skills.google/public_profiles/e55023ab-98bc-49d8-9edc-1de831c54680/badges/20054921",
  "https://courses.kodacy.com/kodacy-certificate/?cert_hash=66d965af2f1dd51e",
  "https://courses.kodacy.com/kodacy-certificate/?cert_hash=760e7967d0585226",
  "https://courses.kodacy.com/kodacy-certificate/?cert_hash=99ff7d5cda51d1c0",
  "https://courses.kodacy.com/kodacy-certificate/?cert_hash=9731cf4efc2e5bb3",
  "https://www.coursera.org/account/accomplishments/verify/BF0SZRGAIB2A",
  "https://www.coursera.org/account/accomplishments/verify/VGGPTCCXCR34",
  "https://www.coursera.org/account/accomplishments/verify/YY817DL90X6U",
  "https://www.coursera.org/account/accomplishments/verify/EQ7VC1VS5TOZ",
  "https://www.coursera.org/account/accomplishments/verify/OZ6RAG4P9JH9",
  "https://www.coursera.org/account/accomplishments/specialization/9XDEXDR1GF40",
  "https://www.coursera.org/account/accomplishments/verify/IIQ0WB5K7FL9",
  "https://www.coursera.org/account/accomplishments/verify/GMC2WNO34GON",
  "https://www.coursera.org/account/accomplishments/verify/YKUUUHOP1NZD",
  "https://www.coursera.org/account/accomplishments/verify/Y5GBBLZLUP55",
  "https://certificate.givemycertificate.com/c/de526b28-707d-4840-a1a1-00819ed166bc",
  "https://credsverse.com/credentials/5845040e-a584-4509-af82-7f3ed7e2d72c"
];

function fetchTitle(url) {
  return new Promise((resolve) => {
    try {
      https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' }}, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          const titleMatch = data.match(/<title[^>]*>([^<]+)<\/title>/i);
          let title = titleMatch ? titleMatch[1].trim() : 'No title found';
          
          if (title.includes('Coursera')) {
             // Look for specific certificate course names in meta tags for Coursera
             const metaMatch = data.match(/<meta\s+name="title"\s+content="([^"]+)"/i);
             if (metaMatch) {
                title = metaMatch[1];
             } else {
                 const ogMatch = data.match(/<meta\s+property="og:title"\s+content="([^"]+)"/i);
                 if (ogMatch) title = ogMatch[1];
             }
          }
          resolve({ url, title });
        });
      }).on('error', (err) => resolve({ url, title: 'Network Error' }));
    } catch (e) {
      resolve({ url, title: 'Parse Error' });
    }
  });
}

async function run() {
  const results = await Promise.all(urls.map(fetchTitle));
  fs.writeFileSync('cert_titles.json', JSON.stringify(results, null, 2));
  console.log('Done writing cert_titles.json');
}

run();
