// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * Provides a DynamoDB table resource
 * 
 * ~> **Note:** It is recommended to use `lifecycle` [`ignore_changes`](/docs/configuration/resources.html#ignore_changes) for `read_capacity` and/or `write_capacity` if there's [autoscaling policy](/docs/providers/aws/r/appautoscaling_policy.html) attached to the table.
 */
export class Table extends pulumi.CustomResource {
    /**
     * Get an existing Table resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TableState): Table {
        return new Table(name, <any>state, { id });
    }

    /**
     * The arn of the table
     */
    public /*out*/ readonly arn: pulumi.Output<string>;
    /**
     * Define an attribute (can be lists), has two properties:
     */
    public readonly attributes: pulumi.Output<{ name: string, type: string }[]>;
    /**
     * Describe a GSO for the table;
     * subject to the normal limits on the number of GSIs, projected
     * attributes, etc.
     */
    public readonly globalSecondaryIndexes: pulumi.Output<{ hashKey: string, name: string, nonKeyAttributes?: string[], projectionType: string, rangeKey?: string, readCapacity: number, writeCapacity: number }[] | undefined>;
    /**
     * The name of the hash key in the index; must be
     * defined as an attribute in the resource.
     */
    public readonly hashKey: pulumi.Output<string>;
    /**
     * Describe an LSI on the table;
     * these can only be allocated *at creation* so you cannot change this
     * definition after you have created the resource.
     */
    public readonly localSecondaryIndexes: pulumi.Output<{ name: string, nonKeyAttributes?: string[], projectionType: string, rangeKey: string }[] | undefined>;
    /**
     * The name of the index
     */
    public readonly name: pulumi.Output<string>;
    /**
     * Point-in-time recovery options.
     */
    public readonly pointInTimeRecovery: pulumi.Output<{ enabled: boolean }>;
    /**
     * The name of the range key; must be defined
     */
    public readonly rangeKey: pulumi.Output<string | undefined>;
    /**
     * The number of read units for this index
     */
    public readonly readCapacity: pulumi.Output<number>;
    /**
     * Encrypt at rest options.
     */
    public readonly serverSideEncryption: pulumi.Output<{ enabled: boolean }>;
    /**
     * The ARN of the Table Stream. Only available when `stream_enabled = true`
     */
    public /*out*/ readonly streamArn: pulumi.Output<string>;
    /**
     * Indicates whether Streams are to be enabled (true) or disabled (false).
     */
    public readonly streamEnabled: pulumi.Output<boolean | undefined>;
    /**
     * A timestamp, in ISO 8601 format, for this stream. Note that this timestamp is not
     * a unique identifier for the stream on its own. However, the combination of AWS customer ID,
     * table name and this field is guaranteed to be unique.
     * It can be used for creating CloudWatch Alarms. Only available when `stream_enabled = true`
     */
    public /*out*/ readonly streamLabel: pulumi.Output<string>;
    /**
     * When an item in the table is modified, StreamViewType determines what information is written to the table's stream. Valid values are `KEYS_ONLY`, `NEW_IMAGE`, `OLD_IMAGE`, `NEW_AND_OLD_IMAGES`.
     */
    public readonly streamViewType: pulumi.Output<string>;
    /**
     * A map of tags to populate on the created table.
     */
    public readonly tags: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * Defines ttl, has two properties, and can only be specified once:
     */
    public readonly ttl: pulumi.Output<{ attributeName: string, enabled: boolean } | undefined>;
    /**
     * The number of write units for this index
     */
    public readonly writeCapacity: pulumi.Output<number>;

    /**
     * Create a Table resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TableArgs, opts?: pulumi.ResourceOptions)
    constructor(name: string, argsOrState?: TableArgs | TableState, opts?: pulumi.ResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: TableState = argsOrState as TableState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["attributes"] = state ? state.attributes : undefined;
            inputs["globalSecondaryIndexes"] = state ? state.globalSecondaryIndexes : undefined;
            inputs["hashKey"] = state ? state.hashKey : undefined;
            inputs["localSecondaryIndexes"] = state ? state.localSecondaryIndexes : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["pointInTimeRecovery"] = state ? state.pointInTimeRecovery : undefined;
            inputs["rangeKey"] = state ? state.rangeKey : undefined;
            inputs["readCapacity"] = state ? state.readCapacity : undefined;
            inputs["serverSideEncryption"] = state ? state.serverSideEncryption : undefined;
            inputs["streamArn"] = state ? state.streamArn : undefined;
            inputs["streamEnabled"] = state ? state.streamEnabled : undefined;
            inputs["streamLabel"] = state ? state.streamLabel : undefined;
            inputs["streamViewType"] = state ? state.streamViewType : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["ttl"] = state ? state.ttl : undefined;
            inputs["writeCapacity"] = state ? state.writeCapacity : undefined;
        } else {
            const args = argsOrState as TableArgs | undefined;
            if (!args || args.attributes === undefined) {
                throw new Error("Missing required property 'attributes'");
            }
            if (!args || args.hashKey === undefined) {
                throw new Error("Missing required property 'hashKey'");
            }
            if (!args || args.readCapacity === undefined) {
                throw new Error("Missing required property 'readCapacity'");
            }
            if (!args || args.writeCapacity === undefined) {
                throw new Error("Missing required property 'writeCapacity'");
            }
            inputs["attributes"] = args ? args.attributes : undefined;
            inputs["globalSecondaryIndexes"] = args ? args.globalSecondaryIndexes : undefined;
            inputs["hashKey"] = args ? args.hashKey : undefined;
            inputs["localSecondaryIndexes"] = args ? args.localSecondaryIndexes : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["pointInTimeRecovery"] = args ? args.pointInTimeRecovery : undefined;
            inputs["rangeKey"] = args ? args.rangeKey : undefined;
            inputs["readCapacity"] = args ? args.readCapacity : undefined;
            inputs["serverSideEncryption"] = args ? args.serverSideEncryption : undefined;
            inputs["streamEnabled"] = args ? args.streamEnabled : undefined;
            inputs["streamViewType"] = args ? args.streamViewType : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["ttl"] = args ? args.ttl : undefined;
            inputs["writeCapacity"] = args ? args.writeCapacity : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["streamArn"] = undefined /*out*/;
            inputs["streamLabel"] = undefined /*out*/;
        }
        super("aws:dynamodb/table:Table", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Table resources.
 */
export interface TableState {
    /**
     * The arn of the table
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * Define an attribute (can be lists), has two properties:
     */
    readonly attributes?: pulumi.Input<{ name: pulumi.Input<string>, type: pulumi.Input<string> }[]>;
    /**
     * Describe a GSO for the table;
     * subject to the normal limits on the number of GSIs, projected
     * attributes, etc.
     */
    readonly globalSecondaryIndexes?: pulumi.Input<{ hashKey: pulumi.Input<string>, name: pulumi.Input<string>, nonKeyAttributes?: pulumi.Input<pulumi.Input<string>[]>, projectionType: pulumi.Input<string>, rangeKey?: pulumi.Input<string>, readCapacity: pulumi.Input<number>, writeCapacity: pulumi.Input<number> }[]>;
    /**
     * The name of the hash key in the index; must be
     * defined as an attribute in the resource.
     */
    readonly hashKey?: pulumi.Input<string>;
    /**
     * Describe an LSI on the table;
     * these can only be allocated *at creation* so you cannot change this
     * definition after you have created the resource.
     */
    readonly localSecondaryIndexes?: pulumi.Input<{ name: pulumi.Input<string>, nonKeyAttributes?: pulumi.Input<pulumi.Input<string>[]>, projectionType: pulumi.Input<string>, rangeKey: pulumi.Input<string> }[]>;
    /**
     * The name of the index
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Point-in-time recovery options.
     */
    readonly pointInTimeRecovery?: pulumi.Input<{ enabled: pulumi.Input<boolean> }>;
    /**
     * The name of the range key; must be defined
     */
    readonly rangeKey?: pulumi.Input<string>;
    /**
     * The number of read units for this index
     */
    readonly readCapacity?: pulumi.Input<number>;
    /**
     * Encrypt at rest options.
     */
    readonly serverSideEncryption?: pulumi.Input<{ enabled: pulumi.Input<boolean> }>;
    /**
     * The ARN of the Table Stream. Only available when `stream_enabled = true`
     */
    readonly streamArn?: pulumi.Input<string>;
    /**
     * Indicates whether Streams are to be enabled (true) or disabled (false).
     */
    readonly streamEnabled?: pulumi.Input<boolean>;
    /**
     * A timestamp, in ISO 8601 format, for this stream. Note that this timestamp is not
     * a unique identifier for the stream on its own. However, the combination of AWS customer ID,
     * table name and this field is guaranteed to be unique.
     * It can be used for creating CloudWatch Alarms. Only available when `stream_enabled = true`
     */
    readonly streamLabel?: pulumi.Input<string>;
    /**
     * When an item in the table is modified, StreamViewType determines what information is written to the table's stream. Valid values are `KEYS_ONLY`, `NEW_IMAGE`, `OLD_IMAGE`, `NEW_AND_OLD_IMAGES`.
     */
    readonly streamViewType?: pulumi.Input<string>;
    /**
     * A map of tags to populate on the created table.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Defines ttl, has two properties, and can only be specified once:
     */
    readonly ttl?: pulumi.Input<{ attributeName: pulumi.Input<string>, enabled: pulumi.Input<boolean> }>;
    /**
     * The number of write units for this index
     */
    readonly writeCapacity?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a Table resource.
 */
export interface TableArgs {
    /**
     * Define an attribute (can be lists), has two properties:
     */
    readonly attributes: pulumi.Input<{ name: pulumi.Input<string>, type: pulumi.Input<string> }[]>;
    /**
     * Describe a GSO for the table;
     * subject to the normal limits on the number of GSIs, projected
     * attributes, etc.
     */
    readonly globalSecondaryIndexes?: pulumi.Input<{ hashKey: pulumi.Input<string>, name: pulumi.Input<string>, nonKeyAttributes?: pulumi.Input<pulumi.Input<string>[]>, projectionType: pulumi.Input<string>, rangeKey?: pulumi.Input<string>, readCapacity: pulumi.Input<number>, writeCapacity: pulumi.Input<number> }[]>;
    /**
     * The name of the hash key in the index; must be
     * defined as an attribute in the resource.
     */
    readonly hashKey: pulumi.Input<string>;
    /**
     * Describe an LSI on the table;
     * these can only be allocated *at creation* so you cannot change this
     * definition after you have created the resource.
     */
    readonly localSecondaryIndexes?: pulumi.Input<{ name: pulumi.Input<string>, nonKeyAttributes?: pulumi.Input<pulumi.Input<string>[]>, projectionType: pulumi.Input<string>, rangeKey: pulumi.Input<string> }[]>;
    /**
     * The name of the index
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Point-in-time recovery options.
     */
    readonly pointInTimeRecovery?: pulumi.Input<{ enabled: pulumi.Input<boolean> }>;
    /**
     * The name of the range key; must be defined
     */
    readonly rangeKey?: pulumi.Input<string>;
    /**
     * The number of read units for this index
     */
    readonly readCapacity: pulumi.Input<number>;
    /**
     * Encrypt at rest options.
     */
    readonly serverSideEncryption?: pulumi.Input<{ enabled: pulumi.Input<boolean> }>;
    /**
     * Indicates whether Streams are to be enabled (true) or disabled (false).
     */
    readonly streamEnabled?: pulumi.Input<boolean>;
    /**
     * When an item in the table is modified, StreamViewType determines what information is written to the table's stream. Valid values are `KEYS_ONLY`, `NEW_IMAGE`, `OLD_IMAGE`, `NEW_AND_OLD_IMAGES`.
     */
    readonly streamViewType?: pulumi.Input<string>;
    /**
     * A map of tags to populate on the created table.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Defines ttl, has two properties, and can only be specified once:
     */
    readonly ttl?: pulumi.Input<{ attributeName: pulumi.Input<string>, enabled: pulumi.Input<boolean> }>;
    /**
     * The number of write units for this index
     */
    readonly writeCapacity: pulumi.Input<number>;
}
