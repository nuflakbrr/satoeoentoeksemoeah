import React from 'react'
import Helmet from 'react-helmet'

export default function SEO({ title, desc, keyword, url }) {
    return (
        <Helmet>
            <meta charSet='utf-8' />
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <title>{title}</title>
            <meta name='description' content={desc} />
            <meta name='keywords' content={keyword} />
            <meta name='author' content='Naufal Akbar Nugroho' />
            <meta name='twitter:site' content='@nuflakbrr' />
            <meta name='twitter:creator' content='@nuflakbrr' />
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:title' content={title} />
            <meta name='twitter:description' content={desc} />
            <meta property='og:site_name' content={title} />
            <meta property='og:url' content={url} />
            <meta property='og:title' content={title} />
            <meta property='og:description' content={desc} />
            <meta property='og:type' content='website' />
        </Helmet>
    )
}
