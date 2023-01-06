import { Paper } from '@mantine/core';

export default function Q_0(props) {
    let data = props.data
    //props.setAnswers
    //props.answer


    // console.log("data")
    // console.log(data)
    return (
        <>
            <Paper shadow="xs" p="md" withBorder style={{ textAlign: "left" }}>
                {/* Question Text */}
                {data[1]}

                {/* Answer */}
                <div style={{ textAlign: "center" }}>[Section Divider]</div>

            </Paper>
        </>
    )
}
