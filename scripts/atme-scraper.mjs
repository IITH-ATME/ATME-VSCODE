import FirecrawlApp from '@mendable/firecrawl-js';
import { readFileSync, writeFileSync } from 'fs';

const API_KEY = process.env.FIRECRAWL_API_KEY;
if (!API_KEY) { console.error('Missing FIRECRAWL_API_KEY'); process.exit(1); }
const fc = new FirecrawlApp({ apiKey: API_KEY });

// ── helpers ──────────────────────────────────────────────────────────────────
const errors = [];
async function safeScrape(url, opts = {}) {
  try {
    const res = await fc.scrapeUrl(url, { formats: ['markdown', 'html'], ...opts });
    if (!res || res.error) { errors.push({ url, err: res?.error || 'no response' }); return null; }
    return res;
  } catch(e) {
    errors.push({ url, err: e.message });
    return null;
  }
}

// Concurrency pool
async function pool(tasks, concurrency) {
  const results = new Array(tasks.length);
  let idx = 0;
  let done = 0;
  await new Promise((resolve) => {
    function next() {
      if (idx >= tasks.length) {
        if (++done === tasks.length) resolve();
        return;
      }
      const i = idx++;
      tasks[i]().then(r => { results[i] = r; done++; if (done === tasks.length) resolve(); else next(); });
    }
    for (let k = 0; k < Math.min(concurrency, tasks.length); k++) next();
    if (tasks.length === 0) resolve();
  });
  return results;
}

function extractWpImages(html = '') {
  const imgs = [];
  const re = /<img[^>]+>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const tag = m[0];
    const src = (tag.match(/src="([^"]+)"/i) || [])[1];
    const alt = (tag.match(/alt="([^"]*)"/i) || [])[1] || '';
    if (src && src.includes('/wp-content/uploads/')) imgs.push({ url: src, alt });
  }
  return imgs;
}

function findPrimaryPhoto(html = '') {
  // Look for wp-content/uploads img – first one that looks like a person photo
  const re = /<img[^>]+src="(https:\/\/atme\.edu\.in\/wp-content\/uploads\/[^"]+)"[^>]*>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    return m[1];
  }
  return null;
}

// ══════════════════════════════════════════════════════════════════════════════
// PART 1 – Faculty profile photos
// ══════════════════════════════════════════════════════════════════════════════
console.error('[1/3] Collecting faculty IDs and cvUrls from allFaculty.ts …');

