import React from "react";
import "./Form.css";

interface FormData {
  region: string;
  data: number;
}

interface FormProps {
  formData: FormData;
  handleSubmit: (event: React.FormEvent) => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Form: React.FC<FormProps> = ({ formData, handleSubmit, handleInputChange }) => {
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="region" className="form-label">Region Name</label>
          <input
            type="text"
            id="region"
            name="region"
            value={formData.region}
            onChange={handleInputChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="data" className="form-label">Data</label>
          <input
            type="number"
            id="data"
            name="data"
            value={formData.data}
            onChange={handleInputChange}
            required
            className="form-input"
          />
        </div>
        <button className="form-button" type="submit">Add Region</button>
      </form>
    </div>
  );
};

export default Form;
