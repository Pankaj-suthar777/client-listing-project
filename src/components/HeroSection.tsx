import { useEffect, useState } from "react";
import PriceCard from "./PriceCard";
import UserProfile from "./UserProfile";
import { Separator } from "@/components/ui/separator";
import Details from "./Details";
import BottomPrice from "./BottomPrice";
import AppButton from "./AppButton";
import ImageGallery from "@/components/ImageGallery";
import { GetListing } from "../api/ListingAPI";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import MapComponent from "./Map";

interface ListingData {
  address: string;
  bedrooms: number;
  bathrooms: number;
  latitude: number;
  longitude: number;
  post_title: string;
  post_description: string;
  price: number;
  gallery_list: string[];
  user_image: string;
  user_name: string;
  phone: string;
}

function HeroSection() {
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<ListingData | null>(null);
  const [location, setLocation] = useState<[number, number] | null>(null);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const res = await GetListing(Number(id));
        setData(res.data);
        setLoading(false);
        // setLocation({
        //   lat: res.data.latitude,
        //   lng: res.data.longitude,
        // } as LatLng);
        setLocation([Number(res.data.latitude), Number(res.data.longitude)]);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [id]);

  return (
    <>
      {loading && <Spinner />}
      <section className="justify-center w-full flex flex-col px-4 items-center relative">
        <div className="max-w-[1100px] flex flex-col">
          <h2 className="text-[32px] text-black font-medium sm:py-6 py-5 self-start sm:block hidden">
            {data?.post_title}
          </h2>
          <div>
            {data?.gallery_list && <ImageGallery images={data?.gallery_list} />}
          </div>
          <div className="grid grid-cols-6 sm:gap-5 gap-3 sm:py-5 py-1 relative">
            <div className="col-span-4">
              <h2 className="text-2xl text-black font-semibold pt-1 self-start mt-2 sm:hidden block">
                {data?.post_title}
              </h2>
              <p className="pt-[10px] sm:pt-0 text-md md:text-[25px] font-semibold text-black  md:px-0 md:w-[518px] md:mb-5">
                {data?.address}
              </p>
              <p className="text-slate-700 text-sm mt-1">
                {data?.bedrooms} beds - {data?.bathrooms} bathrooms
              </p>
              <p className="mt-2">
                <i className="ri-star-fill mr-2 "></i>
                <span className="font-thin">No reviews yet</span>
              </p>
              <Separator className="my-4 w-full" />
              <UserProfile
                user_name={data?.user_name}
                phone={data?.phone || "no phone"}
              />
              <Separator className="my-4 w-full" />
              <Details data={data} />
              <Separator className="my-4 w-full" />
              <div className="w-[90vw] mb-[50px]">
                <span className="my-[28px] text-lg md:text-[20px] font-medium text-black  md:px-0 md:w-[518px] ">
                  About this place
                </span>
                <p className="mt-5  w-full text-md ">
                  {data?.post_description}
                </p>
              </div>
            </div>

            <div className="col-span-2 mt-5 md:block   hidden">
              <PriceCard price={data?.price || 0} />
              <div className="sm:flex hidden mt-10 ">
                <AppButton />
              </div>
            </div>

            <div className="fixed bottom-0 md:hidden visible bg-white border-t border-black left-0 right-0 px-8 z-[100]">
              <BottomPrice price={data?.price || "error"} />
            </div>
          </div>
          <div className="sm:hidden flex">
            <AppButton />
          </div>
          {location && (
            <MapComponent
              markerLocation={location}
              price={data?.price || 0}
              title={data?.post_title || "error"}
            />
          )}
        </div>
      </section>
    </>
  );
}

export default HeroSection;
