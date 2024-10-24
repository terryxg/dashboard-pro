import { CreateAdmin, Login } from "@/types/types";
import API from "./client";

export const login = async (data: Login) => API.post("/auth/login", data);
export const createAdmin = async (data: CreateAdmin) => API.post("/admin/newadmin", data);
