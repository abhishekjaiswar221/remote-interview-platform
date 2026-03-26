import { VideoIcon } from "lucide-react";

const FeatureCard = ({ title, description }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <div className="bg-primary/10 mb-4 flex size-16 items-center justify-center rounded-2xl">
          <VideoIcon className="text-primary size-8" />
        </div>
        <h3 className="card-title">{title}</h3>
        <p className="text-base-content/70">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
