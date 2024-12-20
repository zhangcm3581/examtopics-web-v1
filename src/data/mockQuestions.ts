import { QuestionGroup } from '../types/question';

export const mockQuestions: QuestionGroup[] = [
  {
    title: "AWS Machine Learning Questions",
    questions: [
      {
        id: "46",
        content: "A company has AWS Glue data processing jobs that are orchestrated by an AWS Glue workflow. The AWS Glue jobs can run on a schedule or can be launched manually. The company is developing pipelines in Amazon SageMaker Pipelines for ML model development. The pipelines will use the output of the AWS Glue jobs during the data processing phase of model development. An ML engineer needs to implement a solution that integrates the AWS Glue jobs with the pipelines.",
        type: "single",
        options: [
          { label: "A", content: "Use AWS Step Functions for orchestration of the pipelines and the AWS Glue jobs." },
          { label: "B", content: "Use processing steps in SageMaker Pipelines. Configure inputs that point to the Amazon Resource Names (ARNs) of the AWS Glue jobs." },
          { label: "C", content: "Use Callback steps in SageMaker Pipelines to start the AWS Glue workflow and to stop the pipelines until the AWS Glue jobs finish running." },
          { label: "D", content: "Use Amazon EventBridge to invoke the pipelines and the AWS Glue jobs in the desired order." }
        ],
        correctAnswer: "C",
        explanation: {
          answer: "The correct answer is C",
          detail: "To integrate AWS Glue jobs with Amazon SageMaker Pipelines for ML model development with the least operational overhead, the recommended solution is to use Callback steps in SageMaker Pipelines.\n1. Callback steps allow for seamless integration with AWS Glue workflows.\n2. It avoids additional service orchestration, minimizing operational complexity.\n3. The pipeline pauses until the AWS Glue jobs complete, ensuring synchronization.\nImplementation Notes: Configure IAM roles, error handling, and CloudWatch monitoring for the integration."
        }
      },
      {
        id: "44",
        content: "An ML engineer is evaluating several ML models and must choose one model to use in production. The cost of false negative predictions by the models is much higher than the cost of false positive predictions.",
        type: "single",
        options: [
          { label: "A", content: "Low precision" },
          { label: "B", content: "High precision" },
          { label: "C", content: "Low recall" },
          { label: "D", content: "High recall" }
        ],
        correctAnswer: "D",
        explanation: {
          answer: "The correct answer is D",
          detail: "When false negatives are more costly, high recall is crucial. Recall measures the proportion of actual positives correctly identified, reducing false negatives.\nReasoning:\n1. Minimizing false negatives aligns with the business requirements.\n2. High recall may increase false positives, which is acceptable in this context.\nImplementation Notes: Use monitoring tools like SageMaker Model Monitor and set thresholds for recall. Reassess cost structures periodically to ensure alignment."
        }
      }
    ]
  }
];