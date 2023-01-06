import { useState, useEffect } from 'react'
import { Text, Paper, Checkbox } from '@mantine/core';

export default function Q_4(props) {
    let data = props.data
    let index = props.index
    let checkOptions = data[4][0][1]
    //props.setAnswers
    //props.answer

    const [input, setInput] = useState([])

    useEffect(() => {
        if (input.length > 0 && data !== undefined) {

            let questionId = data[4][0][0]

            let tmpAnswer = props.answers
            let urlString = ""
            for (let option of input) {
                urlString += `&entry.${questionId}=${option}`
            }
            tmpAnswer[index] = urlString
            props.setAnswers(tmpAnswer)
        }
    })
    // console.log("data")
    // console.log(data)
    return (
        <>
            <Paper shadow="xs" p="md" withBorder style={{ textAlign: "left" }}>
                {/* Question Text */}
                {data[1]}

                {/* Answer */}
                <Checkbox.Group
                    orientation="vertical"
                    onChange={setInput}
                    value={input}
                >
                    {checkOptions.length !== 0 ?
                        [...checkOptions].map((item, i) => {
                            return (
                                <Checkbox
                                    value={item[0]}
                                    label={item[0]} key={i} />
                            )

                        })
                        : <></>}

                </Checkbox.Group>
            </Paper>
        </>
    )
}
