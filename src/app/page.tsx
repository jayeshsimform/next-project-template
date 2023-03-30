import React from "react";
import { FormikValidationForm } from "./components/FormikValidationForm";
import { FormikValidationUsingFormikTag } from "./components/FormikValidationUsingFormikTag";

export default function Home(): JSX.Element {
  return (
    <>
      <FormikValidationForm />
      <FormikValidationUsingFormikTag />
    </>
  );
}
