import pin from '../assets/pin.png';
import date from '../assets/calender.png';
import invoice from '../assets/invoice.png';
import technician from '../assets/technician.png';

export type Excellence = {
  title: string;
  listOfExcellence: {
    id: number;
    title: string;
    icon: string;
    description: string;
  }[];
};

export const excellence: Excellence[] = [
  {
    title: 'Keunggulan Kami',
    listOfExcellence: [
      {
        id: 1,
        title: 'Tandai Lokasi',
        icon: pin,
        description: 'Tandai lokasi mudah lewat Maps',
      },
      {
        id: 2,
        title: 'Atur Jadwal',
        icon: date,
        description: 'Atur jadwal sesuai waktu luang kamu',
      },
      {
        id: 3,
        title: 'Invoice Digital',
        icon: invoice,
        description: 'Invoice digital tanpa repot',
      },
      {
        id: 4,
        title: 'Teknisi Andal',
        icon: technician,
        description: 'Teknisi berpengalaman & terpercaya',
      },
    ],
  },
];
