interface ReviewResponse {
  detected_language: string;
  corrected_code: string;
  explanation: string;
  code_accuracy: string;
}
interface HistoryResposne {
  detected_language: string;
  corrected_code: string;
  explanation: string;
  code_accuracy: string;
}
interface LoginResponse {
  IsAuthenticated: string;
  ErrorMessage?: string;
}
interface SignInResponse {
  Response: string;
}

export type { ReviewResponse, LoginResponse, SignInResponse};
