import React from 'react'
import LayoutBasic from "../layouts/LayoutBasic"
import Seo from "../components/seo"
import  Image from "../components/image"
export default function index() {
  return (
    <LayoutBasic>
      <Seo title="index" />

      <h1> estamos en el home</h1>
      <Image fileName = "icono-pollo.jpg" alt="icono pollo" ></Image>
      

    </LayoutBasic>
  )
}

