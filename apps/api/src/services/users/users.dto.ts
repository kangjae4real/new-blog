export class UserResponse {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export class CreateUserDTO {
  name: string;
  email: string;
  password: string;
}
