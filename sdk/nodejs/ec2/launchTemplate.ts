// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

import {Tags} from "../index";

/**
 * Provides an EC2 launch template resource. Can be used to create instances or auto scaling groups.
 */
export class LaunchTemplate extends pulumi.CustomResource {
    /**
     * Get an existing LaunchTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LaunchTemplateState): LaunchTemplate {
        return new LaunchTemplate(name, <any>state, { id });
    }

    /**
     * Amazon Resource Name (ARN) of the launch template.
     */
    public /*out*/ readonly arn: pulumi.Output<string>;
    /**
     * Specify volumes to attach to the instance besides the volumes specified by the AMI.
     * See Block Devices below for details.
     */
    public readonly blockDeviceMappings: pulumi.Output<{ deviceName?: string, ebs?: { deleteOnTermination?: boolean, encrypted?: boolean, iops: number, kmsKeyId?: string, snapshotId?: string, volumeSize: number, volumeType: string }, noDevice?: string, virtualName?: string }[] | undefined>;
    /**
     * Customize the credit specification of the instance. See Credit 
     * Specification below for more details.
     */
    public readonly creditSpecification: pulumi.Output<{ cpuCredits?: string } | undefined>;
    /**
     * The default version of the launch template.
     */
    public /*out*/ readonly defaultVersion: pulumi.Output<number>;
    /**
     * Description of the launch template.
     */
    public readonly description: pulumi.Output<string | undefined>;
    /**
     * If `true`, enables [EC2 Instance
     * Termination Protection](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/terminating-instances.html#Using_ChangingDisableAPITermination)
     */
    public readonly disableApiTermination: pulumi.Output<boolean | undefined>;
    /**
     * If `true`, the launched EC2 instance will be EBS-optimized.
     */
    public readonly ebsOptimized: pulumi.Output<boolean | undefined>;
    /**
     * The elastic GPU to attach to the instance. See Elastic GPU
     * below for more details.
     */
    public readonly elasticGpuSpecifications: pulumi.Output<{ type: string }[] | undefined>;
    /**
     * The IAM Instance Profile to launch the instance with. See Instance Profile
     * below for more details.
     */
    public readonly iamInstanceProfile: pulumi.Output<{ arn?: string, name?: string } | undefined>;
    /**
     * The AMI from which to launch the instance.
     */
    public readonly imageId: pulumi.Output<string | undefined>;
    /**
     * Shutdown behavior for the instance. Can be `stop` or `terminate`.
     * (Default: `stop`).
     */
    public readonly instanceInitiatedShutdownBehavior: pulumi.Output<string | undefined>;
    /**
     * The market (purchasing) option for the instance. See Market Options
     * below for details.
     */
    public readonly instanceMarketOptions: pulumi.Output<{ marketType?: string, spotOptions?: { blockDurationMinutes?: number, instanceInterruptionBehavior?: string, maxPrice?: string, spotInstanceType?: string, validUntil: string } } | undefined>;
    /**
     * The type of the instance.
     */
    public readonly instanceType: pulumi.Output<string | undefined>;
    /**
     * The kernel ID.
     */
    public readonly kernelId: pulumi.Output<string | undefined>;
    /**
     * The key name to use for the instance.
     */
    public readonly keyName: pulumi.Output<string | undefined>;
    /**
     * The latest version of the launch template.
     */
    public /*out*/ readonly latestVersion: pulumi.Output<number>;
    /**
     * The monitoring option for the instance. See Monitoring below for more details.
     */
    public readonly monitoring: pulumi.Output<{ enabled?: boolean } | undefined>;
    /**
     * The name of the launch template. If you leave this blank, Terraform will auto-generate a unique name.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * Creates a unique name beginning with the specified prefix. Conflicts with `name`.
     */
    public readonly namePrefix: pulumi.Output<string | undefined>;
    /**
     * Customize network interfaces to be attached at instance boot time. See Network 
     * Interfaces below for more details.
     */
    public readonly networkInterfaces: pulumi.Output<{ associatePublicIpAddress?: boolean, deleteOnTermination?: boolean, description?: string, deviceIndex?: number, ipv4AddressCount: number, ipv4Addresses?: string[], ipv6AddressCount: number, ipv6Addresses?: string[], networkInterfaceId?: string, privateIpAddress?: string, securityGroups?: string[], subnetId?: string }[] | undefined>;
    /**
     * The placement of the instance. See Placement below for more details.
     */
    public readonly placement: pulumi.Output<{ affinity?: string, availabilityZone?: string, groupName?: string, hostId?: string, spreadDomain?: string, tenancy?: string } | undefined>;
    /**
     * The ID of the RAM disk.
     */
    public readonly ramDiskId: pulumi.Output<string | undefined>;
    /**
     * A list of security group names to associate with. If you are creating Instances in a VPC, use
     * `vpc_security_group_ids` instead.
     */
    public readonly securityGroupNames: pulumi.Output<string[] | undefined>;
    /**
     * The tags to apply to the resources during launch. See Tags below for more details.
     */
    public readonly tagSpecifications: pulumi.Output<{ resourceType?: string, tags?: {[key: string]: any} }[] | undefined>;
    /**
     * A mapping of tags to assign to the launch template.
     */
    public readonly tags: pulumi.Output<Tags | undefined>;
    /**
     * The Base64-encoded user data to provide when launching the instance.
     */
    public readonly userData: pulumi.Output<string | undefined>;
    /**
     * A list of security group IDs to associate with.
     */
    public readonly vpcSecurityGroupIds: pulumi.Output<string[] | undefined>;

