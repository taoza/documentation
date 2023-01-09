---
id: delete
title: temporal schedule delete
sidebar_label: delete
description: How to delete a Schedule using Temporal CLI
tags:
  - cli
---

A Schedule can be deleted.

Deleting a Schedule **does not** affect any Workflows started by the Schedule.
Workflow Executions started by Schedules can be cancelled or terminated using the same methods as any others.
However, Workflow Executions started by a Schedule can be identified by the Search Attributes added to them and can be targeted by a [batch](/temporal-cli/batch#) command for termination.

```shell
$ temporal schedule delete --sid 'your-schedule-id'
```
