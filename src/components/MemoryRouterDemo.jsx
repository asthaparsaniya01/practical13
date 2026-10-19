
import {
  MemoryRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

function MemoryNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="space-y-4">
      <div className="rounded-xl bg-violet-50 p-4">
        <p className="font-semibold text-violet-900">
          Current in-memory route
        </p>
        <code className="mt-2 block text-violet-700">
          {location.pathname}
        </code>
        <p className="mt-2 text-sm text-violet-800">
          Notice that the browser address bar does not change.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => navigate("/")}
          className="rounded-lg bg-violet-600 px-4 py-2 text-white"
        >
          Home
        </button>

        <button
          onClick={() => navigate("/about")}
          className="rounded-lg bg-violet-600 px-4 py-2 text-white"
        >
          About
        </button>

        <button
          onClick={() => navigate("/contact")}
          className="rounded-lg bg-violet-600 px-4 py-2 text-white"
        >
          Contact
        </button>

        <button
          onClick={() => navigate(-1)}
          className="rounded-lg bg-slate-200 px-4 py-2 text-slate-800"
        >
          Go Back
        </button>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default function MemoryRouterDemo() {
  return (
    <MemoryRouter initialEntries={["/"]}>
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-violet-700">
          MemoryRouter Demo
        </h3>
        <MemoryNavigation />
      </div>
    </MemoryRouter>
  );
}