// We inline the data extracted from the TS files
const allFaculty = [
  // cse
  { id: "dr-putte-gowda-d", cvUrl: "https://atme.edu.in/dr-putte-gowda-d/" },
  { id: "dr-j-v-gorabal", cvUrl: "https://atme.edu.in/dr-j-v-gorabal/" },
  { id: "dr-jayantkumar-a-rathod", cvUrl: "https://atme.edu.in/dr-jayantkumar-a-rathod/" },
  { id: "nasreen-fathima", cvUrl: "https://atme.edu.in/nasreen-fathima/" },
  { id: "mr-anil-kumar-c-j", cvUrl: "https://atme.edu.in/mr-anil-kumar-c-j/" },
  { id: "dr-shilpa-b-l", cvUrl: "https://atme.edu.in/dr-shilpa-b-l/" },
  { id: "dr-drakshayini-k-b", cvUrl: "https://atme.edu.in/dr-drakshayini-k-b/" },
  { id: "lakshmi-shree-c-v", cvUrl: "https://atme.edu.in/lakshmi-shree-c-v/" },
  { id: "mrs-sushma-v", cvUrl: "https://atme.edu.in/mrs-sushma-v/" },
  { id: "mrs-keerthana-m-m", cvUrl: "https://atme.edu.in/mrs-keerthana-m-m/" },
  { id: "mr-raghuram-a-s", cvUrl: "https://atme.edu.in/mr-raghuram-a-s/" },
  { id: "mrs-kavyashree-e-d", cvUrl: "https://atme.edu.in/mrs-kavyashree-e-d/" },
  { id: "mr-kalathma-m-k", cvUrl: "https://atme.edu.in/mr-kalathma-m-k/" },
  { id: "mrs-roopa-b", cvUrl: "https://atme.edu.in/mrs-roopa-b/" },
  { id: "mr-sandesh-r", cvUrl: "https://atme.edu.in/mr-sandesh-r/" },
  { id: "mrs-shrilakshmi-prasad", cvUrl: "https://atme.edu.in/mrs-shrilakshmi-prasad/" },
  { id: "mrs-ashwini-p", cvUrl: "https://atme.edu.in/mrs-ashwini-p/" },
  { id: "vanishree", cvUrl: "https://atme.edu.in/vanishree/" },
  { id: "bindushree-v", cvUrl: "https://atme.edu.in/bindushree-v/" },
  { id: "kaushik-triyambaka-mysur", cvUrl: "https://atme.edu.in/kaushik-triyambaka-mysur/" },
  { id: "yashaswini-urs", cvUrl: "https://atme.edu.in/yashaswini-urs/" },
  { id: "ms-rakshitha-n-m", cvUrl: "https://atme.edu.in/ms-rakshitha-n-m/" },
  { id: "ms-kavitha-s", cvUrl: "https://atme.edu.in/ms-kavitha-s/" },
  { id: "gadi-divyasree", cvUrl: "https://atme.edu.in/gadi-divyasree/" },
  { id: "darshini-m-s", cvUrl: "https://atme.edu.in/darshini-m-s/" },
  { id: "mr-theja-n", cvUrl: "https://atme.edu.in/mr-theja-n/" },
  { id: "ms-akanksha-v", cvUrl: "https://atme.edu.in/ms-akanksha-v/" },
  { id: "bhavya-dechamma-k-s", cvUrl: "https://atme.edu.in/bhavya-dechamma-k-s/" },
  { id: "arpitha-a", cvUrl: "https://atme.edu.in/arpitha-a/" },
  { id: "ms-kavyashree-b-l", cvUrl: "https://atme.edu.in/ms-kavyashree-b-l/" },
  { id: "k-s-yogesh", cvUrl: "https://atme.edu.in/k-s-yogesh/" },
  { id: "rajiv-p", cvUrl: "https://atme.edu.in/rajiv-p/" },
  { id: "vinay-kumar-m-n", cvUrl: "https://atme.edu.in/vinay-kumar-m-n/" },
  { id: "nagappa-tn", cvUrl: "https://atme.edu.in/nagappa-tn/" },
  { id: "nagesh-j", cvUrl: "https://atme.edu.in/nagesh-j/" },
  { id: "k-babu-kamrath", cvUrl: "https://atme.edu.in/k-babu-kamrath/" },
  { id: "rakesh-h-m", cvUrl: "https://atme.edu.in/rakesh-h-m/" },
  { id: "vidyashree-h-m", cvUrl: "https://atme.edu.in/vidyashree-h-m/" },
  { id: "sathisha-h-d", cvUrl: "https://atme.edu.in/sathisha-h-d/" },
  { id: "sinchana-s", cvUrl: "https://atme.edu.in/sinchana-s/" },
  { id: "yogesha-k-c", cvUrl: "https://atme.edu.in/yogesha-k-c/" },
  { id: "dhananjaya-k-s", cvUrl: "https://atme.edu.in/dhananjaya-k-s/" },
  { id: "mrs-kavitha-g", cvUrl: "https://atme.edu.in/mrs-kavitha-g/" },
  // ece
  { id: "dr-l-basavaraj", cvUrl: "https://atme.edu.in/dr-l-basavaraj/" },
  { id: "dr-s-r-bhagyashree", cvUrl: "https://atme.edu.in/dr-s-r-bhagyashree/" },
  { id: "dr-prathibha-m-k", cvUrl: "https://atme.edu.in/dr-prathibha-m-k/" },
  { id: "dr-manjula-a-v", cvUrl: "https://atme.edu.in/dr-manjula-a-v/" },
  { id: "dr-veeraprathap-v", cvUrl: "https://atme.edu.in/dr-veeraprathap-v/" },
  { id: "mrs-shalini-hanok", cvUrl: "https://atme.edu.in/mrs-shalini-hanok/" },
  { id: "mr-guruprasad-k-n", cvUrl: "https://atme.edu.in/mr-guruprasad-k-n/" },
  { id: "mr-pradeep-kumar-y", cvUrl: "https://atme.edu.in/mr-pradeep-kumar-y/" },
  { id: "chandra-shekar-p", cvUrl: "https://atme.edu.in/chandra-shekar-p/" },
  { id: "mr-manjunath-k", cvUrl: "https://atme.edu.in/mr-manjunath-k/" },
  { id: "mr-girish-m", cvUrl: "https://atme.edu.in/mr-girish-m/" },
  { id: "mrs-juslin-f", cvUrl: "https://atme.edu.in/mrs-juslin-f/" },
  { id: "ms-anupama-shetter", cvUrl: "https://atme.edu.in/ms-anupama-shetter/" },
  { id: "mrs-keerthi-a-kumbar", cvUrl: "https://atme.edu.in/mrs-keerthi-a-kumbar/" },
  { id: "ms-mythri-r", cvUrl: "https://atme.edu.in/ms-mythri-r/" },
  { id: "rajeev-gowda-r", cvUrl: "https://atme.edu.in/rajeev-gowda-r/" },
  { id: "swetha-k-t", cvUrl: "https://atme.edu.in/swetha-k-t/" },
  { id: "mrs-spoorthi-p-n", cvUrl: "https://atme.edu.in/mrs-spoorthi-p-n/" },
  { id: "madhurya-b-eshwar", cvUrl: "https://atme.edu.in/madhurya-b-eshwar/" },
  { id: "mr-nagesh-m-s", cvUrl: "https://atme.edu.in/mr-nagesh-m-s/" },
  { id: "mr-manjunatha-h-r", cvUrl: "https://atme.edu.in/mr-manjunatha-h-r/" },
  { id: "soma-sundara", cvUrl: "https://atme.edu.in/soma-sundara/" },
  { id: "srikanta-murthy-b", cvUrl: "https://atme.edu.in/srikanta-murthy-b/" },
  { id: "karunakara-babu", cvUrl: "https://atme.edu.in/karunakara-babu/" },
  { id: "manuloka-h-g", cvUrl: "https://atme.edu.in/manuloka-h-g/" },
  { id: "sudhakar-m", cvUrl: "https://atme.edu.in/sudhakar-m/" },
  { id: "shivaprasanna-dm", cvUrl: "https://atme.edu.in/shivaprasanna-dm/" },
  { id: "chandrashekar-k", cvUrl: "https://atme.edu.in/chandrashekar-k/" },
  // eee
  { id: "dr-parthasarathy-l", cvUrl: "https://atme.edu.in/dr-parthasarathy-l/" },
  { id: "mr-raghavendra-l", cvUrl: "https://atme.edu.in/mr-raghavendra-l/" },
  { id: "dr-sathish-k-r", cvUrl: "https://atme.edu.in/dr-sathish-k-r/" },
  { id: "mr-praveen-kumar-m", cvUrl: "https://atme.edu.in/mr-praveen-kumar-m/" },
  { id: "mr-shreeshayana-r", cvUrl: "https://atme.edu.in/mr-shreeshayana-r/" },
  { id: "mohan-m", cvUrl: "https://atme.edu.in/mohan-m/" },
  { id: "ms-swapna-h", cvUrl: "https://atme.edu.in/ms-swapna-h/" },
  { id: "mrs-swathi-c-a", cvUrl: "https://atme.edu.in/mrs-swathi-c-a/" },
  { id: "mrs-kavyashree-s", cvUrl: "https://atme.edu.in/mrs-kavyashree-s/" },
  { id: "shilpashri-v-n", cvUrl: "https://atme.edu.in/shilpashri-v-n/" },
  { id: "yasin-sharief", cvUrl: "https://atme.edu.in/yasin-sharief/" },
  { id: "kushal-r", cvUrl: "https://atme.edu.in/kushal-r/" },
  { id: "sunil-kumar-l", cvUrl: "https://atme.edu.in/sunil-kumar-l/" },
  { id: "m-u-giridarshan", cvUrl: "https://atme.edu.in/m-u-giridarshan/" },
  { id: "sindhu-n", cvUrl: "https://atme.edu.in/sindhu-n/" },
  { id: "mr-lohit-kumar-m-c-2", cvUrl: "https://atme.edu.in/mr-lohit-kumar-m-c-2/" },
  { id: "mrs-anusha-b-s", cvUrl: "https://atme.edu.in/mrs-anusha-b-s/" },
  // me
  { id: "dr-srinivasa-k", cvUrl: "https://atme.edu.in/dr-srinivasa-k/" },
  { id: "mr-ravikumar-s", cvUrl: "https://atme.edu.in/mr-ravikumar-s/" },
  { id: "devaraj-m-r", cvUrl: "https://atme.edu.in/devaraj-m-r/" },
  { id: "dr-chethan-s", cvUrl: "https://atme.edu.in/dr-chethan-s/" },
  { id: "dr-mohanakumara-k-c", cvUrl: "https://atme.edu.in/dr-mohanakumara-k-c/" },
  { id: "mr-raghu", cvUrl: "https://atme.edu.in/mr-raghu/" },
  { id: "niranjan-kumar-v-s", cvUrl: "https://atme.edu.in/niranjan-kumar-v-s/" },
  { id: "mr-rohith-s", cvUrl: "https://atme.edu.in/mr-rohith-s/" },
  { id: "mr-hemanth-b-r", cvUrl: "https://atme.edu.in/mr-hemanth-b-r/" },
  { id: "mr-chetana-s", cvUrl: "https://atme.edu.in/mr-chetana-s/" },
  { id: "mr-sukruth-sagar-b-p", cvUrl: "https://atme.edu.in/mr-sukruth-sagar-b-p/" },
  { id: "madesha-s", cvUrl: "https://atme.edu.in/madesha-s/" },
  { id: "mr-ravikumara-m-p", cvUrl: "https://atme.edu.in/mr-ravikumara-m-p/" },
  { id: "mr-h-c-chidambara", cvUrl: "https://atme.edu.in/mr-h-c-chidambara/" },
  { id: "mr-pradeep-kumar-k-b", cvUrl: "https://atme.edu.in/mr-pradeep-kumar-k-b/" },
  { id: "nagendra-r", cvUrl: "https://atme.edu.in/nagendra-r/" },
  { id: "mr-lohit-kumar-m-c", cvUrl: "https://atme.edu.in/mr-lohit-kumar-m-c/" },
  // ce
  { id: "jyothi-d-n", cvUrl: "https://atme.edu.in/jyothi-d-n/" },
  { id: "dr-syed-shakeeb-ur-rahman", cvUrl: "https://atme.edu.in/dr-syed-shakeeb-ur-rahman/" },
  { id: "mr-manu-vijay", cvUrl: "https://atme.edu.in/mr-manu-vijay/" },
  { id: "mrs-shruthi-h-g", cvUrl: "https://atme.edu.in/mrs-shruthi-h-g/" },
  { id: "bharathi-b", cvUrl: "https://atme.edu.in/bharathi-b/" },
  { id: "mr-rudresh-a-n", cvUrl: "https://atme.edu.in/mr-rudresh-a-n/" },
  { id: "puneeth-k", cvUrl: "https://atme.edu.in/puneeth-k/" },
  { id: "namitha-a-p", cvUrl: "https://atme.edu.in/namitha-a-p/" },
  { id: "akhila-c-g", cvUrl: "https://atme.edu.in/akhila-c-g/" },
  { id: "dr-pujitha-ganapathi-c", cvUrl: "https://atme.edu.in/dr-pujitha-ganapathi-c/" },
  { id: "likhit-m-l", cvUrl: "https://atme.edu.in/likhit-m-l/" },
  { id: "mr-jayaram-b-s", cvUrl: "https://atme.edu.in/mr-jayaram-b-s/" },
  { id: "mr-h-dharaneesha", cvUrl: "https://atme.edu.in/mr-h-dharaneesha/" },
  { id: "ms-siddamma-s", cvUrl: "https://atme.edu.in/ms-siddamma-s/" },
  { id: "muthegowda-v-cv", cvUrl: "https://atme.edu.in/muthegowda-v-cv/" },
  { id: "mr-manu-kumar-k", cvUrl: "https://atme.edu.in/mr-manu-kumar-k/" },
  // ds
  { id: "dr-anitha-d-b-new", cvUrl: "https://atme.edu.in/dr-anitha-d-b-new/" },
  { id: "dr-vinod-kumar-p-2", cvUrl: "https://atme.edu.in/dr-vinod-kumar-p-2/" },
  { id: "mrs-neethi-m-v", cvUrl: "https://atme.edu.in/mrs-neethi-m-v/" },
  { id: "mrs-madhu-nagaraj", cvUrl: "https://atme.edu.in/mrs-madhu-nagaraj/" },
  { id: "mrs-ambika-v", cvUrl: "https://atme.edu.in/mrs-ambika-v/" },
  { id: "j-n-karthik", cvUrl: "https://atme.edu.in/j-n-karthik/" },
  { id: "ms-sushmitha-n", cvUrl: "https://atme.edu.in/ms-sushmitha-n/" },
  { id: "babuprasad-b", cvUrl: "https://atme.edu.in/babuprasad-b/" },
  { id: "naveen-s", cvUrl: "https://atme.edu.in/naveen-s/" },
  { id: "bhoomika-a-l", cvUrl: "https://atme.edu.in/bhoomika-a-l/" },
  { id: "hemanth-kumar-k", cvUrl: "https://atme.edu.in/hemanth-kumar-k/" },
  { id: "yashwanth-m-s", cvUrl: "https://atme.edu.in/yashwanth-m-s/" },
  // aiml
  { id: "uma-mahesh-r-n", cvUrl: "https://atme.edu.in/uma-mahesh-r-n/" },
  { id: "hussana-johar-r-b", cvUrl: "https://atme.edu.in/hussana-johar-r-b/" },
  { id: "dr-khateeja-ambareen", cvUrl: "https://atme.edu.in/dr-khateeja-ambareen/" },
  { id: "mrs-vanitha-g-naik", cvUrl: "https://atme.edu.in/mrs-vanitha-g-naik/" },
  { id: "likitha-d", cvUrl: "https://atme.edu.in/likitha-d/" },
  { id: "apoorva-s-m", cvUrl: "https://atme.edu.in/apoorva-s-m/" },
  { id: "mrs-suma-h-c", cvUrl: "https://atme.edu.in/mrs-suma-h-c/" },
  { id: "manjunath-h", cvUrl: "https://atme.edu.in/manjunath-h/" },
  { id: "geetha-b", cvUrl: "https://atme.edu.in/geetha-b/" },
  { id: "ruchitha-b-s", cvUrl: "https://atme.edu.in/ruchitha-b-s/" },
  { id: "basavaraju-k-n", cvUrl: "https://atme.edu.in/basavaraju-k-n/" },
  // csd (from allFaculty lines 190+)
  { id: "dr-pavithra-a-c", cvUrl: "https://atme.edu.in/dr-pavithra-a-c/" },
  // cy, mca, mba – we'll add known ones
];

