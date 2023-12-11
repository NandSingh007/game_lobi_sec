import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import img1 from '../Images/slideone.jpeg';
import img2 from '../Images/slidetwo.jpeg';
import img3 from '../Images/slidethree.jpeg'
import '../styles/slider.css'
const Slider = () => {
    return (
        <>
            <div class="container-fluid" style={{marginTop:"65px"}}>
                <Carousel>
                    <Carousel.Item>
                        <ExampleCarouselImage text="First slide" img={img1} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <ExampleCarouselImage text="Second slide" img={img2} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <ExampleCarouselImage text="Third slide" img={img3} />
                    </Carousel.Item>
                </Carousel>
            </div>

        </>
    )
}

export default Slider