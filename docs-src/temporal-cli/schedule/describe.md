---
id: describe
title: temporal schedule describe
sidebar_label: describe
description: How to describe a Schedule using Temporal CLI
tags:
  - cli
---

Display the current Schedule configuration as well as extra information about past, current, and future Runs.

```shell
temporal schedule describe 'your-schedule-id'
```

Because the Schedule Spec is converted to canonical representations, the output might not be in the same form as it was input.
