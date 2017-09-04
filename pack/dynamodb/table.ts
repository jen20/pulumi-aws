// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class Table extends fabric.Resource {
    public /*out*/ readonly arn: fabric.Property<string>;
    public readonly attribute: fabric.Property<{ name: string, type: string }[]>;
    public readonly globalSecondaryIndex?: fabric.Property<{ hashKey: string, name: string, nonKeyAttributes?: string[], projectionType: string, rangeKey?: string, readCapacity: number, writeCapacity: number }[]>;
    public readonly hashKey: fabric.Property<string>;
    public readonly localSecondaryIndex?: fabric.Property<{ name: string, nonKeyAttributes?: string[], projectionType: string, rangeKey: string }[]>;
    public readonly name: fabric.Property<string>;
    public readonly rangeKey?: fabric.Property<string>;
    public readonly readCapacity: fabric.Property<number>;
    public /*out*/ readonly streamArn: fabric.Property<string>;
    public readonly streamEnabled: fabric.Property<boolean>;
    public /*out*/ readonly streamLabel: fabric.Property<string>;
    public readonly streamViewType: fabric.Property<string>;
    public readonly tags?: fabric.Property<{[key: string]: any}>;
    public readonly ttl?: fabric.Property<{ attributeName: string, enabled: boolean }[]>;
    public readonly writeCapacity: fabric.Property<number>;

    constructor(urnName: string, args: TableArgs) {
        if (args.attribute === undefined) {
            throw new Error("Missing required property 'attribute'");
        }
        if (args.hashKey === undefined) {
            throw new Error("Missing required property 'hashKey'");
        }
        if (args.readCapacity === undefined) {
            throw new Error("Missing required property 'readCapacity'");
        }
        if (args.writeCapacity === undefined) {
            throw new Error("Missing required property 'writeCapacity'");
        }
        super("aws:dynamodb/table:Table", urnName, {
            "attribute": args.attribute,
            "globalSecondaryIndex": args.globalSecondaryIndex,
            "hashKey": args.hashKey,
            "localSecondaryIndex": args.localSecondaryIndex,
            "name": args.name,
            "rangeKey": args.rangeKey,
            "readCapacity": args.readCapacity,
            "streamEnabled": args.streamEnabled,
            "streamViewType": args.streamViewType,
            "tags": args.tags,
            "ttl": args.ttl,
            "writeCapacity": args.writeCapacity,
        });
    }
}

export interface TableArgs {
    readonly attribute: fabric.PropertyValue<{ name: fabric.PropertyValue<string>, type: fabric.PropertyValue<string> }>[];
    readonly globalSecondaryIndex?: fabric.PropertyValue<{ hashKey: fabric.PropertyValue<string>, name: fabric.PropertyValue<string>, nonKeyAttributes?: fabric.PropertyValue<fabric.PropertyValue<string>>[], projectionType: fabric.PropertyValue<string>, rangeKey?: fabric.PropertyValue<string>, readCapacity: fabric.PropertyValue<number>, writeCapacity: fabric.PropertyValue<number> }>[];
    readonly hashKey: fabric.PropertyValue<string>;
    readonly localSecondaryIndex?: fabric.PropertyValue<{ name: fabric.PropertyValue<string>, nonKeyAttributes?: fabric.PropertyValue<fabric.PropertyValue<string>>[], projectionType: fabric.PropertyValue<string>, rangeKey: fabric.PropertyValue<string> }>[];
    readonly name?: fabric.PropertyValue<string>;
    readonly rangeKey?: fabric.PropertyValue<string>;
    readonly readCapacity: fabric.PropertyValue<number>;
    readonly streamEnabled?: fabric.PropertyValue<boolean>;
    readonly streamViewType?: fabric.PropertyValue<string>;
    readonly tags?: fabric.PropertyValue<{[key: string]: any}>;
    readonly ttl?: fabric.PropertyValue<{ attributeName: fabric.PropertyValue<string>, enabled: fabric.PropertyValue<boolean> }>[];
    readonly writeCapacity: fabric.PropertyValue<number>;
}
