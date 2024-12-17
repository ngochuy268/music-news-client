import React, { useState  } from 'react';
import axios from 'axios';
import { TextField, Button,Typography} from '@mui/material';
import { styled } from '@mui/system';

const FormContainer = styled('div')({
  margin: '20px auto',
  padding: '20px',
  maxWidth: '600px',
});

const InputField = styled(TextField)({
  marginBottom: '10px',
});

const SubmitButton = styled(Button)({
  marginTop: '20px',
});

const InputData = () => {
  const [formData, setFormData] = useState({
    name: '',
    content: '',
    link_img: '',
    link_video: '',
    author: '',
    type: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    content: '',
    link_img: '',
    link_video: '',
    author: '',
    type: ''
  });

  const [submitSuccess, setSubmitSuccess] = useState("");

  const normalizeAuthorName = (name) => {
    
    return name.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const normalizedValue = name === 'author' ? normalizeAuthorName(value) : value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: normalizedValue,
    }));
    
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  


  const handleSubmit = async (e) => {
    e.preventDefault();

    
    let hasErrors = false;
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key} is required`; 
        hasErrors = true;
      }
    });

    if (hasErrors) {
     
      setErrors(newErrors);
      return;
    }
    try {
      
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/pop_music`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    });

      if (response.ok) {
        console.log('Data saved successfully');
        setSubmitSuccess(true);
        setFormData({

          name: '',
          content: '',
          link_img: '',
          link_video: '',
          author: '',
          type: ''
        });
          return { success: true, message: "商品が正常に追加されました!" };    
      } else {
          const errorData = await response.json();
          return { success: false, message: errorData.message || "エラーが発生しました。もう一度お試しください。" };
      }
      
    } catch (error) {
        console.error('Error saving data:', error);
    } 
  };
  console.log(formData)

  return (
    <div>
      <h2>Enter Information</h2>
      <FormContainer>
        <InputField
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          error={Boolean(errors.name)}
          helperText={errors.name}
        />
        <InputField
          label="Content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
          error={Boolean(errors.content)}
          helperText={errors.content}
        />
        <InputField
          label="Image Link"
          type="text"
          name="link_img"
          value={formData.link_img}
          onChange={handleChange}
          fullWidth
          error={Boolean(errors.link_img)}
          helperText={errors.link_img}
        />
        <InputField
          label="Video Link"
          type="text"
          name="link_video"
          value={formData.link_video}
          onChange={handleChange}
          fullWidth
          error={Boolean(errors.link_video)}
          helperText={errors.link_video}
        />
        <InputField
          label="Author"
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          fullWidth
          error={Boolean(errors.author)}
          helperText={errors.author}
        />
        <InputField
          label="Type"
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
          fullWidth
          error={Boolean(errors.type)}
          helperText={errors.type}
        />
        <SubmitButton type="submit" variant="contained" color="primary" onClick={handleSubmit}>
          Save
        </SubmitButton>
        {submitSuccess == true && (
          <Typography variant="body1" color="success">
            Gửi thành công
          </Typography>
        )}
      </FormContainer>
      
    </div>
  );
};

export default InputData;
