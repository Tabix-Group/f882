import React, { useState } from 'react';
import { Box, Typography, Button, TextField, MenuItem } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { processPayment } from '../services/api';

const PaymentPage: React.FC = () => {
  const [method, setMethod] = useState('credit');
  const [details, setDetails] = useState({ card: '', paypal: '', mercado: '', crypto: '', bank: '', other: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      await processPayment({ method, details });
      setMessage('Payment processed successfully.');
    } catch (err: any) {
      setMessage('Error processing payment.');
    }
    setLoading(false);
  };
  return (
    <Box maxWidth={500} mx="auto" mt={5}>
      <Typography variant="h4" mb={2}>F88 Program Payment</Typography>
      <Typography mb={2}>Complete your payment to unlock all materials and personalized mentoring.</Typography>
      <form onSubmit={handleSubmit}>
        <TextField select label="Payment Method" value={method} onChange={e => setMethod(e.target.value)} fullWidth margin="normal">
          <MenuItem value="credit"><CreditCardIcon sx={{ mr: 1 }} />Credit Card</MenuItem>
          <MenuItem value="mercado"><AttachMoneyIcon sx={{ mr: 1, color: '#009EE3' }} />Mercado Pago</MenuItem>
          <MenuItem value="crypto"><CurrencyBitcoinIcon sx={{ mr: 1, color: '#F7931A' }} />Cryptocurrency</MenuItem>
          <MenuItem value="bank"><AccountBalanceIcon sx={{ mr: 1, color: 'success.main' }} />Bank Transfer</MenuItem>
          <MenuItem value="paypal"><AccountBalanceWalletIcon sx={{ mr: 1, color: '#003087' }} />PayPal</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </TextField>
        {method === 'credit' && (
          <TextField label="Card Details" name="card" value={details.card} onChange={handleChange} fullWidth margin="normal" required />
        )}
        {method === 'mercado' && (
          <TextField label="Mercado Pago Email or Phone" name="mercado" value={details.mercado} onChange={handleChange} fullWidth margin="normal" required />
        )}
        {method === 'crypto' && (
          <TextField label="Crypto Wallet Address" name="crypto" value={details.crypto} onChange={handleChange} fullWidth margin="normal" required />
        )}
        {method === 'bank' && (
          <TextField label="Bank Account/CBU" name="bank" value={details.bank} onChange={handleChange} fullWidth margin="normal" required />
        )}
        {method === 'paypal' && (
          <TextField label="PayPal Email" name="paypal" value={details.paypal} onChange={handleChange} fullWidth margin="normal" required />
        )}
        {method === 'other' && (
          <TextField label="Other Method" name="other" value={details.other} onChange={handleChange} fullWidth margin="normal" required />
        )}
        <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading} sx={{ mt: 2 }}>
          {loading ? 'Processing...' : 'Pay'}
        </Button>
      </form>
      {message && <Typography color="secondary" mt={2}>{message}</Typography>}
      <Button variant="text" color="primary" onClick={() => window.location.href = '/steps-to-do'} sx={{ mt: 2 }}>
        Back to Steps
      </Button>
    </Box>
  );
};

export default PaymentPage;
