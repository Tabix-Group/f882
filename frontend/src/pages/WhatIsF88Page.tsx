const WhatIsF88Page: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-100">
      <div className="max-w-2xl w-full rounded-3xl shadow-2xl bg-white/90 p-4 md:p-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-700 tracking-wide mb-2">
          WHAT IS F88?
        </h1>
        <div className="w-20 h-1 bg-blue-300 rounded mx-auto mb-6" />
        <h2 className="text-xl md:text-2xl text-center text-gray-600 font-medium mb-6">
          A path of personal growth and transformation, with{" "}
          <span className="font-bold">FORTITUDE</span> as the central axis.
        </h2>
        <div className="bg-slate-100 rounded-xl p-6 shadow-inner">
          <p className="text-base md:text-lg mb-3">It is designed to help you:</p>
          <ul className="pl-5 mb-3 space-y-1">
            <li className="font-bold text-base md:text-lg">
              Develop your Fortitude in five essential dimensions:
            </li>
            <ul className="pl-6 space-y-1">
              <li className="flex items-center gap-2">
                <span role="img" aria-label="Physical">
                  💪
                </span>{" "}
                <span className="font-semibold">Physical</span>
              </li>
              <li className="flex items-center gap-2">
                <span role="img" aria-label="Mental">
                  🧠
                </span>{" "}
                <span className="font-semibold">Mental</span>
              </li>
              <li className="flex items-center gap-2">
                <span role="img" aria-label="Emotional">
                  ❤️
                </span>{" "}
                <span className="font-semibold">Emotional</span>
              </li>
              <li className="flex items-center gap-2">
                <span role="img" aria-label="Character">
                  🛡️
                </span>{" "}
                <span className="font-semibold">Character</span>
              </li>
              <li className="flex items-center gap-2">
                <span role="img" aria-label="Will">
                  🔥
                </span>{" "}
                <span className="font-semibold">Will</span>
              </li>
            </ul>
            <li className="font-bold text-base md:text-lg mt-2">
              2. Redefine your identity;
            </li>
          </ul>
          <p className="text-sm md:text-base mt-2 mb-1">
            ...based on a{" "}
            <span className="font-bold">new code of beliefs</span> that you choose
            to adopt. <i>(alt.)</i>
          </p>
          <p className="text-sm md:text-base mb-3">
            ...from{" "}
            <span className="font-bold">new values and principles</span> that you
            choose to <span className="font-bold">LIVE</span>. <i>(alt.)</i>
          </p>
          <p className="font-bold text-base md:text-lg mb-1">
            F88 starts with a cycle of 88 days.
          </p>
          <p className="font-semibold text-base md:text-lg mb-1">
            You don't pass or fail:{" "}
            <span className="font-bold underline text-blue-700">you CHOOSE !!!</span>
          </p>
          <p className="italic text-gray-500 mt-3 text-sm md:text-base">
            And after the first 88 days,{" "}
            <span className="font-bold">the journey continues →</span>: F88 is a
            community of continuous growth and development, personal challenges,
            and{" "}
            <span className="font-bold underline">permanent expansion !!!</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatIsF88Page;
