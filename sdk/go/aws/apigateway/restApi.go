// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package apigateway

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides an API Gateway REST API.
type RestApi struct {
	s *pulumi.ResourceState
}

// NewRestApi registers a new resource with the given unique name, arguments, and options.
func NewRestApi(ctx *pulumi.Context,
	name string, args *RestApiArgs, opts ...pulumi.ResourceOpt) (*RestApi, error) {
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["apiKeySource"] = nil
		inputs["binaryMediaTypes"] = nil
		inputs["body"] = nil
		inputs["description"] = nil
		inputs["endpointConfiguration"] = nil
		inputs["minimumCompressionSize"] = nil
		inputs["name"] = nil
		inputs["policy"] = nil
	} else {
		inputs["apiKeySource"] = args.ApiKeySource
		inputs["binaryMediaTypes"] = args.BinaryMediaTypes
		inputs["body"] = args.Body
		inputs["description"] = args.Description
		inputs["endpointConfiguration"] = args.EndpointConfiguration
		inputs["minimumCompressionSize"] = args.MinimumCompressionSize
		inputs["name"] = args.Name
		inputs["policy"] = args.Policy
	}
	inputs["createdDate"] = nil
	inputs["executionArn"] = nil
	inputs["rootResourceId"] = nil
	s, err := ctx.RegisterResource("aws:apigateway/restApi:RestApi", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &RestApi{s: s}, nil
}

// GetRestApi gets an existing RestApi resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetRestApi(ctx *pulumi.Context,
	name string, id pulumi.ID, state *RestApiState, opts ...pulumi.ResourceOpt) (*RestApi, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["apiKeySource"] = state.ApiKeySource
		inputs["binaryMediaTypes"] = state.BinaryMediaTypes
		inputs["body"] = state.Body
		inputs["createdDate"] = state.CreatedDate
		inputs["description"] = state.Description
		inputs["endpointConfiguration"] = state.EndpointConfiguration
		inputs["executionArn"] = state.ExecutionArn
		inputs["minimumCompressionSize"] = state.MinimumCompressionSize
		inputs["name"] = state.Name
		inputs["policy"] = state.Policy
		inputs["rootResourceId"] = state.RootResourceId
	}
	s, err := ctx.ReadResource("aws:apigateway/restApi:RestApi", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &RestApi{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *RestApi) URN() *pulumi.URNOutput {
	return r.s.URN
}

// ID is this resource's unique identifier assigned by its provider.
func (r *RestApi) ID() *pulumi.IDOutput {
	return r.s.ID
}

// The source of the API key for requests. Valid values are HEADER (default) and AUTHORIZER.
func (r *RestApi) ApiKeySource() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["apiKeySource"])
}

// The list of binary media types supported by the RestApi. By default, the RestApi supports only UTF-8-encoded text payloads.
func (r *RestApi) BinaryMediaTypes() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["binaryMediaTypes"])
}

// An OpenAPI specification that defines the set of routes and integrations to create as part of the REST API.
func (r *RestApi) Body() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["body"])
}

// The creation date of the REST API
func (r *RestApi) CreatedDate() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["createdDate"])
}

// The description of the REST API
func (r *RestApi) Description() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["description"])
}

// Nested argument defining API endpoint configuration including endpoint type. Defined below.
func (r *RestApi) EndpointConfiguration() *pulumi.Output {
	return r.s.State["endpointConfiguration"]
}

// The execution ARN part to be used in [`lambda_permission`](https://www.terraform.io/docs/providers/aws/r/lambda_permission.html)'s `source_arn`
// when allowing API Gateway to invoke a Lambda function,
// e.g. `arn:aws:execute-api:eu-west-2:123456789012:z4675bid1j`, which can be concatenated with allowed stage, method and resource path.
func (r *RestApi) ExecutionArn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["executionArn"])
}

// Minimum response size to compress for the REST API. Integer between -1 and 10485760 (10MB). Setting a value greater than -1 will enable compression, -1 disables compression (default).
func (r *RestApi) MinimumCompressionSize() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["minimumCompressionSize"])
}

// The name of the REST API
func (r *RestApi) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// JSON formatted policy document that controls access to the API Gateway
func (r *RestApi) Policy() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["policy"])
}

// The resource ID of the REST API's root
func (r *RestApi) RootResourceId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["rootResourceId"])
}

// Input properties used for looking up and filtering RestApi resources.
type RestApiState struct {
	// The source of the API key for requests. Valid values are HEADER (default) and AUTHORIZER.
	ApiKeySource interface{}
	// The list of binary media types supported by the RestApi. By default, the RestApi supports only UTF-8-encoded text payloads.
	BinaryMediaTypes interface{}
	// An OpenAPI specification that defines the set of routes and integrations to create as part of the REST API.
	Body interface{}
	// The creation date of the REST API
	CreatedDate interface{}
	// The description of the REST API
	Description interface{}
	// Nested argument defining API endpoint configuration including endpoint type. Defined below.
	EndpointConfiguration interface{}
	// The execution ARN part to be used in [`lambda_permission`](https://www.terraform.io/docs/providers/aws/r/lambda_permission.html)'s `source_arn`
	// when allowing API Gateway to invoke a Lambda function,
	// e.g. `arn:aws:execute-api:eu-west-2:123456789012:z4675bid1j`, which can be concatenated with allowed stage, method and resource path.
	ExecutionArn interface{}
	// Minimum response size to compress for the REST API. Integer between -1 and 10485760 (10MB). Setting a value greater than -1 will enable compression, -1 disables compression (default).
	MinimumCompressionSize interface{}
	// The name of the REST API
	Name interface{}
	// JSON formatted policy document that controls access to the API Gateway
	Policy interface{}
	// The resource ID of the REST API's root
	RootResourceId interface{}
}

// The set of arguments for constructing a RestApi resource.
type RestApiArgs struct {
	// The source of the API key for requests. Valid values are HEADER (default) and AUTHORIZER.
	ApiKeySource interface{}
	// The list of binary media types supported by the RestApi. By default, the RestApi supports only UTF-8-encoded text payloads.
	BinaryMediaTypes interface{}
	// An OpenAPI specification that defines the set of routes and integrations to create as part of the REST API.
	Body interface{}
	// The description of the REST API
	Description interface{}
	// Nested argument defining API endpoint configuration including endpoint type. Defined below.
	EndpointConfiguration interface{}
	// Minimum response size to compress for the REST API. Integer between -1 and 10485760 (10MB). Setting a value greater than -1 will enable compression, -1 disables compression (default).
	MinimumCompressionSize interface{}
	// The name of the REST API
	Name interface{}
	// JSON formatted policy document that controls access to the API Gateway
	Policy interface{}
}
