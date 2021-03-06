# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class TopicPolicy(pulumi.CustomResource):
    """
    Provides an SNS topic policy resource
    
    ~> **NOTE:** If a Principal is specified as just an AWS account ID rather than an ARN, AWS silently converts it to the ARN for the root user, causing future terraform plans to differ. To avoid this problem, just specify the full ARN, e.g. `arn:aws:iam::123456789012:root`
    """
    def __init__(__self__, __name__, __opts__=None, arn=None, policy=None):
        """Create a TopicPolicy resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not arn:
            raise TypeError('Missing required property arn')
        elif not isinstance(arn, basestring):
            raise TypeError('Expected property arn to be a basestring')
        __self__.arn = arn
        """
        The ARN of the SNS topic
        """
        __props__['arn'] = arn

        if not policy:
            raise TypeError('Missing required property policy')
        elif not isinstance(policy, basestring):
            raise TypeError('Expected property policy to be a basestring')
        __self__.policy = policy
        """
        The fully-formed AWS policy as JSON
        """
        __props__['policy'] = policy

        super(TopicPolicy, __self__).__init__(
            'aws:sns/topicPolicy:TopicPolicy',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'arn' in outs:
            self.arn = outs['arn']
        if 'policy' in outs:
            self.policy = outs['policy']
