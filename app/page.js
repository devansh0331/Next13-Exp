import Image from 'next/image'
import styles from './page.module.css'
import Movie from "./Movie.jsx"

export default async function Home() {

  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json()
  // console.log(res)
  return (
    <main>
      {/* <h1>Hello NNEXT 13</h1> */}
      <div className="grid gap-16 grid-cols-fluid">
        
      {res.results.map((movie , key) => (
        <>
        <Movie key={key} id={movie.id} title={movie.title} release_date={movie.release_date} poster_path={movie.poster_path}/>
        </>
      ))}
      </div>
    </main>
  )
}
