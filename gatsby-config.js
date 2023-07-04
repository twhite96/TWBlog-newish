module.exports = {
  siteMetadata: {
    title: 'tiff's Gatsby Blog',
    author: 'tiff',
    description: 'tiff',
    siteUrl: 'https://tiffanywhite.tech',
    social: {
      twitter: 'https://www.youtube.com/watch?v=sXwaRjU7Tj0'
    }
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: "gatsby-remark-embed-spotify",
            options: {
              height: 600
            }
          },
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              ratio: 1.77,
              height: 400,
              related: false,
              noIframeBorder: true
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '÷'
            }
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants'
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-61294063-1`
      }
    },
    `gatsby-plugin-twitter`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tiff's Gatsby blog`,
        short_name: `TRW Blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#06D7D9`,
        display: `minimal-ui`,
        icon: `src/assets/icon.png`
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Fira Code'],
          urls: ['./src/assets/fonts/fira_code.css']
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    }
  ]
}
