// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package ec2

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides a VPC DHCP Options resource.
// * `domain_name_servers`, `netbios_name_servers`, `ntp_servers` are limited by AWS to maximum four servers only.
// * To actually use the DHCP Options Set you need to associate it to a VPC using [`aws_vpc_dhcp_options_association`](https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options_association.html).
// * If you delete a DHCP Options Set, all VPCs using it will be associated to AWS's `default` DHCP Option Set.
// * In most cases unless you're configuring your own DNS you'll want to set `domain_name_servers` to `AmazonProvidedDNS`. 
type VpcDhcpOptions struct {
	s *pulumi.ResourceState
}

// NewVpcDhcpOptions registers a new resource with the given unique name, arguments, and options.
func NewVpcDhcpOptions(ctx *pulumi.Context,
	name string, args *VpcDhcpOptionsArgs, opts ...pulumi.ResourceOpt) (*VpcDhcpOptions, error) {
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["domainName"] = nil
		inputs["domainNameServers"] = nil
		inputs["netbiosNameServers"] = nil
		inputs["netbiosNodeType"] = nil
		inputs["ntpServers"] = nil
		inputs["tags"] = nil
	} else {
		inputs["domainName"] = args.DomainName
		inputs["domainNameServers"] = args.DomainNameServers
		inputs["netbiosNameServers"] = args.NetbiosNameServers
		inputs["netbiosNodeType"] = args.NetbiosNodeType
		inputs["ntpServers"] = args.NtpServers
		inputs["tags"] = args.Tags
	}
	s, err := ctx.RegisterResource("aws:ec2/vpcDhcpOptions:VpcDhcpOptions", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &VpcDhcpOptions{s: s}, nil
}

// GetVpcDhcpOptions gets an existing VpcDhcpOptions resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetVpcDhcpOptions(ctx *pulumi.Context,
	name string, id pulumi.ID, state *VpcDhcpOptionsState, opts ...pulumi.ResourceOpt) (*VpcDhcpOptions, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["domainName"] = state.DomainName
		inputs["domainNameServers"] = state.DomainNameServers
		inputs["netbiosNameServers"] = state.NetbiosNameServers
		inputs["netbiosNodeType"] = state.NetbiosNodeType
		inputs["ntpServers"] = state.NtpServers
		inputs["tags"] = state.Tags
	}
	s, err := ctx.ReadResource("aws:ec2/vpcDhcpOptions:VpcDhcpOptions", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &VpcDhcpOptions{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *VpcDhcpOptions) URN() *pulumi.URNOutput {
	return r.s.URN
}

// ID is this resource's unique identifier assigned by its provider.
func (r *VpcDhcpOptions) ID() *pulumi.IDOutput {
	return r.s.ID
}

// the suffix domain name to use by default when resolving non Fully Qualified Domain Names. In other words, this is what ends up being the `search` value in the `/etc/resolv.conf` file.
func (r *VpcDhcpOptions) DomainName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["domainName"])
}

// List of name servers to configure in `/etc/resolv.conf`. If you want to use the default AWS nameservers you should set this to `AmazonProvidedDNS`.
func (r *VpcDhcpOptions) DomainNameServers() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["domainNameServers"])
}

// List of NETBIOS name servers.
func (r *VpcDhcpOptions) NetbiosNameServers() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["netbiosNameServers"])
}

// The NetBIOS node type (1, 2, 4, or 8). AWS recommends to specify 2 since broadcast and multicast are not supported in their network. For more information about these node types, see [RFC 2132](http://www.ietf.org/rfc/rfc2132.txt).
func (r *VpcDhcpOptions) NetbiosNodeType() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["netbiosNodeType"])
}

// List of NTP servers to configure.
func (r *VpcDhcpOptions) NtpServers() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["ntpServers"])
}

// A mapping of tags to assign to the resource.
func (r *VpcDhcpOptions) Tags() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["tags"])
}

// Input properties used for looking up and filtering VpcDhcpOptions resources.
type VpcDhcpOptionsState struct {
	// the suffix domain name to use by default when resolving non Fully Qualified Domain Names. In other words, this is what ends up being the `search` value in the `/etc/resolv.conf` file.
	DomainName interface{}
	// List of name servers to configure in `/etc/resolv.conf`. If you want to use the default AWS nameservers you should set this to `AmazonProvidedDNS`.
	DomainNameServers interface{}
	// List of NETBIOS name servers.
	NetbiosNameServers interface{}
	// The NetBIOS node type (1, 2, 4, or 8). AWS recommends to specify 2 since broadcast and multicast are not supported in their network. For more information about these node types, see [RFC 2132](http://www.ietf.org/rfc/rfc2132.txt).
	NetbiosNodeType interface{}
	// List of NTP servers to configure.
	NtpServers interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}

// The set of arguments for constructing a VpcDhcpOptions resource.
type VpcDhcpOptionsArgs struct {
	// the suffix domain name to use by default when resolving non Fully Qualified Domain Names. In other words, this is what ends up being the `search` value in the `/etc/resolv.conf` file.
	DomainName interface{}
	// List of name servers to configure in `/etc/resolv.conf`. If you want to use the default AWS nameservers you should set this to `AmazonProvidedDNS`.
	DomainNameServers interface{}
	// List of NETBIOS name servers.
	NetbiosNameServers interface{}
	// The NetBIOS node type (1, 2, 4, or 8). AWS recommends to specify 2 since broadcast and multicast are not supported in their network. For more information about these node types, see [RFC 2132](http://www.ietf.org/rfc/rfc2132.txt).
	NetbiosNodeType interface{}
	// List of NTP servers to configure.
	NtpServers interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}
