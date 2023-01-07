import { useState, useEffect } from 'react'
import { Text, Paper, MultiSelect, Table } from '@mantine/core';

export default function Q_7_single(props) {
    let data = props.data
    let index = props.index
    let radioOptions = data[4][0][1]
    let optionRows = data[4]
    //props.setAnswers
    //props.answer

    const [input, setInput] = useState(Array(data[4].length))
    // console.log("data")
    // console.log(data)

    let options = []
    let questionId = []
    // const [options, setOptions] = useState([])
    // const [, setQuestionCode] = useState([])
    useEffect(() => {
        console.log(data)
        console.log(input)
        if (data !== undefined) {
            questionId = []
            for (let question of data[4]) {
                questionId.push(question[0])
            }

            console.log("questionId")
            console.log(questionId)
        }
    })
    return (
        <>
            <Paper shadow="xs" p="md" withBorder style={{ textAlign: "left" }}>
                {/* Question */}
                {data[1]}

                {/* Answer */}
                {/* <Radio.Group
                    value={input}
                    onChange={setInput}
                    name={`radio_${index}`}
                > */}

                {/* Each row */}
                {optionRows.length !== 0 ?
                    [...optionRows].map((item, i) => {
                        let data_select = []
                        for (let option of item[1]) {
                            let tmpObj = {}
                            tmpObj["value"] = option
                            tmpObj["label"] = option
                            data_select.push(tmpObj)
                        }

                        return (<div key={i}>
                            <MultiSelect
                                value={input[i]}
                                onChange={(value) => {
                                    let input_ = input
                                    input_[i] = value
                                    setInput(input_)

                                    console.log("Q7: input_")
                                    console.log(input_)

                                    let tmpAnswer = props.answers
                                    let tmpUrl = ""
                                    for (let i = 0; i < questionId.length; i++) {
                                        console.log(input_)
                                        if (input_[i] !== undefined) {
                                            for (let chosenAns of input_[i]) {
                                                tmpUrl += `&entry.${questionId[i]}=${chosenAns}`
                                            }
                                        }
                                    }
                                    console.log("tmpUrl")
                                    console.log(tmpUrl)
                                    tmpAnswer[index] = tmpUrl
                                    props.setAnswers(tmpAnswer)

                                    console.log(tmpAnswer)
                                }}
                                label={item[3]}
                                data={data_select} /> <br />
                        </div>
                        )

                    })
                    : <></>}


                {/* </Radio.Group> */}
            </Paper>
        </>
    )
}
