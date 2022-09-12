import { Layout } from '@components/Layout'
import { getAuthorList, getPlantListByAuthor } from '@api'
import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from 'next'
import { PlantEntryInline } from '@components/PlantCollection'

type PathType = {
  params: {
    slug: string
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const authors = await getAuthorList({ limit: 10 })

  const paths: PathType[] = authors.map((author) => ({
    params: {
      slug: author.id,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

type TopStoriesPageProps = {
  authorPlants: Plant[]
}

export const getStaticProps: GetStaticProps<TopStoriesPageProps> = async ({
  params,
}) => {
  const slug = params?.slug

  if (typeof slug !== 'string') {
    return { notFound: true }
  }

  try {
    const authorPlants = await getPlantListByAuthor({
      authorId: slug,
      limit: 10,
    })

    return {
      props: {
        authorPlants,
      },
    }
  } catch (e) {
    return { notFound: true }
  }
}

const TopStoriesPage = ({
  authorPlants,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      {authorPlants.map((plantEntry) => (
        <article className="mb-4" key={plantEntry.id}>
          <PlantEntryInline {...plantEntry} />
        </article>
      ))}
    </Layout>
  )
}

export default TopStoriesPage
