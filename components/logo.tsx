import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

function Logo({ wrap = false }: { wrap?: boolean }) {
  const containerClasses = cn(
    "inline-flex items-center sm:min-w-[9ch] group/logo text-foreground",
    wrap ? "flex-col text-xl leading-5" : "text-2xl sm:text-4xl leading-7"
  );

  const foxClasses = cn(
    "font-thin uppercase transition-all group-hover/logo:font-black leading-none"
  );

  const bearClasses = cn(
    "font-black uppercase transition-all group-hover/logo:font-thin leading-none"
  );

  const plusIconClasses = cn(
    "-m-1 text-primary transition-transform group-hover/logo:rotate-90",
    wrap ? "size-6" : "size-6 sm:size-9"
  );

  const inlineBlockClasses = wrap ? "inline-block" : "hidden sm:inline-block";

  return (
    <div className={containerClasses}>
      <span className="flex items-center">
        <span className={foxClasses}>
          F<span className={inlineBlockClasses}>ox</span>
        </span>
        <span>
          <Plus className={plusIconClasses} />
        </span>
      </span>
      <span className={bearClasses}>
        B<span className={inlineBlockClasses}>ear</span>
      </span>
    </div>
  );
}

export default Logo;
