import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiGraphql,
  SiNodedotjs,
  SiStorybook,
  SiHtml5,
  SiGithubactions,
  SiVitest,
} from "react-icons/si";

const stack: { name: string; Icon: IconType }[] = [
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "GraphQL", Icon: SiGraphql },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Storybook", Icon: SiStorybook },
  { name: "HTML5", Icon: SiHtml5 },
  { name: "GitHub Actions", Icon: SiGithubactions },
  { name: "Vitest", Icon: SiVitest },
];

export function TechStack() {
  // Duplicated once so the marquee can loop seamlessly.
  const items = [...stack, ...stack];

  return (
    <section id="skills" className="scroll-mt-24 border-y border-line py-12">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-2xl tracking-tight text-ink">Tech stack</h2>
      </div>

      <div className="marquee-mask group mt-8 overflow-hidden">
        <ul className="animate-marquee flex w-max items-center gap-12 pr-12 group-hover:[animation-play-state:paused]">
          {items.map(({ name, Icon }, i) => (
            <li
              key={`${name}-${i}`}
              className="flex shrink-0 flex-col items-center gap-2 text-ink"
              aria-hidden={i >= stack.length ? true : undefined}
            >
              <Icon className="h-9 w-9" title={name} />
              <span className="text-xs font-medium text-muted">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
