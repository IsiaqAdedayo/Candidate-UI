const jobs = [
  {
    role: "Senior Product Designer",
    location: "Remote",
    type: "Full-time",
    tag: "Design",
  },
  {
    role: "Frontend Engineer",
    location: "Lagos / Remote",
    type: "Full-time",
    tag: "Engineering",
  },
  {
    role: "Backend Engineer",
    location: "Lagos / Remote",
    type: "Full-time",
    tag: "Engineering",
  },
  {
    role: "Growth Marketing Lead",
    location: "Hybrid",
    type: "Contract",
    tag: "Marketing",
  },
];

const steps = [
  { label: 'Fill out the form', sub: 'Personal info, experience & skills' },
  { label: 'We review your application', sub: 'Usually within 3 business days' },
  { label: 'Interview & offer', sub: 'Meet the team and get an offer' },
];

export function Sidebar() {
  return (
    <aside className="lg:pr-12">
      <p className="text-xs font-semibold tracking-widest text-orange-600 uppercase mb-3">
        Now Hiring
      </p>
      <h1 className="font-serif text-2xl md:text-[34px] leading-tight tracking-tight mb-4">
        Find your next chapter.
      </h1>
      <p className="text-sm text-stone-500 leading-relaxed mb-8">
        We&apos;re looking for talented individuals to join our growing team. Fill out the form and we&apos;ll get back to you within 3 business days.
      </p>

      <div className="flex flex-col gap-3 mb-8">
        {jobs.map((job) => (
          <div
            key={job.role}
            className="bg-white border border-stone-200 rounded-xl p-4"
          >
            <p className="font-semibold text-sm mb-1">{job.role}</p>
            <div className="flex gap-3 text-xs text-stone-500">
              <span>{job.location}</span>
              <span>·</span>
              <span>{job.type}</span>
            </div>
            <span className="inline-block mt-2 text-[11px] font-medium px-2 py-0.5 rounded-full bg-orange-50 text-orange-600">
              {job.tag}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {steps.map((step, i) => (
          <div key={step.label} className="flex gap-3 items-start">
            <div className="w-6 h-6 rounded-full bg-stone-900 text-white text-[11px] font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
              {i + 1}
            </div>
            <div>
              <p className="text-sm font-medium">{step.label}</p>
              <p className="text-xs text-stone-500 mt-0.5">{step.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
