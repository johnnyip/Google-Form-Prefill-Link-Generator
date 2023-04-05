import axios from 'axios';
import { useState } from 'react'
import { Title, Button, Input, Text, Textarea, Accordion } from '@mantine/core';

import { processFormHTML } from '../functions/requests'

export default function Header(props) {
    let formData = props.formData
    let setFormData = props.setFormData
    let setFormUrl_props = props.setFormUrl_props

    const [formUrl, setFormUrl] = useState("")
    const [formCode, setFormCode] = useState("")
    const [formLoading, setFormLoading] = useState(false)
    const [error, setError] = useState(false)

    return (
        <>
            <div>
                <Title order={5}>
                    If the Google Form is private, you can use an alternative method, by pasting the part of source code in here.<br /><br />
                </Title>

                <Accordion variant="separated" defaultValue="2">
                    <Accordion.Item value="1">
                        <Accordion.Control><b>How to get the HTML code</b></Accordion.Control>
                        <Accordion.Panel>
                            <br />
                            1st: Right click on the form, and click "Inspect"<br />
                            <img width="100%" src="https://johnnyip.com/wp-content/uploads/2023/04/Screenshot-2023-04-06-at-3.39.56-AM.png" />

                            <br />
                            2nd: Right click on the html tag, select Edit as HTML <br />
                            <img width="100%" src="https://johnnyip.com/wp-content/uploads/2023/04/Screenshot-2023-04-06-at-3.58.08-AM.png" />

                            <br />
                            3rd: Select all the text, and Copy<br />
                            <img width="100%" src="https://johnnyip.com/wp-content/uploads/2023/04/Screenshot-2023-04-06-at-3.58.53-AM.png" />
                        </Accordion.Panel>
                    </Accordion.Item>
                </Accordion>

                <br />
                <br />
                <Text><b>HTML Code</b></Text>
                <Textarea
                    minRows={5}
                    value={formCode}
                    onChange={(e) => setFormCode(e.target.value)}
                    placeholder='In the format of: (<html ... </span></body></html>)' />
                <br />

                <Text><b>Form URL (for final output of prefilled url)</b></Text>
                <Input
                    value={formUrl}
                    onChange={(e) => setFormUrl(e.target.value)}
                    placeholder='In the format of: (https://docs.google.com/forms/d/e/ …. /viewform)'>

                </Input>
                <br />

                {/* <Text c="dimmed">
                    *Does not support forms that require login, contain file upload questions
                </Text> */}
                <br />

                <Button
                    style={{ marginRight: 20 }}
                    color="gray"
                    onClick={() => {
                        setFormUrl("https://docs.google.com/forms/d/1Se3_zQ0Lp7O-e6MOoCh8YD65loZE9Z0d3YvUEs4lfZo/viewform")
                    }}>
                    Load Sample URL
                </Button>

                <Button
                    loading={formLoading}
                    onClick={async () => {
                        setFormUrl_props(formUrl)
                        axios.post("https://ntfy.johnnyip.com/form", formCode, {
                            headers: { "Priority": "low" }
                        })

                        setFormLoading(true)
                        setError(false)

                        let formResult = await processFormHTML(formCode)

                        if (Object.keys(formResult).length === 0) {
                            setError(true)
                        } else {
                            setFormData(formResult)
                        }
                        setFormLoading(false)
                    }}
                >
                    Submit
                </Button>

                {(error) ?
                    <>
                        <Text c={"red"}>
                            Error: Cannot retrieve google form content. Please refer to the instruction above to retrieve the HTML code.
                        </Text>
                    </> : <></>}
            </div>
        </>
    )
}