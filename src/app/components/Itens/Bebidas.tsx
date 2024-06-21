import cerveja from './data/bebidas/cervejas.json'
import refrigerante from './data/bebidas/refrigerantes.json'
import agua from './data/bebidas/aguas.json'

import NewItem from './NewItem';

export default function Bebidas() {

  const formatarValor = ( lang: string, currency: string, balance: number ) =>
    Intl.NumberFormat(lang, {
      style: "currency",
      maximumFractionDigits: 2,
      currency,
    }).format(balance)

  return (
    <>
      <section className="mb-10" id='cervejas'>
        <h1 className="text-2xl font-bold uppercase mb-5">Cerveja</h1>
        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
          {cerveja.map((item, index) => (
            <article key={index} className="grid grid-cols-3 shadow-md rounded-md group hover:shadow-xl transition">
              <NewItem
                nome={item.nome}
                descricao={item.descricao}
                valor={item.valor}
              />
            </article>
          ))}
        </div>
      </section>
      <section className="mb-10" id='refrigerantes'>
        <h1 className="text-2xl font-bold uppercase mb-5">Refrigerante</h1>
        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
          {refrigerante.map((item, index) => (
            <article key={index} className="grid grid-cols-3 shadow-md rounded-md group hover:shadow-xl transition">
              <NewItem
                nome={item.nome}
                descricao={item.descricao}
                valor={item.valor}
              />
            </article>
          ))}
        </div>
      </section>
      <section className="mb-10" id='agua'>
        <h1 className="text-2xl font-bold uppercase mb-5">Água</h1>
        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
          {agua.map((item, index) => (
            <article key={index} className="grid grid-cols-3 shadow-md rounded-md group hover:shadow-xl transition">
              <NewItem
                nome={item.nome}
                descricao={item.descricao}
                valor={item.valor}
              />
            </article>
          ))}
        </div>
      </section>
    </>
  )
}