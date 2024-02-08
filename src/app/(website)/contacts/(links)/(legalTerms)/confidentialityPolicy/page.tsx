import React from "react";
import { Policies } from "../_components/policies";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Політика конфіденційності | Tanpopo',
}
export default async function ConfidentialityPolicy() {
  return <Policies />;
}
