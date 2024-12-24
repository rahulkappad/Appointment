import logo from './logo.png'
import GP from './GP.png'
import ProfilePic from './profile_pic.png'
import DropDown from './dropdown.png'
import Grouppic from './group_pic.png'
import Arrow from './arrow.png'
import Header_pic from './header_pic.png'
import banpic from './banner.png'
import verify from './verified.png'
import about from './about.png'
import aboutimg from './about.jpg'
import Contactimg from './Contactimg.avif'
import menu from  './menu.png'
import closeicon from  './closeicon.png'
import upload_icon from  './upload_icon.png'

export const assets = {
    logo,
    GP,
    ProfilePic,
    DropDown,
    Grouppic,
    Arrow,
    Header_pic,
    banpic,
    verify,
    about,
    aboutimg,
    Contactimg,
    menu,
    closeicon,
    upload_icon
}

export const specialityData = {
    Speciality: [
      { Speciality: "General Physician", image: GP },
      { Speciality: "Cardio", image: GP}
    ]
  }
  
export const doctors = [{
    id: '001',
    name: 'Dr.GP',
    speciality :'General Physician',
    image :GP,
    degree: 'MBBS',
    Experience :'5 Years',
    about : 'Good',
    fees:'100',
    address: {
        line1: 'test 1',
        line2: 'test2'
    }},
    {
        id: '002',
        name: 'Dr.Cardio',
        speciality:'Cardio',
        image :GP,
        degree: 'MBBS',
        Experience :'10 Years',
        about : 'Exelent',
        fees:'150',
        address: {
            line1: 'test 1',
            line2: 'test2'
        }
    },
    {
        id: '003',
        name: 'Dr.Cardio2',
        speciality:'Cardio',
        image :GP,
        degree: 'MBBS',
        Experience :'10 Years',
        about : 'Exelent',
        fees:'150',
        address: {
            line1: 'test 1',
            line2: 'test2'
        }
    }
]