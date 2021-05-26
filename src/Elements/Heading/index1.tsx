type propsHeading = {
  level: any,
  title?: any,
  className ?: string
}
const Heading: React.FC<propsHeading> = ({ level, title }) => {
  const H = `h${level}`
  return (
      <>
          <H>
              {title}
          </H>
      </>
  )
}
export default Heading