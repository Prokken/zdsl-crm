// Define the TypeScript interface
interface Credit {
  title: string;
  remaining: number;
  buttonText: string;
}

function Dashboard() {
  const user = "Md. Ashik";

  const credits = [
    {
      title: "Masking SMS Credits",
      remaining: 2594,
      buttonText: "Top Up",
    },
    {
      title: "Non-Masking SMS Credits",
      remaining: 208,
      buttonText: "Top Up",
    },
  ];

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex justify-between">
        <h1 className="text-lg font-medium">
          Hello, {user} <span className="text-2xl">👋</span>
        </h1>

        <div></div>
      </div>

      <div className="flex border-y w-fit divide-x divide-gray-200 py-4">
        {credits.map((credit: Credit, index: number) => (
          <div
            key={index}
            className="rounded-lg even:pl-6 odd:pr-6 flex flex-col gap-y-2 justify-between"
          >
            <h2 className="text-sm font-medium text-gray-600">
              {credit.title}
            </h2>
            <div className="flex gap-x-8 justify-between items-center">
              <div className="flex flex-col">
                <p className="text-xl font-bold text-gray-800">
                  {credit.remaining}
                </p>
                <p className="text-xs text-gray-500 mt-1 mb-4">Remaining</p>
              </div>
              <button className="px-4 py-2 bg-blue-500 text-white text-xs rounded hover:bg-blue-600">
                {credit.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
