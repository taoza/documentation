---
id: register
title: temporal operator namespace register
sidebar_label: register
description: How to register a Namespace using Temporal CLI.
tags:
  - cli
---

The `temporal operator namespace register` command registers a [Namespace](/concepts/what-is-a-namespace).

`temporal operator namespace register`

By default, Temporal uses a "default" Namespace.
Create and register a new Namespace with the following command:

```bash
temporal operator namespace register your-namespace
```

The following modifiers are supported and control the behavior of the command.
Always include required modifiers when executing this command.

- [--active-cluster](/temporal-cli/modifiers#--active-cluster)
- [--clusters](/temporal-cli/modifiers#--clusters)
- [--description](/temporal-cli/modifiers#--description)
- [--global-namespace](/temporal-cli/modifiers#--global-namespace)
- [--history-archival-state](/temporal-cli/modifiers#--history-archival-state)
- [--history-uri](/temporal-cli/modifiers#--history-uri)
- [--namespace-data](/temporal-cli/modifiers#--namespace-data)
- [--owner-email](/temporal-cli/modifiers#--owner-email)
- [--retention](/temporal-cli/modifiers#--retention)
- [--visibility-archival-state](/temporal-cli/modifiers#--visibility-archival-state)
- [--visibility-uri](/temporal-cli/modifiers#--visibility-uri)
