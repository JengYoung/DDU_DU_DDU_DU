interface ISuccess<D> {
  status: number;
  data: D;
}
interface IError {
  status: number;
  message: string;
}

interface IWrapPromiseReturn<Response> {
  read: () => ISuccess<Response> | IError;
}

function wrapPromise<Response>(promise: Promise<ISuccess<Response>>): IWrapPromiseReturn<Response> {
  let status = 'pending';
  let response: ISuccess<Response> | IError;

  const suspender = promise.then(
    (res: ISuccess<Response>) => {
      status = 'success';
      response = res;
    },
    (err: IError) => {
      status = 'error';
      response = err;
    }
  );

  const read = () => {
    switch (status) {
      case 'pending':
        throw suspender;
      case 'error':
        throw response;
      default:
        return response;
    }
  };

  return { read };
}

export default wrapPromise;
