---
id: scan
title: temporal workflow scan
sidebar_label: scan
description: How to quickly list Workflow Executions without sorting using Temporal CLI.
tags:
  - cli
---

The `temporal workflow scan` command lists [Workflow Executions](/concepts/what-is-a-workflow-execution).

By default, this command lists a maximum of 2000 Workflow Executions.
To set the size of a page, use the `--pagesize` option.

See also [`temporal workflow list`](/temporal-cli/workflow#list).

`temporal workflow scan <modifiers>`

The following modifiers control the behavior of the command.

- [--fields](/temporal-cli/modifiers#--fields)
- [--limit](/temporal-cli/modifiers#--limit)
- [--no-pager](/temporal-cli/modifiers#--no-pager)
- [--output](/temporal-cli/modifiers#--output)
- [--pager](/temporal-cli/modifiers#--pager)
- [--query](/temporal-cli/modifiers#--query)
- [--time-format](/temporal-cli/modifiers#--time-format)
