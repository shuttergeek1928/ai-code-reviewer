"use client";
import { useState } from "react";
import type { NextPage } from "next";
import ReactDiffViewer from "react-diff-viewer";

const originalCode = `Dictionary<string, string> heroesAbilities = new Dictionary<string, string>
{
    { "Flash", "Super Speed" },
    { "Green Lantern", "Power Ring" },
    { "Aquaman", "Atlantean " }
};

// Inverting the dictionary using LINQ
var inverted = heroesAbilities.ToDictionary(x => x.Value, x => x.Key);

// Inverting the dictionary using a foreach loop
Dictionary<string, string> inverted2 = new Dictionary<string, string>();
foreach (var item in heroesAbilities)
{
    inverted2[item.Value] = item.Key;
}`;

const newCode = `Dictionary<string, string> heroesAbilities = new Dictionary<string, string>
{
    { "Flash", "Super Speed" },
    { "Green Lantern", "Power Ring" },
    { "Aquaman", "Atlantean Strength" }
};

// Inverting the dictionary using LINQ
var inverted = heroesAbilities.ToDictionary(x => x.Value, x => x.Key);

// Inverting the dictionary using a foreach loop
Dictionary<string, string> inverted2 = new Dictionary<string, string>();
foreach (var item in heroesAbilities)
{
    inverted2[item.Value] = item.Key;
}
`;

const HistoryCard: NextPage<{
  inputCode: string;
  outputCode: string;
  cardId: number;
  activeCardId: number | null;
  toggleComparison: (id: number | null) => void;
}> = ({ inputCode, outputCode, cardId, activeCardId, toggleComparison }) => {
  const isActive = activeCardId === cardId;

  return (
    <div className="p-4">
      <div className="w-[350px] h-[350px] mx-auto bg-white rounded-lg overflow-hidden shadow-lg border border-gray-300">
        <div className="flex flex-col p-4 gap-4">
          <div className="flex items-center justify-between border-b border-gray-200 pb-2">
            <p className="text-gray-700 text-2xl font-bold ">
              Code Review {cardId}
            </p>
            <p className="text-gray-700 text-base">1d ago</p>
          </div>
          <div className="flex flex-col items-center justify-between h-full p-2 gap-2">
            <div className="bg-white w-[97%] h-52 shadow-md rounded-lg p-2 font-light text-justify overflow-y-auto overflow-x-hidden">
              <pre>
                <code className="language-csharp text-wrap">{inputCode}</code>
              </pre>
            </div>
            <div className="flex flex-col items-center justify-between gap-4">
              {!isActive && (
                <button
                  onClick={() => toggleComparison(cardId)}
                  className="text-blue-500 hover:underline"
                >
                  Show Comparison
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {isActive && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg w-3/4 h-3/4 overflow-auto shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Code Comparison</h2>
              <button
                onClick={() => toggleComparison(null)}
                className="text-red-500 text-xl"
              >
                ×
              </button>
            </div>
            <ReactDiffViewer
              oldValue={inputCode}
              newValue={outputCode}
              splitView={true}
              extraLinesSurroundingDiff={Infinity} // Ensures all lines are shown
            />
          </div>
        </div>
      )}
    </div>
  );
};

const ParentComponent = ({
  inputCode,
  outputCode,
  reviewId,
}: {
  inputCode: string;
  outputCode: string;
  reviewId: string;
}) => {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const toggleComparison = (id: number | null) => {
    setActiveCardId(id);
  };

  return (
    <div className="flex flex-wrap gap-4">
      {/* {[1, 2, 3].map((cardId) => (
        <HistoryCard
          inputCode={inputCode}
          outputCode={outputCode}
          key={cardId}
          cardId={cardId}
          activeCardId={activeCardId}
          toggleComparison={toggleComparison}
        />
      ))} */}
      <HistoryCard
        inputCode={inputCode}
        outputCode={outputCode}
        cardId={parseInt(reviewId)}
        activeCardId={activeCardId}
        toggleComparison={toggleComparison}
      />
    </div>
  );
};

export default ParentComponent;
