import { TrophyIcon, UsersIcon, TrendingUpIcon } from "lucide-react";

const StatsCards = ({ activeSessionsCount, recentSessionsCount }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-6">
      <div className="relative group rounded-2xl border border-primary/20 bg-gradient-to-br from-base-100 to-base-200 p-5 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-primary/10">
              <UsersIcon className="w-6 h-6 text-primary" />
            </div>

            <span className="badge badge-primary gap-1">
              <span className="animate-pulse w-2 h-2 bg-white rounded-full" />
              Live
            </span>
          </div>
          <div className="text-3xl sm:text-4xl font-black tracking-tight">
            {activeSessionsCount}
          </div>

          <div className="text-sm text-base-content/60 mt-1">
            Active Sessions
          </div>

          <div className="flex items-center gap-2 text-xs text-base-content/50 mt-3">
            <TrendingUpIcon className="w-4 h-4" />
            Real-time activity
          </div>
        </div>
      </div>

      <div className="relative group rounded-2xl border border-secondary/20 bg-gradient-to-br from-base-100 to-base-200 p-5 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
        <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-secondary/10">
              <TrophyIcon className="w-6 h-6 text-secondary" />
            </div>

            <span className="badge badge-ghost">All Time</span>
          </div>

          <div className="text-3xl sm:text-4xl font-black tracking-tight">
            {recentSessionsCount}
          </div>

          <div className="text-sm text-base-content/60 mt-1">
            Total Sessions
          </div>

          <div className="flex items-center gap-2 text-xs text-base-content/50 mt-3">
            <TrendingUpIcon className="w-4 h-4" />
            Your progress
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
