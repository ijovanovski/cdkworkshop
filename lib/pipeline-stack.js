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
        const deploy = new pipeline_stage_1.MyOutputStage(this, "Deploy");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZWxpbmUtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwaXBlbGluZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBbUM7QUFFbkMscURBQXNGO0FBQ3RGLHFEQUFpRDtBQUVqRCxNQUFhLHFCQUFzQixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQ25ELFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDL0QsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsTUFBTSxRQUFRLEdBQUcsSUFBSSx3QkFBWSxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUU7WUFDdkQsWUFBWSxFQUFFLGNBQWM7WUFDNUIsS0FBSyxFQUFFLElBQUkseUJBQWEsQ0FBQyxXQUFXLEVBQUU7Z0JBQ3JDLEtBQUssRUFBRSw4QkFBa0IsQ0FBQyxVQUFVLENBQ25DLHlCQUF5QixFQUN6QixNQUFNLEVBQ047b0JBQ0MsYUFBYSxFQUNaLHFHQUFxRztpQkFDdEcsQ0FDRDtnQkFDRCxlQUFlLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDM0MsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLGVBQWUsRUFBRSxlQUFlLENBQUM7YUFDdEQsQ0FBQztTQUNJLENBQUMsQ0FBQztRQUVDLHdFQUF3RTtRQUNsRixNQUFNLE1BQU0sR0FBRyxJQUFJLDhCQUFhLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTNDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFHOUIsQ0FBQztDQUVKO0FBNUJELHNEQTRCQztBQUlELHNDQUFzQztBQUN0QywwQ0FBMEM7QUFDMUMsNERBQTREO0FBRzVELHlEQUF5RDtBQUV6RCwwRUFBMEU7QUFDMUUsbUNBQW1DO0FBR25DLHdFQUF3RTtBQUN4RSxpRUFBaUU7QUFDakUsaURBQWlEO0FBQ2pELGtCQUFrQjtBQUVsQiw2QkFBNkI7QUFHN0IsU0FBUztBQUdULEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xyXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcclxuaW1wb3J0IHtDb2RlQnVpbGRTdGVwLCBDb2RlUGlwZWxpbmUsIENvZGVQaXBlbGluZVNvdXJjZX0gZnJvbSBcImF3cy1jZGstbGliL3BpcGVsaW5lc1wiO1xyXG5pbXBvcnQgeyBNeU91dHB1dFN0YWdlIH0gZnJvbSAnLi9waXBlbGluZS1zdGFnZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgV29ya3Nob3BQaXBlbGluZVN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcclxuXHRjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XHJcblx0XHRzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcclxuXHJcblx0XHRjb25zdCBwaXBlbGluZSA9IG5ldyBDb2RlUGlwZWxpbmUodGhpcywgXCJCbG9nUGlwZWxpbmVcIiwge1xyXG5cdFx0XHRwaXBlbGluZU5hbWU6IFwiQmxvZ1BpcGVsaW5lXCIsXHJcblx0XHRcdHN5bnRoOiBuZXcgQ29kZUJ1aWxkU3RlcChcIlN5bnRoU3RlcFwiLCB7XHJcblx0XHRcdFx0aW5wdXQ6IENvZGVQaXBlbGluZVNvdXJjZS5jb25uZWN0aW9uKFxyXG5cdFx0XHRcdFx0XCJpam92YW5vdnNraS9jZGt3b3Jrc2hvcFwiLFxyXG5cdFx0XHRcdFx0XCJtYWluXCIsXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbm5lY3Rpb25Bcm46XHJcblx0XHRcdFx0XHRcdFx0XCJhcm46YXdzOmNvZGVzdGFyLWNvbm5lY3Rpb25zOmV1LXdlc3QtMTo3NzcxMjQ2NjkyNTU6Y29ubmVjdGlvbi8zNzE0YzMwMy0xYmI5LTQ5ZTAtODNmNS02NTgyMzdmYzM1M2ZcIlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCksXHJcblx0XHRcdFx0aW5zdGFsbENvbW1hbmRzOiBbXCJucG0gaW5zdGFsbCAtZyBhd3MtY2RrXCJdLFxyXG5cdFx0XHRcdGNvbW1hbmRzOiBbXCJucG0gY2lcIiwgXCJucG0gcnVuIGJ1aWxkXCIsIFwibnB4IGNkayBzeW50aFwiXVxyXG5cdFx0XHR9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAvLyoqKioqKioqKioqSW5zdGFudGlhdGUgdGhlIHN0YWdlIGFuZCBhZGQgaXQgdG8gdGhlIHBpcGVsaW5lKioqKioqKioqKipcclxuXHRcdGNvbnN0IGRlcGxveSA9IG5ldyBNeU91dHB1dFN0YWdlKHRoaXMsIFwiRGVwbG95XCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHBpcGVsaW5lLmFkZFN0YWdlKGRlcGxveSk7XHJcbiAgICBcclxuXHRcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuXHJcbi8vIGltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XHJcbi8vIGltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xyXG4vLyBpbXBvcnQgKiBhcyBjb2RlY29tbWl0IGZyb20gJ2F3cy1jZGstbGliL2F3cy1jb2RlY29tbWl0JztcclxuXHJcblxyXG4vLyBleHBvcnQgY2xhc3MgV29ya3Nob3BQaXBlbGluZVN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcclxuXHJcbi8vICAgICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XHJcbi8vICAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XHJcbiAgICAgICAgXHJcblxyXG4vLyAgICAgICAgICAgICAgLy8gQ3JlYXRlcyBhIENvZGVDb21taXQgcmVwb3NpdG9yeSBjYWxsZWQgJ1dvcmtzaG9wUmVwbydcclxuLy8gICAgICAgICAgICAgIG5ldyBjb2RlY29tbWl0LlJlcG9zaXRvcnkodGhpcywgJ1dvcmtzaG9wUmVwbycsIHtcclxuLy8gICAgICAgICAgICAgICAgIHJlcG9zaXRvcnlOYW1lOiBcIldvcmtzaG9wUmVwb1wiXHJcbi8vICAgICAgICAgICAgIH0pO1xyXG5cclxuLy8gLy8gUGlwZWxpbmUgY29kZSBnb2VzIGhlcmVcclxuICAgIFxyXG5cclxuLy8gICAgICB9XHJcblxyXG5cclxuLy8gIH0iXX0=