# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class UserPool(pulumi.CustomResource):
    """
    Provides a Cognito User Pool resource.
    """
    def __init__(__self__, __name__, __opts__=None, admin_create_user_config=None, alias_attributes=None, auto_verified_attributes=None, device_configuration=None, email_configuration=None, email_verification_message=None, email_verification_subject=None, lambda_config=None, mfa_configuration=None, name=None, password_policy=None, schemas=None, sms_authentication_message=None, sms_configuration=None, sms_verification_message=None, tags=None, username_attributes=None, verification_message_template=None):
        """Create a UserPool resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if admin_create_user_config and not isinstance(admin_create_user_config, dict):
            raise TypeError('Expected property admin_create_user_config to be a dict')
        __self__.admin_create_user_config = admin_create_user_config
        """
        The configuration for AdminCreateUser requests.
        """
        __props__['adminCreateUserConfig'] = admin_create_user_config

        if alias_attributes and not isinstance(alias_attributes, list):
            raise TypeError('Expected property alias_attributes to be a list')
        __self__.alias_attributes = alias_attributes
        """
        Attributes supported as an alias for this user pool. Possible values: phone_number, email, or preferred_username. Conflicts with `username_attributes`.
        """
        __props__['aliasAttributes'] = alias_attributes

        if auto_verified_attributes and not isinstance(auto_verified_attributes, list):
            raise TypeError('Expected property auto_verified_attributes to be a list')
        __self__.auto_verified_attributes = auto_verified_attributes
        """
        The attributes to be auto-verified. Possible values: email, phone_number.
        """
        __props__['autoVerifiedAttributes'] = auto_verified_attributes

        if device_configuration and not isinstance(device_configuration, dict):
            raise TypeError('Expected property device_configuration to be a dict')
        __self__.device_configuration = device_configuration
        """
        The configuration for the user pool's device tracking.
        """
        __props__['deviceConfiguration'] = device_configuration

        if email_configuration and not isinstance(email_configuration, dict):
            raise TypeError('Expected property email_configuration to be a dict')
        __self__.email_configuration = email_configuration
        """
        The Email Configuration.
        """
        __props__['emailConfiguration'] = email_configuration

        if email_verification_message and not isinstance(email_verification_message, basestring):
            raise TypeError('Expected property email_verification_message to be a basestring')
        __self__.email_verification_message = email_verification_message
        """
        A string representing the email verification message. Must contain the `{####}` placeholder. **NOTE:** - If `email_verification_message` and `verification_message_template.email_message` are specified and the values are different, either one is prioritized and updated.
        """
        __props__['emailVerificationMessage'] = email_verification_message

        if email_verification_subject and not isinstance(email_verification_subject, basestring):
            raise TypeError('Expected property email_verification_subject to be a basestring')
        __self__.email_verification_subject = email_verification_subject
        """
        A string representing the email verification subject. **NOTE:** - If `email_verification_subject` and `verification_message_template.email_subject` are specified and the values are different, either one is prioritized and updated.
        """
        __props__['emailVerificationSubject'] = email_verification_subject

        if lambda_config and not isinstance(lambda_config, dict):
            raise TypeError('Expected property lambda_config to be a dict')
        __self__.lambda_config = lambda_config
        """
        A container for the AWS Lambda triggers associated with the user pool.
        """
        __props__['lambdaConfig'] = lambda_config

        if mfa_configuration and not isinstance(mfa_configuration, basestring):
            raise TypeError('Expected property mfa_configuration to be a basestring')
        __self__.mfa_configuration = mfa_configuration
        """
        Set to enable multi-factor authentication. Must be one of the following values (ON, OFF, OPTIONAL)
        """
        __props__['mfaConfiguration'] = mfa_configuration

        if name and not isinstance(name, basestring):
            raise TypeError('Expected property name to be a basestring')
        __self__.name = name
        """
        The name of the attribute.
        """
        __props__['name'] = name

        if password_policy and not isinstance(password_policy, dict):
            raise TypeError('Expected property password_policy to be a dict')
        __self__.password_policy = password_policy
        """
        A container for information about the user pool password policy.
        """
        __props__['passwordPolicy'] = password_policy

        if schemas and not isinstance(schemas, list):
            raise TypeError('Expected property schemas to be a list')
        __self__.schemas = schemas
        """
        A container with the schema attributes of a user pool. Maximum of 50 attributes.
        """
        __props__['schemas'] = schemas

        if sms_authentication_message and not isinstance(sms_authentication_message, basestring):
            raise TypeError('Expected property sms_authentication_message to be a basestring')
        __self__.sms_authentication_message = sms_authentication_message
        """
        A string representing the SMS authentication message.
        """
        __props__['smsAuthenticationMessage'] = sms_authentication_message

        if sms_configuration and not isinstance(sms_configuration, dict):
            raise TypeError('Expected property sms_configuration to be a dict')
        __self__.sms_configuration = sms_configuration
        """
        The SMS Configuration.
        """
        __props__['smsConfiguration'] = sms_configuration

        if sms_verification_message and not isinstance(sms_verification_message, basestring):
            raise TypeError('Expected property sms_verification_message to be a basestring')
        __self__.sms_verification_message = sms_verification_message
        """
        A string representing the SMS verification message.
        """
        __props__['smsVerificationMessage'] = sms_verification_message

        if tags and not isinstance(tags, dict):
            raise TypeError('Expected property tags to be a dict')
        __self__.tags = tags
        """
        A mapping of tags to assign to the User Pool.
        """
        __props__['tags'] = tags

        if username_attributes and not isinstance(username_attributes, list):
            raise TypeError('Expected property username_attributes to be a list')
        __self__.username_attributes = username_attributes
        """
        Specifies whether email addresses or phone numbers can be specified as usernames when a user signs up. Conflicts with `alias_attributes`.
        """
        __props__['usernameAttributes'] = username_attributes

        if verification_message_template and not isinstance(verification_message_template, dict):
            raise TypeError('Expected property verification_message_template to be a dict')
        __self__.verification_message_template = verification_message_template
        """
        The verification message templates configuration.
        """
        __props__['verificationMessageTemplate'] = verification_message_template

        __self__.arn = pulumi.runtime.UNKNOWN
        """
        The ARN of the user pool.
        """
        __self__.creation_date = pulumi.runtime.UNKNOWN
        """
        The date the user pool was created.
        """
        __self__.endpoint = pulumi.runtime.UNKNOWN
        """
        The endpoint name of the user pool. Example format: cognito-idp.REGION.amazonaws.com/xxxx_yyyyy
        """
        __self__.last_modified_date = pulumi.runtime.UNKNOWN
        """
        The date the user pool was last modified.
        """

        super(UserPool, __self__).__init__(
            'aws:cognito/userPool:UserPool',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'adminCreateUserConfig' in outs:
            self.admin_create_user_config = outs['adminCreateUserConfig']
        if 'aliasAttributes' in outs:
            self.alias_attributes = outs['aliasAttributes']
        if 'arn' in outs:
            self.arn = outs['arn']
        if 'autoVerifiedAttributes' in outs:
            self.auto_verified_attributes = outs['autoVerifiedAttributes']
        if 'creationDate' in outs:
            self.creation_date = outs['creationDate']
        if 'deviceConfiguration' in outs:
            self.device_configuration = outs['deviceConfiguration']
        if 'emailConfiguration' in outs:
            self.email_configuration = outs['emailConfiguration']
        if 'emailVerificationMessage' in outs:
            self.email_verification_message = outs['emailVerificationMessage']
        if 'emailVerificationSubject' in outs:
            self.email_verification_subject = outs['emailVerificationSubject']
        if 'endpoint' in outs:
            self.endpoint = outs['endpoint']
        if 'lambdaConfig' in outs:
            self.lambda_config = outs['lambdaConfig']
        if 'lastModifiedDate' in outs:
            self.last_modified_date = outs['lastModifiedDate']
        if 'mfaConfiguration' in outs:
            self.mfa_configuration = outs['mfaConfiguration']
        if 'name' in outs:
            self.name = outs['name']
        if 'passwordPolicy' in outs:
            self.password_policy = outs['passwordPolicy']
        if 'schemas' in outs:
            self.schemas = outs['schemas']
        if 'smsAuthenticationMessage' in outs:
            self.sms_authentication_message = outs['smsAuthenticationMessage']
        if 'smsConfiguration' in outs:
            self.sms_configuration = outs['smsConfiguration']
        if 'smsVerificationMessage' in outs:
            self.sms_verification_message = outs['smsVerificationMessage']
        if 'tags' in outs:
            self.tags = outs['tags']
        if 'usernameAttributes' in outs:
            self.username_attributes = outs['usernameAttributes']
        if 'verificationMessageTemplate' in outs:
            self.verification_message_template = outs['verificationMessageTemplate']
