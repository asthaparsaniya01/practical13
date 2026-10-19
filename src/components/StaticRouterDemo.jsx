
export default function StaticRouterDemo() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-emerald-700">
        StaticRouter Demo
      </h3>

      <p className="text-sm text-slate-600">
        StaticRouter matches a fixed URL and is commonly used
        during server-side rendering.
      </p>

      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
        <p className="font-semibold text-emerald-900">
          Simulated server request
        </p>

        <code className="mt-2 block text-emerald-700">
          /about
        </code>

        <div className="mt-4 rounded-lg bg-white p-4">
          <h4 className="text-lg font-bold text-slate-800">
            About Page
          </h4>

          <p className="mt-2 text-slate-600">
            This is the page that would be rendered for the
            requested URL: /about.
          </p>
        </div>
      </div>

      <p className="text-sm text-slate-500">
        Note: This is a frontend simulation, not actual
        server-side rendering.
      </p>
    </div>
  );
}
