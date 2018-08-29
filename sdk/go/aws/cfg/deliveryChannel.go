// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package cfg

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides an AWS Config Delivery Channel.
// 
// ~> **Note:** Delivery Channel requires a [Configuration Recorder](https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html) to be present. Use of `depends_on` (as shown below) is recommended to avoid race conditions.
type DeliveryChannel struct {
	s *pulumi.ResourceState
}

// NewDeliveryChannel registers a new resource with the given unique name, arguments, and options.
func NewDeliveryChannel(ctx *pulumi.Context,
	name string, args *DeliveryChannelArgs, opts ...pulumi.ResourceOpt) (*DeliveryChannel, error) {
	if args == nil || args.S3BucketName == nil {
		return nil, errors.New("missing required argument 'S3BucketName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["name"] = nil
		inputs["s3BucketName"] = nil
		inputs["s3KeyPrefix"] = nil
		inputs["snapshotDeliveryProperties"] = nil
		inputs["snsTopicArn"] = nil
	} else {
		inputs["name"] = args.Name
		inputs["s3BucketName"] = args.S3BucketName
		inputs["s3KeyPrefix"] = args.S3KeyPrefix
		inputs["snapshotDeliveryProperties"] = args.SnapshotDeliveryProperties
		inputs["snsTopicArn"] = args.SnsTopicArn
	}
	s, err := ctx.RegisterResource("aws:cfg/deliveryChannel:DeliveryChannel", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &DeliveryChannel{s: s}, nil
}

// GetDeliveryChannel gets an existing DeliveryChannel resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetDeliveryChannel(ctx *pulumi.Context,
	name string, id pulumi.ID, state *DeliveryChannelState, opts ...pulumi.ResourceOpt) (*DeliveryChannel, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["name"] = state.Name
		inputs["s3BucketName"] = state.S3BucketName
		inputs["s3KeyPrefix"] = state.S3KeyPrefix
		inputs["snapshotDeliveryProperties"] = state.SnapshotDeliveryProperties
		inputs["snsTopicArn"] = state.SnsTopicArn
	}
	s, err := ctx.ReadResource("aws:cfg/deliveryChannel:DeliveryChannel", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &DeliveryChannel{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *DeliveryChannel) URN() *pulumi.URNOutput {
	return r.s.URN
}

// ID is this resource's unique identifier assigned by its provider.
func (r *DeliveryChannel) ID() *pulumi.IDOutput {
	return r.s.ID
}

// The name of the delivery channel. Defaults to `default`. Changing it recreates the resource.
func (r *DeliveryChannel) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// The name of the S3 bucket used to store the configuration history.
func (r *DeliveryChannel) S3BucketName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["s3BucketName"])
}

// The prefix for the specified S3 bucket.
func (r *DeliveryChannel) S3KeyPrefix() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["s3KeyPrefix"])
}

// Options for how AWS Config delivers configuration snapshots. See below
func (r *DeliveryChannel) SnapshotDeliveryProperties() *pulumi.Output {
	return r.s.State["snapshotDeliveryProperties"]
}

// The ARN of the SNS topic that AWS Config delivers notifications to.
func (r *DeliveryChannel) SnsTopicArn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["snsTopicArn"])
}

// Input properties used for looking up and filtering DeliveryChannel resources.
type DeliveryChannelState struct {
	// The name of the delivery channel. Defaults to `default`. Changing it recreates the resource.
	Name interface{}
	// The name of the S3 bucket used to store the configuration history.
	S3BucketName interface{}
	// The prefix for the specified S3 bucket.
	S3KeyPrefix interface{}
	// Options for how AWS Config delivers configuration snapshots. See below
	SnapshotDeliveryProperties interface{}
	// The ARN of the SNS topic that AWS Config delivers notifications to.
	SnsTopicArn interface{}
}

// The set of arguments for constructing a DeliveryChannel resource.
type DeliveryChannelArgs struct {
	// The name of the delivery channel. Defaults to `default`. Changing it recreates the resource.
	Name interface{}
	// The name of the S3 bucket used to store the configuration history.
	S3BucketName interface{}
	// The prefix for the specified S3 bucket.
	S3KeyPrefix interface{}
	// Options for how AWS Config delivers configuration snapshots. See below
	SnapshotDeliveryProperties interface{}
	// The ARN of the SNS topic that AWS Config delivers notifications to.
	SnsTopicArn interface{}
}
