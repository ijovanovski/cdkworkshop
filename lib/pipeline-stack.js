"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkshopPipelineStack = void 0;
const cdk = require("aws-cdk-lib");
const pipelines_1 = require("aws-cdk-lib/pipelines");
const pipline_stage_1 = require("./pipline-stage");
class WorkshopPipelineStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const pipeline = new pipelines_1.CodePipeline(this, "BlogPipeline", {
            pipelineName: "BlogPipeline",
            synth: new pipelines_1.CodeBuildStep("SynthStep", {
                input: pipelines_1.CodePipelineSource.connection("ijovanovski/cdkworkshop", "master", {
                    connectionArn: "arn:aws:codestar-connections:eu-west-1:777124669255:connection/3714c303-1bb9-49e0-83f5-658237fc353f"
                }),
                installCommands: ["npm install -g aws-cdk"],
                commands: ["npm ci", "npm run build", "npx cdk synth"]
            })
        });
        //***********Instantiate the stage and add it to the pipeline***********
        const deploy = new pipline_stage_1.MyOutputStage(this, 'Deploy');
        pipeline.addStage(deploy);
    }
}
exports.WorkshopPipelineStack = WorkshopPipelineStack;
// import * as cdk from 'aws-cdk-lib';
// import { Construct } from 'constructs';
// import * as codecommit from 'aws-cdk-lib/aws-codecommit';
// export class WorkshopPipelineStack extends cdk.Stack {
//     constructor(scope: Construct, id: string, props?: cdk.StackProps) {
//         super(scope, id, props);
//              // Creates a CodeCommit repository called 'WorkshopRepo'
//              new codecommit.Repository(this, 'WorkshopRepo', {
//                 repositoryName: "WorkshopRepo"
//             });
// // Pipeline code goes here
//      }
//  }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZWxpbmUtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwaXBlbGluZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBbUM7QUFFbkMscURBQXNGO0FBQ3RGLG1EQUFnRDtBQUVoRCxNQUFhLHFCQUFzQixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQ25ELFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDL0QsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsTUFBTSxRQUFRLEdBQUcsSUFBSSx3QkFBWSxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUU7WUFDdkQsWUFBWSxFQUFFLGNBQWM7WUFDNUIsS0FBSyxFQUFFLElBQUkseUJBQWEsQ0FBQyxXQUFXLEVBQUU7Z0JBQ3JDLEtBQUssRUFBRSw4QkFBa0IsQ0FBQyxVQUFVLENBQ25DLHlCQUF5QixFQUN6QixRQUFRLEVBQ1I7b0JBQ0MsYUFBYSxFQUNaLHFHQUFxRztpQkFDdEcsQ0FDRDtnQkFDRCxlQUFlLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDM0MsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLGVBQWUsRUFBRSxlQUFlLENBQUM7YUFDdEQsQ0FBQztTQUNJLENBQUMsQ0FBQztRQUVDLHdFQUF3RTtRQUU5RSxNQUFNLE1BQU0sR0FBRyxJQUFJLDZCQUFhLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFHbEMsQ0FBQztDQUVKO0FBNUJELHNEQTRCQztBQUlELHNDQUFzQztBQUN0QywwQ0FBMEM7QUFDMUMsNERBQTREO0FBRzVELHlEQUF5RDtBQUV6RCwwRUFBMEU7QUFDMUUsbUNBQW1DO0FBR25DLHdFQUF3RTtBQUN4RSxpRUFBaUU7QUFDakUsaURBQWlEO0FBQ2pELGtCQUFrQjtBQUVsQiw2QkFBNkI7QUFHN0IsU0FBUztBQUdULEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQge0NvZGVCdWlsZFN0ZXAsIENvZGVQaXBlbGluZSwgQ29kZVBpcGVsaW5lU291cmNlfSBmcm9tIFwiYXdzLWNkay1saWIvcGlwZWxpbmVzXCI7XG5pbXBvcnQgeyBNeU91dHB1dFN0YWdlIH0gZnJvbSAnLi9waXBsaW5lLXN0YWdlJztcblxuZXhwb3J0IGNsYXNzIFdvcmtzaG9wUGlwZWxpbmVTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG5cdGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcblx0XHRzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuXHRcdGNvbnN0IHBpcGVsaW5lID0gbmV3IENvZGVQaXBlbGluZSh0aGlzLCBcIkJsb2dQaXBlbGluZVwiLCB7XG5cdFx0XHRwaXBlbGluZU5hbWU6IFwiQmxvZ1BpcGVsaW5lXCIsXG5cdFx0XHRzeW50aDogbmV3IENvZGVCdWlsZFN0ZXAoXCJTeW50aFN0ZXBcIiwge1xuXHRcdFx0XHRpbnB1dDogQ29kZVBpcGVsaW5lU291cmNlLmNvbm5lY3Rpb24oXG5cdFx0XHRcdFx0XCJpam92YW5vdnNraS9jZGt3b3Jrc2hvcFwiLFxuXHRcdFx0XHRcdFwibWFzdGVyXCIsXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0Y29ubmVjdGlvbkFybjpcblx0XHRcdFx0XHRcdFx0XCJhcm46YXdzOmNvZGVzdGFyLWNvbm5lY3Rpb25zOmV1LXdlc3QtMTo3NzcxMjQ2NjkyNTU6Y29ubmVjdGlvbi8zNzE0YzMwMy0xYmI5LTQ5ZTAtODNmNS02NTgyMzdmYzM1M2ZcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0KSxcblx0XHRcdFx0aW5zdGFsbENvbW1hbmRzOiBbXCJucG0gaW5zdGFsbCAtZyBhd3MtY2RrXCJdLFxuXHRcdFx0XHRjb21tYW5kczogW1wibnBtIGNpXCIsIFwibnBtIHJ1biBidWlsZFwiLCBcIm5weCBjZGsgc3ludGhcIl1cblx0XHRcdH0pXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vKioqKioqKioqKipJbnN0YW50aWF0ZSB0aGUgc3RhZ2UgYW5kIGFkZCBpdCB0byB0aGUgcGlwZWxpbmUqKioqKioqKioqKlxuXHRcdFxuXHRcdCAgICBjb25zdCBkZXBsb3kgPSBuZXcgTXlPdXRwdXRTdGFnZSh0aGlzLCAnRGVwbG95Jyk7XG4gICAgICAgICAgICBwaXBlbGluZS5hZGRTdGFnZShkZXBsb3kpO1xuICAgIFxuXHRcbiAgICB9XG4gICAgXG59XG5cblxuXG4vLyBpbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuLy8gaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG4vLyBpbXBvcnQgKiBhcyBjb2RlY29tbWl0IGZyb20gJ2F3cy1jZGstbGliL2F3cy1jb2RlY29tbWl0JztcblxuXG4vLyBleHBvcnQgY2xhc3MgV29ya3Nob3BQaXBlbGluZVN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcblxuLy8gICAgIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbi8vICAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG4gICAgICAgIFxuXG4vLyAgICAgICAgICAgICAgLy8gQ3JlYXRlcyBhIENvZGVDb21taXQgcmVwb3NpdG9yeSBjYWxsZWQgJ1dvcmtzaG9wUmVwbydcbi8vICAgICAgICAgICAgICBuZXcgY29kZWNvbW1pdC5SZXBvc2l0b3J5KHRoaXMsICdXb3Jrc2hvcFJlcG8nLCB7XG4vLyAgICAgICAgICAgICAgICAgcmVwb3NpdG9yeU5hbWU6IFwiV29ya3Nob3BSZXBvXCJcbi8vICAgICAgICAgICAgIH0pO1xuXG4vLyAvLyBQaXBlbGluZSBjb2RlIGdvZXMgaGVyZVxuICAgIFxuXG4vLyAgICAgIH1cblxuXG4vLyAgfSJdfQ==