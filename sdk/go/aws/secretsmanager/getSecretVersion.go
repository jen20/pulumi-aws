// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package secretsmanager

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Retrieve information about a Secrets Manager secret version includings its secret value. To retrieve secret metadata, see the [`aws_secretsmanager_secret` data source](https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret.html).
func LookupSecretVersion(ctx *pulumi.Context, args *GetSecretVersionArgs) (*GetSecretVersionResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["secretId"] = args.SecretId
		inputs["versionId"] = args.VersionId
		inputs["versionStage"] = args.VersionStage
	}
	outputs, err := ctx.Invoke("aws:secretsmanager/getSecretVersion:getSecretVersion", inputs)
	if err != nil {
		return nil, err
	}
	return &GetSecretVersionResult{
		Arn: outputs["arn"],
		SecretString: outputs["secretString"],
		VersionId: outputs["versionId"],
		VersionStages: outputs["versionStages"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getSecretVersion.
type GetSecretVersionArgs struct {
	// Specifies the secret containing the version that you want to retrieve. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret.
	SecretId interface{}
	// Specifies the unique identifier of the version of the secret that you want to retrieve. Overrides `version_stage`.
	VersionId interface{}
	// Specifies the secret version that you want to retrieve by the staging label attached to the version. Defaults to `AWSCURRENT`.
	VersionStage interface{}
}

// A collection of values returned by getSecretVersion.
type GetSecretVersionResult struct {
	// The ARN of the secret.
	Arn interface{}
	// The decrypted part of the protected secret information that was originally provided as a string.
	SecretString interface{}
	// The unique identifier of this version of the secret.
	VersionId interface{}
	VersionStages interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
