// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package servicediscovery

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides a Service Discovery Service resource.
type Service struct {
	s *pulumi.ResourceState
}

// NewService registers a new resource with the given unique name, arguments, and options.
func NewService(ctx *pulumi.Context,
	name string, args *ServiceArgs, opts ...pulumi.ResourceOpt) (*Service, error) {
	if args == nil || args.DnsConfig == nil {
		return nil, errors.New("missing required argument 'DnsConfig'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["description"] = nil
		inputs["dnsConfig"] = nil
		inputs["healthCheckConfig"] = nil
		inputs["healthCheckCustomConfig"] = nil
		inputs["name"] = nil
	} else {
		inputs["description"] = args.Description
		inputs["dnsConfig"] = args.DnsConfig
		inputs["healthCheckConfig"] = args.HealthCheckConfig
		inputs["healthCheckCustomConfig"] = args.HealthCheckCustomConfig
		inputs["name"] = args.Name
	}
	inputs["arn"] = nil
	s, err := ctx.RegisterResource("aws:servicediscovery/service:Service", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Service{s: s}, nil
}

// GetService gets an existing Service resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetService(ctx *pulumi.Context,
	name string, id pulumi.ID, state *ServiceState, opts ...pulumi.ResourceOpt) (*Service, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["arn"] = state.Arn
		inputs["description"] = state.Description
		inputs["dnsConfig"] = state.DnsConfig
		inputs["healthCheckConfig"] = state.HealthCheckConfig
		inputs["healthCheckCustomConfig"] = state.HealthCheckCustomConfig
		inputs["name"] = state.Name
	}
	s, err := ctx.ReadResource("aws:servicediscovery/service:Service", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Service{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Service) URN() *pulumi.URNOutput {
	return r.s.URN
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Service) ID() *pulumi.IDOutput {
	return r.s.ID
}

// The ARN of the service.
func (r *Service) Arn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["arn"])
}

// The description of the service.
func (r *Service) Description() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["description"])
}

// A complex type that contains information about the resource record sets that you want Amazon Route 53 to create when you register an instance.
func (r *Service) DnsConfig() *pulumi.Output {
	return r.s.State["dnsConfig"]
}

// A complex type that contains settings for an optional health check. Only for Public DNS namespaces.
func (r *Service) HealthCheckConfig() *pulumi.Output {
	return r.s.State["healthCheckConfig"]
}

// A complex type that contains settings for ECS managed health checks.
func (r *Service) HealthCheckCustomConfig() *pulumi.Output {
	return r.s.State["healthCheckCustomConfig"]
}

// The name of the service.
func (r *Service) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// Input properties used for looking up and filtering Service resources.
type ServiceState struct {
	// The ARN of the service.
	Arn interface{}
	// The description of the service.
	Description interface{}
	// A complex type that contains information about the resource record sets that you want Amazon Route 53 to create when you register an instance.
	DnsConfig interface{}
	// A complex type that contains settings for an optional health check. Only for Public DNS namespaces.
	HealthCheckConfig interface{}
	// A complex type that contains settings for ECS managed health checks.
	HealthCheckCustomConfig interface{}
	// The name of the service.
	Name interface{}
}

// The set of arguments for constructing a Service resource.
type ServiceArgs struct {
	// The description of the service.
	Description interface{}
	// A complex type that contains information about the resource record sets that you want Amazon Route 53 to create when you register an instance.
	DnsConfig interface{}
	// A complex type that contains settings for an optional health check. Only for Public DNS namespaces.
	HealthCheckConfig interface{}
	// A complex type that contains settings for ECS managed health checks.
	HealthCheckCustomConfig interface{}
	// The name of the service.
	Name interface{}
}