// Deduplicate by id
const seenIds = new Set();
const uniqueFaculty = allFaculty.filter(f => { if(seenIds.has(f.id)) return false; seenIds.add(f.id); return true; });

console.error(`[1/3] Scraping ${uniqueFaculty.length} faculty profile pages for photos …`);

const facultyPhotos = {};
let facDone = 0;
const facTasks = uniqueFaculty.map(f => async () => {
  const res = await safeScrape(f.cvUrl, { formats: ['html'] });
  facDone++;
  if (facDone % 10 === 0) console.error(`  faculty photos: ${facDone}/${uniqueFaculty.length}`);
  if (res) {
    const photo = findPrimaryPhoto(res.html || '');
    if (photo) facultyPhotos[f.id] = photo;
  }
});
await pool(facTasks, 6);

const facFound = Object.keys(facultyPhotos).length;
const facMissing = uniqueFaculty.length - facFound;
console.error(`[1/3] Done: ${facFound} photos found, ${facMissing} missing`);
writeFileSync('/tmp/atme-scrape/faculty_photos.json', JSON.stringify(facultyPhotos, null, 2));

// ══════════════════════════════════════════════════════════════════════════════
// PART 2 – Basic Sciences Department
// ══════════════════════════════════════════════════════════════════════════════
console.error('[2/3] Scraping Basic Sciences department …');

