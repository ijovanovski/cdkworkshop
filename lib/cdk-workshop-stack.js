"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdkWorkshopStack = void 0;
const cdk = require("aws-cdk-lib");
const lambda = require("aws-cdk-lib/aws-lambda");
const apigw = require("aws-cdk-lib/aws-apigateway");
const hitcounter_1 = require("./hitcounter");
const cdk_dynamo_table_viewer_1 = require("cdk-dynamo-table-viewer");
class CdkWorkshopStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const hello = new lambda.Function(this, 'HelloHandler', {
            runtime: lambda.Runtime.NODEJS_14_X,
            code: lambda.Code.fromAsset('lambda'),
            handler: 'hello.handler',
        });
        const helloWithCounter = new hitcounter_1.HitCounter(this, 'HelloHitCounter', {
            downstream: hello
        });
        // defines an API Gateway REST API resource backed by our "hello" function.
        const gateway = new apigw.LambdaRestApi(this, 'Endpoint', {
            handler: helloWithCounter.handler
        });
        const tv = new cdk_dynamo_table_viewer_1.TableViewer(this, 'ViewHitCounter', {
            title: 'Hello Hits',
            table: helloWithCounter.table,
            sortBy: '-hits'
        });
        this.hcEndpoint = new cdk.CfnOutput(this, 'GatewayUrl', {
            value: gateway.url
        });
        this.hcViewerUrl = new cdk.CfnOutput(this, 'TableViewerUrl', {
            value: tv.endpoint
        });
    }
}
exports.CdkWorkshopStack = CdkWorkshopStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXdvcmtzaG9wLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrLXdvcmtzaG9wLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFtQztBQUNuQyxpREFBaUQ7QUFDakQsb0RBQW9EO0FBQ3BELDZDQUEwQztBQUUxQyxxRUFBc0Q7QUFHdEQsTUFBYSxnQkFBaUIsU0FBUSxHQUFHLENBQUMsS0FBSztJQUk3QyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQzlELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFO1lBQ3RELE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDbkMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztZQUNyQyxPQUFPLEVBQUUsZUFBZTtTQUN6QixDQUFDLENBQUM7UUFFSCxNQUFNLGdCQUFnQixHQUFHLElBQUksdUJBQVUsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7WUFDL0QsVUFBVSxFQUFFLEtBQUs7U0FDbEIsQ0FBQyxDQUFDO1FBRUgsMkVBQTJFO1FBQzNFLE1BQU0sT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFO1lBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPO1NBQ2xDLENBQUMsQ0FBQztRQUVILE1BQU0sRUFBRSxHQUFHLElBQUkscUNBQVcsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7WUFDakQsS0FBSyxFQUFFLFlBQVk7WUFDbkIsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUs7WUFDN0IsTUFBTSxFQUFFLE9BQU87U0FDaEIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUN0RCxLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUc7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFO1lBQzNELEtBQUssRUFBRSxFQUFFLENBQUMsUUFBUTtTQUNuQixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFwQ0QsNENBb0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtbGFtYmRhJztcbmltcG9ydCAqIGFzIGFwaWd3IGZyb20gJ2F3cy1jZGstbGliL2F3cy1hcGlnYXRld2F5JztcbmltcG9ydCB7IEhpdENvdW50ZXIgfSBmcm9tICcuL2hpdGNvdW50ZXInO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgeyBUYWJsZVZpZXdlciB9IGZyb20gJ2Nkay1keW5hbW8tdGFibGUtdmlld2VyJztcblxuXG5leHBvcnQgY2xhc3MgQ2RrV29ya3Nob3BTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4gIHB1YmxpYyByZWFkb25seSBoY1ZpZXdlclVybDogY2RrLkNmbk91dHB1dDtcbiAgcHVibGljIHJlYWRvbmx5IGhjRW5kcG9pbnQ6IGNkay5DZm5PdXRwdXQ7XG5cbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgY29uc3QgaGVsbG8gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdIZWxsb0hhbmRsZXInLCB7XG4gICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTRfWCxcbiAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldCgnbGFtYmRhJyksXG4gICAgICBoYW5kbGVyOiAnaGVsbG8uaGFuZGxlcicsXG4gICAgfSk7XG5cbiAgICBjb25zdCBoZWxsb1dpdGhDb3VudGVyID0gbmV3IEhpdENvdW50ZXIodGhpcywgJ0hlbGxvSGl0Q291bnRlcicsIHtcbiAgICAgIGRvd25zdHJlYW06IGhlbGxvXG4gICAgfSk7XG5cbiAgICAvLyBkZWZpbmVzIGFuIEFQSSBHYXRld2F5IFJFU1QgQVBJIHJlc291cmNlIGJhY2tlZCBieSBvdXIgXCJoZWxsb1wiIGZ1bmN0aW9uLlxuICAgIGNvbnN0IGdhdGV3YXkgPSBuZXcgYXBpZ3cuTGFtYmRhUmVzdEFwaSh0aGlzLCAnRW5kcG9pbnQnLCB7XG4gICAgICBoYW5kbGVyOiBoZWxsb1dpdGhDb3VudGVyLmhhbmRsZXJcbiAgICB9KTtcblxuICAgIGNvbnN0IHR2ID0gbmV3IFRhYmxlVmlld2VyKHRoaXMsICdWaWV3SGl0Q291bnRlcicsIHtcbiAgICAgIHRpdGxlOiAnSGVsbG8gSGl0cycsXG4gICAgICB0YWJsZTogaGVsbG9XaXRoQ291bnRlci50YWJsZSxcbiAgICAgIHNvcnRCeTogJy1oaXRzJ1xuICAgIH0pO1xuXG4gICAgdGhpcy5oY0VuZHBvaW50ID0gbmV3IGNkay5DZm5PdXRwdXQodGhpcywgJ0dhdGV3YXlVcmwnLCB7XG4gICAgICB2YWx1ZTogZ2F0ZXdheS51cmxcbiAgICB9KTtcblxuICAgIHRoaXMuaGNWaWV3ZXJVcmwgPSBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCAnVGFibGVWaWV3ZXJVcmwnLCB7XG4gICAgICB2YWx1ZTogdHYuZW5kcG9pbnRcbiAgICB9KTtcbiAgfVxufVxuIl19