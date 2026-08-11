import { Cell, Comment, Fn, Punct } from "@/components/notebook/Cell";
import { site } from "@/content/site";

const items = [
  <>Studying Data Science &amp; AI — the mathematics and the engineering, in equal measure.</>,
  <>
    Shipping applied data and AI products through hackathons — most recently
    attendance forecasting, explainable credit recommendations and an arcade game.
  </>,
  <>
    Interested in <strong>research collaborations</strong> and hard problems with good data.
  </>,
  <>
    <strong>Open to work opportunities</strong> with teams that value experimentation,
    ownership and shipping.
  </>,
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
