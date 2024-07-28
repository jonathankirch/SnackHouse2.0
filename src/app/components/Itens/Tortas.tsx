import tortas from './data/tortas/tortas.json'

import NewItem from './NewItem'

export default function Tortas() {
  return (
    <section className="mb-14" id="tortas">
      <h3 className="md:text-3xl text-xl font-bold mb-5 ml-5 uppercase">Sabores</h3>
      <div className="grid md:grid-cols-2 grid-cols-1 mx-2 gap-x-10 gap-y-5">
        {tortas.map((item, index) => (
          <article
            key={index}
            className="grid grid-cols-3 shadow-md rounded-md group hover:shadow-xl transition md:h-52 h-40 border border-neutral-100 hover:bg-neutral-50">
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
