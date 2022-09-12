"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkshopPipelineStack = void 0;
const cdk = require("aws-cdk-lib");
const pipelines_1 = require("aws-cdk-lib/pipelines");
const pipeline_stage_1 = require("./pipeline-stage");
class WorkshopPipelineStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const pipeline = new pipelines_1.CodePipeline(this, "BlogPipeline", {
            pipelineName: "BlogPipeline",
            synth: new pipelines_1.CodeBuildStep("SynthStep", {
                input: pipelines_1.CodePipelineSource.connection("ijovanovski/cdkworkshop", "main", {
                    connectionArn: "arn:aws:codestar-connections:eu-west-1:777124669255:connection/3714c303-1bb9-49e0-83f5-658237fc353f"
                }),
                installCommands: ["npm install -g aws-cdk"],
                commands: ["npm ci", "npm run build", "npx cdk synth"]
            })
        });
        //***********Instantiate the stage and add it to the pipeline***********
        const deploy = new pipeline_stage_1.MyOutputStage(this, 'Deploy');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZWxpbmUtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwaXBlbGluZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBbUM7QUFFbkMscURBQXNGO0FBQ3RGLHFEQUFpRDtBQUNqRCxNQUFhLHFCQUFzQixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQ25ELFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDL0QsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsTUFBTSxRQUFRLEdBQUcsSUFBSSx3QkFBWSxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUU7WUFDdkQsWUFBWSxFQUFFLGNBQWM7WUFDNUIsS0FBSyxFQUFFLElBQUkseUJBQWEsQ0FBQyxXQUFXLEVBQUU7Z0JBQ3JDLEtBQUssRUFBRSw4QkFBa0IsQ0FBQyxVQUFVLENBQ25DLHlCQUF5QixFQUN6QixNQUFNLEVBQ047b0JBQ0MsYUFBYSxFQUNaLHFHQUFxRztpQkFDdEcsQ0FDRDtnQkFDRCxlQUFlLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDM0MsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLGVBQWUsRUFBRSxlQUFlLENBQUM7YUFDdEQsQ0FBQztTQUNJLENBQUMsQ0FBQztRQUVDLHdFQUF3RTtRQUU5RSxNQUFNLE1BQU0sR0FBRyxJQUFJLDhCQUFhLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFHbEMsQ0FBQztDQUVKO0FBNUJELHNEQTRCQztBQUlELHNDQUFzQztBQUN0QywwQ0FBMEM7QUFDMUMsNERBQTREO0FBRzVELHlEQUF5RDtBQUV6RCwwRUFBMEU7QUFDMUUsbUNBQW1DO0FBR25DLHdFQUF3RTtBQUN4RSxpRUFBaUU7QUFDakUsaURBQWlEO0FBQ2pELGtCQUFrQjtBQUVsQiw2QkFBNkI7QUFHN0IsU0FBUztBQUdULEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQge0NvZGVCdWlsZFN0ZXAsIENvZGVQaXBlbGluZSwgQ29kZVBpcGVsaW5lU291cmNlfSBmcm9tIFwiYXdzLWNkay1saWIvcGlwZWxpbmVzXCI7XG5pbXBvcnQgeyBNeU91dHB1dFN0YWdlIH0gZnJvbSAnLi9waXBlbGluZS1zdGFnZSc7XG5leHBvcnQgY2xhc3MgV29ya3Nob3BQaXBlbGluZVN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcblx0Y29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuXHRcdHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG5cdFx0Y29uc3QgcGlwZWxpbmUgPSBuZXcgQ29kZVBpcGVsaW5lKHRoaXMsIFwiQmxvZ1BpcGVsaW5lXCIsIHtcblx0XHRcdHBpcGVsaW5lTmFtZTogXCJCbG9nUGlwZWxpbmVcIixcblx0XHRcdHN5bnRoOiBuZXcgQ29kZUJ1aWxkU3RlcChcIlN5bnRoU3RlcFwiLCB7XG5cdFx0XHRcdGlucHV0OiBDb2RlUGlwZWxpbmVTb3VyY2UuY29ubmVjdGlvbihcblx0XHRcdFx0XHRcImlqb3Zhbm92c2tpL2Nka3dvcmtzaG9wXCIsXG5cdFx0XHRcdFx0XCJtYWluXCIsXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0Y29ubmVjdGlvbkFybjpcblx0XHRcdFx0XHRcdFx0XCJhcm46YXdzOmNvZGVzdGFyLWNvbm5lY3Rpb25zOmV1LXdlc3QtMTo3NzcxMjQ2NjkyNTU6Y29ubmVjdGlvbi8zNzE0YzMwMy0xYmI5LTQ5ZTAtODNmNS02NTgyMzdmYzM1M2ZcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0KSxcblx0XHRcdFx0aW5zdGFsbENvbW1hbmRzOiBbXCJucG0gaW5zdGFsbCAtZyBhd3MtY2RrXCJdLFxuXHRcdFx0XHRjb21tYW5kczogW1wibnBtIGNpXCIsIFwibnBtIHJ1biBidWlsZFwiLCBcIm5weCBjZGsgc3ludGhcIl1cblx0XHRcdH0pXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vKioqKioqKioqKipJbnN0YW50aWF0ZSB0aGUgc3RhZ2UgYW5kIGFkZCBpdCB0byB0aGUgcGlwZWxpbmUqKioqKioqKioqKlxuXHRcdFxuXHRcdCAgICBjb25zdCBkZXBsb3kgPSBuZXcgTXlPdXRwdXRTdGFnZSh0aGlzLCAnRGVwbG95Jyk7XG4gICAgICAgICAgICBwaXBlbGluZS5hZGRTdGFnZShkZXBsb3kpO1xuICAgIFxuXHRcbiAgICB9XG4gICAgXG59XG5cblxuXG4vLyBpbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuLy8gaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG4vLyBpbXBvcnQgKiBhcyBjb2RlY29tbWl0IGZyb20gJ2F3cy1jZGstbGliL2F3cy1jb2RlY29tbWl0JztcblxuXG4vLyBleHBvcnQgY2xhc3MgV29ya3Nob3BQaXBlbGluZVN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcblxuLy8gICAgIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbi8vICAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG4gICAgICAgIFxuXG4vLyAgICAgICAgICAgICAgLy8gQ3JlYXRlcyBhIENvZGVDb21taXQgcmVwb3NpdG9yeSBjYWxsZWQgJ1dvcmtzaG9wUmVwbydcbi8vICAgICAgICAgICAgICBuZXcgY29kZWNvbW1pdC5SZXBvc2l0b3J5KHRoaXMsICdXb3Jrc2hvcFJlcG8nLCB7XG4vLyAgICAgICAgICAgICAgICAgcmVwb3NpdG9yeU5hbWU6IFwiV29ya3Nob3BSZXBvXCJcbi8vICAgICAgICAgICAgIH0pO1xuXG4vLyAvLyBQaXBlbGluZSBjb2RlIGdvZXMgaGVyZVxuICAgIFxuXG4vLyAgICAgIH1cblxuXG4vLyAgfSJdfQ==