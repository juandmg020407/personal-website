import { Cell, Fn, Punct } from "@/components/notebook/Cell";
import { ui, type Locale } from "@/content/i18n";
import { site } from "@/content/site";

function Row({
  k,
  v,
  href,
  external,
}: {
  k: string;
  v: string;
  href: string;
  external?: boolean;
}) {
  return (
    <div>
      <span className="tok-str">&quot;{k}&quot;</span>
      <span className="tok-punct">:&nbsp;&nbsp;</span>
      <a
        className="lnk break-all"
        href={href}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      >
        &quot;{v}&quot;
      </a>
      <span className="tok-punct">,</span>
    </div>
  );
}

export function Contact({ locale }: { locale: Locale }) {
  const copy = ui[locale].contact;

  return (
    <Cell
      n={7}
      id="contact"
      command={
        <>
          <Fn>contact</Fn>
          <Punct>()</Punct>
        </>
      }
    >
      <div className="font-mono text-[clamp(13px,1.8vw,15px)] leading-[2.15]">
        <span className="tok-punct">{"{"}</span>
        <div className="pl-5 sm:pl-9">
          <Row k="email" v={site.email} href={`mailto:${site.email}`} />
          <Row k="github" v="github.com/juandmg020407" href={site.github} external />
          <Row
            k="linkedin"
            v="linkedin.com/in/david-morales-galindo"
            href={site.linkedin}
            external
          />
        </div>
        <span className="tok-punct">{"}"}</span>
      </div>

      <p className="mt-8 max-w-[52ch] font-serif text-[19px] leading-relaxed">
        {copy.intro}{" "}
        <a className="lnk" href={`mailto:${site.email}`}>
          {copy.action}
        </a>{" "}
        {copy.ending}
      </p>
    </Cell>
  );
}
