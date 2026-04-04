import { getDifficultyBadgeClass } from "@/lib/utils";
import {
  ArrowRightIcon,
  Code2Icon,
  CrownIcon,
  LoaderIcon,
  SparklesIcon,
  UsersIcon,
  ZapIcon,
} from "lucide-react";
import { Link } from "react-router";

const ActiveSessions = ({ sessions, isLoading, isUserInSession }) => {
  return (
    <div className="h-[326px] flex flex-col rounded-2xl border border-primary/20 bg-base-100 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-base-300 bg-base-100/80 backdrop-blur sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-sm">
            <ZapIcon className="size-5 text-white" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold">Live Sessions</h2>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-75 animate-ping" />
            <span className="relative inline-flex size-2 rounded-full bg-success" />
          </span>
          <span className="font-medium text-success">
            {sessions.length} active
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <LoaderIcon className="size-10 animate-spin text-primary" />
            <p className="text-sm text-base-content/60">
              Fetching live sessions...
            </p>
          </div>
        ) : sessions.length > 0 ? (
          sessions.map((session) => {
            const isFull = session.participant && !isUserInSession(session);

            return (
              <div
                key={session._id}
                className="group relative rounded-xl border border-base-300 bg-base-200/60 hover:bg-base-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4">
                  <div className="flex items-start sm:items-center gap-3 flex-1 min-w-0">
                    <div className="relative size-11 sm:size-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                      <Code2Icon className="size-5 sm:size-6 text-white" />
                      <div className="absolute -top-1 -right-1 size-3 bg-success rounded-full border-2 border-base-100" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-semibold text-sm sm:text-base truncate max-w-[180px] sm:max-w-none">
                          {session.problem}
                        </h3>

                        <span
                          className={`badge badge-xs ${getDifficultyBadgeClass(
                            session.difficulty,
                          )}`}
                        >
                          {session.difficulty}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 text-xs text-base-content/70">
                        <div className="flex items-center gap-1">
                          <CrownIcon className="size-3.5" />
                          <span className="truncate max-w-[80px]">
                            {session.host?.name}
                          </span>
                        </div>

                        <div className="flex items-center gap-1">
                          <UsersIcon className="size-3.5" />
                          <span>{session.participant ? "2/2" : "1/2"}</span>
                        </div>

                        <span
                          className={`badge badge-xs ${
                            isFull ? "badge-error" : "badge-success"
                          }`}
                        >
                          {isFull ? "FULL" : "OPEN"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full sm:w-auto">
                    {isFull ? (
                      <button className="btn btn-disabled btn-sm w-full sm:w-auto">
                        Full
                      </button>
                    ) : (
                      <Link
                        to={`/session/${session._id}`}
                        className="btn btn-primary btn-sm w-full sm:w-auto flex items-center justify-center gap-1.5 transition-transform sm:group-hover:scale-105"
                      >
                        {isUserInSession(session) ? "Rejoin" : "Join"}
                        <ArrowRightIcon className="size-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-20">
            <div className="w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <SparklesIcon className="w-8 h-8 text-primary/50" />
            </div>

            <p className="text-base font-semibold text-base-content/70">
              No active sessions
            </p>

            <p className="text-sm text-base-content/50 mt-1">
              Be the first to create one 🚀
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActiveSessions;
