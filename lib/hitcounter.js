"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HitCounter = void 0;
const lambda = require("aws-cdk-lib/aws-lambda");
const dynamodb = require("aws-cdk-lib/aws-dynamodb");
const constructs_1 = require("constructs");
class HitCounter extends constructs_1.Construct {
    constructor(scope, id, props) {
        super(scope, id);
        const table = new dynamodb.Table(this, "Hits", {
            partitionKey: {
                name: "path",
                type: dynamodb.AttributeType.STRING
            }
        });
        this.table = table;
        this.handler = new lambda.Function(this, 'HitCounterHandler', {
            runtime: lambda.Runtime.NODEJS_14_X,
            handler: 'hitcounter.handler',
            code: lambda.Code.fromAsset('lambda'),
            environment: {
                DOWNSTREAM_FUNCTION_NAME: props.downstream.functionName,
                HITS_TABLE_NAME: table.tableName
            }
        });
        // grant the lambda role read/write permissions to our table
        table.grantReadWriteData(this.handler);
        // grant the lambda role invoke permissions to the downstream function
        props.downstream.grantInvoke(this.handler);
    }
}
exports.HitCounter = HitCounter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGl0Y291bnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhpdGNvdW50ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsaURBQWlEO0FBQ2pELHFEQUFxRDtBQUNyRCwyQ0FBdUM7QUFPdkMsTUFBYSxVQUFXLFNBQVEsc0JBQVM7SUFPdkMsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUM5RCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sS0FBSyxHQUFHLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFO1lBQzdDLFlBQVksRUFBRTtnQkFDWixJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNO2FBQ3BDO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLG1CQUFtQixFQUFFO1lBQzVELE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDbkMsT0FBTyxFQUFFLG9CQUFvQjtZQUM3QixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1lBQ3JDLFdBQVcsRUFBRTtnQkFDWCx3QkFBd0IsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFlBQVk7Z0JBQ3ZELGVBQWUsRUFBRSxLQUFLLENBQUMsU0FBUzthQUNqQztTQUNGLENBQUMsQ0FBQztRQUVILDREQUE0RDtRQUM1RCxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXZDLHNFQUFzRTtRQUN0RSxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUNGO0FBbENELGdDQWtDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XHJcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtbGFtYmRhJztcclxuaW1wb3J0ICogYXMgZHluYW1vZGIgZnJvbSAnYXdzLWNkay1saWIvYXdzLWR5bmFtb2RiJztcclxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEhpdENvdW50ZXJQcm9wcyB7XHJcbiAgLyoqIHRoZSBmdW5jdGlvbiBmb3Igd2hpY2ggd2Ugd2FudCB0byBjb3VudCB1cmwgaGl0cyAqKi9cclxuICBkb3duc3RyZWFtOiBsYW1iZGEuSUZ1bmN0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSGl0Q291bnRlciBleHRlbmRzIENvbnN0cnVjdCB7XHJcbiAgLyoqIGFsbG93cyBhY2Nlc3NpbmcgdGhlIGNvdW50ZXIgZnVuY3Rpb24gKi9cclxuICBwdWJsaWMgcmVhZG9ubHkgaGFuZGxlcjogbGFtYmRhLkZ1bmN0aW9uO1xyXG5cclxuICAvKiogdGhlIGhpdCBjb3VudGVyIHRhYmxlICovXHJcbiAgcHVibGljIHJlYWRvbmx5IHRhYmxlOiBkeW5hbW9kYi5UYWJsZTtcclxuXHJcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEhpdENvdW50ZXJQcm9wcykge1xyXG4gICAgc3VwZXIoc2NvcGUsIGlkKTtcclxuXHJcbiAgICBjb25zdCB0YWJsZSA9IG5ldyBkeW5hbW9kYi5UYWJsZSh0aGlzLCBcIkhpdHNcIiwge1xyXG4gICAgICBwYXJ0aXRpb25LZXk6IHtcclxuICAgICAgICBuYW1lOiBcInBhdGhcIixcclxuICAgICAgICB0eXBlOiBkeW5hbW9kYi5BdHRyaWJ1dGVUeXBlLlNUUklOR1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMudGFibGUgPSB0YWJsZTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZXIgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdIaXRDb3VudGVySGFuZGxlcicsIHtcclxuICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE0X1gsXHJcbiAgICAgIGhhbmRsZXI6ICdoaXRjb3VudGVyLmhhbmRsZXInLFxyXG4gICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJ2xhbWJkYScpLFxyXG4gICAgICBlbnZpcm9ubWVudDoge1xyXG4gICAgICAgIERPV05TVFJFQU1fRlVOQ1RJT05fTkFNRTogcHJvcHMuZG93bnN0cmVhbS5mdW5jdGlvbk5hbWUsXHJcbiAgICAgICAgSElUU19UQUJMRV9OQU1FOiB0YWJsZS50YWJsZU5hbWVcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZ3JhbnQgdGhlIGxhbWJkYSByb2xlIHJlYWQvd3JpdGUgcGVybWlzc2lvbnMgdG8gb3VyIHRhYmxlXHJcbiAgICB0YWJsZS5ncmFudFJlYWRXcml0ZURhdGEodGhpcy5oYW5kbGVyKTtcclxuXHJcbiAgICAvLyBncmFudCB0aGUgbGFtYmRhIHJvbGUgaW52b2tlIHBlcm1pc3Npb25zIHRvIHRoZSBkb3duc3RyZWFtIGZ1bmN0aW9uXHJcbiAgICBwcm9wcy5kb3duc3RyZWFtLmdyYW50SW52b2tlKHRoaXMuaGFuZGxlcik7XHJcbiAgfVxyXG59Il19