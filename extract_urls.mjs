import fs from 'fs';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.min.mjs';

async function extractUrls() {
  try {
    const data = new Uint8Array(fs.readFileSync('public/Resume.pdf'));
    const doc = await pdfjsLib.getDocument({data}).promise;
    
    for (let pageNum = 1; pageNum <= doc.numPages; pageNum++) {
      const page = await doc.getPage(pageNum);
      const annotations = await page.getAnnotations();
      console.log(`\n--- Page ${pageNum} Annotations/Links ---`);
      
      let items = [];
      for (const anno of annotations) {
        if (anno.url) {
          items.push({
            url: anno.url,
            // we can try finding nearest text if we wanted, but let's just dump URLs
          });
        }
      }
      console.log(JSON.stringify(items, null, 2));

      // Quick text print to correlate URLs with certs
      const textContent = await page.getTextContent();
      const text = textContent.items.map(item => item.str).join(' ');
      console.log(`\n--- Page ${pageNum} Text Content ---`);
      console.log(text.replace(/\s+/g, ' ').slice(0, 1000) + '...');
    }
  } catch (err) {
    console.error("Error reading PDF with pdfjs:", err.message);
  }
}

extractUrls();
