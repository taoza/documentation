---
id: how-to-configure-default-jwt
title: How to Configure the Default []
sidebar_label: How to Configure the Default []
---

Temporal offers a default JSON Web Token `ClaimMapper` that extracts claims from JWT access tokens and translates them into Temporal `Claims`.

Be sure to have your server running before using the default ClaimMapper.

To set up the default JWT ClaimMapper:

1. Obtain a public key for token validation.
2. Call `NewDefaultJWTClaimMapper`.
3. Provide `NewDefaultJWTClaimMapper` with:
   - an instance of a `TokenKeyProvider`
   - a pointer to a `config.Authorization`
   - a logger

```go
claimMapper := authorization.NewDefaultJWTClaimMapper(tokenKeyProvider, authCfg, logger)
```
