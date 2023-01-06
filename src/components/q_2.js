import { useState, useEffect } from 'react'
import { Text, Paper, Radio } from '@mantine/core';

export default function Q_2(props) {
    let data = props.data
    let index = props.index
    let radioOptions = data[4][0][1]
    //props.setAnswers
    //props.answer

    const [input, setInput] = useState("")
    // console.log("data")
    // console.log(data)

    useEffect(() => {
        if (input !== "" && data !== undefined) {
            let questionId = data[4][0][0]

            let tmpAnswer = props.answers
            let encodedAns = input
            tmpAnswer[index] = `entry.${questionId}=${encodedAns}`
            props.setAnswers(tmpAnswer)
        }
    })
    return (
        <>
            <Paper shadow="xs" p="md" withBorder style={{ textAlign: "left" }}>

                {/* Answer */}
                <Radio.Group
                    value={input}
                    onChange={setInput}
                    name={`radio_${index}`}
                    orientation="vertical"
                    label={data[1]}
                >
                    {radioOptions.length !== 0 ?
                        [...radioOptions].map((item, i) => {
                            return (<div key={i}>
                                <Radio value={item[0]} label={item[0]} />
                            </div>)

                        })
                        : <></>}

                </Radio.Group>

            </Paper>
        </>
    )
}
