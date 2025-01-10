import NewItem from './NewItem'
import marmitas from './data/marmitas/marmitas.json'
import marmitasTerca from './data/marmitas/marmitasTerca.json'

export default function Marmitas() {
  const data = new Date()
  const dia = data.getDay()
  const hora = data.getHours()
  const semana = Math.ceil(data.getDate() / 7)

  // Função para gerar a marmita do dia com base no dia e hora
  function gerarMarmitaDoDia() {
    if ((dia === 5 && hora >= 18) || dia === 6 || dia === 0) {
      return marmitas[1]  // Exibir marmita de segunda se for sexta à noite, sábado ou domingo
    } else if ((dia === 1 && hora >= 18 ) || ( dia === 2 && hora < 18 )) {
      return semana % 2 === 0 ? marmitasTerca[0] : marmitasTerca[1]
    } else if (hora >= 18) {
      return marmitas[dia + 1]  // Próximo dia, se a hora for depois das 18h
    } else {
      return marmitas[dia]  // Marmita do dia atual
    }
  }

  const marmitaDoDia = gerarMarmitaDoDia()

  return (
    <section id="marmitas" className='mb-14'>
      <div className="grid md:grid-cols-2 grid-cols-1 mx-2 gap-x-10 gap-y-5">
        <article className="grid grid-cols-3 md:h-52 h-40 shadow-md rounded-md group hover:shadow-xl transition border border-neutral-100 hover:bg-neutral-50">
          <NewItem
            nome={`Marmita de ${marmitaDoDia.nome} Pequena`}
            descricao={marmitaDoDia.prato}
            valor={marmitaDoDia.valorP}
            img={marmitaDoDia.img}
            quantidade={marmitaDoDia.quantidade}
          />
        </article>
          <article className="grid grid-cols-3 md:h-52 h-40 shadow-md rounded-md group hover:shadow-xl transition border border-neutral-100 hover:bg-neutral-50">
          <NewItem
            nome={`Marmita de ${marmitaDoDia.nome} Grande`}
            descricao={marmitaDoDia.prato}
            valor={marmitaDoDia.valorG}
            img={marmitaDoDia.img}
            quantidade={marmitaDoDia.quantidade}
          />

          </article>
      </div>
    </section>
  )
}
