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

interface TrendsResponse {
  accuracy: string;
  email:string;
  explanation:string;
  input:string;
  language:string;
  output:string;
  raw_response:string;
  review_id:number;
  time_and_date:string;
}

interface HistoryResponse {
  accuracy: string;
  email:string;
  explanation:string;
  input:string;
  language:string;
  output:string;
  raw_response:string;
  review_id:string;
  time_and_date:string;
}

export type { ReviewResponse, LoginResponse, SignInResponse, TrendsResponse, HistoryResponse};
