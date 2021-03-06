// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * Provides information about a DynamoDB table.
 */
export function getTable(args: GetTableArgs): Promise<GetTableResult> {
    return pulumi.runtime.invoke("aws:dynamodb/getTable:getTable", {
        "name": args.name,
        "serverSideEncryption": args.serverSideEncryption,
        "tags": args.tags,
    });
}

/**
 * A collection of arguments for invoking getTable.
 */
export interface GetTableArgs {
    /**
     * The name of the DynamoDB table.
     */
    readonly name: pulumi.Input<string>;
    readonly serverSideEncryption?: pulumi.Input<{ enabled?: pulumi.Input<boolean> }>;
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}

/**
 * A collection of values returned by getTable.
 */
export interface GetTableResult {
    readonly arn: string;
    readonly attributes: { name: string, type: string }[];
    readonly globalSecondaryIndexes: { hashKey: string, name: string, nonKeyAttributes: string[], projectionType: string, rangeKey: string, readCapacity: number, writeCapacity: number }[];
    readonly hashKey: string;
    readonly localSecondaryIndexes: { name: string, nonKeyAttributes: string[], projectionType: string, rangeKey: string }[];
    readonly rangeKey: string;
    readonly readCapacity: number;
    readonly serverSideEncryption: { enabled: boolean };
    readonly streamArn: string;
    readonly streamEnabled: boolean;
    readonly streamLabel: string;
    readonly streamViewType: string;
    readonly tags: {[key: string]: any};
    readonly ttl: { attributeName: string, enabled: boolean };
    readonly writeCapacity: number;
}
