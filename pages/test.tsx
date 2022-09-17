import { Layout } from '@components/Layout'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { testConexion } from '../services'

type HomeProps = { plants: any[] }

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const plants = [1, 2, 3, 4]
  testConexion()
  console.log('hola')

  return {
    props: {
      plants,
    },
  }
}

export default function Test({
  plants,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      hola
      {plants}
    </Layout>
  )
}
