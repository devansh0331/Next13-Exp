import Image from "next/image"

export async function generatestaticParams(){
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
    const res = await data.json()
    return res.results.map((movie) => ({
        movie: toString(movie.id),
    }))
}

export default async function Movie({params}) {
    const image_path = 'https://image.tmdb.org/t/p/original'

    const {movie} = params
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`)
    const res = await data.json()
    return (

        <div>
            <div>
            <h2 className="text-2xl">{res.title}</h2>
            <h2 className="text-lg">{res.release_date}</h2>
            <h2>Runtime : {res.runtime} minutes</h2>
            <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded-lg" >{res.status}</h2>
            <Image className="my-12 w-full" src={image_path + res.backdrop_path} height={800} width={800} alt={res.title}/> 
            <p className="mb-5">{res.overview}</p>
            </div>
        </div>
    )
}