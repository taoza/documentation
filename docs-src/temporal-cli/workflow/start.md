---
id: start
title: temporal workflow start
sidebar_label: start
description: How to start a new Workflow Execution using Temporal CLI.
tags:
  - cli
---

The `temporal workflow start` command starts a new [Workflow Execution](/concepts/what-is-a-workflow-execution).
This command returns the Workflow Id and Run Id immediately after starting the Workflow.

`temporal workflow start <modifiers>`

The following modifiers control the behavior of the command.
Always include required modifiers when executing this command.

- [--cron](/temporal-cli/modifiers#--cron)
- [--execution-timeout](/temporal-cli/modifiers#--execution-timeout)
- [--fields](/temporal-cli/modifiers#--fields)
- [--input](/temporal-cli/modifiers#--input)
- [--input-file](/temporal-cli/modifiers#--input-file)
- [--limit](/temporal-cli/modifiers#--limit)
- [--max-field-length](/temporal-cli/modifiers#--max-field-length)
- [--memo-key](/temporal-cli/modifiers#--memo-key)
- [--memo](/temporal-cli/modifiers#--memo)
- [--memo-file](/temporal-cli/modifiers#--memo-file)
- [--no-pager](/temporal-cli/modifiers#--no-pager)
- [--output](/temporal-cli/modifiers#--output)
- [--pager](/temporal-cli/modifiers#--pager)
- [--run-timeout](/temporal-cli/modifiers#--run-timeout)
- [--search-attribute-key](/temporal-cli/modifiers#--search-attribute-key)
- [--search-attribute-value](/temporal-cli/modifiers#--search-attribute-value)
- [--task-queue](/temporal-cli/modifiers#--task-queue)
- [--task-timeout](/temporal-cli/modifiers#--task-timeout)
- [--time-format](/temporal-cli/modifiers#--time-format)
- [--type](/temporal-cli/modifiers#--type)
- [--workflow-id](/temporal-cli/modifiers#--workflow-id)
- [--workflow-task-timeout](/temporal-cli/modifiers#--workflow-task-timeout)
- [--workflow-id-reuse-policy](/temporal-cli/modifiers#--workflow-id-reuse-policy)
