import Link from "next/link";

export const metadata = { title: "404" };

export default function NotFound() {
  const rule = "─".repeat(56);
  return (
    <main className="nb-wrap py-24 md:py-36">
      <div className="max-w-[640px] overflow-x-auto font-mono text-[13px] leading-[1.9]">
        <p className="text-ink-soft">{rule}</p>
        <p>
          <span className="font-semibold text-verm">KeyError</span>
          <span className="text-ink-soft">{"  "}Traceback (most recent call last)</span>
        </p>
        <p className="mt-3">
          Cell <span className="text-pen">In [404]</span>, line <span className="text-pen">1</span>
        </p>
        <p>
          <span className="text-verm">----&gt; 1</span> site.pages[
          <span className="tok-str">&quot;this_url&quot;</span>]
        </p>
        <p className="mt-4">
          <span className="font-semibold text-verm">KeyError:</span>{" "}
          <span className="tok-str">&quot;page not found&quot;</span>
        </p>
        <p className="text-ink-soft">{rule}</p>
      </div>
      <Link href="/" className="lnk mt-10 inline-block font-mono text-[14px]">
        ⏎ return home
      </Link>
    </main>
  );
}
