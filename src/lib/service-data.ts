export interface ServicePortal {
  id: string;
  name: string;
  description: string;
  actions: string[];
  url: string;
}

export interface ServiceCategoryData {
  central: ServicePortal[];
  stateTemplates: {
    name: string;
    description: string;
    actions: string[];
    urlPattern: string; // Placeholder for generating real URLs like https://{state}.gov.in/service
  }[];
  stateSpecific?: Record<string, ServicePortal[]>;
}

export const STATES_AND_UTS = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", 
  "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", 
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", 
  "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

export const SERVICE_DATA: Record<string, ServiceCategoryData> = {
  "Education Support": {
    central: [
      { id: "nsp", name: "National Scholarship Portal", description: "Central portal for all government scholarships", actions: ["Apply for scholarship", "Scholarship renewal", "Eligibility checking"], url: "https://scholarships.gov.in/" },
      { id: "digilocker", name: "DigiLocker", description: "Digital certificates and document verification", actions: ["Certificate download", "Document verification"], url: "https://www.digilocker.gov.in/" },
      { id: "swayam", name: "SWAYAM", description: "Free online courses and AI learning support", actions: ["Course enrollment", "Certification systems"], url: "https://swayam.gov.in/" },
      { id: "nptel", name: "NPTEL", description: "Online courses and certification from IITs/IISc", actions: ["Course enrollment", "Certification systems"], url: "https://nptel.ac.in" },
      { id: "cbse", name: "CBSE Portal", description: "Board exam forms, hall tickets, and results", actions: ["Exam form filling", "Hall ticket downloads", "Result checking"], url: "https://www.cbse.gov.in/" },
      { id: "ugc", name: "UGC", description: "University Grants Commission", actions: ["Admission portals", "Complaint registration"], url: "https://www.ugc.gov.in" },
      { id: "aicte", name: "AICTE", description: "All India Council for Technical Education", actions: ["Admission portals", "Internship portals"], url: "https://www.aicte-india.org" },
      { id: "nta", name: "National Testing Agency (NTA)", description: "Competitive exam portals (JEE, NEET, CUET etc.)", actions: ["Competitive exam portals", "Admission portals"], url: "https://www.nta.ac.in/" },
      { id: "vidyalakshmi", name: "Vidya Lakshmi", description: "Student loan portals and education funding", actions: ["Student loan portals", "Application tracking"], url: "https://www.vidyalakshmi.co.in/" },
      { id: "abc", name: "Academic Bank of Credits", description: "Digital storehouse of academic credits", actions: ["Certificate verification", "University portals"], url: "https://www.abc.gov.in/" },
      { id: "skillindia", name: "Skill India", description: "National skill development mission", actions: ["Skill certification", "Training registration"], url: "https://www.skillindia.gov.in" },
      { id: "samadhaan", name: "UGC e-Samadhaan", description: "Student grievance redressal system", actions: ["Student grievance systems", "Complaint registration"], url: "https://samadhaan.ugc.ac.in" },
      { id: "josaa", name: "JoSAA", description: "Joint Seat Allocation Authority for Engineering", actions: ["Engineering counseling", "Admission portals"], url: "https://josaa.nic.in" },
      { id: "cuet", name: "CUET Samarth", description: "Common University Entrance Test portal", actions: ["Competitive exam portals", "Admission portals"], url: "https://cuet.samarth.ac.in" },
      { id: "ndli", name: "National Digital Library (NDLI)", description: "Digital library for students and researchers", actions: ["Digital certificates", "Online learning"], url: "https://ndl.iitkgp.ac.in" },
      { id: "pmevidya", name: "PM eVIDYA", description: "Digital/online/on-air education", actions: ["AI learning support", "Online learning"], url: "https://pmevidya.education.gov.in" },
      { id: "nios", name: "NIOS", description: "National Institute of Open Schooling", actions: ["Exam form filling", "Result checking"], url: "https://www.nios.ac.in" },
      { id: "samagra", name: "Samagra Shiksha", description: "Integrated scheme for school education", actions: ["Admission portals", "School education portals"], url: "https://samagrashiksha.education.gov.in" },
      { id: "ncs", name: "National Career Service (NCS)", description: "Job and career related services", actions: ["Internship portals", "Employment support"], url: "https://www.ncs.gov.in" },
      { id: "naps", name: "National Apprenticeship Portal", description: "Apprenticeship training and certification", actions: ["Apprenticeship systems", "Internship support"], url: "https://www.apprenticeshipindia.gov.in" },
      { id: "epathshala", name: "ePathshala", description: "Digital resources for students and teachers", actions: ["Online learning", "Digital certificates"], url: "https://epathshala.nic.in" },
      { id: "anuvadini", name: "Anuvadini", description: "AI translation and learning system", actions: ["AI learning support", "AI tutoring"], url: "https://anuvadini.ai" },
      { id: "neat", name: "NEAT", description: "National Educational Alliance for Technology", actions: ["AI learning support", "Online learning"], url: "https://neat.aicte-india.org" },
      { id: "internship", name: "AICTE Internship Portal", description: "Internship opportunities for students", actions: ["Internship portals", "Internship support"], url: "https://internship.aicte-india.org" },
      { id: "shodhganga", name: "Shodhganga", description: "Reservoir of Indian theses", actions: ["University portals", "Online learning"], url: "https://shodhganga.inflibnet.ac.in" },
      { id: "irins", name: "IRINS", description: "Indian Research Information Network System", actions: ["University portals", "Research support"], url: "https://irins.inflibnet.ac.in" },
      { id: "ignou", name: "IGNOU", description: "Indira Gandhi National Open University", actions: ["University portals", "Admission portals"], url: "https://www.ignou.ac.in" },
      { id: "samarth", name: "SAMARTH", description: "Higher education framework", actions: ["University portals", "Admission portals"], url: "https://samarth.edu.in" },
      { id: "ncte", name: "NCTE", description: "National Council for Teacher Education", actions: ["Teacher recruitment", "Certification systems"], url: "https://ncte.gov.in" },
      { id: "pgportal", name: "CPGRAMS", description: "Centralized public grievance redress system", actions: ["Student grievance systems", "Complaint registration"], url: "https://pgportal.gov.in" },
      { id: "nad", name: "National Academic Depository (NAD)", description: "Storehouse of academic awards", actions: ["Digital certificates", "Certificate verification"], url: "https://nad.gov.in" },
      { id: "results", name: "NIC National Results Hub", description: "One-stop results portal", actions: ["Result checking", "NIC National Results Hub"], url: "https://results.gov.in" }
    ],
    stateTemplates: [
      { name: "Education Department", description: "State-level higher and school education management", actions: ["Board portals", "University portals"], urlPattern: "https://www.google.com/search?q={state}+education+department+official+website" },
      { name: "Scholarship System", description: "State-specific scholarship schemes and laptop schemes", actions: ["Scholarship systems", "Free laptop schemes"], urlPattern: "https://www.google.com/search?q={state}+scholarship+portal+official" },
      { name: "Admission & Counseling", description: "Engineering, medical, and polytechnic counseling", actions: ["Counseling systems", "Engineering counseling"], urlPattern: "https://www.google.com/search?q={state}+admission+counseling+portal" }
    ],
    stateSpecific: {
      "Andhra Pradesh": [
        { id: "ap-edu", name: "AP Education Department", description: "School education department of AP", actions: ["School education portals", "Teacher recruitment"], url: "https://cse.ap.gov.in" },
        { id: "ap-inter", name: "AP Intermediate Board", description: "Board of Intermediate Education AP", actions: ["Board portals", "Result checking"], url: "https://bieap.apcfss.in" },
        { id: "ap-eamcet", name: "AP EAMCET Counseling", description: "Professional admission counseling", actions: ["Engineering counseling", "Counseling systems"], url: "https://eapcet-sche.aptonline.in" },
        { id: "ap-scholarship", name: "AP Scholarship Portal (Jnanabhumi)", description: "State scholarship system", actions: ["Scholarship systems", "Scholarship renewal"], url: "https://jnanabhumi.ap.gov.in" },
        { id: "ap-grievance", name: "AP Student Grievance System", description: "Spandana grievance portal", actions: ["Student complaints", "Complaint tracking"], url: "https://www.spandana.ap.gov.in" },
        { id: "ap-skill", name: "AP Skill Development Portal", description: "APSSDC skill development", actions: ["State training centers", "Skill certification"], url: "https://www.apssdc.in" }
      ],
      "Bihar": [
        { id: "bh-agri", name: "Bihar Agriculture Department", description: "State agriculture department", actions: ["Farmer registration", "DBT agriculture portal"], url: "https://krishi.bih.nic.in" },
        { id: "bh-dbt", name: "Bihar DBT Agriculture Portal", description: "Direct benefit transfer portal", actions: ["Subsidy applications", "Machinery subsidy"], url: "https://dbtagriculture.bihar.gov.in" },
        { id: "bihar-edu", name: "Bihar Education Department", description: "Education department of Bihar", actions: ["Higher education portals", "Teacher recruitment"], url: "https://state.bihar.gov.in/education" },
        { id: "bihar-scholarship", name: "Bihar Scholarship Portal", description: "Post matric scholarship", actions: ["Scholarship systems", "Scholarship renewal"], url: "https://pmsonline.bih.nic.in" },
        { id: "bihar-board", name: "Bihar Board Portal (BSEB)", description: "Bihar school examination board", actions: ["Board portals", "Result checking"], url: "https://biharboardonline.bihar.gov.in" },
        { id: "bihar-credit", name: "Bihar Student Credit Card", description: "Education loan support", actions: ["Student loan portals", "Student support"], url: "https://www.7nishchay-yuvaupmission.bihar.gov.in" },
        { id: "bihar-counseling", name: "Bihar Engineering & Polytechnic Counseling", description: "BCECEB counseling", actions: ["Engineering counseling", "Polytechnic systems"], url: "https://bceceboard.bihar.gov.in" }
      ],
      "Karnataka": [
        { id: "ka-edu", name: "Karnataka Education Department", description: "School education department of Karnataka", actions: ["School education portals", "Teacher recruitment"], url: "https://schooleducation.karnataka.gov.in" },
        { id: "ka-kea", name: "Karnataka Examination Authority", description: "KEA CET counseling", actions: ["Engineering counseling", "Admission portals"], url: "https://cetonline.karnataka.gov.in/kea" },
        { id: "ka-kseab", name: "Karnataka KSEAB Board", description: "State board services", actions: ["Board portals", "Result checking"], url: "https://kseab.karnataka.gov.in" },
        { id: "ka-bcwd", name: "Karnataka Hostel Welfare Portal", description: "E-Kalyan BCWD services", actions: ["Hostel schemes", "Benefit tracking"], url: "https://bcwd.karnataka.gov.in" }
      ],
      "Maharashtra": [
        { id: "mh-edu", name: "Maharashtra School Education Department", description: "Education department of Maharashtra", actions: ["School education portals", "Teacher recruitment"], url: "https://education.maharashtra.gov.in" },
        { id: "mh-dbt", name: "MahaDBT Scholarship Portal", description: "Direct benefit transfer scholarship", actions: ["Scholarship systems", "Scholarship renewal"], url: "https://mahadbt.maharashtra.gov.in" },
        { id: "mh-cet", name: "Maharashtra State CET Cell", description: "Professional admission counseling", actions: ["Engineering counseling", "Counseling systems"], url: "https://cetcell.mahacet.org" },
        { id: "mh-board", name: "Maharashtra State Board", description: "MSBSHSE services", actions: ["Board portals", "Result checking"], url: "https://mahahsscboard.in" }
      ],
      "Uttar Pradesh": [
        { id: "up-higher", name: "UP Higher Education System", description: "Higher education department of UP", actions: ["Higher education portals", "University portals"], url: "https://upeducation.gov.in" },
        { id: "up-board", name: "UP Board Academic Portal (UPMSP)", description: "UP school board services", actions: ["Board portals", "Result checking"], url: "https://upmsp.edu.in" },
        { id: "up-counseling", name: "UPTAC AKTU Admission Counseling", description: "Engineering and professional counseling", actions: ["Engineering counseling", "Admission portals"], url: "https://uptac.admissions.nic.in" },
        { id: "up-grievance", name: "UP Student Grievance Engine", description: "Jansunwai grievance portal", actions: ["Student complaints", "Complaint tracking"], url: "https://jansunwai.up.nic.in" },
        { id: "up-basic", name: "UP Basic Education Board", description: "Primary education board", actions: ["School education portals", "Teacher recruitment"], url: "https://upbasiceduboard.gov.in" }
      ],
      "Arunachal Pradesh": [
        { id: "ar-edu", name: "Arunachal Education Department", description: "State education department", actions: ["School education portals", "Teacher recruitment"], url: "https://education.arunachal.gov.in" },
        { id: "ar-higher", name: "Arunachal Higher & Technical Education", description: "Higher education portal", actions: ["Higher education portals", "Admission portals"], url: "https://apdhte.nic.in" }
      ],
      "Assam": [
        { id: "as-edu", name: "Assam Education Department", description: "State education department", actions: ["School education portals", "Teacher recruitment"], url: "https://education.assam.gov.in" },
        { id: "as-board", name: "Assam Board Services (SEBA/AHSEC)", description: "State board services", actions: ["Board portals", "Result checking"], url: "https://sebaonline.org" },
        { id: "as-higher", name: "Assam Higher Education (Samarth)", description: "University admission portal", actions: ["Higher education portals", "Admission portals"], url: "https://assamsamarth.ac.in" }
      ],
      "Chhattisgarh": [
        { id: "cg-edu", name: "Chhattisgarh Education Department", description: "State education department", actions: ["School education portals", "Teacher recruitment"], url: "https://eduportal.cg.nic.in" },
        { id: "cg-board", name: "CG Board Portal (CGBSE)", description: "State board services", actions: ["Board portals", "Result checking"], url: "https://cgbse.nic.in" },
        { id: "cg-counseling", name: "CG Admission Counseling", description: "Professional counseling", actions: ["Counseling systems", "Admission portals"], url: "https://vyapam.cgstate.gov.in" }
      ],
      "Goa": [
        { id: "goa-edu", name: "Goa Education Department", description: "State education department", actions: ["School education portals", "Board portals"], url: "https://www.education.goa.gov.in" },
        { id: "goa-board", name: "Goa Board Portal (GBSHSE)", description: "State board services", actions: ["Board portals", "Result checking"], url: "https://gbshse.in" }
      ],
      "Gujarat": [
        { id: "gj-edu", name: "Gujarat Education Department", description: "State education department", actions: ["School education portals", "Teacher recruitment"], url: "https://education.gujarat.gov.in" },
        { id: "gj-scholar", name: "Digital Gujarat Scholarship", description: "State scholarship portal", actions: ["Scholarship systems", "Scholarship renewal"], url: "https://www.digitalgujarat.gov.in" },
        { id: "gj-board", name: "Gujarat Board Services (GSEB)", description: "State board services", actions: ["Board portals", "Result checking"], url: "https://gseb.org" }
      ],
      "Haryana": [
        { id: "hr-edu", name: "Haryana Education Department", description: "State education department", actions: ["School education portals", "Teacher recruitment"], url: "https://schooleducationharyana.gov.in" },
        { id: "hr-scholar", name: "Haryana Scholarship (Har-Chhatratti)", description: "State scholarship portal", actions: ["Scholarship systems", "Scholarship renewal"], url: "https://harchhatravratti.highereduhry.ac.in" },
        { id: "hr-board", name: "Haryana Board Portal (BSEH)", description: "State board services", actions: ["Board portals", "Result checking"], url: "https://bseh.org.in" }
      ],
      "Himachal Pradesh": [
        { id: "hp-edu", name: "HP Education Department", description: "State education department", actions: ["School education portals", "Teacher recruitment"], url: "https://education.hp.gov.in" },
        { id: "hp-board", name: "HP Board Services (HPBOSE)", description: "State board services", actions: ["Board portals", "Result checking"], url: "https://hpbose.org" }
      ],
      "Jharkhand": [
        { id: "jh-edu", name: "Jharkhand Education Department", description: "State education department", actions: ["School education portals", "Teacher recruitment"], url: "https://schooleducation.jharkhand.gov.in" },
        { id: "jh-scholar", name: "Jharkhand Scholarship (e-Kalyan)", description: "State scholarship portal", actions: ["Scholarship systems", "Scholarship renewal"], url: "https://ekalyan.cgg.gov.in" },
        { id: "jh-board", name: "Jharkhand Academic Council (JAC)", description: "State board services", actions: ["Board portals", "Result checking"], url: "https://jac.jharkhand.gov.in" }
      ],
      "Kerala": [
        { id: "kl-edu", name: "Kerala General Education", description: "State education department", actions: ["School education portals", "Board portals"], url: "https://education.kerala.gov.in" },
        { id: "kl-scholar", name: "Kerala Scholarship Portal (DCE)", description: "State scholarship portal", actions: ["Scholarship systems", "Scholarship renewal"], url: "https://dcescholarship.kerala.gov.in" },
        { id: "kl-higher", name: "Kerala Higher Education", description: "Higher education portal", actions: ["Higher education portals", "Admission portals"], url: "https://www.highereducation.kerala.gov.in" }
      ],
      "Madhya Pradesh": [
        { id: "mp-edu", name: "MP Education Department", description: "State education department", actions: ["School education portals", "Teacher recruitment"], url: "https://educationportal.mp.gov.in" },
        { id: "mp-scholar", name: "MP Scholarship Portal", description: "State scholarship system", actions: ["Scholarship systems", "Scholarship renewal"], url: "https://scholarshipportal.mp.nic.in" },
        { id: "mp-board", name: "MP Board Portal (MPBSE)", description: "State board services", actions: ["Board portals", "Result checking"], url: "https://mpbse.nic.in" }
      ],
      "Odisha": [
        { id: "od-edu", name: "Odisha School Education", description: "State education department", actions: ["School education portals", "Teacher recruitment"], url: "https://sme.odisha.gov.in" },
        { id: "od-scholar", name: "State Scholarship Portal Odisha", description: "State scholarship system", actions: ["Scholarship systems", "Scholarship renewal"], url: "https://scholarship.odisha.gov.in" },
        { id: "od-higher", name: "Odisha Higher Education (SAMS)", description: "Admission system", actions: ["Higher education portals", "Admission portals"], url: "https://samsodisha.gov.in" }
      ],
      "Punjab": [
        { id: "pb-edu", name: "Punjab School Education", description: "State education department", actions: ["School education portals", "Teacher recruitment"], url: "https://ssapunjab.org" },
        { id: "pb-scholar", name: "Punjab Scholarship System", description: "State scholarship system", actions: ["Scholarship systems", "Scholarship renewal"], url: "https://scholarships.punjab.gov.in" },
        { id: "pb-board", name: "Punjab School Board (PSEB)", description: "State board services", actions: ["Board portals", "Result checking"], url: "https://www.pseb.ac.in" }
      ],
      "Rajasthan": [
        { id: "rj-edu", name: "Rajasthan School Education Hub", description: "State education hub", actions: ["School education portals", "Teacher recruitment"], url: "https://education.rajasthan.gov.in" },
        { id: "rj-scholar", name: "Rajasthan Scholarship Portal", description: "State scholarship system", actions: ["Scholarship systems", "Scholarship renewal"], url: "https://sjms.rajasthan.gov.in" },
        { id: "rj-shala", name: "Rajasthan Shala Darpan", description: "Integrated portal for education", actions: ["School education portals", "Admission portals"], url: "https://rajshaladarpan.nic.in" }
      ],
      "Tamil Nadu": [
        { id: "tn-edu", name: "TN School Education", description: "State education department", actions: ["School education portals", "Teacher recruitment"], url: "https://schoolsedn.tn.gov.in" },
        { id: "tn-scholar", name: "TN Scholarship System", description: "State scholarship system", actions: ["Scholarship systems", "Scholarship renewal"], url: "https://www.tnscholarships.tn.gov.in" },
        { id: "tn-counsel", name: "TNEA Engineering Counseling", description: "Professional counseling", actions: ["Engineering counseling", "Admission portals"], url: "https://www.tneaonline.org" }
      ],
      "Telangana": [
        { id: "tg-edu", name: "Telangana Education Portal", description: "State education portal", actions: ["School education portals", "Board portals"], url: "https://education.telangana.gov.in" },
        { id: "tg-scholar", name: "Telangana ePASS Scholarship", description: "State scholarship engine", actions: ["Scholarship systems", "Scholarship renewal"], url: "https://telanganaepass.cgg.gov.in" },
        { id: "tg-counsel", name: "TG EAMCET Counseling", description: "Professional admission counseling", actions: ["Engineering counseling", "Admission portals"], url: "https://tseamcet.nic.in" }
      ],
      "West Bengal": [
        { id: "wb-higher", name: "West Bengal Higher Education", description: "State higher education portal", actions: ["Higher education portals", "University portals"], url: "https://wbsed.gov.in" },
        { id: "wb-scholar", name: "WB SVMCM Scholarship", description: "State merit scholarship", actions: ["Scholarship systems", "Scholarship renewal"], url: "https://svmcm.wbhed.gov.in" },
        { id: "wb-credit", name: "WB Student Credit Card", description: "State student credit card", actions: ["Student loan portals", "Student support"], url: "https://wbscc.wb.gov.in" }
      ]
    }
  },
  "Agriculture & Farming": {
    central: [
      { id: "pmkisan", name: "PM Kisan Portal", description: "Farmer registration and direct benefit transfer", actions: ["Farmer registration", "Land verification", "Payment tracking"], url: "https://pmkisan.gov.in" },
      { id: "pmfby", name: "PM Fasal Bima Yojana (Crop Insurance)", description: "Pradhan Mantri Fasal Bima Yojana", actions: ["Crop insurance", "Insurance claim systems", "Crop damage complaints"], url: "https://pmfby.gov.in" },
      { id: "soilhealth", name: "Soil Health Card Portal", description: "Soil testing and health monitoring", actions: ["Soil testing", "Fertilizer support"], url: "https://soilhealth.dac.gov.in" },
      { id: "enam", name: "eNAM Agriculture Market", description: "National Agriculture Market for crop selling", actions: ["Market price tracking", "Agricultural loan support"], url: "https://enam.gov.in" },
      { id: "kisansuvidha", name: "Kisan Suvidha Portal", description: "One-stop portal for farmer services", actions: ["Weather alerts", "Crop advisory"], url: "https://kisansuvidha.gov.in" },
      { id: "agristack", name: "AgriStack", description: "Digital public infrastructure for agriculture", actions: ["Farmer registration", "Profile mapping"], url: "https://agristack.gov.in" },
      { id: "jansamarth-kcc", name: "KCC Loan Portal (JanSamarth)", description: "Kisan Credit Card on JanSamarth", actions: ["KCC online application", "Loan applications"], url: "https://www.jansamarth.in" },
      { id: "urvarak", name: "Fertilizer Distribution Systems (iFMS)", description: "Integrated fertilizer management system", actions: ["Fertilizer subsidy", "Stock dashboard"], url: "https://urvarak.nic.in" },
      { id: "seedtrace", name: "Seed Distribution Systems (SATHI)", description: "Seed authentication and traceability", actions: ["Seed subsidy", "Sourcing hub"], url: "https://seedtrace.gov.in" },
      { id: "pmksy", name: "Irrigation Systems (PMKSY)", description: "Pradhan Mantri Krishi Sinchayee Yojana", actions: ["Irrigation support", "Subsidy applications"], url: "https://pmksy.gov.in" },
      { id: "agrimachinery", name: "Agriculture Machinery Subsidy", description: "CHC farm machinery hub", actions: ["Tractor subsidy", "Machinery application"], url: "https://agrimachinery.nic.in" },
      { id: "dahd", name: "Dairy Development Systems", description: "Department of animal husbandry and dairying", actions: ["Dairy support", "Livestock health support"], url: "https://dahd.nic.in" },
      { id: "pmmsy", name: "Fisheries Development Systems", description: "Pradhan Mantri Matsya Sampada Yojana", actions: ["Fisheries support", "Aquaculture allocation"], url: "https://pmmsy.nic.in" },
      { id: "mausam", name: "Weather Forecast Systems (Mausam)", description: "Agro-met advisory from IMD", actions: ["Weather alerts", "Agro-met advisory"], url: "https://mausam.imd.gov.in" },
      { id: "fci", name: "MSP Procurement Systems (FCI)", description: "Food Corporation of India procurement", actions: ["MSP procurement", "Mandi allocation tracker"], url: "https://fci.gov.in" },
      { id: "jaivikkheti", name: "Organic Farming Systems", description: "Jaivik Kheti portal", actions: ["Organic farming", "Expert consultation"], url: "https://www.jaivikkheti.in" }
    ],
    stateTemplates: [
      { name: "Agriculture Welfare", description: "State-level farmer welfare schemes and subsidies", actions: ["Subsidy systems", "Tractor subsidy"], urlPattern: "https://www.google.com/search?q={state}+agriculture+department+portal" },
      { name: "Seed & Fertilizer", description: "State distribution systems for seeds and fertilizers", actions: ["Seed distribution", "Fertilizer support"], urlPattern: "https://www.google.com/search?q={state}+seed+distribution+portal" }
    ],
    stateSpecific: {
      "Andhra Pradesh": [
        { id: "ap-agri", name: "AP Agriculture Department", description: "State agriculture department", actions: ["Farmer registration", "eCrop systems"], url: "https://agri.ap.gov.in" },
        { id: "ap-rythu", name: "AP Farmer Subsidy (Rythu Bharosa)", description: "Farmer investment support system", actions: ["Subsidy systems", "Farmer welfare"], url: "https://rythubharosa.ap.gov.in" }
      ],
      "Bihar": [
        { id: "bh-agri", name: "Bihar Agriculture Department", description: "State agriculture department", actions: ["Farmer registration", "DBT agriculture portal"], url: "https://krishi.bih.nic.in" },
        { id: "bh-dbt", name: "Bihar DBT Agriculture Portal", description: "Direct benefit transfer portal", actions: ["Subsidy applications", "Machinery subsidy"], url: "https://dbtagriculture.bihar.gov.in" }
      ],
      "Chhattisgarh": [
        { id: "cg-agri", name: "CG Agriculture Department", description: "State agriculture portal", actions: ["Farmer welfare portal", "Crop insurance"], url: "https://agriportal.cg.nic.in" }
      ],
      "Gujarat": [
        { id: "gj-khedut", name: "iKhedut Portal Gujarat", description: "Unified farmer services hub", actions: ["Subsidy systems", "Farmer registration"], url: "https://ikhedut.gujarat.gov.in" }
      ],
      "Haryana": [
        { id: "hr-fasal", name: "Meri Fasal Mera Byora", description: "Crop and farmer registration", actions: ["Farmer registration", "Crop insurance"], url: "https://fasal.haryana.gov.in" }
      ],
      "Karnataka": [
        { id: "ka-fruits", name: "FRUITS Portal Karnataka", description: "Farmer registration system", actions: ["Farmer registration", "Farmer welfare"], url: "https://fruits.karnataka.gov.in" },
        { id: "ka-samrakshane", name: "Samrakshane Karnataka", description: "State crop insurance system", actions: ["Crop insurance", "Insurance tracking"], url: "https://samrakshane.karnataka.gov.in" }
      ],
      "Maharashtra": [
        { id: "mh-agri", name: "Maharashtra Agriculture Dept", description: "State agriculture department", actions: ["Farmer welfare", "Crop insurance"], url: "https://krishi.maharashtra.gov.in" },
        { id: "mh-dbt-agri", name: "MahaDBT Farmer Portal", description: "Unified subsidy portal", actions: ["Subsidy systems", "Scheme registration"], url: "https://mahadbt.maharashtra.gov.in" }
      ],
      "Odisha": [
        { id: "od-krushak", name: "Krushak Odisha", description: "State farmer portal", actions: ["Farmer registration", "Crop insurance"], url: "https://krushak.odisha.gov.in" },
        { id: "od-sugam", name: "Go-Sugam Odisha", description: "State subsidy portal", actions: ["Subsidy systems", "Farmer welfare"], url: "https://sugam.odisha.gov.in" }
      ],
      "Rajasthan": [
        { id: "rj-kisan", name: "RajKisan Sathi Rajasthan", description: "State farmer welfare portal", actions: ["Subsidy systems", "Crop insurance"], url: "https://rajkisansathi.rajasthan.gov.in" }
      ],
      "Tamil Nadu": [
        { id: "tn-uzhavan", name: "Uzhavan Portal TN", description: "Unified farmer services hub", actions: ["Farmer registration", "Subsidy systems"], url: "https://www.tnagrisnet.tn.gov.in" }
      ],
      "Telangana": [
        { id: "tg-bandhu", name: "Rythu Bandhu Portal", description: "Farmer investment support", actions: ["Farmer welfare", "Farmer registration"], url: "https://rythubandhu.telangana.gov.in" }
      ],
      "Uttar Pradesh": [
        { id: "up-agri", name: "UP Agriculture Department", description: "Kisan Panjiyan and DBT portal", actions: ["Farmer registration", "Subsidy systems"], url: "https://upagriculture.com" }
      ],
      "West Bengal": [
        { id: "wb-krishak", name: "Krishak Bandhu Portal WB", description: "Farmer direct support system", actions: ["Farmer welfare", "Crop insurance"], url: "https://krishakbandhu.net" }
      ]
    }
  },
  "Healthcare Access": {
    central: [
      { id: "mohfw", name: "Ministry of Health and Family Welfare (MoHFW)", description: "Official portal of the Health Ministry", actions: ["Medical complaint systems", "Emergency alerts"], url: "https://mohfw.gov.in" },
      { id: "nha", name: "National Health Authority (NHA)", description: "Apex body for public health insurance", actions: ["Insurance eligibility", "Insurance claims"], url: "https://nha.gov.in" },
      { id: "abdm", name: "Ayushman Bharat Digital Mission (ABDM)", description: "National digital health infrastructure", actions: ["Health ID systems", "Health records"], url: "https://abdm.gov.in" },
      { id: "pmjay-ben", name: "Ayushman Bharat - PMJAY Beneficiary Portal", description: "Eligibility check and Ayushman card issuance", actions: ["Insurance eligibility", "Apply for card"], url: "http://beneficiary.nha.gov.in" },
      { id: "nhm", name: "National Health Mission (NHM)", description: "Rural and urban health mission services", actions: ["Medical support", "Welfare schemes"], url: "https://nhm.gov.in" },
      { id: "esanjeevani", name: "eSanjeevani", description: "National telemedicine and online consultation", actions: ["Telemedicine", "Doctor consultation"], url: "https://esanjeevani.gov.in" },
      { id: "ors", name: "ORS Patient Portal", description: "Online hospital appointments and records", actions: ["Hospital booking", "Online OPD booking"], url: "https://ors.gov.in" },
      { id: "cghs", name: "Central Government Health Scheme (CGHS)", description: "Health services for central government employees", actions: ["Hospital booking", "Medical consultation"], url: "https://cghs.nic.in" },
      { id: "fssai", name: "FSSAI", description: "Food safety and standards authority", actions: ["Complaint registration", "Food safety"], url: "https://www.fssai.gov.in" },
      { id: "cdsco", name: "CDSCO", description: "National drug and medical device regulator", actions: ["Drug verification", "Clearance systems"], url: "https://cdsco.gov.in" },
      { id: "icmr", name: "ICMR", description: "Indian Council of Medical Research", actions: ["Research support", "Medical reports"], url: "https://main.icmr.nic.in" },
      { id: "abha", name: "ABHA Card Creation", description: "Create your Ayushman Bharat Health Account", actions: ["Health ID systems", "Health records"], url: "https://abha.abdm.gov.in" },
      { id: "eraktkosh", name: "eRaktKosh (Blood Bank)", description: "National blood availability and donation hub", actions: ["Blood bank systems", "Emergency SOS"], url: "https://www.eraktkosh.in" },
      { id: "janaushadhi", name: "Jan Aushadhi Kendra Locator", description: "Find affordable generic medicines", actions: ["Find kendra", "Medicine locator"], url: "https://janaushadhi.gov.in" },
      { id: "notto", name: "NOTTO (Organ Donation)", description: "National organ and tissue transplant organization", actions: ["Organ donation systems", "Emergency assistance"], url: "https://www.notto.mohfw.gov.in" },
      { id: "nmc", name: "National Medical Commission (NMC)", description: "Medical education and professional registry", actions: ["Doctor finder", "Medical records"], url: "https://www.nmc.org.in" }
    ],
    stateTemplates: [
      { name: "Health Portal", description: "State hospital systems and online OPD booking", actions: ["Online OPD booking", "Hospital booking"], urlPattern: "https://www.google.com/search?q={state}+health+department+portal" },
      { name: "Emergency Services", description: "Ambulance tracking and emergency health systems", actions: ["Emergency ambulance", "Ambulance tracking"], urlPattern: "https://www.google.com/search?q={state}+emergency+medical+services+portal" }
    ],
    stateSpecific: {
      "Andhra Pradesh": [
        { id: "ap-health", name: "AP Health & Family Welfare", description: "State health department portal", actions: ["State hospital systems", "Welfare schemes"], url: "https://hmfw.ap.gov.in" },
        { id: "ap-aarogyasri", name: "Dr. YSR Aarogyasri Trust", description: "AP state health insurance portal", actions: ["Insurance schemes", "Insurance eligibility"], url: "https://www.aarogyasri.ap.gov.in" }
      ],
      "Arunachal Pradesh": [
        { id: "ar-health", name: "Arunachal Health Services", description: "State health directorate", actions: ["State hospital systems", "Emergency alerts"], url: "https://health.arunachal.gov.in" },
        { id: "ar-cmaay", name: "CMAAY (Health Insurance)", description: "Chief Minister’s health insurance", actions: ["Insurance schemes", "Insurance eligibility"], url: "https://www.cmaay.com" }
      ],
      "Assam": [
        { id: "as-health", name: "Assam Health Department", description: "State health and family welfare", actions: ["State hospital systems", "Medical reports"], url: "https://health.assam.gov.in" },
        { id: "as-aaa", name: "Atal Amrit Abhiyan", description: "Assam state health insurance", actions: ["Insurance schemes", "Insurance claims"], url: "https://aaa-assam.in" }
      ],
      "Bihar": [
        { id: "bh-health", name: "Bihar Health Department", description: "State health department", actions: ["State hospital systems", "Online OPD booking"], url: "https://state.bihar.gov.in/health" },
        { id: "bh-shs", name: "State Health Society Bihar", description: "Welfare and mission services", actions: ["Medical support", "Welfare schemes"], url: "https://statehealthsocietybihar.org" }
      ],
      "Chhattisgarh": [
        { id: "cg-health", name: "CG Health & Family Welfare", description: "State health department", actions: ["State hospital systems", "Telemedicine systems"], url: "https://cghealth.nic.in" },
        { id: "cg-sha", name: "CG State Health Agency", description: "Ayushman Bharat Chhattisgarh", actions: ["Insurance schemes", "Insurance claims"], url: "https://dkbssy.cg.gov.in" }
      ],
      "Goa": [
        { id: "goa-health", name: "Goa Directorate of Health", description: "State health services", actions: ["State hospital systems", "Medical reports"], url: "https://www.dhsgoa.gov.in" },
        { id: "goa-ddssy", name: "DDSSY Goa", description: "Deen Dayal Swasthya Seva Yojana", actions: ["Insurance schemes", "Insurance eligibility"], url: "https://ddssy.goa.gov.in" }
      ],
      "Gujarat": [
        { id: "gj-health", name: "Gujarat Health Department", description: "State health and family welfare", actions: ["State hospital systems", "Telemedicine systems"], url: "https://health.gujarat.gov.in" },
        { id: "gj-techo", name: "TeCHO+ Gujarat", description: "Digital health tracking system", actions: ["Health records", "Medical tracking"], url: "https://techoplus.gujarat.gov.in" }
      ],
      "Haryana": [
        { id: "hr-health", name: "Haryana Health Department", description: "State health services", actions: ["State hospital systems", "Online OPD booking"], url: "https://haryanahealth.nic.in" },
        { id: "hr-ayushman", name: "Ayushman Bharat Haryana", description: "State health protection authority", actions: ["Insurance schemes", "Insurance claims"], url: "https://ayushmanbharatharyana.in" }
      ],
      "Karnataka": [
        { id: "ka-health", name: "Karnataka Health Services", description: "State health and family welfare", actions: ["State hospital systems", "Online OPD booking"], url: "https://karunadu.karnataka.gov.in" },
        { id: "ka-arogya", name: "Arogya Karnataka (SAST)", description: "State health assurance portal", actions: ["Insurance schemes", "Insurance eligibility"], url: "https://arogya.karnataka.gov.in" }
      ],
      "Kerala": [
        { id: "kl-health", name: "Kerala Health Department", description: "State health and family welfare", actions: ["State hospital systems", "Telemedicine systems"], url: "https://health.kerala.gov.in" },
        { id: "kl-kasp", name: "KASP Kerala", description: "Karunya Health Benevolent Fund", actions: ["Insurance schemes", "Insurance claims"], url: "https://sha.kerala.gov.in" }
      ],
      "Maharashtra": [
        { id: "mh-health", name: "Maharashtra Public Health", description: "State health department", actions: ["State hospital systems", "Online OPD booking"], url: "https://arogya.maharashtra.gov.in" },
        { id: "mh-mjpjay", name: "MJPJAY Maharashtra", description: "Mahatma Jyotirao Phule Jan Arogya Yojana", actions: ["Insurance schemes", "Insurance claims"], url: "https://www.jeevandayee.gov.in" }
      ],
      "Odisha": [
        { id: "od-health", name: "Odisha Health Department", description: "State health and family welfare", actions: ["State hospital systems", "Telemedicine systems"], url: "https://health.odisha.gov.in" },
        { id: "od-bsky", name: "BSKY Odisha", description: "Biju Swasthya Kalyan Yojana", actions: ["Insurance schemes", "Insurance eligibility"], url: "https://bsky.odisha.gov.in" }
      ],
      "Rajasthan": [
        { id: "rj-health", name: "Rajasthan Health Department", description: "State medical and health welfare", actions: ["State hospital systems", "Online OPD booking"], url: "https://health.rajasthan.gov.in" }
      ],
      "Tamil Nadu": [
        { id: "tn-health", name: "TN Health Department", description: "State health and family welfare", actions: ["State hospital systems", "Online OPD booking"], url: "https://tnhealth.tn.gov.in" },
        { id: "tn-cmchis", name: "CMCHIS Tamil Nadu", description: "Chief Minister’s health insurance", actions: ["Insurance schemes", "Insurance claims"], url: "https://www.cmchistn.com" }
      ],
      "Telangana": [
        { id: "tg-health", name: "Telangana Health Dept", description: "State health and family welfare", actions: ["State hospital systems", "Telemedicine systems"], url: "https://hmfw.telangana.gov.in" },
        { id: "tg-aarogyasri", name: "Telangana Aarogyasri", description: "State health care trust", actions: ["Insurance schemes", "Insurance eligibility"], url: "https://aarogyasri.telangana.gov.in" }
      ],
      "Uttar Pradesh": [
        { id: "up-health", name: "UP Health Department", description: "State medical and health welfare", actions: ["State hospital systems", "Online OPD booking"], url: "https://uphealth.up.nic.in" },
        { id: "up-ayushman", name: "Ayushman Bharat UP", description: "State health agency", actions: ["Insurance schemes", "Insurance claims"], url: "https://ayushmanup.in" },
        { id: "up-ekavach", name: "eKavach UP", description: "Digital health tracking", actions: ["Health records", "Medical reports"], url: "https://ekavach.up.gov.in" }
      ],
      "West Bengal": [
        { id: "wb-health", name: "West Bengal Health Dept", description: "State health and family welfare", actions: ["State hospital systems", "Online OPD booking"], url: "https://www.wbhealth.gov.in" },
        { id: "wb-swasthya", name: "Swasthya Sathi WB", description: "State health insurance portal", actions: ["Insurance schemes", "Insurance claims"], url: "https://swasthyasathi.gov.in" }
      ]
    }
  },
  "Financial Inclusion": {
    central: [
      { id: "pmjdy", name: "Pradhan Mantri Jan Dhan Yojana (PMJDY)", description: "National mission for financial inclusion", actions: ["Account updates", "Banking support"], url: "https://pmjdy.gov.in" },
      { id: "mudra", name: "PM Mudra Yojana", description: "Loans for micro and small business units", actions: ["Loan applications", "Micro-loans"], url: "https://www.mudra.org.in" },
      { id: "standup", name: "Stand Up India", description: "Financing SC/ST and women entrepreneurs", actions: ["Women loans", "Startup funding"], url: "https://www.standupmitra.in" },
      { id: "svanidhi", name: "PM SVANidhi", description: "Micro-credit scheme for street vendors", actions: ["Loan applications", "Application tracking"], url: "https://pmsvanidhi.mohua.gov.in" },
      { id: "jansamarth", name: "JanSamarth Portal", description: "National portal for credit linked schemes", actions: ["Loan applications", "Eligibility checking"], url: "https://www.jansamarth.in" },
      { id: "startupindia", name: "Startup India Hub", description: "Funding and schemes for startups", actions: ["Startup funding support", "Scheme registration"], url: "https://www.startupindia.gov.in" },
      { id: "dbtbharat", name: "DBT Bharat", description: "Direct benefit transfer portal", actions: ["Subsidy transfers", "Benefit tracking"], url: "https://dbtbharat.gov.in" },
      { id: "apy-pfrda", name: "Atal Pension Yojana & NPS", description: "Pension and social security systems", actions: ["Pension systems", "Pension tracking"], url: "https://www.pfrda.org.in" },
      { id: "rbi-ombudsman", name: "RBI Ombudsman", description: "Banking complaint management system", actions: ["Banking complaints", "Complaint tracking"], url: "https://cms.rbi.org.in" },
      { id: "ncfe", name: "Financial Literacy (NCFE)", description: "Financial education and literacy systems", actions: ["Financial literacy", "Online learning"], url: "https://www.ncfe.org.in" },
      { id: "udyamimitra", name: "udyamimitra", description: "MSME loan and handholding portal", actions: ["Loan applications", "MSME support"], url: "https://udyamimitra.in" },
      { id: "cgtmse", name: "CGTMSE", description: "Credit guarantee fund for micro/small units", actions: ["Loan applications", "Financial assistance"], url: "https://www.cgtmse.in" },
      { id: "daynrlm", name: "DAY-NRLM (SHG Finance)", description: "Finance for self-help groups", actions: ["SHG systems", "Loan application"], url: "https://daynrlm.gov.in" }
    ],
    stateTemplates: [
      { name: "Cooperative Banking", description: "State cooperative bank services and loans", actions: ["Cooperative banking", "Loan schemes"], urlPattern: "https://www.google.com/search?q={state}+cooperative+bank+official" },
      { name: "Financial Grievance", description: "Financial grievance systems and subsidy tracking", actions: ["Financial grievance systems", "Subsidy transfers"], urlPattern: "https://www.google.com/search?q={state}+finance+department+grievance+portal" }
    ],
    stateSpecific: {
      "Andhra Pradesh": [
        { id: "ap-finance", name: "AP Finance Department", description: "State finance department portal", actions: ["Financial updates", "Subsidy transfers"], url: "https://finance.apcfss.in" },
        { id: "ap-serp", name: "AP SERP (SHG Finance)", description: "Rural poverty elimination society", actions: ["SHG systems", "Women loans"], url: "https://www.serp.ap.gov.in" },
        { id: "ap-pension", name: "AP YSR Pension Kanuka", description: "State social security pension", actions: ["Pension portals", "Benefit tracking"], url: "https://sspensions.ap.gov.in" }
      ],
      "Assam": [
        { id: "as-finance", name: "Assam Finance Department", description: "State finance portal", actions: ["Financial updates", "Subsidy transfers"], url: "https://finance.assam.gov.in" },
        { id: "as-asrlms", name: "Assam Livelihoods Mission", description: "Financial inclusion for rural areas", actions: ["SHG systems", "Financial literacy"], url: "https://asrlms.assam.gov.in" },
        { id: "as-kritagyata", name: "Assam Kritagyata", description: "Pension sanction and tracking", actions: ["Pension portals", "Pension tracking"], url: "https://pension.assam.gov.in" }
      ],
      "Bihar": [
        { id: "bh-finance", name: "Bihar Finance Department", description: "State finance ecosystem", actions: ["Financial updates", "Subsidy transfers"], url: "https://state.bihar.gov.in/finance" },
        { id: "bh-elabharthi", name: "Bihar Elabharthi", description: "Social security pension portal", actions: ["Pension portals", "Beneficiary services"], url: "https://elabharthi.bih.nic.in" }
      ],
      "Gujarat": [
        { id: "gj-finance", name: "Gujarat Finance Department", description: "State finance department", actions: ["Financial updates", "Subsidy transfers"], url: "https://financedepartment.gujarat.gov.in" },
        { id: "gj-digital", name: "Digital Gujarat (DBT)", description: "Unified welfare and subsidy hub", actions: ["Subsidy transfers", "Benefit tracking"], url: "https://www.digitalgujarat.gov.in" },
        { id: "gj-msme", name: "Gujarat MSME Commissionerate", description: "Loan assistance for small units", actions: ["Loan schemes", "MSME support"], url: "https://msme.gujarat.gov.in" }
      ],
      "Haryana": [
        { id: "hr-finance", name: "Haryana Finance Department", description: "State finance dashboard", actions: ["Financial updates", "Subsidy transfers"], url: "https://finhry.gov.in" },
        { id: "hr-pension", name: "Haryana Justice Pension", description: "Social security pension system", actions: ["Pension portals", "Pension tracking"], url: "https://pension.socialjusticehry.gov.in" },
        { id: "hr-ppp", name: "Haryana Parivar Pehchan Patra", description: "Benefit targeting system", actions: ["Beneficiary services", "Verification systems"], url: "https://meraparivar.haryana.gov.in" }
      ],
      "Karnataka": [
        { id: "ka-finance", name: "Karnataka Finance Dept", description: "State finance ecosystem", actions: ["Financial updates", "Subsidy transfers"], url: "https://finance.karnataka.gov.in" },
        { id: "ka-dbt", name: "Karnataka DBT Portal", description: "Direct benefit infrastructure", actions: ["Subsidy transfers", "Benefit tracking"], url: "https://dbt.karnataka.gov.in" },
        { id: "ka-sanjeevini", name: "Sanjeevini Karnataka", description: "State rural livelihoods mission", actions: ["SHG systems", "Women loans"], url: "https://ksrlps.karnataka.gov.in" }
      ],
      "Kerala": [
        { id: "kl-finance", name: "Kerala Finance Department", description: "State finance website", actions: ["Financial updates", "Subsidy transfers"], url: "https://www.finance.kerala.gov.in" },
        { id: "kl-sevana", name: "Kerala Sevana Pension", description: "Social security pension portal", actions: ["Pension portals", "Pension tracking"], url: "https://welfarepension.kerala.gov.in" },
        { id: "kl-kudumbashree", name: "Kudumbashree", description: "SHG financial systems", actions: ["SHG systems", "Women loans"], url: "https://www.kudumbashree.org" }
      ],
      "Madhya Pradesh": [
        { id: "mp-finance", name: "MP Finance Department", description: "State finance portal", actions: ["Financial updates", "Subsidy transfers"], url: "https://finance.mp.gov.in" },
        { id: "mp-ladli", name: "MP Ladli Behna DBT", description: "Women welfare subsidy system", actions: ["Subsidy transfers", "Women financial support"], url: "https://cmladlibahna.mp.gov.in" },
        { id: "mp-samagra", name: "MP Samagra Infrastructure", description: "Social security network", actions: ["Beneficiary services", "Verification systems"], url: "https://samagra.gov.in" }
      ],
      "Maharashtra": [
        { id: "mh-finance", name: "Maharashtra Finance Dept", description: "State finance portal", actions: ["Financial updates", "Subsidy transfers"], url: "https://finance.maharashtra.gov.in" },
        { id: "mh-mahadbt", name: "MahaDBT (Subsidy)", description: "Direct benefit transfer portal", actions: ["Subsidy transfers", "Benefit tracking"], url: "https://mahadbt.maharashtra.gov.in" },
        { id: "mh-umed", name: "Maharashtra Asmita SHG", description: "Livelihoods and SHG finance", actions: ["SHG systems", "Women loans"], url: "https://umed.in" }
      ],
      "Odisha": [
        { id: "od-finance", name: "Odisha Finance Department", description: "State finance interface", actions: ["Financial updates", "Subsidy transfers"], url: "https://finance.odisha.gov.in" },
        { id: "od-shakti", name: "Mission Shakti Odisha", description: "Women SHG bank linkage", actions: ["SHG systems", "Women loans"], url: "https://missionshakti.odisha.gov.in" }
      ],
      "Rajasthan": [
        { id: "rj-finance", name: "Rajasthan Finance Dept", description: "State finance portal", actions: ["Financial updates", "Subsidy transfers"], url: "https://finance.rajasthan.gov.in" },
        { id: "rj-janinfo", name: "Jan Information Portal", description: "Unified public subsidy dashboard", actions: ["Subsidy transfers", "Benefit tracking"], url: "https://jansoochna.rajasthan.gov.in" },
        { id: "rj-pension", name: "Rajasthan Social Pension", description: "State pension interface", actions: ["Pension portals", "Pension tracking"], url: "https://ssp.rajasthan.gov.in" }
      ],
      "Tamil Nadu": [
        { id: "tn-finance", name: "TN Finance Department", description: "State finance infrastructure", actions: ["Financial updates", "Subsidy transfers"], url: "https://www.tn.gov.in/department/9" },
        { id: "tn-pension", name: "TN Pensioners Portal", description: "Integrated pensioners portal", actions: ["Pension portals", "Pension tracking"], url: "https://www.karuvoolam.tn.gov.in/pensioners" },
        { id: "tn-dbt", name: "TN DBT Systems", description: "State benefit transfer systems", actions: ["Subsidy transfers", "Benefit tracking"], url: "https://www.tndbt.tn.gov.in" }
      ],
      "Telangana": [
        { id: "tg-finance", name: "Telangana Finance Dept", description: "State finance portal", actions: ["Financial updates", "Subsidy transfers"], url: "https://finance.telangana.gov.in" },
        { id: "tg-aasara", name: "Telangana Aasara", description: "Pensions and SHG linkage", actions: ["Pension portals", "SHG systems"], url: "https://www.aasara.telangana.gov.in" }
      ],
      "Uttar Pradesh": [
        { id: "up-finance", name: "UP Finance Department", description: "State finance system", actions: ["Financial updates", "Subsidy transfers"], url: "https://finance.up.nic.in" },
        { id: "up-sspy", name: "UP Unified Pension", description: "Social security pension portal", actions: ["Pension portals", "Pension tracking"], url: "https://sspy-up.gov.in" }
      ],
      "West Bengal": [
        { id: "wb-finance", name: "West Bengal Finance Dept", description: "State finance network", actions: ["Financial updates", "Subsidy transfers"], url: "https://wbfin.wb.gov.in" },
        { id: "wb-lakshmir", name: "WB Lakshmir Bhandar", description: "Social welfare DBT system", actions: ["Subsidy transfers", "Women financial support"], url: "https://socialsecurity.wb.gov.in" },
        { id: "wb-pension", name: "WB Pension Tracking", description: "Pension sanction and tracking", actions: ["Pension portals", "Pension tracking"], url: "https://wbpension.gov.in" }
      ]
    }
  },
  "Women Empowerment": {
    central: [
      { id: "bbbp", name: "Beti Bachao Beti Padhao Dashboard", description: "Central dashboard for the BBBP scheme", actions: ["Scheme registration", "Benefit tracking"], url: "https://wcd.nic.in/bbbp-schemes" },
      { id: "sakhi", name: "One Stop Center Scheme (Sakhi)", description: "Support for women affected by violence", actions: ["Emergency assistance", "Legal support"], url: "https://wcd.nic.in/schemes/one-stop-centre-scheme" },
      { id: "whl", name: "National Women Helpline (181)", description: "24/7 helpline for women in distress", actions: ["Emergency SOS", "Police support"], url: "https://www.whl.org.in" },
      { id: "mahila-ehaat", name: "Mahila eHaat", description: "Digital marketing for women entrepreneurs", actions: ["Entrepreneurship support", "Job opportunities"], url: "https://mahilaehaat-wcd.nic.in" },
      { id: "sukanya", name: "Sukanya Samriddhi Yojana", description: "Savings scheme for the girl child", actions: ["Financial assistance", "Benefit tracking"], url: "https://www.indiapost.gov.in" },
      { id: "ncw", name: "National Commission for Women (NCW)", description: "Apex body for women's rights", actions: ["Legal guidance", "Complaint registration"], url: "https://ncw.nic.in" },
      { id: "ncw-complaint", name: "NCW Complaint System", description: "Online portal for filing women's complaints", actions: ["Police complaint filing", "Complaint tracking"], url: "https://ncwapps.nic.in/onlinecomplaints/" },
      { id: "pmmvy", name: "Pradhan Mantri Matru Vandana Yojana", description: "Maternity benefit scheme", actions: ["Scheme registration", "Benefit tracking"], url: "https://pmmvy.wcd.gov.in" },
      { id: "wep", name: "Women Entrepreneurship Platform (WEP)", description: "Unified portal for women entrepreneurs", actions: ["Entrepreneurship support", "Skill training"], url: "https://wep.gov.in" },
      { id: "nrlm-shg", name: "NRLM (SHG Hub)", description: "National rural livelihoods mission for SHGs", actions: ["SHG systems", "Loan application"], url: "https://daynrlm.gov.in" },
      { id: "mowcd", name: "Ministry of Women & Child Development", description: "Official portal of the WCD Ministry", actions: ["Legal aid", "Training registration"], url: "https://wcd.nic.in" }
    ],
    stateTemplates: [
      { name: "Women Welfare Board", description: "State schemes for women development", actions: ["Scheme registration", "Job applications"], urlPattern: "https://www.google.com/search?q={state}+women+welfare+department+portal" },
      { name: "Women Safety Portal", description: "Local safety alerts and helpline", actions: ["Safety alerts", "Emergency assistance"], urlPattern: "https://www.google.com/search?q={state}+women+safety+portal" }
    ],
    stateSpecific: {
      "Andhra Pradesh": [
        { id: "ap-wdcw", name: "AP Women & Child Development", description: "State women welfare department", actions: ["Scheme registration", "Legal support"], url: "https://wdcw.ap.gov.in" },
        { id: "ap-police-women", name: "AP Mahila Police & Women Safety", description: "Women safety and police system", actions: ["Emergency assistance", "Safety alerts"], url: "https://www.appolice.gov.in" },
        { id: "ap-serp-women", name: "AP SERP (SHG Finance)", description: "YSR Aasara / Cheyutha schemes", actions: ["SHG systems", "Women loans"], url: "https://serp.ap.gov.in" }
      ],
      "Arunachal Pradesh": [
        { id: "ar-wcd", name: "Arunachal Women & Child Dept", description: "State women welfare department", actions: ["Scheme registration", "Benefit tracking"], url: "https://wcd.arunachal.gov.in" },
        { id: "ar-srlm", name: "Arunachal Livelihoods (SHG Hub)", description: "State rural livelihoods mission", actions: ["SHG systems", "Entrepreneurship support"], url: "https://arsrlm.in" }
      ],
      "Assam": [
        { id: "as-wcd", name: "Assam Women & Child Development", description: "State women welfare department", actions: ["Scheme registration", "Legal guidance"], url: "https://wcd.assam.gov.in" },
        { id: "as-asrlms-women", name: "Assam Livelihoods (SHG Support)", description: "SHG support and finance", actions: ["SHG systems", "Women loans"], url: "https://asrlms.assam.gov.in" }
      ],
      "Bihar": [
        { id: "bh-wdc", name: "Bihar Women Development Corp", description: "State women welfare body", actions: ["Training registration", "Entrepreneurship support"], url: "https://wdc.bih.nic.in" },
        { id: "bh-jeevika", name: "JEEViKA Bihar (SHG Network)", description: "Rural livelihoods and SHG network", actions: ["SHG systems", "Loan application"], url: "https://brlp.in" },
        { id: "bh-pension-women", name: "Bihar Social Security (Widow Pension)", description: "State widow pension portal", actions: ["Pension portals", "Benefit tracking"], url: "https://elabharthi.bih.nic.in" }
      ],
      "Chhattisgarh": [
        { id: "cg-wcd", name: "CG Women & Child Development", description: "State women welfare department", actions: ["Scheme registration", "Legal guidance"], url: "https://wcd.cg.gov.in" },
        { id: "cg-mahila-kosh", name: "Chhattisgarh Mahila Kosh", description: "Loan schemes for women", actions: ["Women loans", "Financial assistance"], url: "https://wcd.cg.gov.in/cg-mahila-kosh" }
      ],
      "Goa": [
        { id: "goa-dwcd", name: "Goa Women & Child Development", description: "State women welfare directorate", actions: ["Scheme registration", "Benefit tracking"], url: "https://dwcd.goa.gov.in" },
        { id: "goa-griha-aadhar", name: "Goa Griha Aadhar Scheme", description: "Financial support for homemakers", actions: ["Scheme registration", "Benefit tracking"], url: "https://www.socialwelfare.goa.gov.in" }
      ],
      "Gujarat": [
        { id: "gj-wcd", name: "Gujarat Women & Child Dept", description: "State women welfare department", actions: ["Scheme registration", "Legal aid"], url: "https://wcd.gujarat.gov.in" },
        { id: "gj-glpc", name: "Gujarat Mission Mangalam (SHG)", description: "Livelihood promotion and SHGs", actions: ["SHG systems", "Women loans"], url: "https://glpc.gujarat.gov.in" }
      ],
      "Haryana": [
        { id: "hr-wcd", name: "Haryana Women & Child Dept", description: "State women welfare department", actions: ["Scheme registration", "Legal aid"], url: "https://wcdhry.gov.in" },
        { id: "hr-hsrlm", name: "Haryana Livelihoods (SHG Finance)", description: "SHG finance and development", actions: ["SHG systems", "Women loans"], url: "https://hsrlm.gov.in" }
      ],
      "Himachal Pradesh": [
        { id: "hp-wcd", name: "HP Women & Child Development", description: "State women welfare directorate", actions: ["Scheme registration", "Benefit tracking"], url: "https://wcd.hp.gov.in" },
        { id: "hp-srlm", name: "HP Livelihoods (SHG)", description: "State rural livelihoods mission", actions: ["SHG systems", "Women loans"], url: "https://hpsrlm.nic.in" }
      ],
      "Jharkhand": [
        { id: "jh-wcd", name: "Jharkhand Women & Child Dept", description: "State women welfare department", actions: ["Scheme registration", "Legal aid"], url: "https://wcdjharkhand.gov.in" },
        { id: "jh-jslps", name: "Jharkhand Livelihoods (SHG Hub)", description: "SHG hub and promotion", actions: ["SHG systems", "Women loans"], url: "https://www.jslps.in" }
      ],
      "Karnataka": [
        { id: "ka-dwcd", name: "Karnataka Women & Child Dept", description: "State women welfare department", actions: ["Scheme registration", "Legal aid"], url: "https://dwcd.karnataka.gov.in" },
        { id: "ka-sanjeevini-women", name: "Sanjeevini Karnataka (SHG)", description: "Rural livelihoods mission", actions: ["SHG systems", "Women loans"], url: "https://ksrlps.karnataka.gov.in" }
      ],
      "Kerala": [
        { id: "kl-wcd", name: "Kerala Women & Child Dept", description: "State women welfare directorate", actions: ["Legal guidance", "Safety alerts"], url: "https://wcd.kerala.gov.in" },
        { id: "kl-kudumbashree-women", name: "Kudumbashree Kerala (SHG)", description: "Unified women's SHG framework", actions: ["SHG systems", "Entrepreneurship support"], url: "https://www.kudumbashree.org" }
      ],
      "Madhya Pradesh": [
        { id: "mp-wcd", name: "MP Women & Child Development", description: "State women welfare department", actions: ["Scheme registration", "Training registration"], url: "https://mpwcdmis.gov.in" },
        { id: "mp-ladli-behna", name: "MP Mukhyamantri Ladli Behna", description: "Women financial support scheme", actions: ["Benefit tracking", "Scheme registration"], url: "https://cmladlibahna.mp.gov.in" },
        { id: "mp-srlm-women", name: "MP Livelihoods (SHG)", description: "State rural livelihoods mission", actions: ["SHG systems", "Women loans"], url: "https://mpsrlm.mp.gov.in" }
      ],
      "Maharashtra": [
        { id: "mh-wcd", name: "Maharashtra Women & Child Dept", description: "State women welfare department", actions: ["Legal guidance", "Training registration"], url: "https://womenchild.maharashtra.gov.in" },
        { id: "mh-dbt-women", name: "MahaDBT Women Welfare", description: "Unified women welfare schemes", actions: ["Scheme registration", "Benefit tracking"], url: "https://mahadbt.maharashtra.gov.in" },
        { id: "mh-umed-women", name: "Umed Maharashtra (SHG)", description: "Rural livelihoods and SHG hub", actions: ["SHG systems", "Women loans"], url: "https://umed.in" }
      ],
      "Manipur": [
        { id: "mn-wcd", name: "Manipur Women & Child Dept", description: "State women welfare directorate", actions: ["Scheme registration", "Benefit tracking"], url: "https://wcdmanipur.nic.in" },
        { id: "mn-srlm", name: "Manipur Livelihoods (SHG)", description: "State rural livelihoods mission", actions: ["SHG systems", "Women loans"], url: "https://msrlm.nic.in" }
      ],
      "Meghalaya": [
        { id: "mg-social", name: "Meghalaya Social Welfare", description: "Women welfare directorate", actions: ["Scheme registration", "Legal guidance"], url: "https://megsocialwelfare.gov.in" },
        { id: "mg-srlm", name: "Meghalaya Livelihoods (SHG)", description: "State rural livelihoods mission", actions: ["SHG systems", "Women loans"], url: "https://msrlms.nic.in" }
      ],
      "Mizoram": [
        { id: "mz-wcd", name: "Mizoram Women & Child Dept", description: "State women welfare department", actions: ["Scheme registration", "Benefit tracking"], url: "https://socialwelfare.mizoram.gov.in" },
        { id: "mz-srlm", name: "Mizoram Livelihoods (SHG)", description: "State rural livelihoods mission", actions: ["SHG systems", "Women loans"], url: "https://mzrlm.mizoram.gov.in" }
      ],
      "Nagaland": [
        { id: "ng-wrd", name: "Nagaland Women Resource Dept", description: "State women welfare department", actions: ["Scheme registration", "Benefit tracking"], url: "https://wrd.nagaland.gov.in" },
        { id: "ng-srlm", name: "Nagaland Livelihoods (SHG)", description: "State rural livelihoods mission", actions: ["SHG systems", "Women loans"], url: "https://nsrlm.nagaland.gov.in" }
      ],
      "Odisha": [
        { id: "od-wcd", name: "Odisha Women & Child Dept", description: "State women welfare department", actions: ["Scheme registration", "Legal aid"], url: "https://wcdodisha.gov.in" },
        { id: "od-shakti-women", name: "Mission Shakti Odisha (SHG)", description: "Economic empowerment for SHGs", actions: ["SHG systems", "Women loans"], url: "https://missionshakti.odisha.gov.in" }
      ],
      "Punjab": [
        { id: "pb-wcd", name: "Punjab Women & Child Dept", description: "State women welfare department", actions: ["Scheme registration", "Legal guidance"], url: "https://sswcd.punjab.gov.in" },
        { id: "pb-srlm", name: "Punjab Livelihoods (SHG)", description: "State rural livelihoods mission", actions: ["SHG systems", "Women loans"], url: "https://psrlm.punjab.gov.in" }
      ],
      "Rajasthan": [
        { id: "rj-wcd", name: "Rajasthan Women Empowerment", description: "State women welfare directorate", actions: ["Scheme registration", "Legal guidance"], url: "https://wcd.rajasthan.gov.in" },
        { id: "rj-srlm", name: "Rajeevika Rajasthan (SHG Hub)", description: "State rural livelihoods society", actions: ["SHG systems", "Women loans"], url: "https://rajeevika.rajasthan.gov.in" }
      ],
      "Sikkim": [
        { id: "sk-social", name: "Sikkim Social Welfare", description: "State social welfare department", actions: ["Scheme registration", "Benefit tracking"], url: "https://sikkimsocialwelfare.gov.in" },
        { id: "sk-srlm", name: "Sikkim Livelihoods (SHG)", description: "State rural livelihoods mission", actions: ["SHG systems", "Women loans"], url: "https://sikkimsrlm.org" }
      ],
      "Tamil Nadu": [
        { id: "tn-wcd", name: "TN Social Welfare & Women", description: "State women welfare department", actions: ["Scheme registration", "Legal support"], url: "https://tnsocialwelfare.tn.gov.in" },
        { id: "tn-mahalir", name: "Mahalir Thittam TN (SHG)", description: "SHG network for development", actions: ["SHG systems", "Women loans"], url: "https://www.tayrf.tn.gov.in" },
        { id: "tn-dbt-women", name: "TN Pudhumai Penn DBT", description: "State women DBT portals", actions: ["Scheme registration", "Benefit tracking"], url: "https://www.tndbt.tn.gov.in" }
      ],
      "Telangana": [
        { id: "tg-wcd", name: "Telangana Women & Child Dept", description: "State women welfare department", actions: ["Scheme registration", "Legal guidance"], url: "https://wdcw.telangana.gov.in" },
        { id: "tg-serp-women", name: "Telangana SERP (SHG Core)", description: "Society for poverty elimination", actions: ["SHG systems", "Women loans"], url: "https://serp.telangana.gov.in" }
      ],
      "Tripura": [
        { id: "tr-social", name: "Tripura Social Welfare", description: "State social welfare directorate", actions: ["Scheme registration", "Benefit tracking"], url: "https://socialwelfare.tripura.gov.in" },
        { id: "tr-srlm", name: "Tripura Livelihoods (SHG)", description: "State rural livelihoods mission", actions: ["SHG systems", "Women loans"], url: "https://trlm.tripura.gov.in" }
      ],
      "Uttar Pradesh": [
        { id: "up-wcd", name: "UP Women & Child Development", description: "State women welfare department", actions: ["Legal guidance", "Training registration"], url: "https://upwcd.gov.in" },
        { id: "up-srlm-women", name: "UP State Livelihood Mission", description: "Rural livelihoods and SHG hub", actions: ["SHG systems", "Women loans"], url: "https://upsrlm.org" },
        { id: "up-pension-women", name: "UP Destitute Women Pension", description: "State widow pension tracking", actions: ["Pension portals", "Benefit tracking"], url: "https://sspy-up.gov.in" }
      ],
      "Uttarakhand": [
        { id: "uk-wcd", name: "Uttarakhand Women & Child", description: "State women empowerment dept", actions: ["Scheme registration", "Legal guidance"], url: "https://wecd.uk.gov.in" },
        { id: "uk-srlm", name: "Uttarakhand Livelihoods (SHG)", description: "State rural livelihoods mission", actions: ["SHG systems", "Women loans"], url: "https://usrlm.uk.gov.in" }
      ],
      "West Bengal": [
        { id: "wb-wcd", name: "WB Women & Child Development", description: "State women welfare department", actions: ["Legal aid", "Training registration"], url: "https://wbwcdsw.gov.in" },
        { id: "wb-kanyashree", name: "WB Kanyashree Portal", description: "Empowerment scheme for girls", actions: ["Scheme registration", "Benefit tracking"], url: "https://wbkanyashree.gov.in" },
        { id: "wb-anandadhara", name: "WB Anandadhara (SHG)", description: "State rural livelihoods mission", actions: ["SHG systems", "Women loans"], url: "https://wbprd.gov.in" }
      ]
    }
  },
  "Housing & Infrastructure": {
    central: [
      { id: "pmay-u", name: "PM Awas Yojana - Urban", description: "Housing for all in urban areas", actions: ["Housing applications", "Urban housing"], url: "https://pmay-urban.gov.in" },
      { id: "pmay-g", name: "PM Awas Yojana - Gramin", description: "Housing for all in rural areas", actions: ["Housing applications", "Rural housing"], url: "https://pmayg.nic.in" },
      { id: "smartcity", name: "Smart Cities Mission", description: "Smart city infrastructure network", actions: ["Smart city services", "Infrastructure tracking"], url: "https://smartcities.gov.in" },
      { id: "jjm", name: "Jal Jeevan Mission", description: "Safe tap water for every home", actions: ["Water supply systems", "Water complaints"], url: "https://jaljeevanmission.gov.in" },
      { id: "saubhagya", name: "Saubhagya Scheme", description: "Electricity for every household", actions: ["Electricity support", "Electricity complaints"], url: "https://saubhagya.gov.in" },
      { id: "sbm-u", name: "Swachh Bharat - Urban", description: "Urban sanitation and waste management", actions: ["Waste management", "Infrastructure complaints"], url: "https://sbmurban.org" },
      { id: "sbm-g", name: "Swachh Bharat - Gramin", description: "Rural sanitation and waste management", actions: ["Waste management", "Infrastructure tracking"], url: "https://swachhbharatmission.ddws.gov.in" },
      { id: "pmgsy", name: "PMGSY Road Infrastructure", description: "Rural road connectivity mission", actions: ["Infrastructure tracking", "Infrastructure complaints"], url: "https://omms.nic.in" },
      { id: "gatishakti", name: "PM GatiShakti Master Plan", description: "National master plan for infrastructure", actions: ["Infrastructure tracking", "Property verification"], url: "https://gatishakti.gov.in" },
      { id: "mohua", name: "MoHUA Urban Analytics", description: "Urban affairs and analytics portal", actions: ["Urban housing", "Property verification"], url: "https://mohua.gov.in" }
    ],
    stateTemplates: [
      { name: "Housing Board", description: "Local housing allotment and maintenance", actions: ["House allotment tracking", "Property updates"], urlPattern: "https://www.google.com/search?q={state}+housing+board+official" },
      { name: "Utility Boards", description: "Electricity and water boards management", actions: ["Electricity boards", "Water boards"], urlPattern: "https://www.google.com/search?q={state}+electricity+board+official" }
    ],
    stateSpecific: {
      "Andhra Pradesh": [
        { id: "ap-housing", name: "AP State Housing Corp", description: "State housing project management", actions: ["Housing boards", "House allotment tracking"], url: "https://aphousing.apcfss.in" },
        { id: "ap-meebhoomi", name: "AP Land Records (Meebhoomi)", description: "State land records interface", actions: ["Property verification", "Property updates"], url: "https://meebhoomi.ap.gov.in" },
        { id: "ap-cpdcl", name: "AP Power (APCPDCL)", description: "Central power distribution AP", actions: ["Electricity boards", "Electricity support"], url: "https://www.apcpdcl.in" },
        { id: "ap-rwss", name: "AP Water (RWSS)", description: "Rural water supply and sanitation", actions: ["Water boards", "Water supply systems"], url: "https://rwss.ap.nic.in" }
      ],
      "Arunachal Pradesh": [
        { id: "ar-pwd", name: "Arunachal PWD", description: "Public works department", actions: ["Infrastructure tracking", "Infrastructure complaints"], url: "https://arunachalpwd.org" },
        { id: "ar-land", name: "Arunachal Land Records", description: "State land records registry", actions: ["Property verification", "Property updates"], url: "https://landrecords.arunachal.gov.in" },
        { id: "ar-power", name: "Arunachal Power Dept", description: "State power department", actions: ["Electricity boards", "Electricity support"], url: "https://www.arunachalpower.org" }
      ],
      "Assam": [
        { id: "as-dohua", name: "Assam Housing & Urban Affairs", description: "State urban affairs portal", actions: ["Urban housing", "Housing boards"], url: "https://dohua.assam.gov.in" },
        { id: "as-dharitree", name: "Assam Land Records (Dharitree)", description: "State land records portal", actions: ["Property verification", "Property updates"], url: "https://revenueassam.nic.in" },
        { id: "as-apdcl", name: "Assam Power (APDCL)", description: "State power distribution company", actions: ["Electricity boards", "Electricity support"], url: "https://www.apdcl.org" }
      ],
      "Bihar": [
        { id: "bh-bcd", name: "Bihar Building Construction", description: "State building department", actions: ["Building approval systems", "Housing boards"], url: "https://bcd.bihar.gov.in" },
        { id: "bh-bhumijankari", name: "Bihar Land Records Hub", description: "State land records hub", actions: ["Property verification", "Property updates"], url: "https://biharbhumam.bihar.gov.in" },
        { id: "bh-nbpdcl", name: "North Bihar Power (NBPDCL)", description: "Power distribution North Bihar", actions: ["Electricity boards", "Electricity support"], url: "https://www.nbpdcl.co.in" },
        { id: "bh-sbpdcl", name: "South Bihar Power (SBPDCL)", description: "Power distribution South Bihar", actions: ["Electricity boards", "Electricity support"], url: "https://www.sbpdcl.co.in" }
      ],
      "Chhattisgarh": [
        { id: "cg-housing", name: "Chhattisgarh Housing Board", description: "State housing board", actions: ["Housing boards", "House allotment tracking"], url: "https://cghb.gov.in" },
        { id: "cg-power", name: "CG Power (CSPDCL)", description: "State power distribution company", actions: ["Electricity boards", "Electricity support"], url: "https://www.cspc.co.in" },
        { id: "cg-bhuiyan", name: "CG Land Records (Bhuiyan)", description: "State land records verification", actions: ["Property verification", "Property updates"], url: "https://bhuiyan.cg.nic.in" }
      ],
      "Goa": [
        { id: "goa-housing", name: "Goa Housing Board", description: "State housing board", actions: ["Housing boards", "House allotment tracking"], url: "https://ghb.goa.gov.in" },
        { id: "goa-power", name: "Goa Electricity Dept", description: "State electricity portal", actions: ["Electricity boards", "Electricity support"], url: "https://www.goaelectricity.gov.in" },
        { id: "goa-pwd", name: "Goa PWD (Water)", description: "Water supply management", actions: ["Water boards", "Water supply systems"], url: "https://www.pwd.goa.gov.in" }
      ],
      "Gujarat": [
        { id: "gj-ghb", name: "Gujarat Housing Board", description: "State housing board", actions: ["Housing boards", "House allotment tracking"], url: "https://ghb.gujarat.gov.in" },
        { id: "gj-anyror", name: "Gujarat Land Records (AnyROR)", description: "State land records system", actions: ["Property verification", "Property updates"], url: "https://anyror.gujarat.gov.in" },
        { id: "gj-gudm", name: "Gujarat Urban Dev (PMAY Hub)", description: "Urban development mission", actions: ["Urban housing", "Housing boards"], url: "https://gudm.gujarat.gov.in" },
        { id: "gj-pgvcl", name: "Paschim Gujarat Power (PGVCL)", description: "Power distribution Gujarat", actions: ["Electricity boards", "Electricity support"], url: "https://www.pgvcl.com" }
      ],
      "Haryana": [
        { id: "hr-housing", name: "Housing Board Haryana", description: "State housing board", actions: ["Housing boards", "House allotment tracking"], url: "https://housingboardharyana.gov.in" },
        { id: "hr-jamabandi", name: "Haryana Land Records (Jamabandi)", description: "State land records portal", actions: ["Property verification", "Property updates"], url: "https://jamabandi.nic.in" },
        { id: "hr-dhbvn", name: "Dakshin Haryana Power (DHBVN)", description: "Power distribution South Haryana", actions: ["Electricity boards", "Electricity support"], url: "https://www.dhbvn.org.in" },
        { id: "hr-uhbvn", name: "Uttar Haryana Power (UHBVN)", description: "Power distribution North Haryana", actions: ["Electricity boards", "Electricity support"], url: "https://www.uhbvn.org.in" }
      ],
      "Himachal Pradesh": [
        { id: "hp-himuda", name: "HP Housing (HIMUDA)", description: "Housing and urban development", actions: ["Housing boards", "House allotment tracking"], url: "https://himuda.hp.gov.in" },
        { id: "hp-himbhoomi", name: "HP Land Records (Himbhoomi)", description: "State land records portal", actions: ["Property verification", "Property updates"], url: "https://himbhoomi.hp.gov.in" },
        { id: "hp-power", name: "HP Power (HPSEBL)", description: "State electricity board", actions: ["Electricity boards", "Electricity support"], url: "https://www.hpseb.in" }
      ],
      "Jharkhand": [
        { id: "jh-udhd", name: "Jharkhand Housing & Urban", description: "State housing and urban affairs", actions: ["Urban housing", "Housing boards"], url: "https://udhd.jharkhand.gov.in" },
        { id: "jh-jharbhoomi", name: "Jharkhand Land Records (Jharbhoomi)", description: "State land records infrastructure", actions: ["Property verification", "Property updates"], url: "https://jharbhoomi.jharkhand.gov.in" },
        { id: "jh-jbvnl", name: "Jharkhand Power (JBVNL)", description: "State power distribution company", actions: ["Electricity boards", "Electricity support"], url: "https://www.jbvnl.co.in" }
      ],
      "Karnataka": [
        { id: "ka-khb", name: "Karnataka Housing Board", description: "State housing board", actions: ["Housing boards", "House allotment tracking"], url: "https://khb.karnataka.gov.in" },
        { id: "ka-bhoomi", name: "Karnataka Land Records (Bhoomi)", description: "State land records engine", actions: ["Property verification", "Property updates"], url: "https://landrecords.karnataka.gov.in" },
        { id: "ka-kaveri", name: "Karnataka Property (Kaveri 2.0)", description: "Property registration interface", actions: ["Property registration", "Property updates"], url: "https://kaverionline.karnataka.gov.in" },
        { id: "ka-bescom", name: "Bangalore Power (BESCOM)", description: "Power distribution Bangalore", actions: ["Electricity boards", "Electricity support"], url: "https://bescom.karnataka.gov.in" }
      ],
      "Kerala": [
        { id: "kl-kshb", name: "Kerala Housing Board", description: "State housing board", actions: ["Housing boards", "House allotment tracking"], url: "https://kshb.kerala.gov.in" },
        { id: "kl-erekha", name: "Kerala Land Records (E-Rekha)", description: "State land records portal", actions: ["Property verification", "Property updates"], url: "https://erekha.kerala.gov.in" },
        { id: "kl-kwa", name: "Kerala Water Authority", description: "State water billing and grievance", actions: ["Water boards", "Water bill support"], url: "https://kwa.kerala.gov.in" },
        { id: "kl-kseb", name: "Kerala Power (KSEB)", description: "State electricity board", actions: ["Electricity boards", "Electricity support"], url: "https://www.kseb.in" }
      ],
      "Madhya Pradesh": [
        { id: "mp-housing-board", name: "MP Housing & Infrastructure", description: "Housing and infrastructure board", actions: ["Housing boards", "House allotment tracking"], url: "https://mphousing.in" },
        { id: "mp-bhulekh", name: "MP Land Records (Bhulekh)", description: "State land records architecture", actions: ["Property verification", "Property updates"], url: "https://mpbhulekh.gov.in" },
        { id: "mp-power", name: "MP Power (MPEZ)", description: "Power distribution East MP", actions: ["Electricity boards", "Electricity support"], url: "https://www.mpez.co.in" }
      ],
      "Maharashtra": [
        { id: "mh-mhada", name: "MHADA Maharashtra", description: "Housing and area development authority", actions: ["Housing boards", "House allotment tracking"], url: "https://www.mhada.gov.in" },
        { id: "mh-property", name: "Maharashtra Property (IGR)", description: "Property registration portal", actions: ["Property registration", "Property updates"], url: "https://igrmaharashtra.gov.in" },
        { id: "mh-bhulekh", name: "Maharashtra Land Records", description: "State land records verification", actions: ["Property verification", "Property updates"], url: "https://mahabhulekh.maharashtra.gov.in" },
        { id: "mh-mahavitaran", name: "Mahavitaran (MSEDCL)", description: "State electricity distribution", actions: ["Electricity boards", "Electricity support"], url: "https://www.mahadiscom.in" }
      ],
      "Manipur": [
        { id: "mn-muda", name: "Manipur Urban Dev (PMAY)", description: "State urban development agency", actions: ["Urban housing", "Housing boards"], url: "https://muda.mn.gov.in" },
        { id: "mn-power", name: "Manipur Power (MSPDCL)", description: "State power distribution company", actions: ["Electricity boards", "Electricity support"], url: "https://www.mspdcl.not.in" }
      ],
      "Meghalaya": [
        { id: "mg-urban", name: "Meghalaya Housing & Urban", description: "Urban development and housing", actions: ["Urban housing", "Housing boards"], url: "https://megurban.gov.in" },
        { id: "mg-power", name: "Meghalaya Power (MePDCL)", description: "State power distribution corp", actions: ["Electricity boards", "Electricity support"], url: "https://meecl.nic.in" }
      ],
      "Mizoram": [
        { id: "mz-udpa", name: "Mizoram Urban Dev (PMAY)", description: "Urban development and PMAY", actions: ["Urban housing", "Housing boards"], url: "https://udpa.mizoram.gov.in" },
        { id: "mz-power", name: "Mizoram Power Dept", description: "State power and electricity", actions: ["Electricity boards", "Electricity support"], url: "https://power.mizoram.gov.in" }
      ],
      "Nagaland": [
        { id: "ng-urban", name: "Nagaland Urban Development", description: "State urban development directorate", actions: ["Urban housing", "Housing boards"], url: "https://urbandevelopment.nagaland.gov.in" },
        { id: "ng-power", name: "Nagaland Power Dept", description: "State department of power", actions: ["Electricity boards", "Electricity support"], url: "https://dopn.gov.in" }
      ],
      "Odisha": [
        { id: "od-hud", name: "Odisha Housing & Urban", description: "State urban development department", actions: ["Urban housing", "Housing boards"], url: "https://hud.odisha.gov.in" },
        { id: "od-bhulekh", name: "Odisha Land Records (Bhulekh)", description: "State land records integration", actions: ["Property verification", "Property updates"], url: "https://bhulekh.ori.nic.in" },
        { id: "od-watco", name: "Odisha Water (WATCO)", description: "State water corporation system", actions: ["Water boards", "Water supply systems"], url: "https://www.watco.org.in" }
      ],
      "Punjab": [
        { id: "pb-puda", name: "Punjab Housing (PUDA)", description: "Housing and urban development", actions: ["Housing boards", "House allotment tracking"], url: "https://puda.gov.in" },
        { id: "pb-plrs", name: "Punjab Land Records (PLRS)", description: "State land records society", actions: ["Property verification", "Property updates"], url: "https://plrs.org.in" },
        { id: "pb-pspcl", name: "Punjab Power (PSPCL)", description: "State power distribution company", actions: ["Electricity boards", "Electricity support"], url: "https://www.pspcl.in" }
      ],
      "Rajasthan": [
        { id: "rj-rhb", name: "Rajasthan Housing Board", description: "State housing board", actions: ["Housing boards", "House allotment tracking"], url: "https://urban.rajasthan.gov.in/rhb" },
        { id: "rj-apnakhata", name: "Rajasthan Land Records", description: "State land records verification", actions: ["Property verification", "Property updates"], url: "https://apnakhata.rajasthan.gov.in" },
        { id: "rj-jvvnl", name: "Jaipur Power (JVVNL)", description: "Power distribution Jaipur", actions: ["Electricity boards", "Electricity support"], url: "https://energy.rajasthan.gov.in/jvvnl" }
      ],
      "Sikkim": [
        { id: "sk-udd", name: "Sikkim Urban Development", description: "State urban development dept", actions: ["Urban housing", "Housing boards"], url: "https://udd.sikkim.gov.in" },
        { id: "sk-power", name: "Sikkim Power Dept", description: "State power department network", actions: ["Electricity boards", "Electricity support"], url: "https://power.sikkim.gov.in" }
      ],
      "Tamil Nadu": [
        { id: "tn-tnhb", name: "Tamil Nadu Housing Board", description: "State housing board", actions: ["Housing boards", "House allotment tracking"], url: "https://www.tnhb.tn.gov.in" },
        { id: "tn-tnuhdb", name: "TN Urban Habitat (PMAY)", description: "Urban habitat development board", actions: ["Urban housing", "Housing boards"], url: "https://www.tnuhdb.tn.gov.in" },
        { id: "tn-reginet", name: "TN Property Registration", description: "State property registration hub", actions: ["Property registration", "Property updates"], url: "https://tnreginet.gov.in" },
        { id: "tn-tangedco", name: "TANGEDCO Tamil Nadu", description: "State power distribution corp", actions: ["Electricity boards", "Electricity support"], url: "https://www.tangedco.org" },
        { id: "tn-cmwssb", name: "TN Chennai Water (CMWSSB)", description: "Chennai water and sewerage", actions: ["Water boards", "Water supply systems"], url: "https://chennaimetrowater.tn.gov.in" }
      ],
      "Telangana": [
        { id: "tg-housing", name: "Telangana Housing Dept", description: "State housing department network", actions: ["Housing boards", "House allotment tracking"], url: "https://housing.telangana.gov.in" },
        { id: "tg-dharani", name: "Telangana Land Records", description: "State land records portal", actions: ["Property verification", "Property updates"], url: "https://dharani.telangana.gov.in" },
        { id: "tg-tsspdcl", name: "Southern Power Telangana", description: "Power distribution Telangana", actions: ["Electricity boards", "Electricity support"], url: "https://www.tssouthernpower.com" }
      ],
      "Tripura": [
        { id: "tr-urban", name: "Tripura Urban Dev (PMAY)", description: "State urban development department", actions: ["Urban housing", "Housing boards"], url: "https://urbandevelopment.tripura.gov.in" },
        { id: "tr-power", name: "Tripura Power (TSECL)", description: "State electricity corp", actions: ["Electricity boards", "Electricity support"], url: "https://www.tsecl.in" }
      ],
      "Uttar Pradesh": [
        { id: "up-uphdb", name: "UP Housing Board (Awas Vikas)", description: "State housing board (Awas Vikas)", actions: ["Housing boards", "House allotment tracking"], url: "https://uphdb.in" },
        { id: "up-bhulekh", name: "UP Land Records (Bhulekh)", description: "State land records master system", actions: ["Property verification", "Property updates"], url: "https://upbhulekh.gov.in" },
        { id: "up-uppcl", name: "UP Power (UPPCL System)", description: "State power corporation system", actions: ["Electricity boards", "Electricity support"], url: "https://www.uppclonline.com" }
      ],
      "Uttarakhand": [
        { id: "uk-udd", name: "Uttarakhand Urban Development", description: "State urban development directorate", actions: ["Urban housing", "Housing boards"], url: "https://udd.uk.gov.in" },
        { id: "uk-bhulekh", name: "Uttarakhand Land Records", description: "State land records verification", actions: ["Property verification", "Property updates"], url: "https://bhulekh.uk.gov.in" },
        { id: "uk-power", name: "Uttarakhand Power (UPCL)", description: "State power corporation", actions: ["Electricity boards", "Electricity support"], url: "https://www.upcl.org" }
      ],
      "West Bengal": [
        { id: "wb-housing", name: "West Bengal Housing Dept", description: "State housing department", actions: ["Housing boards", "House allotment tracking"], url: "https://wbhousing.gov.in" },
        { id: "wb-banglarbhumi", name: "WB Land Records (Banglarbhumi)", description: "State land records engine", actions: ["Property verification", "Property updates"], url: "https://banglarbhumi.gov.in" },
        { id: "wb-wbsedcl", name: "West Bengal Power (WBSEDCL)", description: "State power distribution company", actions: ["Electricity boards", "Electricity support"], url: "https://www.wbsedcl.in" }
      ]
    }
  },
  "Skill Development": {
    central: [
      { id: "sidh", name: "Skill India Digital Hub (SIDH)", description: "Unified portal for all skill development initiatives", actions: ["Course enrollment", "Skill certification", "Job mapping"], url: "https://www.skillindiadigital.gov.in" },
      { id: "pmkvy", name: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)", description: "Central scheme for skill certification and training", actions: ["Training center search", "Scheme registration"], url: "https://www.pmkvyofficial.org" },
      { id: "nsdc", name: "National Skill Development Corporation (NSDC)", description: "Promoting skill development through training partners", actions: ["Training partner search", "Sector skill councils"], url: "https://nsdcindia.org" },
      { id: "naps", name: "National Apprenticeship Promotion Scheme (NAPS)", description: "Apprenticeship training and certification portal", actions: ["Apprenticeship registration", "Training search"], url: "https://www.apprenticeshipindia.gov.in" },
      { id: "startup-india", name: "Startup India Hub", description: "Funding and schemes for entrepreneurs", actions: ["Startup registration", "Funding support"], url: "https://www.startupindia.gov.in" },
      { id: "msme-skill", name: "Ministry of MSME Skill Training", description: "Skill training and schemes for small businesses", actions: ["Scheme registration", "Training search"], url: "https://msme.gov.in" },
      { id: "ncs", name: "National Career Service (NCS)", description: "National platform for career and job services", actions: ["Job search", "Career counseling"], url: "https://www.ncs.gov.in" },
      { id: "dgt", name: "Directorate General of Training (DGT)", description: "Apex body for ITI and vocational training", actions: ["ITI admissions", "Trade testing"], url: "https://dgt.gov.in" }
    ],
    stateTemplates: [
      { name: "Skill Mission", description: "State-level skill development mission and training", actions: ["Training registration", "Skill certification"], urlPattern: "https://www.google.com/search?q={state}+skill+development+mission+official" }
    ],
    stateSpecific: {
      "Andhra Pradesh": [
        { id: "ap-skill", name: "AP State Skill Development Corporation (APSSDC)", description: "AP state skill development initiatives", actions: ["Skill training", "Job melas"], url: "https://www.apssdc.in" },
        { id: "ap-employment", name: "AP Employment Exchange (DDU-GKY)", description: "Rural skill development and employment", actions: ["Scheme registration", "Job search"], url: "https://www.apsdma.ap.gov.in" }
      ],
      "Arunachal Pradesh": [
        { id: "ar-skill", name: "Arunachal Pradesh Skill Development Mission", description: "State skill mission portal", actions: ["Training registration", "Skill certification"], url: "https://www.skillarunachal.nic.in" },
        { id: "ar-industries", name: "Arunachal Department of Industries", description: "ITI admissions and industrial training", actions: ["ITI admissions", "Training search"], url: "https://industries.arunachal.gov.in" }
      ],
      "Assam": [
        { id: "as-skill", name: "Assam Skill Development Mission (ASDM)", description: "State skill mission initiatives", actions: ["Training registration", "Skill certification"], url: "https://asdm.assam.gov.in" },
        { id: "as-employment", name: "Assam Employment Exchange (Sewa Setu)", description: "Unified employment registration portal", actions: ["Employment registration", "Job search"], url: "https://sewasetu.assam.gov.in" }
      ],
      "Bihar": [
        { id: "bh-skill", name: "Bihar Skill Development Mission (BSDM)", description: "BSDM skill development initiatives", actions: ["Kushal Yuva Program", "Training centers"], url: "https://skillmissionbihar.org" },
        { id: "bh-iti", name: "Bihar Directorate of Employment & Training", description: "State ITI portal and industrial training", actions: ["ITI admissions", "Trade testing"], url: "https://det.bihar.gov.in" }
      ],
      "Chhattisgarh": [
        { id: "cg-skill", name: "Chhattisgarh State Skill Development Authority (CSSDA)", description: "State skill mission portal", actions: ["Training registration", "Skill certification"], url: "https://cssda.cg.nic.in" },
        { id: "cg-iti", name: "CG Directorate of Employment and Training", description: "State ITI portal and services", actions: ["ITI admissions", "Result checking"], url: "https://cgiti.cgstate.gov.in" }
      ],
      "Goa": [
        { id: "goa-skill", name: "Goa Directorate of Skill Development", description: "State skill and entrepreneurship portal", actions: ["Training registration", "Skill certification"], url: "https://dsde.goa.gov.in" },
        { id: "goa-employment", name: "Goa Labor & Employment Exchange", description: "State employment and labor services", actions: ["Employment registration", "Job search"], url: "https://unemployment.goa.gov.in" }
      ],
      "Gujarat": [
        { id: "gj-skill", name: "Gujarat Skill Development Mission (GSDM)", description: "State skill mission portal", actions: ["Training registration", "Skill certification"], url: "https://gsdm.gujarat.gov.in" },
        { id: "gj-iti", name: "Gujarat Employment & Training Portal", description: "State ITI and industrial training hub", actions: ["ITI admissions", "Trade testing"], url: "https://talimrozgar.gujarat.gov.in" }
      ],
      "Haryana": [
        { id: "hr-skill", name: "Haryana Skill Development Mission (HSDM)", description: "State skill mission initiatives", actions: ["Scheme registration", "Training centers"], url: "https://hsdm.org.in" },
        { id: "hr-iti", name: "Haryana ITI Admissions", description: "State ITI admissions and skill allocation", actions: ["ITI admissions", "Trade testing"], url: "https://itiharyana.gov.in" }
      ],
      "Himachal Pradesh": [
        { id: "hp-skill", name: "HP Kaushal Vikas Nigam (HPKVN)", description: "State skill development mission", actions: ["Training registration", "Skill certification"], url: "https://hpkvn.hp.gov.in" },
        { id: "hp-techedu", name: "HP Department of Technical Education", description: "Technical education and industrial training", actions: ["ITI admissions", "Technical courses"], url: "https://techedu.hp.gov.in" }
      ],
      "Jharkhand": [
        { id: "jh-skill", name: "Jharkhand Skill Development Mission (JSDMS)", description: "State skill development society", actions: ["Training registration", "Job melas"], url: "https://jsdms.jharkhand.gov.in" },
        { id: "jh-iti", name: "Jharkhand Directorate of Employment & Training", description: "State ITI portal and services", actions: ["ITI admissions", "Trade testing"], url: "https://det.jharkhand.gov.in" }
      ],
      "Karnataka": [
        { id: "ka-skill", name: "Karnataka Skill Connect Platform", description: "State skill development and connection hub", actions: ["Training registration", "Job placement"], url: "https://skillconnect.ka.gov.in" },
        { id: "ka-sdelt", name: "Karnataka SDELT Department", description: "Skill development, entrepreneurship and livelihood", actions: ["Scheme registration", "Skill tracking"], url: "https://sdelt.karnataka.gov.in" }
      ],
      "Kerala": [
        { id: "kl-skill", name: "Kerala Academy for Skills Excellence (KASE)", description: "State skill development mission", actions: ["Skill courses", "Placement support"], url: "https://kase.kerala.gov.in" },
        { id: "kl-iti", name: "Kerala Industrial Training Department", description: "State ITI tracker and services", actions: ["ITI admissions", "Trade testing"], url: "https://det.kerala.gov.in" }
      ],
      "Madhya Pradesh": [
        { id: "mp-skill", name: "MP Skill Development Board", description: "State skill mission and employment board", actions: ["Training registration", "Skill tracking"], url: "https://ssm.mp.gov.in" },
        { id: "mp-iti", name: "MP Directorate of Skill Development", description: "State ITI matrix and industrial training", actions: ["ITI admissions", "Trade testing"], url: "https://mpreading.mp.gov.in" }
      ],
      "Maharashtra": [
        { id: "mh-innovation", name: "Maharashtra Innovation Society", description: "Skill development and innovation hub", actions: ["Innovation support", "Skill training"], url: "https://www.msins.in" },
        { id: "mh-swayam", name: "MahaSwayam Portal", description: "Skill development, employment and entrepreneurship", actions: ["Employment registration", "Job search"], url: "https://www.mahaswayam.gov.in" }
      ],
      "Manipur": [
        { id: "mn-skill", name: "Manipur Society for Skill Development", description: "State skill development society", actions: ["Training registration", "Skill certification"], url: "https://mssd.mn.gov.in" },
        { id: "mn-iti", name: "Manipur Directorate of Employment & Training", description: "State ITI portal and industrial training", actions: ["ITI admissions", "Trade testing"], url: "https://detmanipur.nic.in" }
      ],
      "Meghalaya": [
        { id: "mg-skill", name: "Meghalaya Skill Development Society (MSSDS)", description: "State skill development mission", actions: ["Training registration", "Skill certification"], url: "https://mssds.nic.in" },
        { id: "mg-iti", name: "Meghalaya Directorate of Employment", description: "State ITI and craftsmen training", actions: ["ITI admissions", "Trade testing"], url: "https://dectmeg.nic.in" }
      ],
      "Mizoram": [
        { id: "mz-skill", name: "Mizoram LESDE Department", description: "Labor, employment and skill development", actions: ["Training registration", "Employment services"], url: "https://lesde.mizoram.gov.in" }
      ],
      "Nagaland": [
        { id: "ng-skill", name: "Nagaland Skill Development Dept", description: "State employment and skill development", actions: ["Employment registration", "Skill training"], url: "https://exemp.nagaland.gov.in" }
      ],
      "Odisha": [
        { id: "od-skill", name: "Skill Odisha", description: "Odisha State Skill Development Authority", actions: ["World Skill Center", "Training registration"], url: "https://skillodisha.gov.in" },
        { id: "od-employment", name: "Odisha Employment Mission", description: "State employment mission tracking", actions: ["Employment registration", "Job search"], url: "https://empmissionodisha.gov.in" }
      ],
      "Punjab": [
        { id: "pb-skill", name: "Punjab Skill Mission (PSDM)", description: "State skill mission initiatives", actions: ["Training registration", "Skill certification"], url: "https://psdm.punjab.gov.in" },
        { id: "pb-rozgar", name: "Punjab Ghar Ghar Rozgar", description: "State employment generation mission", actions: ["Employment registration", "Job search"], url: "https://pgrkam.com" }
      ],
      "Rajasthan": [
        { id: "rj-skill", name: "Rajasthan Skill Mission (RSLDC)", description: "State livelihoods development corp", actions: ["Training registration", "Scheme tracking"], url: "https://livelihood.rajasthan.gov.in" },
        { id: "rj-employment", name: "Rajasthan Employment Portal", description: "State employment department services", actions: ["Employment registration", "Job search"], url: "https://employment.livelihood.rajasthan.gov.in" }
      ],
      "Sikkim": [
        { id: "sk-skill", name: "Sikkim Skill Development Dept", description: "State skill development mission", actions: ["Training registration", "Skill certification"], url: "https://sikkim.gov.in/departments/skill-development-department" }
      ],
      "Tamil Nadu": [
        { id: "tn-skill", name: "Tamil Nadu Skill Development (TNSDC)", description: "State skill development initiatives", actions: ["Training registration", "Skill certification"], url: "https://www.tnsdc.tn.gov.in" },
        { id: "tn-mudhalvan", name: "TN Naan Mudhalvan Portal", description: "State employment and training framework", actions: ["Skill training", "Job placement"], url: "https://www.naanmudhalvan.tn.gov.in" }
      ],
      "Telangana": [
        { id: "tg-skill", name: "Telangana Skill Mission (TASK)", description: "State skill development mission hub", actions: ["Training registration", "Skill certification"], url: "https://www.task.telangana.gov.in" },
        { id: "tg-iti", name: "Telangana Department of Training", description: "State ITI portal and industrial training", actions: ["ITI admissions", "Trade testing"], url: "https://iti.telangana.gov.in" }
      ],
      "Tripura": [
        { id: "tr-skill", name: "Tripura Skill Mission (TSDM)", description: "State skill development initiatives", actions: ["Training registration", "Skill certification"], url: "https://www.tsdm.tripura.gov.in" },
        { id: "tr-employment", name: "Tripura Employment Directorate", description: "State employment and manpower services", actions: ["Employment registration", "Job search"], url: "https://employment.tripura.gov.in" }
      ],
      "Uttar Pradesh": [
        { id: "up-skill", name: "UP Skill Development Mission (UPSDM)", description: "UP State Skill Development Mission", actions: ["Training registration", "Skill certification"], url: "https://www.upsdm.gov.in" },
        { id: "up-sewayojan", name: "UP Sewayojan Portal", description: "State employment and apprenticeship system", actions: ["Employment registration", "Job search"], url: "https://sewayojan.up.nic.in" }
      ],
      "Uttarakhand": [
        { id: "uk-skill", name: "Uttarakhand Skill Mission (UKSDM)", description: "State skill development mission", actions: ["Training registration", "Skill certification"], url: "https://uksdm.org.in" },
        { id: "uk-iti", name: "Uttarakhand Directorate of Training", description: "State ITI admissions and services", actions: ["ITI admissions", "Trade testing"], url: "https://www.ukiti.nic.in" }
      ],
      "West Bengal": [
        { id: "wb-skill", name: "West Bengal Utkarsh Bangla", description: "Paschim Banga Society for Skill Development", actions: ["Training registration", "Placement support"], url: "https://www.pbssd.gov.in" },
        { id: "wb-employment", name: "West Bengal Employment Bank", description: "State employment registration portal", actions: ["Employment registration", "Job search"], url: "https://employmentbankwb.gov.in" }
      ]
    }
  },
  "Social Security": {
    central: [
      { id: "epfo", name: "Employees' Provident Fund Organisation (EPFO)", description: "Central body for provident fund and pension", actions: ["PF balance check", "UAN activation", "Claim filing"], url: "https://www.epfindia.gov.in" },
      { id: "esic", name: "Employees' State Insurance Corporation (ESIC)", description: "Social security and health insurance for workers", actions: ["Medical benefits", "Insurance tracking"], url: "https://www.esic.gov.in" },
      { id: "nps", name: "National Pension System Trust (NPS)", description: "Voluntary defined contribution pension system", actions: ["NPS registration", "Pension tracking"], url: "https://www.npstrust.org.in" },
      { id: "eshram", name: "eShram Portal", description: "National database of unorganized workers", actions: ["Worker registration", "Benefit tracking"], url: "https://eshram.gov.in" },
      { id: "pmsym", name: "Pradhan Mantri Shram Yogi Maandhan (PM-SYM)", description: "Pension scheme for unorganized workers", actions: ["Scheme registration", "Contribution tracking"], url: "https://maandhan.in" },
      { id: "nfsa", name: "National Food Security Portal (Ration Card)", description: "Public distribution system and ration services", actions: ["Ration card search", "Fair price shop locator"], url: "https://nfsa.gov.in" },
      { id: "nsap", name: "National Social Assistance Programme (NSAP)", description: "Pensions for elderly, widows, and disabled", actions: ["Pension application", "Payment tracking"], url: "https://nsap.nic.in" }
    ],
    stateTemplates: [
      { name: "Social Welfare", description: "State social welfare and pension schemes", actions: ["Pension application", "Benefit tracking"], urlPattern: "https://www.google.com/search?q={state}+social+welfare+department+portal" }
    ],
    stateSpecific: {
      "Andhra Pradesh": [
        { id: "ap-pension", name: "AP Navasakam (YSR Pension Kanuka)", description: "State social security pension portal", actions: ["Pension application", "Status tracking"], url: "https://sspensions.apcfss.in" },
        { id: "ap-ration", name: "AP Civil Supplies (Ration Card)", description: "State ration card management system", actions: ["Ration card search", "Allotment status"], url: "https://epos.ap.gov.in" }
      ],
      "Arunachal Pradesh": [
        { id: "ar-social", name: "Arunachal Social Welfare Dept", description: "State welfare and pension services", actions: ["Pension application", "Scheme tracking"], url: "https://socialwelfare.arunachal.gov.in" }
      ],
      "Assam": [
        { id: "as-fcsca", name: "Assam Food & Civil Supplies", description: "State ration card processing and food security", actions: ["Ration card search", "FPS locator"], url: "https://fcsca.assam.gov.in" }
      ],
      "Bihar": [
        { id: "bh-pension", name: "Bihar e-Labharthi", description: "Social security pension tracker", actions: ["Pension tracking", "Life certificate"], url: "https://elabharthi.bih.nic.in" },
        { id: "bh-ration", name: "Bihar AePDS (Ration Card)", description: "State ration card distribution engine", actions: ["Ration card search", "Distribution status"], url: "https://epos.bihar.gov.in" }
      ],
      "Chhattisgarh": [
        { id: "cg-khadya", name: "Chhattisgarh Khadya Department", description: "State ration card and food portal", actions: ["Ration card search", "Allocation tracking"], url: "https://khadya.cg.nic.in" },
        { id: "cg-welfare", name: "CG Social Welfare Infrastructure", description: "State social security pension services", actions: ["Pension application", "Status tracking"], url: "https://sw.cg.gov.in" }
      ],
      "Goa": [
        { id: "goa-social", name: "Goa Directorate of Social Welfare", description: "State social welfare and pension schemes", actions: ["Scheme registration", "Benefit tracking"], url: "https://www.socialwelfare.goa.gov.in" },
        { id: "goa-ration", name: "Goa Civil Supplies Department", description: "State ration tracking and food services", actions: ["Ration card search", "FPS tracking"], url: "https://goacivilsupplies.gov.in" }
      ],
      "Gujarat": [
        { id: "gj-social", name: "Gujarat Social Defense Department", description: "State social security pension engine", actions: ["Pension application", "Status tracking"], url: "https://sje.gujarat.gov.in" },
        { id: "gj-food", name: "Gujarat Food & Civil Supplies", description: "State ration card and food services", actions: ["Ration card search", "FPS locator"], url: "https://dcs-dof.gujarat.gov.in" }
      ],
      "Haryana": [
        { id: "hr-social", name: "Haryana Social Justice & Empowerment", description: "State old age and social pension system", actions: ["Pension application", "Payment status"], url: "https://pension.socialjusticehry.gov.in" },
        { id: "hr-ration", name: "Haryana Food & Supplies Dept", description: "State ration card management", actions: ["Ration card search", "Allocation tracking"], url: "https://hr.epos.nic.in" }
      ],
      "Himachal Pradesh": [
        { id: "hp-social", name: "HP Social Justice & Empowerment", description: "State welfare and pension portal", actions: ["Pension application", "Scheme tracking"], url: "https://esakalyan.hp.gov.in" },
        { id: "hp-ration", name: "HP Food & Civil Supplies", description: "State e-ration card tracking system", actions: ["Ration card search", "FPS locator"], url: "https://epos.hp.gov.in" }
      ],
      "Jharkhand": [
        { id: "jh-pension", name: "Jharkhand Social Security Pension", description: "State pension management portal", actions: ["Pension application", "Status tracking"], url: "https://pension.jharkhand.gov.in" },
        { id: "jh-aahar", name: "Jharkhand Aahar Portal", description: "State ration allocation and food portal", actions: ["Ration card search", "Allocation status"], url: "https://aahar.jharkhand.gov.in" }
      ],
      "Karnataka": [
        { id: "ka-dssp", name: "Karnataka Social Security Directorate", description: "State social security and pensions", actions: ["Pension application", "Status tracking"], url: "https://dssp.karnataka.gov.in" },
        { id: "ka-ahara", name: "Karnataka Ahara Portal", description: "State ration card matrix and food services", actions: ["Ration card search", "FPS locator"], url: "https://ahara.kar.nic.in" }
      ],
      "Kerala": [
        { id: "kl-kssm", name: "Kerala Social Security Mission", description: "State social welfare and support portal", actions: ["Scheme registration", "Benefit tracking"], url: "https://www.kssm.kerala.gov.in" },
        { id: "kl-sevana", name: "Kerala Sevana Pension Tracking", description: "State pension tracking architecture", actions: ["Pension tracking", "Status check"], url: "https://www.sevanapension.kerala.gov.in" },
        { id: "kl-ration", name: "Kerala Civil Supplies (e-Citizen)", description: "State e-ration card services", actions: ["Ration card search", "FPS locator"], url: "https://ecitizen.civilsupplieskerala.gov.in" }
      ],
      "Madhya Pradesh": [
        { id: "mp-samagra", name: "MP Samagra Social Security", description: "Unified state social security mission", actions: ["ID registration", "Benefit tracking"], url: "https://samagra.gov.in" },
        { id: "mp-pension", name: "MP State Pension Portal", description: "State pension hub and management", actions: ["Pension application", "Status tracking"], url: "https://pension.samagra.gov.in" }
      ],
      "Maharashtra": [
        { id: "mh-social", name: "Maharashtra Social Justice Dept", description: "State welfare and special assistance", actions: ["Scheme registration", "Benefit tracking"], url: "https://sjsa.maharashtra.gov.in" },
        { id: "mh-ration", name: "Maharashtra AePDS Ration Portal", description: "State ration card and food distribution", actions: ["Ration card search", "FPS locator"], url: "https://mahapood.gov.in" }
      ],
      "Manipur": [
        { id: "mn-social", name: "Manipur Directorate of Social Welfare", description: "State pension and welfare hub", actions: ["Pension application", "Status tracking"], url: "https://socialwelfare.manipur.gov.in" }
      ],
      "Meghalaya": [
        { id: "mg-food", name: "Meghalaya Food & Civil Supplies", description: "State ration services and food security", actions: ["Ration card search", "FPS locator"], url: "https://megfcs.gov.in" }
      ],
      "Mizoram": [
        { id: "mz-social", name: "Mizoram Social Welfare Dept", description: "State social welfare and tribal affairs", actions: ["Scheme registration", "Benefit tracking"], url: "https://socialwelfare.mizoram.gov.in" }
      ],
      "Nagaland": [
        { id: "ng-social", name: "Nagaland Social Welfare Portal", description: "State social welfare and pension services", actions: ["Pension application", "Scheme tracking"], url: "https://socialwelfare.nagaland.gov.in" }
      ],
      "Odisha": [
        { id: "od-ssepd", name: "Odisha Social Security (SSEPD)", description: "Empowerment of persons with disabilities and social security", actions: ["Pension application", "Disability services"], url: "https://ssepd.odisha.gov.in" },
        { id: "od-food", name: "Odisha Food Supplies Portal", description: "State ration card tracking and food welfare", actions: ["Ration card search", "Allocation status"], url: "https://pdsodisha.gov.in" }
      ],
      "Punjab": [
        { id: "pb-social", name: "Punjab Social Security Dept", description: "State welfare for women and child development", actions: ["Scheme registration", "Benefit tracking"], url: "https://sswcd.punjab.gov.in" },
        { id: "pb-ration", name: "Punjab Electronic Ration Card", description: "State ration distribution module", actions: ["Ration card search", "FPS locator"], url: "https://epos.punjab.gov.in" }
      ],
      "Rajasthan": [
        { id: "rj-pension", name: "Rajasthan SSP Portal", description: "State social security pension system", actions: ["Pension application", "Status tracking"], url: "https://ssp.rajasthan.gov.in" },
        { id: "rj-food", name: "Rajasthan Food & Civil Supplies", description: "State ration card and food management", actions: ["Ration card search", "Allocation status"], url: "https://food.rajasthan.gov.in" }
      ],
      "Sikkim": [
        { id: "sk-food", name: "Sikkim Food & Civil Supplies", description: "State ration card and food distribution", actions: ["Ration card search", "FPS locator"], url: "https://sikkimfcsca.gov.in" }
      ],
      "Tamil Nadu": [
        { id: "tn-social", name: "Tamil Nadu Social Welfare Dept", description: "State social welfare and empowerment framework", actions: ["Scheme registration", "Benefit tracking"], url: "https://tnsocialwelfare.tn.gov.in" },
        { id: "tn-pds", name: "Tamil Nadu TNPDS Ration Portal", description: "State ration ecosystem and food security", actions: ["Ration card search", "FPS locator"], url: "https://www.tnpds.gov.in" }
      ],
      "Telangana": [
        { id: "tg-aasara", name: "Telangana Aasara Pension", description: "State pension management system", actions: ["Pension application", "Payment status"], url: "https://www.aasara.telangana.gov.in" },
        { id: "tg-ration", name: "Telangana Civil Supplies Portal", description: "State food allocation and ration services", actions: ["Ration card search", "Allocation tracking"], url: "https://epos.telangana.gov.in" }
      ],
      "Tripura": [
        { id: "tr-social", name: "Tripura Social Welfare Portal", description: "State social welfare and pension services", actions: ["Scheme registration", "Benefit tracking"], url: "https://socialwelfare.tripura.gov.in" }
      ],
      "Uttar Pradesh": [
        { id: "up-pension", name: "UP Integrated Pension Portal", description: "State social security pension services", actions: ["Old age pension", "Widow pension", "Divyang pension"], url: "https://sspy-up.gov.in" },
        { id: "up-food", name: "UP Food & Civil Supplies", description: "State ration card management system", actions: ["Ration card search", "Allocation status"], url: "https://fcs.up.gov.in" }
      ],
      "Uttarakhand": [
        { id: "uk-social", name: "Uttarakhand Social Welfare Portal", description: "State welfare and pension services", actions: ["Scheme registration", "Benefit tracking"], url: "https://socialwelfare.uk.gov.in" }
      ],
      "West Bengal": [
        { id: "wb-pension", name: "West Bengal Jai Bangla", description: "State social security pension framework", actions: ["Pension application", "Status tracking"], url: "https://jaibangla.wb.gov.in" },
        { id: "wb-ration", name: "West Bengal Khadya Sathi", description: "State digital ration card portal", actions: ["Ration card search", "Allocation status"], url: "https://wbpds.wb.gov.in" }
      ]
    }
  },
  "Disaster Relief": {
    central: [
      { id: "ndma", name: "National Disaster Management Authority (NDMA)", description: "Apex body for disaster management in India", actions: ["Guidelines", "Incident reporting"], url: "https://ndma.gov.in" },
      { id: "ndrf", name: "National Disaster Response Force (NDRF)", description: "Specialized force for disaster response", actions: ["Emergency contact", "Rescue updates"], url: "https://ndrf.gov.in" },
      { id: "mausam", name: "IMD Mausam (Weather Alerts)", description: "Official weather forecasting and alerts", actions: ["Weather alerts", "Cyclone tracking"], url: "https://mausam.imd.gov.in" },
      { id: "cwc-flood", name: "CWC Flood Forecasting", description: "Central Water Commission flood monitoring", actions: ["Flood alerts", "River level tracking"], url: "https://ffs.india-water.gov.in" },
      { id: "erss-112", name: "Emergency Response System (112)", description: "Unified emergency response number for India", actions: ["Emergency SOS", "Police/Fire/Medical"], url: "https://112.gov.in" }
    ],
    stateTemplates: [
      { name: "SDMA Portal", description: "State Disaster Management Authority", actions: ["Emergency alerts", "Relief applications"], urlPattern: "https://www.google.com/search?q={state}+disaster+management+authority+official" }
    ],
    stateSpecific: {
      "Andhra Pradesh": [
        { id: "ap-sdma", name: "AP State Disaster Management Authority", description: "State disaster management and alerts", actions: ["Emergency alerts", "Incident reporting"], url: "https://www.apsdma.ap.gov.in" }
      ],
      "Arunachal Pradesh": [
        { id: "ar-sdma", name: "Arunachal Disaster Management Authority", description: "State disaster response and monitoring", actions: ["Emergency alerts", "Relief tracking"], url: "https://dm.arunachal.gov.in" }
      ],
      "Assam": [
        { id: "as-sdma", name: "Assam State Disaster Management Authority", description: "State disaster and flood reporting", actions: ["Flood reports", "Emergency alerts"], url: "https://asdma.assam.gov.in" }
      ],
      "Bihar": [
        { id: "bh-sdma", name: "Bihar State Disaster Management Authority", description: "State disaster preparedness and response", actions: ["Disaster alerts", "Safety guidelines"], url: "https://bsdma.bihar.gov.in" },
        { id: "bh-disaster-dept", name: "Bihar Disaster Management Dept", description: "State disaster tracking and relief", actions: ["Relief applications", "Status tracking"], url: "https://disastermgmt.bih.nic.in" }
      ],
      "Chhattisgarh": [
        { id: "cg-revenue-disaster", name: "Chhattisgarh Revenue & Disaster Management", description: "State disaster and revenue services", actions: ["Disaster alerts", "Relief funds"], url: "https://revenue.cg.nic.in" }
      ],
      "Goa": [
        { id: "goa-sdma", name: "Goa State Disaster Management Authority", description: "State disaster response and alerts", actions: ["Emergency alerts", "Rescue updates"], url: "https://gsdma.goa.gov.in" }
      ],
      "Gujarat": [
        { id: "gj-sdma", name: "Gujarat State Disaster Management Authority", description: "State disaster management hub", actions: ["Disaster alerts", "Relief funds"], url: "https://gsdma.gujarat.gov.in" }
      ],
      "Haryana": [
        { id: "hr-revenue-disaster", name: "Haryana Revenue & Disaster Management", description: "State disaster management and revenue", actions: ["Relief applications", "Disaster alerts"], url: "https://revenueharyana.gov.in" }
      ],
      "Himachal Pradesh": [
        { id: "hp-sdma", name: "HP State Disaster Management Authority", description: "State disaster monitoring and response", actions: ["Emergency alerts", "Rescue updates"], url: "https://hpsdma.nic.in" }
      ],
      "Jharkhand": [
        { id: "jh-disaster", name: "Jharkhand Disaster Management Portal", description: "State disaster services and alerts", actions: ["Emergency alerts", "Relief tracking"], url: "https://disastermgmnt.jharkhand.gov.in" }
      ],
      "Karnataka": [
        { id: "ka-ksndmc", name: "Karnataka Natural Disaster Monitoring Centre", description: "State natural disaster monitoring", actions: ["Weather alerts", "Rainfall tracking"], url: "https://ksndmc.karnataka.gov.in" }
      ],
      "Kerala": [
        { id: "kl-sdma", name: "Kerala State Disaster Management Authority", description: "State disaster tracker and response", actions: ["Emergency alerts", "Incident reporting"], url: "https://ksdma.kerala.gov.in" }
      ],
      "Madhya Pradesh": [
        { id: "mp-homeguard", name: "MP Home Guards & Disaster Response", description: "State disaster response force", actions: ["Emergency contact", "Rescue updates"], url: "https://homeguard.mp.gov.in" }
      ],
      "Maharashtra": [
        { id: "mh-disaster", name: "Maharashtra Relief & Rehabilitation", description: "State disaster node and emergency services", actions: ["Emergency alerts", "Relief funds"], url: "https://mhadiscom.in" }
      ],
      "Manipur": [
        { id: "mn-disaster", name: "Manipur Relief & Disaster Management", description: "State disaster management directorate", actions: ["Disaster alerts", "Safety guidelines"], url: "https://manipur.gov.in" }
      ],
      "Meghalaya": [
        { id: "mg-sdma", name: "Meghalaya State Disaster Management Authority", description: "State disaster response and alerts", actions: ["Emergency alerts", "Relief tracking"], url: "https://matmeg.nic.in" }
      ],
      "Mizoram": [
        { id: "mz-dmr", name: "Mizoram Disaster Management & Rehabilitation", description: "State disaster services and rehabilitation", actions: ["Relief applications", "Disaster alerts"], url: "https://dmr.mizoram.gov.in" }
      ],
      "Nagaland": [
        { id: "ng-sdma", name: "Nagaland State Disaster Management Authority", description: "State disaster response and monitoring", actions: ["Emergency alerts", "Rescue updates"], url: "https://nsdma.nagaland.gov.in" }
      ],
      "Odisha": [
        { id: "od-sdma", name: "Odisha State Disaster Management Authority", description: "State early alerts and disaster response", actions: ["Cyclone alerts", "Emergency services"], url: "https://www.osdma.org" }
      ],
      "Punjab": [
        { id: "pb-revenue-disaster", name: "Punjab Revenue & Disaster Management", description: "State disaster management and rehabilitation", actions: ["Relief applications", "Disaster alerts"], url: "https://revenue.punjab.gov.in" }
      ],
      "Rajasthan": [
        { id: "rj-relief", name: "Rajasthan Disaster Management & Relief", description: "State relief and civil defense services", actions: ["Disaster alerts", "Relief funds"], url: "https://relief.rajasthan.gov.in" }
      ],
      "Sikkim": [
        { id: "sk-sdma", name: "Sikkim State Disaster Management Authority", description: "State disaster response and alerts", actions: ["Emergency alerts", "Rescue updates"], url: "https://ssdma.sikkim.gov.in" }
      ],
      "Tamil Nadu": [
        { id: "tn-sdma", name: "TN State Disaster Management (TN-SMART)", description: "State disaster monitoring and smart alerts", actions: ["Emergency alerts", "Weather tracking"], url: "https://tnsdma.tn.gov.in" }
      ],
      "Telangana": [
        { id: "tg-disaster", name: "Telangana Disaster Management Dept", description: "State disaster management network", actions: ["Emergency alerts", "Safety guidelines"], url: "https://disastermanagement.telangana.gov.in" }
      ],
      "Tripura": [
        { id: "tr-sdma", name: "Tripura State Disaster Management Authority", description: "State disaster response and monitoring", actions: ["Emergency alerts", "Relief tracking"], url: "https://tsdma.tripura.gov.in" }
      ],
      "Uttar Pradesh": [
        { id: "up-rahat", name: "UP Rahat Commissioner Portal", description: "State flood and relief monitoring", actions: ["Flood alerts", "Relief status"], url: "https://rahat.up.nic.in" }
      ],
      "Uttarakhand": [
        { id: "uk-sdma", name: "Uttarakhand Disaster Mitigation (USDMA)", description: "State disaster mitigation and management", actions: ["Emergency alerts", "Rescue updates"], url: "https://usdma.uk.gov.in" }
      ],
      "West Bengal": [
        { id: "wb-disaster", name: "West Bengal Disaster Management", description: "State disaster management and civil defense", actions: ["Disaster alerts", "Relief applications"], url: "https://wbdmd.gov.in" }
      ]
    }
  },
  "Environmental Protection": {
    central: [
      { id: "moefcc", name: "Ministry of Environment, Forest and Climate Change (MoEFCC)", description: "Apex body for environmental policy and monitoring", actions: ["Policy updates", "Environmental clearance"], url: "https://moefcc.gov.in" },
      { id: "cpcb", name: "Central Pollution Control Board (CPCB National)", description: "National body for pollution control and monitoring", actions: ["Air quality index", "Pollution complaints"], url: "https://cpcb.nic.in" },
      { id: "ngt", name: "National Green Tribunal (NGT Digital Portal)", description: "Specialized body for environmental dispute resolution", actions: ["Legal guidance", "Case tracking"], url: "https://greentribunal.gov.in" },
      { id: "parivesh", name: "Parivesh Portal", description: "Single-window environmental clearances system", actions: ["Project clearance", "Status tracking"], url: "https://parivesh.nic.in" },
      { id: "nmcg", name: "National Mission for Clean Ganga (Namami Gange)", description: "Mission for rejuvenation of the river Ganga", actions: ["Project tracking", "Environmental monitoring"], url: "https://nmcg.nic.in" },
      { id: "prana", name: "National Clean Air Programme (PRANA)", description: "Portal for regulation of air pollution in non-attainment cities", actions: ["AQI tracking", "Regulation monitoring"], url: "https://prana.cpcb.gov.in" },
      { id: "green-india", name: "Green India Mission Hub", description: "National mission for a green India and afforestation", actions: ["Afforestation tracking", "Mission updates"], url: "https://moefcc.gov.in/en/missions/green-india-mission" },
      { id: "epr-plastic", name: "EPR Portal for Plastic Waste", description: "Extended producer responsibility portal for plastic waste", actions: ["Waste management", "Compliance reporting"], url: "https://cpcb.nic.in/epr-portal-plastic/" },
      { id: "e-waste", name: "E-Waste Management Tracking System", description: "National system for tracking and managing e-waste", actions: ["Waste tracking", "Compliance reporting"], url: "https://ewastecpcb.nic.in" },
      { id: "sbm-waste", name: "Swachh Bharat Cleanliness & Waste Analytics", description: "Solid waste management and cleanliness analytics", actions: ["Waste management", "Cleanliness tracking"], url: "https://sbmurban.org" },
      { id: "haz-waste", name: "Hazardous Waste Tracking System", description: "Online system for managing hazardous waste", actions: ["Waste tracking", "Safety monitoring"], url: "https://cpcb.nic.in/hazardous-waste-management/" },
      { id: "live-aqi", name: "Live National Air Quality Index (AQI)", description: "Real-time air quality monitoring across India", actions: ["AQI tracking", "Safety alerts"], url: "https://app.cpcb.gov.in/AQI_India/" },
      { id: "env-grievance", name: "Environmental Grievance Interface (CPCB)", description: "Online portal for environmental complaints", actions: ["Pollution complaints", "Grievance redressal"], url: "https://cpcb.nic.in/lodge-complaint/" },
      { id: "green-corps", name: "National Green Corps (Eco-Clubs)", description: "Directory of eco-clubs and green initiatives", actions: ["Eco-club directory", "Green initiatives"], url: "https://moefcc.gov.in/en/public-information/eco-clubs" },
      { id: "sup-compliance", name: "Single-Use Plastic Compliance Hub", description: "Reporting and compliance for single-use plastic ban", actions: ["Compliance reporting", "Regulation monitoring"], url: "https://cpcb.nic.in/sup-portal/" }
    ],
    stateTemplates: [
      { name: "Pollution Control Board", description: "State-level pollution monitoring and control", actions: ["Pollution complaints", "NOC applications"], urlPattern: "https://www.google.com/search?q={state}+pollution+control+board+official" }
    ],
    stateSpecific: {
      "Andhra Pradesh": [
        { id: "ap-pcb", name: "AP Pollution Control Board", description: "State pollution monitoring and control", actions: ["AQI tracking", "Complaints"], url: "https://appcb.ap.nic.in" },
        { id: "ap-efst", name: "AP Environment & Forests Dept", description: "State environment and forest department", actions: ["Policy updates", "Environmental monitoring"], url: "https://efst.ap.gov.in" }
      ],
      "Arunachal Pradesh": [
        { id: "ar-pcb", name: "Arunachal State Pollution Control Board", description: "State pollution monitoring and control", actions: ["AQI tracking", "Complaints"], url: "https://apsb.nic.in" },
        { id: "ar-forest", name: "Arunachal Environment & Forests", description: "State environment and forest department", actions: ["Policy updates", "Environmental monitoring"], url: "https://arunachalforests.gov.in" }
      ],
      "Assam": [
        { id: "as-pcb", name: "Pollution Control Board Assam", description: "State pollution monitoring and control", actions: ["AQI tracking", "Complaints"], url: "https://pcbassam.org" },
        { id: "as-forest", name: "Assam Environment & Forest Dept", description: "State environment and forest department", actions: ["Policy updates", "Environmental monitoring"], url: "https://forest.assam.gov.in" }
      ],
      "Bihar": [
        { id: "bh-pcb", name: "Bihar State Pollution Control Board", description: "State pollution monitoring and control", actions: ["AQI tracking", "Complaints"], url: "https://bspcb.bihar.gov.in" },
        { id: "bh-forest", name: "Bihar Environment & Forest Dept", description: "State environment and forest department", actions: ["Policy updates", "Environmental monitoring"], url: "https://state.bihar.gov.in/forest" }
      ],
      "Chhattisgarh": [
        { id: "cg-pcb", name: "Chhattisgarh Environment Conservation Board", description: "State pollution monitoring and conservation", actions: ["AQI tracking", "Complaints"], url: "https://enviscecb.org" },
        { id: "cg-forest", name: "CG Forest & Climate Change Dept", description: "State environment and forest department", actions: ["Policy updates", "Environmental monitoring"], url: "https://forest.cg.gov.in" }
      ],
      "Goa": [
        { id: "goa-pcb", name: "Goa State Pollution Control Board", description: "State pollution monitoring and control", actions: ["AQI tracking", "Complaints"], url: "https://goaspcb.gov.in" },
        { id: "goa-env", name: "Goa Environment & Climate Change", description: "State environment and climate change department", actions: ["Policy updates", "Environmental monitoring"], url: "https://www.goa.gov.in/department/environment/" }
      ],
      "Gujarat": [
        { id: "gj-pcb", name: "Gujarat Pollution Control Board (GPCB)", description: "State pollution monitoring and control", actions: ["AQI tracking", "Complaints"], url: "https://gpcb.gujarat.gov.in" },
        { id: "gj-forest", name: "Gujarat Forests & Environment Dept", description: "State environment and forest department", actions: ["Policy updates", "Environmental monitoring"], url: "https://fedaranya.gujarat.gov.in" }
      ],
      "Haryana": [
        { id: "hr-pcb", name: "Haryana State Pollution Control Board", description: "State pollution monitoring and control", actions: ["AQI tracking", "Complaints"], url: "https://hspcb.gov.in" },
        { id: "hr-forest", name: "Haryana Forest Department", description: "State forest department and green initiatives", actions: ["Policy updates", "Green initiatives"], url: "https://haryanaforest.gov.in" }
      ],
      "Himachal Pradesh": [
        { id: "hp-pcb", name: "HP State Pollution Control Board", description: "State pollution monitoring and control", actions: ["AQI tracking", "Complaints"], url: "https://hppcb.nic.in" },
        { id: "hp-dest", name: "HP Environment & Science Dept", description: "State environment, science and technology department", actions: ["Policy updates", "Environmental monitoring"], url: "https://desthp.nic.in" }
      ],
      "Jharkhand": [
        { id: "jh-pcb", name: "Jharkhand State Pollution Control Board", description: "State pollution monitoring and control", actions: ["AQI tracking", "Complaints"], url: "https://jspcb.nic.in" },
        { id: "jh-forest", name: "Jharkhand Environment & Forest Dept", description: "State environment and forest department", actions: ["Policy updates", "Environmental monitoring"], url: "https://forests.jharkhand.gov.in" }
      ],
      "Karnataka": [
        { id: "ka-pcb", name: "Karnataka State Pollution Control Board", description: "State pollution monitoring and control", actions: ["AQI tracking", "Complaints"], url: "https://kspcb.karnataka.gov.in" },
        { id: "ka-fee", name: "Karnataka Forest & Environment Dept", description: "State forest, ecology and environment department", actions: ["Policy updates", "Environmental monitoring"], url: "https://fee.karnataka.gov.in" }
      ],
      "Kerala": [
        { id: "kl-pcb", name: "Kerala State Pollution Control Board", description: "State pollution monitoring and control", actions: ["AQI tracking", "Complaints"], url: "https://keralapcb.nic.in" },
        { id: "kl-env", name: "Kerala Environment & Climate Change", description: "State environment and climate change department", actions: ["Policy updates", "Environmental monitoring"], url: "https://envt.kerala.gov.in" }
      ],
      "Madhya Pradesh": [
        { id: "mp-pcb", name: "MP Pollution Control Board", description: "State pollution monitoring and control", actions: ["AQI tracking", "Complaints"], url: "https://mppcb.mp.gov.in" },
        { id: "mp-env", name: "MP Department of Environment", description: "State environment department", actions: ["Policy updates", "Environmental monitoring"], url: "https://www.mp.gov.in" }
      ],
      "Maharashtra": [
        { id: "mh-pcb", name: "Maharashtra Pollution Control Board (MPCB)", description: "State pollution monitoring and control", actions: ["AQI tracking", "Complaints"], url: "https://mpcb.gov.in" },
        { id: "mh-env", name: "Maharashtra Environment & Climate Change", description: "State environment and climate change department", actions: ["Policy updates", "Environmental monitoring"], url: "https://env.maharashtra.gov.in" }
      ],
      "Manipur": [
        { id: "mn-pcb", name: "Manipur Pollution Control Board", description: "State pollution monitoring and control", actions: ["AQI tracking", "Complaints"], url: "https://mpcb.manipur.gov.in" },
        { id: "mn-forest", name: "Manipur Forest & Environment Dept", description: "State environment and forest department", actions: ["Policy updates", "Environmental monitoring"], url: "https://asf.mn.gov.in" }
      ],
      "Meghalaya": [
        { id: "mg-pcb", name: "Meghalaya State Pollution Control Board", description: "State pollution monitoring and control", actions: ["AQI tracking", "Complaints"], url: "https://megspcb.gov.in" },
        { id: "mg-forest", name: "Meghalaya Forest & Environment Dept", description: "State environment and forest department", actions: ["Policy updates", "Environmental monitoring"], url: "https://megforest.gov.in" }
      ],
      "Mizoram": [
        { id: "mz-pcb", name: "Mizoram Pollution Control Board", description: "State pollution monitoring and control", actions: ["AQI tracking", "Complaints"], url: "https://mpcb.mizoram.gov.in" },
        { id: "mz-forest", name: "Mizoram Environment & Forest Dept", description: "State environment and forest department", actions: ["Policy updates", "Environmental monitoring"], url: "https://forest.mizoram.gov.in" }
      ],
      "Nagaland": [
        { id: "ng-pcb", name: "Nagaland Pollution Control Board", description: "State pollution monitoring and control", actions: ["AQI tracking", "Complaints"], url: "https://npcb.nagaland.gov.in" },
        { id: "ng-forest", name: "Nagaland Environment & Forest Dept", description: "State environment and forest department", actions: ["Policy updates", "Environmental monitoring"], url: "https://forest.nagaland.gov.in" }
      ],
      "Odisha": [
        { id: "od-pcb", name: "State Pollution Control Board Odisha", description: "State pollution monitoring and control", actions: ["AQI tracking", "Complaints"], url: "https://ospcboard.org" },
        { id: "od-forest", name: "Odisha Forest & Environment Dept", description: "State environment and forest department", actions: ["Policy updates", "Environmental monitoring"], url: "https://forest.odisha.gov.in" }
      ],
      "Punjab": [
        { id: "pb-pcb", name: "Punjab Pollution Control Board", description: "State pollution monitoring and control", actions: ["AQI tracking", "Complaints"], url: "https://ppcb.punjab.gov.in" },
        { id: "pb-pstd", name: "Punjab Environment & Science Dept", description: "State science, technology and environment department", actions: ["Policy updates", "Environmental monitoring"], url: "https://pstdetech.punjab.gov.in" }
      ],
      "Rajasthan": [
        { id: "rj-pcb", name: "Rajasthan State Pollution Control Board", description: "State pollution monitoring and control", actions: ["AQI tracking", "Complaints"], url: "https://environment.rajasthan.gov.in/rpcb" },
        { id: "rj-env", name: "Rajasthan Environment & Climate Change", description: "State environment and climate change department", actions: ["Policy updates", "Environmental monitoring"], url: "https://environment.rajasthan.gov.in" }
      ],
      "Sikkim": [
        { id: "sk-pcb", name: "Sikkim State Pollution Control Board", description: "State pollution monitoring and control", actions: ["AQI tracking", "Complaints"], url: "https://www.sikkimspcb.org.in" },
        { id: "sk-forest", name: "Sikkim Forest & Environment Dept", description: "State environment and forest department", actions: ["Policy updates", "Environmental monitoring"], url: "https://sikkimforest.gov.in" }
      ],
      "Tamil Nadu": [
        { id: "tn-pcb", name: "Tamil Nadu Pollution Control Board (TNPCB)", description: "State pollution monitoring and control", actions: ["AQI tracking", "Complaints"], url: "https://tnpcb.gov.in" },
        { id: "tn-env", name: "TN Environment & Climate Change", description: "State environment and climate change department", actions: ["Policy updates", "Environmental monitoring"], url: "https://environment.tn.gov.in" }
      ],
      "Telangana": [
        { id: "tg-pcb", name: "Telangana State Pollution Control Board", description: "State pollution monitoring and control", actions: ["AQI tracking", "Complaints"], url: "https://tspcb.cgg.gov.in" },
        { id: "tg-efst", name: "Telangana Environment & Forests Dept", description: "State environment and forest department", actions: ["Policy updates", "Environmental monitoring"], url: "https://efst.telangana.gov.in" }
      ],
      "Tripura": [
        { id: "tr-pcb", name: "Tripura State Pollution Control Board", description: "State pollution monitoring and control", actions: ["AQI tracking", "Complaints"], url: "https://tspcb.tripura.gov.in" },
        { id: "tr-dste", name: "Tripura Environment & Science Dept", description: "State science, technology and environment department", actions: ["Policy updates", "Environmental monitoring"], url: "https://dste.tripura.gov.in" }
      ],
      "Uttar Pradesh": [
        { id: "up-pcb", name: "UP Pollution Control Board", description: "State pollution monitoring and control", actions: ["AQI tracking", "Complaints"], url: "https://uppcb.com" },
        { id: "up-forest", name: "UP Environment & Forest Dept", description: "State environment and forest department", actions: ["Policy updates", "Environmental monitoring"], url: "https://upforest.gov.in" }
      ],
      "Uttarakhand": [
        { id: "uk-pcb", name: "Uttarakhand Pollution Control Board", description: "State pollution monitoring and control", actions: ["AQI tracking", "Complaints"], url: "https://ueppcb.uk.gov.in" },
        { id: "uk-forest", name: "Uttarakhand Forest Department", description: "State forest department", actions: ["Policy updates", "Environmental monitoring"], url: "https://forest.uk.gov.in" }
      ],
      "West Bengal": [
        { id: "wb-pcb", name: "West Bengal Pollution Control Board", description: "State pollution monitoring and control", actions: ["AQI tracking", "Complaints"], url: "https://wbpcb.gov.in" },
        { id: "wb-env", name: "West Bengal Environment Dept", description: "State environment department", actions: ["Policy updates", "Environmental monitoring"], url: "https://wbenvironment.nic.in" }
      ]
    }
  }
};