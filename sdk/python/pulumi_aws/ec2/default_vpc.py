# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class DefaultVpc(pulumi.CustomResource):
    """
    Provides a resource to manage the [default AWS VPC](http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/default-vpc.html)
    in the current region.
    
    For AWS accounts created after 2013-12-04, each region comes with a Default VPC.
    **This is an advanced resource**, and has special caveats to be aware of when
    using it. Please read this document in its entirety before using this resource.
    
    The `aws_default_vpc` behaves differently from normal resources, in that
    Terraform does not _create_ this resource, but instead "adopts" it
    into management. 
    """
    def __init__(__self__, __name__, __opts__=None, enable_classiclink=None, enable_classiclink_dns_support=None, enable_dns_hostnames=None, enable_dns_support=None, tags=None):
        """Create a DefaultVpc resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if enable_classiclink and not isinstance(enable_classiclink, bool):
            raise TypeError('Expected property enable_classiclink to be a bool')
        __self__.enable_classiclink = enable_classiclink
        """
        A boolean flag to enable/disable ClassicLink 
        for the VPC. Only valid in regions and accounts that support EC2 Classic.
        See the [ClassicLink documentation][1] for more information. Defaults false.
        """
        __props__['enableClassiclink'] = enable_classiclink

        if enable_classiclink_dns_support and not isinstance(enable_classiclink_dns_support, bool):
            raise TypeError('Expected property enable_classiclink_dns_support to be a bool')
        __self__.enable_classiclink_dns_support = enable_classiclink_dns_support
        __props__['enableClassiclinkDnsSupport'] = enable_classiclink_dns_support

        if enable_dns_hostnames and not isinstance(enable_dns_hostnames, bool):
            raise TypeError('Expected property enable_dns_hostnames to be a bool')
        __self__.enable_dns_hostnames = enable_dns_hostnames
        """
        A boolean flag to enable/disable DNS hostnames in the VPC. Defaults false.
        """
        __props__['enableDnsHostnames'] = enable_dns_hostnames

        if enable_dns_support and not isinstance(enable_dns_support, bool):
            raise TypeError('Expected property enable_dns_support to be a bool')
        __self__.enable_dns_support = enable_dns_support
        """
        A boolean flag to enable/disable DNS support in the VPC. Defaults true.
        """
        __props__['enableDnsSupport'] = enable_dns_support

        if tags and not isinstance(tags, dict):
            raise TypeError('Expected property tags to be a dict')
        __self__.tags = tags
        """
        A mapping of tags to assign to the resource.
        """
        __props__['tags'] = tags

        __self__.arn = pulumi.runtime.UNKNOWN
        """
        Amazon Resource Name (ARN) of VPC
        """
        __self__.assign_generated_ipv6_cidr_block = pulumi.runtime.UNKNOWN
        """
        Whether or not an Amazon-provided IPv6 CIDR 
        block with a /56 prefix length for the VPC was assigned
        """
        __self__.cidr_block = pulumi.runtime.UNKNOWN
        """
        The CIDR block of the VPC
        """
        __self__.default_network_acl_id = pulumi.runtime.UNKNOWN
        """
        The ID of the network ACL created by default on VPC creation
        """
        __self__.default_route_table_id = pulumi.runtime.UNKNOWN
        """
        The ID of the route table created by default on VPC creation
        """
        __self__.default_security_group_id = pulumi.runtime.UNKNOWN
        """
        The ID of the security group created by default on VPC creation
        """
        __self__.dhcp_options_id = pulumi.runtime.UNKNOWN
        __self__.instance_tenancy = pulumi.runtime.UNKNOWN
        """
        Tenancy of instances spin up within VPC.
        """
        __self__.ipv6_association_id = pulumi.runtime.UNKNOWN
        """
        The association ID for the IPv6 CIDR block of the VPC
        """
        __self__.ipv6_cidr_block = pulumi.runtime.UNKNOWN
        """
        The IPv6 CIDR block of the VPC
        """
        __self__.main_route_table_id = pulumi.runtime.UNKNOWN
        """
        The ID of the main route table associated with
        this VPC. Note that you can change a VPC's main route table by using an
        [`aws_main_route_table_association`](https://www.terraform.io/docs/providers/aws/r/main_route_table_assoc.html)
        """

        super(DefaultVpc, __self__).__init__(
            'aws:ec2/defaultVpc:DefaultVpc',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'arn' in outs:
            self.arn = outs['arn']
        if 'assignGeneratedIpv6CidrBlock' in outs:
            self.assign_generated_ipv6_cidr_block = outs['assignGeneratedIpv6CidrBlock']
        if 'cidrBlock' in outs:
            self.cidr_block = outs['cidrBlock']
        if 'defaultNetworkAclId' in outs:
            self.default_network_acl_id = outs['defaultNetworkAclId']
        if 'defaultRouteTableId' in outs:
            self.default_route_table_id = outs['defaultRouteTableId']
        if 'defaultSecurityGroupId' in outs:
            self.default_security_group_id = outs['defaultSecurityGroupId']
        if 'dhcpOptionsId' in outs:
            self.dhcp_options_id = outs['dhcpOptionsId']
        if 'enableClassiclink' in outs:
            self.enable_classiclink = outs['enableClassiclink']
        if 'enableClassiclinkDnsSupport' in outs:
            self.enable_classiclink_dns_support = outs['enableClassiclinkDnsSupport']
        if 'enableDnsHostnames' in outs:
            self.enable_dns_hostnames = outs['enableDnsHostnames']
        if 'enableDnsSupport' in outs:
            self.enable_dns_support = outs['enableDnsSupport']
        if 'instanceTenancy' in outs:
            self.instance_tenancy = outs['instanceTenancy']
        if 'ipv6AssociationId' in outs:
            self.ipv6_association_id = outs['ipv6AssociationId']
        if 'ipv6CidrBlock' in outs:
            self.ipv6_cidr_block = outs['ipv6CidrBlock']
        if 'mainRouteTableId' in outs:
            self.main_route_table_id = outs['mainRouteTableId']
        if 'tags' in outs:
            self.tags = outs['tags']
