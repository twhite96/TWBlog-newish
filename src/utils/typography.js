import Typography from 'typography'
import altonTheme from 'typography-theme-alton'

altonTheme.overrideThemeStyles = () => ({
  a: {
    color: '#06D7D9',
  },
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  'p': {
    fontSize: '.8vw'
  },
  'h1': {
    marginTop: '2rem',
    marginBottom: '2rem'
  }
})

delete altonTheme.googleFonts

// googleFonts: [
//   {
//     name: 'Open Sans',
//     styles: [
//       '700',
//     ],
//   },
//   {
//     name: 'Merriweather',
//     styles: [
//       '400',
//       '400i',
//       '700',
//       '700i',
//     ],
//   },
// ],

const typography = new Typography(altonTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale