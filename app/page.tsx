import { ApplicationForm } from "./components/ApplicationForm";
import { Sidebar } from "./components/layout/Sidebar";


export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      <header className="bg-stone-900 text-white px-4 md:px-8 py-3.5 flex items-center justify-between">
        <div className="font-serif text-xl tracking-tight">
          Talent<span className="text-orange-400 italic">Arc</span>
        </div>
        <span className="text-[10px] md:text-[11px] font-medium tracking-widest uppercase text-stone-400 border border-stone-700 px-3 py-1 rounded-full">
          Applications Open
        </span>
      </header>

      <main className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 items-start">
        <Sidebar />
        <ApplicationForm />
      </main>
    </div>
  );
}
