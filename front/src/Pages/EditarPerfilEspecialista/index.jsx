import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, Typography, Box } from '@mui/material';
import "./EditarPerfilEspecialista.css";




const AccountPage = () => {
    const [formData, setFormData] = useState({
        name: ' ',
        phone: ' ',
        birthday: ' ',
        gender: ' ',
        cpf: '',
        location: '',
        email: ' ',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission
        console.log(formData);
    };

    return (
        <Box className="account-page-container">
            <Typography className="account-page-title">
                Informações Básicas
            </Typography>
            <div className="account-page-avatar">
                <img src="https://via.placeholder.com/100" alt="Avatar" />
            </div>
            <form className="account-page-form" onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Nome"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Celular"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Aniversário"
                    type="date"
                    name="birthday"
                    value={formData.birthday}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                    margin="normal"
                />
                <FormControl fullWidth margin="normal">
                    <InputLabel>Gênero</InputLabel>
                    <Select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                    >
                        <MenuItem value="Feminino (Cis)">Feminino (Cis)</MenuItem>
                        <MenuItem value="Masculino (Cis)">Masculino (Cis)</MenuItem>
                        <MenuItem value="Outro">Outro</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    fullWidth
                    label="CPF"
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="De onde você atende?"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="E-mail"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Senha"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    margin="normal"
                />
                <Button className="account-page-button" type="submit" variant="contained" color="primary">
                    Salvar
                </Button>
            </form>
        </Box>
    );
};

function EditarPerfilEspecialista() {
    return (
        <section>
            <div>
                <AccountPage />
            </div>
        </section>
    )
}

export default EditarPerfilEspecialista;
