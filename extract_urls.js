const fs = require('fs');

async function extractUrls() {
  try {
    const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
    
    // Some env variables logic if required
    const data = new Uint8Array(fs.readFileSync('public/Resume.pdf'));
    const doc = await pdfjsLib.getDocument({data}).promise;
    
    let allText = '';
    
    for (let pageNum = 1; pageNum <= doc.numPages; pageNum++) {
      const page = await doc.getPage(pageNum);
      const textContent = await page.getTextContent();
      
      const annotations = await page.getAnnotations();
      console.log(`\n--- Page ${pageNum} Annotations/Links ---`);
      annotations.forEach((anno) => {
        if (anno.url) {
          console.log(`URL: ${anno.url}`);
        }
      });
      console.log('--- Text content summary below ---');
      const pageText = textContent.items.map(item => item.str).join(' ');
      console.log(pageText.substring(0, 100) + '... (truncated)');
    }
  } catch (err) {
    console.error("Error reading PDF with pdfjs:", err.message);
  }
}

extractUrls();
