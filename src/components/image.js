import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

export default  function  Image  (props)  {
  const { fileName , alt} =props

  console.log(props);
  console.log("obteniendo imagen");
  

  return (
    <StaticQuery  
      query={graphql`
        query {
          images: allFile{
            edges{
              node{
                relativePath
                childImageSharp{
                  fluid{
                    ...GatsbyImageSharpFluid
                  }

                }
              }
            }
          }


                        
        }
              
              
      `}
      render={data =>{
        const image = data.images.edges.find(image =>{return image.node.relativePath.includes(fileName)
        })
        console.log(data)
        console.log(image)
        if (!image) return null
        
        return <Img alt = {alt} fluid={image.node.childImageSharp.fluid}></Img>

      }}
                
    />


  )
  
  
}

/*

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "icono pollo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Image
*/