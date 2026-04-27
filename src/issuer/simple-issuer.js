/**
 * NeoTranscript Simple Issuer
 * Generates W3C Verifiable Credentials for transcripts/diplomas
 * 
 * Run with: node simple-issuer.js
 */

const fs = require('fs');

// Sample credential generator
function createCredential(studentData, isHighSchool = false) {
  const credential = {
    "@context": [
      "https://www.w3.org/ns/credentials/v2"
    ],
    "type": ["VerifiableCredential"],
    "issuer": "https://example-university.edu",
    "issuanceDate": new Date().toISOString(),
    "credentialSubject": {
      "legalName": studentData.legalName,
      "preferredName": studentData.preferredName,
      "studentId": studentData.studentId,
      "gpa": studentData.gpa,
      "graduationDate": studentData.graduationDate
    }
  };

  if (isHighSchool) {
    credential.type.push("DiplomaCredential");
    credential.credentialSubject.diplomaType = studentData.diplomaType || "High School Diploma";
    credential.credentialSubject.schoolName = studentData.schoolName;
  } else {
    credential.type.push("TranscriptCredential");
    credential.credentialSubject.degree = studentData.degree;
    credential.credentialSubject.major = studentData.major;
  }

  return credential;
}

// Example usage
const sampleStudent = {
  legalName: "Alexander James Rivera",
  preferredName: "Alex Rivera",
  studentId: "U12345678",
  gpa: 3.87,
  graduationDate: "2025-05-15",
  degree: "Bachelor of Science in Computer Science",
  major: "Computer Science"
};

const transcriptCredential = createCredential(sampleStudent, false);
const diplomaCredential = createCredential({
  ...sampleStudent,
  diplomaType: "High School Diploma",
  schoolName: "Example High School"
}, true);

console.log("=== College Transcript Credential ===");
console.log(JSON.stringify(transcriptCredential, null, 2));

console.log("\n=== High School Diploma Credential ===");
console.log(JSON.stringify(diplomaCredential, null, 2));

// Save to file for easy testing
fs.writeFileSync('examples/generated-transcript.json', JSON.stringify(transcriptCredential, null, 2));
fs.writeFileSync('examples/generated-diploma.json', JSON.stringify(diplomaCredential, null, 2));

console.log("\n✅ Credentials saved to examples/generated-transcript.json and generated-diploma.json");
console.log("You can copy these into the Verifier demo!");
