// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

import {Tags} from "../index";

/**
 * Provides a DMS (Data Migration Service) endpoint resource. DMS endpoints can be created, updated, deleted, and imported.
 * 
 * ~> **Note:** All arguments including the password will be stored in the raw state as plain-text.
 * [Read more about sensitive data in state](https://www.terraform.io/docs/state/sensitive-data.html).
 */
export class Endpoint extends pulumi.CustomResource {
    /**
     * Get an existing Endpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EndpointState): Endpoint {
        return new Endpoint(name, <any>state, { id });
    }

    /**
     * The Amazon Resource Name (ARN) for the certificate.
     */
    public readonly certificateArn: pulumi.Output<string>;
    /**
     * The name of the endpoint database.
     */
    public readonly databaseName: pulumi.Output<string | undefined>;
    /**
     * The Amazon Resource Name (ARN) for the endpoint.
     */
    public /*out*/ readonly endpointArn: pulumi.Output<string>;
    /**
     * The database endpoint identifier.
     */
    public readonly endpointId: pulumi.Output<string>;
    /**
     * The type of endpoint. Can be one of `source | target`.
     */
    public readonly endpointType: pulumi.Output<string>;
    /**
     * The type of engine for the endpoint. Can be one of `mysql | oracle | postgres | mariadb | aurora | redshift | sybase | sqlserver | dynamodb | mongodb | s3 | azuredb`.
     */
    public readonly engineName: pulumi.Output<string>;
    /**
     * Additional attributes associated with the connection. For available attributes see [Using Extra Connection Attributes with AWS Database Migration Service](http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Introduction.ConnectionAttributes.html).
     */
    public readonly extraConnectionAttributes: pulumi.Output<string>;
    /**
     * The Amazon Resource Name (ARN) for the KMS key that will be used to encrypt the connection parameters. If you do not specify a value for `kms_key_arn`, then AWS DMS will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS region.
     */
    public readonly kmsKeyArn: pulumi.Output<string>;
    /**
     * Settings for the source MongoDB endpoint. Available settings are `auth_type` (default: `PASSWORD`), `auth_mechanism` (default: `DEFAULT`), `nesting_level` (default: `NONE`), `extract_doc_id` (default: `false`), `docs_to_investigate` (default: `1000`) and `auth_source` (default: `admin`). For more details, see [Using MongoDB as a Source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MongoDB.html).
     */
    public readonly mongodbSettings: pulumi.Output<{ authMechanism?: string, authSource?: string, authType?: string, docsToInvestigate?: string, extractDocId?: string, nestingLevel?: string } | undefined>;
    /**
     * The password to be used to login to the endpoint database.
     */
    public readonly password: pulumi.Output<string | undefined>;
    /**
     * The port used by the endpoint database.
     */
    public readonly port: pulumi.Output<number | undefined>;
    /**
     * Settings for the target S3 endpoint. Available settings are `service_access_role_arn`, `external_table_definition`, `csv_row_delimiter` (default: `\\n`), `csv_delimiter` (default: `,`), `bucket_folder`, `bucket_name` and `compression_type` (default: `NONE`). For more details, see [Using Amazon S3 as a Target for AWS Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html).
     */
    public readonly s3Settings: pulumi.Output<{ bucketFolder?: string, bucketName?: string, compressionType?: string, csvDelimiter?: string, csvRowDelimiter?: string, externalTableDefinition?: string, serviceAccessRoleArn?: string } | undefined>;
    /**
     * The host name of the server.
     */
    public readonly serverName: pulumi.Output<string | undefined>;
    /**
     * The Amazon Resource Name (ARN) used by the service access IAM role for dynamodb endpoints.
     */
    public readonly serviceAccessRole: pulumi.Output<string | undefined>;
    /**
     * The SSL mode to use for the connection. Can be one of `none | require | verify-ca | verify-full`
     */
    public readonly sslMode: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags: pulumi.Output<Tags | undefined>;
    /**
     * The user name to be used to login to the endpoint database.
     */
    public readonly username: pulumi.Output<string | undefined>;

