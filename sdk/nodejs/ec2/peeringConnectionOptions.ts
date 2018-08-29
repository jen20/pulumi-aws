// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * Provides a resource to manage VPC peering connection options.
 * 
 * ~> **NOTE on VPC Peering Connections and VPC Peering Connection Options:** Terraform provides
 * both a standalone VPC Peering Connection Options and a VPC Peering Connection
 * resource with `accepter` and `requester` attributes. Do not manage options for the same VPC peering
 * connection in both a VPC Peering Connection resource and a VPC Peering Connection Options resource.
 * Doing so will cause a conflict of options and will overwrite the options.
 * Using a VPC Peering Connection Options resource decouples management of the connection options from
 * management of the VPC Peering Connection and allows options to be set correctly in cross-account scenarios.
 * 
 * Basic usage:
 * 
 * ```hcl
 * resource "aws_vpc" "foo" {
 *   cidr_block = "10.0.0.0/16"
 * }
 * 
 * resource "aws_vpc" "bar" {
 *   cidr_block = "10.1.0.0/16"
 * }
 * 
 * resource "aws_vpc_peering_connection" "foo" {
 *   vpc_id        = "${aws_vpc.foo.id}"
 *   peer_vpc_id   = "${aws_vpc.bar.id}"
 *   auto_accept   = true
 * }
 * 
 * resource "aws_vpc_peering_connection_options" "foo" {
 *   vpc_peering_connection_id = "${aws_vpc_peering_connection.foo.id}"
 * 
 *   accepter {
 *     allow_remote_vpc_dns_resolution = true
 *   }
 * 
 *   requester {
 *     allow_vpc_to_remote_classic_link = true
 *     allow_classic_link_to_remote_vpc = true
 *   }
 * }
 * ```
 * 
 * Basic cross-account usage:
 * 
 * ```hcl
 * provider "aws" {
 *   alias = "requester"
 * 
 *   # Requester's credentials.
 * }
 * 
 * provider "aws" {
 *   alias = "accepter"
 * 
 *   # Accepter's credentials.
 * }
 * 
 * resource "aws_vpc" "main" {
 *   provider = "aws.requester"
 * 
 *   cidr_block = "10.0.0.0/16"
 * 
 *   enable_dns_support   = true
 *   enable_dns_hostnames = true
 * }
 * 
 * resource "aws_vpc" "peer" {
 *   provider = "aws.accepter"
 * 
 *   cidr_block = "10.1.0.0/16"
 * 
 *   enable_dns_support   = true
 *   enable_dns_hostnames = true
 * }
 * 
 * data "aws_caller_identity" "peer" {
 *   provider = "aws.accepter"
 * }
 */
export class PeeringConnectionOptions extends pulumi.CustomResource {
    /**
     * Get an existing PeeringConnectionOptions resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PeeringConnectionOptionsState): PeeringConnectionOptions {
        return new PeeringConnectionOptions(name, <any>state, { id });
    }

    /**
     * An optional configuration block that allows for [VPC Peering Connection]
     * (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options to be set for the VPC that accepts
     * the peering connection (a maximum of one).
     */
    public readonly accepter: pulumi.Output<{ allowClassicLinkToRemoteVpc?: boolean, allowRemoteVpcDnsResolution?: boolean, allowVpcToRemoteClassicLink?: boolean }>;
    /**
     * A optional configuration block that allows for [VPC Peering Connection]
     * (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options to be set for the VPC that requests
     * the peering connection (a maximum of one).
     */
    public readonly requester: pulumi.Output<{ allowClassicLinkToRemoteVpc?: boolean, allowRemoteVpcDnsResolution?: boolean, allowVpcToRemoteClassicLink?: boolean }>;
    /**
     * The ID of the requester VPC peering connection.
     */
    public readonly vpcPeeringConnectionId: pulumi.Output<string>;

    /**
     * Create a PeeringConnectionOptions resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PeeringConnectionOptionsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PeeringConnectionOptionsArgs | PeeringConnectionOptionsState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: PeeringConnectionOptionsState = argsOrState as PeeringConnectionOptionsState | undefined;
            inputs["accepter"] = state ? state.accepter : undefined;
            inputs["requester"] = state ? state.requester : undefined;
            inputs["vpcPeeringConnectionId"] = state ? state.vpcPeeringConnectionId : undefined;
        } else {
            const args = argsOrState as PeeringConnectionOptionsArgs | undefined;
            if (!args || args.vpcPeeringConnectionId === undefined) {
                throw new Error("Missing required property 'vpcPeeringConnectionId'");
            }
            inputs["accepter"] = args ? args.accepter : undefined;
            inputs["requester"] = args ? args.requester : undefined;
            inputs["vpcPeeringConnectionId"] = args ? args.vpcPeeringConnectionId : undefined;
        }
        super("aws:ec2/peeringConnectionOptions:PeeringConnectionOptions", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering PeeringConnectionOptions resources.
 */
export interface PeeringConnectionOptionsState {
    /**
     * An optional configuration block that allows for [VPC Peering Connection]
     * (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options to be set for the VPC that accepts
     * the peering connection (a maximum of one).
     */
    readonly accepter?: pulumi.Input<{ allowClassicLinkToRemoteVpc?: pulumi.Input<boolean>, allowRemoteVpcDnsResolution?: pulumi.Input<boolean>, allowVpcToRemoteClassicLink?: pulumi.Input<boolean> }>;
    /**
     * A optional configuration block that allows for [VPC Peering Connection]
     * (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options to be set for the VPC that requests
     * the peering connection (a maximum of one).
     */
    readonly requester?: pulumi.Input<{ allowClassicLinkToRemoteVpc?: pulumi.Input<boolean>, allowRemoteVpcDnsResolution?: pulumi.Input<boolean>, allowVpcToRemoteClassicLink?: pulumi.Input<boolean> }>;
    /**
     * The ID of the requester VPC peering connection.
     */
    readonly vpcPeeringConnectionId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PeeringConnectionOptions resource.
 */
export interface PeeringConnectionOptionsArgs {
    /**
     * An optional configuration block that allows for [VPC Peering Connection]
     * (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options to be set for the VPC that accepts
     * the peering connection (a maximum of one).
     */
    readonly accepter?: pulumi.Input<{ allowClassicLinkToRemoteVpc?: pulumi.Input<boolean>, allowRemoteVpcDnsResolution?: pulumi.Input<boolean>, allowVpcToRemoteClassicLink?: pulumi.Input<boolean> }>;
    /**
     * A optional configuration block that allows for [VPC Peering Connection]
     * (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options to be set for the VPC that requests
     * the peering connection (a maximum of one).
     */
    readonly requester?: pulumi.Input<{ allowClassicLinkToRemoteVpc?: pulumi.Input<boolean>, allowRemoteVpcDnsResolution?: pulumi.Input<boolean>, allowVpcToRemoteClassicLink?: pulumi.Input<boolean> }>;
    /**
     * The ID of the requester VPC peering connection.
     */
    readonly vpcPeeringConnectionId: pulumi.Input<string>;
}
