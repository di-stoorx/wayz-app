import { useState } from "react";
import Logo from "../../components/logo";
import Background from "../../components/background";
import CustomButton from "../../components/customButton";
import CustomTextInput from "../../components/customTextInput";
import { Text } from "native-base";
import { theme } from "../../core/theme";

export default function ResetPasswordScreen() {
  const [email, setEmail] = useState({ value: "", error: "" });

  //   const sendResetPasswordEmail = () => {
  //     const emailError = emailValidator(email.value);
  //     if (emailError) {
  //       setEmail({ ...email, error: emailError });
  //       return;
  //     }
  //     navigation.navigate("LoginScreen");
  //   };

  return (
    <Background>
      {/* <BackButton goBack={navigation.goBack} /> */}
      <Logo />
      <Text
        fontSize={21}
        color={theme.colors.primary}
        fontWeight={"bold"}
        paddingX={12}
      >
        Restore Password
      </Text>
      <CustomTextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="You will receive email with password reset link."
      />
      <CustomButton
        mode="contained"
        onPress={() => console.log(email)}
        style={{ marginTop: 16 }}
      >
        Send Instructions
      </CustomButton>
    </Background>
  );
}
