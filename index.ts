import express from "express";
import { AdminRoute, VendorRoute } from "./routes";
const PORT = 4000;

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/admin", AdminRoute);
app.use("/vendor", VendorRoute);

app;

app.listen(PORT, () => {
  console.clear();
  console.log(`listening to port ${PORT}`);
});
