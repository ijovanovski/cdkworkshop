import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {CodeBuildStep, CodePipeline, CodePipelineSource} from "aws-cdk-lib/pipelines";
import { MyOutputStage } from './pipeline-stage';

export class WorkshopPipelineStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props);

		const pipeline = new CodePipeline(this, "BlogPipeline", {
			pipelineName: "BlogPipeline",
			synth: new CodeBuildStep("SynthStep", {
				input: CodePipelineSource.connection(
					"ijovanovski/cdkworkshop",
					"main",
					{
						connectionArn:
							"arn:aws:codestar-connections:eu-west-1:777124669255:connection/3714c303-1bb9-49e0-83f5-658237fc353f"
					}
				),
				installCommands: ["npm install -g aws-cdk"],
				commands: ["npm ci", "npm run build", "npx cdk synth"]
			})
        });
        
            //***********Instantiate the stage and add it to the pipeline***********
		
		    const deploy = new MyOutputStage(this, 'Deploy');
            pipeline.addStage(deploy);
    
	
    }
    
}



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