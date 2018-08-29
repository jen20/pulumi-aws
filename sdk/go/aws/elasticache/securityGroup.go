// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package elasticache

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides an ElastiCache Security Group to control access to one or more cache
// clusters.
// 
// ~> **NOTE:** ElastiCache Security Groups are for use only when working with an
// ElastiCache cluster **outside** of a VPC. If you are using a VPC, see the
// ElastiCache Subnet Group resource.
type SecurityGroup struct {
	s *pulumi.ResourceState
}

// NewSecurityGroup registers a new resource with the given unique name, arguments, and options.
func NewSecurityGroup(ctx *pulumi.Context,
	name string, args *SecurityGroupArgs, opts ...pulumi.ResourceOpt) (*SecurityGroup, error) {
	if args == nil || args.SecurityGroupNames == nil {
		return nil, errors.New("missing required argument 'SecurityGroupNames'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["description"] = nil
		inputs["name"] = nil
		inputs["securityGroupNames"] = nil
	} else {
		inputs["description"] = args.Description
		inputs["name"] = args.Name
		inputs["securityGroupNames"] = args.SecurityGroupNames
	}
	s, err := ctx.RegisterResource("aws:elasticache/securityGroup:SecurityGroup", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &SecurityGroup{s: s}, nil
}

// GetSecurityGroup gets an existing SecurityGroup resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetSecurityGroup(ctx *pulumi.Context,
	name string, id pulumi.ID, state *SecurityGroupState, opts ...pulumi.ResourceOpt) (*SecurityGroup, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["description"] = state.Description
		inputs["name"] = state.Name
		inputs["securityGroupNames"] = state.SecurityGroupNames
	}
	s, err := ctx.ReadResource("aws:elasticache/securityGroup:SecurityGroup", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &SecurityGroup{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *SecurityGroup) URN() *pulumi.URNOutput {
	return r.s.URN
}

// ID is this resource's unique identifier assigned by its provider.
func (r *SecurityGroup) ID() *pulumi.IDOutput {
	return r.s.ID
}

// description for the cache security group. Defaults to "Managed by Terraform".
func (r *SecurityGroup) Description() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["description"])
}

// Name for the cache security group. This value is stored as a lowercase string.
func (r *SecurityGroup) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// List of EC2 security group names to be
// authorized for ingress to the cache security group
func (r *SecurityGroup) SecurityGroupNames() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["securityGroupNames"])
}

// Input properties used for looking up and filtering SecurityGroup resources.
type SecurityGroupState struct {
	// description for the cache security group. Defaults to "Managed by Terraform".
	Description interface{}
	// Name for the cache security group. This value is stored as a lowercase string.
	Name interface{}
	// List of EC2 security group names to be
	// authorized for ingress to the cache security group
	SecurityGroupNames interface{}
}

// The set of arguments for constructing a SecurityGroup resource.
type SecurityGroupArgs struct {
	// description for the cache security group. Defaults to "Managed by Terraform".
	Description interface{}
	// Name for the cache security group. This value is stored as a lowercase string.
	Name interface{}
	// List of EC2 security group names to be
	// authorized for ingress to the cache security group
	SecurityGroupNames interface{}
}
