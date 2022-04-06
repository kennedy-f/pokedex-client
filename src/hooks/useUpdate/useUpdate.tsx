import { useState } from "react";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { GenerateUrlWithId } from "utils";
import { Api } from "service";

interface UseUpdateProps {
  overrideAxios?: AxiosRequestConfig;
  customQuery?: string;
}

type useUpdateMethods = "PATCH" | "PUT";

type UseUpdateFetchProps<Vars = any> = Pick<
  AxiosRequestConfig,
  "data" | "headers" | "params"
> & {
  method?: useUpdateMethods;
  id: number;
  variables: Vars;
};

type FetchUpdate = Omit<UseUpdateFetchProps, "id" | "variables">;

export function useUpdate<Data = any, Vars = any>(
  query: string,
  { overrideAxios, customQuery }: UseUpdateProps = {}
) {
  const [data, setData] = useState<Data>();
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<number>();
  const [error, setError] = useState<unknown>();
  const [axiosOriginalResponse, setAxiosOriginalResponse] =
    useState<AxiosResponse<Data, any>>();

  const fetch = async ({
    method = "PATCH",
    ...fetchUpdateProps
  }: UseUpdateFetchProps<Vars>) => {
    setLoading(true);
    try {
      const response = await (method === "PATCH" ? Api.patch : Api.put)<Data>(
        GenerateUrlWithId(fetchUpdateProps.id, query, customQuery),
        { ...fetchUpdateProps.variables }
      );

      setAxiosOriginalResponse(response);
      setData(response.data);
      setStatus(response.status);
      setLoading(false);
      return {
        data: response.data,
        status: response.status,
        axiosOriginalResponse: response,
      };
    } catch (err) {
      setLoading(false);
      setError(err);
      return {
        error: err,
      };
    }
  };

  const fetchUpdate = async (
    id: number,
    variables: Vars,
    props: FetchUpdate = {}
  ) => {
    return await fetch({ id, variables, ...props });
  };

  return {
    data,
    loading,
    status,
    error,
    axiosOriginalResponse,
    fetchUpdate,
  };
}
