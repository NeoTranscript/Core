# NeoTranscript

**Students own their transcripts and diplomas.**

A new system where academic credentials are issued as W3C Verifiable Credentials, signed by schools, and fully controlled by students using their own keys.

No more dependency on centralized services like the National Student Clearinghouse. Students can share exactly what they want, when they want.

## Live Demo (Works in Browser — No Install Needed)

- **[Demo Hub](https://neotranscript.github.io/Core/examples/index.html)**  
- **[1. Issuer Demo](https://neotranscript.github.io/Core/examples/issuer.html)** — Create rich transcripts & diplomas  
- **[2. Student Wallet](https://neotranscript.github.io/Core/examples/wallet.html)** — View, selective disclosure, PDF export  
- **[3. Verifier](https://neotranscript.github.io/Core/examples/verifier.html)** — Anyone can verify instantly

## Current Features

- Rich transcript builder with full course records
- Quick CSV paste support (easy import from Excel/SIS)
- High School Diploma credential type
- Major, GPA, Honors, Term/Semester fields
- Student-controlled selective disclosure (hide GPA, specific courses, etc.)
- Professional PDF transcript export
- Clean Issuer → Wallet → Verifier flow
- Mobile-friendly design

## Project Vision

- Students truly own their academic record using public-private keys
- Schools issue cryptographically signed credentials
- Employers/verifiers can instantly check authenticity without contacting the school
- Hybrid long-term proof using Bitcoin (optional anchoring)
- Works for both college transcripts and high school diplomas

## Getting Started

1. Visit the [Demo Hub](https://neotranscript.github.io/Core/examples/index.html) to try it immediately
2. Clone the repo locally:
   - Go to https://github.com/neotranscript/Core
   - Click "Code" → Download ZIP or use git clone
3. Open any file in the `examples/` folder in your browser

## Roadmap

- Real cryptographic signing using `@digitalbazaar/vc`
- Proper DID and key management
- JSON-LD context and full schema validation
- Bitcoin L2 + mainnet anchoring
- Backend issuer service
- First pilot with local schools (NDSU, Concordia, Fargo Public Schools)

## Tech (Current Demo)

- Pure browser JavaScript
- W3C Verifiable Credentials format
- jsPDF for PDF generation
- LocalStorage for demo flow between pages

---

**Built for student autonomy and institutional efficiency.**

**Repository**: [github.com/neotranscript/Core](https://github.com/neotranscript/Core)  
**Author**: Alec Tolson (@AlTols)  
**Date**: April 30, 2026
