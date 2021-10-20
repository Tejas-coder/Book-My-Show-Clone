import React from "react";

//Components
import Poster from "../Components/Poster/poster.components";
import PlaysFilter from "../Components/PlaysFilter/playsFilter.component";

const Plays = () => {
    return (
        <>
        <div className="mx-auto container px-4 my-12">
            <div className="w-full lg:flex lg:flex-row-reverse gap-8">
                <div className="lg:w-8/12">
                    <h2 className=" text-xl font-bold mx-3 mb-4">Plays in Mumbai</h2>
                    <div className="flex flex-wrap">
                        <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
                            <Poster 
                            src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMyBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315707-rqpsgwxemm-portrait.jpg" 
                            title="Same Same But Different" 
                            subtitle="English/Hindi ₹300" />
                        </div>
                        <div className="w-1/2 my-3  md:w-1/3 lg:w-1/4">
                            <Poster 
                            src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMyBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315707-rqpsgwxemm-portrait.jpg" 
                            title="Same Same But Different" 
                            subtitle="English/Hindi ₹300" />
                        </div>
                        <div className="w-1/2 my-3  md:w-1/3 lg:w-1/4">
                            <Poster 
                            src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMyBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315707-rqpsgwxemm-portrait.jpg" 
                            title="Same Same But Different" 
                            subtitle="English/Hindi ₹300" />
                        </div>
                        <div className="w-1/2 my-3  md:w-1/3 lg:w-1/4">
                            <Poster 
                            src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMyBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315707-rqpsgwxemm-portrait.jpg" 
                            title="Same Same But Different" 
                            subtitle="English/Hindi ₹300" />
                        </div>
                        <div className="w-1/2 my-3  md:w-1/3 lg:w-1/4">
                            <Poster 
                            src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMyBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315707-rqpsgwxemm-portrait.jpg" 
                            title="Same Same But Different" 
                            subtitle="English/Hindi ₹300" />
                        </div>
                        <div className="w-1/2 my-3  md:w-1/3 lg:w-1/4">
                            <Poster 
                            src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMyBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315707-rqpsgwxemm-portrait.jpg" 
                            title="Same Same But Different" 
                            subtitle="English/Hindi ₹300" />
                        </div>
                        <div className="w-1/2 my-3  md:w-1/3 lg:w-1/4">
                            <Poster 
                            src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMyBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315707-rqpsgwxemm-portrait.jpg" 
                            title="Same Same But Different" 
                            subtitle="English/Hindi ₹300" />
                        </div>
                        <div className="w-1/2 my-3  md:w-1/3 lg:w-1/4">
                            <Poster 
                            src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMyBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315707-rqpsgwxemm-portrait.jpg" 
                            title="Same Same But Different" 
                            subtitle="English/Hindi ₹300" />
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/4">
                    <h2 className="text-2xl font-bold mb-4">Filters</h2>
                    <div>
                        <PlaysFilter title="Date" tags={["Today", "Tomorrow", "This weekend"]} />
                        <PlaysFilter title="Language" tags={["Hindi", "Marathi", "English", "Gujarati", "Kannada"]} />
                        <PlaysFilter title="categories" tags={["Theatre"]} />
                        <PlaysFilter title="Genres" tags={["Drama", "Comedy", "Fantasy", "Musical"]} />
                        <PlaysFilter title="More Filter" tags={["Outdoor Events", "Online Events"]} />
                        <PlaysFilter title="Price" tags={["Free", "0-500", "501-2000", "Above 2000"]} />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Plays;