    /**
     * Create a Endpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EndpointArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EndpointArgs | EndpointState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: EndpointState = argsOrState as EndpointState | undefined;
            inputs["certificateArn"] = state ? state.certificateArn : undefined;
            inputs["databaseName"] = state ? state.databaseName : undefined;
            inputs["endpointArn"] = state ? state.endpointArn : undefined;
            inputs["endpointId"] = state ? state.endpointId : undefined;
            inputs["endpointType"] = state ? state.endpointType : undefined;
            inputs["engineName"] = state ? state.engineName : undefined;
            inputs["extraConnectionAttributes"] = state ? state.extraConnectionAttributes : undefined;
            inputs["kmsKeyArn"] = state ? state.kmsKeyArn : undefined;
            inputs["mongodbSettings"] = state ? state.mongodbSettings : undefined;
            inputs["password"] = state ? state.password : undefined;
            inputs["port"] = state ? state.port : undefined;
            inputs["s3Settings"] = state ? state.s3Settings : undefined;
            inputs["serverName"] = state ? state.serverName : undefined;
            inputs["serviceAccessRole"] = state ? state.serviceAccessRole : undefined;
            inputs["sslMode"] = state ? state.sslMode : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as EndpointArgs | undefined;
            if (!args || args.endpointId === undefined) {
                throw new Error("Missing required property 'endpointId'");
            }
            if (!args || args.endpointType === undefined) {
                throw new Error("Missing required property 'endpointType'");
            }
            if (!args || args.engineName === undefined) {
                throw new Error("Missing required property 'engineName'");
            }
            inputs["certificateArn"] = args ? args.certificateArn : undefined;
            inputs["databaseName"] = args ? args.databaseName : undefined;
            inputs["endpointId"] = args ? args.endpointId : undefined;
            inputs["endpointType"] = args ? args.endpointType : undefined;
            inputs["engineName"] = args ? args.engineName : undefined;
            inputs["extraConnectionAttributes"] = args ? args.extraConnectionAttributes : undefined;
            inputs["kmsKeyArn"] = args ? args.kmsKeyArn : undefined;
            inputs["mongodbSettings"] = args ? args.mongodbSettings : undefined;
            inputs["password"] = args ? args.password : undefined;
            inputs["port"] = args ? args.port : undefined;
            inputs["s3Settings"] = args ? args.s3Settings : undefined;
            inputs["serverName"] = args ? args.serverName : undefined;
            inputs["serviceAccessRole"] = args ? args.serviceAccessRole : undefined;
            inputs["sslMode"] = args ? args.sslMode : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["username"] = args ? args.username : undefined;
            inputs["endpointArn"] = undefined /*out*/;
        }
        super("aws:dms/endpoint:Endpoint", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Endpoint resources.
 */
export interface EndpointState {
    /**
     * The Amazon Resource Name (ARN) for the certificate.
     */
    readonly certificateArn?: pulumi.Input<string>;
    /**
     * The name of the endpoint database.
     */
    readonly databaseName?: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) for the endpoint.
     */
    readonly endpointArn?: pulumi.Input<string>;
    /**
     * The database endpoint identifier.
     */
    readonly endpointId?: pulumi.Input<string>;
    /**
     * The type of endpoint. Can be one of `source | target`.
     */
    readonly endpointType?: pulumi.Input<string>;
    /**
     * The type of engine for the endpoint. Can be one of `mysql | oracle | postgres | mariadb | aurora | redshift | sybase | sqlserver | dynamodb | mongodb | s3 | azuredb`.
     */
    readonly engineName?: pulumi.Input<string>;
    /**
     * Additional attributes associated with the connection. For available attributes see [Using Extra Connection Attributes with AWS Database Migration Service](http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Introduction.ConnectionAttributes.html).
     */
    readonly extraConnectionAttributes?: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) for the KMS key that will be used to encrypt the connection parameters. If you do not specify a value for `kms_key_arn`, then AWS DMS will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS region.
     */
    readonly kmsKeyArn?: pulumi.Input<string>;
    /**
     * Settings for the source MongoDB endpoint. Available settings are `auth_type` (default: `PASSWORD`), `auth_mechanism` (default: `DEFAULT`), `nesting_level` (default: `NONE`), `extract_doc_id` (default: `false`), `docs_to_investigate` (default: `1000`) and `auth_source` (default: `admin`). For more details, see [Using MongoDB as a Source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MongoDB.html).
     */
    readonly mongodbSettings?: pulumi.Input<{ authMechanism?: pulumi.Input<string>, authSource?: pulumi.Input<string>, authType?: pulumi.Input<string>, docsToInvestigate?: pulumi.Input<string>, extractDocId?: pulumi.Input<string>, nestingLevel?: pulumi.Input<string> }>;
    /**
     * The password to be used to login to the endpoint database.
     */
    readonly password?: pulumi.Input<string>;
    /**
     * The port used by the endpoint database.
     */
    readonly port?: pulumi.Input<number>;
    /**
     * Settings for the target S3 endpoint. Available settings are `service_access_role_arn`, `external_table_definition`, `csv_row_delimiter` (default: `\\n`), `csv_delimiter` (default: `,`), `bucket_folder`, `bucket_name` and `compression_type` (default: `NONE`). For more details, see [Using Amazon S3 as a Target for AWS Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html).
     */
    readonly s3Settings?: pulumi.Input<{ bucketFolder?: pulumi.Input<string>, bucketName?: pulumi.Input<string>, compressionType?: pulumi.Input<string>, csvDelimiter?: pulumi.Input<string>, csvRowDelimiter?: pulumi.Input<string>, externalTableDefinition?: pulumi.Input<string>, serviceAccessRoleArn?: pulumi.Input<string> }>;
    /**
     * The host name of the server.
     */
    readonly serverName?: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) used by the service access IAM role for dynamodb endpoints.
     */
    readonly serviceAccessRole?: pulumi.Input<string>;
    /**
     * The SSL mode to use for the connection. Can be one of `none | require | verify-ca | verify-full`
     */
    readonly sslMode?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<Tags>;
    /**
     * The user name to be used to login to the endpoint database.
     */
    readonly username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Endpoint resource.
 */
