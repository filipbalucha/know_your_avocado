import avocado from './avocado.png';
import {useState} from 'react';

function App() {
  const [uploadedImage, setUploadedImage] = useState();
  const [ripeness, setRipeness] = useState();
  const [confidence, setConfidence] = useState();
  
  const handleImageUploaded = (event) => {
    const image = event.target.files[0];
    setUploadedImage(image);
    setRipeness(null);
  }

  const handlePredictPressed = () => {
    const data = new FormData();
    data.append('file', uploadedImage);
    fetch('/predict', {
        method: 'POST',
        body: data
    }).then(res => res.json()).then(data => {
      console.log(data);
      setRipeness(data.ripeness);
      setConfidence(data.confidence * 100);
    })
  }

  return (
    <div className="App" style={{textAlign: "center"}}>
      <img src={avocado} alt="" width="100px"/>
      <h1>Know your avocado!</h1>
      <input type="file" accept="image/*" capture="environment" onChange={handleImageUploaded}></input>
      <p>OR</p>
      <input type="file" accept="image/*"></input>
      <p></p>
      <img src={uploadedImage && URL.createObjectURL(uploadedImage)} alt="" width="100px"/>
      <button disabled={!uploadedImage} onClick={handlePredictPressed}>Predict ripeness</button>
      {ripeness && confidence && <p>This avocado is {ripeness} with a {confidence.toFixed(2)}% probability!</p>}
    </div>
  );
}

export default App;
