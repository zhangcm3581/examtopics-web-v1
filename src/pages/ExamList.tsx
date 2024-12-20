import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { CertificationProvider } from '../components/home/CertificationProvider';
import { providers } from '../data/providers';
import { PageHeader } from '../components/common/PageHeader';
import { ViewAllLink } from '../components/common/ViewAllLink';

export const ExamList: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-content mx-auto px-2 sm:px-6 lg:px-8 py-3 sm:py-8">
        <PageHeader 
          title="TOP EXAMS & CERTIFICATION PROVIDERS"
          subtitle="ExamTopics is not affiliated or certified by any certification provider."
        />

        <ViewAllLink />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-6 lg:gap-8">
          {providers.map((provider) => (
            <CertificationProvider
              key={provider.id}
              title={provider.title}
              logo={provider.logo}
              allExamsLink={provider.allExamsLink}
              examLinks={provider.examLinks}
            />
          ))}
        </div>
      </div>
    </div>
  );
};