import React from "react";
import { Helmet } from "react-helmet-async";

interface PageContainerProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const PageContainer = ({
  children,
  title,
  description,
  keywords,
}: PageContainerProps) => {
  return (
    <>
      <Helmet>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
        {keywords && <meta name="keywords" content={keywords} />}
      </Helmet>
      <main className="max-w-8xl mx-auto p-4 md:p-6 lg:p-8 min-h-96 border border-blue-500">
        {children}
      </main>
    </>
  );
};

export { PageContainer };
