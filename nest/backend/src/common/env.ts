import { InternalServerErrorException } from '@nestjs/common';

export default () => {
  const port = parseInt(process.env.PORT);

  if (isNaN(port)) {
    throw new InternalServerErrorException('Port를 설정해주세요.');
  }

  return {
    // Add your own properties here however you'd like
    port,
    database: {
      todos: {
        port,
        password: process.env.POSTGRES_PASSWORD,
        name: process.env.DATABASE,
      },
    },
    jwt: {
      secret: process.env.JWT_SECRET,
    },
  };
};
