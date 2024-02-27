import React from 'react'
import {Carousel,CarouselCategory,HomePageCard,CarouselProduct} from './'
const HomePage = () => {
  return (
    <div className="bg-amazonclone-background">
        <Carousel/>
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
                <HomePageCard
                title={"We Have Surprise for u"}
                image={"../amazon_clone/images/home_grid_1.jpg"}
                link={"Click here"}/>

               <HomePageCard
                title={"Watch The Rings And Power"}
                image={"../amazon_clone/images/home_grid_2.jpg"}
                link={"Click here"}/>

                <HomePageCard
                title={"We Have Surprise for u"}
                image={"../amazon_clone/images/home_grid_3.jpg"}
                link={"Click here"}/>

                <HomePageCard
                title={"We Have Surprise for u"}
                image={"../amazon_clone/images/home_grid_4.jpg"}
                link={"Click here"}/>

                <HomePageCard
                title={"We Have Surprise for u"}
                image={"../amazon_clone/images/home_grid_5.jpg"}
                link={"Click here"}/>

                <HomePageCard
                title={"We Have Surprise for u"}
                image={"../amazon_clone/images/home_grid_6.jpg"}
                link={"Click here"}/>

                <HomePageCard
                title={"We Have Surprise for u"}
                image={"../amazon_clone/images/home_grid_7.jpg"}
                link={"Click here"}/>

                <HomePageCard
                title={"We Have Surprise for u"}
                image={"../amazon_clone/images/home_grid_8.jpg"}
                link={"Click here"}/>

                <div className="m-3 pt-8">
                <img className="xl:hidden" src={"../amazon_clone/images/banner_image_2.jpg"}/>
                </div>
        </div>
        <CarouselProduct/>
        <CarouselCategory/>
        <div className="h-[200px]">
          <img className="h-[100%] m-auto" src={"../amazon_clone/images/banner_image.jpg"}/>
        </div>
    </div>
  )
}

export default HomePage