const bsSlugs = [
  'https://atme.edu.in/basic-sciences-department/',
  'https://atme.edu.in/basic-sciences/',
  'https://atme.edu.in/basic-science/',
  'https://atme.edu.in/science-and-humanities/',
  'https://atme.edu.in/science-humanities/',
];

let bsPage = null;
let bsUrl = null;
for (const slug of bsSlugs) {
  console.error(`  trying ${slug} …`);
  const r = await safeScrape(slug, { formats: ['markdown', 'html'] });
  if (r && r.markdown && r.markdown.length > 200) { bsPage = r; bsUrl = slug; break; }
}

const bsOutput = { dept: {}, hod: {}, faculty: [], facultyProfiles: {}, _errors: [] };

if (bsPage) {
  bsOutput.dept = { name: 'Basic Sciences', url: bsUrl, about: bsPage.markdown?.slice(0, 2000) };
  const bsImgs = extractWpImages(bsPage.html || '');
  
  // Try to find HOD section in markdown
  const md = bsPage.markdown || '';
  const hodMatch = md.match(/HOD[^]*?(?=\n#{1,3}|\n\n\n|$)/i);
  if (hodMatch) bsOutput.hod.message = hodMatch[0].trim();
  
  // Extract faculty links from html
  const linkRe = /href="(https:\/\/atme\.edu\.in\/[^"]+\/)"[^>]*>[^<]*<\/a>/gi;
  const profileLinks = new Set();
  let lm;
  while ((lm = linkRe.exec(bsPage.html || '')) !== null) {
    const u = lm[1];
    if (!u.match(/wp-content|basic-sci|atme\.edu\.in\/$|atme\.edu\.in\/(category|tag|page)\//)) {
      profileLinks.add(u);
    }
  }
  
  // Also try physics/chemistry/mathematics faculty profile pages
  const deptProfilePages = [
    { dept: 'physics', url: 'https://atme.edu.in/physics/physics-faculty-profile/' },
    { dept: 'physics', url: 'https://atme.edu.in/physics/faculty-details-2/' },
    { dept: 'chemistry', url: 'https://atme.edu.in/chemistry/chemistry-faculty-profile/' },
    { dept: 'chemistry', url: 'https://atme.edu.in/chemistry/faculty-details-2/' },
    { dept: 'mathematics', url: 'https://atme.edu.in/mathematics/mathematics-faculty-profile/' },
    { dept: 'mathematics', url: 'https://atme.edu.in/mathematics/faculty-details/' },
  ];
  
  for (const dp of deptProfilePages) {
    console.error(`  trying ${dp.url} …`);
    const r = await safeScrape(dp.url, { formats: ['markdown', 'html'] });
    if (!r) continue;
    // extract faculty name/designation/photo from markdown table or card patterns
    const html = r.html || '';
    // Extract img urls
    const imgs2 = extractWpImages(html);
    const rows = r.markdown?.match(/\|[^\n]+\|/g) || [];
    // Extract profile URLs
    const pLinkRe = /href="(https:\/\/atme\.edu\.in\/[a-z0-9-]+\/)"[^>]*>/gi;
    let pm;
    while ((pm = pLinkRe.exec(html)) !== null) {
      const u = pm[1];
      if (!u.match(/wp-content|atme\.edu\.in\/$/)) profileLinks.add(u);
    }
    // Try to parse faculty entries from markdown
    const lines = (r.markdown || '').split('\n');
    let currentFac = null;
    for (const line of lines) {
      const nameMatch = line.match(/^#+\s*(.+)/) || line.match(/^\*\*(Dr\.|Mr\.|Mrs\.|Ms\.|Prof\.?.+)\*\*/i);
      if (nameMatch) {
        if (currentFac) bsOutput.faculty.push(currentFac);
        currentFac = { name: nameMatch[1].trim(), designation: '', qualification: '', photoUrl: '', dept: dp.dept };
      } else if (currentFac) {
        if (line.match(/professor|lecturer|hod|head/i) && !currentFac.designation) currentFac.designation = line.trim();
        if (line.match(/ph\.?d|m\.?tech|m\.?sc|b\.?e/i) && !currentFac.qualification) currentFac.qualification = line.trim();
      }
    }
    if (currentFac) bsOutput.faculty.push(currentFac);
    // Attach photo urls from extracted images to faculty (best-effort)
    if (imgs2.length > 0 && bsOutput.faculty.length > 0) {
      imgs2.forEach((img, i) => {
        if (bsOutput.faculty[i]) bsOutput.faculty[i].photoUrl = img.url;
      });
    }
  }
  
  // Visit each profile link found (limit to 30 to avoid runaway)
  const profileArr = [...profileLinks].slice(0, 30);
  console.error(`  visiting ${profileArr.length} faculty profile URLs …`);
  let bsDone = 0;
  const bsTasks = profileArr.map(url => async () => {
    const r = await safeScrape(url, { formats: ['markdown', 'html'] });
    bsDone++;
    if (bsDone % 10 === 0) console.error(`  BS profiles: ${bsDone}/${profileArr.length}`);
    if (r) {
      const slug = url.replace(/https?:\/\/atme\.edu\.in\//, '').replace(/\/$/, '');
      const photo = findPrimaryPhoto(r.html || '');
      bsOutput.facultyProfiles[slug] = {
        name: slug,
        url,
        photoUrl: photo || null,
        md: (r.markdown || '').slice(0, 3000),
      };
    }
  });
  await pool(bsTasks, 6);
} else {
  bsOutput._errors.push('Could not load any Basic Sciences department page');
  console.error('  WARNING: Could not load Basic Sciences dept page');
  
  // Fall back: scrape Physics, Chemistry, Math as Basic Sciences sub-depts
  console.error('  Falling back to Physics/Chemistry/Math individual dept pages …');
  const basicSciDepts = [
    { slug: 'phy', url: 'https://atme.edu.in/physics/' },
    { slug: 'chem', url: 'https://atme.edu.in/chemistry/' },
    { slug: 'math', url: 'https://atme.edu.in/mathematics/' },
  ];
  for (const bd of basicSciDepts) {
    const r = await safeScrape(bd.url, { formats: ['markdown', 'html'] });
    if (r) {
      bsOutput.dept[bd.slug] = { url: bd.url, snippet: (r.markdown || '').slice(0, 500) };
    }
  }
}

bsOutput._errors.push(...errors.filter(e => !e.alreadyCounted).map(e => e.url + ': ' + e.err));
writeFileSync('/tmp/atme-scrape/basic_sciences.json', JSON.stringify(bsOutput, null, 2));
console.error(`[2/3] Done: ${bsOutput.faculty.length} faculty, ${Object.keys(bsOutput.facultyProfiles).length} profiles scraped`);

// ══════════════════════════════════════════════════════════════════════════════
// PART 3 – Infrastructure pages per department (11 depts)
// ══════════════════════════════════════════════════════════════════════════════
console.error('[3/3] Scraping infrastructure pages …');

const infraUrls = {
  cse:  'https://atme.edu.in/computer-science-and-engineering/cs-infrastructure',
  ece:  'https://atme.edu.in/electronics-communication-engineering/infrastructure',
  eee:  'https://atme.edu.in/electrical-and-electronics-engineering/infrastructure',
  me:   'https://atme.edu.in/mechanical-engineering/infrastructure',
  ce:   null,  // no infrastructure page found
  ds:   'https://atme.edu.in/cseds-infrastructure',
  aiml: null,  // no infrastructure page found
  csd:  'https://atme.edu.in/csd-infrastructure',
  cy:   null,  // no infrastructure page found
  mca:  'https://atme.edu.in/master-of-computer-applications/mca-infrastructure',
  mba:  null,  // no infrastructure page found
};

const infraOutput = {};
const infraTasks = Object.entries(infraUrls).map(([dept, url]) => async () => {
  if (!url) {
    infraOutput[dept] = { url: null, markdown: null, images: [], note: 'No infrastructure page found' };
    return;
  }
  console.error(`  infra: ${dept} → ${url}`);
  const r = await safeScrape(url, { formats: ['markdown', 'html'] });
  if (r) {
    const images = extractWpImages(r.html || '');
    infraOutput[dept] = { url, markdown: r.markdown || '', images };
    console.error(`    ${dept}: ${images.length} images`);
  } else {
    infraOutput[dept] = { url, markdown: null, images: [], note: 'scrape failed' };
  }
});
await pool(infraTasks, 6);

infraOutput._errors = errors.map(e => `${e.url}: ${e.err}`);
writeFileSync('/tmp/atme-scrape/infrastructure.json', JSON.stringify(infraOutput, null, 2));

// ══════════════════════════════════════════════════════════════════════════════
// Summary
// ══════════════════════════════════════════════════════════════════════════════
const infraDepts = Object.entries(infraOutput).filter(([k]) => k !== '_errors');
const infraSummary = infraDepts.map(([dept, d]) => `${dept}:${d.images?.length ?? 0}`).join(', ');

console.log(`
SUMMARY: Faculty photos — ${facFound} found, ${facMissing} missing (out of ${uniqueFaculty.length} faculty). Basic Sciences — ${bsOutput.faculty.length} faculty parsed, ${Object.keys(bsOutput.facultyProfiles).length} individual profiles scraped from linked pages. Infrastructure — ${infraDepts.filter(([,d])=>d.markdown).length} pages scraped successfully (${infraDepts.filter(([,d])=>!d.markdown).length} missing/null); image counts per dept: ${infraSummary}. Total scrape errors: ${errors.length}.
`.trim());

