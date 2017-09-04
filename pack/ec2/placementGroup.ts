// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class PlacementGroup extends fabric.Resource {
    public readonly name: fabric.Property<string>;
    public readonly strategy: fabric.Property<string>;

    constructor(urnName: string, args: PlacementGroupArgs) {
        if (args.strategy === undefined) {
            throw new Error("Missing required property 'strategy'");
        }
        super("aws:ec2/placementGroup:PlacementGroup", urnName, {
            "name": args.name,
            "strategy": args.strategy,
        });
    }
}

export interface PlacementGroupArgs {
    readonly name?: fabric.PropertyValue<string>;
    readonly strategy: fabric.PropertyValue<string>;
}
