"use client";
import React from 'react'
import Pic  from '@/components/pic'
import TopPicker from '@/components/Top-Picker';
import OurBlog from "@/components/Our-Blog"
import OurInstagram from '@/components/Our-Instagram';
import Footer from '@/components/Footer';


import SingleProduct from '@/components/SingleProducts/SingleProduct';
import RelatedProducts from '@/components/Related Products/RelatedProducts';
import CartSidebar from '@/components/Cart-sidebar/Cart-sidebar';
import MyAccount from '@/components/My-Account/My-Account';
import CheckOut    from '@/components/CheckOut/CheckOut';
 import Cart from '@/components/Cart/Cart'
import Contact from'@/components/Contact/Contact'
import Blog from '@/components/Blog/blog'
export default function page() {
  return (
    <div>
      {/* <Header/> */}
      <Pic/>
    <TopPicker/>
    <OurBlog/>
    <OurInstagram/>
 
    <Footer/>
    <SingleProduct/>
    <RelatedProducts/>
    <CartSidebar/>
    <MyAccount/>
     <CheckOut/>
     <Cart/>
     <Contact/>  
      <Blog />

  
   

    </div>
  )
}
