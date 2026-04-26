# NeoTranscript MVP Specification

**Version:** 0.1  
**Date:** April 26, 2026  
**Goal:** Deliver a working end-to-end prototype in 4–8 weeks.

## MVP Scope

### 1. Core User Flows
- **Issuer (College Registrar)**: Upload or input transcript data → cryptographically sign → issue Verifiable Credential to student wallet.
- **Holder (Student)**: Receive credential in wallet → share via public link/QR code.
- **Verifier (Employer/Grad School)**: Paste public key or scan QR → instantly see verified transcript details.

### 2. Key Features in MVP
- W3C Verifiable Credential issuance and verification
- NSC Onboarding Bridge simulation (manual data import)
- Selective disclosure (e.g. share GPA only)
- Basic revocation list support
- Simple web-based wallet and verifier UI

### 3. Out of Scope for MVP
- Mobile native wallet
- Full production SIS integration
- Advanced blockchain anchoring
- Production-scale security audit

## Tech Stack (To Be Finalized)
- Backend: Node.js or Python
- VC Library: @digitalcredentials/vc or pyvc
- Storage: JSON + optional IPFS
- Frontend: Plain HTML/JS or React

## Success Criteria
- End-to-end demo works with dummy data
- Verifier shows green check with correct data
- NSC Bridge imports sample data successfully
