import Carousel from 'react-bootstrap/Carousel';
import {Image} from "react-bootstrap";

import torture from './assets/torture.png';
import tree from './assets/tree.png';
import me from './assets/1351565-3.output.png';

import './TopCarousel.css';

const carouselStyle = {
  maxHeight: '75%',
};

function TopCarousel() {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <Image
                    src={torture}
                    alt="Funny moment lmao idk"
                    fluid
                    thumbnail
                    className="Car-Item"
                />
                <Carousel.Caption>
                    <h3>Slide example for Section 1</h3>
                    <p>Look at this funny screenshot. I do not have actual images.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    src={me}
                    alt="I'm just grabbing random images that are big enough to test this..."
                    className="vh-20"
                    fluid
                    thumbnail
                    className="Car-Item"
                />
                <Carousel.Caption>
                    <h3>Fanart Carousel Item</h3>
                    <p>Check the fanart i guess, when we have it lmao.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    src={tree}
                    alt="This is Factorio, not Minecraft. For now, pretend that it is Minecraft."
                    fluid
                    thumbnail
                    className="Car-Item"
                />
                <Carousel.Caption>
                    <h3>Check out the Minecraft thingy!</h3>
                    <p>
                        Whenever we have it, that is.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default TopCarousel;