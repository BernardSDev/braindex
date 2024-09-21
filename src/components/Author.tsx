import {IAuthor} from "../types/Post.ts";

export default function Author({name, profession, width, height} : IAuthor) {
    return (
        <div className="bg-green-300">
            <img src="public/images/vylass.PNG" alt="bernard" className={`rounded-full w-${width} h-${height}`} />
            <p>{name}</p>
            <p>{profession}</p>
        </div>
    )
}