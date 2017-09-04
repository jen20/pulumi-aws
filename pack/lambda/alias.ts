// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class Alias extends fabric.Resource {
    public /*out*/ readonly arn: fabric.Property<string>;
    public readonly description?: fabric.Property<string>;
    public readonly functionName: fabric.Property<string>;
    public readonly functionVersion: fabric.Property<string>;
    public readonly name: fabric.Property<string>;

    constructor(urnName: string, args: AliasArgs) {
        if (args.functionName === undefined) {
            throw new Error("Missing required property 'functionName'");
        }
        if (args.functionVersion === undefined) {
            throw new Error("Missing required property 'functionVersion'");
        }
        super("aws:lambda/alias:Alias", urnName, {
            "description": args.description,
            "functionName": args.functionName,
            "functionVersion": args.functionVersion,
            "name": args.name,
        });
    }
}

export interface AliasArgs {
    readonly description?: fabric.PropertyValue<string>;
    readonly functionName: fabric.PropertyValue<string>;
    readonly functionVersion: fabric.PropertyValue<string>;
    readonly name?: fabric.PropertyValue<string>;
}
