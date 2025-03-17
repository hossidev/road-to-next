import { LucideLoaderCircle } from "lucide-react";

const Spinner = () => {
  return (
    <div className="flex flex-1 items-center justify-center self-center">
      <LucideLoaderCircle className="w-16 h-16 animate-spin" />
    </div>
  );
};

export { Spinner };
