---
id: what-is-a-payload-converter
title: What is a Payload Converter?
sidebar_label: Payload Converter
description: A Payload Converter converts values to Payload and back.
tags:
  - term
  - explanation
---

Some SDKs have a Payload Converter as a part of the Data Converter, that does the conversion from a value to a Payload and back.
See the API reference for more information.

- [Go](https://pkg.go.dev/go.temporal.io/sdk@v1.20.0/converter#PayloadConverter)
- [Java](https://www.javadoc.io/doc/io.temporal/temporal-sdk/latest/io/temporal/common/converter/PayloadConverter.html)
- [TypeScript](https://typescript.temporal.io/api/classes/common.DefaultPayloadConverter#converters)
- [Python](https://python.temporal.io/temporalio.converter.PayloadConverter.html)

#### Custom Payload Conversion

When you request a Workflow Execution through your Client and pass a data input, the input is deserialized using the default Data Converter.
When your Workflow Execution starts, this data input is serialized and passed as input to your Workflow.

You can set multiple custom PayloadConverters to run your conversions. However, the order in which encoding payload converters are applied is important because during serialization, each encoding Payload Converter is tried in order until one properly serializes the value.

See [Custom Payload Conversion](/app-dev-context/custom-payload-conversion) for details on how to use the Payload Converter for custom data types.