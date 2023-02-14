---
id: dataconversion
title: Data conversion
sidebar_label: Data conversion
description: This guide provides a comprehensive overview of data handling with the Temporal Platform.
toc_max_heading_level: 4
---

<!-- THIS FILE IS GENERATED. DO NOT EDIT THIS FILE DIRECTLY -->

This guide provides a comprehensive overview of data handling with the Temporal Platform.

A Data Converter is a Temporal SDK component that encodes and decodes data entering, stored on, and exiting a Temporal Cluster.
It is used by the Temporal SDK framework to serialize/deserialize input and output of Activities and Workflows that need to be sent over the wire to the Temporal Cluster.

<div class="tdiw"><div class="tditw"><p class="tdit">Data Converter encodes and decodes data</p></div><div class="tdiiw"><img class="img_ev3q" src="/diagrams/default-data-converter.svg" alt="Data Converter encodes and decodes data" height="1240" width="2300" /></div></div>

The Data Converter encodes all data from your application before it is sent to the Temporal Cluster in the Client call. When the Temporal Server sends the encoded data back to the Worker, the Data Converter decodes the data for processing within your application. This ensures that all your sensitive data exists in its original format only on hosts that you control.

The main pieces of data that run through the Data Converter are arguments and return values:

- The Client:
  - Encodes Workflow, Signal, and Query arguments.
  - Decodes Workflow and Query return values.
- The Worker:
  - Decodes Workflow, Signal, and Query arguments.
  - Encodes Workflow and Query return values.
  - Decodes and encodes Activity arguments and return values.

Each piece of data (like a single argument or return value) is encoded as a Payload Protobuf message, which consists of binary data and key-value metadata.

## Default Data Converter

Each Temporal SDK includes and uses a default Data Converter.
The default Data Converter converts objects into bytes using a series of Payload Converters.
In most SDKs, the default converter supports binary, JSON, and Protobufs and encodes values in the following order:

- Null
- Binary
- Protobuf JSON
- JSON

In SDKs that cannot determine parameter types at runtime—like TypeScript—Protobufs aren't included in the default converter.

For example:

