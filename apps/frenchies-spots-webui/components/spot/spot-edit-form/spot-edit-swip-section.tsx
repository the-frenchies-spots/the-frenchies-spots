import React from "react";
import { Box, Dialogue } from "@frenchies-spots/materials";
import { TextController } from "../../from-controllers";
import {
  FieldErrors,
  UseFormWatch,
  type Control,
  type FieldValues,
} from "react-hook-form";
import { type TFields } from "../../../pages/auth-page/auth-page-fields";
import { AuthFormValues } from "./spot-edit-form";
import { TFunction } from "i18next";
import { LoginContainer } from "../login-container";

interface SectionListParams {
  onSubmitForm: () => void;
  goToNextIndex: () => void;
  setIsLoginForm: (value: boolean) => void;
  control: Control<FieldValues, any> | any;
  fields: TFields;
  errors: FieldErrors<AuthFormValues>;
  watch: UseFormWatch<AuthFormValues>;
  t: TFunction<"translation", undefined, "translation">;
}

export const authSwipSection = (params: SectionListParams) => {
  const { fields, control, errors, watch, t } = params;
  const { pseudo, email, password, confirmPassword } = watch();

  return [
    {
      layoutDisabled: true,
      onComfirm: () => null,
      render: (
        <LoginContainer
          onSubmit={params.onSubmitForm}
          opacity={0.4}
          isError={
            email == undefined ||
            errors.email != undefined ||
            password == undefined ||
            errors.password != undefined
          }
          onNext={() => {
            params.setIsLoginForm(false);
            params.goToNextIndex();
          }}
          login={{
            control: control,
            name: fields.email.name,
            label: "Mon email",
          }}
          password={{
            control: control,
            name: fields.password.name,
            label: "Mon mot de passe",
          }}
        />
      ),
    },
    {
      prevLabel: "Retour",
      nextLabel: "Suivant",
      onComfirm: () => params.goToNextIndex(),
      isNextDisable:
        pseudo == undefined ||
        errors.pseudo != undefined ||
        email == undefined ||
        errors.email != undefined,
      render: (
        <Box>
          <Dialogue
            messages={[
              `${t("pages.auth.firstSection.firstBubbleText")}`,
              `${t("pages.auth.firstSection.secondBubbleText")}`,
            ]}
          />

          <TextController
            control={control}
            name={fields.email.name}
            label={fields.email.label}
            variant="normal"
            style={{ marginTop: 30 }}
          />

          {email != undefined && errors.email == undefined && (
            <>
              <Dialogue
                style={{ marginTop: 30 }}
                messages={[`${t("pages.auth.firstSection.thirdBubbleText")}`]}
              />
              <TextController
                control={control}
                name={fields.pseudo.name}
                label={fields.pseudo.label}
                variant="normal"
                style={{ marginTop: 30 }}
              />
            </>
          )}
        </Box>
      ),
    },
    {
      prevLabel: "Retour",
      nextLabel: "Valider",
      onComfirm: () => params.onSubmitForm(),
      isNextDisable:
        password == undefined ||
        errors.password != undefined ||
        confirmPassword == undefined ||
        errors.confirmPassword != undefined,
      render: (
        <Box>
          <Dialogue
            messages={[`${t("pages.auth.secondSection.firstBubbleText")}`]}
          />

          <TextController
            control={control}
            name={fields.password.name}
            label={fields.password.label}
            variant="normal"
            secureTextEntry={true}
            style={{ marginTop: 30 }}
          />

          <TextController
            control={control}
            name={fields.confirmPassword.name}
            label={fields.confirmPassword.label}
            variant="normal"
            secureTextEntry={true}
            style={{ marginTop: 30 }}
          />
        </Box>
      ),
    },
  ];
};
