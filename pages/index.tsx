import { Layout } from '@components/Layout'
import { PlantCollection } from '@components/PlantCollection'
import { Hero } from '@components/Hero'
import { Authors } from '@components/Authors'
import { getPlantList } from '@api'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

type HomeProps = { plants: Plant[] }

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const plants = await getPlantList({ limit: 10 })
  return {
    props: {
      plants,
    },
  }
}

export default function Home({
  plants,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Hero {...plants[0]} className="mb-20" />
      <Authors className="mb-10" />
      <PlantCollection
        plants={plants.slice(1, 3)}
        variant="vertical"
        className="mb-24"
      />
      <PlantCollection plants={plants} variant="square" />
    </Layout>
  )
}
