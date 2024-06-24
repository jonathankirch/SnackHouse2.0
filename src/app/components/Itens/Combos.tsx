import combos from './data/combos/combos.json'

import NewItem from './NewItem'

export default function Combos() {
  return (
    <section className="mb-10" id='combos'>
      <div className="grid md:grid-cols-2 grid-cols-1 mx-2 gap-x-10 gap-y-5">
        {combos.map((item, index) => (
          <article
            key={index}
            className="grid grid-cols-3 md:h-52 h-40 shadow-md rounded-md group hover:shadow-xl transition border border-neutral-100 hover:bg-neutral-50">
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
