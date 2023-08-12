// _app.tsx es un componente especial que se utiliza para personalizar y envolver la aplicación con componentes o lógica global antes de que se rendericen las páginas individuales. Es un componente de nivel superior que se utiliza para realizar configuraciones generales, manejar estado global, aplicar estilos globales y realizar otras acciones comunes en toda la aplicación.

import { AppProps } from "next/app";
import React from "react";
// import '../styles/globals.css'; // podemos utilizar estilos globales
import Layout from "@/components/Layout/Layout";
import { BookProvider } from "@/context/BookContext";

/**
 * Componente raíz de la aplicación.
 * Envuelve cada página con el componente Layout para proporcionar una estructura común.
 * @param Component - Componente de la página actual.
 * @param pageProps - Propiedades pasadas a la página.
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BookProvider>
      <Layout>
        {/* El componente Layout envuelve cada página */}
        <Component {...pageProps} />
      </Layout>
    </BookProvider>
  );
}

export default MyApp;
