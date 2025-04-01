import express from "express";
import unitRoutes from "./routes/units";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/units", unitRoutes);

app.listen(PORT, () => {
    console.log(`API läuft auf http://localhost:${PORT}/api/units`);
});
