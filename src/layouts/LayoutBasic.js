import  React from 'react'
import { useStaticQuery , graphql, Link} from "gatsby"

export default function LayoutBasic(props) {
    const   {children} = props
    const data = useStaticQuery (graphql`
    query SiteTitleQuery{
        site{

            siteMetadata{
                title
                author
                description
            }
        }



    }
    
    `)
    console.log(data)
    return (
        <div>
            <h1>{data.site.siteMetadata.title}</h1>
            <Link to="/">Index</Link>
            <Link to="/about">About</Link>
            {children}
        </div>
    )
}

