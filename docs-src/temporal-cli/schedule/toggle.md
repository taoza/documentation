---
id: toggle
title: temporal schedule toggle
sidebar_label: toggle
description: How to toggle (pause/unpause) a Schedule using Temporal CLI.
tags:
  - cli
---

```shell
$ temporal schedule toggle --sid 'your-schedule-id' --pause --reason "paused because the database is down"
$ temporal schedule toggle --sid 'your-schedule-id' --unpause --reason "the database is back up"
```
