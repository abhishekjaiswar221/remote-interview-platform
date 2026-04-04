import { PROBLEMS } from "@/data/problems";
import { useState } from "react";
import ProblemDescription from "./ProblemDescription";
import CodeEditorPanel from "./CodeEditorPanel";
import OutputPanel from "./OutputPanel";

const MobileLayout = ({
  currentProblem,
  currentProblemId,
  handleProblemChange,
  selectedLanguage,
  code,
  isRunning,
  output,
  handleLanguageChange,
  setCode,
  handleRunCode,
}) => {
  const [tab, setTab] = useState("problem");

  return (
    <div className="flex flex-col h-full">
      <div className="flex border-b border-base-300 bg-base-100 sticky top-0 z-10">
        {["problem", "code", "output"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-3 text-sm font-medium capitalize transition ${
              tab === t
                ? "text-primary border-b-2 border-primary"
                : "text-base-content/60"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto">
        {tab === "problem" && (
          <ProblemDescription
            problem={currentProblem}
            currentProblemId={currentProblemId}
            onProblemChange={handleProblemChange}
            allProblems={Object.values(PROBLEMS)}
          />
        )}

        {tab === "code" && (
          <CodeEditorPanel
            selectedLanguage={selectedLanguage}
            code={code}
            isRunning={isRunning}
            onLanguageChange={handleLanguageChange}
            onCodeChange={setCode}
            onRunCode={handleRunCode}
          />
        )}

        {tab === "output" && (
          <OutputPanel output={output} isRunning={isRunning} />
        )}
      </div>
    </div>
  );
};

export default MobileLayout;
