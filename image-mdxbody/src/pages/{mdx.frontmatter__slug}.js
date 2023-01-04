import * as React from 'react'
import {graphql} from 'gatsby'

const BlogPost = ({ data, children }) => {

    return (
        <>
            <h1>{data.mdx.frontmatter.subject}</h1>
            {children}
        </>

    )

}

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      embeddedImagesLocal {
        id
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  }
}
`

export default BlogPost
