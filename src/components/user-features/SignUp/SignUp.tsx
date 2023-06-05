import { useState } from "react";
import { useIntl } from "react-intl";
import LoadingSpinner from '../../../components/layout/Spinner/Spinner'

import { messages } from "./messages";

type SignUpForm = {
  email: string;
  password: string;
  password2: string;
};

export const SignUp = () => {
    const { formatMessage } = useIntl();

      // Local state and hooks
  const [loading, setLoading] = useState<boolean>(false);



  if (loading) {
    return <LoadingSpinner />;
  }
  return ()

};
