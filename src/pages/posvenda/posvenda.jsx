import Carrossel from '../../componentes/carrossel/carrossel.jsx'
import Slider from '../../componentes/slider/slider.jsx'
import './posvenda.css'

function PosVenda() {
    return (
        <main>
            <div className='legenda'>
                <div className='estado-do-chamado'>
                    <div className='bolinha'></div>
                    <div className='tipo'>
                        <strong>Em aberto</strong>
                        <span>Menos de 1 dia</span>
                    </div>
                </div>

                <div className='estado-do-chamado'>
                    <div className='bolinha'></div>
                    <div className='tipo'>
                        <strong>Em aberto</strong>
                        <span>Mais de 1 dia</span>
                    </div>
                </div>

                <div className='estado-do-chamado'>
                    <div className='bolinha'></div>
                    <div className='tipo'>
                        <strong>Em atendimento</strong>
                    </div>
                </div>

                <div className='estado-do-chamado'>
                    <div className='bolinha'></div>
                    <div className='tipo'>
                        <strong>Resolvido</strong>
                    </div>
                </div>
            </div>
            <div>
                <Carrossel />
                <Slider />
            </div>
        </main>
    )
}

export default PosVenda