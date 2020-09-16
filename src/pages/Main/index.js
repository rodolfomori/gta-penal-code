import React, { useState } from 'react';

import { Container, MainData, Wrapper, InputSearchData } from './styles';
import { penalCode } from '../../penal-code'

function Main() {
    const [penalCodeData, setPenalCodeData] = useState(penalCode)
    const [inputSearchData, setInputSearchData] = useState('')
    const [crimesCommitted, setCrimesCommitted] = useState([])


    const calculate = () => {
        console.log(crimesCommitted)

        const filtered = penalCodeData.filter(data => crimesCommitted.includes(data.id))

        const sentence = filtered.map(data => data.pena).reduce((acc, curr) => acc + curr)

        const penalty = filtered.map(data => data.multa).reduce((acc, curr) => acc + curr)

        alert(`Sua sentença é de ${sentence} meses, ou ${sentence / 5} minutos. E deve pagar uma multa de ${penalty}`)
    }
    
    const setField = (id) => {
        if (crimesCommitted.includes(id)) {
           const newData = crimesCommitted.filter(data => data !== id)
           setCrimesCommitted(newData)
        } else {
            const newData = crimesCommitted
            newData.push(id)
            setCrimesCommitted(newData)
        }

    }
    return (
        <Container>
            <InputSearchData
                value={inputSearchData}
                onChange={
                    (value) => {
                        setInputSearchData(value.target.value)
                    }
                }
            />
            {penalCodeData && (
                <MainData>
                    {penalCodeData.map(data => (
                        data.crime.toLowerCase().includes(inputSearchData.toLowerCase()) && (
                            <Wrapper key={data.id} show={data.crime.includes(inputSearchData)}>
                                <input type="checkbox" onChange={() => setField(data.id)} />
                                <div>
                                    <div><span>Crime:</span> {data.crime}</div>
                                    <div><span>Recrusão:</span> {data.pena} meses </div>
                                    <div><span>Observações: </span>{data.observação}</div>
                                    <div><span>Categoria:</span> {data.categoria}</div>
                                </div>

                            </Wrapper>
                        )
                    ))}
                </MainData>
            )}
            <button onClick={calculate}>Calcular</button>
        </Container>

    )
}

export default Main;