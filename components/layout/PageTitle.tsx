interface PageTitleProps {
  lightText: string;
  accentText: string;
  description?: string;
}

export function PageTitle({ lightText, accentText, description }: PageTitleProps) {
  return (
    <div className="mb-10">
      <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight">
        <span className="page-title-light">{lightText} </span>
        <span className="page-title-accent">{accentText}</span>
      </h1>
      {description && (
        <p className="mt-4 text-text-body text-base lg:text-lg leading-relaxed max-w-3xl">
          {description}
        </p>
      )}
    </div>
  );
}
