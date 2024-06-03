export type FormInput = {
  label: string;
  type: string;
  id: string;
  placeholder: string;
};

export type FormData_t = {
  title: string;
  button: string;
};

export type ServerResponse = {
  success: boolean;
  message: string;
};

export type ServerAction = (
  state: any,
  formData: FormData
) => Promise<ServerResponse>;
