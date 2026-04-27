/**
 * NeoTranscript Simple Issuer
 * Generates W3C Verifiable Credentials for transcripts and diplomas
 * 
 * Usage:
 *   node simple-issuer.js                  # Generate both examples
 *   node simple-issuer.js --type diploma   # Generate only high school diploma
 *   node simple-issuer.js --type transcript # Generate only college transcript
 */

const fs = require('fs');
const path = require('path');

// Command line argument parsing
const args = process.argv.slice(2);
const typeArg = args.find(arg => arg.startsWith('--type='))?.split('=')[1] || null;

function createCredential(studentData, isHighSchool = false) {
  const credential = {
    "@context": [
      "https://www.w3.org/ns/credentials/v2"
    ],
    "type": ["VerifiableCredential"],
    "issuer": `https://${studentData.institution.toLowerCase().replace(/ /g, '-')}.edu`,
    "issuanceDate": new Date().toISOString(),
    "credentialSubject": {
      "legalName": studentData.legalName,
      "preferredName": studentData.preferredName || studentData.legalName,
      "studentId": studentData.studentId,
      "gpa": studentData.gpa,
      "graduationDate": studentData.graduationDate
    }
  };

  if (isHighSchool) {
    credential.type.push("DiplomaCredential");
    credential.credentialSubject.diplomaType = studentData.diplomaType || "High School Diploma";
    credential.credentialSubject.schoolName = studentData.institution;
  } else {
    credential.type.push("TranscriptCredential");
    credential.credentialSubject.degree = studentData.degree;
    credential.credentialSubject.major = studentData.major;
    
    // Add sample course record
    credential.credentialSubject.courseRecord = [
      {
        "term": "Fall 2024",
        "courseCode": "CS 301",
        "courseTitle": "Data Structures and Algorithms",
        "credits": 4.0,
        "grade": "A"
      },
      {
        "term": "Spring 2025",
        "courseCode": "CS 450",
        "courseTitle": "Software Engineering",
        "credits": 3.0,
        "grade": "A-"
      }
    ];
  }

  return credential;
}

// Sample data
const sampleStudent = {
  legalName: "Alexander James Rivera",
  preferredName: "Alex Rivera",
  studentId: "U12345678",
  gpa: 3.87,
  graduationDate: "2025-05-15",
  degree: "Bachelor of Science in Computer Science",
  major: "Computer Science",
  institution: "Example University"
};

const sampleHighSchool = {
  legalName: "Alexander James Rivera",
  preferredName: "Alex Rivera",
  studentId: "HS987654",
  gpa: 3.92,
  graduationDate: "2023-06-10",
  diplomaType: "High School Diploma",
  institution: "Example High School"
};

// Generate based on command line args
let credentials = [];

if (!typeArg || typeArg === 'transcript') {
  credentials.push(createCredential(sampleStudent, false));
}

if (!typeArg || typeArg === 'diploma') {
  credentials.push(createCredential(sampleHighSchool, true));
}

// Save files
credentials.forEach((cred, index) => {
  const filename = cred.type.includes("DiplomaCredential") 
    ? "generated-diploma.json" 
    : "generated-transcript.json";
  
  const fullPath = path.join(__dirname, '../../examples', filename);
  fs.writeFileSync(fullPath, JSON.stringify(cred, null, 2));
  console.log(`✅ Saved: examples/${filename}`);
});

console.log("\n🎉 Done! You can now copy these files into the Verifier demo.");
console.log("Usage examples:");
console.log("  node simple-issuer.js");
console.log("  node simple-issuer.js --type diploma");
console.log("  node simple-issuer.js --type transcript");
