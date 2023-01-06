import { useState } from 'react'
import { Text, Paper, Select } from '@mantine/core';

export default function Q_3(props) {
    let data = props.data
    let index = props.index
    //props.setAnswers
    //props.answer

    const [input, setInput] = useState("")
    const [selectOptions, setSelectOptions] = useState([])
    const [loaded, setLoaded] = useState(false)

    if (data !== undefined && !loaded) {
        let tmpOptions = []
        for (let option of data[4][0][1]) {
            let tmpObj = {}
            tmpObj["value"] = option[0]
            tmpObj["label"] = option[0]
            tmpOptions.push(tmpObj)
        }
        setSelectOptions(tmpOptions)
        setLoaded(true)
    }


    // console.log("data")
    // console.log(data)
    return (
        <>
            <Paper shadow="xs" p="md" withBorder style={{ textAlign: "left" }}>
                {/* Question Text */}
                {data[1]}

                {/* Answer */}
                <Select
                    onChange={(e) => {
                        let inputValue = e;
                        let questionId = data[4][0][0]
                        setInput(inputValue)

                        let tmpAnswer = props.answers
                        let encodedAns = inputValue
                        tmpAnswer[index] = `entry.${questionId}=${encodedAns}`
                        props.setAnswers(tmpAnswer)
                    }}
                    data={selectOptions}
                    value={input} />
            </Paper>
        </>
    )
}
