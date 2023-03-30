'use client';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import { FormikValidationForm } from './components/FormikValidationForm';
import { FormikValidationUsingFormikTag } from './components/FormikValidationUsingFormikTag';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <FormikValidationForm />
      <FormikValidationUsingFormikTag />
    </>
  );
}
