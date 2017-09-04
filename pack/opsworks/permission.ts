// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class Permission extends fabric.Resource {
    public readonly allowSsh: fabric.Property<boolean>;
    public readonly allowSudo: fabric.Property<boolean>;
    public /*out*/ readonly permissionId: fabric.Property<string>;
    public readonly level: fabric.Property<string>;
    public readonly stackId: fabric.Property<string>;
    public readonly userArn: fabric.Property<string>;

    constructor(urnName: string, args: PermissionArgs) {
        if (args.userArn === undefined) {
            throw new Error("Missing required property 'userArn'");
        }
        super("aws:opsworks/permission:Permission", urnName, {
            "allowSsh": args.allowSsh,
            "allowSudo": args.allowSudo,
            "level": args.level,
            "stackId": args.stackId,
            "userArn": args.userArn,
        });
    }
}

export interface PermissionArgs {
    readonly allowSsh?: fabric.PropertyValue<boolean>;
    readonly allowSudo?: fabric.PropertyValue<boolean>;
    readonly level?: fabric.PropertyValue<string>;
    readonly stackId?: fabric.PropertyValue<string>;
    readonly userArn: fabric.PropertyValue<string>;
}
