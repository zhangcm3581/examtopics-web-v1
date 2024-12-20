import { ExamQuestion } from '@/types/question';

export const zhQuestions: ExamQuestion[] = [
  {
    id: "46",
    language: "zh",
    content: "一家公司使用AWS Glue工作流程来编排AWS Glue数据处理作业。这些AWS Glue作业可以按计划运行，也可以手动启动。该公司正在Amazon SageMaker Pipelines中开发用于ML模型开发的管道。这些管道将在模型开发的数据处理阶段使用AWS Glue作业的输出。ML工程师需要实现一个将AWS Glue作业与管道集成的解决方案。",
    type: "single",
    options: [
      { label: "A", content: "使用AWS Step Functions来编排管道和AWS Glue作业。" },
      { label: "B", content: "在SageMaker Pipelines中使用处理步骤。配置指向AWS Glue作业的Amazon资源名称（ARN）的输入。" },
      { label: "C", content: "在SageMaker Pipelines中使用回调步骤来启动AWS Glue工作流程，并在AWS Glue作业完成运行之前停止管道。" },
      { label: "D", content: "使用Amazon EventBridge按所需顺序调用管道和AWS Glue作业。" }
    ],
    correctAnswer: "C",
    explanation: {
      answer: "正确答案是C",
      detail: "要以最少的运营开销将AWS Glue作业与Amazon SageMaker Pipelines集成用于ML模型开发，建议的解决方案是在SageMaker Pipelines中使用回调步骤。\n1. 回调步骤允许与AWS Glue工作流程无缝集成。\n2. 避免额外的服务编排，最大限度地减少运营复杂性。\n3. 管道暂停直到AWS Glue作业完成，确保同步。\n实施注意事项：配置IAM角色，错误处理和CloudWatch监控集成。"
    }
  }
];