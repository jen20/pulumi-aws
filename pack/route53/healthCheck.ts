// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class HealthCheck extends fabric.Resource {
    public readonly childHealthThreshold?: fabric.Property<number>;
    public readonly childHealthchecks?: fabric.Property<string[]>;
    public readonly cloudwatchAlarmName?: fabric.Property<string>;
    public readonly cloudwatchAlarmRegion?: fabric.Property<string>;
    public readonly enableSni: fabric.Property<boolean>;
    public readonly failureThreshold?: fabric.Property<number>;
    public readonly fqdn?: fabric.Property<string>;
    public readonly insufficientDataHealthStatus?: fabric.Property<string>;
    public readonly invertHealthcheck?: fabric.Property<boolean>;
    public readonly ipAddress?: fabric.Property<string>;
    public readonly measureLatency?: fabric.Property<boolean>;
    public readonly port?: fabric.Property<number>;
    public readonly referenceName?: fabric.Property<string>;
    public readonly regions?: fabric.Property<string[]>;
    public readonly requestInterval?: fabric.Property<number>;
    public readonly resourcePath?: fabric.Property<string>;
    public readonly searchString?: fabric.Property<string>;
    public readonly tags?: fabric.Property<{[key: string]: any}>;
    public readonly type: fabric.Property<string>;

    constructor(urnName: string, args: HealthCheckArgs) {
        if (args.type === undefined) {
            throw new Error("Missing required property 'type'");
        }
        super("aws:route53/healthCheck:HealthCheck", urnName, {
            "childHealthThreshold": args.childHealthThreshold,
            "childHealthchecks": args.childHealthchecks,
            "cloudwatchAlarmName": args.cloudwatchAlarmName,
            "cloudwatchAlarmRegion": args.cloudwatchAlarmRegion,
            "enableSni": args.enableSni,
            "failureThreshold": args.failureThreshold,
            "fqdn": args.fqdn,
            "insufficientDataHealthStatus": args.insufficientDataHealthStatus,
            "invertHealthcheck": args.invertHealthcheck,
            "ipAddress": args.ipAddress,
            "measureLatency": args.measureLatency,
            "port": args.port,
            "referenceName": args.referenceName,
            "regions": args.regions,
            "requestInterval": args.requestInterval,
            "resourcePath": args.resourcePath,
            "searchString": args.searchString,
            "tags": args.tags,
            "type": args.type,
        });
    }
}

export interface HealthCheckArgs {
    readonly childHealthThreshold?: fabric.PropertyValue<number>;
    readonly childHealthchecks?: fabric.PropertyValue<fabric.PropertyValue<string>>[];
    readonly cloudwatchAlarmName?: fabric.PropertyValue<string>;
    readonly cloudwatchAlarmRegion?: fabric.PropertyValue<string>;
    readonly enableSni?: fabric.PropertyValue<boolean>;
    readonly failureThreshold?: fabric.PropertyValue<number>;
    readonly fqdn?: fabric.PropertyValue<string>;
    readonly insufficientDataHealthStatus?: fabric.PropertyValue<string>;
    readonly invertHealthcheck?: fabric.PropertyValue<boolean>;
    readonly ipAddress?: fabric.PropertyValue<string>;
    readonly measureLatency?: fabric.PropertyValue<boolean>;
    readonly port?: fabric.PropertyValue<number>;
    readonly referenceName?: fabric.PropertyValue<string>;
    readonly regions?: fabric.PropertyValue<fabric.PropertyValue<string>>[];
    readonly requestInterval?: fabric.PropertyValue<number>;
    readonly resourcePath?: fabric.PropertyValue<string>;
    readonly searchString?: fabric.PropertyValue<string>;
    readonly tags?: fabric.PropertyValue<{[key: string]: any}>;
    readonly type: fabric.PropertyValue<string>;
}
