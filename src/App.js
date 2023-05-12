import { useState } from 'react'
import { Button, Title, Tabs } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons'

import ByURL from "./components/byURL";
import ByCode from "./components/byCode";
import Result from './components/result';

function App() {
  const [formData, setFormData] = useState({})
  const [formUrl, setFormUrl_props] = useState("")


  return (
    <div className="App"
      style={{ textAlign: 'center', marginLeft: '30%', marginRight: '30%' }}>

      {/* <Title>
        Google Form Prefill Link Generator
      </Title><br /><br /> */}

      <a target="_blank" href={"https://github.com/johnnyip/Google-Form-Prefill-Link-Generator"}>
        <Button
          leftIcon={<IconBrandGithub />}
          color="violet"
        >
          Source Code Available on GitHub
        </Button><br /><br />
      </a>

      <Tabs variant="outline" defaultValue="url">
        <Tabs.List grow>
          <Tabs.Tab value="url" >By URL</Tabs.Tab>
          <Tabs.Tab value="code" >By Page Source</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="url" pt="xs">
          <ByURL
            formData={formData} setFormData={setFormData}
            setFormUrl_props={setFormUrl_props} />
        </Tabs.Panel>

        <Tabs.Panel value="code" pt="xs">
          <ByCode
            formData={formData} setFormData={setFormData}
            setFormUrl_props={setFormUrl_props} />
        </Tabs.Panel>

      </Tabs>




      {(formData !== "error" && Object.keys(formData).length !== 0) ?
        <>
          <Result formData={formData} formUrl={formUrl} />
        </> : <></>}

    </div>

  );
}

export default App;

//Samples
// https://docs.google.com/forms/d/e/1FAIpQLSeU6Y3zKES1Ufv7W_hxhc07nFDPslaWjtsGo5PSccNRBOsJHw/viewform
// https://docs.google.com/forms/d/e/1FAIpQLSdhcNge1cDag9O9VAJnB1-9O2WREw9fldHFPO3eX92OSaIv8A/viewform
// https://docs.google.com/forms/d/e/1FAIpQLSez2h9QRNIVrz58AACgPBUZV-GU6PW6BSAM-zxOfu_tyZXymw/viewform

// var FB_PUBLIC_LOAD_DATA_