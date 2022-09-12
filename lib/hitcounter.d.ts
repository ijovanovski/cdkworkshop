import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';
export interface HitCounterProps {
    /** the function for which we want to count url hits **/
    downstream: lambda.IFunction;
}
export declare class HitCounter extends Construct {
    /** allows accessing the counter function */
    readonly handler: lambda.Function;
    /** the hit counter table */
    readonly table: dynamodb.Table;
    constructor(scope: Construct, id: string, props: HitCounterProps);
}
