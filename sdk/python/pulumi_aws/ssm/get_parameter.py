# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class GetParameterResult(object):
    """
    A collection of values returned by getParameter.
    """
    def __init__(__self__, arn=None, type=None, value=None):
        if arn and not isinstance(arn, basestring):
            raise TypeError('Expected argument arn to be a basestring')
        __self__.arn = arn
        if type and not isinstance(type, basestring):
            raise TypeError('Expected argument type to be a basestring')
        __self__.type = type
        if value and not isinstance(value, basestring):
            raise TypeError('Expected argument value to be a basestring')
        __self__.value = value

def get_parameter(name=None, with_decryption=None):
    """
    Provides an SSM Parameter data source.
    """
    __args__ = dict()

    __args__['name'] = name
    __args__['withDecryption'] = with_decryption
    __ret__ = pulumi.runtime.invoke('aws:ssm/getParameter:getParameter', __args__)

    return GetParameterResult(
        arn=__ret__.get('arn'),
        type=__ret__.get('type'),
        value=__ret__.get('value'))
