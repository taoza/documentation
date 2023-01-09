---
id: describe
title: tctl workflow describe
sidebar_label: describe
description: How to show information about a Workflow Execution using tctl.
tags:
  - tctl
---

The `tctl workflow describe` command shows information about a [Workflow Execution](/concepts/what-is-a-workflow-execution).
This information can be used to locate a failed Workflow Execution, for example.

`tctl workflow describe <modifiers>`

The following modifiers control the behavior of the command.
Always include required modifiers when executing this command.

- [--raw](/temporal-cli/modifiers#--raw)
- [--reset-points-only](/temporal-cli/modifiers#--reset-points-only)
- [--run-id](/temporal-cli/modifiers#--run-id)
- [--workflow-id](/temporal-cli/modifiers#--workflow-id)
