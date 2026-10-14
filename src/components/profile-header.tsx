import { mailto, site } from "@/lib/site";

const meta = [
  { label: site.location },
  { label: site.availability },
  { label: "Full-stack · frontend & backend" },
];

export function ProfileHeader() {
  return (
    <section id="top" className="mx-auto max-w-3xl px-6 pt-16 pb-10 sm:pt-20">
      <p className="text-sm font-semibold tracking-wide text-muted uppercase">
        {site.role}
      </p>
      <h1 className="mt-3 text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl">
        {site.name}
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body">
        Senior developer building fast, accessible, and maintainable web
        applications across the full stack — from React, Next.js, and
        TypeScript frontends to Node.js and GraphQL APIs. Currently building
        digital services at the Ministry of Justice.
      </p>

      <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-body">
        {meta.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-ink" />
            {item.label}
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <a
          href={mailto()}
          className="inline-block rounded-full bg-ink px-6 py-3 text-center text-sm font-semibold text-bg transition-colors hover:bg-body"
        >
          Email me
        </a>
      </div>
    </section>
  );
}
