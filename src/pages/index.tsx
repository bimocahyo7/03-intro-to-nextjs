import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1>Selamat datang di Website saya!</h1>
      <p>Ini adalah halaman utama</p>
      <p>
        <Link href="/about">Tentang Kami</Link>
      </p>
      <p>
        <Link href="/user">List Data User</Link>
      </p>
      <p>
        <Link href="/weather">Cek Cuaca</Link>
      </p>
    </div>
  );
};

export default HomePage;
