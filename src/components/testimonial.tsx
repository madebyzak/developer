export function Testimonial() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-3xl scroll-mt-24 px-6 py-10 pb-20"
    >
      <h2 className="text-2xl tracking-tight text-ink">Reference</h2>
      <figure className="mt-5 border-l-2 border-ink pl-5">
        <blockquote className="text-lg leading-relaxed text-body italic">
          &ldquo;Zak built our recruitment CRM from the ground up — applicant
          tracking, automated pipelines, and the reporting our hiring team now
          lives in every day. He turned fuzzy requirements into a fast,
          genuinely intuitive product, cared deeply about accessibility and
          performance, and shipped reliably every sprint. One of the best
          engineers we&rsquo;ve worked with.&rdquo;
        </blockquote>
        <figcaption className="mt-3 text-sm text-muted">
          <span className="font-semibold text-ink">Co-founder</span> ·
          Early-stage recruitment tech startup
        </figcaption>
      </figure>
      <p className="mt-4 text-sm text-muted">
        Further references available on request.
      </p>
    </section>
  );
}
