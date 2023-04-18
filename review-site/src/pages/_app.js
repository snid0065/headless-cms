

function MyApp({Component, pageProps}) {
   return (
<>
<p> Im a header</p>
<Component {...pageProps} />
</>
   )
}

export default MyApp