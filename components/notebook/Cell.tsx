import type { ReactNode } from "react";

type CellProps = {
  n: number;
  id?: string;
  command: ReactNode;
  children: ReactNode;
  className?: string;
};

/**
 * One notebook cell: prompt gutter on the left (≥900px), input line, output.
 * `data-cell` lets CellRunner arm below-the-fold cells so they "execute"
 * on scroll; without JS every cell renders fully visible.
 */
export function Cell({ n, id, command, children, className = "" }: CellProps) {
  return (
    <section id={id} data-cell className={`cell scroll-mt-20 ${className}`}>
      <div className="nb-prompt in" aria-hidden>
        In&nbsp;[<span className="nb-n">{n}</span>]:
      </div>
      <div className="nb-input">
        <code>{command}</code>
      </div>
      <div className="nb-prompt out max-[899px]:hidden" aria-hidden>
        Out[<span className="nb-n">{n}</span>]:
      </div>
      <div className="nb-out">{children}</div>
    </section>
  );
}

/* tiny syntax tokens for cell commands */

export function Fn({ children }: { children: ReactNode }) {
  return <span className="tok-fn">{children}</span>;
}

export function Str({ children }: { children: ReactNode }) {
  return <span className="tok-str">&quot;{children}&quot;</span>;
}

export function Punct({ children }: { children: ReactNode }) {
  return <span className="tok-punct">{children}</span>;
}

export function Num({ children }: { children: ReactNode }) {
  return <span className="tok-num">{children}</span>;
}

export function Comment({ children }: { children: ReactNode }) {
  return <span className="tok-comment">&nbsp;&nbsp;# {children}</span>;
}
