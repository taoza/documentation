---
id: index
title: temporal batch
sidebar_label: batch
description: How to run a temporal batch command. A temporal batch command enables you to affect multiple existing Workflow Executions with a single command.
tags:
  - cli
---

A "batch" command enables you to affect multiple existing [Workflow Executions](/concepts/what-is-a-workflow-execution) with a single command.
A batch job runs in the background and affects Workflow Executions one at a time.

With Temporal CLI, you can run the typical Signal Workflow, Terminate Workflow, and Cancel Workflow batch jobs using the `temporal workflow signal`, `temporal workflow terminate`, and `temporakl workflow cancel` commands respectively.
The batch command is automatically started when the [`--query` modifier](/temporal-cli/modifiers#--query) is provided with those commands.

In the Temporal CLI, the `temporal batch` commands are used solely to view the status of and terminate the batch jobs.

The `--query` modifier supports a [List Filter](/concepts/what-is-a-list-filter).
The List Filter identifies the set of Workflow Executions to be affected by the command.

A successfully started batch job returns a Job ID.
You can use this Job ID in the `temporal batch describe` command, which describes the progress of a specific batch job.

You can also use the Job ID to terminate the batch job itself.
Terminating a batch job does not roll back the operations already performed by the batch job.

### tctl batch-v2 commands

- [temporal batch describe](/temporal-cli/batch#describe)
- [temporal batch list](/temporal-cli/batch#list)
- [temporal batch terminate](/temporal-cli/batch#terminate)
