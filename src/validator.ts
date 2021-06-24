type SetError = { key: string; message: string | null };

export type Error = { fail: boolean; errors: any };

type Props = { [key in string]: (args: any) => string | null };

export const Validation = (props: Props, data: any): Error => {
  let fail = false;
  const errors: any = {};
  const setError = ({ message, key }: SetError): void => {
    if (message) {
      fail = true;
      errors[key] = message;
    }
  };

  // TODO: VALIDATE IF DATA IS OBJECT

  Object.keys(props).forEach((key) => {
    setError({ key, message: (props[key] as any)(data[key]) });
  });

  return { fail, errors };
};
