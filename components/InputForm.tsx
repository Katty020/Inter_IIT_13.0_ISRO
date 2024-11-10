import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './InputForm.module.css';

const InputForm = () => {
  const [formData, setFormData] = useState({
    spectra: '',
    element: '',
    significance: '',
    flux: '',
    ratios: '',
    uncertainties: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.spectra || !formData.element || !formData.significance) {
      alert('Please fill in all required fields');
      return;
    }
    const response = await fetch('/api/process-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <motion.form
      className={styles.form}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onSubmit={handleSubmit}
    >
      <div>
        <label className={styles.label}>Spectra: </label>
        <motion.input
          className={styles.input}
          type="text"
          name="spectra"
          value={formData.spectra}
          onChange={handleChange}
          required
          whileFocus={{ scale: 1.05 }}
        />
      </div>
      <div>
        <label className={styles.label}>Element: </label>
        <motion.input
          className={styles.input}
          type="text"
          name="element"
          value={formData.element}
          onChange={handleChange}
          required
          whileFocus={{ scale: 1.05 }}
        />
      </div>
      <div>
        <label className={styles.label}>Significance: </label>
        <motion.input
          className={styles.input}
          type="text"
          name="significance"
          value={formData.significance}
          onChange={handleChange}
          required
          whileFocus={{ scale: 1.05 }}
        />
      </div>
      <div>
        <label className={styles.label}>Flux: </label>
        <motion.input
          className={styles.input}
          type="text"
          name="flux"
          value={formData.flux}
          onChange={handleChange}
          whileFocus={{ scale: 1.05 }}
        />
      </div>
      <div>
        <label className={styles.label}>Ratios: </label>
        <motion.input
          className={styles.input}
          type="text"
          name="ratios"
          value={formData.ratios}
          onChange={handleChange}
          whileFocus={{ scale: 1.05 }}
        />
      </div>
      <div>
        <label className={styles.label}>Uncertainties: </label>
        <motion.input
          className={styles.input}
          type="text"
          name="uncertainties"
          value={formData.uncertainties}
          onChange={handleChange}
          whileFocus={{ scale: 1.05 }}
        />
      </div>
      <motion.button
        className={styles.button}
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Submit
      </motion.button>
    </motion.form>
  );
};

export default InputForm;