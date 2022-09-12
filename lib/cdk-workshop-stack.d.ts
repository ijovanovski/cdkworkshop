import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
export declare class CdkWorkshopStack extends cdk.Stack {
    readonly hcViewerUrl: cdk.CfnOutput;
    readonly hcEndpoint: cdk.CfnOutput;
    constructor(scope: Construct, id: string, props?: cdk.StackProps);
}
