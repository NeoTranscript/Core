// src/issuer/real-issuer.js
import * as vc from '@digitalbazaar/vc';
import { Ed25519VerificationKey2020 } from '@digitalbazaar/ed25519-verification-key-2020';
import { Ed25519Signature2020 } from '@digitalbazaar/ed25519-signature-2020';

let issuerKey = null;

async function getIssuerKey() {
  if (issuerKey) return issuerKey;

  // In production: load from secure storage / environment
  issuerKey = await Ed25519VerificationKey2020.generate();
  issuerKey.controller = "https://neotranscript.org/issuers/fargo-university";
  issuerKey.id = `${issuerKey.controller}#key-1`;

  console.log("🔑 Issuer DID:", await issuerKey.export({publicKey: true}));
  return issuerKey;
}

export async function issueCredential(studentData, options = {}) {
  const key = await getIssuerKey();
  const suite = new Ed25519Signature2020({ key });

  const credential = {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://neotranscript.org/contexts/transcript/v1"
    ],
    "id": `https://neotranscript.org/credentials/${Date.now()}`,
    "type": ["VerifiableCredential", options.isDiploma ? "HighSchoolDiplomaCredential" : "TranscriptCredential"],
    "issuer": key.controller,
    "issuanceDate": new Date().toISOString(),
    "credentialSubject": {
      "id": studentData.studentDID || `did:key:${Math.random().toString(36).slice(2)}`,
      ...studentData
    }
  };

  const signedVC = await vc.issue({ credential, suite });
  return signedVC;
}

// Quick test
export async function test() {
  const sample = {
    name: "Alex Rivera",
    studentId: "S12345",
    major: "Computer Science",
    degree: "Bachelor of Science",
    gpa: 3.87,
    graduationDate: "2025-05-15",
    honors: "Magna Cum Laude",
    institution: "Fargo University",
    courses: [
      { courseCode: "CS101", name: "Intro to Programming", grade: "A", credits: 4 }
    ]
  };

  const vc = await issueCredential(sample);
  console.log("✅ Successfully issued real signed VC");
  console.dir(vc, { depth: 2 });
}

if (import.meta.url === `file://${process.argv[1]}`) {
  test();
}
