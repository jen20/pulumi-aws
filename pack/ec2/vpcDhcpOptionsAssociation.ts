// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class VpcDhcpOptionsAssociation extends fabric.Resource {
    public readonly dhcpOptionsId: fabric.Property<string>;
    public readonly vpcId: fabric.Property<string>;

    constructor(urnName: string, args: VpcDhcpOptionsAssociationArgs) {
        if (args.dhcpOptionsId === undefined) {
            throw new Error("Missing required property 'dhcpOptionsId'");
        }
        if (args.vpcId === undefined) {
            throw new Error("Missing required property 'vpcId'");
        }
        super("aws:ec2/vpcDhcpOptionsAssociation:VpcDhcpOptionsAssociation", urnName, {
            "dhcpOptionsId": args.dhcpOptionsId,
            "vpcId": args.vpcId,
        });
    }
}

export interface VpcDhcpOptionsAssociationArgs {
    readonly dhcpOptionsId: fabric.PropertyValue<string>;
    readonly vpcId: fabric.PropertyValue<string>;
}
