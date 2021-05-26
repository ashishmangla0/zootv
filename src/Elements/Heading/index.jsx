const Heading = ({ level, title,className }) => {
    const H = `h${level}`
    return (
        <>
            <H className={ className ? className : ''}>
                {title}
            </H>
        </>
    )
  }
  export default Heading




//   type propsHeading = {
//     level: any,
//     title?: any,
//     className ?: string
//   }
//   const Heading: React.FC<propsHeading> = ({ level, title }) => {
//     const H = `h${level}`
//     return (
//         <>
//             <H>
//                 {title}
//             </H>
//         </>
//     )
//   }
//   export default Heading