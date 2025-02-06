
import "./App.css"

import 'maplibre-gl/dist/maplibre-gl.css';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import 'tippy.js/dist/tippy.css';


import { getData, getLatLong } from './apis/apis';
import { fetchLatLongAtOnce, customStyles } from './utils/utils';
import MapView from './components/MapView/MapView';
import Form from './components/Form/Form';
import RangeBar from "./components/RangeBar/RangeBar";

interface FormData {
  region: string;
  data: number;
}

Modal.setAppElement('#root');

function App() {

  const [state, setState] = useState<any>([]);
  const [regions, setRegions] = useState<any>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({ region: '', data: 0 });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {

    getData().then((data) => {
      const parsedContent = data?.data
      setState(parsedContent)
    })

  }, [])

  useEffect(() => {

    if (state && state.length > 0) {
      fetchLatLongAtOnce(state, getLatLong).then((region) => {
        const sortedData = region?.sort((a, b) => b.data - a.data);
        setRegions(sortedData);
      });
    }

  }, [state]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    const newState = {
      id: state.length + 1,
      region: formData.region,
      data: Number(formData.data),
    };

    setState((prevstate: any) => [...prevstate, newState]);

    setFormData({ region: '', data: 0 });
  };


  return (
    <>
      <div className="container">
        <div className="container-header">
        <RangeBar region={state} />
        <button className='form-button add-btn' onClick={openModal}>
          Add New data
        </button>
        </div>
    
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <Form formData={formData} handleSubmit={handleSubmit} handleInputChange={handleInputChange} />
          <button className='form-button' onClick={closeModal}>Close</button>
        </Modal>
        <MapView regions={regions} />
      </div>

    </>
  )
}

export default App
