import React from "react";
import RootLayout from "./src/components/RootLayout";
import "./styles.css";
import "@fontsource/inter";

export const wrapRootElement = ({ element }) => <RootLayout>{element}</RootLayout>;