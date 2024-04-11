import express from "express";
import { AdminRoute, VendorRoute } from "./routes";
const PORT = 4000;

const app = express();

app.use("/admin", AdminRoute);
app.use("/vendor", VendorRoute);

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
