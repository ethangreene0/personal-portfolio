import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import {Banner} from "../components/Banner";
import {Projects} from "../components/Projects";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Banner">
                <Banner/>
            </ComponentPreview>
            <ComponentPreview path="/Projects">
                <Projects/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews