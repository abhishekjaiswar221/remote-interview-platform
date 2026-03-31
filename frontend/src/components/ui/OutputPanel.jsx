import { CheckCircle2, Terminal, XCircle } from "lucide-react";

const OutputPanel = ({ output, isRunning }) => {
  const getStatus = () => {
    if (isRunning) return { label: "Running...", color: "text-warning" };
    if (output === null)
      return { label: "Idle", color: "text-base-content/50" };
    return output.success
      ? { label: "Success", color: "text-success" }
      : { label: "Error", color: "text-error" };
  };

  const status = getStatus();

  return (
    <div className="h-full bg-base-100 flex flex-col border-l border-base-300">
      <div className="px-4 py-2 bg-base-200 border-b border-base-300 flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold text-sm">
          <Terminal className="size-4" />
          Output
        </div>

        <span className={`text-xs font-medium ${status.color}`}>
          {status.label}
        </span>
      </div>

      <div className="flex-1 overflow-auto p-4 font-mono text-sm">
        {/* Idle State */}
        {output === null && !isRunning && (
          <div className="flex flex-col items-center justify-center h-full text-base-content/50 text-sm">
            <Terminal className="size-6 mb-2 opacity-60" />
            Run your code to see the output here
          </div>
        )}

        {/* Running State */}
        {isRunning && (
          <div className="text-warning animate-pulse">
            ⏳ Executing your code...
          </div>
        )}

        {/* Success */}
        {output?.success && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-success font-medium">
              <CheckCircle2 className="size-4" />
              Execution Successful
            </div>
            <pre className="bg-base-200 p-3 rounded-lg whitespace-pre-wrap">
              {output.output || "No output"}
            </pre>
          </div>
        )}

        {/* Error */}
        {output && !output.success && (
          <div className="space-y-3">
            {/* stdout (if any) */}
            {output.output && (
              <div>
                <p className="text-xs text-base-content/60 mb-1">Output</p>
                <pre className="bg-base-200 p-3 rounded-lg whitespace-pre-wrap">
                  {output.output}
                </pre>
              </div>
            )}

            {/* stderr */}
            <div>
              <div className="flex items-center gap-2 text-error font-medium mb-2">
                <XCircle className="size-4" />
                Error
              </div>

              <pre className="bg-error/10 text-error p-3 rounded-lg whitespace-pre-wrap leading-relaxed">
                {output.error}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OutputPanel;
