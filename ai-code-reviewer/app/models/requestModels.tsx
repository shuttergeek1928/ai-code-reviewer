interface RequestReviewModel {
  email: string;
  code_input: string;
}

interface RequestLoginModel {
  email: string;
  password: string;
}

interface RequestRegisterModel {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}

export type { RequestReviewModel, RequestLoginModel, RequestRegisterModel };
