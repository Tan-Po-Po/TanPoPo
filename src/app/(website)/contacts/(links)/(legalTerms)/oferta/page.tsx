import React from "react";
import { Policies } from "../_components/policies";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Оферта | Tanpopo',
}
export default async function OfertaPage() {
  return <Policies />;
}
