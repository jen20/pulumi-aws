# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class Template(pulumi.CustomResource):
    """
    Provides a resource to create a SES template.
    """
    def __init__(__self__, __name__, __opts__=None, html=None, name=None, subject=None, text=None):
        """Create a Template resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if html and not isinstance(html, basestring):
            raise TypeError('Expected property html to be a basestring')
        __self__.html = html
        """
        The HTML body of the email. Must be less than 500KB in size, including both the text and HTML parts.
        """
        __props__['html'] = html

        if name and not isinstance(name, basestring):
            raise TypeError('Expected property name to be a basestring')
        __self__.name = name
        """
        The name of the template. Cannot exceed 64 characters. You will refer to this name when you send email.
        """
        __props__['name'] = name

        if subject and not isinstance(subject, basestring):
            raise TypeError('Expected property subject to be a basestring')
        __self__.subject = subject
        """
        The subject line of the email.
        """
        __props__['subject'] = subject

        if text and not isinstance(text, basestring):
            raise TypeError('Expected property text to be a basestring')
        __self__.text = text
        """
        The email body that will be visible to recipients whose email clients do not display HTML. Must be less than 500KB in size, including both the text and HTML parts.
        """
        __props__['text'] = text

        super(Template, __self__).__init__(
            'aws:ses/template:Template',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'html' in outs:
            self.html = outs['html']
        if 'name' in outs:
            self.name = outs['name']
        if 'subject' in outs:
            self.subject = outs['subject']
        if 'text' in outs:
            self.text = outs['text']
