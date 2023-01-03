import app from "./app";
import "dotenv/config";

const PORT: Number = Number(process.env.PORT) || 5000;

app.listen(PORT, () => {
  console.log(`Rodando na porta = ${PORT}`);
});
