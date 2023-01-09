---
id: reset
title: tctl workflow reset
sidebar_label: reset
description: How to reset a Workflow Execution using tctl.
tags:
  - tctl
---

The `tctl workflow reset` command resets a [Workflow Execution](/concepts/what-is-a-workflow-execution) by either [`eventId`](#eventid)or [`resetType`](#resettype).

Resetting a Workflow allows the process to be resumed from a certain point without losing your parameters or Event History.

`tctl workflow reset <modifiers>`

The following modifiers control the behavior of the command.

- [--event-id](/temporal-cli/modifiers#--event-id)
- [--reason](/temporal-cli/modifiers#--reason)
- [--reset-type](/temporal-cli/modifiers#--reset-type)
- [--reset-reapply-type](/temporal-cli/modifiers#--reset-reapply-type)
- [--reset-bad-binary-checksum](/temporal-cli/modifiers#--reset-bad-binary-checksum)
- [--run-id](/temporal-cli/modifiers#--run-id)
- [--workflow-id](/temporal-cli/modifiers#--workflow-id)
