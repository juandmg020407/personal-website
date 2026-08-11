import { Cell, Comment, Fn, Punct } from "@/components/notebook/Cell";
import { ui, type Locale } from "@/content/i18n";
import { site } from "@/content/site";

export function Now({ locale }: { locale: Locale }) {
  const items = locale === "es" ? [
    <>Estudiando Ciencia de Datos e IA — las matemáticas y la ingeniería, a partes iguales.</>,
    <>
      Construyendo productos con datos e IA mediante retos reales: agentes autónomos,
      predicción de asistencia e imagen médica segura.
    </>,
    <>
      Interesado en <strong>colaboraciones de investigación</strong> y problemas difíciles
      con buenos datos.
    </>,
    <>
      <strong>Abierto a oportunidades laborales</strong> con equipos que valoren la
      experimentación, la autonomía y publicar cosas que funcionan.
    </>,
  ] : [
    <>Studying Data Science &amp; AI — the mathematics and the engineering, in equal measure.</>,
    <>
      Building data and AI products through real challenges: autonomous agents,
      attendance forecasting and safe medical imaging.
    </>,
    <>
      Interested in <strong>research collaborations</strong> and hard problems with good data.
    </>,
    <>
      <strong>Open to work opportunities</strong> with teams that value experimentation,
      ownership and shipping.
    </>,
  ];

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
      <p className="mt-7 font-mono text-[12px] text-ink-soft">
        {ui[locale].now.lastUpdated} · {site.lastUpdated}
      </p>
    </Cell>
  );
}
