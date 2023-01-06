import { useState } from 'react'
import { Text, Paper, Input } from '@mantine/core';

export default function Q_0(props) {
    let data = props.data
    let index = props.index
    //props.setAnswers
    //props.answer

    const [input, setInput] = useState("")
    // console.log("data")
    // console.log(data)
    return (
        <>
            <Paper shadow="xs" p="md" withBorder style={{ textAlign: "left" }}>
                {/* Question Text */}
                {data[1]}

                {/* Answer */}
                <Input
                    onChange={(e) => {
                        let inputValue = e.target.value;
                        let questionId = data[4][0][0]
                        setInput(inputValue)

                        let tmpAnswer = props.answers
                        let encodedAns = inputValue
                        tmpAnswer[index] = `entry.${questionId}=${encodedAns}`
                        props.setAnswers(tmpAnswer)
                    }}
                    value={input} />
            </Paper>
        </>
    )
}
