import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import L from "leaflet"; // Import Leaflet

const MapComponent = ({
  markerLocation,
  price,
  title,
}: {
  markerLocation: [number, number];
  price: number;
  title: string;
}) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;
    // Initialize the map
    const map = L.map(mapContainerRef.current).setView(markerLocation, 13); // Set center coordinates and zoom

    // Add tile layer to the map (you can use any tile layer)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Create marker popup content (can be customized)
    const popupContent = document.createElement("div");
    popupContent.innerHTML = `<p class='flex justify-center items-center flex-col text-sm'>${title}<br /><span class="text-xs mt-2">$${price}</span>
</p>`;

    // Create marker with popup and add it to the map (popup opens automatically)
    L.marker(markerLocation, {}).bindPopup(popupContent).addTo(map).openPopup();

    // Clean up function to remove the map on component unmount
    return () => {
      map.remove();
    };
  }, [markerLocation]); // Dependency on markerLocation

  return (
    <div
      ref={mapContainerRef}
      id="map"
      className="z-[0] mt-10"
      style={{ width: "100%", height: "400px" }}
    />
  );
};

export default MapComponent;