    /**
     * Create a LaunchTemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: LaunchTemplateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LaunchTemplateArgs | LaunchTemplateState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: LaunchTemplateState = argsOrState as LaunchTemplateState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["blockDeviceMappings"] = state ? state.blockDeviceMappings : undefined;
            inputs["creditSpecification"] = state ? state.creditSpecification : undefined;
            inputs["defaultVersion"] = state ? state.defaultVersion : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["disableApiTermination"] = state ? state.disableApiTermination : undefined;
            inputs["ebsOptimized"] = state ? state.ebsOptimized : undefined;
            inputs["elasticGpuSpecifications"] = state ? state.elasticGpuSpecifications : undefined;
            inputs["iamInstanceProfile"] = state ? state.iamInstanceProfile : undefined;
            inputs["imageId"] = state ? state.imageId : undefined;
            inputs["instanceInitiatedShutdownBehavior"] = state ? state.instanceInitiatedShutdownBehavior : undefined;
            inputs["instanceMarketOptions"] = state ? state.instanceMarketOptions : undefined;
            inputs["instanceType"] = state ? state.instanceType : undefined;
            inputs["kernelId"] = state ? state.kernelId : undefined;
            inputs["keyName"] = state ? state.keyName : undefined;
            inputs["latestVersion"] = state ? state.latestVersion : undefined;
            inputs["monitoring"] = state ? state.monitoring : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["namePrefix"] = state ? state.namePrefix : undefined;
            inputs["networkInterfaces"] = state ? state.networkInterfaces : undefined;
            inputs["placement"] = state ? state.placement : undefined;
            inputs["ramDiskId"] = state ? state.ramDiskId : undefined;
            inputs["securityGroupNames"] = state ? state.securityGroupNames : undefined;
            inputs["tagSpecifications"] = state ? state.tagSpecifications : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["userData"] = state ? state.userData : undefined;
            inputs["vpcSecurityGroupIds"] = state ? state.vpcSecurityGroupIds : undefined;
        } else {
            const args = argsOrState as LaunchTemplateArgs | undefined;
            inputs["blockDeviceMappings"] = args ? args.blockDeviceMappings : undefined;
            inputs["creditSpecification"] = args ? args.creditSpecification : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["disableApiTermination"] = args ? args.disableApiTermination : undefined;
            inputs["ebsOptimized"] = args ? args.ebsOptimized : undefined;
            inputs["elasticGpuSpecifications"] = args ? args.elasticGpuSpecifications : undefined;
            inputs["iamInstanceProfile"] = args ? args.iamInstanceProfile : undefined;
            inputs["imageId"] = args ? args.imageId : undefined;
            inputs["instanceInitiatedShutdownBehavior"] = args ? args.instanceInitiatedShutdownBehavior : undefined;
            inputs["instanceMarketOptions"] = args ? args.instanceMarketOptions : undefined;
            inputs["instanceType"] = args ? args.instanceType : undefined;
            inputs["kernelId"] = args ? args.kernelId : undefined;
            inputs["keyName"] = args ? args.keyName : undefined;
            inputs["monitoring"] = args ? args.monitoring : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["namePrefix"] = args ? args.namePrefix : undefined;
            inputs["networkInterfaces"] = args ? args.networkInterfaces : undefined;
            inputs["placement"] = args ? args.placement : undefined;
            inputs["ramDiskId"] = args ? args.ramDiskId : undefined;
            inputs["securityGroupNames"] = args ? args.securityGroupNames : undefined;
            inputs["tagSpecifications"] = args ? args.tagSpecifications : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["userData"] = args ? args.userData : undefined;
            inputs["vpcSecurityGroupIds"] = args ? args.vpcSecurityGroupIds : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["defaultVersion"] = undefined /*out*/;
            inputs["latestVersion"] = undefined /*out*/;
        }
        super("aws:ec2/launchTemplate:LaunchTemplate", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering LaunchTemplate resources.
 */
export interface LaunchTemplateState {
    /**
     * Amazon Resource Name (ARN) of the launch template.
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * Specify volumes to attach to the instance besides the volumes specified by the AMI.
     * See Block Devices below for details.
     */
    readonly blockDeviceMappings?: pulumi.Input<pulumi.Input<{ deviceName?: pulumi.Input<string>, ebs?: pulumi.Input<{ deleteOnTermination?: pulumi.Input<boolean>, encrypted?: pulumi.Input<boolean>, iops?: pulumi.Input<number>, kmsKeyId?: pulumi.Input<string>, snapshotId?: pulumi.Input<string>, volumeSize?: pulumi.Input<number>, volumeType?: pulumi.Input<string> }>, noDevice?: pulumi.Input<string>, virtualName?: pulumi.Input<string> }>[]>;
    /**
     * Customize the credit specification of the instance. See Credit 
     * Specification below for more details.
     */
    readonly creditSpecification?: pulumi.Input<{ cpuCredits?: pulumi.Input<string> }>;
    /**
     * The default version of the launch template.
     */
    readonly defaultVersion?: pulumi.Input<number>;
    /**
     * Description of the launch template.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * If `true`, enables [EC2 Instance
     * Termination Protection](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/terminating-instances.html#Using_ChangingDisableAPITermination)
     */
    readonly disableApiTermination?: pulumi.Input<boolean>;
    /**
     * If `true`, the launched EC2 instance will be EBS-optimized.
     */
    readonly ebsOptimized?: pulumi.Input<boolean>;
    /**
     * The elastic GPU to attach to the instance. See Elastic GPU
     * below for more details.
     */
    readonly elasticGpuSpecifications?: pulumi.Input<pulumi.Input<{ type: pulumi.Input<string> }>[]>;
    /**
     * The IAM Instance Profile to launch the instance with. See Instance Profile
     * below for more details.
     */
    readonly iamInstanceProfile?: pulumi.Input<{ arn?: pulumi.Input<string>, name?: pulumi.Input<string> }>;
    /**
     * The AMI from which to launch the instance.
     */
    readonly imageId?: pulumi.Input<string>;
    /**
     * Shutdown behavior for the instance. Can be `stop` or `terminate`.
     * (Default: `stop`).
     */
    readonly instanceInitiatedShutdownBehavior?: pulumi.Input<string>;
    /**
     * The market (purchasing) option for the instance. See Market Options
     * below for details.
     */
    readonly instanceMarketOptions?: pulumi.Input<{ marketType?: pulumi.Input<string>, spotOptions?: pulumi.Input<{ blockDurationMinutes?: pulumi.Input<number>, instanceInterruptionBehavior?: pulumi.Input<string>, maxPrice?: pulumi.Input<string>, spotInstanceType?: pulumi.Input<string>, validUntil?: pulumi.Input<string> }> }>;
    /**
     * The type of the instance.
     */
    readonly instanceType?: pulumi.Input<string>;
    /**
     * The kernel ID.
     */
    readonly kernelId?: pulumi.Input<string>;
    /**
     * The key name to use for the instance.
     */
    readonly keyName?: pulumi.Input<string>;
    /**
     * The latest version of the launch template.
     */
    readonly latestVersion?: pulumi.Input<number>;
    /**
     * The monitoring option for the instance. See Monitoring below for more details.
     */
    readonly monitoring?: pulumi.Input<{ enabled?: pulumi.Input<boolean> }>;
    /**
     * The name of the launch template. If you leave this blank, Terraform will auto-generate a unique name.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Creates a unique name beginning with the specified prefix. Conflicts with `name`.
     */
    readonly namePrefix?: pulumi.Input<string>;
    /**
     * Customize network interfaces to be attached at instance boot time. See Network 
     * Interfaces below for more details.
     */
    readonly networkInterfaces?: pulumi.Input<pulumi.Input<{ associatePublicIpAddress?: pulumi.Input<boolean>, deleteOnTermination?: pulumi.Input<boolean>, description?: pulumi.Input<string>, deviceIndex?: pulumi.Input<number>, ipv4AddressCount?: pulumi.Input<number>, ipv4Addresses?: pulumi.Input<pulumi.Input<string>[]>, ipv6AddressCount?: pulumi.Input<number>, ipv6Addresses?: pulumi.Input<pulumi.Input<string>[]>, networkInterfaceId?: pulumi.Input<string>, privateIpAddress?: pulumi.Input<string>, securityGroups?: pulumi.Input<pulumi.Input<string>[]>, subnetId?: pulumi.Input<string> }>[]>;
    /**
     * The placement of the instance. See Placement below for more details.
     */
    readonly placement?: pulumi.Input<{ affinity?: pulumi.Input<string>, availabilityZone?: pulumi.Input<string>, groupName?: pulumi.Input<string>, hostId?: pulumi.Input<string>, spreadDomain?: pulumi.Input<string>, tenancy?: pulumi.Input<string> }>;
    /**
     * The ID of the RAM disk.
     */
    readonly ramDiskId?: pulumi.Input<string>;
    /**
     * A list of security group names to associate with. If you are creating Instances in a VPC, use
     * `vpc_security_group_ids` instead.
     */
    readonly securityGroupNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The tags to apply to the resources during launch. See Tags below for more details.
     */
    readonly tagSpecifications?: pulumi.Input<pulumi.Input<{ resourceType?: pulumi.Input<string>, tags?: pulumi.Input<{[key: string]: any}> }>[]>;
    /**
     * A mapping of tags to assign to the launch template.
     */
    readonly tags?: pulumi.Input<Tags>;
    /**
     * The Base64-encoded user data to provide when launching the instance.
     */
    readonly userData?: pulumi.Input<string>;
    /**
     * A list of security group IDs to associate with.
     */
    readonly vpcSecurityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a LaunchTemplate resource.
 */
export interface LaunchTemplateArgs {
    /**
     * Specify volumes to attach to the instance besides the volumes specified by the AMI.
     * See Block Devices below for details.
     */
    readonly blockDeviceMappings?: pulumi.Input<pulumi.Input<{ deviceName?: pulumi.Input<string>, ebs?: pulumi.Input<{ deleteOnTermination?: pulumi.Input<boolean>, encrypted?: pulumi.Input<boolean>, iops?: pulumi.Input<number>, kmsKeyId?: pulumi.Input<string>, snapshotId?: pulumi.Input<string>, volumeSize?: pulumi.Input<number>, volumeType?: pulumi.Input<string> }>, noDevice?: pulumi.Input<string>, virtualName?: pulumi.Input<string> }>[]>;
    /**
     * Customize the credit specification of the instance. See Credit 
     * Specification below for more details.
     */
    readonly creditSpecification?: pulumi.Input<{ cpuCredits?: pulumi.Input<string> }>;
    /**
     * Description of the launch template.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * If `true`, enables [EC2 Instance
     * Termination Protection](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/terminating-instances.html#Using_ChangingDisableAPITermination)
     */
    readonly disableApiTermination?: pulumi.Input<boolean>;
    /**
     * If `true`, the launched EC2 instance will be EBS-optimized.
     */
    readonly ebsOptimized?: pulumi.Input<boolean>;
    /**
     * The elastic GPU to attach to the instance. See Elastic GPU
     * below for more details.
     */
    readonly elasticGpuSpecifications?: pulumi.Input<pulumi.Input<{ type: pulumi.Input<string> }>[]>;
    /**
     * The IAM Instance Profile to launch the instance with. See Instance Profile
     * below for more details.
     */
    readonly iamInstanceProfile?: pulumi.Input<{ arn?: pulumi.Input<string>, name?: pulumi.Input<string> }>;
    /**
     * The AMI from which to launch the instance.
     */
    readonly imageId?: pulumi.Input<string>;
    /**
     * Shutdown behavior for the instance. Can be `stop` or `terminate`.
     * (Default: `stop`).
     */
    readonly instanceInitiatedShutdownBehavior?: pulumi.Input<string>;
    /**
     * The market (purchasing) option for the instance. See Market Options
     * below for details.
     */
    readonly instanceMarketOptions?: pulumi.Input<{ marketType?: pulumi.Input<string>, spotOptions?: pulumi.Input<{ blockDurationMinutes?: pulumi.Input<number>, instanceInterruptionBehavior?: pulumi.Input<string>, maxPrice?: pulumi.Input<string>, spotInstanceType?: pulumi.Input<string>, validUntil?: pulumi.Input<string> }> }>;
    /**
     * The type of the instance.
     */
    readonly instanceType?: pulumi.Input<string>;
    /**
     * The kernel ID.
     */
    readonly kernelId?: pulumi.Input<string>;
    /**
     * The key name to use for the instance.
     */
    readonly keyName?: pulumi.Input<string>;
    /**
     * The monitoring option for the instance. See Monitoring below for more details.
     */
    readonly monitoring?: pulumi.Input<{ enabled?: pulumi.Input<boolean> }>;
    /**
     * The name of the launch template. If you leave this blank, Terraform will auto-generate a unique name.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Creates a unique name beginning with the specified prefix. Conflicts with `name`.
     */
    readonly namePrefix?: pulumi.Input<string>;
    /**
     * Customize network interfaces to be attached at instance boot time. See Network 
     * Interfaces below for more details.
     */
    readonly networkInterfaces?: pulumi.Input<pulumi.Input<{ associatePublicIpAddress?: pulumi.Input<boolean>, deleteOnTermination?: pulumi.Input<boolean>, description?: pulumi.Input<string>, deviceIndex?: pulumi.Input<number>, ipv4AddressCount?: pulumi.Input<number>, ipv4Addresses?: pulumi.Input<pulumi.Input<string>[]>, ipv6AddressCount?: pulumi.Input<number>, ipv6Addresses?: pulumi.Input<pulumi.Input<string>[]>, networkInterfaceId?: pulumi.Input<string>, privateIpAddress?: pulumi.Input<string>, securityGroups?: pulumi.Input<pulumi.Input<string>[]>, subnetId?: pulumi.Input<string> }>[]>;
    /**
     * The placement of the instance. See Placement below for more details.
     */
    readonly placement?: pulumi.Input<{ affinity?: pulumi.Input<string>, availabilityZone?: pulumi.Input<string>, groupName?: pulumi.Input<string>, hostId?: pulumi.Input<string>, spreadDomain?: pulumi.Input<string>, tenancy?: pulumi.Input<string> }>;
    /**
     * The ID of the RAM disk.
     */
    readonly ramDiskId?: pulumi.Input<string>;
    /**
     * A list of security group names to associate with. If you are creating Instances in a VPC, use
     * `vpc_security_group_ids` instead.
     */
    readonly securityGroupNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The tags to apply to the resources during launch. See Tags below for more details.
     */
    readonly tagSpecifications?: pulumi.Input<pulumi.Input<{ resourceType?: pulumi.Input<string>, tags?: pulumi.Input<{[key: string]: any}> }>[]>;
    /**
     * A mapping of tags to assign to the launch template.
     */
    readonly tags?: pulumi.Input<Tags>;
    /**
     * The Base64-encoded user data to provide when launching the instance.
     */
    readonly userData?: pulumi.Input<string>;
    /**
     * A list of security group IDs to associate with.
     */
    readonly vpcSecurityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
}
