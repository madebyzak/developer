export function Testimonial() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-3xl scroll-mt-24 px-6 py-10 pb-20"
    >
      <h2 className="text-2xl tracking-tight text-ink">Reference</h2>
      <figure className="mt-5 border-l-2 border-ink pl-5">
        <blockquote className="text-lg leading-relaxed text-body italic">
          &ldquo;Zak is a rare frontend engineer — fast, detail-obsessed, and
          genuinely easy to work with. He shipped our redesign ahead of schedule
          and the results spoke for themselves.&rdquo;
        </blockquote>
        <figcaption className="mt-3 text-sm text-muted">
          <span className="font-semibold text-ink">Product Lead</span> · Fintech
          Scale-up
        </figcaption>
      </figure>
      <p className="mt-4 text-sm text-muted">
        Further references available on request.
      </p>
    </section>
  );
}
