
export default function RouterCard({
  title,
  description,
  useCase,
  color = "indigo",
}) {
  const colors = {
    indigo: "border-indigo-200 bg-indigo-50",
    violet: "border-violet-200 bg-violet-50",
    emerald: "border-emerald-200 bg-emerald-50",
  };

  return (
    <div
      className={`rounded-2xl border p-5 ${colors[color]}`}
    >
      <h3 className="text-lg font-bold text-slate-900">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-700">
        {description}
      </p>
      <p className="mt-4 text-sm font-medium text-slate-800">
        Best used for: {useCase}
      </p>
    </div>
  );
}
