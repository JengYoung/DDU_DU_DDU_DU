
export type TInputProps = {
  id: string;
  label?: string;
  placeholder: string;
}

export type TFormInputProps = {
  hints?: string;
  isError?: boolean;
} & TInputProps;