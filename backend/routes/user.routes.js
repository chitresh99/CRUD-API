import express from "express";
import { fetch,create , update, deleteuser} from '../controller/user.controller.js';

//ROUTER IS FROM express
const route = express.Router();

route.get("/getallusers",fetch);
route.post("/create",create);
route.put("/update/:id",update);
route.delete("/delete/:id",deleteuser);

export default route