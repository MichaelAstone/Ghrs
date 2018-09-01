import React from 'react';
// import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../styles/JumbotronStyles.scss';
import CarouselImage1 from '../../img/asset39.png';
import CarouselImage2 from '../../img/asset42.png';
import CarouselImage3 from '../../img/asset42.png';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: {CarouselImage1},
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: {CarouselImage2},
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: {CarouselImage3},
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

class Jumbotron extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
          <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
              <img src={item.src} alt={item.altText} />
              <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
      );
    });

    return (
        <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
    );
  }
}

Jumbotron.propTypes = {
  titleText: PropTypes.string,
  bodyText: PropTypes.string,
  buttonText: PropTypes.string,
  imageUrl: PropTypes.string
};

export default Jumbotron;