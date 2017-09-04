// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class Route extends fabric.Resource {
    public readonly destinationCidrBlock?: fabric.Property<string>;
    public readonly destinationIpv6CidrBlock?: fabric.Property<string>;
    public /*out*/ readonly destinationPrefixListId: fabric.Property<string>;
    public readonly egressOnlyGatewayId: fabric.Property<string>;
    public readonly gatewayId: fabric.Property<string>;
    public readonly instanceId: fabric.Property<string>;
    public /*out*/ readonly instanceOwnerId: fabric.Property<string>;
    public readonly natGatewayId: fabric.Property<string>;
    public readonly networkInterfaceId: fabric.Property<string>;
    public /*out*/ readonly origin: fabric.Property<string>;
    public readonly routeTableId: fabric.Property<string>;
    public /*out*/ readonly state: fabric.Property<string>;
    public readonly vpcPeeringConnectionId?: fabric.Property<string>;

    constructor(urnName: string, args: RouteArgs) {
        if (args.routeTableId === undefined) {
            throw new Error("Missing required property 'routeTableId'");
        }
        super("aws:ec2/route:Route", urnName, {
            "destinationCidrBlock": args.destinationCidrBlock,
            "destinationIpv6CidrBlock": args.destinationIpv6CidrBlock,
            "egressOnlyGatewayId": args.egressOnlyGatewayId,
            "gatewayId": args.gatewayId,
            "instanceId": args.instanceId,
            "natGatewayId": args.natGatewayId,
            "networkInterfaceId": args.networkInterfaceId,
            "routeTableId": args.routeTableId,
            "vpcPeeringConnectionId": args.vpcPeeringConnectionId,
        });
    }
}

export interface RouteArgs {
    readonly destinationCidrBlock?: fabric.PropertyValue<string>;
    readonly destinationIpv6CidrBlock?: fabric.PropertyValue<string>;
    readonly egressOnlyGatewayId?: fabric.PropertyValue<string>;
    readonly gatewayId?: fabric.PropertyValue<string>;
    readonly instanceId?: fabric.PropertyValue<string>;
    readonly natGatewayId?: fabric.PropertyValue<string>;
    readonly networkInterfaceId?: fabric.PropertyValue<string>;
    readonly routeTableId: fabric.PropertyValue<string>;
    readonly vpcPeeringConnectionId?: fabric.PropertyValue<string>;
}
