import { useRef, useState } from 'react';
import emailService from '../services/emailService';
import { toast } from 'react-toastify';

export const useContactController = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    captcha: ''
  });
  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCaptchaChange = (value) => {
    setFormData({ ...formData, captcha: value });
  };


  const validateForm = () => {
    toast.dismiss();
    
    if (!formData.name.trim() || !formData.email.trim() || 
        !formData.subject.trim() || !formData.message.trim()) {
      toast.error('Please enter all fields!');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address!');
      return false;
    }

    if (!formData.captcha) {
      toast.error('Please verify that you are not a robot!');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await emailService.sendEmail(formData);
      toast.success('Email sent successfully!');
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        captcha: ''
      });

      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send email. Please try again later!');
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    handleCaptchaChange,
    recaptchaRef
  };
};