import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";

const FeaturePill = ({ text, className }) => {
  return (
    <div className={cn("badge badge-lg badge-outline", className)}>
      <CheckIcon className="text-success size-4" />
      {text}
    </div>
  );
};

export default FeaturePill;
