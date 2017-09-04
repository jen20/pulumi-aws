// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class DefaultRouteTable extends fabric.Resource {
    public readonly defaultRouteTableId: fabric.Property<string>;
    public readonly propagatingVgws?: fabric.Property<string[]>;
    public readonly route: fabric.Property<{ cidrBlock?: string, egressOnlyGatewayId?: string, gatewayId?: string, instanceId?: string, ipv6CidrBlock?: string, natGatewayId?: string, networkInterfaceId?: string, vpcPeeringConnectionId?: string }[]>;
    public readonly tags?: fabric.Property<{[key: string]: any}>;
    public /*out*/ readonly vpcId: fabric.Property<string>;

    constructor(urnName: string, args: DefaultRouteTableArgs) {
        if (args.defaultRouteTableId === undefined) {
            throw new Error("Missing required property 'defaultRouteTableId'");
        }
        super("aws:ec2/defaultRouteTable:DefaultRouteTable", urnName, {
            "defaultRouteTableId": args.defaultRouteTableId,
            "propagatingVgws": args.propagatingVgws,
            "route": args.route,
            "tags": args.tags,
        });
    }
}

export interface DefaultRouteTableArgs {
    readonly defaultRouteTableId: fabric.PropertyValue<string>;
    readonly propagatingVgws?: fabric.PropertyValue<fabric.PropertyValue<string>>[];
    readonly route?: fabric.PropertyValue<{ cidrBlock?: fabric.PropertyValue<string>, egressOnlyGatewayId?: fabric.PropertyValue<string>, gatewayId?: fabric.PropertyValue<string>, instanceId?: fabric.PropertyValue<string>, ipv6CidrBlock?: fabric.PropertyValue<string>, natGatewayId?: fabric.PropertyValue<string>, networkInterfaceId?: fabric.PropertyValue<string>, vpcPeeringConnectionId?: fabric.PropertyValue<string> }>[];
    readonly tags?: fabric.PropertyValue<{[key: string]: any}>;
}
