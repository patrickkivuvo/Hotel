import Type from "./Type";

import img1 from "./../assets/images/rooms1.jpg";
import img2 from "./../assets/images/rooms2.jpg";
import img3 from "./../assets/images/rooms3.jpg";
import img4 from "./../assets/images/rooms4.jpg";
import img5 from "./../assets/images/rooms5.jpg";
import img6 from "./../assets/images/rooms6.jpg";
import img7 from "./../assets/images/rooms7.jpg";
import img8 from "./../assets/images/rooms8.jpg";
import img11 from "./../assets/images/rooms11.jpg";
import img12 from "./../assets/images/rooms12.jpg";
import img13 from "./../assets/images/rooms13.jpg";
import img15 from "./../assets/images/rooms15.jpg";
import img16 from "./../assets/images/rooms16.jpg";
import img17 from "./../assets/images/rooms17.jpg";
import img18 from "./../assets/images/rooms18.jpg";

const RoomTypes = () => {
    const rooms = [
        {
            id: 1,
            title: "Superior room",
            description:
                "Experience a relaxing and comfortable stay in the cozy superior room with a beautiful view.",
            capacity: "2 persons (max. 2 persons)",
            rooms: "1 bedroom, 1 bathroom",
            bed: "Twin beds, King Bed",
            imgs: [img1, img2, img3, img4],
        },
        {
            id: 2,
            title: "Deluxe Room",
            description:
                "Deluxe room is classy with indirect lighting on light wood walls that create a bright and cozy mood.",
            capacity: "2 persons (max. 3 persons)",
            rooms: "1 bedroom, 1 bathroom",
            bed: "Twin beds, King Bed",
            imgs: [img5, img6, img7, img8],
        },
        {
            id: 3,
            title: "signature room",
            description:
                "Signature suite offers ultimate dignity and value with a bedroom, living room, office and reception room.",
            capacity: "3 persons (max. 3 persons)",
            rooms: "1 bedroom, 1 bathroom",
            bed: "Twin beds, King Bed",
            imgs: [img11, img12, img13],
        },
        {
            id: 4,
            title: "luxury suite",
            description:
                "Luxury Suite is a spacious room with the living room separated from the bedroom, offerring ultimate comfort and a cozy mood.",
            capacity: "4 persons (max. 4 persons)",
            rooms: "2 bedroom, 2 bathroom",
            bed: "Twin beds, King Bed",
            imgs: [img15, img16, img17, img18],
        },
    ];

    return (
        <div className="room-types">
            <Title />
            <div className="types">
                {rooms.map((roomType) => (
                    <Type key={roomType.id} roomType={roomType} />
                ))}
            </div>
        </div>
    );
};

const Title = () => {
    return (
        <div className="title">
            <h2>stay</h2>
            <p>
                All of our accomodation option compromise luxury amenities such
                as tea & coffee makers, minibars, flat screen televisions,
                fluffy bathrobes and slippers, hair dryers, and exclusive pure
                altitude tolietries.
            </p>
        </div>
    );
};

export default RoomTypes;
