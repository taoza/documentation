---
id: reset-batch
title: tctl workflow reset-batch
sidebar_label: reset-batch
description: How to reset a batch of Workflow Executions using tctl.
tags:
  - tctl
---

The `tctl workflow reset-batch` command resets a batch of [Workflow Executions](/concepts/what-is-a-workflow-execution) by [`resetType`](#resettype).

Resetting a Workflow allows the process to be resumed from a certain point without losing your parameters or Event History.

`tctl workflow reset-batch <modifiers>`

The following modifiers control the behavior of the command.

- [--dry-run](/temporal-cli/modifiers#--dry-run)
- [--exclude-file](/temporal-cli/modifiers#--exclude-file)
- [--input-file](/temporal-cli/modifiers#--input-file)
- [--input-parallelism](/temporal-cli/modifiers#--input-parallelism)
- [--non-deterministic](/temporal-cli/modifiers#--non-deterministic)
- [--query](/temporal-cli/modifiers#--query)
- [--reason](/temporal-cli/modifiers#--reason)
- [--reset-bad-binary-checksum](/temporal-cli/modifiers#--reset-bad-binary-checksum)
- [--reset-type](/temporal-cli/modifiers#--reset-type)
- [--skip-current-open](/temporal-cli/modifiers#--skip-current-open)
- [--skip-base-not-current](/temporal-cli/modifiers#--skip-base-is-not-current)
