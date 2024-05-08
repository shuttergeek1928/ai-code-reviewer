import type { NextPage } from "next";

const code = `Dictionary<string, string> heroesAbilities = new Dictionary<string, string>
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
}`

const HistoryCard: NextPage = () => {
  return (
    <>
      <div className="">
        <div className="w-[270px] h-[350px] mx-auto bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
          <div className="flex flex-col p-2 h-full gap-2">
            <div className="flex h-24 items-center justify-between border-b-2 border-gray-400">
              <p className="text-gray-700 text-2xl font-bold ">Code Review 1</p>
              <p className="text-gray-700 text-base">1d ago</p>
            </div>
            {/* FLEX */}
            <div className="flex flex-col items-center justify-between h-full p-2 gap-2">
              <div className="bg-white w-[97%] h-52 shadow-md rounded-lg p-2 font-light text-justify overflow-y-auto overflow-x-hidden">
              <pre><code className="language-csharp text-wrap">{code}</code></pre>
                
              </div>
              <div className="w-full left-6 relative">
                <p className="text-gray-700 text-base">Issues: 10</p>
                <p className="text-gray-700 text-base">Suggestions: 5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryCard;
