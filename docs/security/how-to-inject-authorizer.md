---
id: how-to-inject-authorizer
title: How to Inject an Authorizer
sidebar_label: How to Inject an Authorizer
---

An authorizer component is an optional feature that can control access to all API calls.

Temporal provides a low-level authorizer that can allow and deny calls from specific namespaces. The sample code for this authorizer can be found in the sample servers repository.

## Configuring your Authorizer

Follow the steps below to create and use an authorizer on the Temporal Platform.

1. Open a new terminal window and start runtime dependencies.
2. Run the server.
3. Run tctl.
4. Register all namespaces that can make API calls.
