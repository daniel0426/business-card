import React, { useState, useRef, memo } from "react";
import styles from "./imageInput.module.css";

const ImageInput = memo(({ imageUploader, name, onFileChange }) => {
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();
  const uploadHandler = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (e) => {
    setLoading(true);
    const uploaded = await imageUploader.upload(e.target.files[0]);
    setLoading(false);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };
  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        type="file"
        className={styles.input}
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      {!loading && (
        <button
          className={`${styles.button} ${name ? styles.pink : styles.grey}`}
          onClick={uploadHandler}
        >
          {name || "Upload Profile"}
        </button>
      )}
      {loading && <div className={styles.loadingSpinner}></div>}
    </div>
  );
});

export default ImageInput;
