// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package ses

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides an SES receipt rule set resource
type ReceiptRuleSet struct {
	s *pulumi.ResourceState
}

// NewReceiptRuleSet registers a new resource with the given unique name, arguments, and options.
func NewReceiptRuleSet(ctx *pulumi.Context,
	name string, args *ReceiptRuleSetArgs, opts ...pulumi.ResourceOpt) (*ReceiptRuleSet, error) {
	if args == nil || args.RuleSetName == nil {
		return nil, errors.New("missing required argument 'RuleSetName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["ruleSetName"] = nil
	} else {
		inputs["ruleSetName"] = args.RuleSetName
	}
	s, err := ctx.RegisterResource("aws:ses/receiptRuleSet:ReceiptRuleSet", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &ReceiptRuleSet{s: s}, nil
}

// GetReceiptRuleSet gets an existing ReceiptRuleSet resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetReceiptRuleSet(ctx *pulumi.Context,
	name string, id pulumi.ID, state *ReceiptRuleSetState, opts ...pulumi.ResourceOpt) (*ReceiptRuleSet, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["ruleSetName"] = state.RuleSetName
	}
	s, err := ctx.ReadResource("aws:ses/receiptRuleSet:ReceiptRuleSet", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &ReceiptRuleSet{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *ReceiptRuleSet) URN() *pulumi.URNOutput {
	return r.s.URN
}

// ID is this resource's unique identifier assigned by its provider.
func (r *ReceiptRuleSet) ID() *pulumi.IDOutput {
	return r.s.ID
}

// The name of the rule set
func (r *ReceiptRuleSet) RuleSetName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["ruleSetName"])
}

// Input properties used for looking up and filtering ReceiptRuleSet resources.
type ReceiptRuleSetState struct {
	// The name of the rule set
	RuleSetName interface{}
}

// The set of arguments for constructing a ReceiptRuleSet resource.
type ReceiptRuleSetArgs struct {
	// The name of the rule set
	RuleSetName interface{}
}