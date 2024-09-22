import * as React from "react";
import {
  CssBaseline,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  Typography,
  Box,
} from "@mui/joy";

export function InvoiceJoy() {
  const [price, setPrice] = React.useState(0);
  const [quantity, setQuantity] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(parseFloat(event.target.value) || 0);
    calculateTotal(parseFloat(event.target.value), quantity);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(event.target.value) || 0);
    calculateTotal(price, parseInt(event.target.value));
  };

  const calculateTotal = (price: number, quantity: number) => {
    setTotal(price * quantity);
  };

  return (
    <form action="/api/invoice" method="post">
      <CssBaseline />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "24px",
          boxSizing: "border-box",
          maxWidth: "800px",
          gap: "24px",
        }}
      >
        <Typography level="h2">Faktura Registrering</Typography>

        <FormControl required size="lg">
          <FormLabel htmlFor="name">Navn </FormLabel>
          <Input
            id="name"
            name="name"
            required
            placeholder="Skriv inn ditt navn"
          />
        </FormControl>

        <FormControl required size="lg">
          <FormLabel htmlFor="address">Adresse </FormLabel>
          <Input
            id="address"
            name="address"
            required
            placeholder="Skriv inn din adresse"
          />
        </FormControl>

        <FormControl required size="lg">
          <FormLabel htmlFor="email">E-post </FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Skriv inn din e-postadresse"
          />
        </FormControl>

        <FormControl required size="lg">
          <FormLabel htmlFor="product">Produkt </FormLabel>
          <Input
            id="product"
            name="product"
            required
            placeholder="Beskriv produktet"
          />
        </FormControl>

        <FormControl required size="lg">
          <FormLabel htmlFor="quantity">Antall </FormLabel>
          <Input
            id="quantity"
            name="quantity"
            type="number"
            required
            placeholder="Antall produkter"
            onChange={handleQuantityChange}
          />
        </FormControl>

        <FormControl required size="lg">
          <FormLabel htmlFor="price">Pris per enhet (NOK) </FormLabel>
          <Input
            id="price"
            name="price"
            type="number"
            required
            placeholder="Pris per enhet"
            onChange={handlePriceChange}
          />
        </FormControl>

        <FormControl required size="lg">
          <FormLabel htmlFor="total">Totalpris (NOK) </FormLabel>
          <Input
            id="total"
            name="total"
            type="number"
            required
            value={total.toFixed(2)}
            readOnly
          />
        </FormControl>

        <FormControl size="lg">
          <FormLabel htmlFor="notes">Merknader</FormLabel>
          <Textarea
            id="notes"
            name="notes"
            minRows={4}
            placeholder="Andre detaljer om bestillingen"
          />
        </FormControl>

        <Button type="submit" variant="solid" color="primary" size="lg">
          Send Faktura
        </Button>
      </Box>
    </form>
  );
}
