import { Request, Response } from 'express';
import pool from '../config/db';
import bcrypt from 'bcrypt';

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email y contraseña requeridos.' });
  }
  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    console.log('Resultado búsqueda usuario:', result.rows);
    if (result.rows.length === 0) {
      console.log('Usuario no encontrado para email:', email);
      return res.status(401).json({ message: 'Usuario no encontrado.' });
    }
    const user = result.rows[0];
    const match = await bcrypt.compare(password, user.password);
    console.log('Comparación bcrypt:', match);
    if (!match) {
      console.log('Contraseña incorrecta para email:', email);
      return res.status(401).json({ message: 'Contraseña incorrecta.' });
    }
    // Aquí podrías generar y devolver un token JWT si lo deseas
    res.status(200).json({ message: 'Login exitoso.', user: { id: user.id, name: user.name, email: user.email } });
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ message: 'Error al iniciar sesión.' });
  }
};
// ...existing code...

export const registerUser = async (req: Request, res: Response) => {
  console.log('Datos recibidos en registro:', req.body);
  const { name, email, password, birthdate, gender, country } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Name, email and password are required.' });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      'INSERT INTO users (name, email, password, birthdate, gender, country, created_at) VALUES ($1, $2, $3, $4, $5, $6, NOW()) RETURNING id',
      [name, email, hashedPassword, birthdate, gender, country]
    );
    res.status(201).json({ id: result.rows[0].id, message: 'User registered successfully.' });
  } catch (error) {
    console.error('Registration error:', error);
    if ((error as any).code === '23505') {
      return res.status(409).json({ message: 'Email already registered.' });
    }
    res.status(500).json({ message: 'Error registering user.' });
  }
};
