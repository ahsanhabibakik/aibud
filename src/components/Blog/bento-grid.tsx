import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[32rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col rounded-2xl border border-neutral-800/50 bg-neutral-900/20 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:border-neutral-600/50 hover:bg-neutral-800/30 overflow-hidden h-full",
        className,
      )}
    >
      {header && (
        <div className="flex-shrink-0" style={{ height: '45%' }}>
          {header}
        </div>
      )}
      <div className="flex-1 flex flex-col p-4" style={{ minHeight: '55%' }}>
        <div className="flex-1 space-y-3">
          {icon}
          {title && (
            <div className="font-sans font-bold text-neutral-100">
              {title}
            </div>
          )}
          {description && (
            <div className="font-sans text-sm font-normal text-neutral-400 flex-1">
              {description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
