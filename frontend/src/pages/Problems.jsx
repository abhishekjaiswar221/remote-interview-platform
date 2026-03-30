import { PROBLEMS } from "@/data/problems";
import { getDifficultyBadgeClass } from "@/lib/utils";
import { ChevronRightIcon, Code2Icon } from "lucide-react";
import { Link } from "react-router";

const Problems = () => {
  const problems = Object.values(PROBLEMS || {});

  // Empty State
  if (!problems.length) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <Code2Icon className="text-base-content/40 mb-4 size-12" />
        <h2 className="text-xl font-semibold">No Problems Found</h2>
        <p className="text-base-content/60">
          Looks like there are no problems available right now.
        </p>
      </div>
    );
  }

  const easy = problems.filter((p) => p.difficulty === "Easy").length;
  const medium = problems.filter((p) => p.difficulty === "Medium").length;
  const hard = problems.filter((p) => p.difficulty === "Hard").length;

  return (
    <div className="min-h-screen bg-base-200">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Practice Problems</h1>
          <p className="text-base-content/70">
            Sharpen your coding skills with curated challenges
          </p>
        </div>

        {/* Search Bar */}
        {/* <div className="mb-6">
          <input
            type="text"
            placeholder="Search problems..."
            className="input input-bordered w-full"
            // disabled
          />
        </div> */}

        {/* Problems List */}
        <div className="space-y-4">
          {problems.map(({ id, title, difficulty, category, description }) => (
            <Link
              key={id}
              to={`/app/problem/${id}`}
              className="card bg-base-100 transition-all duration-200 hover:scale-[1.01] hover:shadow-xl"
            >
              <div className="card-body">
                <div className="flex items-center justify-between gap-4">
                  {/* Left */}
                  <div className="flex flex-1 gap-4">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
                      <Code2Icon className="text-primary size-6" />
                    </div>

                    <div className="flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <h2 className="text-lg font-bold md:text-xl">
                          {title}
                        </h2>
                        <span
                          className={`badge ${getDifficultyBadgeClass(difficulty)}`}
                        >
                          {difficulty}
                        </span>
                      </div>

                      <p className="text-xs text-base-content/60 md:text-sm">
                        {category}
                      </p>

                      <p className="mt-2 line-clamp-2 text-sm text-base-content/80">
                        {description?.text}
                      </p>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="hidden items-center gap-2 text-primary md:flex">
                    <span className="font-medium">Solve</span>
                    <ChevronRightIcon className="size-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 card bg-base-100 shadow-lg">
          <div className="card-body">
            <div className="stats stats-vertical lg:stats-horizontal text-center">
              <div className="stat">
                <div className="stat-title">Total</div>
                <div className="stat-value text-primary">{problems.length}</div>
              </div>

              <div className="stat">
                <div className="stat-title">Easy</div>
                <div className="stat-value text-success">{easy}</div>
              </div>

              <div className="stat">
                <div className="stat-title">Medium</div>
                <div className="stat-value text-warning">{medium}</div>
              </div>

              <div className="stat">
                <div className="stat-title">Hard</div>
                <div className="stat-value text-error">{hard}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problems;
