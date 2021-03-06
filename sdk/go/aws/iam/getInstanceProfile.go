// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package iam

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// This data source can be used to fetch information about a specific
// IAM instance profile. By using this data source, you can reference IAM
// instance profile properties without having to hard code ARNs as input.
func LookupInstanceProfile(ctx *pulumi.Context, args *GetInstanceProfileArgs) (*GetInstanceProfileResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["name"] = args.Name
	}
	outputs, err := ctx.Invoke("aws:iam/getInstanceProfile:getInstanceProfile", inputs)
	if err != nil {
		return nil, err
	}
	return &GetInstanceProfileResult{
		Arn: outputs["arn"],
		CreateDate: outputs["createDate"],
		Path: outputs["path"],
		RoleArn: outputs["roleArn"],
		RoleId: outputs["roleId"],
		RoleName: outputs["roleName"],
	}, nil
}

// A collection of arguments for invoking getInstanceProfile.
type GetInstanceProfileArgs struct {
	// The friendly IAM instance profile name to match.
	Name interface{}
}

// A collection of values returned by getInstanceProfile.
type GetInstanceProfileResult struct {
	// The Amazon Resource Name (ARN) specifying the instance profile.
	Arn interface{}
	// The string representation of the date the instance profile
	// was created.
	CreateDate interface{}
	// The path to the instance profile.
	Path interface{}
	// The role arn associated with this instance profile.
	RoleArn interface{}
	// The role id associated with this instance profile.
	RoleId interface{}
	// The role name associated with this instance profile.
	RoleName interface{}
}
