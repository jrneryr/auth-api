import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';

export class SignUpDTO {
  @IsString()
  @IsNotEmpty({ message: 'name is required' })
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'password is required' })
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        'password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character',
    },
  )
  password: string;
}

export class SignInDTO {
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'password is required' })
  password: string;
}
