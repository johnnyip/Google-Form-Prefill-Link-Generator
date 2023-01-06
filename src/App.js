import { useState } from 'react'
import { Divider } from '@mantine/core';

import Header from "./components/header";
import Result from './components/result';

function App() {
  const [formData, setFormData] = useState({})
  const [formUrl, setFormUrl_props] = useState("")


  return (
    <div className="App"
      style={{ textAlign: 'center', paddingTop: '50px', marginLeft: '30%', marginRight: '30%' }}>

      <Header
        formData={formData} setFormData={setFormData}
        setFormUrl_props={setFormUrl_props} />

      <br /><br /><br /><br />

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