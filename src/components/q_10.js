import { useState, useEffect } from 'react'
import { Paper } from '@mantine/core';
import moment from 'moment';
import { TimeInput } from '@mantine/dates';

export default function Q_10(props) {
    let data = props.data
    let index = props.index
    let radioOptions = data[4][0][1]
    //props.setAnswers
    //props.answer

    const [date, setDate] = useState(new Date());
    // console.log("data")
    // console.log(data)

    useEffect(() => {
        if (data !== undefined) {
            let questionId = data[4][0][0]

            let tmpAnswer = props.answers
            console.log(date)
            let encodedAns = moment(date).format('YYYY-MM-DD');
            tmpAnswer[index] = `entry.${questionId}=${encodedAns}`
            props.setAnswers(tmpAnswer)
        }
    })
    return (
        <>
            <Paper shadow="xs" p="md" withBorder style={{ textAlign: "left" }}>
                {data[1]}

                {/* Answer */}

                <TimeInput value={date} onChange={setDate} />

            </Paper>
        </>
    )
}
