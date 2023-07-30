import { ChangeEvent } from "react";

export type TInputProps = {
  id: string;
  value: string;
  label?: string;
  placeholder: string;
  onFocus?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export type TFormInputProps = {
  hint?: string;
  isError?: boolean;
} & TInputProps;