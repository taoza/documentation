---
id: count
title: temporal workflow count
sidebar_label: count
description: How to count Workflow Executions using Temporal CLI.
tags:
  - cli
---

The `temporal workflow count` command counts [Workflow Executions](/concepts/what-is-a-workflow-execution).
This command requires Elasticsearch to be enabled.

`temporal workflow count <modifiers>`

The following modifier controls the behavior of the command.

- [--query](/temporal-cli/modifiers#--query)

**Example**

```bash
temporal workflow count --query 'ExecutionStatus="Running"'
```
