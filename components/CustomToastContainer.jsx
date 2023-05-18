"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function CustomToastContainer() {
  return <ToastContainer position="top-center" theme="dark" autoClose={2000} />;
}
