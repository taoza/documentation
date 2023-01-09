---
id: terminate
title: tctl workflow terminate
sidebar_label: terminate
description: How to terminate a Workflow Execution using tctl.
tags:
  - tctl
---

The `tctl workflow terminate` command terminates a [Workflow Execution](/concepts/what-is-a-workflow-execution).
If `run_id` is not specified, the command terminates the last Workflow Execution with the specified `workflow_id`.

Terminating a running Workflow Execution records a `WorkflowExecutionTerminated` event as the closing event in the History.
No more command tasks will be scheduled.

See also [`tctl workflow cancel`](/temporal-cli/workflow#cancel).

The use of the [`--query` modifier](/temporal-cli/modifiers#--query) (`tctl workflow terminate --query ...`) automatically starts a [batch job](/temporal-cli/batch) that Terminates Workflow Executions according to the List Filter provided.

`tctl workflow terminate --query <value> <modifiers>`

The following modifiers are supported and control the behavior of the command.
Always include required modifiers when executing this command.

- [--namespace](/temporal-cli/modifiers#--namespace)
- [--query](/temporal-cli/modifiers#--query)
- [--reason](/temporal-cli/modifiers#--reason)
- [--run-id](/temporal-cli/modifiers#--run-id)
- [--workflow-id](/temporal-cli/modifiers#--workflow-id)
- [--yes](/temporal-cli/modifiers#--yes)
