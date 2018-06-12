import Typography from 'typography'
import githubTheme from 'typography-theme-github'

githubTheme.baseLineHeight = 1.5
githubTheme.scaleRatio = 1.5
githubTheme.baseParagraphSpacing = 24


githubTheme.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  }
})

const typography = new Typography(githubTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
