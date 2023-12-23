import React from "react";
import BasicDatePicker from "../components/DatePicker";
import EmailInput from "../components/EmailInput/EmailInput";
import ButtonBases from "../components/FunShuffler";
import TextInput from "../components/TextInput/TextInput";

export default function AuthPage() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <ButtonBases />
      <div
        style={{
          paddingTop: 70,
        }}
      >
        <EmailInput />
        <TextInput />
        <BasicDatePicker />
      </div>
    </div>
  );
}
