export const examTitles = {
  'aws-saa-c03': {
    en: {
      title: 'AWS Certified Solutions Architect - Associate (SAA-C03)',
      vendor: 'Amazon',
      lastUpdated: 'Jan. 15, 2024'
    },
    zh: {
      title: 'AWS 认证解决方案架构师 - 助理级 (SAA-C03)',
      vendor: '亚马逊',
      lastUpdated: '2024年1月15日'
    }
  }
} as const

export function getExamInfo(examId: string, language: 'en' | 'zh') {
  // Remove language suffix from exam ID
  const baseExamId = examId.replace(/-[a-z]{2}$/, '')
  return examTitles[baseExamId]?.[language]
}