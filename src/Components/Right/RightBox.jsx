import { useState } from "react";
import SchemeChangerButton from "../Menu/SchemeChangerButton";
import ScrollBox from "./ScrollBox";

function RightBox(props) {

    const [scrollBoxVisibility,setScrollBoxVisibility] = useState(true)

    return <>
        {props.width >= 768 ? <div className="rightSchemeButton">
            <SchemeChangerButton componentScheme={props.componentScheme} changeComponentScheme={props.changeComponentScheme} />
        </div>
            :
            null}
        <div className={props.width >= 768 ? "rightBoxInfoDivBG" : "rightBoxInfoDivBGMobil"}>
            {props.width >= 768 ?
                <ScrollBox visibility={scrollBoxVisibility} setVisibility={setScrollBoxVisibility} colorScheme={props.componentScheme} />
                :
                null}
            <div className={props.width >= 768 ? "rightBoxInfoDivScroll" : "rightBoxInfoDivNoScroll"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo id urna iaculis posuere. Nullam fermentum dolor a justo malesuada, ut posuere orci suscipit. Maecenas et hendrerit nisl. Integer consectetur nisi ut arcu hendrerit, sit amet varius odio dictum. In hac habitasse platea dictumst. Sed gravida purus vel diam vestibulum, a aliquam metus consectetur. Duis tincidunt, libero id fermentum tristique, nunc justo dignissim nisl, vel dictum nulla purus sit amet elit. Nulla facilisi. Nulla facilisi. Curabitur nec elit a quam sodales vestibulum. Ut eu quam nec tortor congue tristique id ut elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo id urna iaculis posuere. Nullam fermentum dolor a justo malesuada, ut posuere orci suscipit. Maecenas et hendrerit nisl. Integer consectetur nisi ut arcu hendrerit, sit amet varius odio dictum. In hac habitasse platea dictumst. Sed gravida purus vel diam vestibulum, a aliquam metus consectetur. Duis tincidunt, libero id fermentum tristique, nunc justo dignissim nisl, vel dictum nulla purus sit amet elit. Nulla facilirightBoxInfoDivsi. Nulla facilisi. Curabitur nec elit a quam sodales vestibulum. Ut eu quam nec tortor congue tristique id ut elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo id urna iaculis posuere. Nullam fermentum dolor a justo malesuada, ut posuere orci suscipit. Maecenas et hendrerit nisl. Integer consectetur nisi ut arcu hendrerit, sit amet varius odio dictum. In hac habitasse platea dictumst. Sed gravida purus vel diam vestibulum, a aliquam metus consectetur. Duis tincidunt, libero id fermentum tristique, nunc justo dignissim nisl, vel dictum nulla purus sit amet elit. Nulla facilisi. Nulla facilisi. Curabitur nec elit a quam sodales vestibulum. Ut eu quam nec tortor congue tristique id ut elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo id urna iaculis posuere. Nullam fermentum dolor a justo malesuada, ut posuere orci suscipit. Maecenas et hendrerit nisl. Integer consectetur nisi ut arcu hendrerit, sit amet varius odio dictum. In hac habitasse platea dictumst. Sed gravida purus vel diam vestibulum, a aliquam metus consectetur. Duis tincidunt, libero id fermentum tristique, nunc justo dignissim nisl, vel dictum nulla purus sit amet elit. Nulla facilisi. Nulla facilisi. Curabitur nec elit a quam sodales vestibulum. Ut eu quam nec tortor congue tristique id ut elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo id urna iaculis posuere. Nullam fermentum dolor a justo malesuada, ut posuere orci suscipit. Maecenas et hendrerit nisl. Integer consectetur nisi ut arcu hendrerit, sit amet varius odio dictum. In hac habitasse platea dictumst. Sed gravida purus vel diam vestibulum, a aliquam metus consectetur. Duis tincidunt, libero id fermentum tristique, nunc justo dignissim nisl, vel dictum nulla purus sit amet elit. Nulla facilisi. Nulla facilisi. Curabitur nec elit a quam sodales vestibulum. Ut eu quam nec tortor congue tristique id ut elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo id urna iaculis posuere. Nullam fermentum dolor a justo malesuada, ut posuere orci suscipit. Maecenas et hendrerit nisl. Integer consectetur nisi ut arcu hendrerit, sit amet varius odio dictum. In hac habitasse platea dictumst. Sed gravida purus vel diam vestibulum, a aliquam metus consectetur. Duis tincidunt, libero id fermentum tristique, nunc justo dignissim nisl, vel dictum nulla purus sit amet elit. Nulla facilisi. Nulla facilisi. Curabitur nec elit a quam sodales vestibulum. Ut eu quam nec tortor congue tristique id ut elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo id urna iaculis posuere. Nullam fermentum dolor a justo malesuada, ut posuere orci suscipit. Maecenas et hendrerit nisl. Integer consectetur nisi ut arcu hendrerit, sit amet varius odio dictum. In hac habitasse platea dictumst. Sed gravida purus vel diam vestibulum, a aliquam metus consectetur. Duis tincidunt, libero id fermentum tristique, nunc justo dignissim nisl, vel dictum nulla purus sit amet elit. Nulla facilisi. Nulla facilisi. Curabitur nec elit a quam sodales vestibulum. Ut eu quam nec tortor congue tristique id ut elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo id urna iaculis posuere. Nullam fermentum dolor a justo malesuada, ut posuere orci suscipit. Maecenas et hendrerit nisl. Integer consectetur nisi ut arcu hendrerit, sit amet varius odio dictum. In hac habitasse platea dictumst. Sed gravida purus vel diam vestibulum, a aliquam metus consectetur. Duis tincidunt, libero id fermentum tristique, nunc justo dignissim nisl, vel dictum nulla purus sit amet elit. Nulla facilisi. Nulla facilisi. Curabitur nec elit a quam sodales vestibulum. Ut eu quam nec tortor congue tristique id ut elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo id urna iaculis posuere. Nullam fermentum dolor a justo malesuada, ut posuere orci suscipit. Maecenas et hendrerit nisl. Integer consectetur nisi ut arcu hendrerit, sit amet varius odio dictum. In hac habitasse platea dictumst. Sed gravida purus vel diam vestibulum, a aliquam metus consectetur. Duis tincidunt, libero id fermentum tristique, nunc justo dignissim nisl, vel dictum nulla purus sit amet elit. Nulla facilisi. Nulla facilisi. Curabitur nec elit a quam sodales vestibulum. Ut eu quam nec tortor congue tristique id ut elit.
                asd
            </div>
        </div>
    </>
}

export default RightBox;