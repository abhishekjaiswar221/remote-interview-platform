import { LANGUAGE_CONFIG } from "@/data/problems";
import Editor from "@monaco-editor/react";
import { Loader2Icon, PlayIcon } from "lucide-react";

const CodeEditorPanel = ({
  selectedLanguage,
  code,
  isRunning,
  onLanguageChange,
  onCodeChange,
  onRunCode,
}) => {
  const currentLang = LANGUAGE_CONFIG[selectedLanguage];

  return (
    <div className="h-full bg-base-300 flex flex-col border-b border-base-300">
      {/* Header / Toolbar */}
      <div className="flex items-center justify-between px-4 py-3 bg-base-100 border-b border-base-300 shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <img
            src={currentLang.icon}
            alt={currentLang.name}
            className="size-6 rounded-sm"
          />
          <select
            className="select select-sm bg-base-200 border-base-300"
            value={selectedLanguage}
            onChange={onLanguageChange}
          >
            {Object.entries(LANGUAGE_CONFIG).map(([key, lang]) => (
              <option key={key} value={key}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        <button
          className={`btn btn-primary btn-sm gap-2 ${isRunning ? "opacity-80 cursor-not-allowed" : ""}`}
          disabled={isRunning}
          onClick={onRunCode}
        >
          {isRunning ? (
            <>
              <Loader2Icon className="size-4 animate-spin" />
              Running...
            </>
          ) : (
            <>
              <PlayIcon className="size-4" />
              Run Code
            </>
          )}
        </button>
      </div>

      {/* Editor */}
      <div className="flex-1 relative">
        <Editor
          height="100%"
          language={currentLang.monacoLang}
          value={code}
          onChange={onCodeChange}
          theme="vs-dark"
          options={{
            fontSize: 16,
            lineHeight: 22,
            padding: { top: 12 },
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            smoothScrolling: true,
            cursorSmoothCaretAnimation: "on",
            automaticLayout: true,
            minimap: { enabled: false },
            fontFamily: "'Fira Code', monospace",
            fontLigatures: true,
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditorPanel;
