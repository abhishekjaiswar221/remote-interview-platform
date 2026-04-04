import { getDifficultyBadgeClass } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";
import { Clock, Code2, Loader, Trophy, Users } from "lucide-react";

const RecentSessions = ({ sessions, isLoading }) => {
  return (
    <div className="rounded-2xl border border-accent/20 bg-base-100 shadow-sm flex flex-col overflow-hidden">
      <div className="flex items-center gap-3 px-5 py-4 border-b border-base-300 bg-base-100/80 backdrop-blur">
        <div className="p-2 rounded-xl bg-gradient-to-br from-accent to-secondary">
          <Clock className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-lg sm:text-xl font-bold">Your Past Sessions</h2>
      </div>

      <div className="p-4">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <Loader className="w-10 h-10 animate-spin text-primary" />
            <p className="text-sm text-base-content/60">Loading sessions...</p>
          </div>
        ) : sessions.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[420px] overflow-y-auto pr-1">
            {sessions.map((session) => {
              const isActive = session.status === "active";

              return (
                <div
                  key={session._id}
                  className={`group relative rounded-xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                    isActive
                      ? "bg-success/10 border-success/30 hover:border-success/60"
                      : "bg-base-200/60 border-base-300 hover:border-primary/30"
                  }`}
                >
                  {isActive && (
                    <div className="absolute top-3 right-3">
                      <span className="badge badge-success gap-1 text-xs">
                        <span className="w-1.5 h-1.5 bg-success rounded-full animate-ping" />
                        ACTIVE
                      </span>
                    </div>
                  )}

                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                        isActive
                          ? "bg-gradient-to-br from-success to-success/70"
                          : "bg-gradient-to-br from-primary to-secondary"
                      }`}
                    >
                      <Code2 className="w-5 h-5 text-white" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm truncate">
                        {session.problem}
                      </h3>

                      <span
                        className={`badge badge-xs mt-1 ${getDifficultyBadgeClass(
                          session.difficulty,
                        )}`}
                      >
                        {session.difficulty}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs text-base-content/70 mb-3">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5" />
                      <span>
                        {formatDistanceToNow(new Date(session.createdAt), {
                          addSuffix: true,
                        })}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5" />
                      <span>
                        {session.participant
                          ? "2 participants"
                          : "1 participant"}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-base-300 text-[11px] text-base-content/50">
                    <span className="uppercase font-medium">Completed</span>
                    <span>
                      {new Date(session.updatedAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-20">
            <div className="w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
              <Trophy className="w-8 h-8 text-accent/50" />
            </div>

            <p className="text-base font-semibold text-base-content/70">
              No sessions yet
            </p>

            <p className="text-sm text-base-content/50 mt-1">
              Start your coding journey today 🚀
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentSessions;
