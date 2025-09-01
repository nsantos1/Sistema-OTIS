import { useState } from 'react'
import './carrossel.css'

function Carrossel() {
    const [index, setIndex] = useState(0)
    const slides = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5', 'Slide 6', 'Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5', 'Slide 6', 'Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5', 'Slide 6', 'Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5', 'Slide 6']

    const anterior = () => {
        setIndex((prev) => (prev - 1 + slides.length) % slides.length)
    }

    const proximo = () => {
        setIndex((prev) => (prev + 1) % slides.length)
    }

    return (
        <>
            <div className='superior'>
                <div className='titulo'>Manutenção</div>
                <div className='linha'></div>
            </div>
            <div className='carrossel'>
                <button className='prev' onClick={anterior}>
                    <svg width="17" height="26" viewBox="0 0 17 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.5 13L16.0833 22.5833L13.1667 25.5L0.666672 13L13.1667 0.500001L16.0833 3.41667L6.5 13Z" fill="#0A2344"/>
                    </svg>
                </button>
                <div className='slides-container'>
                    <div className="slides" style={{ transform: `translateX(-${index * 100}%)` }}>
                    {slides.map((slide, i) => (
                        <div key={i} className="slide">{slide}</div>
                    ))}
                    </div>
                </div>
            
                <button className='next' onClick={proximo}>
                    <svg width="17" height="26" viewBox="0 0 17 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 13L0.916647 3.41667L3.83331 0.5L16.3333 13L3.83331 25.5L0.916647 22.5833L10.5 13Z" fill="#0A2344"/>
                    </svg>
                </button>
            </div>
        </>
    )
}

export default Carrossel