export interface EndpointArgs {
    /**
     * The Amazon Resource Name (ARN) for the certificate.
     */
    readonly certificateArn?: pulumi.Input<string>;
    /**
     * The name of the endpoint database.
     */
    readonly databaseName?: pulumi.Input<string>;
    /**
     * The database endpoint identifier.
     */
    readonly endpointId: pulumi.Input<string>;
    /**
     * The type of endpoint. Can be one of `source | target`.
     */
    readonly endpointType: pulumi.Input<string>;
    /**
     * The type of engine for the endpoint. Can be one of `mysql | oracle | postgres | mariadb | aurora | redshift | sybase | sqlserver | dynamodb | mongodb | s3 | azuredb`.
     */
    readonly engineName: pulumi.Input<string>;
    /**
     * Additional attributes associated with the connection. For available attributes see [Using Extra Connection Attributes with AWS Database Migration Service](http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Introduction.ConnectionAttributes.html).
     */
    readonly extraConnectionAttributes?: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) for the KMS key that will be used to encrypt the connection parameters. If you do not specify a value for `kms_key_arn`, then AWS DMS will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS region.
     */
    readonly kmsKeyArn?: pulumi.Input<string>;
    /**
     * Settings for the source MongoDB endpoint. Available settings are `auth_type` (default: `PASSWORD`), `auth_mechanism` (default: `DEFAULT`), `nesting_level` (default: `NONE`), `extract_doc_id` (default: `false`), `docs_to_investigate` (default: `1000`) and `auth_source` (default: `admin`). For more details, see [Using MongoDB as a Source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MongoDB.html).
     */
    readonly mongodbSettings?: pulumi.Input<{ authMechanism?: pulumi.Input<string>, authSource?: pulumi.Input<string>, authType?: pulumi.Input<string>, docsToInvestigate?: pulumi.Input<string>, extractDocId?: pulumi.Input<string>, nestingLevel?: pulumi.Input<string> }>;
    /**
     * The password to be used to login to the endpoint database.
     */
    readonly password?: pulumi.Input<string>;
    /**
     * The port used by the endpoint database.
     */
    readonly port?: pulumi.Input<number>;
    /**
     * Settings for the target S3 endpoint. Available settings are `service_access_role_arn`, `external_table_definition`, `csv_row_delimiter` (default: `\\n`), `csv_delimiter` (default: `,`), `bucket_folder`, `bucket_name` and `compression_type` (default: `NONE`). For more details, see [Using Amazon S3 as a Target for AWS Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html).
     */
    readonly s3Settings?: pulumi.Input<{ bucketFolder?: pulumi.Input<string>, bucketName?: pulumi.Input<string>, compressionType?: pulumi.Input<string>, csvDelimiter?: pulumi.Input<string>, csvRowDelimiter?: pulumi.Input<string>, externalTableDefinition?: pulumi.Input<string>, serviceAccessRoleArn?: pulumi.Input<string> }>;
    /**
     * The host name of the server.
     */
    readonly serverName?: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) used by the service access IAM role for dynamodb endpoints.
     */
    readonly serviceAccessRole?: pulumi.Input<string>;
    /**
     * The SSL mode to use for the connection. Can be one of `none | require | verify-ca | verify-full`
     */
    readonly sslMode?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<Tags>;
    /**
     * The user name to be used to login to the endpoint database.
     */
    readonly username?: pulumi.Input<string>;
}
