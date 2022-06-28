import { api } from "./api";

export const getCompanyByUrl = async (url: string) => {
  const safeUrl = encodeURIComponent(url || '').replace(/\./g, '%2E');

  console.log({safeUrl})

  const [result, hasError] = await api.get(`/public/companies/${safeUrl}`)
    .then(res => [res.data, false])
    .catch(res => [null, true]);

  return [result, hasError]
}

export const getCompanyIngredients = async (companyId: string) => {
  const [result, hasError] = await api.get(`/public/ingredients/${companyId}`)
    .then(res => [res.data, false])
    .catch(res => [null, true]);

  return [result, hasError]
}