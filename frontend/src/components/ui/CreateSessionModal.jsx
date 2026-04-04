import { PROBLEMS } from "@/data/problems";
import { getDifficultyBadgeClass } from "@/lib/utils";
import { Code2Icon, LoaderIcon, PlusIcon, SparklesIcon } from "lucide-react";

const CreateSessionModal = ({
  isOpen,
  onClose,
  roomConfig,
  setRoomConfig,
  onCreateRoom,
  isCreating,
}) => {
  const problems = Object.values(PROBLEMS);

  if (!isOpen) return null;

  const selectedProblem = problems.find((p) => p.title === roomConfig.problem);

  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-xl rounded-2xl p-0 overflow-hidden bg-base-100 border border-base-300 shadow-xl">
        <div className="px-6 py-5 flex items-center gap-3 bg-base-100/80 backdrop-blur">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
            <SparklesIcon className="w-5 h-5 text-white" />
          </div>

          <div>
            <h3 className="font-bold text-xl">Create New Session</h3>
            <p className="text-sm text-base-content/60">
              Start a collaborative coding session
            </p>
          </div>
        </div>

        <div className="px-6 py-6 space-y-6">
          {/* Problem Selection */}
          <div className="space-y-2">
            <label className="flex items-center justify-between">
              <span className="font-semibold">Select Problem</span>
              <span className="text-xs text-error">*</span>
            </label>

            <select
              className="select w-full bg-base-200 border border-base-300 focus:ring-2 focus:ring-primary transition-all"
              value={roomConfig.problem}
              onChange={(e) => {
                const selected = problems.find(
                  (p) => p.title === e.target.value,
                );

                setRoomConfig({
                  difficulty: selected.difficulty,
                  problem: e.target.value,
                });
              }}
            >
              <option value="" disabled>
                Choose a coding problem...
              </option>

              {problems.map((problem) => (
                <option key={problem.id} value={problem.title}>
                  {problem.title} ({problem.difficulty})
                </option>
              ))}
            </select>
          </div>

          {selectedProblem && (
            <div className="p-4 rounded-xl border border-base-300 bg-base-200/60 flex items-start gap-3 transition-all">
              <Code2Icon className="size-5 mt-1 text-primary" />

              <div className="flex-1">
                <p className="font-semibold">{selectedProblem.title}</p>

                <div className="flex items-center gap-2 mt-1">
                  <span
                    className={`badge ${getDifficultyBadgeClass(
                      selectedProblem.difficulty,
                    )}`}
                  >
                    {selectedProblem.difficulty}
                  </span>

                  <span className="text-sm text-base-content/60">
                    1-on-1 session
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="px-6 py-4 flex flex-col sm:flex-row gap-3 sm:justify-end">
          <button className="btn btn-ghost w-full sm:w-auto" onClick={onClose}>
            Cancel
          </button>

          <button
            className={`btn gap-2 w-full sm:w-auto ${
              isCreating ? "bg-primary/70" : "btn-primary"
            }`}
            onClick={onCreateRoom}
            disabled={isCreating || !roomConfig.problem}
          >
            {isCreating ? (
              <LoaderIcon className="size-5 animate-spin" />
            ) : (
              <PlusIcon className="size-5" />
            )}

            {isCreating ? "Creating..." : "Create Session"}
          </button>
        </div>
      </div>

      <div className="modal-backdrop bg-black/30" onClick={onClose}></div>
    </div>
  );
};

export default CreateSessionModal;
