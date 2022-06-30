import React, { useRef } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormControls } from "../hooks/ContactFormControls";

const inputFieldValues = [
  {
    name: "fullName",
    label: "Full Name",
    id: "my-name",
  },
  {
    name: "email",
    label: "Email",
    id: "my-email",
  },
  {
    name: "message",
    label: "Message",
    id: "my-message",
    multiline: true,
    rows: 10,
  },
];

export const ContactForm = () => {
  const form = useRef();
  const { handleInputValue, handleFormSubmit, formIsValid, errors } =
    useFormControls(form);

  return (
    <Box className="container">
      <Typography
        sx={{
          fontSize: 20,
          fontWeight: 600,
          fontFamily: "Text Me One",
          mt: { md: "0rem", xs: "2rem" },
        }}
      >
        Contact me with ease, I have already got my gmail app opened :)
      </Typography>
      <form ref={form} autoComplete="on" onSubmit={handleFormSubmit}>
        {inputFieldValues.map((inputFieldValue, index) => {
          return (
            <Box>
              <TextField
                sx={{ marginY: ".5rem" }}
                key={index}
                onChange={handleInputValue}
                onBlur={handleInputValue}
                name={inputFieldValue.name}
                label={inputFieldValue.label}
                error={errors[inputFieldValue.name]}
                multiline={inputFieldValue.multiline ?? false}
                fullWidth
                rows={inputFieldValue.rows ?? 1}
                autoComplete="none"
                {...(errors[inputFieldValue.name] && {
                  error: true,
                  helperText: errors[inputFieldValue.name],
                })}
              />
            </Box>
          );
        })}
        <Button
          type="submit"
          sx={{
            color: "black",
            background: "#eee",
            ":hover": { background: "black", color: "white" },
          }}
          disabled={!formIsValid()}
        >
          Send Message
        </Button>
      </form>
    </Box>
  );
};
