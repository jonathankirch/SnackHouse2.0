import combos from './data/combos/combos.json'

import NewItem from './NewItem'

export default function Combos() {
  return (
    <section className="mb-10" id='combos'>
      <div className="grid grid-cols-2 gap-x-10 gap-y-5">
        {combos.map((item, index) => (
          <article
            key={index}
            className="grid grid-cols-3 shadow-md rounded-md group hover:shadow-xl transition">
            <NewItem
              nome={item.nome}
              descricao={item.descricao}
              valor={item.valor}
              img={item.img}
              quantidade={item.quantidade}
            />
          </article>
        ))}
      </div>
    </section>
  )
}
