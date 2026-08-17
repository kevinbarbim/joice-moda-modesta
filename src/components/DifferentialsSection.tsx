import { site } from "../data/site";
import { ConversationIcon, HeartIcon, SelectionIcon } from "./Icons";

const icons = {
  heart: HeartIcon,
  selection: SelectionIcon,
  conversation: ConversationIcon,
};

export function DifferentialsSection() {
  return (
    <section className="differentials" aria-label="Diferenciais da Joice Moda Modesta">
      <div className="container differentials__grid">
        {site.differentials.map((item, index) => {
          const Icon = icons[item.icon];
          return (
            <article className="differential" data-reveal="up" key={item.title}>
              <div className="differential__icon"><Icon /></div>
              <div>
                <p className="differential__number">0{index + 1}</p>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
