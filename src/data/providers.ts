import { Provider } from '../types/exam';

export const providers: Provider[] = [
  {
    id: 'amazon',
    title: 'Amazon',
    logo: '/images/amazon-logo.png',
    allExamsLink: '/amazon-exams',
    examLinks: [
      {
        id: 'aws-saa-c03',
        title: 'AWS Certified Solutions Architect - Associate (SAA-C03)',
      },
      {
        id: 'aws-dva-c02',
        title: 'AWS Certified Developer - Associate (DVA-C02)',
      },
      {
        id: 'aws-sap-c02',
        title: 'AWS Certified Solutions Architect - Professional (SAP-C02)',
      },
    ],
  },
  {
    id: 'cisco',
    title: 'Cisco',
    logo: '/images/cisco-logo.png',
    allExamsLink: '/cisco-exams',
    examLinks: [
      {
        id: 'ccna-200-301',
        title: '200-301: Cisco Certified Network Associate (CCNA)',
      },
      {
        id: 'devnet-200-901',
        title: '200-901: DevNet Associate (DEVASC)',
      },
      {
        id: 'encor-350-401',
        title: '350-401: Implementing Cisco Enterprise Network Core Technologies',
      },
    ],
  },
];