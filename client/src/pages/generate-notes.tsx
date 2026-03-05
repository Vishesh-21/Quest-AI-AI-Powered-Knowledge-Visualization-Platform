import { Container } from "@/components/contain";
import { AINoteGenerator } from "@/components/notes/notes-form";
import React from "react";

export const GenerateNotes = () => {
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState(null);
  const [error, setError] = React.useState("");

  return (
    <Container>
      <AINoteGenerator
        loading={loading}
        setLoading={setLoading}
        setResult={setResult}
        setError={setError}
      />
    </Container>
  );
};
