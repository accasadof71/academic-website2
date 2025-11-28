/**
 * @file AboutSection.tsx
 * @description About section with biography and quick links.
 */

/**
 * AboutSection component
 * @description Provides an overview of the person, similar to the sidebar + content
 * block in al-folio / minimal-mistakes.
 */
export function AboutSection() {
  return (
    <section id="about" className="mb-10 grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
      <div>
        <h2 className="mb-3 text-xl font-semibold tracking-tight text-slate-900">
          About
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-slate-700">
          I am a PhD candidate in Computer Science at &lt;Your Institution&gt;. My research
          focuses on building reliable and interpretable machine learning systems that are
          deployable in real-world settings. I am particularly interested in model
          robustness, representation learning, and human-in-the-loop AI.
        </p>
        <p className="mb-3 text-sm leading-relaxed text-slate-700">
          Before my PhD, I completed my MSc in Artificial Intelligence and spent time in
          industry working on large-scale recommendation systems. I enjoy working at the
          intersection of theory, systems, and applications.
        </p>
        <p className="text-sm leading-relaxed text-slate-700">
          Outside of research, I like teaching, writing, and contributing to open-source
          software. This website showcases a selection of my work, publications, and
          teaching activities.
        </p>
      </div>

      <aside className="space-y-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-900">Quick facts</h3>
        <dl className="grid grid-cols-1 gap-x-4 gap-y-2 text-xs text-slate-700">
          <div className="flex items-start justify-between gap-4">
            <dt className="font-medium text-slate-500">Affiliation</dt>
            <dd className="text-right">Department of Computer Science, Your University</dd>
          </div>
          <div className="flex items-start justify-between gap-4">
            <dt className="font-medium text-slate-500">Advisor</dt>
            <dd className="text-right">Prof. Jane Doe</dd>
          </div>
          <div className="flex items-start justify-between gap-4">
            <dt className="font-medium text-slate-500">Research areas</dt>
            <dd className="text-right">Machine Learning, Robustness, Interpretability</dd>
          </div>
          <div className="flex items-start justify-between gap-4">
            <dt className="font-medium text-slate-500">Email</dt>
            <dd className="text-right">
              <a
                href="mailto:you@example.com"
                className="text-indigo-600 hover:underline"
              >
                you@example.com
              </a>
            </dd>
          </div>
          <div className="flex items-start justify-between gap-4">
            <dt className="font-medium text-slate-500">CV</dt>
            <dd className="text-right">
              <a href="#" className="text-indigo-600 hover:underline">
                Download PDF
              </a>
            </dd>
          </div>
        </dl>

        <div className="border-t border-slate-200 pt-3">
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            News
          </h4>
          <ul className="space-y-2 text-xs text-slate-700">
            <li>
              [2025] Our paper on robust contrastive learning was accepted at NeurIPS.
            </li>
            <li>[2024] Serving as teaching assistant for &quot;Advanced ML&quot;.</li>
            <li>[2024] Gave an invited talk at the ML &amp; Society seminar.</li>
          </ul>
        </div>
      </aside>
    </section>
  )
}
