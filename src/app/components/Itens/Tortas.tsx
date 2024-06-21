import tortas from './data/tortas/tortas.json'

import NewItem from "./NewItem"

export default function Tortas() {
  return (
    <section className="mb-10" id='tortas'>
      <h1 className="text-2xl font-bold uppercase mb-5">Sabores</h1>
      <div className="grid grid-cols-2 gap-x-10 gap-y-5">
        {tortas.map((item, index) => (
          <article
            key={index}
            className="grid grid-cols-3 shadow-md rounded-md group hover:shadow-xl transition h-52">
            <NewItem
              nome={item.nome}
              descricao={item.descricao}
              valor={item.valor}
            />
          </article>
        ))}
      </div>
    </section>
  )
}
