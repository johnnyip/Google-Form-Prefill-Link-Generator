import { useState, useEffect } from 'react'
import { Title, Divider, CopyButton, Button, Input } from '@mantine/core';

import Q_0 from './q_0';
import Q_1 from './q_1';
import Q_2 from './q_2';
import Q_3 from './q_3';
import Q_4 from './q_4';
import Q_5 from './q_5';
import Q_6 from './q_6';
import Q_7_multi from './q_7_multi';
import Q_7_single from './q_7_single';
import Q_8 from './q_8';
import Q_9 from './q_9';
import Q_10 from './q_10';

export default function Result(props) {
    let formData = props.formData
    let questions = formData.questions
    let formUrl = props.formUrl


    //Chosen answer
    const [answers, setAnswers] = useState(Array(questions.length))
    const [finalUrl, setFinalUrl] = useState("")

    return (
        <>
            <Title order={3}>{formData.title}</Title>
            <Divider />

            <Button onClick={() => { console.log(answers) }}>Check</Button>
            {questions.length !== 0 ?
                [...questions].map((item, i) => {
                    let qtype = item[3]

                    if (qtype === 0)
                        return (<Q_0
                            data={item} key={i} index={i}
                            answers={answers} setAnswers={setAnswers} />)
                    else if (qtype === 1)
                        return (<Q_1 data={item} key={i} index={i}
                            answers={answers} setAnswers={setAnswers} />)
                    else if (qtype === 2)
                        return (<Q_2 data={item} key={i} index={i}
                            answers={answers} setAnswers={setAnswers} />)
                    else if (qtype === 3)
                        return (<Q_3 data={item} key={i} index={i}
                            answers={answers} setAnswers={setAnswers} />)
                    else if (qtype === 4)
                        return (<Q_4 data={item} key={i} index={i}
                            answers={answers} setAnswers={setAnswers} />)
                    else if (qtype === 5)
                        return (<Q_5 data={item} key={i} index={i}
                            answers={answers} setAnswers={setAnswers} />)
                    else if (qtype === 6)
                        return (<Q_6 data={item} key={i} index={i}
                            answers={answers} setAnswers={setAnswers} />)
                    else if (qtype === 7 && item[4][0][11][0] === 1)
                        return (<Q_7_multi data={item} key={i} index={i}
                            answers={answers} setAnswers={setAnswers} />)
                    else if (qtype === 7 && item[4][0][11][0] === 0)
                        return (<Q_7_single data={item} key={i} index={i}
                            answers={answers} setAnswers={setAnswers} />)
                    else if (qtype === 8)
                        return (<Q_8 data={item} key={i} index={i}
                            answers={answers} setAnswers={setAnswers} />)
                    else if (qtype === 9)
                        return (<Q_9 data={item} key={i} index={i}
                            answers={answers} setAnswers={setAnswers} />)
                    else if (qtype === 10)
                        return (<Q_10 data={item} key={i} index={i}
                            answers={answers} setAnswers={setAnswers} />)



                })
                : <></>}

            <br /><br />
            <Button
                onClick={() => {
                    let finalUrl = formUrl + "?"
                    for (let answer of answers) {
                        if (answer !== undefined) {
                            finalUrl += `&${answer}`
                        }
                    }
                    console.log(finalUrl)
                    setFinalUrl(finalUrl)
                }}>Generate</Button>

            <br />
            {(finalUrl !== "") ?
                <>
                    <br />
                    <Input value={finalUrl} disabled></Input><br />

                    <CopyButton value={finalUrl}>
                        {({ copied, copy }) => (
                            <Button
                                style={{ marginRight: 20 }}
                                color={copied ? 'teal' : 'blue'}
                                onClick={copy}>
                                {copied ? 'Copied' : 'Copy URL to clipboard'}
                            </Button>
                        )}
                    </CopyButton>

                    <a target="_blank" href={finalUrl}>
                        <Button>Open In New Tab</Button>
                    </a>
                </>
                : <></>}
        </>
    )

}