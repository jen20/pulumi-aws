// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * Provides details about a specific S3 bucket.
 * 
 * This resource may prove useful when setting up a Route53 record, or an origin for a CloudFront
 * Distribution.
 */
export function getBucket(args: GetBucketArgs): Promise<GetBucketResult> {
    return pulumi.runtime.invoke("aws:s3/getBucket:getBucket", {
        "bucket": args.bucket,
    });
}

/**
 * A collection of arguments for invoking getBucket.
 */
export interface GetBucketArgs {
    /**
     * The name of the bucket
     */
    readonly bucket: pulumi.Input<string>;
}

/**
 * A collection of values returned by getBucket.
 */
export interface GetBucketResult {
    /**
     * The ARN of the bucket. Will be of format `arn:aws:s3:::bucketname`.
     */
    readonly arn: string;
    /**
     * The bucket domain name. Will be of format `bucketname.s3.amazonaws.com`.
     */
    readonly bucketDomainName: string;
    /**
     * The [Route 53 Hosted Zone ID](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_website_region_endpoints) for this bucket's region.
     */
    readonly hostedZoneId: string;
    /**
     * The AWS region this bucket resides in.
     */
    readonly region: string;
    /**
     * The domain of the website endpoint, if the bucket is configured with a website. If not, this will be an empty string. This is used to create Route 53 alias records.
     */
    readonly websiteDomain: string;
    /**
     * The website endpoint, if the bucket is configured with a website. If not, this will be an empty string.
     */
    readonly websiteEndpoint: string;
}
