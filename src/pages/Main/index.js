import React, { useState, useEffect } from 'react';

import { Container, MainData, Wrapper, InputSearchData, Span, Calculate, Column, Observations } from './styles';
import { penalCode } from '../../penal-code'

function Main() {
    const [penalCodeData, setPenalCodeData] = useState()
    const [inputSearchData, setInputSearchData] = useState('')
    const [crimesCommitted, setCrimesCommitted] = useState([])

    useEffect(() => {
        setPenalCodeData(penalCode)
    }, [])

    const calculate = () => {
        console.log(crimesCommitted)
        if (crimesCommitted.length > 0) {
            const filtered = penalCodeData.filter(data => crimesCommitted.includes(data.id))

            const sentence = filtered.map(data => data.pena).reduce((acc, curr) => acc + curr)

            const penalty = filtered.map(data => data.multa).reduce((acc, curr) => acc + curr)

            alert(`Sua sentença é de ${sentence} meses, ou ${sentence / 5} minutos. E deve pagar uma multa de $ ${(penalty).toLocaleString('pt-BR')}`)
        } else {
            alert(`Escolha pelo menos um crime!`)
        }
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
        <div style={{
            display: "flex",
            justifyContent: "center"
        }}>
            <Container>
                <InputSearchData
                    placeholder="Pesquise por nome da inflação"
                    value={inputSearchData}
                    onChange={
                        (value) => {
                            setInputSearchData(value.target.value)
                        }
                    }
                />
                {penalCodeData && (

                    <MainData>
                        <h1 style={{textAlign: "center"}}>Código Penal</h1>

                        {penalCodeData.map(data => (
                            data.crime.toLowerCase().includes(inputSearchData.toLowerCase()) && (
                                <Wrapper key={data.id} show={data.crime.includes(inputSearchData)}>
                                    <input type="checkbox" onChange={() => setField(data.id)} />
                                    <div>
                                        <Column><Span>Crime:</Span> {data.crime}</Column>
                                        <Column><Span>Reclusão:</Span> {data.pena} meses </Column>
                                        <Column><Span>Observações: </Span>{data.observação}</Column>
                                        <Column><Span>Categoria:</Span> {data.categoria === 'assaltos' ? 'Assaltos'
                                            : data.categoria === 'nivel_1' ? 'Nível 1' : data.categoria === 'nivel_2' ? 'Nível 2' : 'Nivel 3'}</Column>
                                        <Column><Span>Multa: </Span>$ {(data.multa).toLocaleString('pt-BR')}</Column>

                                    </div>

                                </Wrapper>
                            )
                        ))}
                    </MainData>

                )}
                <Observations>
                    <h2 style={{ textAlign: "center" }}>Observações</h2>
                    <p><strong>1</strong> - A posse legal de drogas é até 6 únidades, passando da quantidade legal o mesmo é indiciado pelo crime de Tráfico de Drogas.			</p>
                    <p><strong>2</strong> - Veículos são apreendidos quando o mesmo é utilizado em ações onde o condutor ou passageiro atenta contra a vida de qualquer pessoa, use para fugas, assaltos e etc.			</p>
                    <p><strong>3</strong> - Quando um servidor público estiver sendo investigado o mesmo deve ser afastado imediatamente até o termino da investigação.			</p>
                    <p><strong>4</strong> - Não há crime de cumplicidade, as pessoas que colaboram diretamente ou indiretamente para o crime receberão a pena calculada entre a metade e o total da pena.			</p>
                    <p><strong>5</strong> - Conversas entre suspeitos e advogados são confidenciais, dê uma distância respeitosa para que os mesmos conversem sem interrupções.			</p>
                    <p><strong>6</strong> - Negociação com advogado = Redução de até 10% da pena total.			</p>
                    <p><strong>7</strong> - Confessar crime = Redução de até 10% da pena total.			</p>
                </Observations>
                <Calculate onClick={calculate}>Calcular</Calculate>
            </Container>
        </div>
    )
}

export default Main;