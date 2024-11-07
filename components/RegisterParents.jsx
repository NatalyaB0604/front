import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import ParentsService from '../services/ParentsService'; // Убедитесь, что путь правильный

const RegisterParents = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    login: '',
    password: '',
    email: '',
    phoneNumber: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await ParentsService.createParents(formData);
      alert('Регистрация успешна');
      navigate('/');
    } catch (error) {
      console.error('Ошибка регистрации:', error);
      alert('Ошибка при регистрации');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, p: 3, boxShadow: 3, borderRadius: 2, textAlign: 'center' }}>
        <Typography variant="h5" component="h2" sx={{ mb: 3 }}>
          Регистрация родителя
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            name="name"
            label="Имя"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            name="lastName"
            label="Фамилия"
            value={formData.lastName}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            name="login"
            label="Логин"
            value={formData.login}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            name="phoneNumber"
            label="Номер телефона"
            value={formData.phoneNumber}
            onChange={handleChange}
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
          >
            Зарегистрироваться
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default RegisterParents;
