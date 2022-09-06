import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getPlant } from '@api'

import { Layout } from '@components/Layout'
import { Figure } from '@components/Figure'
import { AuthorCard } from '@components/AuthorCard'
import { RichText } from '@components/RichText'
import { Grid } from '@ui/Grid'
import { Typography } from '@ui/Typography'

const PlantEntryPage = () => {
  const [plant, setPlant] = useState<Plant | null>(null)
  const router = useRouter()
  const slug = router.query.slug

  useEffect(() => {
    if (typeof slug !== 'string') {
      return
    }

    getPlant(slug).then((data) => setPlant(data))
  })

  if (plant == null) {
    return (
      <Layout>
        <main>Loading awsesomeness</main>
      </Layout>
    )
  }

  return (
    <Layout>
      <Grid item xs={12} md={8} lg={9} component="article">
        <Figure>
          <img width={952} src={plant.image.url} alt={plant.image.title} />
        </Figure>
      </Grid>
    </Layout>
  )
}

export default PlantEntryPage
