# NeoTranscript Architecture Decision

## Preferred Long-Term Approach: Bitcoin L2 + Mainnet Anchoring

**Hybrid Model (Recommended):**
- Day-to-day issuance, student wallets, and verification run on a fast, cheap Bitcoin Layer 2.
- Periodically anchor Merkle roots (hashes of batches of credentials) to Bitcoin mainnet for immutable, long-term proof.

### Why This Model Wins
- Combines speed + low cost (L2) with maximum security and censorship resistance (BTC mainnet).
- Employers and institutions get cryptographic proof tied to the most battle-tested ledger in existence.
- Students retain full ownership via public-private keys.
- No single point of failure or company dependency.

## MVP Phase (Short-Term)
For rapid prototyping and pilots:
- Pure W3C Verifiable Credentials with digital signatures (no blockchain required initially)
- Optional lightweight anchoring (e.g., to a public testnet or simple hash registry)
- Focus on usability and college integration

We will evaluate moving to BTC L2 anchoring before or during the first institutional pilots.

**Status:** Decision recorded — to be revisited after MVP.
