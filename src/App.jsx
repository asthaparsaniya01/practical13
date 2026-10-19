
import { useState } from "react";
import About from "./Pages/About";
import Contact from "./Pages/Contacts";
import Home from "./Pages/Home";
import HashRouterDemo from "./components/HashRouterDemo";
import MemoryRouterDemo from "./components/MemoryRouterDemo";
import StaticRouterDemo from "./components/StaticRouterDemo";
import RouterCard from "./components/RouterCard";

const tabs = [
  { id: "hash", label: "HashRouter" },
  { id: "memory", label: "MemoryRouter" },
  { id: "static", label: "StaticRouter" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("hash");

  return (
    <main className="min-h-screen px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10">
          <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">
            React Router Lab
          </span>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Understanding Router Types
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            Explore HashRouter, MemoryRouter, and StaticRouter
            through examples built with React and Tailwind CSS.
          </p>
        </header>

        <section className="mb-10 grid gap-4 md:grid-cols-3">
          <RouterCard
            title="HashRouter"
            description="Stores navigation in the URL fragment."
            useCase="Static hosting and servers without SPA fallback."
            color="indigo"
          />

          <RouterCard
            title="MemoryRouter"
            description="Stores navigation in application memory."
            useCase="Tests, embedded flows, and isolated interfaces."
            color="violet"
          />

          <RouterCard
            title="StaticRouter"
            description="Matches a fixed URL during server rendering."
            useCase="Server-side rendering and HTTP request handling."
            color="emerald"
          />
        </section>

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-4 sm:p-6">
            <h2 className="text-xl font-bold text-slate-900">
              Interactive Demonstration
            </h2>

            <div className="mt-5 flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                    activeTab === tab.id
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="min-h-72 p-4 sm:p-6">
            {activeTab === "hash" && <HashRouterDemo />}
            {activeTab === "memory" && <MemoryRouterDemo />}
            {activeTab === "static" && <StaticRouterDemo />}
          </div>
        </section>

        <footer className="mt-8 text-center text-sm text-slate-500">
          Built with React, React Router, and Tailwind CSS
        </footer>
      </div>
    </main>
  );
}
