import { GetStaticProps } from "next/types"
import { getCompanyByUrl } from "../io/getCompanyData"

export interface CompanyDataProps {
  id: string
  name: string
  email: string
  logo: string
  phone: string
  primaryColor: string
  secondaryColor: string
  about: string
  profilePicture: string
}

export const buildStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const buildStaticProps: GetStaticProps = async (ctx) => {
  const [companyData, hasError] = await getCompanyByUrl(ctx.params?.host as string)

  console.log({companyData})

  if (hasError) {
    return { notFound: true }
  }

  return {
    props: {
      companyData,
    },
    revalidate: 60 * 2,
  }
}