- If a value is an instance of a Protobuf message, it will be encoded with [proto3 JSON](https://developers.google.com/protocol-buffers/docs/proto3#json).
- If a value isn't null, binary, or a Protobuf, it will be encoded as JSON. If any part of it is not serializable as JSON (for example, a Date—see JSON data types), an error will be thrown.

The default converter also supports decoding binary Protobufs.

## Custom Data Converter

A custom Data Converter is an implementation of the <a class="tdlp" href="/security#data-converter">Data Converter<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><span class="tdlpc"><span class="tdlppt">What is a Data Converter?</span><br /><br /><span class="tdlppd">A Data Converter is a Temporal SDK component that encodes and decodes data entering and exiting a Temporal Server.</span><span class="tdlplm"><br /><br /><a class="tdlplma" href="/security#data-converter">Learn more</a></span></span></a> with custom logic for payload conversion and payload encryption.

You can create a custom Data Converter to alter formats (for example using [MessagePack](https://msgpack.org/) instead of JSON) or add compression and encryption.

You can customize the default Data Converter behavior in two ways:

- To convert custom types to payloads and back, use a custom `PayloadConverter` and set it to alter the default Data Converter.
- To use custom encryption and/or compression logic, create a custom `PayloadCodec` with your encryption/compression logic in the `encode` function, and your decryption/decompression logic in your `decode` function.

Custom Data Converters are not applied to all data:

- Search Attributes are always encoded with JSON.
- Headers are not encoded by the SDK (the one exception will be—when implemented—the SDK [running OTel baggage through custom Codecs](https://github.com/temporalio/sdk-typescript/issues/514)).

A custom Data Converter can have thee following three components:

- <a class="tdlp" href="#payload-converter">Payload Converter<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><span class="tdlpc"><span class="tdlppt">What is a Payload Converter?</span><br /><br /><span class="tdlppd">A Payload Converter converts values to Payload and back.</span><span class="tdlplm"><br /><br /><a class="tdlplma" href="#payload-converter">Learn more</a></span></span></a>
- <a class="tdlp" href="#failure-converter">Failure Converter<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><span class="tdlpc"><span class="tdlppt">What is a Failure Converter?</span><br /><br /><span class="tdlppd">A Failure Converter converts error objects to proto Failures and back.</span><span class="tdlplm"><br /><br /><a class="tdlplma" href="#failure-converter">Learn more</a></span></span></a>
- <a class="tdlp" href="#payload-codec">Payload Codec<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><span class="tdlpc"><span class="tdlppt">What is a Payload Codec?</span><br /><br /><span class="tdlppd">A Payload Codec transforms an array of Payloads (for example, a list of Workflow arguments) into another array of Payloads.</span><span class="tdlplm"><br /><br /><a class="tdlplma" href="#payload-codec">Learn more</a></span></span></a>

## Payload Converter

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

See <a class="tdlp" href="/application-development/features#custom-payload-conversion">Custom Payload Conversion<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><span class="tdlpc"><span class="tdlppt">How to use custom payload-conversion</span><br /><br /><span class="tdlppd">Define your custom `PayloadConverter` with your custom logic and set the `DefaultDataConverter` with your custom `PayloadConverter` in your Client options.</span><span class="tdlplm"><br /><br /><a class="tdlplma" href="/application-development/features#custom-payload-conversion">Learn more</a></span></span></a> for details on how to use the Payload Converter for custom data types.

## Failure Converter

A Failure Converter converts error objects to proto Failures and back.
The default Failure Converter copies error messages and stack traces as plain text. See the API reference for details.

- [Go](https://pkg.go.dev/go.temporal.io/sdk@v1.21.0/converter#FailureConverter)
- [Java](https://www.javadoc.io/doc/io.temporal/temporal-sdk/latest/io/temporal/failure/FailureConverter.html)
- [TypeScript](https://typescript.temporal.io/api/interfaces/common.FailureConverter)
- [Python](https://python.temporal.io/temporalio.converter.FailureConverter.html)

You can make a custom Failure Converter, but if you use multiple SDKs, you will have to implement the same logic in each.
Custom/customizable failure converter is not yet supported in Java.

If your errors may contain sensitive information, you can encrypt the message and stack trace by configuring the default Failure Converter to use your Payload Codec, in which case it will move your `message` and `stack_trace` fields to a payload that's run through your codec.

## Payload Codec

A Payload Codec transforms an array of Payloads (for example, a list of Workflow arguments) into another array of Payloads.

The Payload Codec is an optional step that happens between the wire and the Payload Converter:

```bash
Temporal Server <--> Wire <--> Payload Codec <--> Payload Converter <--> User code
```

When serializing to Payloads:

- Data Converter is applied first, followed by the chain of codecs.
- Codecs are applied last to first meaning the earlier encoders wrap the later ones.

When deserializing from Payloads:

- Codecs are applied first to last to reverse the effect, followed by the Data Converter.
- Data Converter is applied last.

Use a Payload Codec to transform your payloads, for example by implementing compression and/or encryption and decryption.

#### Encryption​ and Decryption

Using encryption in your custom Data Converter ensures that all your sensitive application data is secure when handled by the Temporal Server. It also ensures that your data exists unencrypted only on the Client and the Worker process that is executing the Workflows and Activities, on hosts that you control.

You can implement encryption and decryption in your Payload Codec.
The following samples use encryption (AES GCM with 256-bit key) in a custom Data Converter:

- [Go sample](https://github.com/temporalio/samples-go/tree/main/encryption)
- [Java sample](https://github.com/temporalio/samples-java/tree/main/src/main/java/io/temporal/samples/encryptedpayloads)
- [TypeScript sample](https://github.com/temporalio/samples-typescript/tree/main/encryption)
- [Python sample](https://github.com/temporalio/samples-python/tree/main/encryption)

See [Data encryption](/production-readiness/develop#data-encryption) for details.

## Remote data encoding

Remote data encding is using your custom Data Converter to decode (and encode) your payloads remotely through endpoints.

Running your encoding remotely allows you to:

- Reuse complicated encryption logic written once between different languages
- Use it with `tctl` to encode payloads for `tctl workflow start` and with Temporal WebUI to [decode encrypted payloads](#decoding-payloads-on-the-webui-and-tctl)
- Create a service that has access to encryption keys for performing the encryption/decryption instead of a developer workstation or service accessing the keys directly.

To run data encoding/decoding remotely, use a Codec Server. A Codec Server is an HTTP server that is configured to use your custom Payload Codec with encryption/compression and decryption/decompression logic. See [Codec Server](/security#codec-server) for more information.

Before you use a remote data encoder to encode your payloads, ensure that you consider all the security implications of running encryptions remotely.

#### Decoding payloads on the Web UI and tctl

If you use custom encryption/encoding with your custom Data Converter, all the data handled by the Temporal Cluster is encrypted/encoded. Since the WebUI uses the <a class="tdlp" href="/visibility#">Visibility<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><span class="tdlpc"><span class="tdlppt">What is Visibility?</span><br /><br /><span class="tdlppd">The term Visibility, within the Temporal Platform, refers to the subsystems and APIs that enable an operator to view Workflow Executions that currently exist within a Cluster.</span><span class="tdlplm"><br /><br /><a class="tdlplma" href="/visibility#">Learn more</a></span></span></a> database to show events and data stored on the Temporal Server, all data in the Workflow Execution History in your WebUI or tctl is encoded/encrypted.

To see the original format of data in your WebUI and tctl, create a Codec Server with a remote data encoder and use the Payload Codec to decode your data locally.

Note that an encryption/decryption remote data encoder is a separate system with access to your encryption keys and exposes APIs to encode and decode any payloads that are encrypted with the Payload Codec used. Evaluate and ensure that your RDE endpoints are secured and only authorized users have access to them.

Samples:

- [Go](https://github.com/temporalio/samples-go/tree/main/codec-server)
- [Java](https://github.com/temporalio/sdk-java/tree/master/temporal-remote-data-encoder)
- [TypeScript](https://github.com/temporalio/samples-typescript/tree/main/encryption)
- [Python](https://github.com/temporalio/samples-python/tree/main/encryption)

## Codec Server

A Codec Server is an HTTP server that runs data from [tctl](/tctl-v1) or the [Web UI](/web-ui) through a <a class="tdlp" href="/security#payload-codec">Payload Codec<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><span class="tdlpc"><span class="tdlppt">What is a Data Converter?</span><br /><br /><span class="tdlppd">A Data Converter is a Temporal SDK component that encodes and decodes data entering and exiting a Temporal Server.</span><span class="tdlplm"><br /><br /><a class="tdlplma" href="/security#payload-codec">Learn more</a></span></span></a>.

- <a class="tdlp" href="/security#codec-server">How to set up a Codec Server<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><span class="tdlpc"><span class="tdlppt">How to set up a Codec Server</span><br /><br /><span class="tdlppd">Run a Codec Server with your Payload Codec and then configure tctl and the Web UI to use the server.</span><span class="tdlplm"><br /><br /><a class="tdlplma" href="/security#codec-server">Learn more</a></span></span></a>

By default, tctl and the Web UI use the <a class="tdlp" href="/security#default-data-converter">Default Data Converter<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><span class="tdlpc"><span class="tdlppt">What is a Data Converter?</span><br /><br /><span class="tdlppd">A Data Converter is a Temporal SDK component that encodes and decodes data entering and exiting a Temporal Server.</span><span class="tdlplm"><br /><br /><a class="tdlplma" href="/security#default-data-converter">Learn more</a></span></span></a> without a <a class="tdlp" href="/security#payload-codec">Payload Codec<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><span class="tdlpc"><span class="tdlppt">What is a Data Converter?</span><br /><br /><span class="tdlppd">A Data Converter is a Temporal SDK component that encodes and decodes data entering and exiting a Temporal Server.</span><span class="tdlplm"><br /><br /><a class="tdlplma" href="/security#payload-codec">Learn more</a></span></span></a>.
If you use a Payload Codec with your SDK, you may not be able to understand the Payload data displayed in the Web UI/tctl (for example, it may be encrypted or compressed).
In order to convert the data to its original format, you can configure the Web UI/tctl to use a Codec Server that uses your Payload Codec.

![](/img/tctl-diagram-codec-server.svg)

## Use case: tctl

Suppose that you want to view Workflow History.
This information needs to be decoded before it can be viewed.

You can use [tctl workflow showid](/tctl-v1/workflow#show) to view a Workflow Execution Event History.

```bash
tctl workflow showid <workflowID>
```

With a Codec Server, Payloads that are part of the Event History will be sent to the Codec Server to be decoded before being deserialized by the Default Data Converter and displayed in your terminal.

- <a class="tdlp" href="/security#configure-tctl">How to configure tctl with a Codec Server<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><span class="tdlpc"><span class="tdlppt">How to set up a Codec Server</span><br /><br /><span class="tdlppd">Run a Codec Server with your Payload Codec and then configure tctl and the Web UI to use the server.</span><span class="tdlplm"><br /><br /><a class="tdlplma" href="/security#configure-tctl">Learn more</a></span></span></a>

## Use case: Web UI

Workflow Execution Event History is available in the Web UI.
Payload information for each Event is captured within Event 'input' and 'result' fields.
Without a Codec Server, this information remains encoded.

Passing these Payloads through a Codec Server returns decoded results to the Web UI.

- <a class="tdlp" href="/security#configure-the-web-ui">How to configure the Web UI with a Codec Server<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><span class="tdlpc"><span class="tdlppt">How to set up a Codec Server</span><br /><br /><span class="tdlppd">Run a Codec Server with your Payload Codec and then configure tctl and the Web UI to use the server.</span><span class="tdlplm"><br /><br /><a class="tdlplma" href="/security#configure-the-web-ui">Learn more</a></span></span></a>

### Codec Server

To use a <a class="tdlp" href="/security#codec-server">Codec Server<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><span class="tdlpc"><span class="tdlppt">What is a Codec Server?</span><br /><br /><span class="tdlppd">A Codec Server is an HTTP server that runs data from tctl or the Web UI through a Payload Codec.</span><span class="tdlplm"><br /><br /><a class="tdlplma" href="/security#codec-server">Learn more</a></span></span></a>, first run it with your Payload Codec and then configure [tctl](/tctl-v1) and the [Web UI](/web-ui) to use it.

### Run the server

A Codec Server is an HTTP server that follows the Temporal [Codec Server Protocol](https://github.com/temporalio/samples-go/tree/main/codec-server#codec-server-protocol).
It implements two endpoints:

- `POST /encode`
- `POST /decode`

Each endpoint receives and responds with a JSON body that has a `payloads` property with an array of Payloads.
The endpoints run the Payloads through a <a class="tdlp" href="/security#payload-codec">Payload Codec<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><span class="tdlpc"><span class="tdlppt">What is a Data Converter?</span><br /><br /><span class="tdlppd">A Data Converter is a Temporal SDK component that encodes and decodes data entering and exiting a Temporal Server.</span><span class="tdlplm"><br /><br /><a class="tdlplma" href="/security#payload-codec">Learn more</a></span></span></a> before returning them.

Sample Codec Servers:

- [Go](https://github.com/temporalio/samples-go/tree/main/codec-server)
- [Python](https://github.com/temporalio/samples-python/blob/main/encryption/codec_server.py)
- [TypeScript](https://github.com/temporalio/samples-typescript/blob/main/encryption/src/codec-server.ts)

### Configure tctl

Once the Codec Server is started, for example on `http://localhost:8888`, provide it to tctl using the `--codec_endpoint` global option:

```bash
tctl --codec_endpoint 'http://localhost:8888' workflow show --wid workflow-id-123
```

### Configure the Web UI

Once the Codec Server is started, there are two ways to provide it to the Web UI:

#### In the UI

<div class="tdiw"><div class="tditw"><p class="tdit">Data Encoder icon</p></div><div class="tdiiw"><img class="img_ev3q" src="/img/docs/data-encoder-button.png" alt="Data Encoder icon" height="304" width="406" /></div></div>

Select the icon with an up-down arrow on the bottom left of the screen.
This action displays the codec endpoint dialog.

Enter the URL and port number for your codec endpoint.
Exit the dialog, go back to the previous page, and refresh the page.

The button should now be light blue, and your Payloads should be displayed in a readable format.

#### In the config file

The codec endpoint can be specified in the [configuration file](/references/web-ui-configuration#codec):

```yaml
codec:
    endpoint: {{ default .Env.TEMPORAL_CODEC_ENDPOINT "{namespace}"}}
```
