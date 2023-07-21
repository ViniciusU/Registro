
import {BannerHead} from "./styles";

interface BannerPros {
    title:string;
}

export function Banner({title}:BannerPros){
    return(
        <BannerHead>
            <h3>{title}</h3>
        </BannerHead>
    )
}
