import { Cell, Comment, Fn, Punct } from "@/components/notebook/Cell";
import { site } from "@/content/site";

const items = [
  <>Studying Data Science &amp; AI — the mathematics and the engineering, in equal measure.</>,
  <>
    Turning <strong>Montecast</strong>, my World Cup 2026 forecast engine, into a public
    product before the tournament kicks off.
  </>,
  <>
    Preparing my application to <strong>Y&nbsp;Combinator&apos;s Startup School in Paris</strong> —
    this site is part of it.
  </>,
  <>Open to internships, research collaborations and hard problems with good data.</>,
];

export function Now() {
  return (
    <Cell
      n={6}
      id="now"
      command={
        <>
          <Fn>now</Fn>
          <Punct>()</Punct>
          <Comment>{site.lastUpdated}</Comment>
        </>
      }
    >
      <ul className="max-w-[62ch] space-y-4 font-serif text-[17.5px] leading-relaxed">
        {items.map((item, i) => (
          <li key={i} className="flex gap-4">
            <span aria-hidden className="select-none font-mono text-[14px] leading-[1.85] text-pen">
              »
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-7 font-mono text-[12px] text-ink-soft">last updated · {site.lastUpdated}</p>
    </Cell>
  );
}
