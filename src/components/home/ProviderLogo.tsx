import React from 'react';

interface ProviderLogoProps {
  logo: string;
  title: string;
}

export const ProviderLogo: React.FC<ProviderLogoProps> = ({ logo, title }) => {
  return (
    <div className="flex justify-center mb-6">
      <img src={logo} alt={title} className="h-16 object-contain" />
    </div>
  );
};