import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import L from "leaflet";
import { GetAllListing } from "../api/ListingAPI.js";
import { Button } from "@/components/ui/button.js";
const markerIcon = "https://cdn-icons-png.flaticon.com/128/447/447031.png";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useNavigate } from "react-router-dom";
import Spinner from "@/components/Spinner.js";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  post_id: number;
}

interface PropertyWithDetails {
  property: ListingData;
  latlng: [number, number];
  price: number;
}

const Map = () => {
  const [data, setData] = useState<ListingData[]>([]);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [selectedProperties, setSelectedProperties] = useState<
    PropertyWithDetails[]
  >([]);
  const [clickedListingData, setClickedListingData] = useState<ListingData>();
  const [openDrawer, setOpenDrawer] = useState(false);
  const router = useNavigate();
  const [loading, setLoading] = useState(true);
  const [personLatLong, setPersonLatLong] = useState<[number, number] | null>(
    null
  );

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getData() {
      const res = await GetAllListing();
      setData(res.data);
    }
    getData();
    setLoading(false);
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const propertiesArray = data.map((item) => ({
        property: item,
        latlng: [item.latitude, item.longitude] as [number, number],
        price: item.price,
      }));
      setSelectedProperties(propertiesArray);
    }
  }, [data]);

  useEffect(() => {
    if (selectedProperties.length === 0 || !mapContainerRef.current) return; // Exit early if selectedProperties is empty or map container is not yet available

    // Initialize the map
    const map = L.map(mapContainerRef.current);

    // Add tile layer to the map (you can use any tile layer)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Loop through selectedProperties array to add markers
    selectedProperties.forEach(({ property, latlng, price }) => {
      // Create marker with custom icon and add it to the map
      const marker = L.marker(latlng, { icon: customIcon })
        .addTo(map)
        .bindTooltip(`$${price}`, {
          permanent: true,
          className: "custom-tooltip",
        })
        .openTooltip(); // Open tooltip initially

      // Add click event listener to marker
      marker.on("click", () => {
        console.log("Latitude:", latlng[0]);
        console.log("Longitude:", latlng[1]);
        console.log(property);
        setOpenDrawer(true);
        setClickedListingData(property); // Optional: Store clicked property data
      });
    });

    // Set map view based on user's geolocation
    if (personLatLong) {
      map.setView(personLatLong, 13); // Set map view to user's geolocation
    } else {
      // Get user's geolocation
      const askForLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              setPersonLatLong([latitude, longitude]); // Update personLatLong state
            },
            (error) => {
              console.error("Error getting geolocation:", error);
              // Default view if user's location cannot be determined
              map.setView([44, 44], 13); // Set default view to a fallback location
            }
          );
        } else {
          console.error("Geolocation is not supported by this browser.");
        }
      };

      // Call the function to ask for location when the component mounts
      askForLocation();
    }

    // Clean up function to remove the map on component unmount
    return () => {
      map.remove();
    };
  }, [selectedProperties, personLatLong]);

  // Custom marker icon
  const customIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [30, 30], // Size of the icon
    iconAnchor: [15, 30],
    // Point of the icon which will correspond to marker's location
  });

  return (
    <>
      {loading && <Spinner />}
      <div
        ref={mapContainerRef}
        id="map"
        className="z-[0] h-[100vh] relative"
        style={{ width: "100%" }}
      >
        <div className="w-full flex justify-center items-center relative">
          <div
            className="fixed bottom-10 flex gap-4 
z-[8888]"
          >
            <Button
              className="rounded-full bottom-20  py-4 px-6  bg-blue-500 text-white"
              onClick={() => {
                const askForLocation = () => {
                  if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                      (position) => {
                        const { latitude, longitude } = position.coords;
                        setPersonLatLong([latitude, longitude]); // Update personLatLong state
                      },
                      (error) => {
                        console.error("Error getting geolocation:", error);
                        // Default view if user's location cannot be determined
                      }
                    );
                  } else {
                    console.error(
                      "Geolocation is not supported by this browser."
                    );
                  }
                };

                // Call the function to ask for location when the button is clicked
                askForLocation();
              }}
            >
              Ask for Location
            </Button>
            <Button
              className="rounded-full bottom-10  py-4 px-6 "
              onClick={() => router(-1)}
            >
              Go Back
            </Button>
          </div>
        </div>
        <Drawer open={openDrawer}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="text-center">
                Property Details
              </DrawerTitle>
              {clickedListingData && (
                // <div className="flex justify-center items-center flex-col mt-5">
                //   <img
                //     className="h-[40vh] max-w-full rounded-lg"
                //     src={clickedListingData?.gallery_list[0]}
                //     alt="image description"
                //   />
                //   <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                //     Image caption
                //   </figcaption>
                // </div>
                <Carousel className="mt-5">
                  <CarouselContent className="w-full ml-0 h-full relative">
                    {clickedListingData?.gallery_list?.map((image, index) => (
                      <CarouselItem key={index} className="w-full pl-0">
                        <div className=" flex justify-center items-center">
                          <Card className="">
                            <img
                              src={image}
                              className="w-full object-cover rounded-md h-[40vh]"
                              alt={`Image ${index}`}
                            />
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="absolute bottom-7 right-16">
                    <CarouselPrevious className="text-black font-bold  h-6 w-6 left-[-15px]" />
                    <CarouselNext className="text-black font-bold  h-6 w-6" />
                  </div>
                </Carousel>
              )}
              <h2 className="sm:text-2xl text-xl text-black font-semibold pt-1 self-start block sm:mt-10 mt-5 text-start">
                {clickedListingData?.post_title}
              </h2>
              <p className="pt-[10px] text-gray-700 sm:pt-0 text-md md:text-lg font-semibold   md:px-0 md:w-[518px] mb-1 text-start">
                {clickedListingData?.address}
              </p>
              <p className="text-slate-700 text-sm text-start">
                {clickedListingData?.bedrooms} beds -{" "}
                {clickedListingData?.bathrooms} bathrooms
              </p>
              <p className="text-slate-900 text-xl mt-1 font-semibold text-start">
                &#8377;{clickedListingData?.price}
              </p>
            </DrawerHeader>
            <DrawerFooter>
              <div className="flex gap-2 w-full">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setOpenDrawer(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="default"
                  className="w-full"
                  onClick={() => {
                    setOpenDrawer(false);
                    navigate(`/${clickedListingData?.post_id}`);
                  }}
                >
                  View
                </Button>
              </div>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default Map;
