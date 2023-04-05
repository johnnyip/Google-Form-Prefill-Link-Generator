import axios from 'axios';

export const getFormHTML = async (url) => {
    let result = {}

    // axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    axios.defaults.headers.common['Accept'] = "*/*"

    url = "https://cors.johnnyip.com/" + url
    await axios.get(url)
        .then((response) => {
            if (response.status === 200 && response.data.split("var FB_PUBLIC_LOAD_DATA_ = ").length === 2) {
                let tmpData = response.data.split("var FB_PUBLIC_LOAD_DATA_ = ")[1]
                console.log("tmpData")
                console.log(tmpData.split("</script>")[0])
                tmpData = JSON.parse(tmpData.split("</script>")[0])[1]

                result["title"] = tmpData[8]
                console.log(tmpData)

                tmpData = tmpData[1]

                result["questions"] = tmpData
            } else {
                result = {}
            }
        })
        .catch((err) => {
            result = {}
        })

    console.log(result)
    return result
}

export const processFormHTML = async (content) => {
    let result = {}

    try {
        console.log("content")
        console.log(content)
        console.log(content.split("var FB_PUBLIC_LOAD_DATA_ = ").length === 2)
        let tmpData = content.split("var FB_PUBLIC_LOAD_DATA_ = ")[1]
        console.log("tmpData")
        console.log(tmpData)
        console.log(tmpData.split("</script>")[0])
        tmpData = JSON.parse(tmpData.split("</script>")[0])[1]

        result["title"] = tmpData[8]
        console.log(tmpData)

        tmpData = tmpData[1]

        result["questions"] = tmpData

    } catch (error) {
        console.log(error)
    }
    return result
}
