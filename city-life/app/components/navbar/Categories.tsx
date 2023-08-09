'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiWindmill
} from 'react-icons/gi';
{/* <FontAwesomeIcon icon={faTaxi} /> */}

import { FaBiking, FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { FaPlaneDeparture } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';
import { MdOutlineVilla } from 'react-icons/md';
import { FaTaxi } from 'react-icons/fa';
import { FaCcDinersClub } from 'react-icons/fa';
import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Furnished',
    icon: TbBeach,
    description: 'This is a furnished!',
  },
  {
    label: 'Unfurnished',
    icon: GiWindmill,
    description: 'This is a unfurnished!',
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'This property is modern!'
  },
  {
    label: 'Apartment',
    icon: FaPlaneDeparture,
    description: 'We have a cool apartment for you!'
  },
  {
    label: 'Pools',
    icon: TbPool,
    description: 'This is property has a beautiful pool!'
  },
  {
    label: 'Clubs',
    icon: FaCcDinersClub,
    description: 'This property is on an island!'
  },
  {
    label: 'Resturants',
    icon: GiBoatFishing,
    description: 'We have got a cool and affordable Resturant for you!'
  },
  {
    label: 'Car Renting',
    icon: FaTaxi,
    description: 'you could have your car rented here!'
  },
  {
    label: 'Event Center',
    icon: GiCastle,
    description: 'Do have a party for your family!'
  },
  {
    label: 'Shops for Rent',
    icon: FaShoppingBag,
    description: 'You have a space for use?!'
  },
  {
    label: 'Bikes for Rent',
    icon: FaBiking,
    description: 'How about Bikes!'
  },
  // {
  //   label: 'Arctic',
  //   icon: BsSnow,
  //   description: 'This property is in arctic environment!'
  // },
  // {
  //   label: 'Desert',
  //   icon: GiCactus,
  //   description: 'This property is in the desert!'
  // },
  // {
  //   label: 'Barns',
  //   icon: GiBarn,
  //   description: 'This property is in a barn!'
  // },
  // {
  //   label: 'Lux',
  //   icon: IoDiamond,
  //   description: 'This property is brand new and luxurious!'
  // }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;