import Link from "next/link"
import Image from "next/image"


export default function Movie({title, id , release_date , poster_path}) {
    const image_path = 'https://image.tmdb.org/t/p/original'
    return(
        <div>
            <h1>{title}</h1>
            <h2>{release_date}</h2>
            <Link href={`/${id}`}>

                <Image src={image_path + poster_path} height={300} width={400} alt={title}/>
            </Link>
            <br></br>

        </div>

    )
}