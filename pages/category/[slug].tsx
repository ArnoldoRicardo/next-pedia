import { Layout } from '@components/Layout'
import { getPlantListByCategory, getCategoryList } from '@api'
import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from 'next'
import { PlantEntryInline } from '@components/PlantCollection'

type PathType = {
  params: {
    slug: string
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const entries = await getCategoryList({ limit: 10 })

  const paths: PathType[] = entries.map((category) => ({
    params: {
      slug: category.title,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

type CategoryPlants = { entries: Plant[]; category: Category }

type CategoryEntryPageProps = {
  categoryPlants: CategoryPlants
}

export const getStaticProps: GetStaticProps<CategoryEntryPageProps> = async ({
  params,
}) => {
  const slug = params?.slug

  if (typeof slug !== 'string') {
    return { notFound: true }
  }

  try {
    const categoryPlants = await getPlantListByCategory({
      category: slug,
      limit: 10,
    })

    return {
      props: {
        categoryPlants,
      },
    }
  } catch (e) {
    return { notFound: true }
  }
}

const CategoryEntryPage = ({
  categoryPlants,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      {categoryPlants.entries.map((plantEntry) => (
        <article className="mb-4" key={plantEntry.id}>
          <PlantEntryInline {...plantEntry} />
        </article>
      ))}
    </Layout>
  )
}

export default CategoryEntryPage
