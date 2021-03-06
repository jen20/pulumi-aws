# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class GetAvailabilityZoneResult(object):
    """
    A collection of values returned by getAvailabilityZone.
    """
    def __init__(__self__, name=None, name_suffix=None, region=None, state=None):
        if name and not isinstance(name, basestring):
            raise TypeError('Expected argument name to be a basestring')
        __self__.name = name
        """
        The name of the selected availability zone.
        """
        if name_suffix and not isinstance(name_suffix, basestring):
            raise TypeError('Expected argument name_suffix to be a basestring')
        __self__.name_suffix = name_suffix
        """
        The part of the AZ name that appears after the region name,
        uniquely identifying the AZ within its region.
        """
        if region and not isinstance(region, basestring):
            raise TypeError('Expected argument region to be a basestring')
        __self__.region = region
        """
        The region where the selected availability zone resides.
        This is always the region selected on the provider, since this data source
        searches only within that region.
        """
        if state and not isinstance(state, basestring):
            raise TypeError('Expected argument state to be a basestring')
        __self__.state = state
        """
        The current state of the AZ.
        """

def get_availability_zone(name=None, state=None):
    """
    `aws_availability_zone` provides details about a specific availability zone (AZ)
    in the current region.
    
    This can be used both to validate an availability zone given in a variable
    and to split the AZ name into its component parts of an AWS region and an
    AZ identifier letter. The latter may be useful e.g. for implementing a
    consistent subnet numbering scheme across several regions by mapping both
    the region and the subnet letter to network numbers.
    
    This is different from the `aws_availability_zones` (plural) data source,
    which provides a list of the available zones.
    """
    __args__ = dict()

    __args__['name'] = name
    __args__['state'] = state
    __ret__ = pulumi.runtime.invoke('aws:index/getAvailabilityZone:getAvailabilityZone', __args__)

    return GetAvailabilityZoneResult(
        name=__ret__.get('name'),
        name_suffix=__ret__.get('nameSuffix'),
        region=__ret__.get('region'),
        state=__ret__.get('state'))
